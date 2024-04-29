import { Vinhos } from '../services/api'

export const listVinhos = (lVinhos: Vinhos[]) => {
  const newVinhos = lVinhos.slice()

  for (let i = newVinhos.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newVinhos[i], newVinhos[j]] = [newVinhos[j], newVinhos[i]]
  }
  return newVinhos
}

export const filtrarVinhos = (
  opcao: Vinhos[],
  filtro: string,
  filtroCountry: string
) => {
  if (filtro.length > 0 && filtroCountry.length > 0) {
    const filtrar = opcao?.filter((vinho) => vinho.category === filtro)
    const filtrarCountry = filtrar.filter(
      (vinho) => vinho.country === filtroCountry
    )

    return filtrarCountry
  } else if (filtroCountry.length > 0) {
    const filtrar = opcao?.filter((vinho) => vinho.country === filtroCountry)

    return filtrar
  } else if (filtro.length > 0) {
    const filtrar = opcao?.filter((vinho) => vinho.category === filtro)

    return filtrar
  }

  return opcao
}

export const maisVendidos = (lVinhos: Vinhos[]) => {
  const somaVendas = lVinhos.reduce((acc, vinho) => acc + vinho.sold, 0)

  const mediaVendas = somaVendas / lVinhos.length

  const filtroVendas = lVinhos.filter((vinho) => vinho.sold > mediaVendas)

  const listNew = listVinhos(filtroVendas)

  return listNew
}

export const destaques = (lVinhos: Vinhos[]) => {
  const somaFavoritos = lVinhos.reduce((acc, vinho) => acc + vinho.favorites, 0)

  const mediaFavoritos = somaFavoritos / lVinhos.length

  const filtroVendas = lVinhos.filter(
    (vinho) => vinho.favorites > mediaFavoritos
  )

  const listNew = listVinhos(filtroVendas)

  return listNew
}
