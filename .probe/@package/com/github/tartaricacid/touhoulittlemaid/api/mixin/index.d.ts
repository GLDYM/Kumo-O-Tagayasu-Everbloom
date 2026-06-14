
declare module "@package/com/github/tartaricacid/touhoulittlemaid/api/mixin" {
    export class $IPlayerMixin {
    }
    export interface $IPlayerMixin {
        tlmInRemoveVehicleCooldown(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IPlayerMixin}.
     */
    export type $IPlayerMixin_ = (() => boolean);
    export class $INavigationMixin {
    }
    export interface $INavigationMixin {
        touhouLittleMaid$GetSpeedModifier(): number;
    }
    /**
     * Values that may be interpreted as {@link $INavigationMixin}.
     */
    export type $INavigationMixin_ = (() => number);
    export class $IBlockBurningCacheMixin {
    }
    export interface $IBlockBurningCacheMixin {
        touhou_little_maid$setBurning(arg0: boolean): void;
        touhou_little_maid$setCannotCache(arg0: boolean): void;
        touhou_little_maid$isBurning(): boolean;
        touhou_little_maid$cannotCache(): boolean;
    }
}
