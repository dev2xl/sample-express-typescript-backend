import { model, models, Schema } from 'mongoose'
import { User } from '@/interfaces/user'

// Create Schema
const userSchema = new Schema<User>({
  email: {
    type: String,
    required: true,
    unique: true,
    match: /[^&#$()\[\]\\{}/]+@[^&#$()\[\]\\{}/]+\.[^&#$()\[\]\\{}/]+/,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  name: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: Date
})

export default models?.User || model<User>('User', userSchema)
