const express = require('express')
const app = express()
const PORT = 3000
const postRouter = require('./routers/posts')
const posts = require('./data/articles')

// register the static assets
app.use(express.static('public'))

//register the body parser
app.use(express.json());


// define your first route
app.get("/", (req,res) => {
    res.json({ posts });
});

app.use('/posts', postRouter)




// put the server on listening
app.listen(PORT, () => {
    console.log(`Example my blog is listening on http://localhost:${PORT} `);

})




