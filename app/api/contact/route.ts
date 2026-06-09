import { NextResponse } from 'next/server'
import {
  WEB3FORMS_SUBMIT_URL,
  type ContactFormPayload,
  type Web3FormsResponse,
} from '@/lib/web3forms'

export async function POST(request: Request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY

  if (!accessKey) {
    return NextResponse.json(
      { success: false, message: 'Contact form is not configured.' },
      { status: 500 },
    )
  }

  let body: ContactFormPayload

  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid request body.' },
      { status: 400 },
    )
  }

  const { name, email, message, company, phone } = body

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { success: false, message: 'Name, email, and message are required.' },
      { status: 400 },
    )
  }

  const response = await fetch(WEB3FORMS_SUBMIT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      company: company?.trim() || undefined,
      phone: phone?.trim() || undefined,
      subject: `New contact from ${name.trim()}`,
      from_name: 'Clockwise Technologies Website',
    }),
  })

  const data = (await response.json()) as Web3FormsResponse

  if (!response.ok || !data.success) {
    return NextResponse.json(
      { success: false, message: data.message || 'Failed to send message.' },
      { status: response.status || 502 },
    )
  }

  return NextResponse.json({ success: true, message: data.message })
}
