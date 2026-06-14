import { $Int2ObjectSortedMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $BiPredicate_ } from "@package/java/util/function";
import { $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack, $Item_ } from "@package/net/minecraft/world/item";
import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $IMaidBauble } from "@package/com/github/tartaricacid/touhoulittlemaid/api/bauble";
import { $ItemStackHandler } from "@package/net/neoforged/neoforge/items";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/inventory/handler" {
    export class $BaubleItemHandler extends $ItemStackHandler {
        clearAll(): void;
        fireEvent(arg0: $BiPredicate_<$IMaidBauble, $ItemStack>): boolean;
        containsItem(arg0: $Item_): boolean;
        getBaubleSlot(arg0: $IMaidBauble): number;
        getSyncClientBauble(arg0: $EntityMaid): $Int2ObjectSortedMap<$ItemStack>;
        getBaubleInSlot(arg0: number): $IMaidBauble;
        constructor(arg0: $NonNullList<$ItemStack_>);
        constructor(arg0: number);
        constructor();
    }
}
