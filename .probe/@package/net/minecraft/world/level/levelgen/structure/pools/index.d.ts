import { $StructurePoolAccess } from "@package/dev/worldgen/lithostitched/duck";
import { $MapCodec_, $DynamicOps, $Codec, $Dynamic, $MapCodec } from "@package/com/mojang/serialization";
import { $Pair, $Either } from "@package/com/mojang/datafixers/util";
import { $StructureTemplatePoolAccessor, $SinglePoolElementAccessor } from "@package/dev/worldgen/lithostitched/mixin/common";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $PoolAliasLookup_ } from "@package/net/minecraft/world/level/levelgen/structure/pools/alias";
import { $List, $List_ } from "@package/java/util";
import { $StringRepresentable, $RandomSource, $StringRepresentable$EnumCodec } from "@package/net/minecraft/util";
import { $Function_, $Function } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $Holder_, $Holder, $BlockPos_, $Vec3i } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $LithostitchedTemplates } from "@package/dev/worldgen/lithostitched/worldgen/structure";
import { $Enum, $Record } from "@package/java/lang";
import { $PoolElementStructurePiece, $BoundingBox, $Structure$GenerationStub, $Structure$GenerationContext_ } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Heightmap$Types_, $RandomState } from "@package/net/minecraft/world/level/levelgen";
import { $LevelAccessor, $WorldGenLevel, $LevelHeightAccessor, $StructureManager } from "@package/net/minecraft/world/level";
import { $AccessorSinglePoolElement } from "@package/org/violetmoon/quark/mixin/mixins/accessor";
import { $StructureTemplate$StructureBlockInfo, $StructureProcessorList, $StructureTemplate$StructureBlockInfo_, $StructureProcessor, $LiquidSettings_, $StructureTemplateManager, $StructureTemplate } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $PlacedFeature } from "@package/net/minecraft/world/level/levelgen/placement";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ListPoolElementAccessor, $SinglePoolElementAccessor as $SinglePoolElementAccessor$1, $JigsawJunctionAccessor, $StructurePoolAccessor } from "@package/com/craisinlord/integrated_api/mixins/structures";
import { $MutableObject } from "@package/org/apache/commons/lang3/mutable";
import { $Rotation_ } from "@package/net/minecraft/world/level/block";
export * as alias from "@package/net/minecraft/world/level/levelgen/structure/pools/alias";

