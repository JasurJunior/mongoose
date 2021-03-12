class PostService
    {
    async create(post)
        {
        try // try a error
            {
            const createdPost = await Post.create(post)
            return createdPost
            }
        catch (e)
            {
            res.status(500).json(e)
            }
        }
    //endpoints
    async getAll(req, res)
        {
            const posts = await Post.find()
            return posts
        }

    async getOne(id)
        {
            if (!id) throw new Error('id qani !')
            const post = await Post.findById(id)
            return post
        }

    async update(post)
        {
            if (!post._id) throw new Error('id qani !')
            const updatePost = await Post.findByIdAndUpdate(post._id, post, {new: true})
            return updatePost
        }

    async delete(id)
        {
            if (!id) throw new Error('id qani !')
            const post = await Post.findByIdAndDelete(id)
            return post
        }
    }
export default new PostService()