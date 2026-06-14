import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Endermite } from "@package/net/minecraft/world/entity/monster";

declare module "@package/com/bmt/kaleidoscope_end/common" {
    export class $KEEndermiteInfo implements $INBTSerializable<$CompoundTag> {
        aiStep(): void;
        serializeNBT(): $CompoundTag;
        deserializeNBT(arg0: $CompoundTag_): void;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        setInLove(arg0: $Player): void;
        isInLove(): boolean;
        burstLoveParticle(arg0: $Endermite): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        fed: boolean;
        inLove: number;
        cooldown: number;
        loveTime: number;
        constructor(arg0: $Endermite);
    }
}
