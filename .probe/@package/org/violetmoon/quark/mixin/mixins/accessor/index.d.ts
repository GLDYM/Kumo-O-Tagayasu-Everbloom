import { $LevelHeightAccessor } from "@package/net/minecraft/world/level";
import { $DyeColor_, $ItemStack_, $ItemStack, $DyeColor } from "@package/net/minecraft/world/item";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $MobSpawnSettings$Builder, $BiomeGenerationSettings$Builder, $Biome } from "@package/net/minecraft/world/level/biome";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $StructureTemplate } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Predicate } from "@package/java/util/function";
import { $Music } from "@package/net/minecraft/sounds";
import { $Direction_ } from "@package/net/minecraft/core";
import { $BlockPlaceContext } from "@package/net/minecraft/world/item/context";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $SoundType_, $SoundType } from "@package/net/minecraft/world/level/block";
import { $ItemCost, $ItemCost_ } from "@package/net/minecraft/world/item/trading";

declare module "@package/org/violetmoon/quark/mixin/mixins/accessor" {
    export class $AccessorLivingEntity {
    }
    export interface $AccessorLivingEntity {
        quark$lastHurtByPlayerTime(): number;
        quark$lastHurtByPlayer(): $Player;
    }
    export class $AccessorArmorTrim {
        static getUPGRADE_TITLE(): $Component;
        static get UPGRADE_TITLE(): $Component;
    }
    export interface $AccessorArmorTrim {
        showInTooltip(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AccessorArmorTrim}.
     */
    export type $AccessorArmorTrim_ = (() => boolean);
    export class $AccessorMerchantMenu {
    }
    export interface $AccessorMerchantMenu {
        invokeMoveFromInventoryToPaymentSlot(arg0: number, arg1: $ItemCost_): void;
    }
    /**
     * Values that may be interpreted as {@link $AccessorMerchantMenu}.
     */
    export type $AccessorMerchantMenu_ = ((arg0: number, arg1: $ItemCost) => void);
    export class $AccessorMerchantOffer {
    }
    export interface $AccessorMerchantOffer {
        quark$setRewardExp(arg0: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $AccessorMerchantOffer}.
     */
    export type $AccessorMerchantOffer_ = ((arg0: boolean) => void);
    export class $AccessorServerGamePacketListener {
    }
    export interface $AccessorServerGamePacketListener {
        setAboveGroundTickCount(arg0: number): void;
        set aboveGroundTickCount(value: number);
    }
    /**
     * Values that may be interpreted as {@link $AccessorServerGamePacketListener}.
     */
    export type $AccessorServerGamePacketListener_ = ((arg0: number) => void);
    export class $AccessorAbstractArrow {
    }
    export interface $AccessorAbstractArrow {
        quark$getPickupItem(): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $AccessorAbstractArrow}.
     */
    export type $AccessorAbstractArrow_ = (() => $ItemStack_);
    export class $AccessorBlockBehavior {
    }
    export interface $AccessorBlockBehavior {
        invokeGetSoundType(arg0: $BlockState_): $SoundType;
    }
    /**
     * Values that may be interpreted as {@link $AccessorBlockBehavior}.
     */
    export type $AccessorBlockBehavior_ = ((arg0: $BlockState) => $SoundType_);
    export class $AccessorPistonMovingBlockEntity {
        static getMoveEntityByPiston(arg0: $Direction_, arg1: $Entity, arg2: number, arg3: $Direction_): void;
    }
    export interface $AccessorPistonMovingBlockEntity {
    }
    export class $AccessorBlockItem {
    }
    export interface $AccessorBlockItem {
        quark$getPlacementState(arg0: $BlockPlaceContext): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $AccessorBlockItem}.
     */
    export type $AccessorBlockItem_ = ((arg0: $BlockPlaceContext) => $BlockState_);
    export class $AccessorSinglePoolElement {
    }
    export interface $AccessorSinglePoolElement {
        getTemplate(): $Either<$ResourceLocation, $StructureTemplate>;
        get template(): $Either<$ResourceLocation, $StructureTemplate>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorSinglePoolElement}.
     */
    export type $AccessorSinglePoolElement_ = (() => $Either<$ResourceLocation_, $StructureTemplate>);
    export class $AccessorTemptingSensor {
    }
    export interface $AccessorTemptingSensor {
        quark$getTemptations(): $Predicate<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorTemptingSensor}.
     */
    export type $AccessorTemptingSensor_ = (() => $Predicate<$ItemStack>);
    export class $AccessorWolf {
    }
    export interface $AccessorWolf {
        invokeSetCollarColor(arg0: $DyeColor_): void;
    }
    /**
     * Values that may be interpreted as {@link $AccessorWolf}.
     */
    export type $AccessorWolf_ = ((arg0: $DyeColor) => void);
    export class $AccessorBaseContainerBlockEntity {
    }
    export interface $AccessorBaseContainerBlockEntity {
        setName(arg0: $Component_): void;
        set name(value: $Component_);
    }
    /**
     * Values that may be interpreted as {@link $AccessorBaseContainerBlockEntity}.
     */
    export type $AccessorBaseContainerBlockEntity_ = ((arg0: $Component) => void);
    export class $AccessorAbstractChestedHorse {
    }
    export interface $AccessorAbstractChestedHorse {
        quark$playChestEquipsSound(): void;
    }
    /**
     * Values that may be interpreted as {@link $AccessorAbstractChestedHorse}.
     */
    export type $AccessorAbstractChestedHorse_ = (() => void);
    export class $AccessorChunkAccess {
    }
    export interface $AccessorChunkAccess {
        getLevelHeightAccessor(): $LevelHeightAccessor;
        get levelHeightAccessor(): $LevelHeightAccessor;
    }
    /**
     * Values that may be interpreted as {@link $AccessorChunkAccess}.
     */
    export type $AccessorChunkAccess_ = (() => $LevelHeightAccessor);
    export class $AccessorOverworldBiomes {
        static quark$biome(arg0: boolean, arg1: number, arg2: number, arg3: $MobSpawnSettings$Builder, arg4: $BiomeGenerationSettings$Builder, arg5: $Music): $Biome;
        static quark$globalOverworldGeneration(arg0: $BiomeGenerationSettings$Builder): void;
    }
    export interface $AccessorOverworldBiomes {
    }
}
