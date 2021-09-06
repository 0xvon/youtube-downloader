import { NewsEntity } from "../core/entity"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { forwardRef } from "react"

interface Props {
    news: NewsEntity.News
}

// eslint-disable-next-line react/display-name
export const NewsCell = forwardRef<HTMLAnchorElement, Props>((props, ref) => {
    return (
        <a href={`/news/${props.news.id}`} ref={ref} className={styles.card}>
            <Image
                src={props.news.thumbnail.url}
                alt={props.news.title}
                width={300}
                height={100}
            />
            <h3>{props.news.title}</h3>
            <p>{props.news.text}</p>
        </a>
    )
})
