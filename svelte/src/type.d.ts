type TacosElement = {
    name: string;
}
type ImagedTacosElement = {
    name: string;
    img: string;
}

type Recipe = {
    size: 'M' | 'L' | 'XL';
    viandes: ImagedTacosElement[];
    sauces: [ImagedTacosElement, ImagedTacosElement];
    supp: TacosElement[];
    gratFromage?: TacosElement;
    gratGarniture?: TacosElement;
}

type newRecipeEvent = CustomEvent<{ recipe: Recipe }>