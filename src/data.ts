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
    name: "time" | "yourself" | "everyone" | "everything";
    description: string;
}

export type Item = {
    name: string;
    description: string;
    layer: LayerThought;
    circle: ShortThought;
    intersection: ShortThought;
    arms: Thoughts;
    leftLeg: Thoughts;
    rightLeg:  Thoughts;
}

export type Data = {
    "OneWorld": Item;
    "OneBudget": Item;
    "OneCurrency": Item;
    "OneMindset": Item;
}

export const data = {
    "OneWorld": {
        "name": "One World",
        "description": "",
        "layer": {
            "name": "Everything",
            "description": ""
        },
        "circle": {
            "name": "World",
            "description": ""
        },
        "intersection": {
            "name": "Act",
            "description": ""
        },
        "arms": {
            "name": "Shared Ressources",
            "description": "",
            "thoughts": [{
                "teaser": "Land ownership obligates sharing natural ressources",
                "description": ""
            },{
                "teaser": "Knowledge ownership obligates sharing know how",
                "description": ""
            },{
                "teaser": "Happiness ownership obligates sharing happiness",
                "description": ""
            },{
                "teaser": "...",
                "description": ""
            }]
        },
        "leftLeg": {          
            "name": "Olympic Share Economy",
            "description": "",
            "thoughts": [{
                "teaser": "Reward of the best and promotion of the worst instead of survival of the fittest",
                "description": ""
            },{
                "teaser": "Primary goal is getting better and better not getting more and more",
                "description": ""
            },{
                "teaser": "Money follows the championship not championship the money",
                "description": ""
            },{
                "teaser": "True sharing economy enables well-being for everyone",
                "description": ""
            },{
                "teaser": "...",
                "description": ""
            }]
        },
        "rightLeg": {
            "name": "Lived Synergy",
            "description": "",
            "thoughts": [{
                "teaser": "Shared ressources enable lived synergy",
                "description": ""   
            }, {
                "teaser": "The Olympic economy increases lived synergy",
                "description": ""   
            },{
                "teaser": "Lived synergy enables well-being for everyone",
                "description": ""   
            },{
                "teaser": " Well-being for everyone increases well-being for everything",
                "description": ""   
            },{
                "teaser": "...",
                "description": ""   
            }]
        },
    },
    "OneBudget": {
        "name": "One Budget",
        "description": "",
        "layer": {
            "name": "Everything",
            "description": ""
        },
        "circle": {
            "name": "Ecology",
            "description": ""
        },
        "intersection": {
            "name": "Act",
            "description": ""
        },
        "arms": {
            "name": "Rethought Revenues",
            "description": "",
            "thoughts": [{
                "teaser": "A revenue is between everthing wins and no one really loses",
                "description": ""   
            }, {
                "teaser": "Revenues must be shared fairly with all parties involved",
                "description": ""   
            },{
                "teaser": "A revenue is a thank you, it's an award for good work",
                "description": ""   
            },{
                "teaser": "...",
                "description": ""   
            }]
        },
        "leftLeg": {
            "name": "Rethought Incomes",
            "description": "",
            "thoughts": [{
                "teaser": "Everyone has a right to a basic income",
                "description": "Incomes are based on "   
            }, {
                "teaser": "Incomes are based on value to community and nature",
                "description": ""   
            }, {
                "teaser": "Income are consumption rights for community and natural resources",
                "description": ""   
            }, {
                "teaser": "More value for the community means more consumption rights and vice versa",
                "description": ""   
            },{
                "teaser": "...",
                "description": ""   
            }]
        },
        "rightLeg": {
            "name": "Rethought Prices",
            "description": "",
            "thoughts": [{
                "teaser": "Prices are based on the damage to the community and nature",
                "description": ""   
            }, {
                "teaser": "Subsidies are possible by balancing within the total budget",
                "description": ""   
            },{
                "teaser": "The more sustainable the cheaper and vice versa",
                "description": ""   
            },{
                "teaser": "The more useful the cheaper and vice versa",
                "description": ""   
            },{
                "teaser": "The healthier the cheaper and vice versa",
                "description": ""   
            }, {
                "teaser": "",
                "description": ""   
            }]
        },  
    },
    "OneCurrency": {
        "name": "One Currency",
        "description": "",
        "layer": {
            "name": "Everyone",
            "description": ""
        },
        "circle": {
            "name": "Budget",
            "description": ""
        },
        "intersection": {
            "name": "Act",
            "description": ""
        },
        "arms":{
            "name": "Ecosocial Currency",
            "description": "",
            "thoughts": [{
                "teaser": "Reflects social values",
                "description": ""   
            },{
                "teaser": "Reflects ecological values",
                "description": ""   
            }, {
                "teaser": "Controls social and ecological values",
                "description": ""   
            },{
                "teaser": "...",
                "description": ""   
            }],
        },
        "leftLeg":{
            "name": "Ecosocial Transparency",
            "description": "",
            "thoughts": [{
                "teaser": "Leads to a better understanding",
                "description": ""   
            }, {
                "teaser": "Leads to a better behavior",
                "description": ""   
            },{
                "teaser": "Leads to a better life",
                "description": ""   
            },{
                "teaser": "...",
                "description": ""   
            }]
        },
        "rightLeg": {
            "name": "Ecosocial Fairness",
            "description": "",
            "thoughts": [{
                "teaser": "No need to be smart just follow the prices",
                "description": ""   
            },{
                "teaser": "No need to be smart or ... just help the society",
                "description": ""   
            },{
                "teaser": "Fairness towards nature",
                "description": ""   
            }, {
                "teaser": "Fairness towards animals",
                "description": ""   
            },{
                "teaser": "Fairness towards everyone",
                "description": ""   
            },{
                "teaser": "Fairness towards ourselves",
                "description": ""   
            },{
                "teaser": "...",
                "description": ""   
            }]
        },
    },
    "OneMindset": {
        "name": "One Mindset",
        "description": "",
        "layer": {
            "name": "Everyone",
            "description": ""
        },
        "circle": {
            "name": "World",
            "description": ""
        },
        "intersection": {
            "name": "Think",
            "description": ""
        },
        "arms": {
            "name": "Possibilities",
            "description": "",
            "thoughts": [{
                "teaser": "Salaries driven by social values",
                "description": ""   
            }, {
                "teaser": "Cooperation driven by ecological needs",
                "description": ""   
            },{
                "teaser": "Prices driven by ecological and social needs",
                "description": ""   
            },{
                "teaser": "More synergies in research through more cooperation",
                "description": ""   
            }, {
                "teaser": " More prosperity through more sustainability research",
                "description": ""   
            },{
                "teaser": "More prosperity through more sustainability acting",
                "description": ""   
            },{
                "teaser": "No wars anymore",
                "description": ""   
            }, {
                "teaser": "No hunger anymore",
                "description": ""   
            },{
                "teaser": "No poverty anymore",
                "description": ""   
            },{
                "teaser": "No refugees anymore",
                "description": ""   
            }, {
                "teaser": "Same rights for every human",
                "description": ""   
            },{
                "teaser": "Same chances for every human",
                "description": ""   
            },{
                "teaser": "Same ressources for every human",
                "description": ""   
            }, {
                "teaser": "...",
                "description": ""   
            }]
        },
        "leftLeg": {
            "name": "Likelihoods",
            "description": "",
            "thoughts": [{
                "teaser": "Dependent on natural disasters",
                "description": ""   
            }, {
                "teaser": "Dependent on deseases",
                "description": ""   
            },{
                "teaser": "Dependent on wars",
                "description": ""   
            },{
                "teaser": "Dependent on a lack of raw materials",
                "description": ""   
            }, {
                "teaser": "Dependent on water shortage",
                "description": ""   
            },{
                "teaser": "Dependent on lack of food",
                "description": ""   
            },{
                "teaser": "Dependent on poverty",
                "description": ""   
            }, {
                "teaser": "Dependent on thoughts",
                "description": ""   
            },{
                "teaser": "Dependent on knowledge",
                "description": ""   
            },{
                "teaser": "Dependent on compassion",
                "description": ""   
            },{
                "teaser": "Dependent on understanding",
                "description": ""   
            }, {
                "teaser": "Dependent on me",
                "description": ""   
            }, {
                "teaser": "Dependent on you",
                "description": ""   
            },{
                "teaser": "Dependent on everyone",
                "description": ""   
            },{
                "teaser": "Dependent on everything",
                "description": ""   
            },{
                "teaser": "...",
                "description": ""   
            }
            ]
        },
        "rightLeg": {
            "name": "Risks",
            "description": "",
            "thoughts": [{
                "teaser": "To do nothing",
                "description": ""   
            }, {
                "teaser": "To do not enough",
                "description": ""   
            },{
                "teaser": "To do the wrong things",
                "description": ""   
            },{
                "teaser": "...",
                "description": ""   
            }]
        }
    }
}

       