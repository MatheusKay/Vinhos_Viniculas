import { Wines } from '../services/api'

export const filterWines = (
  opcao: Wines[],
  filtro: string,
  filtroCountry: string
) => {
  if (filtro.length > 0 && filtroCountry.length > 0) {
    const filtrar = opcao?.filter((wine) => wine.category === filtro)
    const filtrarCountry = filtrar.filter(
      (wine) => wine.country === filtroCountry
    )

    return filtrarCountry
  } else if (filtroCountry.length > 0) {
    const filtrar = opcao?.filter((wine) => wine.country === filtroCountry)

    return filtrar
  } else if (filtro.length > 0) {
    const filtrar = opcao?.filter((wine) => wine.category === filtro)

    return filtrar
  }

  return opcao
}

export const bestSellers = (lwines: Wines[]) => {
  const somaVendas = lwines.reduce((acc, wine) => acc + wine.sold, 0)

  const mediaVendas = somaVendas / lwines.length

  const filtroVendas = lwines.filter((wine) => wine.sold > mediaVendas)

  return filtroVendas
}

export const wineHighlights = (lwines: Wines[]) => {
  const somaFavoritos = lwines.reduce((acc, wine) => acc + wine.favorites, 0)

  const mediaFavoritos = somaFavoritos / lwines.length

  const filtroVendas = lwines.filter((wine) => wine.favorites > mediaFavoritos)

  return filtroVendas
}

export const formattedPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const getTotalPrice = (items: Wines[]) => {
  return items.reduce((accumulator, currentItem) => {
    if (currentItem.price) {
      return (accumulator += currentItem.price)
    }
    return 0
  }, 0)
}
