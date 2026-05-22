export const WHATSAPP_NUMBER = '553431970393'
export const WHATSAPP_MESSAGE =
  'Olá! Vim pelo site da ALTA e gostaria de agendar um diagnóstico gratuito para minha empresa.'

export const whatsappUrl = (message = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
