import { $Predicate_ } from "@package/java/util/function";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $List_, $Map, $List } from "@package/java/util";
import { $BigItemStack } from "@package/com/simibubi/create/content/logistics";

declare module "@package/com/simibubi/create/content/logistics/packager" {
    export class $InventorySummary {
        getStacks(): $List<$BigItemStack>;
        isEmpty(): boolean;
        add(arg0: $ItemStack_, arg1: number): void;
        add(arg0: $InventorySummary): void;
        add(arg0: $BigItemStack): void;
        add(arg0: $ItemStack_): void;
        copy(): $InventorySummary;
        erase(arg0: $ItemStack_): boolean;
        getTotalCount(): number;
        getCountOf(arg0: $ItemStack_): number;
        getItemMap(): $Map<$Item, $List<$BigItemStack>>;
        getStacksByCount(): $List<$BigItemStack>;
        addAllBigItemStacks(arg0: $List_<$BigItemStack>): void;
        addAllItemStacks(arg0: $List_<$ItemStack_>): void;
        divideAndSendTo(arg0: $ServerPlayer, arg1: $BlockPos_): void;
        getTotalOfMatching(arg0: $Predicate_<$ItemStack>): number;
        static CODEC: $Codec<$InventorySummary>;
        contributingLinks: number;
        static EMPTY: $InventorySummary;
        constructor();
        get stacks(): $List<$BigItemStack>;
        get empty(): boolean;
        get totalCount(): number;
        get itemMap(): $Map<$Item, $List<$BigItemStack>>;
        get stacksByCount(): $List<$BigItemStack>;
    }
}
