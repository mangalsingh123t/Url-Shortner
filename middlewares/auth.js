
const {getUser} = require('../utils/auth')
async function restrictToLoggedUserOnly(req,res,next){
   const userId = req.cookies?.token

   if (!userId) return res.redirect("/login")
      const user = getUser(userId)
  if (!user) return res.redirect("/login")
    
  req.user = user
  next()
}

module.exports = { 
    restrictToLoggedUserOnly
}