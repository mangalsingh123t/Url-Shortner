
const User = require('../models/User')

async function userSignUp(req, res) {

  console.log(req.body)

  const { name, email, password } = req.body

  const userData = User.create({
    name, email, password
  })
  return res.render('Home')

}

module.exports = {
  userSignUp
}
