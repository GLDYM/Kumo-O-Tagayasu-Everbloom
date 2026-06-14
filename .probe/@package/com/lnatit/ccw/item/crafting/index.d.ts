import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $SlotFilter_ } from "@package/dev/latvian/mods/kubejs/util";
import { $List } from "@package/java/util";
import { $Record } from "@package/java/lang";

declare module "@package/com/lnatit/ccw/item/crafting" {
    export class $RefiningInput extends $Record implements $RecipeInput {
        main(): $ItemStack;
        size(): number;
        extra(): $ItemStack;
        getItem(arg0: number): $ItemStack;
        sugar(): $ItemStack;
        milk(): $ItemStack;
        isEmpty(): boolean;
        find(filter: $SlotFilter_): $ItemStack;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        self(): $RecipeInput;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        findAll(): $List<$ItemStack>;
        constructor(milk: $ItemStack_, sugar: $ItemStack_, main: $ItemStack_, extra: $ItemStack_);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RefiningInput}.
     */
    export type $RefiningInput_ = { sugar?: $ItemStack_, extra?: $ItemStack_, main?: $ItemStack_, milk?: $ItemStack_,  } | [sugar?: $ItemStack_, extra?: $ItemStack_, main?: $ItemStack_, milk?: $ItemStack_, ];
}
