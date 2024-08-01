import database from "@config/db/database"
import { Task, Users } from "@config/db/types"
import { publicProcedure, router } from "@config/trpc"
import { hashPassword } from "@service/useCustoms"
import { verifyPassword } from "@service/useToken"
import { TRPCError } from "@trpc/server"
import { z } from "zod"

export const appRouter = router({
  sayHi: publicProcedure.query(() => {
    return "Hi"
  }),
  user: {
    findById: publicProcedure.input(z.string()).query(async (opts) => {
      const { input } = opts
      const user = await database<Users>("users")
        .where("email", input)
        .first()
        .returning(["id", "first_name", "last_name", "email", "created_at", "updated_at", "profile"])
      return user
    }),
    create: publicProcedure
      .input(z.object({ first_name: z.string(), last_name: z.string(), email: z.string(), password: z.string() }))
      .mutation(async (opts) => {
        const { input } = opts
        const { first_name, last_name, email, password } = input
        const checkIfEmailExist = await database<Users>("users").where("email", email).first()
        if (checkIfEmailExist) throw new TRPCError({ code: "BAD_REQUEST", message: "Email already exist" })

        const hashedPassword = hashPassword(password)
        const newTask = await database<Users>("users")
          .insert({
            first_name,
            last_name,
            email,
            password: hashedPassword,
            profile: "",
            phone: "",
          })
          .returning(["id", "first_name", "last_name", "email", "created_at", "updated_at", "profile"])

        return newTask
      }),

    login: publicProcedure.input(z.object({ email: z.string(), password: z.string() })).mutation(async (opts) => {
      const { input } = opts
      const getUserByEmail = await database<Users>("users").where("email", input.email).first()
      if (!getUserByEmail) {
        throw new TRPCError({ code: "BAD_REQUEST", message: "Email does not exist" })
      }
      const confirmPassword = verifyPassword(input.password, getUserByEmail.password)
      if (!confirmPassword) throw new TRPCError({ code: "BAD_REQUEST", message: "Email/Password does not match" })
      if (confirmPassword) {
        return getUserByEmail
      }
    }),
  },

  tasks: {
    alltask: publicProcedure.input(z.number()).query(async (opts) => {
      const { input } = opts
      const task = await database<Task>("tasks").where("user_id", input)
      return task
    }),
    findById: publicProcedure.input(z.number()).query(async (opts) => {
      const { input } = opts
      const task = await database<Task>("tasks").where("id", input).first()
      return task
    }),
    create: publicProcedure
      .input(z.object({ name: z.string(), description: z.string(), user_id: z.number() }))
      .mutation(async (opts) => {
        const { input } = opts
        const { name, description, user_id } = input
        const newTask = await database<Task>("tasks")
          .insert({ name, description, user_id })
          .returning(["id", "name", "description", "user_id"])
        return newTask
      }),
    update: publicProcedure
      .input(z.object({ id: z.number(), name: z.string(), description: z.string(), user_id: z.number() }))
      .mutation(async (opts) => {
        const { input } = opts
        const { id, name, description } = input
        const task = await database<Task>("tasks").where("id", id).first().update({ name, description })
        return task
      }),
    delete: publicProcedure.input(z.number()).mutation(async (opts) => {
      const { input } = opts
      const task = await database<Task>("tasks").where("id", input).first().delete()
      return task
    }),
  },
})
