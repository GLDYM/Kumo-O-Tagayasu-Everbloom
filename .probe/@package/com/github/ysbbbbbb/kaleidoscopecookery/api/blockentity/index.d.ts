import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $LivingEntity } from "@package/net/minecraft/world/entity";

declare module "@package/com/github/ysbbbbbb/kaleidoscopecookery/api/blockentity" {
    export class $IMillstone {
    }
    export interface $IMillstone {
        onPutItem(arg0: $Level_, arg1: $ItemStack_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IMillstone}.
     */
    export type $IMillstone_ = ((arg0: $Level, arg1: $ItemStack) => boolean);
    export class $IStockpot {
        static PUT_INGREDIENT: number;
        static COOKING: number;
        static PUT_SOUP_BASE: number;
        static FINISHED: number;
    }
    export interface $IStockpot {
        getStatus(): number;
        addSoupBase(arg0: $Level_, arg1: $LivingEntity, arg2: $ItemStack_): boolean;
        addIngredient(arg0: $Level_, arg1: $LivingEntity, arg2: $ItemStack_): boolean;
        hasHeatSource(arg0: $Level_): boolean;
        takeOutProduct(arg0: $Level_, arg1: $LivingEntity, arg2: $ItemStack_): boolean;
        hasLid(): boolean;
        onLitClick(arg0: $Level_, arg1: $LivingEntity, arg2: $ItemStack_): boolean;
        removeIngredient(arg0: $Level_, arg1: $LivingEntity): boolean;
        removeSoupBase(arg0: $Level_, arg1: $LivingEntity, arg2: $ItemStack_): boolean;
        get status(): number;
    }
}
