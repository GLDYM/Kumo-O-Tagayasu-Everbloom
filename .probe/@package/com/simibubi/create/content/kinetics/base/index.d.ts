import { $Level, $Level_, $LevelReader } from "@package/net/minecraft/world/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Self } from "@package/io/github/forgestove/create_cyber_goggles/core/api";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $LangBuilder } from "@package/net/createmod/catnip/lang";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List, $List_ } from "@package/java/util";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $ChatFormatting } from "@package/net/minecraft";
import { $BlockPos, $BlockPos_, $Direction_, $Direction$Axis, $Direction$Axis_ } from "@package/net/minecraft/core";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $IHaveGoggleInformation, $IHaveHoveringInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $KineticNetwork } from "@package/com/simibubi/create/content/kinetics";
import { $Enum, $Object } from "@package/java/lang";
import { $BlockEntityType, $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/kinetics/base" {
    export class $IRotate {
    }
    export interface $IRotate extends $IWrenchable {
        hasShaftTowards(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): boolean;
        getRotationAxis(arg0: $BlockState_): $Direction$Axis;
        hideStressImpact(): boolean;
        showCapacityWithAnnotation(): boolean;
        getMinimumRequiredSpeedLevel(): $IRotate$SpeedLevel;
        get minimumRequiredSpeedLevel(): $IRotate$SpeedLevel;
    }
    export class $IRotate$SpeedLevel extends $Enum<$IRotate$SpeedLevel> {
        static values(): $IRotate$SpeedLevel[];
        static valueOf(arg0: string): $IRotate$SpeedLevel;
        static of(arg0: number): $IRotate$SpeedLevel;
        getColor(): number;
        getTextColor(): $ChatFormatting;
        getParticleSpeed(): number;
        getSpeedValue(): number;
        static getFormattedSpeedText(arg0: number, arg1: boolean): $LangBuilder;
        static MEDIUM: $IRotate$SpeedLevel;
        static SLOW: $IRotate$SpeedLevel;
        static NONE: $IRotate$SpeedLevel;
        static FAST: $IRotate$SpeedLevel;
        get color(): number;
        get textColor(): $ChatFormatting;
        get particleSpeed(): number;
        get speedValue(): number;
    }
    /**
     * Values that may be interpreted as {@link $IRotate$SpeedLevel}.
     */
    export type $IRotate$SpeedLevel_ = "none" | "slow" | "medium" | "fast";
    export class $KineticBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $IHaveHoveringInformation, $Self<any> {
        setSource(arg0: $BlockPos_): void;
        getTheoreticalSpeed(): number;
        addPropagationLocations(arg0: $IRotate, arg1: $BlockState_, arg2: $List_<$BlockPos_>): $List<$BlockPos>;
        getRotationAngleOffset(arg0: $Direction$Axis_): number;
        detachKinetics(): void;
        getFlickerScore(): number;
        updateFromNetwork(arg0: number, arg1: number, arg2: number): void;
        getGeneratedSpeed(): number;
        needsSpeedUpdate(): boolean;
        attachKinetics(): void;
        getOrCreateNetwork(): $KineticNetwork;
        removeSource(): void;
        isCustomConnection(arg0: $KineticBlockEntity, arg1: $BlockState_, arg2: $BlockState_): boolean;
        static convertToLinear(arg0: number): number;
        static convertToAngular(arg0: number): number;
        isOverStressed(): boolean;
        setSpeed(arg0: number): void;
        getSpeed(): number;
        static switchToBlockState(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): void;
        static convertToDirection(arg0: number, arg1: $Direction_): number;
        tickAudio(): void;
        addToTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        isSource(): boolean;
        onSpeedChanged(arg0: number): void;
        setNetwork(arg0: number): void;
        hasSource(): boolean;
        hasNetwork(): boolean;
        handler$zfg002$create_cyber_goggles$addToGoggleTooltip(arg0: $List_<any>, arg1: boolean, arg2: $CallbackInfoReturnable<any>): void;
        warnOfMovement(): void;
        addToGoggleTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        calculateStressApplied(): number;
        propagateRotationTo(arg0: $KineticBlockEntity, arg1: $BlockState_, arg2: $BlockState_, arg3: $BlockPos_, arg4: boolean, arg5: boolean): number;
        calculateAddedStressCapacity(): number;
        isSpeedRequirementFulfilled(): boolean;
        clearKineticInformation(): void;
        containedFluidTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: $IFluidHandler): boolean;
        thiz(): $Object;
        getIcon(arg0: boolean): $ItemStack;
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
        get theoreticalSpeed(): number;
        get flickerScore(): number;
        get generatedSpeed(): number;
        get orCreateNetwork(): $KineticNetwork;
        get overStressed(): boolean;
        get speedRequirementFulfilled(): boolean;
    }
}
