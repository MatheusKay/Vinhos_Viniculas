import { useDispatch } from 'react-redux'

import { Cart, AsideCart, CardCart, AsideCartFooter } from './style'

import { Vinhos } from '../../services/api'
import { CartOpen, RmvCartList } from '../../store/reducer'
import { formattedPrice, getTotalPrice } from '../../utility'

type Props = {
  addWines: Vinhos[]
  isOpen: boolean
}

const Carrinho = ({ addWines, isOpen }: Props) => {
  const dispatch = useDispatch()

  return (
    <>
      {isOpen && (
        <Cart>
          <div onClick={() => dispatch(CartOpen())} className="overlay"></div>
          <AsideCart>
            <div className="header_cart">
              <button onClick={() => dispatch(CartOpen())}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
              </button>
              <div className="header_cart_name">
                <h3>Meu carrinho</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-cart3"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
              </div>
            </div>
            <h2 className="text_subTitle">
              Produtos <span>({addWines.length})</span>
            </h2>
            <ul className="cards_list">
              {addWines && (
                <>
                  {addWines.map(
                    ({ id, title, category, price, imgs, country }) => (
                      <CardCart key={id}>
                        <img
                          src={imgs.img_url}
                          alt={'Imagem do vinho ' + title}
                        />
                        <div className="card_infos">
                          <h4>{title}</h4>
                          <div className="card_tags">
                            <span>{category}</span>
                            <span>{price}</span>
                            <img
                              src={imgs.country_url}
                              alt={'Vinho do ' + country}
                            />
                          </div>
                          <h3>{formattedPrice(price)}</h3>
                          <div className="card_footer">
                            <div className="card_select">
                              <button className="card_select_left">+</button>
                              <span>1</span>
                              <button className="card_select_right">-</button>
                            </div>
                            <button
                              onClick={() => dispatch(RmvCartList(title))}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-trash3-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </CardCart>
                    )
                  )}
                </>
              )}
            </ul>
            <AsideCartFooter>
              <h3 className="sub_title_price">
                Total: {formattedPrice(getTotalPrice(addWines))}
              </h3>
              <p className="sub_text_frete">
                Frete: <span>Grátis</span>
              </p>
              <button className="btn_compra">Continuar com Pagamento</button>
            </AsideCartFooter>
          </AsideCart>
        </Cart>
      )}
    </>
  )
}

export default Carrinho
