import fs from "fs";
import Report from "../models/Report.js";
import {
createReport,
getReports,
deleteReport,getReportById,
} from "../services/report.service.js";

export const uploadReport=async(req,res)=>{

try{

    if(!req.file){
        return res.status(400).json({
            message:"No file uploaded"
        });
    }

    const report=await createReport({

        user:req.user.id,

        reportName:req.body.reportName,

        reportType:req.body.reportType,

        fileUrl:req.file.path,

        fileName:req.file.filename,

        fileSize:req.file.size,

        mimeType:req.file.mimetype

    });

    res.status(201).json(report);

}catch(err){

    res.status(500).json({
        message:err.message
    });

}

};

export const getAllReports=async(req,res)=>{

const reports=await getReports(req.user.id);

res.json(reports);

};

export const removeReport=async(req,res)=>{

const report=await deleteReport(
req.params.id,
req.user.id
);

if(!report)
return res.status(404).json({
message:"Not Found"
});

if(fs.existsSync(report.fileUrl))
fs.unlinkSync(report.fileUrl);

res.json({
message:"Deleted"
});

};
export const getSingleReport = async (req, res) => {
  try {
    const report = await getReportById(
      req.params.id,
      req.user.id
    );

    if (!report) {
      return res.status(404).json({
        success: false,
        message: "Report not found",
      });
    }

    res.status(200).json({
      success: true,
      report,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};