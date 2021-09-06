import { Image } from "./microcms"

export type News = {
    id: string
    title: string
    thumbnail: Image
    text: string
    createdAt: Date
    updatedAt: Date
    publishedAt: Date
    revisedAt: Date
}
