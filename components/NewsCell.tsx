import { NewsEntity } from "../core/entity"
import { forwardRef } from "react"
import { formatDate } from "./common"

interface Props {
    news: NewsEntity.News
}

export const NewsCell = forwardRef<HTMLDivElement, Props>((props, ref) => {
    return (
        <div className="group relative" ref={ref}>
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                    src={props.news.thumbnail.url}
                    alt={props.news.title}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        <a href={`/news/${props.news.id}`}>
                            <span
                                aria-hidden="true"
                                className="absolute inset-0"
                            />
                            {props.news.title}
                        </a>
                    </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                    {formatDate(new Date(props.news.publishedAt), "yyyy/MM/dd")}
                </p>
            </div>
        </div>
    )
})
