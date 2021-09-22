/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        domains: ["images.microcms-assets.io"],
    },
    webpack: (config, { isServer }) => {
        if (!isServer) config.resolve.fallback.fs = false
        return config
    },
    routes: [{ src: "^/static/(.*)", dest: "/static/$1" }],
}
