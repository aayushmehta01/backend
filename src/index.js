import connectDB from "./db/index.js";
import { app } from "./app.js";


connectDB()
.then(()=>{
    app.get('/', (req, res)=>{
        res.send('<h1>Backend with Aayush</h1>')
    })

    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at http://localhost:${process.env.PORT}`)
    })
})
.catch((e)=>{
    console.log("MONGO_DB connection failed: ", e);
})


// ;(async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error)=>{
//             console.log("ERR: ", error);
//             throw error
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`Server is running on http://localhost:${PORT}`)
//         })
//     }catch(error){
//         console.log("Error: ", error);
//         throw error
//     }
// })()