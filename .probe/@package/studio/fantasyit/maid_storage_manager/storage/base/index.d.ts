import { $Level_ } from "@package/net/minecraft/world/level";
import { $Consumer_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $ItemCount_ } from "@package/studio/fantasyit/maid_storage_manager/data";
import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $Target } from "@package/studio/fantasyit/maid_storage_manager/storage";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $List_ } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/studio/fantasyit/maid_storage_manager/storage/base" {
    export class $IStorageContext {
    }
    export interface $IStorageContext {
        reset(): void;
        start(arg0: $EntityMaid, arg1: $ServerLevel, arg2: $Target): void;
        isDone(): boolean;
        finish(): void;
        get done(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IStorageContext}.
     */
    export type $IStorageContext_ = ((arg0: $EntityMaid, arg1: $ServerLevel, arg2: $Target) => void);
    export class $ISortSlotContext {
    }
    export interface $ISortSlotContext extends $IStorageContext {
        isDoneSorting(): boolean;
        tickSorting(): void;
        startSorting(): void;
        get doneSorting(): boolean;
    }
    export class $IMultiBlockProcessor {
    }
    export interface $IMultiBlockProcessor {
        isValid(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        process(arg0: $Level_, arg1: $BlockPos_, arg2: $Consumer_<$BlockPos>): void;
    }
    export class $IMaidStorage {
    }
    export interface $IMaidStorage {
        getType(): $ResourceLocation;
        isValidTarget(arg0: $ServerLevel, arg1: $LivingEntity, arg2: $BlockPos_, arg3: $Direction_, arg4: $BlockState_, arg5: $BlockEntity): boolean;
        onStartCollect(arg0: $ServerLevel, arg1: $EntityMaid, arg2: $Target): $IStorageContext;
        onStartPlace(arg0: $ServerLevel, arg1: $EntityMaid, arg2: $Target): $IStorageContext;
        onStartSorting(arg0: $ServerLevel, arg1: $EntityMaid, arg2: $Target): $ISortSlotContext;
        onStartView(arg0: $ServerLevel, arg1: $EntityMaid, arg2: $Target): $IStorageContext;
        onPreviewFilter(arg0: $ServerLevel, arg1: $EntityMaid, arg2: $Target): $IStorageContext;
        supportCollect(): boolean;
        supportView(): boolean;
        supportPlace(): boolean;
        isCraftGuideProvider(arg0: $List_<$ItemCount_>): boolean;
        get type(): $ResourceLocation;
    }
}
