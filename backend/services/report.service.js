import Report from "../models/Report.js";

export const createReport=async(data)=>{
    return await Report.create(data);
};

export const getReports=async(userId)=>{
    return await Report.find({user:userId}).sort({
        createdAt:-1
    });
};

export const deleteReport=async(id,userId)=>{

    return await Report.findOneAndDelete({
        _id:id,
        user:userId
    });

};
export const getReportById = async (reportId, userId) => {
  return await Report.findOne({
    _id: reportId,
    user: userId,
  });
};