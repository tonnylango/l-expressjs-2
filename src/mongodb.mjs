import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/one")
  .then(() => {
    console.log("mongo db connected");
  })
  .catch(() => {
    console.log("failed to connect");
  });

  //schema for the document
const LoginSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

//collection
export const collection = new mongoose.model("Collection1", LoginSchema)

