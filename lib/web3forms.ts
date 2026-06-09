export const WEB3FORMS_SUBMIT_URL = 'https://api.web3forms.com/submit'

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
