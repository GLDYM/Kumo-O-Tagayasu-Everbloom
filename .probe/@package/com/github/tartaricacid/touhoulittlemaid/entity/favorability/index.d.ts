import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Map } from "@package/java/util";
import { $AABB } from "@package/net/minecraft/world/phys";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/entity/favorability" {
    export class $Type {
        getTypeName(): string;
        getCooldown(): number;
        getPoint(): number;
        isReduce(): boolean;
        static SLEEP: $Type;
        static WORK_MEAL: $Type;
        static WCHESS_WIN: $Type;
        static GOMOKU_WIN: $Type;
        static STEAL_EDIBLE_BLOCK: $Type;
        static DEATH: $Type;
        static KEYBOARD: $Type;
        static GOMOKU: $Type;
        static COMPUTER: $Type;
        static ON_HOME_MEAL: $Type;
        static HOME_MEAL: $Type;
        static BOOKSHELF: $Type;
        static CCHESS_WIN: $Type;
        constructor(arg0: string, arg1: number, arg2: number);
        get typeName(): string;
        get cooldown(): number;
        get point(): number;
        get reduce(): boolean;
    }
    export class $FavorabilityManager {
        max(): void;
        add(arg0: number): void;
        apply(arg0: string): void;
        apply(arg0: $Type): void;
        apply(arg0: $Type, arg1: number): void;
        reduce(arg0: number): void;
        tick(): void;
        getLevel(): number;
        addAdditionalSaveData(arg0: $CompoundTag_): void;
        readAdditionalSaveData(arg0: $CompoundTag_): void;
        getAttackDistancePlusByPoint(arg0: number): number;
        getSweepRange(arg0: $Entity, arg1: number): $AABB;
        canAdd(arg0: string): boolean;
        onFavorabilityLevelChange(arg0: number, arg1: number): void;
        getLevelPercent(): number;
        reduceWithoutLevel(arg0: number): void;
        nextLevelPoint(): number;
        getAttackByLevel(arg0: number): number;
        getPointByLevel(arg0: number): number;
        getHealthByLevel(arg0: number): number;
        static TYPES: $Map<string, $Type>;
        constructor(arg0: $EntityMaid);
        get level(): number;
        get levelPercent(): number;
    }
}
