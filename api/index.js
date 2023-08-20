const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

const VIANDES = [
  {
    img: "https://o-tacos.com/img/base-poulet.png",
    name: "Poulet nature",
  },
  {
    img: "https://o-tacos.com/img/base-poulet-marine.png",
    name: "Poulet mariné",
  },
  {
    img: "https://o-tacos.com/img/base-viande-hachee.png",
    name: "Viande hachée de boeuf",
  },
  {
    img: "https://o-tacos.com/img/base-merguez.png",
    name: "Merguez de boeuf",
  },
  {
    img: "https://o-tacos.com/img/base-nuggets.png",
    name: "Nuggets poulet",
  },
  {
    img: "https://o-tacos.com/img/base-cordon.png",
    name: "Cordon bleu poulet",
  },
  {
    img: "https://o-tacos.com/img/base-tenders.png",
    name: "Tenders poulet",
  },
  {
    img: "https://o-tacos.com/img/base-falafel.png",
    name: "Falafel",
  },
];

const SAUCES = [
  {
    img: "https://o-tacos.com/img/sauce-algerienne.png",
    name: "Algérienne",
  },
  {
    img: "https://o-tacos.com/img/sauce-bbq.png",
    name: "Barbecue",
  },
  {
    img: "https://o-tacos.com/img/sauce-burger.png",
    name: "Burger",
  },
  {
    img: "https://o-tacos.com/img/sauce-chili.png",
    name: "Chili thaï",
  },
  {
    img: "https://o-tacos.com/img/sauce-curry.png",
    name: "Curry",
  },
  {
    img: "https://o-tacos.com/img/sauce-fuego.png",
    name: "Fuego",
  },
  {
    img: "https://o-tacos.com/img/sauce-ketchup.png",
    name: "Ketchup",
  },
  {
    img: "https://o-tacos.com/img/sauce-mayonnaise.png",
    name: "Mayonnaise",
  },
  {
    img: "https://o-tacos.com/img/sauce-samourai.png",
    name: "Samouraï",
  },
];

const SUPP = [
  {
    img: null,
    name: "Chèvre",
  },
  {
    img: null,
    name: "Cheddar",
  },
  {
    img: null,
    name: "Gouda",
  },
  {
    img: null,
    name: "Emmental",
  },
  {
    img: null,
    name: "Raclette",
  },
  {
    img: null,
    name: "Vache qui rit",
  },
  {
    img: null,
    name: "Boursin",
  },
  {
    img: null,
    name: "Mozzarella",
  },
  {
    img: null,
    name: "Boeuf façon bacon fumé",
  },
  {
    img: null,
    name: "Champignons",
  },
  {
    img: null,
    name: "Tranche de poulet",
  },
  {
    img: null,
    name: "Poivronnade",
  },
  {
    img: null,
    name: "Lardons de volaille",
  },
  {
    img: null,
    name: "Oignons caramélisés",
  },
  {
    img: null,
    name: "Japaleno & Cheese nuggets",
  },
  {
    img: null,
    name: "Galette de Pomme de terre",
  },
];

const GRAT_FROMAGE = [
  {
    img: null,
    name: "Cheddar",
  },
  {
    img: null,
    name: "Gouda",
  },
  {
    img: null,
    name: "Emmental",
  },
  {
    img: null,
    name: "Raclette",
  },
  {
    img: null,
    name: "Mozzarella",
  },
];

const GRAT_GARNITURE = [
  {
    img: null,
    name: "Boeuf façon bacon fumé",
  },
  {
    img: null,
    name: "Champignons",
  },
  {
    img: null,
    name: "Poivronnade",
  },
  {
    img: null,
    name: "Lardons de volaille",
  },
  {
    img: null,
    name: "Oignons caramélisés",
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

    if (randomElement === undefined) {
      break;
    }

    out.push(randomElement);
  }

  return out;
}

