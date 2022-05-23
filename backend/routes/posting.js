const Postingroute = require('express').Router()
const PostingController = require('../controllers/PostingController')
const multer = require('multer')
const {authentication} = require('../middlewares/auth')

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'../frontend/src/file_image')
    }
    // filename:function(req,file,cb){
    //     cb(null, Date.now() + '--'+ file.originalname)
    // } 
})
const upload = multer({storage:storage})

Postingroute.get('/',PostingController.getAllPosting)
Postingroute.get('/postings_user',authentication,PostingController.getPostUser)
Postingroute.post('/create_posting',authentication,upload.single("image"),PostingController.createPosting)
Postingroute.put('/update_posting/:id',authentication,PostingController.UpdatePosting)
Postingroute.delete('/delete_posting/:id',authentication,PostingController.DeletePosting)
Postingroute.get('/info_posting/:id',PostingController.GetInfoPosting)
Postingroute.get('/search_posting',authentication,PostingController.getSearchPosting)

module.exports = Postingroute;

