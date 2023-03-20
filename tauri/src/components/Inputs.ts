export const NumberInput = (_for: string, label: string, min: Number, max: Number) => {
    return `
<div class="optItem">
    <label for="${_for}">${label}</label>
    <input id="${_for}" type="number" min="${min}" max="${max}" value="${min}" />
</div>`
}

export const CheckboxInput = (_for: string, label: string) => {
    return `
<div class="optItem">
    <input id="${_for}" type="checkbox" />
    <label for="${_for}">${label}</label>
</div>`
}