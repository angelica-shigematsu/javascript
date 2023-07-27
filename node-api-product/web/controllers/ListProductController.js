const ListProductAlpha = (products) => {

  const sortProducts = products.sort((a, b) => a.name.localeCompare(b.name))

  return sortProducts
}

const ListByPrice5To25 = (products) => {7

  let filterByPrice = products.filter(product => product.price >= 5 && product.price <= 25)

  return sortProducts(filterByPrice)
}

const ListByPrice26To45 = (products) => {
  let filterByPrice = products.filter(product => product.price >= 26 && product.price <= 45)

  return sortProducts(filterByPrice)
}

const ListByPrice46ToMore = (products) => {
  let filterByPrice = products.filter(product => product.price > 46 )

  return sortProducts(filterByPrice)
}

const sortProducts = (products) => {
  const sortProducts = products.sort((a, b) => a.price - b.price)

  return sortProducts
}

const FilterByDrink = (products) => {
  let drinks = products.filter(product => product.type == 'Bebidas')

  return drinks
}

const FilterByPizza = (products) => {
  let drinks = products.filter(product => product.type == 'Pizza')

  return drinks
}

const FilterByPastel = (products) => {
  let drinks = products.filter(product => product.type == 'Pastel')

  return drinks
}

const FilterByAcai = (products) => {
  let drinks = products.filter(product => product.type == 'Açaí')

  return drinks
}

export {
  FilterByDrink,
  FilterByPizza,
  FilterByPastel,
  FilterByAcai,
  ListProductAlpha,
  ListByPrice26To45,
  ListByPrice46ToMore,
  ListByPrice5To25,
}