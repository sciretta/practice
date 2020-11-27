import { Schema,model,models } from 'mongoose'

delete models['User']

const UserSchema = new Schema({
	username:{
		type:String,
		required:[true,'Add a userName.'],
		unique:true,
		minlength:[6,'The username must be at least 6 characters long.']
	},
	password:{
		type:String,
		required:[true,'Add the password.'],
		minlength:[5,'The password must be at least 5 characters long.']
	}
})

const User = model('User',UserSchema)

export default User