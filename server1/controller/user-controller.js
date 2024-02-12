// import React from 'react'
// import User from '../model/user.schema.js'

// const userSignup = async(request,response) => {
//  try {

//     const exist= await user.findOne({username: request.body.username})
//     if(exist){

//         return response.status(401).json({message:"User already exists"})
//     } 


//    const user= request.body
//    const newUser= new User(user)
//   await newUser.save()
//    response.status(200).json({message:"User created successfully"}) 
//  } catch (error) {
//    response.status(500).json({message:error.message})
//  }
// }

// export default userSignup


import React from 'react';
import User from '../model/user.schema.js';

export const userSignup = async (request, response) => {
  try {
    const exist = await User.findOne({ username: request.body.username });

    if (exist) {
      return response.status(401).json({ message: 'User already exists' });
    }

    const userData = request.body; // Renamed variable to avoid conflicts
    const newUser = new User(userData); // Renamed variable to avoid conflicts
    await newUser.save();

    response.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const userLogin= async (request,response)=>{
  try {
    const username= request.body.username;
    const password= request.body.password;

    let user= await User.findOne({username: username,password: password});
    if(user){
      return response.status(200).json({data: user})
    }else{
      return response.status(401).json("Invalid credentials")
    }
  } catch (error) {
    response.status(500).json({message:error.message})
    
  }
}
