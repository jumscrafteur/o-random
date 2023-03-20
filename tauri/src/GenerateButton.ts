import { updateUI, fetchRecipe } from "./UIManager";

export async function setupGenerateButton(element: HTMLButtonElement) {
    element.addEventListener('click', async () => {
        element.disabled = true
        await cook()
        element.disabled = false
    })
}


export async function cook() {
    console.log("Cooking ...")
    let recipe = await fetchRecipe()

    updateUI(recipe)

    console.log("Cooking done")

}