const {posting_user,user} = require('../models')
const { Op } = require('sequelize');

class PostingController{
    static async getAllPosting(req,res){
        try{
            let postings = await posting_user.findAll({
                include:[user]
            });
            res.status(200).json(postings)
        }
        catch(err){
            res.status(500).json(err.message)
        }
    }
    static async createPosting(req,res){
        // console.log(req.file)
        try{
            const {image,posting} = req.body
            let userId = Number(req.userData.id)
            // let image = req.file.filename
            console.log(image)
            let postings = await posting_user.create({
                image,posting,userId
            })
            res.status(201).json(postings)
        }
        catch(err){
            res.status(500).json(err.message)
        }
    }
    static async UpdatePosting(req,res){
        try{ 
            const id = Number(req.params.id)
            const {image,posting} = req.body
            let userId = Number(req.userData.id)
            
            let postings = await posting_user.update({
                image,posting,userId
            },{
                where : {id}
            })
            res.status(201).json(postings)

        }
        catch(err){
            res.status(500).json(err.message)
        }

    }
    static async DeletePosting(req,res){
        try{
            const id = Number(req.params.id)
            let postings = await posting_user.destroy({
                where: { id }
            })
            res.status(200).json(postings)
        }
        catch(err){
            res.status(500).json(err.message)
        }

    }
    static async GetInfoPosting(req,res){
        try{
            const id = Number(req.params.id)
            let postings = [await posting_user.findByPk(id)]
            res.status(200).json(postings)

        }
        catch(err){
            res.status(500).json(err.message)
        }
    }
    static async getPostUser(req,res){
        try{
            let id = Number(req.userData.id)
            let postings = await posting_user.findAll({
                where: {
                    userId:id
                },
                include:[user]
            })
            res.status(200).json(postings)
            // console.log(req.userData)
        }
        catch (err){
            res.status(500).json(err.message)
        }
    }
    
    static async getSearchPosting(req,res){
        try{
            let id = Number(req.userData.id)
            let postings = await posting_user.findAll({
                where: {
                    userId: {
                        [Op.ne]: id
                    }
                },
                include:[user]
            })
            res.status(200).json(postings)
        }
        catch(err){
            res.status(500).json(err.message)
        }
    }

}

module.exports = PostingController