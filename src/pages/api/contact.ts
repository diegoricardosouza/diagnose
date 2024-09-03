import { Request, Response } from 'express'
import axios from 'axios'

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
    subject: `Diagnose Pró - Solicitação de contato de ${req.body.nome}`,
    text: req.body.nome,
    html: `<div>
        <strong>Nome: </strong>${req.body.nome}<br>
        <strong>E-mail: </strong>${req.body.email}<br>
        <strong>Telefone: </strong>${fone}
      </div>`
  }

  let options = {
    method: 'POST',
    url: 'https://n8n.lpt4.com.br/webhook/faf38315-0092-4f19-b2b2-9af15f2286f6',
    headers: {'Content-Type': 'application/json'},
    data: {nome: req.body.nome, email: req.body.email, telefone: fone}
  };

  axios.request(options).then(function (response) {
    transporter.sendMail(mailData, (err: string, info: string) => {
      if (err) {
        return res.json({ error: err })
      } else {
        return res.json({ status: 200, message: info })
      }
    })
  }).catch(function (error) {
    transporter.sendMail(mailData, (err: string, info: string) => {
      if (err) {
        return res.json({ error: err })
      } else {
        return res.json({ status: 200, message: info })
      }
    })
  });




}
