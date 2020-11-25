const User = require('../models/user')

async function post(req, res, next) {

  //check if it has all the fields filled
  const keys = Object.keys(req.body)

  for (key of keys) {
    if (req.body[key] == "") {
      return res.render('user/register', {
        user: req.body,
        error: "Preencha todos os campos."
      })

    }
  }

  //check if the user exists 
  let {
    email,
    cpf_cnpj,
    password,
    passwordRepeat
  } = req.body

  cpf_cnpj = cpf_cnpj.replace(/\D/g, "")

  const user = await User.findOne({
    where: {
      email
    },
    or: {
      cpf_cnpj
    }
  })

  if (user) return res.render('user/register', {
    user: req.body,
    error: "Usuário já cadastrado."
  })

  //check if password match
  if (password != passwordRepeat) {
    return res.render('user/register', {
      user: req.body,
      error: "Senha e confirmação não são as mesmas."
    })
  }
  next()
}

module.exports = {
  post
}