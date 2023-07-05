const regExHasString = /[a-z]/
const regExHasNumber = /[0-9]/
const validatorData = (name, description, price, category, photo) => {

  if (!name || regExHasNumber.test(name)) 
    return true;

  if (!description || regExHasNumber.test(description)) 
    return true;

  if (!category || regExHasNumber.test(category))
    return true;

  if (!price || regExHasString.test(price))
    return true;

  if (!photo)
    return true;

  return false;
}

export { 
  validatorData
}