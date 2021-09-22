import ytdl from "ytdl-core"
import readline from "readline"
import fs from "fs"

const BASE_PATH = `https://www.youtube.com/watch?v=`

export const download = (videoId: string, callback: () => void) => {
    const url = BASE_PATH + videoId
    const link = `static/${videoId}.mp4`
    const video = ytdl(url, { quality: "highest" })
    let starttime: number
    video.pipe(fs.createWriteStream(link))

    video.once("response", () => {
        starttime = Date.now()
    })
    video.on("progress", (chunkLength, downloaded, total) => {
        const percent = downloaded / total
        const downloadedMinutes = (Date.now() - starttime) / 1000 / 60
        const estimatedDownloadTime =
            downloadedMinutes / percent - downloadedMinutes
        readline.cursorTo(process.stdout, 0)
        process.stdout.write(`${(percent * 100).toFixed(2)}% downloaded `)
        process.stdout.write(
            `(${(downloaded / 1024 / 1024).toFixed(2)}MB of ${(
                total /
                1024 /
                1024
            ).toFixed(2)}MB)\n`
        )
        process.stdout.write(
            `running for: ${downloadedMinutes.toFixed(2)}minutes`
        )
        process.stdout.write(
            `, estimated time left: ${estimatedDownloadTime.toFixed(2)}minutes `
        )
        readline.moveCursor(process.stdout, 0, -1)
    })
    video.on("end", () => {
        callback()
    })
}
