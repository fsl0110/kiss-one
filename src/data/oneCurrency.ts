
import { TopThoughts } from "@apptypes/index";
import { oneCurrencyBackside } from "./oneCurrencyBackside";
import { oneCurrencyArms } from "./oneCurrencyArms";
import { oneCurrencyRightLeg } from "./oneCurrencyRightLeg";
import { oneCurrencyLeftLeg } from "./oneCurrencyLeftLeg";

export const oneCurrency: TopThoughts = {
    "name": "One Currency",
    "description": "",
    "layer": {
        "name": "Everything",
        "description": ""
    },
    "circle": {
        "name": "One Budget",
        "description": ""
    },
    "heart": {
        "name": "Feel",
        "description": ""
    },
    "arms": oneCurrencyArms,
    "leftLeg":oneCurrencyLeftLeg,
    "rightLeg": oneCurrencyRightLeg,
    "backside": oneCurrencyBackside,
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