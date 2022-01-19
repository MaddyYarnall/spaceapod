import axios from 'axios'
import { AppState } from '../AppState.js'
import { Image } from '../models/Image.js'

const apiKey = 'api_key=cZPsVrOesqikZgSjkLPSg9OeRoSBha53DQgdOPrw'

const spaceApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/'
})

class ImagesService {
  async getImage() {
    const res = await spaceApi.get('apod?' + apiKey)
    console.log(res.data)
    AppState.image = new Image(res.data)
  }
}

export const imagesService = new ImagesService()