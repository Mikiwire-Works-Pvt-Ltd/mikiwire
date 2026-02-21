/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/mikiwire',
    assetPrefix: '/mikiwire/',
};

export default nextConfig;
