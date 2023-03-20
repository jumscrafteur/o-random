export default (items: string[]) => {
    return `
<div class="sizeItems">

${items.map((item) => `
<div class="sizeItem">
    <input name="size" type="radio" value="${item}" id="${item}" checked />
    <label for="${item}">${item}</label>
</div>`).join("")}
</div>
`
}