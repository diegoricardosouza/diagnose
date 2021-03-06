import { Request, Response } from 'express'

export default function (req: Request, res: Response) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('dotenv').config()
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const nodemailer = require('nodemailer')

  const transporter = nodemailer.createTransport({
    port: 465,
    host: process.env.HOST,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    },
    secure: true
  })

  const fone = req.body.telefone
    .replace(/\D+/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
    .replace(/(-\d{4})\d+?$/, '$1')

  const mailData = {
    from: process.env.FROM,
    to: process.env.TO,
    subject: `Mensagem de ${req.body.nome}`,
    text: req.body.nome,
    html: `<div>
        <strong>Nome: </strong>${req.body.nome}<br>
        <strong>E-mail: </strong>${req.body.email}<br>
        <strong>Telefone: </strong>${fone}
      </div>`
  }

  transporter.sendMail(mailData, (err: string, info: string) => {
    if (err) {
      return res.json({ error: err })
    } else {
      return res.json({ status: 200, message: info })
    }
  })
}
