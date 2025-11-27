const express = require('express')
const app = express()
const PORT = 3000
const postRouter = require('./routers/posts')
const posts = require('./data/articles')

app.use(express.static(public))





app.get("/", (req,res) => {
    res.json({ posts });
});

app.use('/posts', postRouter)


app.listen(PORT, () => {
    console.log(`Example my blog is listening on http://localhost:${PORT} `);

})