import { $DimensionPadding, $DimensionPadding_, $StructureTemplatePool } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $RegistryHolder, $MansionRoomDuck } from "@package/dev/worldgen/lithostitched/duck";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $JigsawStructureAccessor } from "@package/dev/worldgen/lithostitched/mixin/common";
import { $MobCategory_ } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List, $List_ } from "@package/java/util";
import { $PoolAliasBinding } from "@package/net/minecraft/world/level/levelgen/structure/pools/alias";
import { $HeightProvider } from "@package/net/minecraft/world/level/levelgen/heightproviders";
import { $StringRepresentable, $RandomSource, $StringRepresentable$EnumCodec } from "@package/net/minecraft/util";
import { $BlockPos, $BlockPos_, $RegistryAccess, $Holder_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $WeightedRandomList } from "@package/net/minecraft/util/random";
import { $Enum, $Record } from "@package/java/lang";
import { $Structure$StructureSettings_, $StructurePiece, $SinglePieceStructure, $StructurePiece$BlockSelector, $TemplateStructurePiece, $Structure_, $BoundingBox, $Structure$GenerationStub, $Structure$GenerationContext_, $ScatteredFeaturePiece, $StructurePieceAccessor, $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Heightmap$Types_, $Heightmap$Types } from "@package/net/minecraft/world/level/levelgen";
import { $ChunkPos, $WorldGenLevel, $StructureManager } from "@package/net/minecraft/world/level";
import { $MobSpawnSettings$SpawnerData } from "@package/net/minecraft/world/level/biome";
import { $SpawnBoxSettings, $ISpawnBoxStructure, $SpawnBoxSettings_ } from "@package/net/mehvahdjukaar/moonlight/api/worldgen";
import { $LiquidSettings, $StructureTemplateManager, $LiquidSettings_, $StructureTemplate } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $StructurePieceType_, $PiecesContainer_, $PiecesContainer } from "@package/net/minecraft/world/level/levelgen/structure/pieces";
import { $Mirror_, $Rotation_ } from "@package/net/minecraft/world/level/block";

