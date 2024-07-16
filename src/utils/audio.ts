function playNotification(): void {
  const audio = new Audio('./notification.mp3')
  audio.play()
}

export { playNotification }
