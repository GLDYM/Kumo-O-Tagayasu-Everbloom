import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";

declare module "@package/com/bmt/kaleidoscope_compat/mixins/kaleidoscope_cookery/accessor" {
    export class $MobEffectInstanceAccessor {
    }
    export interface $MobEffectInstanceAccessor {
        getDuration(): number;
        setDuration(arg0: number): void;
    }
    export class $MillstoneBlockEntityAccessor {
    }
    export interface $MillstoneBlockEntityAccessor {
        setInput(arg0: $ItemStack_): void;
        getInput(): $ItemStack;
        getProgress(): number;
        setProgress(arg0: number): void;
        getRotSpeedTick(): number;
        get rotSpeedTick(): number;
    }
    export class $StockpotBlockEntityAccessor {
    }
    export interface $StockpotBlockEntityAccessor {
        kaleidoscopeCompat$getSoupBaseId(): $ResourceLocation;
        kaleidoscopeCompat$setTakeoutCount(arg0: number): void;
        kaleidoscopeCompat$setRecipeId(arg0: $ResourceLocation_): void;
        kaleidoscopeCompat$setSoupBaseId(arg0: $ResourceLocation_): void;
        kaleidoscopeCompat$getRecipeId(): $ResourceLocation;
        kaleidoscopeCompat$setResult(arg0: $ItemStack_): void;
        kaleidoscopeCompat$setCurrentTick(arg0: number): void;
    }
    export class $BlockEntityAccessor {
    }
    export interface $BlockEntityAccessor {
        getLevel(): $Level;
        invokeSetChanged(): void;
        getWorldPosition(): $BlockPos;
        get level(): $Level;
        get worldPosition(): $BlockPos;
    }
}
