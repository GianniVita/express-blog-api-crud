const articles = require("../data/articles");

const index = (req, res) => {
    return res.json(articles);
};

const show = (req, res) => {
    const id = Number(req.params.id);
    const foundArticle = articles.find(article => article.id === id);

    if (!foundArticle) {
        return res.status(404).json({ error: 'Articolo non trovato' });
    }
    return res.json(foundArticle);
};

const store = (req, res) => {
    res.send('Creazione nuovo articolo');
};

const update = (req, res) => {
    res.send('Modifica integrale degli articoli ' + req.params.id);
};

const modify = (req, res) => {
    res.send('Modifica parziale degli articoli ' + req.params.id);
};

const destroy = (req, res) => {
    const id = parseInt(req.params.id);
    const articleIndex = articles.findIndex(article => article.id === id);

    if (articleIndex === -1) {
        return res.status(404).json({ error: 'Articolo non trovato' });
    }
    const deletedArticle = articles.splice(articleIndex, 1);
    return res.json({ messaggio: 'Articolo eliminato', articolo: deletedArticle[0] });

};


module.exports = { index, show, store, update, modify, destroy };