declare module "@package/net/minecraft/world/level/levelgen/structure/pools" {
    export class $StructurePoolElement {
        static list(arg0: $List_<$Function_<$StructureTemplatePool$Projection, $StructurePoolElement>>): $Function<$StructureTemplatePool$Projection, $ListPoolElement>;
        static single(arg0: string): $Function<$StructureTemplatePool$Projection, $SinglePoolElement>;
        static single(arg0: string, arg1: $Holder_<$StructureProcessorList>): $Function<$StructureTemplatePool$Projection, $SinglePoolElement>;
        static single(arg0: string, arg1: $LiquidSettings_): $Function<$StructureTemplatePool$Projection, $SinglePoolElement>;
        static single(arg0: string, arg1: $Holder_<$StructureProcessorList>, arg2: $LiquidSettings_): $Function<$StructureTemplatePool$Projection, $SinglePoolElement>;
        static empty(): $Function<$StructureTemplatePool$Projection, $EmptyPoolElement>;
        static feature(arg0: $Holder_<$PlacedFeature>): $Function<$StructureTemplatePool$Projection, $FeaturePoolElement>;
        getType(): $StructurePoolElementType<never>;
        getSize(arg0: $StructureTemplateManager, arg1: $Rotation_): $Vec3i;
        static legacy(arg0: string): $Function<$StructureTemplatePool$Projection, $LegacySinglePoolElement>;
        static legacy(arg0: string, arg1: $Holder_<$StructureProcessorList>): $Function<$StructureTemplatePool$Projection, $LegacySinglePoolElement>;
        place(arg0: $StructureTemplateManager, arg1: $WorldGenLevel, arg2: $StructureManager, arg3: $ChunkGenerator, arg4: $BlockPos_, arg5: $BlockPos_, arg6: $Rotation_, arg7: $BoundingBox, arg8: $RandomSource, arg9: $LiquidSettings_, arg10: boolean): boolean;
        getGroundLevelDelta(): number;
        getShuffledJigsawBlocks(arg0: $StructureTemplateManager, arg1: $BlockPos_, arg2: $Rotation_, arg3: $RandomSource): $List<$StructureTemplate$StructureBlockInfo>;
        getBoundingBox(arg0: $StructureTemplateManager, arg1: $BlockPos_, arg2: $Rotation_): $BoundingBox;
        handleDataMarker(arg0: $LevelAccessor, arg1: $StructureTemplate$StructureBlockInfo_, arg2: $BlockPos_, arg3: $Rotation_, arg4: $RandomSource, arg5: $BoundingBox): void;
        setProjection(arg0: $StructureTemplatePool$Projection_): $StructurePoolElement;
        getProjection(): $StructureTemplatePool$Projection;
        static CODEC: $Codec<$StructurePoolElement>;
        get type(): $StructurePoolElementType<never>;
        get groundLevelDelta(): number;
    }
    export class $JigsawPlacement$Placer {
        handler$gpe000$moonlight$ml$AddSpawnBoxPieces(arg0: $PoolElementStructurePiece, arg1: $MutableObject<any>, arg2: number, arg3: boolean, arg4: $LevelHeightAccessor, arg5: $RandomState, arg6: $PoolAliasLookup_, arg7: $LiquidSettings_, arg8: $CallbackInfo): void;
    }
    export class $JigsawPlacement$PieceState extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $JigsawPlacement$PieceState}.
     */
    export type $JigsawPlacement$PieceState_ = { free?: $MutableObject<$VoxelShape>, depth?: number, piece?: $PoolElementStructurePiece,  } | [free?: $MutableObject<$VoxelShape>, depth?: number, piece?: $PoolElementStructurePiece, ];
    export class $JigsawPlacement {
        static addPieces(arg0: $Structure$GenerationContext_, arg1: $Holder_<$StructureTemplatePool>, arg2: ($ResourceLocation_) | undefined, arg3: number, arg4: $BlockPos_, arg5: boolean, arg6: ($Heightmap$Types_) | undefined, arg7: number, arg8: $PoolAliasLookup_, arg9: $DimensionPadding_, arg10: $LiquidSettings_): ($Structure$GenerationStub) | undefined;
        static generateJigsaw(arg0: $ServerLevel, arg1: $Holder_<$StructureTemplatePool>, arg2: $ResourceLocation_, arg3: number, arg4: $BlockPos_, arg5: boolean): boolean;
        constructor();
    }
    export class $SinglePoolElement extends $StructurePoolElement implements $SinglePoolElementAccessor, $SinglePoolElementAccessor$1, $AccessorSinglePoolElement {
        getTemplate(arg0: $StructureTemplateManager): $StructureTemplate;
        getDataMarkers(arg0: $StructureTemplateManager, arg1: $BlockPos_, arg2: $Rotation_, arg3: boolean): $List<$StructureTemplate$StructureBlockInfo>;
        getTemplate(): $Either<$ResourceLocation, $StructureTemplate>;
        getProcessors(): $Holder<$StructureProcessorList>;
        integratedapi_getTemplate(): $Either<$ResourceLocation, $StructureTemplate>;
        integratedapi_getProcessors(): $Holder<$StructureProcessorList>;
        setProcessors(holder: $Holder_<$StructureProcessorList>): void;
        callGetTemplate(arg0: $StructureTemplateManager): $StructureTemplate;
        static CODEC: $MapCodec<$SinglePoolElement>;
    }
    export class $ListPoolElement extends $StructurePoolElement implements $ListPoolElementAccessor {
        integratedapi_getElements(): $List<$StructurePoolElement>;
        static CODEC: $MapCodec<$ListPoolElement>;
        elements: $List<$StructurePoolElement>;
        constructor(arg0: $List_<$StructurePoolElement>, arg1: $StructureTemplatePool$Projection_);
    }
    export interface $StructureTemplatePool extends RegistryMarked<RegistryTypes.WorldgenTemplatePoolTag, RegistryTypes.WorldgenTemplatePool> {}
    export class $EmptyPoolElement extends $StructurePoolElement {
        static CODEC: $MapCodec<$EmptyPoolElement>;
        static INSTANCE: $EmptyPoolElement;
    }
    export class $FeaturePoolElement extends $StructurePoolElement {
        static CODEC: $MapCodec<$FeaturePoolElement>;
    }
    export class $StructurePoolElementType<P extends $StructurePoolElement> {
        static register<P extends $StructurePoolElement>(arg0: string, arg1: $MapCodec_<P>): $StructurePoolElementType<P>;
        static SINGLE: $StructurePoolElementType<$SinglePoolElement>;
        static LEGACY: $StructurePoolElementType<$LegacySinglePoolElement>;
        static FEATURE: $StructurePoolElementType<$FeaturePoolElement>;
        static LIST: $StructurePoolElementType<$ListPoolElement>;
        static EMPTY: $StructurePoolElementType<$EmptyPoolElement>;
    }
    export interface $StructurePoolElementType<P extends $StructurePoolElement> {
        codec(): $MapCodec<P>;
    }
    /**
     * Values that may be interpreted as {@link $StructurePoolElementType}.
     */
    export type $StructurePoolElementType_<P> = RegistryTypes.WorldgenStructurePoolElement | (() => $MapCodec_<P>);
    export class $DimensionPadding extends $Record {
        top(): number;
        bottom(): number;
        hasEqualTopAndBottom(): boolean;
        static ZERO: $DimensionPadding;
        static CODEC: $Codec<$DimensionPadding>;
        constructor(arg0: number);
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $DimensionPadding}.
     */
    export type $DimensionPadding_ = { bottom?: number, top?: number,  } | [bottom?: number, top?: number, ];
    export class $LegacySinglePoolElement extends $SinglePoolElement {
        static CODEC: $MapCodec<$LegacySinglePoolElement>;
    }
    export interface $StructurePoolElementType extends RegistryMarked<RegistryTypes.WorldgenStructurePoolElementTag, RegistryTypes.WorldgenStructurePoolElement> {}
    export class $JigsawJunction implements $JigsawJunctionAccessor {
        static deserialize<T>(arg0: $Dynamic<T>): $JigsawJunction;
        serialize<T>(arg0: $DynamicOps<T>): $Dynamic<T>;
        getDeltaY(): number;
        getSourceX(): number;
        getSourceZ(): number;
        getSourceGroundY(): number;
        getDestProjection(): $StructureTemplatePool$Projection;
        setSourceGroundY(arg0: number): void;
        setSourceX(arg0: number): void;
        setSourceZ(arg0: number): void;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $StructureTemplatePool$Projection_);
        get deltaY(): number;
        get destProjection(): $StructureTemplatePool$Projection;
    }
    export class $StructureTemplatePool implements $StructureTemplatePoolAccessor, $StructurePoolAccess, $StructurePoolAccessor {
        size(): number;
        getMaxSize(arg0: $StructureTemplateManager): number;
        getLithostitchedTemplates(): $LithostitchedTemplates;
        compileRawTemplates(): void;
        getShuffledTemplates(arg0: $RandomSource): $List<$StructurePoolElement>;
        getRandomTemplate(arg0: $RandomSource): $StructurePoolElement;
        getFallback(): $Holder<$StructureTemplatePool>;
        static getCODEC_REFERENCE$integrated_api_$md$70d283$1(): $MutableObject<any>;
        integratedapi_getRawTemplates(): $List<$Pair<$StructurePoolElement, number>>;
        integratedapi_setRawTemplates(arg0: $List_<$Pair<$StructurePoolElement, number>>): void;
        integratedapi_setTemplates(arg0: $ObjectArrayList<$StructurePoolElement>): void;
        getVanillaTemplates(): $ObjectArrayList<$StructurePoolElement>;
        setVanillaTemplates(objectArrayList: $ObjectArrayList<$StructurePoolElement>): void;
        integratedapi_getTemplates(): $ObjectArrayList<$StructurePoolElement>;
        setRawTemplates(list: $List_<$Pair<$StructurePoolElement, number>>): void;
        getRawTemplates(): $List<$Pair<$StructurePoolElement, number>>;
        static CODEC: $Codec<$Holder<$StructureTemplatePool>>;
        rawTemplates: $List<$Pair<$StructurePoolElement, number>>;
        templates: $ObjectArrayList<$StructurePoolElement>;
        static DIRECT_CODEC: $Codec<$StructureTemplatePool>;
        constructor(arg0: $Holder_<$StructureTemplatePool>, arg1: $List_<$Pair<$StructurePoolElement, number>>);
        constructor(arg0: $Holder_<$StructureTemplatePool>, arg1: $List_<$Pair<$Function_<$StructureTemplatePool$Projection, $StructurePoolElement>, number>>, arg2: $StructureTemplatePool$Projection_);
        get lithostitchedTemplates(): $LithostitchedTemplates;
        get fallback(): $Holder<$StructureTemplatePool>;
        static get CODEC_REFERENCE$integrated_api_$md$70d283$1(): $MutableObject<any>;
    }
    /**
     * Values that may be interpreted as {@link $StructureTemplatePool}.
     */
    export type $StructureTemplatePool_ = RegistryTypes.WorldgenTemplatePool;
    export class $StructureTemplatePool$Projection extends $Enum<$StructureTemplatePool$Projection> implements $StringRepresentable {
        getName(): string;
        static values(): $StructureTemplatePool$Projection[];
        static valueOf(arg0: string): $StructureTemplatePool$Projection;
        static byName(arg0: string): $StructureTemplatePool$Projection;
        getProcessors(): $ImmutableList<$StructureProcessor>;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $StringRepresentable$EnumCodec<$StructureTemplatePool$Projection>;
        static TERRAIN_MATCHING: $StructureTemplatePool$Projection;
        static RIGID: $StructureTemplatePool$Projection;
        get processors(): $ImmutableList<$StructureProcessor>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $StructureTemplatePool$Projection}.
     */
    export type $StructureTemplatePool$Projection_ = "terrain_matching" | "rigid";
}
