export default interface TvShow {
  genres: Array<string>
  name: string
  id: number
  image: {
    original: string
  }
  language: string
  network: {
    name: string
  }
  summary: string
  rating: {
    average: number
  }
}
