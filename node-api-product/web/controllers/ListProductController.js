export const ListProductAlpha = (products) => {

  const sortProducts = products.sort((a, b) => a.name.localeCompare(b.name))

  return sortProducts
}

export const ListByPrice5To25 = (products) => {7

  let filterByPrice = products.filter(product => product.price >= 5 && product.price <= 25)

  return sortProducts(filterByPrice)
}

export const ListByPrice26To45 = (products) => {
  let filterByPrice = products.filter(product => product.price >= 26 && product.price <= 45)

  return sortProducts(filterByPrice)
}

export const ListByPrice46ToMore = (products) => {
  let filterByPrice = products.filter(product => product.price > 46 )

  return sortProducts(filterByPrice)
}

const sortProducts = (products) => {
  const sortProducts = products.sort((a, b) => a.price - b.price)

  return sortProducts

}