
import { TopThoughts } from "@apptypes/index";
import { oneMindsetBackside } from "./oneMindsetBackside";
import { oneMindsetLikelihoods } from "./oneMindsetLikelihoods";
import { oneMindsetPossibilities } from "./oneMindsetPossibilities";
import { oneMindsetRisks } from "./oneMindsetRisks";

export const oneMindset: TopThoughts = {
    "name": "One Mindset",
    "description": "",
    "layer": {
        "name": "Everyone",
        "description": ""
    },
    "circle": {
        "name": "One Life",
        "description": ""
    },
    "heart": {
        "name": "Compassion",
        "description": ""
    },
    "arms": oneMindsetPossibilities,
    "leftLeg": oneMindsetLikelihoods,
    "rightLeg": oneMindsetRisks,
    "backside": oneMindsetBackside,
    "thoughts": [{
        "name": "",
        "description": ""   
    }, {
        "name": "",
        "description": ""   
    },{
        "name": "",
        "description": ""   
    },{
        "name": "",
        "description": ""   
    }],
}