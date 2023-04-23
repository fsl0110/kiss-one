import { oneCurrency } from "./oneCurrency";
import { oneBudget } from "./oneBudget";
import { oneMindset } from "./oneMindset";
import { oneWorld } from "./oneWorld";

export type Thoughts = {
    name: string;
    description: string;
    thoughts:  Thought[]
}
export type Thought = {
    teaser: string;
    description: string;
}

export type ShortThought = {
    name: string;
    description: string;
}

export type LayerThought = {
    name: string;
    description: string;
}

export type OneThought = {
    name: string;
    description: string;
    layer: LayerThought;
    circle: ShortThought;
    heart: ShortThought;
    arms: Thoughts;
    leftLeg: Thoughts;
    rightLeg:  Thoughts;
}

type OneThoughts = {
    "OneWorld": OneThought;
    "OneBudget": OneThought;
    "OneCurrency": OneThought;
    "OneMindset": OneThought;
}

export const oneThoughts: OneThoughts = {
    "OneWorld": oneWorld,
    "OneBudget": oneBudget,
    "OneCurrency": oneCurrency,
    "OneMindset": oneMindset
}

       