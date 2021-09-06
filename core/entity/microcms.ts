export type Contents<T> = {
    contents: [T]
    totalCount: number
    offset: number
    limit: number
}

export type Image = {
    url: string
    height: number
    width: number
}
