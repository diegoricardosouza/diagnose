export default function (req, res) {
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

  const body = req.body

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

  let result = {
    send: {
      status: 200,
      message: 'email enviado com sucesso'
    },
    error: {
      status: 400,
      message: null
    }
  }

  transporter.sendMail(mailData, (err) => {
    if (err) {
      console.log('Error' + err)
      let error = { ...result.error }
      error.message = err
      return error
    } else {
      res.json({ status: 200 })
    }
  })
}
