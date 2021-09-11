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

  const mailData = {
    from: process.env.FROM,
    to: process.env.TO,
    subject: `Mensagem de ${req.body.nome}`,
    text: req.body.nome,
    html: `<div>
        <strong>Nome: </strong>${req.body.nome}<br>
        <strong>E-mail: </strong>${req.body.email}<br>
        <strong>Telefone: </strong>${req.body.telefone}
      </div>`
  }

  transporter.sendMail(mailData, (err: string, info: string) => {
    if (err) {
      console.log('Error' + err)
      return res.json({ error: err })
    } else {
      console.log(info)
      return res.json({ status: 200 })
    }
  })
}
