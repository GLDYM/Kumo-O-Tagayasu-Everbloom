import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";

declare module "@package/fi/dy/masa/minihud/mixin/entity" {
    export class $IMixinLeashable {
    }
    export interface $IMixinLeashable {
    }
    export class $IMixinZombieVillagerEntity {
    }
    export interface $IMixinZombieVillagerEntity {
        minihud_conversionTimer(): number;
    }
    /**
     * Values that may be interpreted as {@link $IMixinZombieVillagerEntity}.
     */
    export type $IMixinZombieVillagerEntity_ = (() => number);
    export class $IMixinEntity {
    }
    export interface $IMixinEntity {
        minihud_readCustomDataFromNbt(arg0: $CompoundTag_): void;
    }
    /**
     * Values that may be interpreted as {@link $IMixinEntity}.
     */
    export type $IMixinEntity_ = ((arg0: $CompoundTag) => void);
    export class $IMixinSkeletonEntity {
    }
    export interface $IMixinSkeletonEntity {
        minihud_conversionTime(): number;
    }
    /**
     * Values that may be interpreted as {@link $IMixinSkeletonEntity}.
     */
    export type $IMixinSkeletonEntity_ = (() => number);
    export class $IMixinPassiveEntity {
    }
    export interface $IMixinPassiveEntity {
        minihud_getRealBreedingAge(): number;
    }
    /**
     * Values that may be interpreted as {@link $IMixinPassiveEntity}.
     */
    export type $IMixinPassiveEntity_ = (() => number);
    export class $IMixinZombieEntity {
    }
    export interface $IMixinZombieEntity {
        minihud_ticksUntilWaterConversion(): number;
    }
    /**
     * Values that may be interpreted as {@link $IMixinZombieEntity}.
     */
    export type $IMixinZombieEntity_ = (() => number);
}
