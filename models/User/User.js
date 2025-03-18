import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  plan: {
    type: String,
    enum: ['free', 'pro', 'enterprise'],
    default: 'free',
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  socialAccounts: [
    {
      platform: String, // "facebook", "instagram", "twitter"
      accountId: String,
      accessToken: String,
      refreshToken: String,
      expiresAt: {
        type: Date,
      },
    },
  ],
  settings: {
    notificationPreferences: Boolean,
  },
});

export default mongoose.model('User', userSchema);
