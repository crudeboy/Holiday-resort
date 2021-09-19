import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
export interface IUser {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string | undefined;
  passwordResetToken: string;
  passwordResetExpires: string | number;
  passwordChangedAt: number;
  tokens: { [key: string]: string }[];
}
const userSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: [true, 'Please tell us your name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your  email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'please provide a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false,
  },
  tokens: [
    {
      token: String,
    },
  ],
  // passwordChangedAt: Date,
  // passwordResetToken: String,
  // passwordResetExpires: Date,
});
userSchema.pre('save', async function (next: () => void) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});
// userSchema.pre('save', function (next) {
//   if (!this.isModified('password') || this.isNew) return next();
//   this.passwordChangedAt = Date.now() - 1000;
//   next();
// });
userSchema.methods.correctPassword = async function (
  candidatePassword: any,
  userPassword: any
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};
// userSchema.methods.createPasswordResetToken = function () {
//   const resetToken = crypto.randomBytes(32).toString('hex');
//   this.passwordResetToken = crypto
//     .createHash('sha256')
//     .update(resetToken)
//     .digest('hex');
//   console.log({ resetToken }, this.passwordResetToken);
//   this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
//   return resetToken;
// };
const User = mongoose.model('User', userSchema);
export default User;
