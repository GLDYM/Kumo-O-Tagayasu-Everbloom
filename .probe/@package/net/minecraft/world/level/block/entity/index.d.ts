import { $StructureTemplatePool } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $Services_ } from "@package/net/minecraft/server";
import { $DispenserBlockEntityAccessor } from "@package/net/mehvahdjukaar/moonlight/core/mixins/accessor";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeHolder, $RecipeHolder_, $CampfireCookingRecipe, $CraftingInput, $CraftingInput$Positioned } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture, $Executor, $Executor_ } from "@package/java/util/concurrent";
import { $EntityType_, $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Mesh } from "@package/dev/tr7zw/skinlayers/api";
import { $BlockEntityAccessor as $BlockEntityAccessor$1 } from "@package/com/bmt/kaleidoscope_compat/mixins/kaleidoscope_cookery/accessor";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $AccessorAbstractFurnaceBlockEntity } from "@package/com/illusivesoulworks/polymorph/mixin/core";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $AccessorBlockEntity, $AccessorBlockEntityType } from "@package/com/railwayteam/railways/mixin";
import { $AttachmentHolder } from "@package/net/neoforged/neoforge/attachment";
import { $FormattedCharSequence, $RandomSource, $StringRepresentable } from "@package/net/minecraft/util";
import { $AccessorBaseContainerBlockEntity, $AccessorBannerBlockEntity } from "@package/net/darkhax/bookshelf/common/mixin/access/block";
import { $IMixinAbstractFurnaceBlockEntity, $IMixinBeaconBlockEntity } from "@package/fi/dy/masa/minihud/mixin/block";
import { $VaultBlockEntity } from "@package/net/minecraft/world/level/block/entity/vault";
import { $RandomizableContainer, $MenuProvider, $Nameable, $Container, $Clearable, $LockCode_, $WorldlyContainer, $LockCode } from "@package/net/minecraft/world";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IBlockEntityExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $IRenderableEntity } from "@package/me/srrapero720/chloride/api";
import { $HangingSignTileExtension } from "@package/net/mehvahdjukaar/amendments/common/tile";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf, $Connection } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $ISignTextAccess } from "@package/fi/dy/masa/tweakeroo/util";
import { $CraftingContainer, $AbstractContainerMenu, $ContainerData, $StackedContentsCompatible, $RecipeCraftingHolder } from "@package/net/minecraft/world/inventory";
import { $DataComponentType, $DataComponentType_, $DataComponentMap, $DataComponentMap_, $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $Cullable } from "@package/dev/tr7zw/entityculling/versionless/access";
import { $Item, $JukeboxSongPlayer, $Item_, $DyeColor, $DyeColor_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $SkullSettings } from "@package/dev/tr7zw/skinlayers/accessor";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $FilteredText_ } from "@package/net/minecraft/server/network";
import { $Inventory, $Player, $StackedContents } from "@package/net/minecraft/world/entity/player";
import { $ConduitExtra } from "@package/fi/dy/masa/minihud/util";
import { $LecternBlockEntityAccessor } from "@package/io/github/mortuusars/exposure/mixin";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $ExtendedBlockEntityType } from "@package/net/caffeinemc/mods/sodium/client/render/chunk";
import { $StructureMode, $StructureMode_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $VibrationSystem$User, $VibrationSystem$Data, $VibrationSystem, $VibrationSystem$Listener } from "@package/net/minecraft/world/level/gameevent/vibrations";
import { $BlockEntityTypeAccessor } from "@package/net/neoforged/neoforge/mixins";
import { $ExtendedHangingSign, $SwingAnimation, $IBellConnection$Type, $IBellConnection, $IBetterJukebox, $IBellConnection$Type_ } from "@package/net/mehvahdjukaar/amendments/common";
import { $Mirror_, $Mirror, $Block, $Block_, $Rotation_, $SculkSpreader, $Rotation } from "@package/net/minecraft/world/level/block";
import { $Vec3, $Vec3_, $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityAccessor } from "@package/com/copycatsplus/copycats/mixin/foundation/copycat";
import { $Type } from "@package/com/mojang/datafixers/types";
import { $RenderDataBlockEntity } from "@package/net/fabricmc/fabric/api/blockview/v2";
import { $PistonMovingBlockEntity } from "@package/net/minecraft/world/level/block/piston";
import { $Self, $ItemRenderable } from "@package/io/github/forgestove/create_cyber_goggles/core/api";
import { $GameEventListener, $GameEvent, $GameEventListener$Provider, $PositionSource, $GameEvent$Context_, $GameEventListener$DeliveryMode } from "@package/net/minecraft/world/level/gameevent";
import { $BlockEntityRenderPredicate, $BlockEntityRenderPredicate_ } from "@package/net/caffeinemc/mods/sodium/api/blockentity";
import { $UUID_, $Set_, $Map, $List, $List_, $Set, $UUID } from "@package/java/util";
import { $BlockEntityTypeExtension } from "@package/dev/engine_room/flywheel/impl/extension";
import { $Supplier_, $ObjIntConsumer_, $UnaryOperator_, $Predicate_, $Function_ } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $Object2IntOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $BlockPos_, $Holder$Reference, $Vec3i, $HolderLookup$Provider, $Holder, $Direction_, $NonNullList, $Direction, $Registry, $HolderGetter, $Holder_ } from "@package/net/minecraft/core";
import { $IMixinSignBlockEntity } from "@package/fi/dy/masa/litematica/mixin/entity";
import { $RenderAttachmentBlockEntity } from "@package/net/fabricmc/fabric/api/rendering/data/v1";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $AccessorMixinBaseContainerBlockEntity, $AccessorMixinBrushableBlockEntity } from "@package/noobanidus/mods/lootr/common/mixin/accessor";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $ContainerSingleItem$BlockContainerSingleItem } from "@package/net/minecraft/world/ticks";
import { $Spawner, $BlockGetter, $BaseCommandBlock, $BaseSpawner, $Level_, $Level } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $TrialSpawner$StateAccessor, $TrialSpawner, $TrialSpawnerState_, $TrialSpawnerState } from "@package/net/minecraft/world/level/block/entity/trialspawner";
import { $BlockEntityVisualizer } from "@package/dev/engine_room/flywheel/api/visualization";
import { $AccessorBaseContainerBlockEntity as $AccessorBaseContainerBlockEntity$1 } from "@package/org/violetmoon/quark/mixin/mixins/accessor";
import { $CustomData, $ResolvableProfile_, $ResolvableProfile } from "@package/net/minecraft/world/item/component";
import { $ClientboundBlockEntityDataPacket, $ClientGamePacketListener } from "@package/net/minecraft/network/protocol/game";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $AbstractFurnaceBlockEntityAccess } from "@package/snownee/jade/mixin";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as trialspawner from "@package/net/minecraft/world/level/block/entity/trialspawner";
export * as vault from "@package/net/minecraft/world/level/block/entity/vault";

