import { Poster } from './style'

type Props = {
  linkImg: string
  altImg: string
}

const PosterWines = ({ linkImg, altImg }: Props) => (
  <>
    <Poster src={linkImg} alt={altImg} />
  </>
)

export default PosterWines
