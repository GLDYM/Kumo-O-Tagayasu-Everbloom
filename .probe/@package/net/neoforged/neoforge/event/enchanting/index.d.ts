import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $Holder_, $Holder, $Holder$Reference, $HolderLookup$RegistryLookup } from "@package/net/minecraft/core";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ItemEnchantments$Mutable, $Enchantment, $Enchantment_ } from "@package/net/minecraft/world/item/enchantment";
import { $ResourceKey_ } from "@package/net/minecraft/resources";

declare module "@package/net/neoforged/neoforge/event/enchanting" {
    export class $EnchantmentLevelSetEvent extends $Event {
        getLevel(): $Level;
        getItem(): $ItemStack;
        getPower(): number;
        getPos(): $BlockPos;
        getEnchantLevel(): number;
        getEnchantRow(): number;
        setEnchantLevel(arg0: number): void;
        getOriginalLevel(): number;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: number, arg3: number, arg4: $ItemStack_, arg5: number);
        get level(): $Level;
        get item(): $ItemStack;
        get power(): number;
        get pos(): $BlockPos;
        get enchantRow(): number;
        get originalLevel(): number;
    }
    export class $GetEnchantmentLevelEvent extends $Event {
        getStack(): $ItemStack;
        getLookup(): $HolderLookup$RegistryLookup<$Enchantment>;
        getEnchantments(): $ItemEnchantments$Mutable;
        getHolder(arg0: $ResourceKey_<$Enchantment>): ($Holder$Reference<$Enchantment>) | undefined;
        getTargetEnchant(): $Holder<$Enchantment>;
        isTargetting(arg0: $Holder_<$Enchantment>): boolean;
        isTargetting(arg0: $ResourceKey_<$Enchantment>): boolean;
        constructor(arg0: $ItemStack_, arg1: $ItemEnchantments$Mutable, arg2: $Holder_<$Enchantment>, arg3: $HolderLookup$RegistryLookup<$Enchantment_>);
        get stack(): $ItemStack;
        get lookup(): $HolderLookup$RegistryLookup<$Enchantment>;
        get enchantments(): $ItemEnchantments$Mutable;
        get targetEnchant(): $Holder<$Enchantment>;
    }
}
