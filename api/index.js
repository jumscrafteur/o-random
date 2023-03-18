const express = require('express');

const app = express();
const port = 3000;

const VIANDES = [
  {
    img: 'https://o-tacos.com/img/base-poulet.png',
    name: 'Poulet nature',
  },
  {
    img: 'https://o-tacos.com/img/base-poulet-marine.png',
    name: 'Poulet mariné',
  },
  {
    img: 'https://o-tacos.com/img/base-viande-hachee.png',
    name: 'Viande hachée de boeuf',
  },
  {
    img: 'https://o-tacos.com/img/base-merguez.png',
    name: 'Merguez de boeuf',
  },
  {
    img: 'https://o-tacos.com/img/base-nuggets.png',
    name: 'Nuggets poulet',
  },
  {
    img: 'https://o-tacos.com/img/base-cordon.png',
    name: 'Cordon bleu poulet',
  },
  {
    img: 'https://o-tacos.com/img/base-tenders.png',
    name: 'Tenders poulet',
  },
  {
    img: 'https://o-tacos.com/img/base-falafel.png',
    name: 'Falafel',
  },
];

const SAUCES = [
  {
    img: 'https://o-tacos.com/img/sauce-algerienne.png',
    name: 'Algérienne',
  },
  {
    img: 'https://o-tacos.com/img/sauce-bbq.png',
    name: 'Barbecue',
  },
  {
    img: 'https://o-tacos.com/img/sauce-burger.png',
    name: 'Burger',
  },
  {
    img: 'https://o-tacos.com/img/sauce-chili.png',
    name: 'Chili thaï',
  },
  {
    img: 'https://o-tacos.com/img/sauce-curry.png',
    name: 'Curry',
  },
  {
    img: 'https://o-tacos.com/img/sauce-fuego.png',
    name: 'Fuego',
  },
  {
    img: 'https://o-tacos.com/img/sauce-ketchup.png',
    name: 'Ketchup',
  },
  {
    img: 'https://o-tacos.com/img/sauce-mayonnaise.png',
    name: 'Mayonnaise',
  },
  {
    img: 'https://o-tacos.com/img/sauce-samourai.png',
    name: 'Samouraï',
  },
];

const SUPP = [
  {
    img: null,
    name: 'Chèvre',
  },
  {
    img: null,
    name: 'Cheddar',
  },
  {
    img: null,
    name: 'Gouda',
  },
  {
    img: null,
    name: 'Emmental',
  },
  {
    img: null,
    name: 'Raclette',
  },
  {
    img: null,
    name: 'Vache qui rit',
  },
  {
    img: null,
    name: 'Boursin',
  },
  {
    img: null,
    name: 'Mozzarella',
  },
  {
    img: null,
    name: 'Boeuf façon bacon fumé',
  },
  {
    img: null,
    name: 'Champignons',
  },
  {
    img: null,
    name: 'Tranche de poulet',
  },
  {
    img: null,
    name: 'Poivronnade',
  },
  {
    img: null,
    name: 'Lardons de volaille',
  },
  {
    img: null,
    name: 'Oignons caramélisés',
  },
  {
    img: null,
    name: 'Japaleno & Cheese nuggets',
  },
  {
    img: null,
    name: 'Galette de Pomme de terre',
  },
];

const GRAT_FROMAGE = [
  {
    img: null,
    name: 'Cheddar',
  },
  {
    img: null,
    name: 'Gouda',
  },
  {
    img: null,
    name: 'Emmental',
  },
  {
    img: null,
    name: 'Raclette',
  },
  {
    img: null,
    name: 'Mozzarella',
  },
];

const GRAT_GARNITURE = [
  {
    img: null,
    name: 'Boeuf façon bacon fumé',
  },
  {
    img: null,
    name: 'Champignons',
  },
  {
    img: null,
    name: 'Poivronnade',
  },
  {
    img: null,
    name: 'Lardons de volaille',
  },
  {
    img: null,
    name: 'Oignons caramélisés',
  },
];

const VIANDES_QTY = {
  M: 1,
  L: 2,
  XL: 3,
};

function getNRandom(n, array) {
  const out = [];
  const tempArray = [...array];

  for (let i = 0; i < n; i += 1) {
    const index = Math.floor(Math.random() * tempArray.length);
    const randomElement = tempArray.splice(index, 1)[0];

    if (randomElement === undefined) { break; }

    out.push(randomElement);
  }

  return out;
}

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.get('/viandes', (req, res) => {
  res.json(VIANDES);
});

app.get('/sauces', (req, res) => {
  res.json(SAUCES);
});

app.get('/supp', (req, res) => {
  res.json(SUPP);
});

app.get('/gratFromage', (req, res) => {
  res.json(GRAT_FROMAGE);
});

app.get('/gratGarniture', (req, res) => {
  res.json(GRAT_GARNITURE);
});

app.get('/viandesQty', (req, res) => {
  res.json(VIANDES_QTY);
});

app.get('/random', (req, res) => {
  const {
    size = 'M',
    suppQty = 0,
    gratFromage = '0',
    gratGarniture = '0',
  } = req.query;

  let {
    viandeBlackList = '',
    sauceBlackList = '',
  } = req.query;

  if (!['M', 'L', 'XL'].includes(size)) { return res.json({ error: 'Invalid size. Size must be M, L or XL' }); }
  if (Number.isNaN(Number(suppQty))) { return res.json({ error: 'Invalid suppQty. suppQty must be a valid number' }); }
  if (!['0', '1'].includes(gratFromage)) { return res.json({ error: 'Invalid gratFromage. gratFromage must me 0 or 1' }); }
  if (!['0', '1'].includes(gratGarniture)) { return res.json({ error: 'Invalid gratGarniture. gratGarniture must me 0 or 1' }); }

  viandeBlackList = viandeBlackList.split(',');
  sauceBlackList = sauceBlackList.split(',');

  const viandesQty = VIANDES_QTY[size];

  let viandes = [...VIANDES];
  let sauces = [...SAUCES];

  viandes = viandes.filter((viande) => !viandeBlackList.includes(viande.name));
  sauces = sauces.filter((sauce) => !sauceBlackList.includes(sauce.name));

  const commande = {
    size: req.query.size,
    viandes: getNRandom(viandesQty, viandes),
    sauces: getNRandom(2, sauces),
    supp: getNRandom(suppQty, SUPP),
    gratFromage: gratFromage === '1' ? getNRandom(1, GRAT_FROMAGE) : undefined,
    gratGarniture: gratFromage === '1' && gratGarniture === '1' ? getNRandom(1, GRAT_GARNITURE) : undefined,
  };

  return res.json(commande);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port ${port}`);
});
