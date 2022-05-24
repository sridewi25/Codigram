const Postingroute = require('express').Router()
const PostingController = require('../controllers/PostingController')

const {authentication} = require('../middlewares/auth')



Postingroute.get('/',PostingController.getAllPosting)
Postingroute.get('/postings_user',authentication,PostingController.getPostUser)
Postingroute.post('/create_posting',authentication,PostingController.createPosting)
Postingroute.put('/update_posting/:id',authentication,PostingController.UpdatePosting)
Postingroute.delete('/delete_posting/:id',authentication,PostingController.DeletePosting)
Postingroute.get('/info_posting/:id',PostingController.GetInfoPosting)
Postingroute.get('/search_posting',authentication,PostingController.getSearchPosting)

module.exports = Postingroute;

