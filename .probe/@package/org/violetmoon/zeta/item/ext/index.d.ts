import { $LevelReader } from "@package/net/minecraft/world/level";
import { $Consumer_ } from "@package/java/util/function";
import { $InteractionResult } from "@package/net/minecraft/world";
import { $BlockPos_, $Holder_, $HolderLookup$RegistryLookup } from "@package/net/minecraft/core";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $RecipeType_ } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Enchantment, $ItemEnchantments, $Enchantment_ } from "@package/net/minecraft/world/item/enchantment";
import { $LivingEntity, $EquipmentSlot_ } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $EnderMan } from "@package/net/minecraft/world/entity/monster";

declare module "@package/org/violetmoon/zeta/item/ext" {
    export class $ItemExtensionFactory {
    }
    export interface $ItemExtensionFactory {
        get(arg0: $ItemStack_): $IZetaItemExtensions;
        getInternal(arg0: $ItemStack_): $IZetaItemExtensions;
    }
    /**
     * Values that may be interpreted as {@link $ItemExtensionFactory}.
     */
    export type $ItemExtensionFactory_ = ((arg0: $ItemStack) => $IZetaItemExtensions);
    export class $IZetaItemExtensions {
    }
    export interface $IZetaItemExtensions {
        damageItemZeta<T extends $LivingEntity>(arg0: $ItemStack_, arg1: number, arg2: T, arg3: $Consumer_<$Item>): number;
        canShearZeta(arg0: $ItemStack_): boolean;
        onItemUseFirstZeta(arg0: $ItemStack_, arg1: $UseOnContext): $InteractionResult;
        isRepairableZeta(arg0: $ItemStack_): boolean;
        canEquipZeta(arg0: $ItemStack_, arg1: $EquipmentSlot_, arg2: $LivingEntity): boolean;
        getBurnTimeZeta(arg0: $ItemStack_, arg1: $RecipeType_<never>): number;
        isEnderMaskZeta(arg0: $ItemStack_, arg1: $Player, arg2: $EnderMan): boolean;
        canElytraFlyZeta(arg0: $ItemStack_, arg1: $LivingEntity): boolean;
        shouldCauseReequipAnimationZeta(arg0: $ItemStack_, arg1: $ItemStack_, arg2: boolean): boolean;
        /**
         * @deprecated
         */
        getAllEnchantmentsZeta(arg0: $ItemStack_, arg1: $HolderLookup$RegistryLookup<$Enchantment_>): $ItemEnchantments;
        getEnchantmentValueZeta(arg0: $ItemStack_): number;
        isBookEnchantableZeta(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        onEntityItemUpdateZeta(arg0: $ItemStack_, arg1: $ItemEntity): boolean;
        getEnchantmentLevelZeta(arg0: $ItemStack_, arg1: $Holder_<$Enchantment>): number;
        doesSneakBypassUseZeta(arg0: $ItemStack_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Player): boolean;
    }
}
