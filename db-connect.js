const mongoose = require("mongoose");

async function getConnect(){
     try{
     await mongoose.connect(process.env.DBKEY)
      // `mongodb://localhost:27017/crud`)
        console.log("Database is Connect")
     } catch(error){
        console.log(error)
     }
}
getConnect()


// mongoose.connect(`mongodb://localhost:27017/crud`)
// .then(()=>{
//     console.log(`Database is Connected`)
// }).catch((error)=>{
//     console.log(error)
// })