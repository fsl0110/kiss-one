import { TopThoughts } from "@apptypes/index";
import { oneBudgetBackside } from "./oneBudgetBackside";
import { oneBudgetRightLeg } from "./oneBudgetRightLeg";
import { oneBudgetArms } from "./oneBudgetArms";
import { oneBudgetLeftLeg } from "./oneBudgetLeftLeg";

export const oneBudget: TopThoughts = {
    "name": "One Budget",
    "description": "",
    "layer": {
        "name": "Everything",
        "description": ""
    },
    "circle": {
        "name": "One Ecology",
        "description": ""
    },
    "heart": {
        "name": "Think",
        "description": ""
    },
    "arms":  oneBudgetArms,
    "leftLeg": oneBudgetLeftLeg,
    "rightLeg":  oneBudgetRightLeg,
    "backside": oneBudgetBackside,
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
    }]
}