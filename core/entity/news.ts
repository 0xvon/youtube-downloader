import { Image } from "./microcms"

export type News = {
    id: string
    title: string
    thumbnail: Image
    text: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
}
