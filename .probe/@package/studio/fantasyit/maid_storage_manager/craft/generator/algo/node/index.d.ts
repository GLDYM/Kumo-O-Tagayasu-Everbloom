import { $BiConsumer_ } from "@package/java/util/function";
import { $ICachableGeneratorGraph } from "@package/studio/fantasyit/maid_storage_manager/craft/generator/algo";
import { $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Pair } from "@package/oshi/util/tuples";
import { $List_, $UUID, $List } from "@package/java/util";

declare module "@package/studio/fantasyit/maid_storage_manager/craft/generator/algo/node" {
    export class $IngredientNode extends $Node {
        isEqualTo(arg0: $Ingredient_): boolean;
        edgesRev: $List<$Pair<number, number>>;
        possibleItems: $List<$ItemStack>;
        anyAvailable: boolean;
        isRemoved: boolean;
        related: boolean;
        edges: $List<$Pair<number, number>>;
        possibleItemNodes: $List<$ItemNode>;
        id: number;
        cachedUUID: $UUID;
        inqueue: boolean;
        constructor(arg0: number, arg1: $List_<$ItemNode>);
    }
    export class $Node {
        addEdge(arg0: $Node, arg1: number): void;
        removeAllEdges(arg0: $ICachableGeneratorGraph): void;
        setNonRemoved(): void;
        forEachEdge(arg0: $BiConsumer_<number, number>): void;
        forEachRev(arg0: $BiConsumer_<number, number>): void;
        edgesRev: $List<$Pair<number, number>>;
        isRemoved: boolean;
        related: boolean;
        edges: $List<$Pair<number, number>>;
        id: number;
        inqueue: boolean;
        constructor(arg0: number);
    }
    export class $ItemNode extends $Node {
        edgesRev: $List<$Pair<number, number>>;
        isAvailable: boolean;
        itemStack: $ItemStack;
        isRemoved: boolean;
        related: boolean;
        edges: $List<$Pair<number, number>>;
        id: number;
        inqueue: boolean;
        constructor(arg0: number, arg1: boolean, arg2: $ItemStack_);
    }
    export class $SpecialCraftNode extends $Node {
        generate(arg0: $ICachableGeneratorGraph): void;
        addNextNodes(arg0: $ICachableGeneratorGraph): void;
        buildGraph(arg0: $ICachableGeneratorGraph): void;
        edgesRev: $List<$Pair<number, number>>;
        isRemoved: boolean;
        related: boolean;
        edges: $List<$Pair<number, number>>;
        id: number;
        inqueue: boolean;
        constructor(arg0: number);
    }
}
