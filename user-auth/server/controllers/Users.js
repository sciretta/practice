import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User'
import auth from '../middleware/auth'
import dbConnect from '../db.connect'

dbConnect()
//create a new user
export const registerUser = async (body,res) => {
	try{
		const { username, password, passwordCheck } = body
    // validate
    if (!username || !password || !passwordCheck)
      return res
        .status(400)
        .json({ msg: "Not all fields have been entered." })

  	if (password.length < 5)
      return res
        .status(400)
        .json({ msg: "The password needs to be at least 5 characters long." })

    if (password !== passwordCheck)
      return res
        .status(400)
        .json({ msg: "Enter the same password twice for verification." })

    const existingUser = await User.findOne({ username })
    if (existingUser)
      return res
        .status(400)
        .json({ msg: "An account with this email already exists." })
    
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password,salt)
    const newUser = new User({
      username,
      password: passwordHash
    })
    const savedUser = await newUser.save()
    return res.json(savedUser)
  }catch(err){
  	return res.status(500).json({error:err.message})
  }
}

//login user
export const loginUser = async (body,res) => {
  try {
    const { username, password } = body

    // validate
    if (!username || !password)
      return res.status(400).json({ msg: "Not all fields have been entered." })

    const user = await User.findOne({ username })
    if (!user)
      return res
        .status(400)
        .json({ msg: "No account with this username has been registered." })

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." })

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
    return res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
      },
    })
  }catch(err){
  	return res.status(500).json({error:err.message})
  }
}

//delete user
export const deleteUser = async (req,res) => {//modificar este endpoint
  try {
    await auth(req,res)
      .then(async () => {
        const deletedUser = await User.findByIdAndDelete(req.user)
        if(!deletedUser)
          return res.status(400).json({msg:'User not found.'})
        return res.json(deletedUser)
      })
  }catch(err){
    return res.status(500).json({error:err.message})
  }
}

//check if the token is valid
export const validToken = async (req, res) => {
  try {
    const token = req.headers["x-auth-token"]
    if (!token) 
      return res.json({msg:'No token found.'})

    const verified = jwt.verify(token, process.env.JWT_SECRET)
    if (!verified) 
      return res.json({msg:'Incorrect token.'})

    const user = await User.findById(verified.id)
    if (!user) 
      return res.json({msg:'User not found.'})

    return res.json(true)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

//get the user data
export const getData = async (req,res) => {//modificar este endpoint
  try{
    await auth(req,res)
      .then(async () => {
        const user = await User.findById(req.user)
        
        if(!user)
          return res.json({msg:'User not found.'})

        return res.json({
          username: user.username,
          id: user._id
        })
      })
  }catch (err) {
    res.status(500).json({ error: err.message })
  }
}