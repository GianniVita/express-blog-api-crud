const articles = require("../data/articles");

const index = (req, res) => {
    const { tag } = req.query;

    if (tag) {
        const filteredArticles = articles.filter(article => article.tags.includes(tag));
        return res.status(200).json(filteredArticles);
    }

};

const show = (req, res) => {
    const id = Number(req.params.id);
    const foundArticle = articles.find(article => article.id === id);
    //console.log(foundArticle);
    

    if (!foundArticle) {
        return res.status(404).json({ 
          error: true ,
          message: 'Articolo non trovato'
        });
    }
    res.json(foundArticle);
};

const store = (req, res) => {
    
    const newObj = {
        id: Date.now(),
        ...req.body
    }
    articles.push(newArticle)
    
    res.send('Creazione nuovo articolo');
};

const update = (req, res) => {
    const articleId = Number(req.params.id)
    const articleData = req.body

    const article = article.find(article => article.id === id)

    if(!article)
        return res.status(404).json({
            error:true,
            message:'Articolo non trovato'
        });

    res.send('Modifica integrale degli articoli ' + req.params.id);
};

const modify = (req, res) => {
    res.send('Modifica parziale degli articoli ' + req.params.id);
};

const destroy = (req, res) => {
    const id = parseInt(req.params.id);
    const articleIndex = articles.findIndex(article => article.id === id);

    if (!articleIndex) {
        return res.status(404).json
        ({ error: true,
            message: 'Articolo non trovato'
         });
    }
    articles.splice(articles.indexOf(articleIndex), 1);
   
    res.sendStatus(204)

};


module.exports = { index, show, store, update, modify, destroy };