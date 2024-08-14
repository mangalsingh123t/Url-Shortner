
const User = require('../models/User')

async function userSignUp(req, res) {
  console.log(req.body)
  const { name, email, password } = req.body

  await User.create({
    name, email, password
  })
  return res.redirect('/')
}

async function userLogin(req, res) {
  const { email, password } = req.body
  const user = await User.findOne({ email, password })
  console.log("login user", user)
  if (!user) {
    return res.render('login', {
      error: "Invalid userName or Password"
    })
  }
  return res.redirect('/')
}

module.exports = {
  userSignUp, userLogin
}
