import express, { urlencoded } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import 'dotenv/config'
import connectDB from './utils/db.js'
import userRoute from './routes/userRouter.js'
import postRoute from './routes/postRoutes.js'
import messageRoute from './routes/messageRoutes.js'




const app = express()

app.get("/",(req,res)=>{
    return res.status(200).json({
        message:"I'm coming from backend",
        success:true
    })
})

app.use(express.json())
app.use(cookieParser())
app.use(urlencoded({extended:true}))

const corsOptions = {
    origin:'http://localhost:5173',
    credentials:true
}

app.use(cors(corsOptions))

const PORT = process.env.PORT

app.use("/api/v1/user",userRoute)
app.use("/api/v1/post",postRoute)
app.use("/api/v1/message",messageRoute)



app.listen(PORT,()=>{
    connectDB()
    console.log(`Server is running at port ${PORT}`)
})


