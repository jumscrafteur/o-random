let SUPP_COUNT_INPUT: HTMLInputElement;
let D_POULET_CHECKBOX: HTMLInputElement;
let TENDERS_CHECKBOX: HTMLInputElement;
let FALAFEL_CHECKBOX: HTMLInputElement;
let GRAT_FROMAGE_CHECKBOX: HTMLInputElement;
let GRAT_GARNITURE_CHECKBOX: HTMLInputElement;

let VIANDE_CONTENT_BAR: HTMLDivElement;
let SAUCE_CONTENT_BAR: HTMLDivElement;
let SUPP_CONTENT_BAR: HTMLDivElement;
let GRAT_CONTENT_BAR: HTMLDivElement;
let RECIPE_CONTAINER: HTMLDivElement;


export function linkUI(inputsElements: HTMLInputElement[], contentBarsElements: HTMLDivElement[]) {
    SUPP_COUNT_INPUT = inputsElements[0]
    D_POULET_CHECKBOX = inputsElements[1]
    TENDERS_CHECKBOX = inputsElements[2]
    FALAFEL_CHECKBOX = inputsElements[3]
    GRAT_FROMAGE_CHECKBOX = inputsElements[4]
    GRAT_GARNITURE_CHECKBOX = inputsElements[5]

    VIANDE_CONTENT_BAR = contentBarsElements[0]
    SAUCE_CONTENT_BAR = contentBarsElements[1]
    SUPP_CONTENT_BAR = contentBarsElements[2]
    GRAT_CONTENT_BAR = contentBarsElements[3]
    RECIPE_CONTAINER = contentBarsElements[4]
}

export function updateUI(recipe: Recipe) {
    function createContentItem(name: string, img: string) {
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

    function createTextItem(name: string) {
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

    RECIPE_CONTAINER.style.display = "block"
}

export async function fetchRecipe() {
    const sizeElement = document.querySelector("input[name=size]:checked") as HTMLInputElement
    const size = sizeElement.value
    let url = new URL('http://dev.local:3000/random')

    let viandeBlacklist = []

    if (!D_POULET_CHECKBOX.checked)
        viandeBlacklist.push("Poulet mariné")
    if (!TENDERS_CHECKBOX.checked)
        viandeBlacklist.push("Tenders poulet")
    if (!FALAFEL_CHECKBOX.checked)
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
    return await recipe_res.json()
}