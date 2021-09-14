const router = require('express').Router();
const multer = require('multer'); 

router.post('/',(req,res)=>{

    if(!req.file) res.json("file is mandatory");

    let storage=multer.diskStorage({
        destination:(req,res,cb)=>cb(null,'uploads/'),
        filename:(req,res,cb)=>{
            const uniquename =`${Date.now()}-${Math.round(Math.random()* 1E9)} ${path.extname(file.originalname)}`;
        cb(null,uniquename);
        }
    })

})

module.exports = router;