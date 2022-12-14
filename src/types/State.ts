import tvShow from "./TvShow"

export default interface State {
  tvShowsCollection: Array<tvShow>
  hasRendered: boolean
  totalImages: number
  imageCount: number
}
