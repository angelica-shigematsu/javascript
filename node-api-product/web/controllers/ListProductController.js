export const ListProductAlphaComponent = (products) => {

  const sortProducts = products.sort((a, b) => a.name.localeCompare(b.name))

  return sortProducts
}
