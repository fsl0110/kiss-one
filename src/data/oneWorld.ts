
import { TopThoughts } from "@apptypes/index";
import { oneWorldBackside } from "./oneWorldBackside";
import { oneWorldRightLeg } from "./oneWorldRightLeg";
import { oneWorldLeftLeg } from "./oneWorldLeftLeg";
import { oneWorldArms } from "./oneWorldArms";


export const oneWorld: TopThoughts = {
    "name": "One World",
    "description": "",
    "layer": {
        "name": "Everything",
        "description": ""
    },
    "circle": {
        "name": "One Currency",
        "description": ""
    },
    "heart": {
        "name": "Act",
        "description": ""
    },
    "arms": oneWorldArms,
    "leftLeg": oneWorldLeftLeg,
    "rightLeg": oneWorldRightLeg,
    "backside": oneWorldBackside,
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