function generateTacos(opts) {
  res = {
    success: true,
    error: undefined,
    data: undefined,
  };
  if (!["M", "L", "XL"].includes(opts.size)) {
    res.success = false;
    res.error = "Invalid size. Size must be M, L or XL";
    return res;
  }
  if (Number.isNaN(Number(opts.suppQty))) {
    res.success = false;
    res.error = "Invalid suppQty. suppQty must be a valid number";
    return res;
  }
  if (!["0", "1"].includes(opts.gratFromage)) {
    res.success = false;
    res.error = "Invalid gratFromage. gratFromage must me 0 or 1";
    return res;
  }
  if (!["0", "1"].includes(opts.gratGarniture)) {
    res.success = false;
    res.error = "Invalid gratFromage. gratFromage must me 0 or 1";
    return "Invalid gratGarniture. gratGarniture must me 0 or 1";
  }

  viandeBlackList = opts.viandeBlackList.split(",");
  sauceBlackList = opts.sauceBlackList.split(",");

  const viandesQty = VIANDES_QTY[opts.size];

  let viandes = [...VIANDES];
  let sauces = [...SAUCES];

  viandes = viandes.filter((viande) => !viandeBlackList.includes(viande.name));
  sauces = sauces.filter((sauce) => !sauceBlackList.includes(sauce.name));

  res.data = {
    size: opts.size,
    viandes: getNRandom(viandesQty, viandes),
    sauces: getNRandom(2, sauces),
    supp: getNRandom(opts.suppQty, SUPP),
    gratFromage:
      opts.gratFromage === "1" ? getNRandom(1, GRAT_FROMAGE)[0] : undefined,
    gratGarniture:
      opts.gratFromage === "1" && opts.gratGarniture === "1"
        ? getNRandom(1, GRAT_GARNITURE)[0]
        : undefined,
  };

  return res;
}

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    size: "any size in M, L, XL",
    suppQty: "any number",
    gratFromage: "0 or 1",
    gratGarniture: "0 or 1",
    viandeBlackList: "List of all enwanted viandes separated by a coma",
    sauceBlackList: "List of all enwanted sauces separated by a coma",
  });
});

app.get("/viandes", (req, res) => {
  res.json(VIANDES);
});

app.get("/sauces", (req, res) => {
  res.json(SAUCES);
});

app.get("/supp", (req, res) => {
  res.json(SUPP);
});

app.get("/gratFromage", (req, res) => {
  res.json(GRAT_FROMAGE);
});

app.get("/gratGarniture", (req, res) => {
  res.json(GRAT_GARNITURE);
});

app.get("/viandesQty", (req, res) => {
  res.json(VIANDES_QTY);
});

app.get("/random", (req, res) => {
  const {
    size = "M",
    suppQty = 0,
    gratFromage = "0",
    gratGarniture = "0",
  } = req.query;

  let { viandeBlackList = "", sauceBlackList = "" } = req.query;

  const commande = generateTacos({
    size,
    suppQty,
    gratFromage,
    gratGarniture,
    viandeBlackList,
    sauceBlackList,
  });

  return res.json(commande);
});

app.post("/htmx/random", (req, res, next) => {
  const {
    size = "XL",
    supp_count = "0",
    dPoulet = "off",
    tenders = "off",
    falafel = "off",
    grat_fromage = "off",
    grat_garniture = "off",
  } = req.body;

  const viandeBlackList = [];

  if (dPoulet == "off") viandeBlackList.push("Poulet mariné");
  if (tenders == "off") viandeBlackList.push("Tenders poulet");
  if (falafel == "off") viandeBlackList.push("Falafel");

  const sauceBlackList = [];

  const opts = {
    size,
    suppQty: Number(supp_count),
    gratFromage: grat_fromage == "on" ? "1" : "0",
    gratGarniture: grat_garniture == "on" ? "1" : "0",
    viandeBlackList: viandeBlackList.join(","),
    sauceBlackList: sauceBlackList.join(","),
  };

  const commande = generateTacos(opts);

  if (!commande.success) return res.send("");

  return res.send(`
<div id="recipeContainer" style="display: block;">
  <h2>Viandes</h2>

  <div class="contentBar" id="viandeContentBar">
    ${commande.data.viandes
      .map((viande) => {
        return `
    <div class="contentItem">
      <img src="${viande.img}">
      <p>${viande.name}</p>
    </div>
    `;
      })
      .join("")}
  </div>

  <h2>Sauces</h2>
  <div class="contentBar" id="sauceContentBar">
      ${commande.data.sauces
        .map((sauce) => {
          return `
        <div class="contentItem">
          <img src="${sauce.img}">
          <p>${sauce.name}</p>
        </div>
        `;
        })
        .join("")}
  </div>
  

  <h2>Suppléments</h2>

  <div class="contentBar" id="suppContentBar">
        ${
          commande.data.supp.length <= 0
            ? `
    <div class="textItem">
      <p>Pas de suppléments 💸</p>
    </div>`
            : commande.data.supp
                .map((supp) => {
                  return `
    <div class="textItem">
      <p>${supp.name}</p>
    </div>`;
                })
                .join("")
        }
    
  </div>

  <h2>Gratinage</h2>

  <div class="contentBar" id="gratContentBar"><div class="textItem"><p>Pas de garniture 💸</p></div></div>


</div>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
