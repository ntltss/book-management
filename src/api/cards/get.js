const axios = require('axios')

export const get = async () => {
  const res = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        // console.log("aaaaaaaaaaaaaaaaaaaaaaaa")
        data: "lorem ipsum ..."
      })}, 1000)
  })
  console.log(res)
  return res
}