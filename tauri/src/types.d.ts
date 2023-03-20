type TacosElement = {
    name: string;
}
type ImagedTacosElement = {
    name: string;
    img: string;
}

type Recipe = {
    viandes: ImagedTacosElement[];
    sauces: [ImagedTacosElement, ImagedTacosElement];
    supp: TacosElement[];
    gratFromage?: TacosElement;
    gratGarniture?: TacosElement;
}