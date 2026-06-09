import { NextResponse } from 'next/server'
import {
  WEB3FORMS_SUBMIT_URL,
  type ContactFormPayload,
  type Web3FormsResponse,
} from '@/lib/web3forms'

export const runtime = 'nodejs'

async function parseJsonSafe<T>(response: Response): Promise<T | null> {
  const text = await response.text()
  if (!text.trim()) return null
  try {
    return JSON.parse(text) as T
  } catch {
    return null
  }
}

export async function POST(request: Request) {
  try {
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY

    if (!accessKey) {
      return NextResponse.json(
        { success: false, message: 'Contact form is not configured on the server.' },
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

    const payload = new FormData()
    payload.append('access_key', accessKey)
    payload.append('name', name.trim())
    payload.append('email', email.trim())
    payload.append('message', message.trim())
    payload.append('subject', `New contact from ${name.trim()}`)
    payload.append('from_name', 'Clockwise Technologies Website')
    if (company?.trim()) payload.append('company', company.trim())
    if (phone?.trim()) payload.append('phone', phone.trim())

    const response = await fetch(WEB3FORMS_SUBMIT_URL, {
      method: 'POST',
      body: payload,
    })

    const data = await parseJsonSafe<Web3FormsResponse>(response)

    if (!data) {
      return NextResponse.json(
        {
          success: false,
          message:
            'Email service returned an empty response. Please email us directly at info@clockwisetech.com.',
        },
        { status: 502 },
      )
    }

    if (!response.ok || !data.success) {
      return NextResponse.json(
        { success: false, message: data.message || 'Failed to send message.' },
        { status: response.status >= 400 ? response.status : 502 },
      )
    }

    return NextResponse.json({ success: true, message: data.message })
  } catch (error) {
    console.error('[contact] submission failed:', error)
    return NextResponse.json(
      {
        success: false,
        message:
          'Unable to send your message right now. Please try again or email info@clockwisetech.com.',
      },
      { status: 500 },
    )
  }
}