declare module "@package/net/minecraft/world/level/block/entity" {
    export class $BeehiveBlockEntity$BeeReleaseStatus extends $Enum<$BeehiveBlockEntity$BeeReleaseStatus> {
        static values(): $BeehiveBlockEntity$BeeReleaseStatus[];
        static valueOf(arg0: string): $BeehiveBlockEntity$BeeReleaseStatus;
        static BEE_RELEASED: $BeehiveBlockEntity$BeeReleaseStatus;
        static EMERGENCY: $BeehiveBlockEntity$BeeReleaseStatus;
        static HONEY_DELIVERED: $BeehiveBlockEntity$BeeReleaseStatus;
    }
    /**
     * Values that may be interpreted as {@link $BeehiveBlockEntity$BeeReleaseStatus}.
     */
    export type $BeehiveBlockEntity$BeeReleaseStatus_ = "honey_delivered" | "bee_released" | "emergency";
    export class $SculkCatalystBlockEntity extends $BlockEntity implements $GameEventListener$Provider<$SculkCatalystBlockEntity$CatalystListener> {
        getListener(): $SculkCatalystBlockEntity$CatalystListener;
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $SculkCatalystBlockEntity): void;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get listener(): $SculkCatalystBlockEntity$CatalystListener;
    }
    export class $HopperBlockEntity extends $RandomizableContainerBlockEntity implements $Hopper {
        static addItem(arg0: $Container, arg1: $Container, arg2: $ItemStack_, arg3: $Direction_): $ItemStack;
        static addItem(arg0: $Container, arg1: $ItemEntity): boolean;
        static getContainerAt(arg0: $Level_, arg1: $BlockPos_): $Container;
        static pushItemsTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $HopperBlockEntity): void;
        static entityInside(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Entity, arg4: $HopperBlockEntity): void;
        setCooldown(arg0: number): void;
        getLastUpdateTime(): number;
        isGridAligned(): boolean;
        static suckInItems(arg0: $Level_, arg1: $Hopper): boolean;
        static getItemsAtAndAbove(arg0: $Level_, arg1: $Hopper): $List<$ItemEntity>;
        isOnCustomCooldown(): boolean;
        getLevelY(): number;
        getLevelX(): number;
        getLevelZ(): number;
        getSuckAabb(): $AABB;
        level: $Level;
        static MOVE_ITEM_SPEED: number;
        static ATTACHMENTS_NBT_KEY: string;
        static HOPPER_CONTAINER_SIZE: number;
        lockKey: $LockCode;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        set cooldown(value: number);
        get lastUpdateTime(): number;
        get gridAligned(): boolean;
        get onCustomCooldown(): boolean;
        get levelY(): number;
        get levelX(): number;
        get levelZ(): number;
        get suckAabb(): $AABB;
    }
    export interface $DecoratedPotPattern extends RegistryMarked<RegistryTypes.DecoratedPotPatternTag, RegistryTypes.DecoratedPotPattern> {}
    export class $BlockEntityTicker<T extends $BlockEntity> {
    }
    export interface $BlockEntityTicker<T extends $BlockEntity> {
        tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: T): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityTicker}.
     */
    export type $BlockEntityTicker_<T> = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: T) => void);
    export class $SkullBlockEntity extends $BlockEntity implements $SkullSettings {
        static clear(): void;
        static setup(arg0: $Services_, arg1: $Executor_): void;
        initialized(): boolean;
        setOwner(arg0: $ResolvableProfile_): void;
        setInitialized(initialized: boolean): void;
        getNoteBlockSound(): $ResourceLocation;
        static animation(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $SkullBlockEntity): void;
        getAnimation(arg0: number): number;
        setLastTexture(texture: $ResourceLocation_): void;
        getHeadLayers(): $Mesh;
        getLastTexture(): $ResourceLocation;
        static fetchGameProfile(arg0: $UUID_): $CompletableFuture<($GameProfile) | undefined>;
        static fetchGameProfile(arg0: string): $CompletableFuture<($GameProfile) | undefined>;
        setupHeadLayers(box: $Mesh): void;
        getOwnerProfile(): $ResolvableProfile;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        getMesh(): $Mesh;
        static CHECKED_MAIN_THREAD_EXECUTOR: $Executor;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        set owner(value: $ResolvableProfile_);
        get noteBlockSound(): $ResourceLocation;
        get headLayers(): $Mesh;
        set upHeadLayers(value: $Mesh);
        get ownerProfile(): $ResolvableProfile;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get mesh(): $Mesh;
    }
    export class $LidBlockEntity {
    }
    export interface $LidBlockEntity {
        getOpenNess(arg0: number): number;
    }
    /**
     * Values that may be interpreted as {@link $LidBlockEntity}.
     */
    export type $LidBlockEntity_ = ((arg0: number) => number);
    export class $ComparatorBlockEntity extends $BlockEntity {
        setOutputSignal(arg0: number): void;
        getOutputSignal(): number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $DecoratedPotPattern extends $Record {
        assetId(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $DecoratedPotPattern}.
     */
    export type $DecoratedPotPattern_ = RegistryTypes.DecoratedPotPattern | { assetId?: $ResourceLocation_,  } | [assetId?: $ResourceLocation_, ];
    export class $JigsawBlockEntity$JointType extends $Enum<$JigsawBlockEntity$JointType> implements $StringRepresentable {
        static values(): $JigsawBlockEntity$JointType[];
        static valueOf(arg0: string): $JigsawBlockEntity$JointType;
        static byName(arg0: string): ($JigsawBlockEntity$JointType) | undefined;
        getTranslatedName(): $Component;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static ROLLABLE: $JigsawBlockEntity$JointType;
        static ALIGNED: $JigsawBlockEntity$JointType;
        get translatedName(): $Component;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $JigsawBlockEntity$JointType}.
     */
    export type $JigsawBlockEntity$JointType_ = "rollable" | "aligned";
    export class $CommandBlockEntity$Mode extends $Enum<$CommandBlockEntity$Mode> {
        static values(): $CommandBlockEntity$Mode[];
        static valueOf(arg0: string): $CommandBlockEntity$Mode;
        static AUTO: $CommandBlockEntity$Mode;
        static REDSTONE: $CommandBlockEntity$Mode;
        static SEQUENCE: $CommandBlockEntity$Mode;
    }
    /**
     * Values that may be interpreted as {@link $CommandBlockEntity$Mode}.
     */
    export type $CommandBlockEntity$Mode_ = "sequence" | "auto" | "redstone";
    export class $ChestLidController {
        getOpenness(arg0: number): number;
        shouldBeOpen(arg0: boolean): void;
        tickLid(): void;
        constructor();
    }
    export class $BlockEntity$DataComponentInput {
    }
    export interface $BlockEntity$DataComponentInput {
        get<T>(arg0: $Supplier_<$DataComponentType<T>>): T;
        get<T>(arg0: $DataComponentType_<T>): T;
        getOrDefault<T>(arg0: $DataComponentType_<T>, arg1: T): T;
        getOrDefault<T>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T): T;
    }
    export class $BeehiveBlockEntity$BeeData {
    }
    export class $BeaconBlockEntity extends $BlockEntity implements $MenuProvider, $Nameable, $IMixinBeaconBlockEntity {
        getName(): $Component;
        getDisplayName(): $Component;
        static tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BeaconBlockEntity): void;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        static playSound(arg0: $Level_, arg1: $BlockPos_, arg2: $SoundEvent_): void;
        getBeamSections(): $List<$BeaconBlockEntity$BeaconBeamSection>;
        getCustomName(): $Component;
        setCustomName(arg0: $Component_): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        hasCustomName(): boolean;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        minihud_getLevel(): number;
        minihud_getPrimary(): $Holder<$MobEffect>;
        minihud_getBeamEmitter(): $List<$BeaconBlockEntity$BeaconBeamSection>;
        minihud_getSecondary(): $Holder<$MobEffect>;
        beamSections: $List<$BeaconBlockEntity$BeaconBeamSection>;
        static BEACON_EFFECTS: $List<$List<$Holder<$MobEffect>>>;
        level: $Level;
        lastCheckY: number;
        checkingBeamSections: $List<$BeaconBlockEntity$BeaconBeamSection>;
        static DATA_SECONDARY: number;
        name: $Component;
        static ATTACHMENTS_NBT_KEY: string;
        static NUM_DATA_VALUES: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static DATA_LEVELS: number;
        static DATA_PRIMARY: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get displayName(): $Component;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $SculkShriekerBlockEntity$VibrationUser implements $VibrationSystem$User {
        canTriggerAvoidVibration(): boolean;
        calculateTravelTimeInTicks(arg0: number): number;
        getListenableEvents(): $TagKey<$GameEvent>;
        requiresAdjacentChunksToBeTicking(): boolean;
        isValidVibration(arg0: $Holder_<$GameEvent>, arg1: $GameEvent$Context_): boolean;
        onDataChanged(): void;
        get listenableEvents(): $TagKey<$GameEvent>;
    }
    export class $SignText {
        getMessage(arg0: number, arg1: boolean): $Component;
        setColor(arg0: $DyeColor_): $SignText;
        getColor(): $DyeColor;
        setMessage(arg0: number, arg1: $Component_, arg2: $Component_): $SignText;
        setMessage(arg0: number, arg1: $Component_): $SignText;
        getMessages(arg0: boolean): $Component[];
        hasGlowingText(): boolean;
        setHasGlowingText(arg0: boolean): $SignText;
        hasMessage(arg0: $Player): boolean;
        hasAnyClickCommands(arg0: $Player): boolean;
        getRenderMessages(arg0: boolean, arg1: $Function_<$Component, $FormattedCharSequence>): $FormattedCharSequence[];
        static DIRECT_CODEC: $Codec<$SignText>;
        static LINES: number;
        constructor();
        constructor(arg0: $Component_[], arg1: $Component_[], arg2: $DyeColor_, arg3: boolean);
    }
    export class $BedBlockEntity extends $BlockEntity {
        setColor(arg0: $DyeColor_): void;
        getColor(): $DyeColor;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        constructor(arg0: $BlockPos_, arg1: $BlockState_, arg2: $DyeColor_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $TrappedChestBlockEntity extends $ChestBlockEntity {
        openersCounter: $ContainerOpenersCounter;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityType<T extends $BlockEntity> implements $BlockEntityTypeAccessor, $ExtendedBlockEntityType<any>, $AccessorBlockEntityType, $IRenderableEntity, $BlockEntityTypeExtension<any> {
        static getKey(arg0: $BlockEntityType_<never>): $ResourceLocation;
        create(arg0: $BlockPos_, arg1: $BlockState_): $Object;
        isValid(arg0: $BlockState_): boolean;
        builtInRegistryHolder(): $Holder$Reference<$BlockEntityType<never>>;
        flywheel$getVisualizer(): $BlockEntityVisualizer<any>;
        chloride$whitelisted(): boolean;
        flywheel$setVisualizer(visualizer: $BlockEntityVisualizer<any>): void;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $Object;
        sodium$removeRenderPredicate(arg0: $BlockEntityRenderPredicate_<any>): boolean;
        sodium$getRenderPredicates(): $BlockEntityRenderPredicate<any>[];
        sodium$addRenderPredicate(arg0: $BlockEntityRenderPredicate_<any>): void;
        setValidBlocks(arg0: $Set_<$Block_>): void;
        getValidBlocks(): $Set<$Block>;
        neoforge$setValidBlocks(arg0: $Set_<$Block_>): void;
        static BLAST_FURNACE: $BlockEntityType<$BlastFurnaceBlockEntity>;
        static HANGING_SIGN: $BlockEntityType<$HangingSignBlockEntity>;
        static COMPARATOR: $BlockEntityType<$ComparatorBlockEntity>;
        static VAULT: $BlockEntityType<$VaultBlockEntity>;
        static SKULL: $BlockEntityType<$SkullBlockEntity>;
        static CHISELED_BOOKSHELF: $BlockEntityType<$ChiseledBookShelfBlockEntity>;
        static JIGSAW: $BlockEntityType<$JigsawBlockEntity>;
        static DECORATED_POT: $BlockEntityType<$DecoratedPotBlockEntity>;
        static BEACON: $BlockEntityType<$BeaconBlockEntity>;
        static CRAFTER: $BlockEntityType<$CrafterBlockEntity>;
        validBlocks: $Set<$Block>;
        static FURNACE: $BlockEntityType<$FurnaceBlockEntity>;
        static BEEHIVE: $BlockEntityType<$BeehiveBlockEntity>;
        static PISTON: $BlockEntityType<$PistonMovingBlockEntity>;
        static TRAPPED_CHEST: $BlockEntityType<$TrappedChestBlockEntity>;
        static END_PORTAL: $BlockEntityType<$TheEndPortalBlockEntity>;
        static ENDER_CHEST: $BlockEntityType<$EnderChestBlockEntity>;
        static COMMAND_BLOCK: $BlockEntityType<$CommandBlockEntity>;
        static SIGN: $BlockEntityType<$SignBlockEntity>;
        static STRUCTURE_BLOCK: $BlockEntityType<$StructureBlockEntity>;
        static BELL: $BlockEntityType<$BellBlockEntity>;
        static ENCHANTING_TABLE: $BlockEntityType<$EnchantingTableBlockEntity>;
        static BREWING_STAND: $BlockEntityType<$BrewingStandBlockEntity>;
        static BED: $BlockEntityType<$BedBlockEntity>;
        static MOB_SPAWNER: $BlockEntityType<$SpawnerBlockEntity>;
        static CALIBRATED_SCULK_SENSOR: $BlockEntityType<$CalibratedSculkSensorBlockEntity>;
        static SCULK_CATALYST: $BlockEntityType<$SculkCatalystBlockEntity>;
        static CONDUIT: $BlockEntityType<$ConduitBlockEntity>;
        static CAMPFIRE: $BlockEntityType<$CampfireBlockEntity>;
        static END_GATEWAY: $BlockEntityType<$TheEndGatewayBlockEntity>;
        static SMOKER: $BlockEntityType<$SmokerBlockEntity>;
        static DISPENSER: $BlockEntityType<$DispenserBlockEntity>;
        static SCULK_SHRIEKER: $BlockEntityType<$SculkShriekerBlockEntity>;
        static HOPPER: $BlockEntityType<$HopperBlockEntity>;
        static CHEST: $BlockEntityType<$ChestBlockEntity>;
        static DAYLIGHT_DETECTOR: $BlockEntityType<$DaylightDetectorBlockEntity>;
        static BANNER: $BlockEntityType<$BannerBlockEntity>;
        static SCULK_SENSOR: $BlockEntityType<$SculkSensorBlockEntity>;
        static TRIAL_SPAWNER: $BlockEntityType<$TrialSpawnerBlockEntity>;
        static LECTERN: $BlockEntityType<$LecternBlockEntity>;
        static SHULKER_BOX: $BlockEntityType<$ShulkerBoxBlockEntity>;
        static BRUSHABLE_BLOCK: $BlockEntityType<$BrushableBlockEntity>;
        static JUKEBOX: $BlockEntityType<$JukeboxBlockEntity>;
        static BARREL: $BlockEntityType<$BarrelBlockEntity>;
        static DROPPER: $BlockEntityType<$DropperBlockEntity>;
        constructor(arg0: $BlockEntityType$BlockEntitySupplier_<$Object>, arg1: $Set_<$Block_>, arg2: $Type<never>);
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityType}.
     */
    export type $BlockEntityType_<T> = RegistryTypes.BlockEntityType;
    export class $SmokerBlockEntity extends $AbstractFurnaceBlockEntity {
        static DATA_LIT_DURATION: number;
        level: $Level;
        cookingTotalTime: number;
        static DATA_COOKING_PROGRESS: number;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static BURN_COOL_SPEED: number;
        cookingProgress: number;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        lockKey: $LockCode;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $CampfireBlockEntity extends $BlockEntity implements $Clearable {
        placeFood(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number): boolean;
        getItems(): $NonNullList<$ItemStack>;
        static cookTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $CampfireBlockEntity): void;
        getCookableRecipe(arg0: $ItemStack_): ($RecipeHolder<$CampfireCookingRecipe>) | undefined;
        static cooldownTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $CampfireBlockEntity): void;
        static particleTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $CampfireBlockEntity): void;
        clearContent(): void;
        dowse(): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        cookingTime: number[];
        cookingProgress: number[];
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get items(): $NonNullList<$ItemStack>;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $BarrelBlockEntity extends $RandomizableContainerBlockEntity {
        recheckOpen(): void;
        openersCounter: $ContainerOpenersCounter;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BeaconBlockEntity$BeaconBeamSection {
        getColor(): number;
        getHeight(): number;
        height: number;
        constructor(arg0: number);
        get color(): number;
    }
    export class $SculkSensorBlockEntity$VibrationUser implements $VibrationSystem$User {
        canTriggerAvoidVibration(): boolean;
        calculateTravelTimeInTicks(arg0: number): number;
        getListenableEvents(): $TagKey<$GameEvent>;
        requiresAdjacentChunksToBeTicking(): boolean;
        isValidVibration(arg0: $Holder_<$GameEvent>, arg1: $GameEvent$Context_): boolean;
        onDataChanged(): void;
        get listenableEvents(): $TagKey<$GameEvent>;
    }
    export class $PotDecorations extends $Record {
        static load(arg0: $CompoundTag_): $PotDecorations;
        save(arg0: $CompoundTag_): $CompoundTag;
        left(): ($Item) | undefined;
        right(): ($Item) | undefined;
        front(): ($Item) | undefined;
        back(): ($Item) | undefined;
        ordered(): $List<$Item>;
        static CODEC: $Codec<$PotDecorations>;
        static EMPTY: $PotDecorations;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PotDecorations>;
        constructor(arg0: ($Item_) | undefined, arg1: ($Item_) | undefined, arg2: ($Item_) | undefined, arg3: ($Item_) | undefined);
        constructor(arg0: $Item_, arg1: $Item_, arg2: $Item_, arg3: $Item_);
    }
    /**
     * Values that may be interpreted as {@link $PotDecorations}.
     */
    export type $PotDecorations_ = { left?: ($Item_) | undefined, back?: ($Item_) | undefined, front?: ($Item_) | undefined, right?: ($Item_) | undefined,  } | [left?: ($Item_) | undefined, back?: ($Item_) | undefined, front?: ($Item_) | undefined, right?: ($Item_) | undefined, ];
    export class $BannerPatternLayers extends $Record {
        layers(): $List<$BannerPatternLayers$Layer>;
        removeLast(): $BannerPatternLayers;
        static CODEC: $Codec<$BannerPatternLayers>;
        static EMPTY: $BannerPatternLayers;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BannerPatternLayers>;
        constructor(arg0: $List_<$BannerPatternLayers$Layer_>);
    }
    /**
     * Values that may be interpreted as {@link $BannerPatternLayers}.
     */
    export type $BannerPatternLayers_ = { layers?: $List_<$BannerPatternLayers$Layer_>,  } | [layers?: $List_<$BannerPatternLayers$Layer_>, ];
    export class $ChestBlockEntity extends $RandomizableContainerBlockEntity implements $LidBlockEntity {
        getOpenNess(arg0: number): number;
        static swapContents(arg0: $ChestBlockEntity, arg1: $ChestBlockEntity): void;
        static getOpenCount(arg0: $BlockGetter, arg1: $BlockPos_): number;
        static lidAnimateTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ChestBlockEntity): void;
        recheckOpen(): void;
        openersCounter: $ContainerOpenersCounter;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BeehiveBlockEntity$Occupant extends $Record {
        static of(arg0: $Entity): $BeehiveBlockEntity$Occupant;
        static create(arg0: number): $BeehiveBlockEntity$Occupant;
        createEntity(arg0: $Level_, arg1: $BlockPos_): $Entity;
        entityData(): $CustomData;
        minTicksInHive(): number;
        ticksInHive(): number;
        static CODEC: $Codec<$BeehiveBlockEntity$Occupant>;
        static LIST_CODEC: $Codec<$List<$BeehiveBlockEntity$Occupant>>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BeehiveBlockEntity$Occupant>;
        constructor(arg0: $CustomData, arg1: number, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $BeehiveBlockEntity$Occupant}.
     */
    export type $BeehiveBlockEntity$Occupant_ = { minTicksInHive?: number, ticksInHive?: number, entityData?: $CustomData,  } | [minTicksInHive?: number, ticksInHive?: number, entityData?: $CustomData, ];
    export class $CalibratedSculkSensorBlockEntity extends $SculkSensorBlockEntity {
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntity extends $AttachmentHolder implements $IBlockEntityExtension, $RenderDataBlockEntity, $RenderAttachmentBlockEntity, $Cullable, $AccessorBlockEntity, $BlockEntityAccessor, $BlockEntityAccessor$1 {
        getType(): $BlockEntityType<never>;
        setLevel(arg0: $Level_): void;
        components(): $DataComponentMap;
        isRemoved(): boolean;
        setTimeout(): void;
        getBlockState(): $BlockState;
        getBlockPos(): $BlockPos;
        setRemoved(): void;
        setCulled(value: boolean): void;
        isCulled(): boolean;
        static loadStatic(arg0: $BlockPos_, arg1: $BlockState_, arg2: $CompoundTag_, arg3: $HolderLookup$Provider): $BlockEntity;
        saveWithId(arg0: $HolderLookup$Provider): $CompoundTag;
        fillCrashReportCategory(arg0: $CrashReportCategory): void;
        saveToItem(arg0: $ItemStack_, arg1: $HolderLookup$Provider): void;
        clearRemoved(): void;
        static getPosFromTag(arg0: $CompoundTag_): $BlockPos;
        isValidBlockState(arg0: $BlockState_): boolean;
        getUpdateTag(arg0: $HolderLookup$Provider): $CompoundTag;
        loadWithComponents(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        loadCustomOnly(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        setComponents(arg0: $DataComponentMap_): void;
        static addEntityType(arg0: $CompoundTag_, arg1: $BlockEntityType_<never>): void;
        collectComponents(): $DataComponentMap;
        applyComponents(arg0: $DataComponentMap_, arg1: $DataComponentPatch_): void;
        getPersistentData(): $CompoundTag;
        isForcedVisible(): boolean;
        isOutOfCamera(): boolean;
        setOutOfCamera(value: boolean): void;
        onlyOpCanSetNbt(): boolean;
        setChanged(): void;
        hasLevel(): boolean;
        handler$fgk000$collective$setRemoved(arg0: $CallbackInfo): void;
        saveWithFullMetadata(arg0: $HolderLookup$Provider): $CompoundTag;
        saveWithoutMetadata(arg0: $HolderLookup$Provider): $CompoundTag;
        getRenderAttachmentData(): $Object;
        static parseCustomNameSafe(arg0: string, arg1: $HolderLookup$Provider): $Component;
        /**
         * @deprecated
         */
        setBlockState(arg0: $BlockState_): void;
        triggerEvent(arg0: number, arg1: number): boolean;
        getRenderData(): $Object;
        getUpdatePacket(): $Packet<$ClientGamePacketListener>;
        saveCustomOnly(arg0: $HolderLookup$Provider): $CompoundTag;
        handler$fgk000$collective$setLevel(arg0: $Level_, arg1: $CallbackInfo): void;
        applyComponentsFromItemStack(arg0: $ItemStack_): void;
        /**
         * @deprecated
         */
        removeComponentsFromTag(arg0: $CompoundTag_): void;
        saveCustomAndMetadata(arg0: $HolderLookup$Provider): $CompoundTag;
        onLoad(): void;
        handleUpdateTag(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        onDataPacket(arg0: $Connection, arg1: $ClientboundBlockEntityDataPacket, arg2: $HolderLookup$Provider): void;
        onChunkUnloaded(): void;
        hasCustomOutlineRendering(arg0: $Player): boolean;
        invalidateCapabilities(): void;
        requestModelDataUpdate(): void;
        getModelData(): $ModelData;
        getLevel(): $Level;
        callSaveMetadata(arg0: $CompoundTag_): void;
        invokeSetChanged(): void;
        setWorldPosition(arg0: $BlockPos_): void;
        getWorldPosition(): $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get blockPos(): $BlockPos;
        get persistentData(): $CompoundTag;
        get forcedVisible(): boolean;
        get renderAttachmentData(): $Object;
        get renderData(): $Object;
        get updatePacket(): $Packet<$ClientGamePacketListener>;
        get modelData(): $ModelData;
    }
    export class $ShulkerBoxBlockEntity$AnimationStatus extends $Enum<$ShulkerBoxBlockEntity$AnimationStatus> {
        static values(): $ShulkerBoxBlockEntity$AnimationStatus[];
        static valueOf(arg0: string): $ShulkerBoxBlockEntity$AnimationStatus;
        static CLOSED: $ShulkerBoxBlockEntity$AnimationStatus;
        static CLOSING: $ShulkerBoxBlockEntity$AnimationStatus;
        static OPENING: $ShulkerBoxBlockEntity$AnimationStatus;
        static OPENED: $ShulkerBoxBlockEntity$AnimationStatus;
    }
    /**
     * Values that may be interpreted as {@link $ShulkerBoxBlockEntity$AnimationStatus}.
     */
    export type $ShulkerBoxBlockEntity$AnimationStatus_ = "closed" | "opening" | "opened" | "closing";
    export class $ShulkerBoxBlockEntity extends $RandomizableContainerBlockEntity implements $WorldlyContainer {
        static tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ShulkerBoxBlockEntity): void;
        isClosed(): boolean;
        getColor(): $DyeColor;
        getProgress(arg0: number): number;
        getAnimationStatus(): $ShulkerBoxBlockEntity$AnimationStatus;
        getBoundingBox(arg0: $BlockState_): $AABB;
        handler$boi000$supplementaries$supp$preventInsertion(arg0: number, arg1: $ItemStack_, arg2: $Direction_, arg3: $CallbackInfoReturnable<any>): void;
        loadFromTag(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getSlotsForFace(arg0: $Direction_): number[];
        canPlaceItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        canTakeItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        static EVENT_SET_OPEN_COUNT: number;
        level: $Level;
        static CONTAINER_SIZE: number;
        static ATTACHMENTS_NBT_KEY: string;
        static COLUMNS: number;
        static OPENING_TICK_LENGTH: number;
        openCount: number;
        lockKey: $LockCode;
        static MAX_LID_HEIGHT: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static MAX_LID_ROTATION: number;
        static ROWS: number;
        constructor(arg0: $DyeColor_, arg1: $BlockPos_, arg2: $BlockState_);
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get closed(): boolean;
        get color(): $DyeColor;
        get animationStatus(): $ShulkerBoxBlockEntity$AnimationStatus;
    }
    export class $DecoratedPotBlockEntity$WobbleStyle extends $Enum<$DecoratedPotBlockEntity$WobbleStyle> {
        static values(): $DecoratedPotBlockEntity$WobbleStyle[];
        static valueOf(arg0: string): $DecoratedPotBlockEntity$WobbleStyle;
        duration: number;
        static POSITIVE: $DecoratedPotBlockEntity$WobbleStyle;
        static NEGATIVE: $DecoratedPotBlockEntity$WobbleStyle;
    }
    /**
     * Values that may be interpreted as {@link $DecoratedPotBlockEntity$WobbleStyle}.
     */
    export type $DecoratedPotBlockEntity$WobbleStyle_ = "positive" | "negative";
    export interface $BannerPattern extends RegistryMarked<RegistryTypes.BannerPatternTag, RegistryTypes.BannerPattern> {}
    export class $BlockEntity$ComponentHelper {
        static COMPONENTS_CODEC: $Codec<$DataComponentMap>;
    }
    export class $BrushableBlockEntity extends $BlockEntity implements $AccessorMixinBrushableBlockEntity {
        getItem(): $ItemStack;
        checkReset(): void;
        wrapOperation$dlc000$lootr$tryLoadLootTable(arg0: $CompoundTag_, arg1: string, arg2: number, arg3: $Operation_<any>): boolean;
        brush(arg0: number, arg1: $Player, arg2: $Direction_): boolean;
        setLootTable(arg0: $ResourceKey_<$LootTable>, arg1: number): void;
        getHitDirection(): $Direction;
        unpackLootTable(arg0: $Player): void;
        lootr$getLootTable(): $ResourceKey<$LootTable>;
        lootr$getLootTableSeed(): number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get item(): $ItemStack;
        get hitDirection(): $Direction;
    }
    export class $EnderChestBlockEntity extends $BlockEntity implements $LidBlockEntity, $ItemRenderable, $Self<any> {
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        stillValid(arg0: $Player): boolean;
        getOpenNess(arg0: number): number;
        ccg$getItemStack(): $ItemStack;
        static lidAnimateTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $EnderChestBlockEntity): void;
        recheckOpen(): void;
        thiz(): $Object;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BaseContainerBlockEntity extends $BlockEntity implements $Container, $MenuProvider, $Nameable, $AccessorMixinBaseContainerBlockEntity, $AccessorBaseContainerBlockEntity, $AccessorBaseContainerBlockEntity$1 {
        getName(): $Component;
        isEmpty(): boolean;
        getDisplayName(): $Component;
        getItem(arg0: number): $ItemStack;
        removeItem(arg0: number, arg1: number): $ItemStack;
        static canUnlock(arg0: $Player, arg1: $LockCode_, arg2: $Component_): boolean;
        removeItemNoUpdate(arg0: number): $ItemStack;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        setItem(arg0: number, arg1: $ItemStack_): void;
        canOpen(arg0: $Player): boolean;
        stillValid(arg0: $Player): boolean;
        clearContent(): void;
        getCustomName(): $Component;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        countItem(arg0: $Item_): number;
        getMaxStackSize(): number;
        getMaxStackSize(arg0: $ItemStack_): number;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        hasCustomName(): boolean;
        self(): $Container;
        isMutable(): boolean;
        getBlock(level: $Level_): $LevelBlock;
        clear(): void;
        asContainer(): $Container;
        getWidth(): number;
        getHeight(): number;
        setChanged(): void;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        clear(match: $ItemPredicate_): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        isEmpty(): boolean;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        setName(arg0: $Component_): void;
        invokeGetItems(): $NonNullList<$ItemStack>;
        bookshelf$name(arg0: $Component_): void;
        setLockKey(arg0: $LockCode_): void;
        getLockKey(): $LockCode;
        clientsort$setChanged(): void;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        get displayName(): $Component;
        get customName(): $Component;
        get mutable(): boolean;
        get width(): number;
        get height(): number;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $BlockEntityType$Builder<T extends $BlockEntity> {
        static of<T extends $BlockEntity>(arg0: $BlockEntityType$BlockEntitySupplier_<T>, ...arg1: $Block_[]): $BlockEntityType$Builder<T>;
        build(arg0: $Type<never>): $BlockEntityType<T>;
    }
    export class $CommandBlockEntity extends $BlockEntity {
        isAutomatic(): boolean;
        getMode(): $CommandBlockEntity$Mode;
        getCommandBlock(): $BaseCommandBlock;
        setPowered(arg0: boolean): void;
        isPowered(): boolean;
        isConditional(): boolean;
        markConditionMet(): boolean;
        setAutomatic(arg0: boolean): void;
        wasConditionMet(): boolean;
        onModeSwitch(): void;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get mode(): $CommandBlockEntity$Mode;
        get commandBlock(): $BaseCommandBlock;
        get conditional(): boolean;
    }
    export class $DecoratedPotPatterns {
        static bootstrap(arg0: $Registry<$DecoratedPotPattern_>): $DecoratedPotPattern;
        static getPatternFromItem(arg0: $Item_): $ResourceKey<$DecoratedPotPattern>;
        static GUSTER: $ResourceKey<$DecoratedPotPattern>;
        static MINER: $ResourceKey<$DecoratedPotPattern>;
        static ITEM_TO_POT_TEXTURE: $Map<$Item, $ResourceKey<$DecoratedPotPattern>>;
        static ARMS_UP: $ResourceKey<$DecoratedPotPattern>;
        static FRIEND: $ResourceKey<$DecoratedPotPattern>;
        static SHEAF: $ResourceKey<$DecoratedPotPattern>;
        static SKULL: $ResourceKey<$DecoratedPotPattern>;
        static SCRAPE: $ResourceKey<$DecoratedPotPattern>;
        static ARCHER: $ResourceKey<$DecoratedPotPattern>;
        static FLOW: $ResourceKey<$DecoratedPotPattern>;
        static BURN: $ResourceKey<$DecoratedPotPattern>;
        static EXPLORER: $ResourceKey<$DecoratedPotPattern>;
        static HEARTBREAK: $ResourceKey<$DecoratedPotPattern>;
        static SNORT: $ResourceKey<$DecoratedPotPattern>;
        static DANGER: $ResourceKey<$DecoratedPotPattern>;
        static ANGLER: $ResourceKey<$DecoratedPotPattern>;
        static BREWER: $ResourceKey<$DecoratedPotPattern>;
        static HEART: $ResourceKey<$DecoratedPotPattern>;
        static BLANK: $ResourceKey<$DecoratedPotPattern>;
        static SHELTER: $ResourceKey<$DecoratedPotPattern>;
        static PLENTY: $ResourceKey<$DecoratedPotPattern>;
        static BLADE: $ResourceKey<$DecoratedPotPattern>;
        static HOWL: $ResourceKey<$DecoratedPotPattern>;
        static MOURNER: $ResourceKey<$DecoratedPotPattern>;
        static PRIZE: $ResourceKey<$DecoratedPotPattern>;
        constructor();
    }
    export class $StructureBlockEntity$UpdateType extends $Enum<$StructureBlockEntity$UpdateType> {
        static values(): $StructureBlockEntity$UpdateType[];
        static valueOf(arg0: string): $StructureBlockEntity$UpdateType;
        static UPDATE_DATA: $StructureBlockEntity$UpdateType;
        static SAVE_AREA: $StructureBlockEntity$UpdateType;
        static LOAD_AREA: $StructureBlockEntity$UpdateType;
        static SCAN_AREA: $StructureBlockEntity$UpdateType;
    }
    /**
     * Values that may be interpreted as {@link $StructureBlockEntity$UpdateType}.
     */
    export type $StructureBlockEntity$UpdateType_ = "update_data" | "save_area" | "load_area" | "scan_area";
    export class $SculkCatalystBlockEntity$CatalystListener implements $GameEventListener {
        getSculkSpreader(): $SculkSpreader;
        handleGameEvent(arg0: $ServerLevel, arg1: $Holder_<$GameEvent>, arg2: $GameEvent$Context_, arg3: $Vec3_): boolean;
        getDeliveryMode(): $GameEventListener$DeliveryMode;
        getListenerRadius(): number;
        getListenerSource(): $PositionSource;
        static PULSE_TICKS: number;
        constructor(arg0: $BlockState_, arg1: $PositionSource);
        get sculkSpreader(): $SculkSpreader;
        get deliveryMode(): $GameEventListener$DeliveryMode;
        get listenerRadius(): number;
        get listenerSource(): $PositionSource;
    }
    export class $DaylightDetectorBlockEntity extends $BlockEntity {
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export interface $BlockEntityType extends RegistryMarked<RegistryTypes.BlockEntityTypeTag, RegistryTypes.BlockEntityType> {}
    export class $CrafterBlockEntity extends $RandomizableContainerBlockEntity implements $CraftingContainer {
        getWidth(): number;
        getItems(): $NonNullList<$ItemStack>;
        getHeight(): number;
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $CrafterBlockEntity): void;
        getRedstoneSignal(): number;
        setTriggered(arg0: boolean): void;
        isSlotDisabled(arg0: number): boolean;
        isTriggered(): boolean;
        setSlotState(arg0: number, arg1: boolean): void;
        setCraftingTicksRemaining(arg0: number): void;
        fillStackedContents(arg0: $StackedContents): void;
        asCraftInput(): $CraftingInput;
        asPositionedCraftInput(): $CraftingInput$Positioned;
        static CONTAINER_WIDTH: number;
        static CONTAINER_HEIGHT: number;
        static DATA_TRIGGERED: number;
        level: $Level;
        static SLOT_ENABLED: number;
        static CONTAINER_SIZE: number;
        static SLOT_DISABLED: number;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static NUM_DATA: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get width(): number;
        get items(): $NonNullList<$ItemStack>;
        get height(): number;
        get redstoneSignal(): number;
        set craftingTicksRemaining(value: number);
    }
    export class $HangingSignBlockEntity extends $SignBlockEntity implements $ExtendedHangingSign {
        amendments$getExtension(): $HangingSignTileExtension;
        getRenderBoundingBox(): $AABB;
        amendments$getAnimation(): $SwingAnimation;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get renderBoundingBox(): $AABB;
    }
    export class $BellBlockEntity$ResonationEndAction {
    }
    export interface $BellBlockEntity$ResonationEndAction {
    }
    /**
     * Values that may be interpreted as {@link $BellBlockEntity$ResonationEndAction}.
     */
    export type $BellBlockEntity$ResonationEndAction_ = (() => void);
    export class $BrewingStandBlockEntity extends $BaseContainerBlockEntity implements $WorldlyContainer {
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BrewingStandBlockEntity): void;
        handler$fod000$amendments$refreshModel(tag: $CompoundTag_, registries: $HolderLookup$Provider, ci: $CallbackInfo): void;
        getSlotsForFace(arg0: $Direction_): number[];
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        canPlaceItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        canTakeItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        static DATA_BREW_TIME: number;
        static DATA_FUEL_USES: number;
        level: $Level;
        fuel: number;
        brewTime: number;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        static NUM_DATA_VALUES: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static FUEL_USES: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $StructureBlockEntity extends $BlockEntity {
        setSeed(arg0: number): void;
        getSeed(): number;
        setMode(arg0: $StructureMode_): void;
        getMode(): $StructureMode;
        getRotation(): $Rotation;
        setRotation(arg0: $Rotation_): void;
        usedBy(arg0: $Player): boolean;
        createdBy(arg0: $LivingEntity): void;
        setPowered(arg0: boolean): void;
        isPowered(): boolean;
        placeStructureIfSameSize(arg0: $ServerLevel): boolean;
        isStructureLoadable(): boolean;
        unloadStructure(): void;
        saveStructure(arg0: boolean): boolean;
        saveStructure(): boolean;
        placeStructure(arg0: $ServerLevel): void;
        getStructureSize(): $Vec3i;
        getMetaData(): string;
        setMetaData(arg0: string): void;
        isIgnoreEntities(): boolean;
        setIgnoreEntities(arg0: boolean): void;
        getIntegrity(): number;
        getStructurePos(): $BlockPos;
        setIntegrity(arg0: number): void;
        setStructurePos(arg0: $BlockPos_): void;
        getStructureName(): string;
        setStructureName(arg0: $ResourceLocation_): void;
        setStructureName(arg0: string): void;
        setStructureSize(arg0: $Vec3i): void;
        hasStructureName(): boolean;
        setShowBoundingBox(arg0: boolean): void;
        static createRandom(arg0: number): $RandomSource;
        loadStructureInfo(arg0: $ServerLevel): boolean;
        getShowBoundingBox(): boolean;
        constant$clj000$integrated_api$detectSize(value: number): number;
        getShowAir(): boolean;
        setShowAir(arg0: boolean): void;
        setMirror(arg0: $Mirror_): void;
        detectSize(): boolean;
        getMirror(): $Mirror;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        constant$clj000$integrated_api$readNbtLower(value: number): number;
        constant$clj000$integrated_api$readNbtUpper(value: number): number;
        level: $Level;
        static AUTHOR_TAG: string;
        static MAX_OFFSET_PER_AXIS: number;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static MAX_SIZE_PER_AXIS: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get structureLoadable(): boolean;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $AbstractFurnaceBlockEntity extends $BaseContainerBlockEntity implements $WorldlyContainer, $RecipeCraftingHolder, $StackedContentsCompatible, $AccessorAbstractFurnaceBlockEntity, $IMixinAbstractFurnaceBlockEntity, $AbstractFurnaceBlockEntityAccess {
        getRecipesToAwardAndPopExperience(arg0: $ServerLevel, arg1: $Vec3_): $List<$RecipeHolder<never>>;
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $AbstractFurnaceBlockEntity): void;
        static invalidateCache(): void;
        setRecipeUsed(arg0: $RecipeHolder_<never>): void;
        getSlotsForFace(arg0: $Direction_): number[];
        getRecipeUsed(): $RecipeHolder<never>;
        awardUsedRecipes(arg0: $Player, arg1: $List_<$ItemStack_>): void;
        awardUsedRecipesAndPopExperience(arg0: $ServerPlayer): void;
        static buildFuels(arg0: $ObjIntConsumer_<$Either<$Item, $TagKey<$Item>>>): void;
        static isFuel(arg0: $ItemStack_): boolean;
        /**
         * @deprecated
         */
        static getFuel(): $Map<$Item, number>;
        canPlaceItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        fillStackedContents(arg0: $StackedContents): void;
        canTakeItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        setRecipeUsed(arg0: $Level_, arg1: $ServerPlayer, arg2: $RecipeHolder_<never>): boolean;
        getItems(): $NonNullList<$ItemStack>;
        getCookingProgress(): number;
        getCookingTotalTime(): number;
        minihud_getUsedRecipes(): $Object2IntOpenHashMap<$ResourceLocation>;
        static DATA_LIT_DURATION: number;
        level: $Level;
        cookingTotalTime: number;
        static DATA_COOKING_PROGRESS: number;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static BURN_COOL_SPEED: number;
        cookingProgress: number;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        lockKey: $LockCode;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        get items(): $NonNullList<$ItemStack>;
    }
    export class $EnchantingTableBlockEntity extends $BlockEntity implements $Nameable {
        getName(): $Component;
        static bookAnimationTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $EnchantingTableBlockEntity): void;
        getCustomName(): $Component;
        setCustomName(arg0: $Component_): void;
        getDisplayName(): $Component;
        hasCustomName(): boolean;
        oFlip: number;
        flipA: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        rot: number;
        tRot: number;
        flipT: number;
        oOpen: number;
        time: number;
        oRot: number;
        flip: number;
        open: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get name(): $Component;
        get displayName(): $Component;
    }
    export class $BeehiveBlockEntity extends $BlockEntity {
        isEmpty(): boolean;
        isFull(): boolean;
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BeehiveBlockEntity): void;
        getOccupantCount(): number;
        addOccupant(arg0: $Entity): void;
        isFireNearby(): boolean;
        static getHoneyLevel(arg0: $BlockState_): number;
        storeBee(arg0: $BeehiveBlockEntity$Occupant_): void;
        isSedated(): boolean;
        emptyAllLivingFromHive(arg0: $Player, arg1: $BlockState_, arg2: $BeehiveBlockEntity$BeeReleaseStatus_): void;
        level: $Level;
        static MIN_OCCUPATION_TICKS_NECTARLESS: number;
        static MAX_OCCUPANTS: number;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get empty(): boolean;
        get full(): boolean;
        get occupantCount(): number;
        get fireNearby(): boolean;
        get sedated(): boolean;
    }
    export class $TickingBlockEntity {
    }
    export interface $TickingBlockEntity {
        getType(): string;
        tick(): void;
        isRemoved(): boolean;
        getPos(): $BlockPos;
        get type(): string;
        get removed(): boolean;
        get pos(): $BlockPos;
    }
    export class $SpawnerBlockEntity extends $BlockEntity implements $Spawner {
        static clientTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $SpawnerBlockEntity): void;
        setEntityId(arg0: $EntityType_<never>, arg1: $RandomSource): void;
        getSpawner(): $BaseSpawner;
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $SpawnerBlockEntity): void;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get spawner(): $BaseSpawner;
    }
    export class $BellBlockEntity extends $BlockEntity implements $IBellConnection {
        static clientTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BellBlockEntity): void;
        onHit(arg0: $Direction_): void;
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BellBlockEntity): void;
        amendments$getConnection(): $IBellConnection$Type;
        amendments$setConnected(con: $IBellConnection$Type_): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        getRenderBoundingBox(): $AABB;
        ticks: number;
        level: $Level;
        clickDirection: $Direction;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        shaking: boolean;
        amendments$connection: $IBellConnection$Type;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get renderBoundingBox(): $AABB;
    }
    export class $DropperBlockEntity extends $DispenserBlockEntity {
        level: $Level;
        static CONTAINER_SIZE: number;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $SignBlockEntity extends $BlockEntity implements $ISignTextAccess, $IMixinSignBlockEntity {
        static tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $SignBlockEntity): void;
        getText(front: boolean): $SignText;
        setText(arg0: $SignText, arg1: boolean): boolean;
        executeClickCommandsIfPresent(arg0: $Player, arg1: $Level_, arg2: $BlockPos_, arg3: boolean): boolean;
        getSignInteractionFailedSoundEvent(): $SoundEvent;
        isFacingFrontText(arg0: $Player): boolean;
        setAllowedPlayerEditor(arg0: $UUID_): void;
        getPlayerWhoMayEdit(): $UUID;
        canExecuteClickCommands(arg0: boolean, arg1: $Player): boolean;
        static createCommandSourceStack(arg0: $Player, arg1: $Level_, arg2: $BlockPos_): $CommandSourceStack;
        getFrontText(): $SignText;
        updateSignText(arg0: $Player, arg1: boolean, arg2: $List_<$FilteredText_>): void;
        getTextLineHeight(): number;
        getBackText(): $SignText;
        isWaxed(): boolean;
        setWaxed(arg0: boolean): boolean;
        updateText(arg0: $UnaryOperator_<$SignText>, arg1: boolean): boolean;
        getMaxTextLineWidth(): number;
        playerIsTooFarAwayToEdit(arg0: $UUID_): boolean;
        litematica_getBackText(): $SignText;
        litematica_getFrontText(): $SignText;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        constructor(arg0: $BlockEntityType_<any>, arg1: $BlockPos_, arg2: $BlockState_);
        get signInteractionFailedSoundEvent(): $SoundEvent;
        set allowedPlayerEditor(value: $UUID_);
        get playerWhoMayEdit(): $UUID;
        get frontText(): $SignText;
        get textLineHeight(): number;
        get backText(): $SignText;
        get maxTextLineWidth(): number;
    }
    export class $JukeboxBlockEntity extends $BlockEntity implements $Clearable, $ContainerSingleItem$BlockContainerSingleItem, $IBetterJukebox {
        static tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $JukeboxBlockEntity): void;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        getMaxStackSize(): number;
        handler$fok000$amendments$notifySongChanged(ci: $CallbackInfo): void;
        setTheItem(arg0: $ItemStack_): void;
        getTheItem(): $ItemStack;
        getComparatorOutput(): number;
        getSongPlayer(): $JukeboxSongPlayer;
        popOutTheItem(): void;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        onSongChanged(): void;
        tryForcePlaySong(): void;
        splitTheItem(arg0: number): $ItemStack;
        getContainerBlockEntity(): $BlockEntity;
        setSongItemWithoutPlaying(arg0: $ItemStack_): void;
        amendments$tickAnimation(): void;
        amendments$getRotation(partialTicks: number): number;
        stillValid(arg0: $Player): boolean;
        isEmpty(): boolean;
        getItem(arg0: number): $ItemStack;
        removeItem(arg0: number, arg1: number): $ItemStack;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        setItem(arg0: number, arg1: $ItemStack_): void;
        removeTheItem(): $ItemStack;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        countItem(arg0: $Item_): number;
        getMaxStackSize(arg0: $ItemStack_): number;
        self(): $Container;
        isMutable(): boolean;
        getBlock(level: $Level_): $LevelBlock;
        clear(): void;
        asContainer(): $Container;
        getWidth(): number;
        getHeight(): number;
        setChanged(): void;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        clear(match: $ItemPredicate_): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        isEmpty(): boolean;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        clientsort$setChanged(): void;
        static SONG_ITEM_TAG_ID: string;
        level: $Level;
        jukeboxSongPlayer: $JukeboxSongPlayer;
        static TICKS_SINCE_SONG_STARTED_TAG_ID: string;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get comparatorOutput(): number;
        get songPlayer(): $JukeboxSongPlayer;
        get containerBlockEntity(): $BlockEntity;
        set songItemWithoutPlaying(value: $ItemStack_);
        get containerSize(): number;
        get mutable(): boolean;
        get width(): number;
        get height(): number;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $BlockEntityType$BlockEntitySupplier<T extends $BlockEntity> {
    }
    export interface $BlockEntityType$BlockEntitySupplier<T extends $BlockEntity> {
        create(arg0: $BlockPos_, arg1: $BlockState_): T;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityType$BlockEntitySupplier}.
     */
    export type $BlockEntityType$BlockEntitySupplier_<T> = ((arg0: $BlockPos, arg1: $BlockState) => T);
    export class $TheEndPortalBlockEntity extends $BlockEntity {
        shouldRenderFace(arg0: $Direction_): boolean;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BannerPatternLayers$Builder {
        add(arg0: $BannerPatternLayers$Layer_): $BannerPatternLayers$Builder;
        add(arg0: $Holder_<$BannerPattern>, arg1: $DyeColor_): $BannerPatternLayers$Builder;
        addAll(arg0: $BannerPatternLayers_): $BannerPatternLayers$Builder;
        build(): $BannerPatternLayers;
        /**
         * @deprecated
         */
        addIfRegistered(arg0: $HolderGetter<$BannerPattern_>, arg1: $ResourceKey_<$BannerPattern>, arg2: $DyeColor_): $BannerPatternLayers$Builder;
        constructor();
    }
    export class $SculkSensorBlockEntity extends $BlockEntity implements $GameEventListener$Provider<$VibrationSystem$Listener>, $VibrationSystem {
        getVibrationData(): $VibrationSystem$Data;
        getVibrationUser(): $VibrationSystem$User;
        getLastVibrationFrequency(): number;
        createVibrationUser(): $VibrationSystem$User;
        setLastVibrationFrequency(arg0: number): void;
        getListener(): $VibrationSystem$Listener;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get vibrationData(): $VibrationSystem$Data;
        get vibrationUser(): $VibrationSystem$User;
        get listener(): $VibrationSystem$Listener;
    }
    export class $TrialSpawnerBlockEntity extends $BlockEntity implements $Spawner, $TrialSpawner$StateAccessor {
        getState(): $TrialSpawnerState;
        setState(arg0: $Level_, arg1: $TrialSpawnerState_): void;
        setEntityId(arg0: $EntityType_<never>, arg1: $RandomSource): void;
        markUpdated(): void;
        getTrialSpawner(): $TrialSpawner;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get trialSpawner(): $TrialSpawner;
    }
    export class $DispenserBlockEntity extends $RandomizableContainerBlockEntity implements $DispenserBlockEntityAccessor {
        getRandomSlot(arg0: $RandomSource): number;
        insertItem(arg0: $ItemStack_): $ItemStack;
        getItems(): $NonNullList<$ItemStack>;
        level: $Level;
        static CONTAINER_SIZE: number;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get items(): $NonNullList<$ItemStack>;
    }
    export class $TheEndGatewayBlockEntity extends $TheEndPortalBlockEntity {
        getCooldownPercent(arg0: number): number;
        static portalTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $TheEndGatewayBlockEntity): void;
        static beamAnimationTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $TheEndGatewayBlockEntity): void;
        getParticleAmount(): number;
        isCoolingDown(): boolean;
        getPortalPosition(arg0: $ServerLevel, arg1: $BlockPos_): $Vec3;
        static triggerCooldown(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $TheEndGatewayBlockEntity): void;
        getSpawnPercent(arg0: number): number;
        setExitPosition(arg0: $BlockPos_, arg1: boolean): void;
        isSpawning(): boolean;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get particleAmount(): number;
        get coolingDown(): boolean;
        get spawning(): boolean;
    }
    export class $FurnaceBlockEntity extends $AbstractFurnaceBlockEntity {
        static DATA_LIT_DURATION: number;
        level: $Level;
        cookingTotalTime: number;
        static DATA_COOKING_PROGRESS: number;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static BURN_COOL_SPEED: number;
        cookingProgress: number;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        lockKey: $LockCode;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BannerPatterns {
        static register(arg0: $BootstrapContext<$BannerPattern_>, arg1: $ResourceKey_<$BannerPattern>): void;
        static bootstrap(arg0: $BootstrapContext<$BannerPattern_>): void;
        static GUSTER: $ResourceKey<$BannerPattern>;
        static STRIPE_BOTTOM: $ResourceKey<$BannerPattern>;
        static GLOBE: $ResourceKey<$BannerPattern>;
        static SQUARE_TOP_RIGHT: $ResourceKey<$BannerPattern>;
        static STRIPE_MIDDLE: $ResourceKey<$BannerPattern>;
        static TRIANGLE_TOP: $ResourceKey<$BannerPattern>;
        static HALF_HORIZONTAL_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_TOP: $ResourceKey<$BannerPattern>;
        static DIAGONAL_RIGHT_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_CENTER: $ResourceKey<$BannerPattern>;
        static STRAIGHT_CROSS: $ResourceKey<$BannerPattern>;
        static SQUARE_BOTTOM_LEFT: $ResourceKey<$BannerPattern>;
        static SKULL: $ResourceKey<$BannerPattern>;
        static RHOMBUS_MIDDLE: $ResourceKey<$BannerPattern>;
        static CIRCLE_MIDDLE: $ResourceKey<$BannerPattern>;
        static HALF_HORIZONTAL: $ResourceKey<$BannerPattern>;
        static GRADIENT: $ResourceKey<$BannerPattern>;
        static FLOW: $ResourceKey<$BannerPattern>;
        static BASE: $ResourceKey<$BannerPattern>;
        static HALF_VERTICAL_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_RIGHT: $ResourceKey<$BannerPattern>;
        static CREEPER: $ResourceKey<$BannerPattern>;
        static STRIPE_LEFT: $ResourceKey<$BannerPattern>;
        static BRICKS: $ResourceKey<$BannerPattern>;
        static TRIANGLES_BOTTOM: $ResourceKey<$BannerPattern>;
        static SQUARE_TOP_LEFT: $ResourceKey<$BannerPattern>;
        static FLOWER: $ResourceKey<$BannerPattern>;
        static STRIPE_SMALL: $ResourceKey<$BannerPattern>;
        static TRIANGLE_BOTTOM: $ResourceKey<$BannerPattern>;
        static CURLY_BORDER: $ResourceKey<$BannerPattern>;
        static TRIANGLES_TOP: $ResourceKey<$BannerPattern>;
        static DIAGONAL_RIGHT: $ResourceKey<$BannerPattern>;
        static STRIPE_DOWNLEFT: $ResourceKey<$BannerPattern>;
        static DIAGONAL_LEFT_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_DOWNRIGHT: $ResourceKey<$BannerPattern>;
        static PIGLIN: $ResourceKey<$BannerPattern>;
        static GRADIENT_UP: $ResourceKey<$BannerPattern>;
        static DIAGONAL_LEFT: $ResourceKey<$BannerPattern>;
        static BORDER: $ResourceKey<$BannerPattern>;
        static MOJANG: $ResourceKey<$BannerPattern>;
        static HALF_VERTICAL: $ResourceKey<$BannerPattern>;
        static CROSS: $ResourceKey<$BannerPattern>;
        static SQUARE_BOTTOM_RIGHT: $ResourceKey<$BannerPattern>;
        constructor();
    }
    export class $RandomizableContainerBlockEntity extends $BaseContainerBlockEntity implements $RandomizableContainer {
        setLootTableSeed(arg0: number): void;
        setLootTable(arg0: $ResourceKey_<$LootTable>): void;
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        wrapOperation$dle000$lootr$setLootTable(arg0: $RandomizableContainer, arg1: $ResourceKey_<any>, arg2: $Operation_<any>): void;
        handler$dno000$youkaishomecoming$trayLoad(arg0: $Player, arg1: $CallbackInfo): void;
        handler$dle000$lootr$unpackLootTable(arg0: $Player, arg1: $CallbackInfo): void;
        wrapOperation$dle000$lootr$tryLoadLootTable(arg0: $RandomizableContainer, arg1: number, arg2: $Operation_<any>): void;
        trySaveLootTable(arg0: $CompoundTag_): boolean;
        setLootTable(arg0: $ResourceKey_<$LootTable>, arg1: number): void;
        tryLoadLootTable(arg0: $CompoundTag_): boolean;
        unpackLootTable(arg0: $Player): void;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        lockKey: $LockCode;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
    }
    export class $BlastFurnaceBlockEntity extends $AbstractFurnaceBlockEntity {
        static DATA_LIT_DURATION: number;
        level: $Level;
        cookingTotalTime: number;
        static DATA_COOKING_PROGRESS: number;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static BURN_COOL_SPEED: number;
        cookingProgress: number;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        lockKey: $LockCode;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BannerPattern extends $Record {
        translationKey(): string;
        assetId(): $ResourceLocation;
        static CODEC: $Codec<$Holder<$BannerPattern>>;
        static DIRECT_CODEC: $Codec<$BannerPattern>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BannerPattern>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$BannerPattern>>;
        constructor(arg0: $ResourceLocation_, arg1: string);
    }
    /**
     * Values that may be interpreted as {@link $BannerPattern}.
     */
    export type $BannerPattern_ = RegistryTypes.BannerPattern | { assetId?: $ResourceLocation_, translationKey?: string,  } | [assetId?: $ResourceLocation_, translationKey?: string, ];
    export class $LecternBlockEntity extends $BlockEntity implements $Clearable, $MenuProvider, $LecternBlockEntityAccessor, $Container {
        isEmpty(): boolean;
        getDisplayName(): $Component;
        getItem(slot: number): $ItemStack;
        canPlaceItem(index: number, stack: $ItemStack_): boolean;
        setBook(arg0: $ItemStack_, arg1: $Player): void;
        setBook(arg0: $ItemStack_): void;
        getBook(): $ItemStack;
        removeItem(slot: number, amount: number): $ItemStack;
        getContainerSize(): number;
        removeItemNoUpdate(slot: number): $ItemStack;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        setItem(slot: number, stack: $ItemStack_): void;
        stillValid(player: $Player): boolean;
        getRedstoneSignal(): number;
        getPage(): number;
        clearContent(): void;
        handler$fon000$amendments$setPage(page: number, ci: $CallbackInfo): void;
        handler$fon000$amendments$createEditMenu(i: number, inventory: $Inventory, player: $Player, cir: $CallbackInfoReturnable<any>): void;
        hasBook(): boolean;
        setPage(arg0: number): void;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        countItem(arg0: $Item_): number;
        getMaxStackSize(): number;
        getMaxStackSize(arg0: $ItemStack_): number;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        self(): $Container;
        isMutable(): boolean;
        getBlock(level: $Level_): $LevelBlock;
        clear(): void;
        asContainer(): $Container;
        getWidth(): number;
        getHeight(): number;
        setChanged(): void;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        clear(match: $ItemPredicate_): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        isEmpty(): boolean;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getBookAccess(): $Container;
        getDataAccess(): $ContainerData;
        clientsort$setChanged(): void;
        static NUM_SLOTS: number;
        static DATA_PAGE: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static SLOT_BOOK: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static NUM_DATA: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get displayName(): $Component;
        get containerSize(): number;
        get redstoneSignal(): number;
        get mutable(): boolean;
        get width(): number;
        get height(): number;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
        get bookAccess(): $Container;
        get dataAccess(): $ContainerData;
    }
    export class $BannerBlockEntity extends $BlockEntity implements $Nameable, $AccessorBannerBlockEntity {
        getName(): $Component;
        getItem(): $ItemStack;
        getCustomName(): $Component;
        getPatterns(): $BannerPatternLayers;
        getBaseColor(): $DyeColor;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        fromItem(arg0: $ItemStack_, arg1: $DyeColor_): void;
        getDisplayName(): $Component;
        hasCustomName(): boolean;
        setName(arg0: $Component_): void;
        static MAX_PATTERNS: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_, arg2: $DyeColor_);
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get item(): $ItemStack;
        get customName(): $Component;
        get patterns(): $BannerPatternLayers;
        get baseColor(): $DyeColor;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get displayName(): $Component;
    }
    export class $Hopper {
        static SUCK_AABB: $AABB;
    }
    export interface $Hopper extends $Container {
        getSuckAabb(): $AABB;
        isGridAligned(): boolean;
        getLevelY(): number;
        getLevelX(): number;
        getLevelZ(): number;
        get suckAabb(): $AABB;
        get gridAligned(): boolean;
        get levelY(): number;
        get levelX(): number;
        get levelZ(): number;
    }
    export class $ChiseledBookShelfBlockEntity extends $BlockEntity implements $Container {
        isEmpty(): boolean;
        count(): number;
        getItem(arg0: number): $ItemStack;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        removeItem(arg0: number, arg1: number): $ItemStack;
        getMaxStackSize(): number;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        setItem(arg0: number, arg1: $ItemStack_): void;
        stillValid(arg0: $Player): boolean;
        clearContent(): void;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        getLastInteractedSlot(): number;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        countItem(arg0: $Item_): number;
        getMaxStackSize(arg0: $ItemStack_): number;
        self(): $Container;
        isMutable(): boolean;
        getBlock(level: $Level_): $LevelBlock;
        clear(): void;
        asContainer(): $Container;
        getWidth(): number;
        getHeight(): number;
        setChanged(): void;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        clear(match: $ItemPredicate_): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        isEmpty(): boolean;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        clientsort$setChanged(): void;
        static MAX_BOOKS_IN_STORAGE: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get containerSize(): number;
        get lastInteractedSlot(): number;
        get mutable(): boolean;
        get width(): number;
        get height(): number;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $ConduitBlockEntity extends $BlockEntity implements $ConduitExtra {
        isActive(): boolean;
        static clientTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ConduitBlockEntity): void;
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ConduitBlockEntity): void;
        minihud$setActivatingBlockCount(count: number): void;
        minihud$getStoredActivatingBlockCount(): number;
        minihud$getCurrentActivatingBlockCount(): number;
        getActiveRotation(arg0: number): number;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        isHunting(): boolean;
        tickCount: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get active(): boolean;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get hunting(): boolean;
    }
    export class $ContainerOpenersCounter {
        getOpenerCount(): number;
        decrementOpeners(arg0: $Player, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_): void;
        incrementOpeners(arg0: $Player, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_): void;
        recheckOpeners(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): void;
        constructor();
        get openerCount(): number;
    }
    export class $JigsawBlockEntity extends $BlockEntity {
        getName(): $ResourceLocation;
        setName(arg0: $ResourceLocation_): void;
        getPool(): $ResourceKey<$StructureTemplatePool>;
        getTarget(): $ResourceLocation;
        setTarget(arg0: $ResourceLocation_): void;
        generate(arg0: $ServerLevel, arg1: number, arg2: boolean): void;
        getFinalState(): string;
        setFinalState(arg0: string): void;
        getJoint(): $JigsawBlockEntity$JointType;
        setJoint(arg0: $JigsawBlockEntity$JointType_): void;
        setPool(arg0: $ResourceKey_<$StructureTemplatePool>): void;
        getSelectionPriority(): number;
        setPlacementPriority(arg0: number): void;
        setSelectionPriority(arg0: number): void;
        getPlacementPriority(): number;
        static TARGET: string;
        level: $Level;
        static FINAL_STATE: string;
        static SELECTION_PRIORITY: string;
        static POOL: string;
        static PLACEMENT_PRIORITY: string;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static JOINT: string;
        static NAME: string;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $CalibratedSculkSensorBlockEntity$VibrationUser extends $SculkSensorBlockEntity$VibrationUser {
    }
    export class $BannerPatternLayers$Layer extends $Record {
        pattern(): $Holder<$BannerPattern>;
        color(): $DyeColor;
        description(): $MutableComponent;
        static CODEC: $Codec<$BannerPatternLayers$Layer>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BannerPatternLayers$Layer>;
        constructor(arg0: $Holder_<$BannerPattern>, arg1: $DyeColor_);
    }
    /**
     * Values that may be interpreted as {@link $BannerPatternLayers$Layer}.
     */
    export type $BannerPatternLayers$Layer_ = { color?: $DyeColor_, pattern?: $Holder_<$BannerPattern>,  } | [color?: $DyeColor_, pattern?: $Holder_<$BannerPattern>, ];
    export class $DecoratedPotBlockEntity extends $BlockEntity implements $RandomizableContainer, $ContainerSingleItem$BlockContainerSingleItem, $ItemRenderable {
        getDecorations(): $PotDecorations;
        setLootTableSeed(arg0: number): void;
        getDirection(): $Direction;
        setTheItem(arg0: $ItemStack_): void;
        getTheItem(): $ItemStack;
        setLootTable(arg0: $ResourceKey_<$LootTable>): void;
        ccg$getItemStack(): $ItemStack;
        getPotAsItem(): $ItemStack;
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        wobble(arg0: $DecoratedPotBlockEntity$WobbleStyle_): void;
        splitTheItem(arg0: number): $ItemStack;
        setFromItem(arg0: $ItemStack_): void;
        getContainerBlockEntity(): $BlockEntity;
        static createDecoratedPotItem(arg0: $PotDecorations_): $ItemStack;
        wrapOperation$dle000$lootr$setLootTable(arg0: $RandomizableContainer, arg1: $ResourceKey_<any>, arg2: $Operation_<any>): void;
        handler$dno000$youkaishomecoming$trayLoad(arg0: $Player, arg1: $CallbackInfo): void;
        handler$dle000$lootr$unpackLootTable(arg0: $Player, arg1: $CallbackInfo): void;
        wrapOperation$dle000$lootr$tryLoadLootTable(arg0: $RandomizableContainer, arg1: number, arg2: $Operation_<any>): void;
        trySaveLootTable(arg0: $CompoundTag_): boolean;
        setLootTable(arg0: $ResourceKey_<$LootTable>, arg1: number): void;
        tryLoadLootTable(arg0: $CompoundTag_): boolean;
        unpackLootTable(arg0: $Player): void;
        stillValid(arg0: $Player): boolean;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        countItem(arg0: $Item_): number;
        getMaxStackSize(): number;
        getMaxStackSize(arg0: $ItemStack_): number;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        clearContent(): void;
        removeTheItem(): $ItemStack;
        self(): $Container;
        isMutable(): boolean;
        getBlock(level: $Level_): $LevelBlock;
        clear(): void;
        asContainer(): $Container;
        getWidth(): number;
        getHeight(): number;
        setChanged(): void;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        clear(match: $ItemPredicate_): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        isEmpty(): boolean;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        clientsort$setChanged(): void;
        static TAG_SHERDS: string;
        lastWobbleStyle: $DecoratedPotBlockEntity$WobbleStyle;
        static TAG_ITEM: string;
        level: $Level;
        wobbleStartedAtTick: number;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static EVENT_POT_WOBBLES: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get decorations(): $PotDecorations;
        get direction(): $Direction;
        get potAsItem(): $ItemStack;
        set fromItem(value: $ItemStack_);
        get containerBlockEntity(): $BlockEntity;
        get mutable(): boolean;
        get width(): number;
        get height(): number;
        get slots(): number;
        get empty(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $SculkShriekerBlockEntity extends $BlockEntity implements $GameEventListener$Provider<$VibrationSystem$Listener>, $VibrationSystem {
        tryRespond(arg0: $ServerLevel): void;
        tryShriek(arg0: $ServerLevel, arg1: $ServerPlayer): void;
        getVibrationData(): $VibrationSystem$Data;
        getVibrationUser(): $VibrationSystem$User;
        static tryGetPlayer(arg0: $Entity): $ServerPlayer;
        getListener(): $VibrationSystem$Listener;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get vibrationData(): $VibrationSystem$Data;
        get vibrationUser(): $VibrationSystem$User;
        get listener(): $VibrationSystem$Listener;
    }
}
