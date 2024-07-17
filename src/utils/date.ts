function getDays(checkIn: string, checkOut: string) {
  if (!checkIn || !checkOut) return 0

  if (checkIn === checkOut) return 1

  const start = new Date(checkIn)
  const end = new Date(checkOut)
  const diff = Math.abs(end.getTime() - start.getTime())
  return Math.ceil(diff / (1000 * 60 * 60 * 24))
}

function formatDate(date: string) {
  if (!date) return ''

  const dateObject = new Date(`${date}T00:00:00`)
  return dateObject.toLocaleDateString('pt-BR')
}

export { getDays, formatDate }
