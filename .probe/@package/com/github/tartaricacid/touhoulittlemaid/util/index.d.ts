import { $Predicate_ } from "@package/java/util/function";
import { $ItemStack_, $ItemStack, $Item_ } from "@package/net/minecraft/world/item";
import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $LinkedBlockingDeque } from "@package/java/util/concurrent";
import { $IMaidBauble } from "@package/com/github/tartaricacid/touhoulittlemaid/api/bauble";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List } from "@package/java/util";
export * as functional from "@package/com/github/tartaricacid/touhoulittlemaid/util/functional";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/util" {
    export class $ItemsUtil {
        static getStack(arg0: $EntityMaid, arg1: $Predicate_<$ItemStack>): $ItemStack;
        static getStack(arg0: $IItemHandler, arg1: $Predicate_<$ItemStack>): $ItemStack;
        static getItemStack(arg0: string): $ItemStack;
        static findStackSlot(arg0: $IItemHandler, arg1: $Predicate_<$ItemStack>, arg2: number): number;
        static findStackSlot(arg0: $IItemHandler, arg1: $Predicate_<$ItemStack>): number;
        static isStackIn(arg0: $EntityMaid, arg1: $Predicate_<$ItemStack>): boolean;
        static isStackIn(arg0: $IItemHandler, arg1: $Predicate_<$ItemStack>): boolean;
        static getItemId(arg0: $Item_): string;
        static giveItemToMaid(arg0: $EntityMaid, arg1: $ItemStack_): void;
        static dropEntityItems(arg0: $Entity, arg1: $IItemHandler, arg2: number, arg3: number): void;
        static dropEntityItems(arg0: $Entity, arg1: $IItemHandler, arg2: number): void;
        static dropEntityItems(arg0: $Entity, arg1: $IItemHandler): void;
        static canItemInsert(arg0: $Player, arg1: $ItemStack_): boolean;
        static getFilterStackSlots(arg0: $IItemHandler, arg1: $Predicate_<$ItemStack>): $List<number>;
        static getBaubleSlotInMaid(arg0: $EntityMaid, arg1: $IMaidBauble): number;
        static hasBaubleItemInMaid(arg0: $EntityMaid, arg1: $Item_): boolean;
        static hasBaubleStackInMaid(arg0: $EntityMaid, arg1: $ItemStack_): boolean;
    }
    export class $CappedQueue<E> {
        remove(): E;
        size(): number;
        isEmpty(): boolean;
        add(arg0: E): void;
        peek(): E;
        getDeque(): $LinkedBlockingDeque<E>;
        constructor(arg0: number);
        get empty(): boolean;
        get deque(): $LinkedBlockingDeque<E>;
    }
}
