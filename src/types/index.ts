export type CaptionTag = "h1" | "h2" | "h3" | "strong" | "b" | "div" | "span";
export type CaptionTags = [CaptionTag, CaptionTag, CaptionTag, CaptionTag, CaptionTag];

export type TopThoughts = DetailThoughts & ContextThoughts  & TopMainThoughts & {
    backside: SubThoughts;
}

export type SubThoughts = DetailThoughts & ContextThoughts &  MainThoughts 


type TopMainThoughts = {
    arms: SubThoughts;
    leftLeg: SubThoughts;
    rightLeg: SubThoughts;
}

 type MainThoughts = {
    arms: DetailThoughts;
    leftLeg: DetailThoughts;
    rightLeg: DetailThoughts;
}

type ContextThoughts = {
    layer: Thought;
    circle: Thought;
    heart: Thought;
}

type DetailThoughts = Thought & {
    thoughts:  Thought[];
}



export type Thought = {
    name: string;
    description: string;
}

