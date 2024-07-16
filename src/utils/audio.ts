function playNotification(): void {
  const audio = new Audio('./notification.mp3')
  console.log('Playing notification sound', audio)
  audio.play()
}

export { playNotification }
