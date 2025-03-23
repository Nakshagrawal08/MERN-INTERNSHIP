import mangoose from "mongoose";

export const connectDB= async ()=>{
   try {
      
    await mangoose.connect("mongodb://localhost:27017/Student-information")
    console.log('database connected');
   }catch(err){
         console.log(err);
         process.exit(1);
   }
}