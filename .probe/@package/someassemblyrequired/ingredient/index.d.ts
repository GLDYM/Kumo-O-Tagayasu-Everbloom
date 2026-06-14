import { $Level_ } from "@package/net/minecraft/world/level";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockPos_, $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $FoodProperties, $FoodProperties_ } from "@package/net/minecraft/world/food";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Record } from "@package/java/lang";

declare module "@package/someassemblyrequired/ingredient" {
    export class $IngredientProperties extends $Record implements $IngredientPropertiesBase {
        displayName(): ($Component) | undefined;
        item(): $Holder<$Item>;
        fullName(): ($Component) | undefined;
        sound(): $Holder<$SoundEvent>;
        hidden(): boolean;
        renderAsItem(): boolean;
        height(): number;
        displayItem(): $ItemStack;
        food(): ($FoodProperties) | undefined;
        getDisplayName(arg0: $ItemStack_): $Component;
        getFullName(arg0: $ItemStack_): $Component;
        playSound(arg0: $Level_, arg1: $Player, arg2: $BlockPos_, arg3: number): void;
        getDisplayItem(arg0: $ItemStack_): $ItemStack;
        getFood(arg0: $ItemStack_, arg1: $LivingEntity): $FoodProperties;
        static CODEC: $Codec<$IngredientProperties>;
        constructor(item: $Holder_<$Item>, food: ($FoodProperties_) | undefined, displayName: ($Component_) | undefined, fullName: ($Component_) | undefined, displayItem: $ItemStack_, sound: $Holder_<$SoundEvent>, height: number, renderAsItem: boolean, hidden: boolean);
    }
    /**
     * Values that may be interpreted as {@link $IngredientProperties}.
     */
    export type $IngredientProperties_ = RegistryTypes.SomeassemblyrequiredIngredients | { height?: number, sound?: $Holder_<$SoundEvent>, fullName?: ($Component_) | undefined, item?: $Holder_<$Item>, renderAsItem?: boolean, displayItem?: $ItemStack_, displayName?: ($Component_) | undefined, hidden?: boolean, food?: ($FoodProperties_) | undefined,  } | [height?: number, sound?: $Holder_<$SoundEvent>, fullName?: ($Component_) | undefined, item?: $Holder_<$Item>, renderAsItem?: boolean, displayItem?: $ItemStack_, displayName?: ($Component_) | undefined, hidden?: boolean, food?: ($FoodProperties_) | undefined, ];
    export class $IngredientPropertiesBase {
    }
    export interface $IngredientPropertiesBase {
        displayName(): ($Component) | undefined;
        getDisplayName(arg0: $ItemStack_): $Component;
        fullName(): ($Component) | undefined;
        getFullName(arg0: $ItemStack_): $Component;
        sound(): $Holder<$SoundEvent>;
        hidden(): boolean;
        renderAsItem(): boolean;
        height(): number;
        playSound(arg0: $Level_, arg1: $Player, arg2: $BlockPos_, arg3: number): void;
        displayItem(): $ItemStack;
        getDisplayItem(arg0: $ItemStack_): $ItemStack;
        food(): ($FoodProperties) | undefined;
        getFood(arg0: $ItemStack_, arg1: $LivingEntity): $FoodProperties;
    }
    export interface $IngredientProperties extends RegistryMarked<RegistryTypes.SomeassemblyrequiredIngredientsTag, RegistryTypes.SomeassemblyrequiredIngredients> {}
}
