import { S3Client } from '@aws-sdk/client-s3'

export const getS3Client = () => {
  const s3Client = new S3Client({
    endpoint: process.env.FILES_STORAGE_HOST,
    region: process.env.FILES_STORAGE_REGION,
    credentials: {
      accessKeyId: process.env.YC_SA_KEY_ID!,
      secretAccessKey: process.env.YC_SA_SECRET_KEY!,
    },
  })

  return s3Client
}
