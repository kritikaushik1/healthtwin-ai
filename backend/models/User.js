import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    profileImage: {
      type: String,
      default: "",
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    personal: {
      age: Number,
      gender: String,
      dob: Date,
      height: Number,
      weight: Number,
      bloodGroup: String,
    },

    medical: {
      allergies: [String],
      diseases: [String],
      medications: [String],
      surgeries: [String],
    },

    lifestyle: {
      smoking: Boolean,
      alcohol: Boolean,
      activityLevel: String,
      sleepHours: Number,
      dietType: String,
    },

    reports: [
      {
        reportName: String,
        reportUrl: String,
        uploadedAt: Date,
      },
    ],

    reminders: [
      {
        title: String,
        time: Date,
        completed: Boolean,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);