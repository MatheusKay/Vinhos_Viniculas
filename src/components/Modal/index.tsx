import { useDispatch, useSelector } from 'react-redux'

import { Botao, CardModal, ModalContainer } from './style'

import { RootReducer } from '../../store'
import { AddCartList, openModal } from '../../store/reducer'
import { formattedPrice } from '../../utility'

const Modal = () => {
  const { isOpenModal, modal } = useSelector(
    (state: RootReducer) => state.state
  )

  const dispatch = useDispatch()

  return (
    <>
      {isOpenModal && (
        <ModalContainer>
          <CardModal>
            <img
              className="img_wine"
              src={modal.imgs.img_url}
              alt={modal.title}
            />
            <div className="close_modal">
              <button onClick={() => dispatch(openModal())}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  className="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
              </button>
            </div>
            <div className="infos">
              <div className="infos_card">
                <div className="infos_header">
                  <h2>{modal.title}</h2>
                  <p>{formattedPrice(modal.price)}</p>
                </div>
                <div className="infos_tags">
                  <span>{modal.country}</span>
                  <span>750ml</span>
                  <img src={modal.imgs.country_url} alt={modal.country} />
                </div>
              </div>
              <Botao>
                <button onClick={() => dispatch(AddCartList(modal))}>
                  Comprar
                </button>
              </Botao>
            </div>
          </CardModal>
        </ModalContainer>
      )}
    </>
  )
}

export default Modal
