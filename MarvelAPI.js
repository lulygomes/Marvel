/* eslint-disable */
import axios from 'axios'
import md5 from 'js-md5'
const PUBLIC_KEY = '-'
const PRIVATE_KEY = '-'

export default {
  getAllComics: (limit, callback) => {
    const timestamp = Number(new Date().getTime())
    const hash = md5.create()
    hash.update(timestamp + PUBLIC_KEY + PRIVATE_KEY)
    const urlBaseMarvel = `https://gateway.marvel.com/v1/public/characters?limit=${limit}&api_key=${PUBLIC_KEY}&ts=${timestamp}&hash=${hash.hex()}`

    const urlComics = urlBaseMarvel
    axios.get(urlComics).then((comics) => {
      if (callback) {
        callback(comics)
      }
    })
  }
}
