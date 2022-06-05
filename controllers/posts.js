const Posts = require('../model/posts');
const Users = require('../model/users');
const successHandler = require('../service/successHandler');
const errorHandler = require('../service/errorHandler');

const postsController = {
    async getPosts(req, res) {
        const timeSort = req.query.timeSort == "asc" ? "createAt" : "-createAt"
        const allPosts = await Posts.find().populate({
            path: 'user',
            select: 'name photo'
        }).sort(timeSort);
        successHandler(res, allPosts);
    },

    async createPost(req, res) {
        try {
            const { body } = req;
            if (body.content) {
                const newPost = await Posts.create(body);
                successHandler(res, newPost);
            } else {
                errorHandler(res);
            }
        } catch (err) {
            errorHandler(res, err);
        }
    },
};


module.exports = postsController;