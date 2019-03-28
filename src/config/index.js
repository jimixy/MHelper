
const config = {
  isOnline: process.env.NODE_ENV === 'production',
  baseUrl: 'https://api.mhelper.co',
  imgApi: 'http://file.mhelper.co/image/'
}

config.baseUrl = config.isOnline ? 'https://api.mhelper.co' : config.baseUrl

export default config
