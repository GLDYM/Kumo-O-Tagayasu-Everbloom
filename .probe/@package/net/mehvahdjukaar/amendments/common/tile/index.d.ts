import { $Level_, $LevelAccessor } from "@package/net/minecraft/world/level";
import { $HolderLookup$Provider, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $SwingAnimation } from "@package/net/mehvahdjukaar/amendments/common";
import { $ModBlockProperties$PostType } from "@package/net/mehvahdjukaar/amendments/reg";

declare module "@package/net/mehvahdjukaar/amendments/common/tile" {
    export class $HangingSignTileExtension {
        load(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        clientTick(level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        canSwing(): boolean;
        updateShape(state: $BlockState_, direction: $Direction_, neighborState: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, neighborPos: $BlockPos_): void;
        saveAdditional(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        updateAttachments(level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        getClientAnimation(): $SwingAnimation;
        getBackItem(): $ItemStack;
        getFrontItem(): $ItemStack;
        getRightAttachment(): $ModBlockProperties$PostType;
        getLeftAttachment(): $ModBlockProperties$PostType;
        setFrontItem(frontItem: $ItemStack_): void;
        setBackItem(backItem: $ItemStack_): void;
        constructor(state: $BlockState_);
        get clientAnimation(): $SwingAnimation;
        get rightAttachment(): $ModBlockProperties$PostType;
        get leftAttachment(): $ModBlockProperties$PostType;
    }
}
