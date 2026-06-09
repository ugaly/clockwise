export const WEB3FORMS_SUBMIT_URL = 'https://api.web3forms.com/submit'

export const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ''

export type ContactFormPayload = {
  name: string
  email: string
  message: string
  company?: string
  phone?: string
}

export type Web3FormsResponse = {
  success: boolean
  message: string
}

export async function submitContactForm(
  payload: ContactFormPayload,
): Promise<Web3FormsResponse> {
  const accessKey = WEB3FORMS_ACCESS_KEY

  if (!accessKey) {
    throw new Error('Contact form is not configured.')
  }

  const response = await fetch(WEB3FORMS_SUBMIT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      name: payload.name.trim(),
      email: payload.email.trim(),
      message: payload.message.trim(),
      company: payload.company?.trim() || undefined,
      phone: payload.phone?.trim() || undefined,
      subject: `New contact from ${payload.name.trim()}`,
      from_name: 'Clockwise Technologies Website',
    }),
  })

  const raw = await response.text()

  if (!raw.trim()) {
    throw new Error('Email service returned an empty response.')
  }

  let data: Web3FormsResponse
  try {
    data = JSON.parse(raw) as Web3FormsResponse
  } catch {
    throw new Error('Email service returned an invalid response.')
  }

  if (!response.ok || !data.success) {
    throw new Error(data.message || 'Failed to send message.')
  }

  return data
}
