import { FormEvent } from 'react'

export function phone(e: FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 15
  let value = e.currentTarget.value

  value = value
    .replace(/\D+/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
    .replace(/(-\d{4})\d+?$/, '$1')

  e.currentTarget.value = value
  return e
}
