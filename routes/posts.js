const express = require('express')
const router = express.Router();


const articles = [
    {
        id: 1,
        titolo: "Ciambellone",
        contenuto: "Buonissimo",
        immagine: "/img/ciambellone.jpeg",
        tags: ["dolce", "colazione", "semplice"],
    },
    {
        id: 2,
        titolo: "Cracker di Barbabietola",
        contenuto: "Ma cosa sto guardando",
        immagine: "/img/cracker_barbabietola.jpeg",
        tags: ["snack", "salato", "veloce"],
    },
    {
        id: 3,
        titolo: "Pane Fritto Dolce",
        contenuto: "Ci ho ripensato, da NON provare",
        immagine: "/img/pane_fritto_dolce.jpeg",
        tags: ["dolce", "merenda", "tradizione"],
    },
    {
        id: 4,
        titolo: "Pasta alla Barbabietola",
        contenuto:"Sembra quel tipico piatto da ristorante a 5 stelle che lo provi e sa di legno",
        immagine: "/img/pasta_barbabietola.jpeg",
        tags: ["pasta", "vegetariano", "veloce"],
    },
    {
        id: 5,
        titolo: "Torta Paesana",
        contenuto: "Immagini IA tipo:",
        immagine: "/img/torta_paesana.jpeg",
        tags: ["dolce", "rustico", "tradizione"],
    },
];



//Index
router.get('/', (req, res) => {
    let list = articles.map(article => article.titolo)
    return res.send(`<h1>Lista Articoli</h1><p>${list}</p>`)
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
    



   
   
