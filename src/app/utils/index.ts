export const GOOGLE_API = process.env.NEXT_PUBLIC_GOOGLE_API as string

export const trim = (str: string, length: number) => {
  return str?.length > length ? str?.slice(0, length + 1) + "..." : str
}

export const now = Date.now()

export const encodeImage = (img: string) => encodeURI(img).replace("(", "%28").replace(")", "%29")

export type Options = { id?: string | number; name: string; url: string; image?: string; createdAt?: Date }
