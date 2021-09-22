import { NextApiRequest, NextApiResponse } from "next"
import { YoutubeDownloader } from "../../core"
import fs from "fs"
// import path from "path"

const api = (req: NextApiRequest, res: NextApiResponse) => {
    const videoId = req.query.id as string
    const link = `static/${videoId}.mp4`

    if (fs.existsSync(link)) {
        res.status(200).json({ url: link })
    } else {
        YoutubeDownloader.download(videoId, () => {
            res.status(200).json({ url: link })
        })
    }
}

export default api
