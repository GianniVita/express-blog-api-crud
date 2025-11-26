const articles = require("../data/articles");

//Index
router.get('/', (req, res) => {
    return res.json(articles);
})

//show
router.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    const foundArticle = articles.find(article => article.id === id)

    if (!articles) {
        return res.status(404).json({ error: 'Articolo non trovato' });
    }
    return res.json(foundArticle);
});

//store
router.post('/', (req, res) => {
    res.send('Creazione nuovo articolo');
});


//update
router.put('/:id', (req, res) => {
    res.send('Modifica integrale degli articoli' + req.params.id);
});

//modify
router.patch('/:id', (req, res) => {
    res.send('Modifica parziale degli articoli' + req.params.id);
});

//destroy
router.delete('/:id', (req, res) => {
   const id = parseInt(req.params.id);
   const articleIndex = articles.findIndex(article => article.id === id);

   if (articleIndex === -1) {
    return res.status(404).json({error:'Articolo non trovato'});
    
   }
   const deletedArticle = articles.splice(articleIndex, 1);
   return res.json({messaggio:'Articolo eliminato', articolo: deletedArticle[0]});

});



module.exports = { index, show, store, update, destroy }