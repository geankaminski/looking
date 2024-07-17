function validateEmail(email: string): boolean {
  if (!email) return false

  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

function validateCardNumber(cardNumber: string): boolean {
  if (!cardNumber) return false

  const re = /^[0-9]{16}$/
  return re.test(cardNumber)
}

export { validateEmail, validateCardNumber }
