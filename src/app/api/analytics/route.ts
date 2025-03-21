import { PrismaClient } from '@prisma/client'
import dayjs from 'dayjs'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const prisma = new PrismaClient({
  datasourceUrl: process.env.UMAMI_DATABASE_URL
})

export const GET = async () => {
  try {
    const result: [
      {
        /**
         * Number of unique visitors in the last 5 minutes.
         */
        x: bigint
      }
    ] = await prisma.$queryRaw`
      select count(distinct session_id) x
      from website_event
      where website_id = ${process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
      and created_at >= ${dayjs().subtract(5, 'minutes').toISOString()}
    `

    return NextResponse.json({
      visitors: Number(result[0].x)
    })
  } catch {
    return NextResponse.json(
      {
        error: 'Error getting analytics stats'
      },
      {
        status: 500
      }
    )
  }
}
