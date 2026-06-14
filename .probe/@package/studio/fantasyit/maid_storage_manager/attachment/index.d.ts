import { $Level_ } from "@package/net/minecraft/world/level";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $MutableInt } from "@package/org/apache/commons/lang3/mutable";
import { $Record } from "@package/java/lang";
import { $UUID_, $UUID, $Map } from "@package/java/util";

declare module "@package/studio/fantasyit/maid_storage_manager/attachment" {
    export class $CraftBlockOccupy implements $INBTSerializable<$CompoundTag> {
        static get(arg0: $Level_): $CraftBlockOccupy;
        tick(arg0: $ServerLevel): void;
        isOccupiedByAny(arg0: $BlockPos_): boolean;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        removeOccupyFor(arg0: $EntityMaid, arg1: number): void;
        isOccupiedByNonCurrent(arg0: $EntityMaid, arg1: $BlockPos_, arg2: number): boolean;
        removeAllOccupies(): void;
        addOccupy(arg0: $UUID_, arg1: number, arg2: $BlockPos_): void;
        addOccupy(arg0: $EntityMaid, arg1: number, arg2: $BlockPos_): void;
        removeAllOccupiesFor(arg0: $EntityMaid): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        occupiedPos: $Map<$CraftBlockOccupy$OccupiedRecord, $MutableInt>;
        constructor();
    }
    export class $CraftBlockOccupy$OccupiedRecord extends $Record {
        index(): number;
        pos(): $BlockPos;
        uuid(): $UUID;
        constructor(uuid: $UUID_, pos: $BlockPos_, index: number);
    }
    /**
     * Values that may be interpreted as {@link $CraftBlockOccupy$OccupiedRecord}.
     */
    export type $CraftBlockOccupy$OccupiedRecord_ = { uuid?: $UUID_, pos?: $BlockPos_, index?: number,  } | [uuid?: $UUID_, pos?: $BlockPos_, index?: number, ];
}
