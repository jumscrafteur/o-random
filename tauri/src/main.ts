import './style.css'
import { setupGenerateButton } from './GenerateButton'
import { linkUI } from './UIManager'

import Header from './components/Header'
import Footer from './components/Footer'
import SizeItems from './components/SizeItems'
import { NumberInput, CheckboxInput } from './components/Inputs'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

${Header()}

<main>
    <h1>Fait ta o'recette</h1>

    <div class="params">    

        <div>
            <h2>Tailles</h2>

            <div class="sizeBar">
                ${SizeItems(['M', 'L', 'XL'])}
            </div>
        </div>

        <div>
            <h2>Options</h2>
            <div class="optBar">

                ${NumberInput("supp_count", "Suppléments", 0, 14)}
                ${CheckboxInput("dPoulet", "Double poulet")}
                ${CheckboxInput("tenders", "Tenders")}
                ${CheckboxInput("falafel", "Falafels")}

            </div>
        </div>
        
        <div>
            <h2>Gratinage</h2>

            <div class="optBar">

                ${CheckboxInput("grat_fromage", "Fromage")}
                ${CheckboxInput("grat_garniture", "Garniture")}

            </div>
        </div>


        <button id="generate_btn">GENERATE</button>
    </div>
    <div id="recipeContainer">
        <h2>Viandes</h2>

        <div class="contentBar" id="viandeContentBar"></div>

        <h2>Sauces</h2>

        <div class="contentBar" id="sauceContentBar"></div>

        <h2>Suppléments</h2>

        <div class="contentBar" id="suppContentBar">

        </div>

        <h2>Gratinage</h2>

        <div class="contentBar" id="gratContentBar">

        </div>


    </div>
</main>
${Footer()}
`

const InputsSelectors = [
    "#supp_count",
    "#dPoulet",
    "#tenders",
    "#falafel",
    "#grat_fromage",
    "#grat_garniture",
]

const ConstentBarsSelectors = [
    "#viandeContentBar",
    "#sauceContentBar",
    "#suppContentBar",
    "#gratContentBar",
    "#recipeContainer"
]

linkUI(
    InputsSelectors.map((elementQuery) => document.querySelector(elementQuery)!),
    ConstentBarsSelectors.map((elementQuery) => document.querySelector(elementQuery)!)
)

const GENERATE_BTN = document.querySelector("#generate_btn") as HTMLButtonElement
setupGenerateButton(GENERATE_BTN)