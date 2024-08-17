const express = require("express")
const app = express()
const path = require('path')
const PORT = 9090
const connectMongodb = require('./Connection')
const router = require('./routes/Url')
const staticRouter = require('./routes/StaticRouter')
const userRouter = require('./routes/User')
const cookieParser = require('cookie-parser')
const { restrictToLoggedUserOnly } = require('./middlewares/auth')


app.set('view engine', 'ejs');
app.set('views', path.resolve("./views"))

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }))

connectMongodb("mongodb://localhost:27017/short-url")

app.use("/url", restrictToLoggedUserOnly, router)
app.use("/", staticRouter)
app.use("/user", userRouter)


app.listen(PORT, () => console.log(`Server is Started at ${PORT}`))
