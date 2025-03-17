import mangoose from 'mongoose';

export const connectDB= async ()=>{
   try {
      
//     await mangoose.connect("mongodb://localhost:27017/Student-information")
    await mangoose.connect("mongodb+srv://Nakshatra08:Naksh%4008@learningmern.a1aew.mongodb.net/")
    console.log('database connected');
   }catch(err){
         console.log(err);
         process.exit(1);
   }
}