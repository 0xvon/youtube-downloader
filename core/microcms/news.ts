import { createClient } from "microcms-js-sdk"
import { NewsEntity, MicroCMSEntity } from "../entity"

const client = createClient({
    serviceDomain: process.env.NEXT_PUBLIC_API_DOMAIN ?? "",
    apiKey: process.env.NEXT_PUBLIC_API_KEY ?? "",
})

export const listNews = async (): Promise<NewsEntity.News[]> => {
    const res = await client.get<MicroCMSEntity.Contents<NewsEntity.News>>({
        endpoint: "news",
        queries: {
            orders: "-createdAt",
        },
    })
    return res.contents
}

export const getNewsById = async (
    newsId: NewsEntity.News["id"]
): Promise<NewsEntity.News | undefined> => {
    const res = await client.get<MicroCMSEntity.Contents<NewsEntity.News>>({
        endpoint: "news",
        queries: {
            ids: newsId,
        },
    })
    return res.contents[0]
}