declare module "@package/net/minecraft/world/level/levelgen/structure/structures" {
    export class $IglooPieces$IglooPiece extends $TemplateStructurePiece {
        constructor(arg0: $StructureTemplateManager, arg1: $ResourceLocation_, arg2: $BlockPos_, arg3: $Rotation_, arg4: number);
        constructor(arg0: $StructureTemplateManager, arg1: $CompoundTag_);
    }
    export class $OceanMonumentPieces$OceanMonumentDoubleXYRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        constructor(arg0: $Direction_, arg1: $OceanMonumentPieces$RoomDefinition);
        constructor(arg0: $CompoundTag_);
    }
    export class $JigsawStructure extends $Structure implements $JigsawStructureAccessor, $ISpawnBoxStructure {
        findGenerationPoint(arg0: $Structure$GenerationContext_): ($Structure$GenerationStub) | undefined;
        ml$setSpawnBoxSettings(arg0: $SpawnBoxSettings_): void;
        ml$getSpawnBoxSettings(): $SpawnBoxSettings;
        ml$getSpecialSpawns(arg0: $StructureManager, arg1: $Structure_, arg2: $BlockPos_, arg3: $LongSet, arg4: $MobCategory_): $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        setPoolAliases(list: $List_<$PoolAliasBinding>): void;
        getPoolAliases(): $List<$PoolAliasBinding>;
        static CODEC: $MapCodec<$JigsawStructure>;
        static DEFAULT_LIQUID_SETTINGS: $LiquidSettings;
        static DEFAULT_DIMENSION_PADDING: $DimensionPadding;
        static MAX_DEPTH: number;
        static MIN_DEPTH: number;
        static DIRECT_CODEC: $Codec<$Structure>;
        static MAX_TOTAL_STRUCTURE_RANGE: number;
        constructor(arg0: $Structure$StructureSettings_, arg1: $Holder_<$StructureTemplatePool>, arg2: number, arg3: $HeightProvider, arg4: boolean, arg5: $Heightmap$Types_);
        constructor(arg0: $Structure$StructureSettings_, arg1: $Holder_<$StructureTemplatePool>, arg2: ($ResourceLocation_) | undefined, arg3: number, arg4: $HeightProvider, arg5: boolean, arg6: ($Heightmap$Types_) | undefined, arg7: number, arg8: $List_<$PoolAliasBinding>, arg9: $DimensionPadding_, arg10: $LiquidSettings_);
        constructor(arg0: $Structure$StructureSettings_, arg1: $Holder_<$StructureTemplatePool>, arg2: number, arg3: $HeightProvider, arg4: boolean);
    }
    export class $OceanMonumentPieces$MonumentBuilding extends $OceanMonumentPieces$OceanMonumentPiece {
        static BIOME_RANGE_CHECK: number;
        constructor(arg0: $RandomSource, arg1: number, arg2: number, arg3: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $OceanMonumentPieces$RoomDefinition {
    }
    export class $OceanMonumentPieces$FitDoubleXYRoom implements $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $OceanMonumentPieces$FitSimpleTopRoom implements $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $OceanRuinPieces {
        static addPieces(arg0: $StructureTemplateManager, arg1: $BlockPos_, arg2: $Rotation_, arg3: $StructurePieceAccessor, arg4: $RandomSource, arg5: $OceanRuinStructure): void;
        constructor();
    }
    export class $IglooStructure extends $Structure {
        findGenerationPoint(arg0: $Structure$GenerationContext_): ($Structure$GenerationStub) | undefined;
        static CODEC: $MapCodec<$IglooStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(arg0: $Structure$StructureSettings_);
    }
    export class $StrongholdStructure extends $Structure {
        findGenerationPoint(arg0: $Structure$GenerationContext_): ($Structure$GenerationStub) | undefined;
        static CODEC: $MapCodec<$StrongholdStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(arg0: $Structure$StructureSettings_);
    }
    export class $OceanRuinStructure extends $Structure {
        findGenerationPoint(arg0: $Structure$GenerationContext_): ($Structure$GenerationStub) | undefined;
        largeProbability: number;
        clusterProbability: number;
        static CODEC: $MapCodec<$OceanRuinStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        biomeTemp: $OceanRuinStructure$Type;
        constructor(arg0: $Structure$StructureSettings_, arg1: $OceanRuinStructure$Type_, arg2: number, arg3: number);
    }
    export class $JungleTemplePiece extends $ScatteredFeaturePiece {
        static WIDTH: number;
        static DEPTH: number;
        constructor(arg0: $RandomSource, arg1: number, arg2: number);
        constructor(arg0: $CompoundTag_);
    }
    export class $OceanMonumentPieces$OceanMonumentDoubleZRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        constructor(arg0: $Direction_, arg1: $OceanMonumentPieces$RoomDefinition);
        constructor(arg0: $CompoundTag_);
    }
    export class $MineshaftStructure extends $Structure {
        findGenerationPoint(arg0: $Structure$GenerationContext_): ($Structure$GenerationStub) | undefined;
        static CODEC: $MapCodec<$MineshaftStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(arg0: $Structure$StructureSettings_, arg1: $MineshaftStructure$Type_);
    }
    export class $MineshaftPieces$MineShaftPiece extends $StructurePiece {
        constructor(arg0: $StructurePieceType_, arg1: number, arg2: $MineshaftStructure$Type_, arg3: $BoundingBox);
        constructor(arg0: $StructurePieceType_, arg1: $CompoundTag_);
    }
    export class $RuinedPortalStructure$Setup extends $Record {
        weight(): number;
        replaceWithBlackstone(): boolean;
        airPocketProbability(): number;
        overgrown(): boolean;
        vines(): boolean;
        placement(): $RuinedPortalPiece$VerticalPlacement;
        mossiness(): number;
        canBeCold(): boolean;
        static CODEC: $Codec<$RuinedPortalStructure$Setup>;
        constructor(arg0: $RuinedPortalPiece$VerticalPlacement_, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: number);
    }
    /**
     * Values that may be interpreted as {@link $RuinedPortalStructure$Setup}.
     */
    export type $RuinedPortalStructure$Setup_ = { mossiness?: number, replaceWithBlackstone?: boolean, placement?: $RuinedPortalPiece$VerticalPlacement_, airPocketProbability?: number, overgrown?: boolean, canBeCold?: boolean, vines?: boolean, weight?: number,  } | [mossiness?: number, replaceWithBlackstone?: boolean, placement?: $RuinedPortalPiece$VerticalPlacement_, airPocketProbability?: number, overgrown?: boolean, canBeCold?: boolean, vines?: boolean, weight?: number, ];
    export class $WoodlandMansionPieces {
        static generateMansion(arg0: $StructureTemplateManager, arg1: $BlockPos_, arg2: $Rotation_, arg3: $List_<$WoodlandMansionPieces$WoodlandMansionPiece>, arg4: $RandomSource): void;
        constructor();
    }
    export class $StrongholdPieces$FillerCorridor extends $StrongholdPieces$StrongholdPiece {
        static findPieceBox(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_): $BoundingBox;
        constructor(arg0: number, arg1: $BoundingBox, arg2: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $OceanMonumentPieces$FitSimpleRoom implements $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $WoodlandMansionPieces$PlacementData {
    }
    export class $MineshaftStructure$Type extends $Enum<$MineshaftStructure$Type> implements $StringRepresentable {
        getName(): string;
        static values(): $MineshaftStructure$Type[];
        static valueOf(arg0: string): $MineshaftStructure$Type;
        getPlanksState(): $BlockState;
        getWoodState(): $BlockState;
        getFenceState(): $BlockState;
        static byId(arg0: number): $MineshaftStructure$Type;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static MESA: $MineshaftStructure$Type;
        static CODEC: $Codec<$MineshaftStructure$Type>;
        static NORMAL: $MineshaftStructure$Type;
        get planksState(): $BlockState;
        get woodState(): $BlockState;
        get fenceState(): $BlockState;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $MineshaftStructure$Type}.
     */
    export type $MineshaftStructure$Type_ = "normal" | "mesa";
    export class $NetherFortressPieces$BridgeStraight extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_, arg6: number): $NetherFortressPieces$BridgeStraight;
        constructor(arg0: number, arg1: $RandomSource, arg2: $BoundingBox, arg3: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $NetherFortressPieces$BridgeCrossing extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: number, arg2: number, arg3: number, arg4: $Direction_, arg5: number): $NetherFortressPieces$BridgeCrossing;
        constructor(arg0: $CompoundTag_);
        constructor(arg0: number, arg1: $BoundingBox, arg2: $Direction_);
    }
    export class $EndCityPieces {
        static startHouseTower(arg0: $StructureTemplateManager, arg1: $BlockPos_, arg2: $Rotation_, arg3: $List_<$StructurePiece>, arg4: $RandomSource): void;
        constructor();
    }
    export class $RuinedPortalPiece$Properties {
        overgrown: boolean;
        static CODEC: $Codec<$RuinedPortalPiece$Properties>;
        replaceWithBlackstone: boolean;
        mossiness: number;
        vines: boolean;
        cold: boolean;
        airPocket: boolean;
        constructor();
        constructor(arg0: boolean, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean);
    }
    export class $RuinedPortalStructure extends $Structure {
        findGenerationPoint(arg0: $Structure$GenerationContext_): ($Structure$GenerationStub) | undefined;
        static CODEC: $MapCodec<$RuinedPortalStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(arg0: $Structure$StructureSettings_, arg1: $List_<$RuinedPortalStructure$Setup_>);
        constructor(arg0: $Structure$StructureSettings_, arg1: $RuinedPortalStructure$Setup_);
    }
    export class $StrongholdPieces$StartPiece extends $StrongholdPieces$StairsDown {
        previousPiece: $StrongholdPieces$PieceWeight;
        portalRoomPiece: $StrongholdPieces$PortalRoom;
        pendingChildren: $List<$StructurePiece>;
        constructor(arg0: $RandomSource, arg1: number, arg2: number);
        constructor(arg0: $CompoundTag_);
    }
    export class $NetherFortressPieces {
        static MAGIC_START_Y: number;
        constructor();
    }
    export class $NetherFortressPieces$NetherBridgePiece extends $StructurePiece {
        constructor(arg0: $StructurePieceType_, arg1: $CompoundTag_);
    }
    export class $MineshaftPieces$MineShaftStairs extends $MineshaftPieces$MineShaftPiece {
        static findStairs(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_): $BoundingBox;
        constructor(arg0: number, arg1: $BoundingBox, arg2: $Direction_, arg3: $MineshaftStructure$Type_);
        constructor(arg0: $CompoundTag_);
    }
    export class $OceanMonumentPieces$OceanMonumentEntryRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        constructor(arg0: $Direction_, arg1: $OceanMonumentPieces$RoomDefinition);
        constructor(arg0: $CompoundTag_);
    }
    export class $NetherFortressStructure extends $Structure {
        findGenerationPoint(arg0: $Structure$GenerationContext_): ($Structure$GenerationStub) | undefined;
        static FORTRESS_ENEMIES: $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        static CODEC: $MapCodec<$NetherFortressStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(arg0: $Structure$StructureSettings_);
    }
    export class $MineshaftPieces$MineShaftCorridor extends $MineshaftPieces$MineShaftPiece {
        static findCorridorSize(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_): $BoundingBox;
        constructor(arg0: number, arg1: $RandomSource, arg2: $BoundingBox, arg3: $Direction_, arg4: $MineshaftStructure$Type_);
        constructor(arg0: $CompoundTag_);
    }
    export class $OceanMonumentPieces {
    }
    export class $OceanMonumentPieces$FitDoubleYRoom implements $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $StrongholdPieces$Straight extends $StrongholdPieces$StrongholdPiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_, arg6: number): $StrongholdPieces$Straight;
        constructor(arg0: number, arg1: $RandomSource, arg2: $BoundingBox, arg3: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $StrongholdPieces$StrongholdPiece$SmallDoorType extends $Enum<$StrongholdPieces$StrongholdPiece$SmallDoorType> {
    }
    /**
     * Values that may be interpreted as {@link $StrongholdPieces$StrongholdPiece$SmallDoorType}.
     */
    export type $StrongholdPieces$StrongholdPiece$SmallDoorType_ = "opening" | "wood_door" | "grates" | "iron_door";
    export class $NetherFortressPieces$CastleCorridorTBalconyPiece extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: number, arg2: number, arg3: number, arg4: $Direction_, arg5: number): $NetherFortressPieces$CastleCorridorTBalconyPiece;
        constructor(arg0: number, arg1: $BoundingBox, arg2: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $NetherFortressPieces$MonsterThrone extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Direction_): $NetherFortressPieces$MonsterThrone;
        constructor(arg0: number, arg1: $BoundingBox, arg2: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $NetherFortressPieces$CastleSmallCorridorCrossingPiece extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: number, arg2: number, arg3: number, arg4: $Direction_, arg5: number): $NetherFortressPieces$CastleSmallCorridorCrossingPiece;
        constructor(arg0: number, arg1: $BoundingBox, arg2: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $WoodlandMansionPieces$FloorRoomCollection implements $RegistryHolder {
        setRegistries(registries: $RegistryAccess): void;
        getRegistries(): $RegistryAccess;
        get1x1(arg0: $RandomSource): string;
        get2x2(arg0: $RandomSource): string;
        get1x1Secret(arg0: $RandomSource): string;
        get1x2SideEntrance(arg0: $RandomSource, arg1: boolean): string;
        get1x2Secret(arg0: $RandomSource): string;
        get2x2Secret(arg0: $RandomSource): string;
        get1x2FrontEntrance(arg0: $RandomSource, arg1: boolean): string;
    }
    export class $IglooPieces {
        static addPieces(arg0: $StructureTemplateManager, arg1: $BlockPos_, arg2: $Rotation_, arg3: $StructurePieceAccessor, arg4: $RandomSource): void;
        static GENERATION_HEIGHT: number;
        constructor();
    }
    export class $EndCityPieces$SectionGenerator {
    }
    export interface $EndCityPieces$SectionGenerator {
    }
    export class $NetherFortressPieces$CastleSmallCorridorLeftTurnPiece extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_, arg6: number): $NetherFortressPieces$CastleSmallCorridorLeftTurnPiece;
        constructor(arg0: number, arg1: $RandomSource, arg2: $BoundingBox, arg3: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $StrongholdPieces$PrisonHall extends $StrongholdPieces$StrongholdPiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_, arg6: number): $StrongholdPieces$PrisonHall;
        constructor(arg0: number, arg1: $RandomSource, arg2: $BoundingBox, arg3: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $NetherFossilStructure extends $Structure {
        findGenerationPoint(arg0: $Structure$GenerationContext_): ($Structure$GenerationStub) | undefined;
        static CODEC: $MapCodec<$NetherFossilStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        height: $HeightProvider;
        constructor(arg0: $Structure$StructureSettings_, arg1: $HeightProvider);
    }
    export class $OceanMonumentPieces$OceanMonumentDoubleYZRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        constructor(arg0: $Direction_, arg1: $OceanMonumentPieces$RoomDefinition);
        constructor(arg0: $CompoundTag_);
    }
    export class $OceanMonumentPieces$OceanMonumentPiece extends $StructurePiece {
        constructor(arg0: $StructurePieceType_, arg1: $Direction_, arg2: number, arg3: $BoundingBox);
        constructor(arg0: $StructurePieceType_, arg1: $CompoundTag_);
    }
    export class $OceanMonumentPieces$OceanMonumentWingRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        constructor(arg0: $Direction_, arg1: $BoundingBox, arg2: number);
        constructor(arg0: $CompoundTag_);
    }
    export class $MineshaftPieces$MineShaftCrossing extends $MineshaftPieces$MineShaftPiece {
        static findCrossing(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_): $BoundingBox;
        constructor(arg0: number, arg1: $BoundingBox, arg2: $Direction_, arg3: $MineshaftStructure$Type_);
        constructor(arg0: $CompoundTag_);
    }
    export class $BuriedTreasurePieces$BuriedTreasurePiece extends $StructurePiece {
        constructor(arg0: $BlockPos_);
        constructor(arg0: $CompoundTag_);
    }
    export class $NetherFortressPieces$CastleSmallCorridorRightTurnPiece extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_, arg6: number): $NetherFortressPieces$CastleSmallCorridorRightTurnPiece;
        constructor(arg0: number, arg1: $RandomSource, arg2: $BoundingBox, arg3: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $StrongholdPieces$ChestCorridor extends $StrongholdPieces$StrongholdPiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_, arg6: number): $StrongholdPieces$ChestCorridor;
        constructor(arg0: number, arg1: $RandomSource, arg2: $BoundingBox, arg3: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $OceanMonumentPieces$FitDoubleYZRoom implements $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $NetherFortressPieces$StartPiece extends $NetherFortressPieces$BridgeCrossing {
        previousPiece: $NetherFortressPieces$PieceWeight;
        availableCastlePieces: $List<$NetherFortressPieces$PieceWeight>;
        availableBridgePieces: $List<$NetherFortressPieces$PieceWeight>;
        pendingChildren: $List<$StructurePiece>;
        constructor(arg0: $RandomSource, arg1: number, arg2: number);
        constructor(arg0: $CompoundTag_);
    }
    export class $OceanMonumentPieces$OceanMonumentSimpleTopRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        constructor(arg0: $Direction_, arg1: $OceanMonumentPieces$RoomDefinition);
        constructor(arg0: $CompoundTag_);
    }
    export class $StrongholdPieces$StairsDown extends $StrongholdPieces$StrongholdPiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_, arg6: number): $StrongholdPieces$StairsDown;
        constructor(arg0: $CompoundTag_);
        constructor(arg0: $StructurePieceType_, arg1: $CompoundTag_);
        constructor(arg0: number, arg1: $RandomSource, arg2: $BoundingBox, arg3: $Direction_);
        constructor(arg0: $StructurePieceType_, arg1: number, arg2: number, arg3: number, arg4: $Direction_);
    }
    export class $OceanMonumentPieces$FitDoubleXRoom implements $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $OceanMonumentPieces$MonumentRoomFitter {
    }
    export interface $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $NetherFortressPieces$CastleStalkRoom extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: number, arg2: number, arg3: number, arg4: $Direction_, arg5: number): $NetherFortressPieces$CastleStalkRoom;
        constructor(arg0: number, arg1: $BoundingBox, arg2: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $ShipwreckStructure extends $Structure {
        findGenerationPoint(arg0: $Structure$GenerationContext_): ($Structure$GenerationStub) | undefined;
        static CODEC: $MapCodec<$ShipwreckStructure>;
        isBeached: boolean;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(arg0: $Structure$StructureSettings_, arg1: boolean);
    }
    export class $NetherFortressPieces$CastleEntrance extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_, arg6: number): $NetherFortressPieces$CastleEntrance;
        constructor(arg0: number, arg1: $RandomSource, arg2: $BoundingBox, arg3: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $MineshaftPieces$MineShaftRoom extends $MineshaftPieces$MineShaftPiece {
        constructor(arg0: number, arg1: $RandomSource, arg2: number, arg3: number, arg4: $MineshaftStructure$Type_);
        constructor(arg0: $CompoundTag_);
    }
    export class $WoodlandMansionPieces$MansionGrid {
        get1x2RoomDirection(arg0: $WoodlandMansionPieces$SimpleGrid, arg1: number, arg2: number, arg3: number, arg4: number): $Direction;
        static isHouse(arg0: $WoodlandMansionPieces$SimpleGrid, arg1: number, arg2: number): boolean;
        isRoomId(arg0: $WoodlandMansionPieces$SimpleGrid, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        constructor(arg0: $RandomSource);
    }
    export class $WoodlandMansionPieces$MansionPiecePlacer implements $RegistryHolder {
        setRegistries(registries: $RegistryAccess): void;
        createMansion(arg0: $BlockPos_, arg1: $Rotation_, arg2: $List_<$WoodlandMansionPieces$WoodlandMansionPiece>, arg3: $WoodlandMansionPieces$MansionGrid): void;
        getRegistries(): $RegistryAccess;
        constructor(arg0: $StructureTemplateManager, arg1: $RandomSource);
    }
    export class $BuriedTreasureStructure extends $Structure {
        findGenerationPoint(arg0: $Structure$GenerationContext_): ($Structure$GenerationStub) | undefined;
        static CODEC: $MapCodec<$BuriedTreasureStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(arg0: $Structure$StructureSettings_);
    }
    export class $StrongholdPieces$StraightStairsDown extends $StrongholdPieces$StrongholdPiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_, arg6: number): $StrongholdPieces$StraightStairsDown;
        constructor(arg0: number, arg1: $RandomSource, arg2: $BoundingBox, arg3: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $WoodlandMansionPieces$SimpleGrid {
    }
    export class $NetherFortressPieces$CastleSmallCorridorPiece extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: number, arg2: number, arg3: number, arg4: $Direction_, arg5: number): $NetherFortressPieces$CastleSmallCorridorPiece;
        constructor(arg0: number, arg1: $BoundingBox, arg2: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $EndCityPieces$EndCityPiece extends $TemplateStructurePiece {
        constructor(arg0: $StructureTemplateManager, arg1: string, arg2: $BlockPos_, arg3: $Rotation_, arg4: boolean);
        constructor(arg0: $StructureTemplateManager, arg1: $CompoundTag_);
    }
    export class $OceanRuinPieces$OceanRuinPiece extends $TemplateStructurePiece {
        static create(arg0: $StructureTemplateManager, arg1: $CompoundTag_): $OceanRuinPieces$OceanRuinPiece;
        constructor(arg0: $StructureTemplateManager, arg1: $ResourceLocation_, arg2: $BlockPos_, arg3: $Rotation_, arg4: number, arg5: $OceanRuinStructure$Type_, arg6: boolean);
    }
    export class $OceanMonumentPieces$FitDoubleZRoom implements $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $StrongholdPieces$Turn extends $StrongholdPieces$StrongholdPiece {
        constructor(arg0: $StructurePieceType_, arg1: $CompoundTag_);
    }
    export class $WoodlandMansionPieces$SecondFloorRoomCollection extends $WoodlandMansionPieces$FloorRoomCollection implements $MansionRoomDuck {
        handler$cje001$lithostitched$use1x2SideTemplateList(random: $RandomSource, bl: boolean, cir: $CallbackInfoReturnable<any>): void;
        handler$cje001$lithostitched$use1x1SecretTemplateList(random: $RandomSource, cir: $CallbackInfoReturnable<any>): void;
        handler$cje001$lithostitched$use1x2FrontTemplateList(random: $RandomSource, bl: boolean, cir: $CallbackInfoReturnable<any>): void;
        handler$cje001$lithostitched$use2x2SecretTemplateList(random: $RandomSource, cir: $CallbackInfoReturnable<any>): void;
        handler$cje001$lithostitched$use1x2SecretTemplateList(random: $RandomSource, cir: $CallbackInfoReturnable<any>): void;
        handler$cje001$lithostitched$use1x1TemplateList(random: $RandomSource, cir: $CallbackInfoReturnable<any>): void;
        handler$cje001$lithostitched$use2x2TemplateList(random: $RandomSource, cir: $CallbackInfoReturnable<any>): void;
        lithostitched$floorNumber(): number;
        lithostitched$getRandom(name: string, random: $RandomSource): string;
        constructor();
    }
    export class $RuinedPortalPiece$VerticalPlacement extends $Enum<$RuinedPortalPiece$VerticalPlacement> implements $StringRepresentable {
        getName(): string;
        static values(): $RuinedPortalPiece$VerticalPlacement[];
        static valueOf(arg0: string): $RuinedPortalPiece$VerticalPlacement;
        static byName(arg0: string): $RuinedPortalPiece$VerticalPlacement;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static UNDERGROUND: $RuinedPortalPiece$VerticalPlacement;
        static ON_LAND_SURFACE: $RuinedPortalPiece$VerticalPlacement;
        static CODEC: $StringRepresentable$EnumCodec<$RuinedPortalPiece$VerticalPlacement>;
        static IN_MOUNTAIN: $RuinedPortalPiece$VerticalPlacement;
        static PARTLY_BURIED: $RuinedPortalPiece$VerticalPlacement;
        static IN_NETHER: $RuinedPortalPiece$VerticalPlacement;
        static ON_OCEAN_FLOOR: $RuinedPortalPiece$VerticalPlacement;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $RuinedPortalPiece$VerticalPlacement}.
     */
    export type $RuinedPortalPiece$VerticalPlacement_ = "on_land_surface" | "partly_buried" | "on_ocean_floor" | "in_mountain" | "underground" | "in_nether";
    export class $SwampHutPiece extends $ScatteredFeaturePiece {
        constructor(arg0: $RandomSource, arg1: number, arg2: number);
        constructor(arg0: $CompoundTag_);
    }
    export class $StrongholdPieces$RoomCrossing extends $StrongholdPieces$StrongholdPiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_, arg6: number): $StrongholdPieces$RoomCrossing;
        handler$boo001$supplementaries$supp$addSconces(arg0: $WorldGenLevel, arg1: $StructureManager, arg2: $ChunkGenerator, arg3: $RandomSource, arg4: $BoundingBox, arg5: $ChunkPos, arg6: $BlockPos_, arg7: $CallbackInfo): void;
        constructor(arg0: number, arg1: $RandomSource, arg2: $BoundingBox, arg3: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $StrongholdPieces$LeftTurn extends $StrongholdPieces$Turn {
        static createPiece(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_, arg6: number): $StrongholdPieces$LeftTurn;
        constructor(arg0: number, arg1: $RandomSource, arg2: $BoundingBox, arg3: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $ShipwreckPieces {
        static addRandomPiece(arg0: $StructureTemplateManager, arg1: $BlockPos_, arg2: $Rotation_, arg3: $StructurePieceAccessor, arg4: $RandomSource, arg5: boolean): $ShipwreckPieces$ShipwreckPiece;
        constructor();
    }
    export class $StrongholdPieces$Library extends $StrongholdPieces$StrongholdPiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_, arg6: number): $StrongholdPieces$Library;
        constructor(arg0: number, arg1: $RandomSource, arg2: $BoundingBox, arg3: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $NetherFossilPieces {
        static addPieces(arg0: $StructureTemplateManager, arg1: $StructurePieceAccessor, arg2: $RandomSource, arg3: $BlockPos_): void;
        constructor();
    }
    export class $OceanMonumentPieces$OceanMonumentDoubleXRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        constructor(arg0: $Direction_, arg1: $OceanMonumentPieces$RoomDefinition);
        constructor(arg0: $CompoundTag_);
    }
    export class $JungleTempleStructure extends $SinglePieceStructure {
        static CODEC: $MapCodec<$JungleTempleStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(arg0: $Structure$StructureSettings_);
    }
    export class $WoodlandMansionStructure extends $Structure {
        findGenerationPoint(arg0: $Structure$GenerationContext_): ($Structure$GenerationStub) | undefined;
        static CODEC: $MapCodec<$WoodlandMansionStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(arg0: $Structure$StructureSettings_);
    }
    export class $BuriedTreasurePieces {
        constructor();
    }
    export class $MineshaftPieces {
        static generateAndAddPiece(arg0: $StructurePiece, arg1: $StructurePieceAccessor, arg2: $RandomSource, arg3: number, arg4: number, arg5: number, arg6: $Direction_, arg7: number): $MineshaftPieces$MineShaftPiece;
        static MAGIC_START_Y: number;
        constructor();
    }
    export class $OceanMonumentPieces$OceanMonumentCoreRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        constructor(arg0: $Direction_, arg1: $OceanMonumentPieces$RoomDefinition);
        constructor(arg0: $CompoundTag_);
    }
    export class $SwampHutStructure extends $Structure {
        findGenerationPoint(arg0: $Structure$GenerationContext_): ($Structure$GenerationStub) | undefined;
        static CODEC: $MapCodec<$SwampHutStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(arg0: $Structure$StructureSettings_);
    }
    export class $NetherFortressPieces$PieceWeight {
    }
    export class $StrongholdPieces$RightTurn extends $StrongholdPieces$Turn {
        static createPiece(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_, arg6: number): $StrongholdPieces$RightTurn;
        constructor(arg0: number, arg1: $RandomSource, arg2: $BoundingBox, arg3: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $OceanRuinStructure$Type extends $Enum<$OceanRuinStructure$Type> implements $StringRepresentable {
        getName(): string;
        static values(): $OceanRuinStructure$Type[];
        static valueOf(arg0: string): $OceanRuinStructure$Type;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$OceanRuinStructure$Type>;
        static COLD: $OceanRuinStructure$Type;
        static WARM: $OceanRuinStructure$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $OceanRuinStructure$Type}.
     */
    export type $OceanRuinStructure$Type_ = "warm" | "cold";
    export class $DesertPyramidStructure extends $SinglePieceStructure {
        static CODEC: $MapCodec<$DesertPyramidStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(arg0: $Structure$StructureSettings_);
    }
    export class $StrongholdPieces {
        static resetPieces(): void;
        static MAGIC_START_Y: number;
        constructor();
    }
    export class $NetherFortressPieces$BridgeEndFiller extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_, arg6: number): $NetherFortressPieces$BridgeEndFiller;
        constructor(arg0: number, arg1: $RandomSource, arg2: $BoundingBox, arg3: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $ShipwreckPieces$ShipwreckPiece extends $TemplateStructurePiece {
        isTooBigToFitInWorldGenRegion(): boolean;
        adjustPositionHeight(arg0: number): void;
        calculateBeachedPosition(arg0: number, arg1: $RandomSource): number;
        constructor(arg0: $StructureTemplateManager, arg1: $ResourceLocation_, arg2: $BlockPos_, arg3: $Rotation_, arg4: boolean);
        constructor(arg0: $StructureTemplateManager, arg1: $CompoundTag_);
        get tooBigToFitInWorldGenRegion(): boolean;
    }
    export class $WoodlandMansionPieces$WoodlandMansionPiece extends $TemplateStructurePiece {
        constructor(arg0: $StructureTemplateManager, arg1: $CompoundTag_);
        constructor(arg0: $StructureTemplateManager, arg1: string, arg2: $BlockPos_, arg3: $Rotation_, arg4: $Mirror_);
        constructor(arg0: $StructureTemplateManager, arg1: string, arg2: $BlockPos_, arg3: $Rotation_);
    }
    export class $WoodlandMansionPieces$FirstFloorRoomCollection extends $WoodlandMansionPieces$FloorRoomCollection implements $MansionRoomDuck {
        handler$cjd000$lithostitched$use1x2SideTemplateList(random: $RandomSource, bl: boolean, cir: $CallbackInfoReturnable<any>): void;
        handler$cjd000$lithostitched$use1x2FrontTemplateList(random: $RandomSource, bl: boolean, cir: $CallbackInfoReturnable<any>): void;
        handler$cjd000$lithostitched$use1x1SecretTemplateList(random: $RandomSource, cir: $CallbackInfoReturnable<any>): void;
        handler$cjd000$lithostitched$use2x2SecretTemplateList(random: $RandomSource, cir: $CallbackInfoReturnable<any>): void;
        handler$cjd000$lithostitched$use1x2SecretTemplateList(random: $RandomSource, cir: $CallbackInfoReturnable<any>): void;
        handler$cjd000$lithostitched$use2x2TemplateList(random: $RandomSource, cir: $CallbackInfoReturnable<any>): void;
        handler$cjd000$lithostitched$use1x1TemplateList(random: $RandomSource, cir: $CallbackInfoReturnable<any>): void;
        lithostitched$floorNumber(): number;
        lithostitched$getRandom(name: string, random: $RandomSource): string;
        constructor();
    }
    export class $NetherFossilPieces$NetherFossilPiece extends $TemplateStructurePiece {
        constructor(arg0: $StructureTemplateManager, arg1: $ResourceLocation_, arg2: $BlockPos_, arg3: $Rotation_);
        constructor(arg0: $StructureTemplateManager, arg1: $CompoundTag_);
    }
    export class $NetherFortressPieces$CastleCorridorStairsPiece extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: number, arg2: number, arg3: number, arg4: $Direction_, arg5: number): $NetherFortressPieces$CastleCorridorStairsPiece;
        constructor(arg0: number, arg1: $BoundingBox, arg2: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $OceanMonumentStructure extends $Structure {
        findGenerationPoint(arg0: $Structure$GenerationContext_): ($Structure$GenerationStub) | undefined;
        static regeneratePiecesAfterLoad(arg0: $ChunkPos, arg1: number, arg2: $PiecesContainer_): $PiecesContainer;
        static CODEC: $MapCodec<$OceanMonumentStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(arg0: $Structure$StructureSettings_);
    }
    export class $OceanMonumentPieces$OceanMonumentPenthouse extends $OceanMonumentPieces$OceanMonumentPiece {
        constructor(arg0: $Direction_, arg1: $BoundingBox);
        constructor(arg0: $CompoundTag_);
    }
    export class $StrongholdPieces$PortalRoom extends $StrongholdPieces$StrongholdPiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: number, arg2: number, arg3: number, arg4: $Direction_, arg5: number): $StrongholdPieces$PortalRoom;
        constructor(arg0: number, arg1: $BoundingBox, arg2: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $NetherFortressPieces$StairsRoom extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Direction_): $NetherFortressPieces$StairsRoom;
        constructor(arg0: number, arg1: $BoundingBox, arg2: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $StrongholdPieces$PieceWeight {
    }
    export class $OceanMonumentPieces$OceanMonumentSimpleRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        constructor(arg0: $Direction_, arg1: $OceanMonumentPieces$RoomDefinition, arg2: $RandomSource);
        constructor(arg0: $CompoundTag_);
    }
    export class $StrongholdPieces$StrongholdPiece extends $StructurePiece {
        constructor(arg0: $StructurePieceType_, arg1: $CompoundTag_);
    }
    export class $OceanMonumentPieces$OceanMonumentDoubleYRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        constructor(arg0: $Direction_, arg1: $OceanMonumentPieces$RoomDefinition);
        constructor(arg0: $CompoundTag_);
    }
    export class $StrongholdPieces$FiveCrossing extends $StrongholdPieces$StrongholdPiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: $RandomSource, arg2: number, arg3: number, arg4: number, arg5: $Direction_, arg6: number): $StrongholdPieces$FiveCrossing;
        handler$bon000$supplementaries$supp$addSconces(arg0: $WorldGenLevel, arg1: $StructureManager, arg2: $ChunkGenerator, arg3: $RandomSource, arg4: $BoundingBox, arg5: $ChunkPos, arg6: $BlockPos_, arg7: $CallbackInfo): void;
        constructor(arg0: number, arg1: $RandomSource, arg2: $BoundingBox, arg3: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $StrongholdPieces$SmoothStoneSelector extends $StructurePiece$BlockSelector {
    }
    export class $WoodlandMansionPieces$ThirdFloorRoomCollection extends $WoodlandMansionPieces$SecondFloorRoomCollection implements $MansionRoomDuck {
        constructor();
    }
    export class $JungleTemplePiece$MossStoneSelector extends $StructurePiece$BlockSelector {
    }
    export class $NetherFortressPieces$RoomCrossing extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(arg0: $StructurePieceAccessor, arg1: number, arg2: number, arg3: number, arg4: $Direction_, arg5: number): $NetherFortressPieces$RoomCrossing;
        constructor(arg0: number, arg1: $BoundingBox, arg2: $Direction_);
        constructor(arg0: $CompoundTag_);
    }
    export class $DesertPyramidPiece extends $ScatteredFeaturePiece {
        getRandomCollapsedRoofPos(): $BlockPos;
        getPotentialSuspiciousSandWorldPositions(): $List<$BlockPos>;
        static WIDTH: number;
        static DEPTH: number;
        constructor(arg0: $RandomSource, arg1: number, arg2: number);
        constructor(arg0: $CompoundTag_);
        get randomCollapsedRoofPos(): $BlockPos;
        get potentialSuspiciousSandWorldPositions(): $List<$BlockPos>;
    }
    export class $RuinedPortalPiece extends $TemplateStructurePiece {
        static getHeightMapType(arg0: $RuinedPortalPiece$VerticalPlacement_): $Heightmap$Types;
        constructor(arg0: $StructureTemplateManager, arg1: $BlockPos_, arg2: $RuinedPortalPiece$VerticalPlacement_, arg3: $RuinedPortalPiece$Properties, arg4: $ResourceLocation_, arg5: $StructureTemplate, arg6: $Rotation_, arg7: $Mirror_, arg8: $BlockPos_);
        constructor(arg0: $StructureTemplateManager, arg1: $CompoundTag_);
    }
    export class $EndCityStructure extends $Structure {
        findGenerationPoint(arg0: $Structure$GenerationContext_): ($Structure$GenerationStub) | undefined;
        static CODEC: $MapCodec<$EndCityStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(arg0: $Structure$StructureSettings_);
    }
}
