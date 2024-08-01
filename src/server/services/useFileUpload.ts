import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"
import env from "@env/index"

export const s3Uploads = async (file: any, location: string) => {
  const s3 = new S3Client({
    region: env.AWS_REGION_NAME,
    credentials: { accessKeyId: env.AWS_ACCESS_KEY_VALUE, secretAccessKey: env.AWS_SECRET_KEY_VALUE },
  })
  const param: any = {
    Bucket: env.AWS_BUCKET_NAME,
    Key: `${location}/${Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))}-${file.originalname}`,
    Body: file.buffer,
  }
  const command = new PutObjectCommand(param)

  return await s3
    .send(command)
    .then(() => param.Key)
    .catch((error) => error)
}
