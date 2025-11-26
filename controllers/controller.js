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
    res.send('Eliminazione degli articoli' + req.params.id);
})


module.exports = router;
