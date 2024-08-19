const jwt = require('jsonwebtoken')
const secretKey = "mstomar@123"
function setUser(user){
  return jwt.sign({
    _id : user._id,
    email : user.email
  },secretKey)
}

function getUser(token) {
    if (!token) {
        return null
    }
    try{
      const  userData = jwt.verify(token,secretKey)
      console.log("userdata : m : ",userData)
  return jwt.verify(token,secretKey)
    }catch(error){
        return null
    }
}

module.exports = {
    setUser,
    getUser
}