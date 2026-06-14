import { $Climate$RTree$Leaf } from "@package/net/minecraft/world/level/biome";
import { $Record } from "@package/java/lang";

declare module "@package/com/terraformersmc/biolith/api/biome" {
    export class $BiolithFittestNodes<T> extends $Record {
        of(ultimate: $Climate$RTree$Leaf<T>, ultimateDistance: number, penultimate: $Climate$RTree$Leaf<T>, penultimateDistance: number): $BiolithFittestNodes<T>;
        penultimate(): $Climate$RTree$Leaf<T>;
        ultimateDistance(): number;
        ultimate(): $Climate$RTree$Leaf<T>;
        penultimateDistance(): number;
        withPenultimate(penultimate: $Climate$RTree$Leaf<T>, penultimateDistance: number): $BiolithFittestNodes<T>;
        constructor(ultimate: $Climate$RTree$Leaf<T>, ultimateDistance: number);
        constructor(ultimate: $Climate$RTree$Leaf<T>, ultimateDistance: number, penultimate: $Climate$RTree$Leaf<T>, penultimateDistance: number);
    }
    /**
     * Values that may be interpreted as {@link $BiolithFittestNodes}.
     */
    export type $BiolithFittestNodes_<T> = { ultimateDistance?: number, penultimateDistance?: number, ultimate?: $Climate$RTree$Leaf<any>, penultimate?: $Climate$RTree$Leaf<any>,  } | [ultimateDistance?: number, penultimateDistance?: number, ultimate?: $Climate$RTree$Leaf<any>, penultimate?: $Climate$RTree$Leaf<any>, ];
}
