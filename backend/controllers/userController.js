import User from "../models/User.js";

/* ===========================
   Get Logged In User Profile
=========================== */

export const getProfile = async (req, res) => {
  try {

    res.status(200).json({
      success: true,
      user: req.user,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });

  }
};

/* ===========================
   Update Profile
=========================== */

export const updateProfile = async (req, res) => {
  try {

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    ).select("-password");

    res.status(200).json({
      success: true,
      message: "Profile Updated Successfully",
      user: updatedUser,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });

  }
};

/* ===========================
   Complete Onboarding
=========================== */

export const completeOnboarding = async (
  req,
  res
) => {

  try {

    const updatedUser =
      await User.findByIdAndUpdate(
        req.user._id,
        {
          ...req.body,
          profileCompleted: true,
        },
        {
          new: true,
          runValidators: true,
        }
      ).select("-password");

    res.status(200).json({
      success: true,
      message: "Onboarding Completed",
      user: updatedUser,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });

  }

};

/* ===========================
   Delete Profile
=========================== */

export const deleteProfile = async (
  req,
  res
) => {

  try {

    await User.findByIdAndDelete(req.user._id);

    res.status(200).json({
      success: true,
      message: "Account Deleted",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });

  }

};