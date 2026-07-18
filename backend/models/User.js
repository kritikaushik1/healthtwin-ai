import mongoose from "mongoose";
import bcrypt from "bcryptjs";

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
      minlength: 6,
    },

    profileCompleted: {
      type: Boolean,
      default: false,
    },

    // ==========================
    // Personal Information
    // ==========================

    dateOfBirth: {
      type: Date,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },

    phone: {
      type: String,
    },

    height: {
      type: Number,
    },

    weight: {
      type: Number,
    },

    bloodGroup: {
      type: String,
    },

    // ==========================
    // Medical
    // ==========================

    allergies: [
      {
        type: String,
      },
    ],

    medicalConditions: [
      {
        type: String,
      },
    ],

    medications: [
      {
        type: String,
      },
    ],

    surgeries: [
      {
        type: String,
      },
    ],

    // ==========================
    // Lifestyle
    // ==========================

    dietType: {
      type: String,
      enum: [
        "Vegetarian",
        "Eggetarian",
        "Non-Vegetarian",
        "Vegan",
      ],
    },

    exerciseFrequency: {
      type: String,
      enum: [
        "Daily",
        "Weekly",
        "Rarely",
        "Never",
      ],
    },

    sleepHours: {
      type: Number,
    },

    waterIntake: {
      type: Number,
    },

    smoking: {
      type: Boolean,
      default: false,
    },

    alcohol: {
      type: Boolean,
      default: false,
    },

    // ==========================
    // Goals
    // ==========================

    healthGoals: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {

  if (!this.isModified("password"))
    return next();

  const salt = await bcrypt.genSalt(10);

  this.password = await bcrypt.hash(
    this.password,
    salt
  );

  next();

});

userSchema.methods.comparePassword =
async function (password) {

  return bcrypt.compare(
    password,
    this.password
  );

};

export default mongoose.model(
  "User",
  userSchema
);