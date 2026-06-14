import { $IntegerProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Entity } from "@package/net/minecraft/world/entity";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/mixin/accessor" {
    export class $FenceGateBlockAccessor {
    }
    export interface $FenceGateBlockAccessor {
        tlmOpenSound(): $SoundEvent;
        tlmCloseSound(): $SoundEvent;
    }
    export class $EntityAccessor {
    }
    export interface $EntityAccessor {
        tlmCanAddPassenger(arg0: $Entity): boolean;
    }
    /**
     * Values that may be interpreted as {@link $EntityAccessor}.
     */
    export type $EntityAccessor_ = ((arg0: $Entity) => boolean);
    export class $CropBlockAccessor {
    }
    export interface $CropBlockAccessor {
        tlmAgeProperty(): $IntegerProperty;
    }
    /**
     * Values that may be interpreted as {@link $CropBlockAccessor}.
     */
    export type $CropBlockAccessor_ = (() => $IntegerProperty);
    export class $ArrowAccessor {
    }
    export interface $ArrowAccessor {
        tlmInGround(): boolean;
        getTlmPickupItem(): $ItemStack;
        get tlmPickupItem(): $ItemStack;
    }
    export class $LivingEntityAccessor {
    }
    export interface $LivingEntityAccessor {
        tlmIsJumping(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LivingEntityAccessor}.
     */
    export type $LivingEntityAccessor_ = (() => boolean);
}
