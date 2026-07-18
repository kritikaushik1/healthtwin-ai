import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    reportName: {
      type: String,
      required: true,
      trim: true,
    },

    reportType: {
      type: String,
      enum: [
        "Blood Test",
        "X-Ray",
        "MRI",
        "CT Scan",
        "Prescription",
        "ECG",
        "Other",
      ],
      default: "Other",
    },

    fileUrl: {
      type: String,
      required: true,
    },

    aiSummary: {
      type: String,
      default: "",
    },

    extractedData: {
      type: Object,
      default: {},
    },

    status: {
      type: String,
      enum: ["Uploaded", "Processing", "Completed"],
      default: "Uploaded",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Report", reportSchema);