
const User = require('../models/User')
const { setUser } = require('../utils/auth')
async function userSignUp(req, res) {
  console.log(req.body)
  const { name, email, password } = req.body

  const user = await User.create({
    name, email, password
  })
  if (!user) {
    res.render("/")
  }
  return res.redirect('/login')
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
  const token = setUser(user)
  res.cookie('token', token)
  return res.redirect('/')
}

module.exports = {
  userSignUp, userLogin
}
