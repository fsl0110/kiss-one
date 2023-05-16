import { oneCurrency } from "./oneCurrency";
import { oneBudget } from "./oneBudget";
import { oneMindset } from "./oneMindset";
import { oneWorld } from "./oneWorld";
import { TopThoughts } from "@apptypes/index";

export const one: TopThoughts = {
    "name": "One",
    "description": "",
    "layer": {
        "name": "Everything",
        "description": ""
    },
    "circle": {
        "name": "Compassion",
        "description": ""
    },
    "heart": {
        "name": "Time",
        "description": ""
    },    
    "arms":oneBudget,
    "leftLeg": oneCurrency,
    "rightLeg": oneWorld,
    "backside": oneMindset,
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