import { Poster } from './style'

type Props = {
  linkImg: string
  altImg: string
}

const PosterVinhos = ({ linkImg, altImg }: Props) => (
  <>
    <Poster src={linkImg} alt={altImg} />
  </>
)

export default PosterVinhos
