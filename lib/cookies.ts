export function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}=([^;]*)`),
  )
  return match ? decodeURIComponent(match[1]) : null
}

export function setCookie(name: string, value: string, days = 365) {
  const expires = new Date(Date.now() + days * 86_400_000).toUTCString()
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires};path=/;SameSite=Lax`
}

export function hasSeenPopup(id: string) {
  return getCookie(`cw_popup_${id}`) === '1'
}

export function markPopupSeen(id: string) {
  setCookie(`cw_popup_${id}`, '1')
}
