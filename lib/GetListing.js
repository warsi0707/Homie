import { prisma } from "./PrismaProvider"


export default async function GetListing() {
    const data = await prisma.property.findMany({})
  return (
    data
  )
}
