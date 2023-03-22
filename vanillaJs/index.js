const GENERATE_BTN = document.querySelector("#generate_btn")
const SUPP_COUNT_INPUT = document.querySelector("#supp_count")
const D_POULET_CHECKBOX = document.querySelector("#dPoulet")
const TENDERS_CHECKBOX = document.querySelector("#tenders")
const FALAFEL_CHECKBOX = document.querySelector("#falafel")
const GRAT_FROMAGE_CHECKBOX = document.querySelector("#grat_fromage")
const GRAT_GARNITURE_CHECKBOX = document.querySelector("#grat_garniture")

const RECIPE_CONRAINER = document.querySelector("#recipeContainer")
const VIANDE_CONTENT_BAR = document.querySelector("#viandeContentBar")
const SAUCE_CONTENT_BAR = document.querySelector("#sauceContentBar")
const SUPP_CONTENT_BAR = document.querySelector("#suppContentBar")
const GRAT_CONTENT_BAR = document.querySelector("#gratContentBar")

async function fetchRecipe() {
    const size = document.querySelector("input[name=size]:checked").value
    let url = new URL(`${API_URL}/random`)

    let viandeBlacklist = []

    if (!D_POULET_CHECKBOX.checked)
        viandeBlacklist.push("Poulet mariné")
    if (!D_POULET_CHECKBOX.checked)
        viandeBlacklist.push("Tenders poulet")
    if (!D_POULET_CHECKBOX.checked)
        viandeBlacklist.push("Falafel")

    let params = {
        size,
        suppQty: SUPP_COUNT_INPUT.value,
        viandeBlackList: viandeBlacklist.join(","),
        gratFromage: GRAT_FROMAGE_CHECKBOX.checked ? "1" : "0",
        gratGarniture: GRAT_FROMAGE_CHECKBOX.checked && GRAT_GARNITURE_CHECKBOX.checked ? "1" : "0"

    }

    url.search = new URLSearchParams(params).toString()

    let recipe_res = await fetch(url)
    return recipe = await recipe_res.json()
}

function updateUI(recipe) {
    function createContentItem(name, img) {
        let contentItem = document.createElement('div')
        contentItem.classList.add('contentItem')

        let contentItemImg = document.createElement('img')
        contentItemImg.src = img

        let contentItemP = document.createElement('p')
        contentItemP.innerText = name

        contentItem.appendChild(contentItemImg)
        contentItem.appendChild(contentItemP)

        return contentItem
    }

    function createTextItem(name) {
        let textItem = document.createElement('div')
        textItem.classList.add('textItem')

        let textItemP = document.createElement('p')
        textItemP.innerText = name

        textItem.appendChild(textItemP)

        return textItem
    }

    VIANDE_CONTENT_BAR.replaceChildren(...recipe.viandes.map((viande) => createContentItem(viande.name, viande.img)))

    SAUCE_CONTENT_BAR.replaceChildren(...recipe.sauces.map((sauce) => createContentItem(sauce.name, sauce.img)))

    if (recipe.supp.length == 0)
        SUPP_CONTENT_BAR.replaceChildren(createTextItem("Pas de suppléments 💸"))
    else
        SUPP_CONTENT_BAR.replaceChildren(...recipe.supp.map((supp) => createTextItem(supp.name)))

    if (!recipe.gratFromage)
        GRAT_CONTENT_BAR.replaceChildren(createTextItem("Pas de garniture 💸"))
    else
        GRAT_CONTENT_BAR.replaceChildren(createTextItem(recipe.gratFromage.name))

    if (recipe.gratGarniture)
        GRAT_CONTENT_BAR.appendChild(createTextItem(recipe.gratGarniture.name))
}

async function cook() {
    console.log("Cooking ...")

    let recipe = await fetchRecipe()

    console.log(recipe)

    updateUI(recipe)

    console.log("Cooking done")

}

GENERATE_BTN.addEventListener('click', async () => {
    GENERATE_BTN.disabled = true;

    await cook()
    GENERATE_BTN.disabled = false;
    RECIPE_CONRAINER.style.display = 'Block';


})

document.addEventListener('DOMContentLoaded', async () => {
    await cook()
})

console.log(process.env.MY_VAR)