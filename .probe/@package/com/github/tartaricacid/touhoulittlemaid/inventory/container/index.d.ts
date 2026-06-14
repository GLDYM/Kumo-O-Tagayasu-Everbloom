import { $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Inventory, $Player } from "@package/net/minecraft/world/entity/player";
import { $MenuType_, $AbstractContainerMenu, $DataSlot, $Slot } from "@package/net/minecraft/world/inventory";
import { $List } from "@package/java/util";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/inventory/container" {
    export class $AbstractMaidContainer extends $AbstractContainerMenu {
        getMaid(): $EntityMaid;
        handler$jhf001$touhou_little_maid_spell$stillValid(arg0: $Player, arg1: $CallbackInfoReturnable<any>): void;
        dataSlots: $List<$DataSlot>;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: number);
        get maid(): $EntityMaid;
    }
}
