import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $List_, $List } from "@package/java/util";

declare module "@package/com/cake/trading_floor/compat/jei/virtual_recipes/potential_villager_trade" {
    export class $PotentialMerchantOfferInfo {
        getCostB(): $ItemStack;
        getCostA(): $ItemStack;
        isNoteRandomisedEmeraldCost(): boolean;
        getPossibleResults(): $List<$ItemStack>;
        isNoteRandomisedDyeColor(): boolean;
        isImplyEnchantedVariants(): boolean;
        isNoteVillagerTypeSpecific(): boolean;
        noteVillagerTypeSpecific(): $PotentialMerchantOfferInfo;
        noteRandomisedDyeColor(): $PotentialMerchantOfferInfo;
        noteRandomisedEmeraldCost(): $PotentialMerchantOfferInfo;
        withImpliedEnchantVariants(): $PotentialMerchantOfferInfo;
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_);
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $List_<$ItemStack_>);
        get costB(): $ItemStack;
        get costA(): $ItemStack;
        get possibleResults(): $List<$ItemStack>;
        get implyEnchantedVariants(): boolean;
    }
}
