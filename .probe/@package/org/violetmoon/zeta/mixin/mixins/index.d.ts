import { $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $SpawnPlacementType_, $EntityType_, $Mob, $SpawnPlacements$SpawnPredicate_ } from "@package/net/minecraft/world/entity";
import { $LootPoolEntryContainer } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $List, $List_ } from "@package/java/util";
import { $Heightmap$Types_ } from "@package/net/minecraft/world/level/levelgen";
import { $LootContext, $LootPool } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/org/violetmoon/zeta/mixin/mixins" {
    export class $InvokerBlockBehavior {
    }
    export interface $InvokerBlockBehavior {
        zeta$propogatesSkylightDown(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $InvokerBlockBehavior}.
     */
    export type $InvokerBlockBehavior_ = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos) => boolean);
    export class $AccessorBlock {
    }
    export interface $AccessorBlock {
        zeta$setDescriptionID(arg0: string): void;
    }
    /**
     * Values that may be interpreted as {@link $AccessorBlock}.
     */
    export type $AccessorBlock_ = ((arg0: string) => void);
    export class $AccessorPistonStructureResolver {
    }
    export interface $AccessorPistonStructureResolver {
        zeta$pistonDirection(): $Direction;
        zeta$startPos(): $BlockPos;
        zeta$pistonPos(): $BlockPos;
        zeta$extending(): boolean;
        zeta$level(): $Level;
    }
    export class $AccessorItem {
    }
    export interface $AccessorItem {
        zeta$setDescriptionID(arg0: string): void;
    }
    /**
     * Values that may be interpreted as {@link $AccessorItem}.
     */
    export type $AccessorItem_ = ((arg0: string) => void);
    export class $AccessorLootTable {
    }
    export interface $AccessorLootTable {
        zeta$getPools(): $List<$LootPool>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorLootTable}.
     */
    export type $AccessorLootTable_ = (() => $List_<$LootPool>);
    export class $AccessorLootPool {
    }
    export interface $AccessorLootPool {
        zeta$setLootPoolEntries(arg0: $List_<$LootPoolEntryContainer>): void;
        zeta$getLootPoolEntries(): $List<$LootPoolEntryContainer>;
    }
    export class $InvokerSpawnPlacements {
        static zeta$register<T extends $Mob>(arg0: $EntityType_<T>, arg1: $SpawnPlacementType_, arg2: $Heightmap$Types_, arg3: $SpawnPlacements$SpawnPredicate_<T>): void;
    }
    export interface $InvokerSpawnPlacements {
    }
    export class $AccessorContextAwarePredicate {
    }
    export interface $AccessorContextAwarePredicate {
        zeta$getCompositePredicates(): $Predicate<$LootContext>;
        zeta$setCompositePredicates(arg0: $Predicate_<$LootContext>): void;
    }
}
