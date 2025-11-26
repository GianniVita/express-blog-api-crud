const express = require('express');
const router = express.Router();
const articles = require('../data/articles'); // Importa il modulo articles

//Index
router.get('/', (req, res) => {
    return res.json(articles);
})

//show
router.get('/:id', (req, res) => {
    res.send('Dettagli del Blod' + req.params.id);

})

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






