import type { NextPage } from "next"
import { useState } from "react"
import Head from "next/head"
import { DownloadForm } from "../components"
import { Flex, Text, Button, Link } from "@chakra-ui/react"
import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

const Home: NextPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [videoId, setVideoId] = useState<string | undefined>()
    const { data } = useSWR(videoId ? `/api/${videoId}` : null, fetcher)
    const submitButtonTapped = async (videoUrl: string) => {
        setIsLoading(true)
        const videoId = videoUrl.split("v=").slice(-1)[0]
        setVideoId(videoId)
        setIsLoading(false)
    }

    return (
        <div>
            <Head>
                <title>YouTube Downloader</title>
                <meta name="description" content="YouTube Downloader" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Flex
                direction="column"
                align="center"
                justify="center"
                m="20px auto"
                fontSize="4xl"
                fontWeight="700"
            >
                <Text textAlign="center">YouTube Downloader</Text>
                <DownloadForm.Component
                    isLoading={isLoading}
                    submitAction={submitButtonTapped}
                />
                {data ? (
                    <Link href={"/" + data.url} m="40px auto" download>
                        <Button width="300px" height="60px" colorScheme="blue">
                            ダウンロード
                        </Button>
                    </Link>
                ) : null}
            </Flex>
        </div>
    )
}

export default Home
