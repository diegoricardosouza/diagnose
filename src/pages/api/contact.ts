type ContactProps = {
  nome: string
  email: string
  telefone: string
}

export default function (req: Request, res: Response) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('dotenv').config()
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const nodemailer = require('nodemailer')

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    },
    secure: true
  })

  const body = req.body as unknown as ContactProps

  const mailData = {
    from: 'demo@demo.com',
    to: 'diegoricardoweb@gmail.com',
    subject: `Mensagem de ${body.nome}`,
    text: body.nome,
    html: `<div>
      <strong>Nome: </strong>${body.nome}<br>
      <strong>E-mail: </strong>${body.email}<br>
      <strong>Telefone: </strong>${body.telefone}
    </div>`
  }

  transporter.sendMail(mailData, (err: string) => {
    if (err) {
      console.log('Error' + err)
      return res.json({ error: err })
    } else {
      return res.json({ status: 200 })
    }
  })
}
