const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.NODE_ENV === 'development'
          ? 'http://127.0.0.1:8000/:path*'
          : `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
      },
    ]
  },
}

module.exports = nextConfig