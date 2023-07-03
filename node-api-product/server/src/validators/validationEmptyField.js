const isEmpty = (description, price, type) => {
  if (!description) 
    return true;

  if (!type) 
    return true;

  if (!price)
    return true;

  return false;
}
export default isEmpty