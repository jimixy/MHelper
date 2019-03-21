
export const isWeixin = function () {
  const u = navigator.userAgent.toLowerCase()
  return u.match(/MicroMessenger/i) === 'micromessenger'
}
