import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import {errorHandler} from "../utils/error.js"

export const signup = async(req, res, next) => {
   const { username, email, password } = req.body;

   if(!username || !email || !password || username ==="" || email ==="" || password === ""){
   //  return res.status(400).json({message: "All fields are required" });
   next(errorHandler(400, "All fields are required"));
   }

   const hashedPassword = bcryptjs.hashSync(password, 10);

   const newUser = new User({
    // Here keys and values name is same
          username,
          email,
          password: hashedPassword,
   });

   try {
      await newUser.save();
      res.json( "Signup successful" );
   }
   catch (error){
      // res.status(500).json({ message: error.message });
      // Instead of res.status(500) we can write next(error)
      next(error);
   }

  
}