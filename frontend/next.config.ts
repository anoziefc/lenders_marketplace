/** @type {import("next").NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "placehold.co",
                port: "",
                pathname: "**"
            },
            {
                protocol: "https",
                hostname: "framerusercontent.com",
                port: "",
                pathname: "**"
            },
            {
                protocol: "https",
                hostname: "cdn.prod.website-files.com",
                port: "",
                pathname: "**"
            }
        ]
    }
};

module.exports = nextConfig;
