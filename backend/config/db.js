  import mongoose from "mongoose";

 const connectDB = async () => {
    await mongoose.connect('mongodb://mongodb:27017/food-delivery')
    .then(()=>{
        console.log("DB Connected");
    })
  }

  export default connectDB;
