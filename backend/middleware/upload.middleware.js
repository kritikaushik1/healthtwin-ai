import multer from "multer";
import path from "path";
import fs from "fs";

const uploadPath="uploads/reports";

if(!fs.existsSync(uploadPath)){
    fs.mkdirSync(uploadPath,{recursive:true});
}

const storage=multer.diskStorage({

    destination(req,file,cb){
        cb(null,uploadPath);
    },

    filename(req,file,cb){

        const uniqueName=
            Date.now()+"-"+Math.round(Math.random()*1E9)+path.extname(file.originalname);

        cb(null,uniqueName);
    }

});

const fileFilter=(req,file,cb)=>{

    const allowed=[
        "application/pdf",
        "image/png",
        "image/jpeg",
        "image/jpg",
        "image/webp"
    ];

    if(allowed.includes(file.mimetype))
        cb(null,true);
    else
        cb(new Error("Unsupported File"),false);

};

export default multer({

    storage,

    limits:{
        fileSize:10*1024*1024
    },

    fileFilter

});