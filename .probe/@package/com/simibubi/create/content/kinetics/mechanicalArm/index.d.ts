import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $ListTag_, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $OutlineRenderable, $Self, $ItemRenderable } from "@package/io/github/forgestove/create_cyber_goggles/core/api";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List, $List_ } from "@package/java/util";
import { $ArmBlockEntityAccessor } from "@package/com/yision/fluidlogistics/mixin/accessor";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $KineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Enum } from "@package/java/lang";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/kinetics/mechanicalArm" {
    export class $ArmInteractionPoint {
        extract(arg0: $ArmBlockEntity, arg1: number, arg2: number, arg3: boolean): $ItemStack;
        extract(arg0: $ArmBlockEntity, arg1: number, arg2: boolean): $ItemStack;
        insert(arg0: $ArmBlockEntity, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        getType(): $ArmInteractionPointType;
        static create(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $ArmInteractionPoint;
        isValid(): boolean;
        keepAlive(): void;
        getLevel(): $Level;
        setLevel(arg0: $Level_): void;
        static deserialize(arg0: $CompoundTag_, arg1: $Level_, arg2: $BlockPos_): $ArmInteractionPoint;
        serialize(arg0: $BlockPos_): $CompoundTag;
        getMode(): $ArmInteractionPoint$Mode;
        getPos(): $BlockPos;
        cycleMode(): void;
        static isInteractable(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        getTargetAngles(arg0: $BlockPos_, arg1: boolean): $ArmAngleTarget;
        static transformPos(arg0: $CompoundTag_, arg1: $StructureTransform): void;
        updateCachedState(): void;
        getSlotCount(arg0: $ArmBlockEntity): number;
        constructor(arg0: $ArmInteractionPointType_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_);
        get type(): $ArmInteractionPointType;
        get valid(): boolean;
        get mode(): $ArmInteractionPoint$Mode;
        get pos(): $BlockPos;
    }
    export class $ArmAngleTarget {
        constructor(arg0: $BlockPos_, arg1: $Vec3_, arg2: $Direction_, arg3: boolean);
    }
    export interface $ArmInteractionPointType extends RegistryMarked<RegistryTypes.CreateArmInteractionPointTypeTag, RegistryTypes.CreateArmInteractionPointType> {}
    export class $ArmBlockEntity extends $KineticBlockEntity implements $TransformableBlockEntity, $OutlineRenderable, $ItemRenderable, $Self<any>, $ArmBlockEntityAccessor {
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        static getRange(): number;
        ccg$render(): void;
        ccg$getItemStack(): $ItemStack;
        redstoneUpdate(): void;
        writeInteractionPoints(arg0: $CompoundTag_): void;
        handler$fle000$net_music_list$dance(arg0: $List_<any>, arg1: $CallbackInfoReturnable<any>): void;
        ccg$getRenderDelay(): number;
        getInputs(): $List<$ArmInteractionPoint>;
        getOutputs(): $List<$ArmInteractionPoint>;
        setUpdateInteractionPoints(arg0: boolean): void;
        setInteractionPointTag(arg0: $ListTag_): void;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        level: $Level;
        updateSpeed: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        static get range(): number;
        get inputs(): $List<$ArmInteractionPoint>;
        get outputs(): $List<$ArmInteractionPoint>;
        set updateInteractionPoints(value: boolean);
        set interactionPointTag(value: $ListTag_);
    }
    export class $ArmInteractionPoint$Mode extends $Enum<$ArmInteractionPoint$Mode> {
        static values(): $ArmInteractionPoint$Mode[];
        static valueOf(arg0: string): $ArmInteractionPoint$Mode;
        getColor(): number;
        getTranslationKey(): string;
        static TAKE: $ArmInteractionPoint$Mode;
        static DEPOSIT: $ArmInteractionPoint$Mode;
        get color(): number;
        get translationKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $ArmInteractionPoint$Mode}.
     */
    export type $ArmInteractionPoint$Mode_ = "deposit" | "take";
    export class $ArmInteractionPointType {
        static init(): void;
        getPriority(): number;
        canCreatePoint(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        createPoint(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $ArmInteractionPoint;
        static getPrimaryType(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $ArmInteractionPointType;
        static SORTED_TYPES_VIEW: $List<$ArmInteractionPointType>;
        constructor();
        get priority(): number;
    }
    /**
     * Values that may be interpreted as {@link $ArmInteractionPointType}.
     */
    export type $ArmInteractionPointType_ = RegistryTypes.CreateArmInteractionPointType;
}
