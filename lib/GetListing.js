import { prisma } from "./PrismaProvider"


export default async function GetListing() {
  try{
    const data = await prisma.property.findMany({
      take:6,
      orderBy:{
        createdAt:'desc'
      }
    })
    return (
    data
  )
  }catch(err){
    console.log(err)
  }
  
}
