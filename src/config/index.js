
const config = {
  isOnline: process.env.NODE_ENV === 'production',
  baseUrl: '"https://api.mhelper.co"',
  imgApi: '"http://file.mhelper.co/image/"'
}

config.baseUrl = config.isOnline ? 'http://192.168.1.49:8080' : config.baseUrl

export default config
