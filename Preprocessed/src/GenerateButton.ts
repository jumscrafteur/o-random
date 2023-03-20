import { updateUI, fetchRecipe } from "./UIManager";

export async function setupGenerateButton(element: HTMLButtonElement) {
    element.disabled = true;
    await cook()
    element.disabled = false;

    element.addEventListener('click', async () => await cook())
}


export async function cook() {
    console.log("Cooking ...")
    let recipe = await fetchRecipe()

    updateUI(recipe)

    console.log("Cooking done")

}