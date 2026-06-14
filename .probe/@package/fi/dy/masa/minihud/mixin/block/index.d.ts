import { $Object2IntOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $Holder } from "@package/net/minecraft/core";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $List } from "@package/java/util";
import { $BeaconBlockEntity$BeaconBeamSection } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/fi/dy/masa/minihud/mixin/block" {
    export class $IMixinBeaconBlockEntity {
    }
    export interface $IMixinBeaconBlockEntity {
        minihud_getLevel(): number;
        minihud_getPrimary(): $Holder<$MobEffect>;
        minihud_getBeamEmitter(): $List<$BeaconBlockEntity$BeaconBeamSection>;
        minihud_getSecondary(): $Holder<$MobEffect>;
    }
    export class $IMixinAbstractFurnaceBlockEntity {
    }
    export interface $IMixinAbstractFurnaceBlockEntity {
        minihud_getUsedRecipes(): $Object2IntOpenHashMap<$ResourceLocation>;
    }
    /**
     * Values that may be interpreted as {@link $IMixinAbstractFurnaceBlockEntity}.
     */
    export type $IMixinAbstractFurnaceBlockEntity_ = (() => $Object2IntOpenHashMap<$ResourceLocation_>);
}
