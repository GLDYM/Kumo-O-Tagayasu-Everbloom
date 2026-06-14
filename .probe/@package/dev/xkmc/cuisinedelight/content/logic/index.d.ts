import { $ChatFormatting } from "@package/net/minecraft";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $FoodProperties } from "@package/net/minecraft/world/food";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $Stage } from "@package/dev/xkmc/cuisinedelight/content/logic/transform";
import { $Enum, $Record } from "@package/java/lang";
import { $ArrayList, $LinkedHashSet } from "@package/java/util";
export * as transform from "@package/dev/xkmc/cuisinedelight/content/logic/transform";

declare module "@package/dev/xkmc/cuisinedelight/content/logic" {
    export class $CookingData$Record extends $Record {
        contents(): $ArrayList<$CookingData$CookingEntry$Immutable>;
        lastActionTime(): number;
        mutable(): $CookingData;
        speed(): number;
        constructor(lastActionTime: number, speed: number, contents: $ArrayList<$CookingData$CookingEntry$Immutable_>);
    }
    /**
     * Values that may be interpreted as {@link $CookingData$Record}.
     */
    export type $CookingData$Record_ = { contents?: $ArrayList<$CookingData$CookingEntry$Immutable_>, lastActionTime?: number, speed?: number,  } | [contents?: $ArrayList<$CookingData$CookingEntry$Immutable_>, lastActionTime?: number, speed?: number, ];
    export class $CookingData {
        update(arg0: number): void;
        immutable(): $CookingData$Record;
        addItem(arg0: $ItemStack_, arg1: number): void;
        setSpeed(arg0: number): void;
        stir(arg0: number, arg1: number): void;
        contents: $ArrayList<$CookingData$CookingEntry>;
        constructor();
        set speed(value: number);
    }
    export class $CookingData$CookingEntry$Immutable extends $Record {
        startTime(): number;
        item(): $ItemStack;
        mutable(): $CookingData$CookingEntry;
        lastStirTime(): number;
        maxStirTime(): number;
        constructor(item: $ItemStack_, startTime: number, lastStirTime: number, maxStirTime: number);
    }
    /**
     * Values that may be interpreted as {@link $CookingData$CookingEntry$Immutable}.
     */
    export type $CookingData$CookingEntry$Immutable_ = { startTime?: number, item?: $ItemStack_, maxStirTime?: number, lastStirTime?: number,  } | [startTime?: number, item?: $ItemStack_, maxStirTime?: number, lastStirTime?: number, ];
    export class $FoodType extends $Enum<$FoodType> {
        get(): $MutableComponent;
        static values(): $FoodType[];
        static valueOf(arg0: string): $FoodType;
        getID(): string;
        getDisplay(): $ItemStack;
        static CARB: $FoodType;
        def: string;
        static SEAFOOD: $FoodType;
        bonus: number;
        format: $ChatFormatting;
        static VEG: $FoodType;
        static NONE: $FoodType;
        static MEAT: $FoodType;
        get ID(): string;
        get display(): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $FoodType}.
     */
    export type $FoodType_ = "none" | "meat" | "veg" | "carb" | "seafood";
    export class $CookingData$CookingEntry {
        seed(): number;
        getDuration(arg0: $CookingData, arg1: number): number;
        getItem(): $ItemStack;
        immutable(): $CookingData$CookingEntry$Immutable;
        getStage(arg0: $CookingData): $Stage;
        getMaxStirTime(arg0: $CookingData): number;
        stir(arg0: number, arg1: number): void;
        timeSinceStir(arg0: $CookingData, arg1: number): number;
        /**
         * @deprecated
         */
        constructor();
        constructor(arg0: $ItemStack_, arg1: number);
        get item(): $ItemStack;
    }
    export class $CookedFoodData$Entry extends $Record {
        stack(): $ItemStack;
        raw(): boolean;
        itemSize(): number;
        burnt(): boolean;
        overcooked(): boolean;
        getEatenStack(): $ItemStack;
        constructor(stack: $ItemStack_, itemSize: number, burnt: boolean, raw: boolean, overcooked: boolean);
        get eatenStack(): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $CookedFoodData$Entry}.
     */
    export type $CookedFoodData$Entry_ = { overcooked?: boolean, raw?: boolean, itemSize?: number, stack?: $ItemStack_, burnt?: boolean,  } | [overcooked?: boolean, raw?: boolean, itemSize?: number, stack?: $ItemStack_, burnt?: boolean, ];
    export class $CookedFoodData extends $Record {
        size(): number;
        static of(arg0: $CookingData): $CookedFoodData;
        entries(): $ArrayList<$CookedFoodData$Entry>;
        types(): $LinkedHashSet<$FoodType>;
        total(): number;
        score(): number;
        shrink(): $CookedFoodData;
        nutrition(): number;
        toFoodData(): $FoodProperties;
        saturationBonus(arg0: number): $CookedFoodData;
        static BAD: $FoodProperties;
        constructor(total: number, size: number, nutrition: number, score: number, types: $LinkedHashSet<$FoodType_>, entries: $ArrayList<$CookedFoodData$Entry_>);
    }
    /**
     * Values that may be interpreted as {@link $CookedFoodData}.
     */
    export type $CookedFoodData_ = { total?: number, entries?: $ArrayList<$CookedFoodData$Entry_>, types?: $LinkedHashSet<$FoodType_>, nutrition?: number, size?: number, score?: number,  } | [total?: number, entries?: $ArrayList<$CookedFoodData$Entry_>, types?: $LinkedHashSet<$FoodType_>, nutrition?: number, size?: number, score?: number, ];
}
