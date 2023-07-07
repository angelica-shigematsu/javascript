const regExIsEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
const regExHasNumber = /[0-9]/
const regexHasSpecialCharacter = /[^a-zA-Z 0-9]+/
const regexHasCharacter = /[a-zA-Z]+/

const validatorDataUser = (fullName, email, password, level) => {

  if (!email || !regExIsEmail.test(email)) 
    return true;
  
  if (!fullName || regExHasNumber.test(fullName))
    return true;

  if (!regexHasSpecialCharacter.test(password))
    return true;

  if (!regexHasCharacter.test(password))
    return true;

  if (!regExHasNumber.test(password))
    return true

  if (!password || password.length < 8)
    return true;

  if (regExHasNumber.test(level))
    return true;

  return false
}

export {
  validatorDataUser
}