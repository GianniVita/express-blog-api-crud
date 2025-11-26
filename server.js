const express = require('express')
const app = express()
const PORT = 3000
const postRouter = require('./routes/posts')


app.get('/', (req,res) =>{
    return res.send('Welcome to my blog')
})

app.get("/", (req,res) => {
    res.json({ posts });
});

app.use('/posts', postRouter)


app.listen(PORT, () => {
    console.log(`Example my blog is listening on http://localhost:${PORT} `);

})