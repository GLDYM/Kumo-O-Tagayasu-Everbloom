import { $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $ResourceLocationHelper, $ModelBakerAddon } from "@package/com/tristankechlo/crop_marker/util";
import { $BakedModelManagerAccessor } from "@package/dev/emi/emi/mixin/accessor";
import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $BakedModelMixin } from "@package/net/fabricmc/fabric/mixin/renderer/client";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ResourceManager, $PreparableReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $List, $Map_, $List_, $Collection, $Comparator, $Map, $BitSet } from "@package/java/util";
import { $BlockModelShaper } from "@package/net/minecraft/client/renderer/block";
import { $RandomSource } from "@package/net/minecraft/util";
import { $SimpleBakedModelAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/platform/neoforge";
import { $BiConsumer_, $Supplier_, $Function_, $Predicate_, $Function } from "@package/java/util/function";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $ChunkRenderTypeSet, $RenderTypeGroup_ } from "@package/net/neoforged/neoforge/client";
import { $Object2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $IBakedModelExtension, $ModelStateExtension, $IModelBakerExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $StateDefinition, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $WeightedEntry$Wrapper_ } from "@package/net/minecraft/util/random";
import { $TextureAtlasSprite, $SpriteLoader$Preparations_, $TextureManager, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $Record, $RuntimeException, $AutoCloseable, $Object } from "@package/java/lang";
import { $BlockAndTintGetter } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $BlockModel, $ItemModelGenerator, $ItemOverrides, $BakedQuad, $ItemTransforms } from "@package/net/minecraft/client/renderer/block/model";
import { $ModelBakeryAccessor } from "@package/de/mrjulsen/mcdragonlib/mixin";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $IDynamicBakedModel } from "@package/net/neoforged/neoforge/client/model";
import { $ModelBakeryAccessor as $ModelBakeryAccessor$1 } from "@package/umpaz/brewinandchewin/common/mixin/client";
import { $ResourceLocation_, $ResourceLocation, $FileToIdConverter } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $RenderContext } from "@package/net/fabricmc/fabric/api/renderer/v1/render";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Transformation, $OctahedralGroup } from "@package/com/mojang/math";
import { $FabricBakedModel } from "@package/net/fabricmc/fabric/api/renderer/v1/model";
import { $AccessorModelManager } from "@package/org/violetmoon/quark/mixin/mixins/client/accessor";

declare module "@package/net/minecraft/client/resources/model" {
    export class $BakedModel {
    }
    export interface $BakedModel extends $IBakedModelExtension, $FabricBakedModel, $BakedModelMixin {
        useAmbientOcclusion(): boolean;
        isGui3d(): boolean;
        getOverrides(): $ItemOverrides;
        /**
         * @deprecated
         */
        getParticleIcon(): $TextureAtlasSprite;
        usesBlockLight(): boolean;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        isCustomRenderer(): boolean;
        /**
         * @deprecated
         */
        getTransforms(): $ItemTransforms;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        /**
         * @deprecated
         */
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource): $List<$BakedQuad>;
        get gui3d(): boolean;
        get overrides(): $ItemOverrides;
        get particleIcon(): $TextureAtlasSprite;
        get customRenderer(): boolean;
        get transforms(): $ItemTransforms;
    }
    export class $ModelBakery implements $ModelBakeryAccessor$1, $ModelBakeryAccessor {
        getModel(arg0: $ResourceLocation_): $UnbakedModel;
        localvar$dml000$puzzleslib$init(blockStateModelLoader: $BlockStateModelLoader): $BlockStateModelLoader;
        bakeModels(arg0: $ModelBakery$TextureGetter_): void;
        getBakedTopLevelModels(): $Map<$ModelResourceLocation, $BakedModel>;
        getModelGroups(): $Object2IntMap<$BlockState>;
        dragonlib$getModel(arg0: $ResourceLocation_): $UnbakedModel;
        brewinandchewin$getModel(arg0: $ResourceLocation_): $UnbakedModel;
        static BLOCK_ENTITY_MARKER: $BlockModel;
        static ITEM_MODEL_GENERATOR: $ItemModelGenerator;
        topLevelModels: $Map<$ModelResourceLocation, $UnbakedModel>;
        static NO_PATTERN_SHIELD: $Material;
        static DESTROY_STAGE_COUNT: number;
        static DESTROY_STAGES: $List<$ResourceLocation>;
        static BANNER_BASE: $Material;
        static GENERATION_MARKER: $BlockModel;
        unbakedCache: $Map<$ResourceLocation, $UnbakedModel>;
        static BREAKING_LOCATIONS: $List<$ResourceLocation>;
        static MISSING_MODEL_LOCATION: $ResourceLocation;
        static DESTROY_TYPES: $List<$RenderType>;
        static MISSING_MODEL_MESH: string;
        static FIRE_1: $Material;
        static LAVA_FLOW: $Material;
        bakedCache: $Map<$ModelBakery$BakedCacheKey, $BakedModel>;
        static SHIELD_BASE: $Material;
        static FIRE_0: $Material;
        static WATER_FLOW: $Material;
        static MODEL_LISTER: $FileToIdConverter;
        static WATER_OVERLAY: $Material;
        static MISSING_MODEL_VARIANT: $ModelResourceLocation;
        constructor(arg0: $BlockColors, arg1: $ProfilerFiller, arg2: $Map_<$ResourceLocation_, $BlockModel>, arg3: $Map_<$ResourceLocation_, $List_<$BlockStateModelLoader$LoadedJson_>>);
        get bakedTopLevelModels(): $Map<$ModelResourceLocation, $BakedModel>;
        get modelGroups(): $Object2IntMap<$BlockState>;
    }
    export class $UnbakedModel {
    }
    export interface $UnbakedModel {
        getDependencies(): $Collection<$ResourceLocation>;
        resolveParents(arg0: $Function_<$ResourceLocation, $UnbakedModel>): void;
        bake(arg0: $ModelBaker, arg1: $Function_<$Material, $TextureAtlasSprite>, arg2: $ModelState): $BakedModel;
        get dependencies(): $Collection<$ResourceLocation>;
    }
    export class $BuiltInModel implements $BakedModel {
        useAmbientOcclusion(): boolean;
        isGui3d(): boolean;
        getOverrides(): $ItemOverrides;
        getParticleIcon(): $TextureAtlasSprite;
        usesBlockLight(): boolean;
        isCustomRenderer(): boolean;
        getTransforms(): $ItemTransforms;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource): $List<$BakedQuad>;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        getRenderTypes(arg0: $BlockState_, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        getRenderTypes(arg0: $ItemStack_, arg1: boolean): $List<$RenderType>;
        getRenderPasses(arg0: $ItemStack_, arg1: boolean): $List<$BakedModel>;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<$BakedQuad>;
        getModelData(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ModelData): $ModelData;
        isVanillaAdapter(): boolean;
        constructor(arg0: $ItemTransforms, arg1: $ItemOverrides, arg2: $TextureAtlasSprite, arg3: boolean);
        get gui3d(): boolean;
        get overrides(): $ItemOverrides;
        get customRenderer(): boolean;
        get transforms(): $ItemTransforms;
        get vanillaAdapter(): boolean;
    }
    export class $ModelState {
    }
    export interface $ModelState extends $ModelStateExtension {
        getRotation(): $Transformation;
        isUvLocked(): boolean;
        get rotation(): $Transformation;
        get uvLocked(): boolean;
    }
    export class $ModelManager implements $PreparableReloadListener, $AutoCloseable, $BakedModelManagerAccessor, $AccessorModelManager {
        close(): void;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        getBlockModelShaper(): $BlockModelShaper;
        getAtlas(arg0: $ResourceLocation_): $TextureAtlas;
        getModel(arg0: $ModelResourceLocation_): $BakedModel;
        getMissingModel(): $BakedModel;
        requiresRender(arg0: $BlockState_, arg1: $BlockState_): boolean;
        updateMaxMipLevel(arg0: number): void;
        getModelBakery(): $ModelBakery;
        getName(): string;
        getModels(): $Map<$ModelResourceLocation, $BakedModel>;
        getBakedRegistry(): $Map<$ModelResourceLocation, $BakedModel>;
        bakedRegistry: $Map<$ModelResourceLocation, $BakedModel>;
        static VANILLA_ATLASES: $Map<$ResourceLocation, $ResourceLocation>;
        constructor(arg0: $TextureManager, arg1: $BlockColors, arg2: number);
        get blockModelShaper(): $BlockModelShaper;
        get missingModel(): $BakedModel;
        get modelBakery(): $ModelBakery;
        get name(): string;
        get models(): $Map<$ModelResourceLocation, $BakedModel>;
    }
    export class $WeightedBakedModel implements $BakedModel, $IDynamicBakedModel, $FabricBakedModel {
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        useAmbientOcclusion(): boolean;
        isGui3d(): boolean;
        getOverrides(): $ItemOverrides;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        getParticleIcon(): $TextureAtlasSprite;
        usesBlockLight(): boolean;
        isVanillaAdapter(): boolean;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        isCustomRenderer(): boolean;
        getTransforms(): $ItemTransforms;
        getRenderTypes(arg0: $BlockState_, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<any>;
        getModelData(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ModelData): $ModelData;
        getRenderTypes(arg0: $ItemStack_, arg1: boolean): $List<$RenderType>;
        getRenderPasses(arg0: $ItemStack_, arg1: boolean): $List<$BakedModel>;
        constructor(arg0: $List_<$WeightedEntry$Wrapper_<$BakedModel>>);
        get gui3d(): boolean;
        get overrides(): $ItemOverrides;
        get vanillaAdapter(): boolean;
        get customRenderer(): boolean;
        get transforms(): $ItemTransforms;
    }
    export class $WeightedBakedModel$Builder {
        add(arg0: $BakedModel, arg1: number): $WeightedBakedModel$Builder;
        build(): $BakedModel;
        constructor();
    }
    export class $ModelBaker {
    }
    export interface $ModelBaker extends $IModelBakerExtension {
        getModel(arg0: $ResourceLocation_): $UnbakedModel;
        /**
         * @deprecated
         */
        bake(arg0: $ResourceLocation_, arg1: $ModelState): $BakedModel;
    }
    export class $SimpleBakedModel$Builder {
        /**
         * @deprecated
         */
        build(): $BakedModel;
        build(arg0: $RenderTypeGroup_): $BakedModel;
        item(): $SimpleBakedModel$Builder;
        particle(arg0: $TextureAtlasSprite): $SimpleBakedModel$Builder;
        addUnculledFace(arg0: $BakedQuad): $SimpleBakedModel$Builder;
        addCulledFace(arg0: $Direction_, arg1: $BakedQuad): $SimpleBakedModel$Builder;
        handler$iab000$ferritecore$deduplicate(arg0: $BakedQuad, arg1: $CallbackInfoReturnable<any>): void;
        handler$iab000$ferritecore$deduplicate(arg0: $Direction_, arg1: $BakedQuad, arg2: $CallbackInfoReturnable<any>): void;
        constructor(arg0: $BlockModel, arg1: $ItemOverrides, arg2: boolean);
        constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: $ItemTransforms, arg4: $ItemOverrides);
    }
    export class $MultiPartBakedModel$Builder {
        add(arg0: $Predicate_<$BlockState>, arg1: $BakedModel): void;
        build(): $BakedModel;
        redirect$hpo000$ferritecore$build(arg0: $List_<any>): $MultiPartBakedModel;
        constructor();
    }
    export class $Material {
        buffer(arg0: $MultiBufferSource_, arg1: $Function_<$ResourceLocation, $RenderType>): $VertexConsumer;
        buffer(arg0: $MultiBufferSource_, arg1: $Function_<$ResourceLocation, $RenderType>, arg2: boolean): $VertexConsumer;
        sprite(): $TextureAtlasSprite;
        texture(): $ResourceLocation;
        atlasLocation(): $ResourceLocation;
        renderType(arg0: $Function_<$ResourceLocation, $RenderType>): $RenderType;
        static COMPARATOR: $Comparator<$Material>;
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_);
    }
    export class $BlockModelRotation extends $Enum<$BlockModelRotation> implements $ModelState {
        static values(): $BlockModelRotation[];
        static valueOf(arg0: string): $BlockModelRotation;
        static by(arg0: number, arg1: number): $BlockModelRotation;
        getRotation(): $Transformation;
        actualRotation(): $OctahedralGroup;
        isUvLocked(): boolean;
        mayApplyArbitraryRotation(): boolean;
        static X90_Y0: $BlockModelRotation;
        static X0_Y180: $BlockModelRotation;
        static X0_Y270: $BlockModelRotation;
        static X180_Y270: $BlockModelRotation;
        static X180_Y0: $BlockModelRotation;
        static X270_Y90: $BlockModelRotation;
        static X0_Y0: $BlockModelRotation;
        static X0_Y90: $BlockModelRotation;
        static X90_Y270: $BlockModelRotation;
        static X90_Y180: $BlockModelRotation;
        static X180_Y180: $BlockModelRotation;
        static X270_Y0: $BlockModelRotation;
        static X270_Y180: $BlockModelRotation;
        static X90_Y90: $BlockModelRotation;
        static X270_Y270: $BlockModelRotation;
        static X180_Y90: $BlockModelRotation;
        get rotation(): $Transformation;
        get uvLocked(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockModelRotation}.
     */
    export type $BlockModelRotation_ = "x0_y0" | "x0_y90" | "x0_y180" | "x0_y270" | "x90_y0" | "x90_y90" | "x90_y180" | "x90_y270" | "x180_y0" | "x180_y90" | "x180_y180" | "x180_y270" | "x270_y0" | "x270_y90" | "x270_y180" | "x270_y270";
    export class $AtlasSet$StitchResult {
        missing(): $TextureAtlasSprite;
        getSprite(arg0: $ResourceLocation_): $TextureAtlasSprite;
        upload(): void;
        readyForUpload(): $CompletableFuture<void>;
        constructor(arg0: $TextureAtlas, arg1: $SpriteLoader$Preparations_);
    }
    export class $BlockStateModelLoader$LoadedJson extends $Record {
        data(): $JsonElement;
        source(): string;
        constructor(arg0: string, arg1: $JsonElement_);
    }
    /**
     * Values that may be interpreted as {@link $BlockStateModelLoader$LoadedJson}.
     */
    export type $BlockStateModelLoader$LoadedJson_ = { source?: string, data?: $JsonElement_,  } | [source?: string, data?: $JsonElement_, ];
    export class $ModelBakery$TextureGetter {
    }
    export interface $ModelBakery$TextureGetter {
        get(arg0: $ModelResourceLocation_, arg1: $Material): $TextureAtlasSprite;
    }
    /**
     * Values that may be interpreted as {@link $ModelBakery$TextureGetter}.
     */
    export type $ModelBakery$TextureGetter_ = ((arg0: $ModelResourceLocation, arg1: $Material) => $TextureAtlasSprite);
    export class $AtlasSet$AtlasEntry extends $Record implements $AutoCloseable {
        close(): void;
        atlas(): $TextureAtlas;
        atlasInfoLocation(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $AtlasSet$AtlasEntry}.
     */
    export type $AtlasSet$AtlasEntry_ = { atlas?: $TextureAtlas, atlasInfoLocation?: $ResourceLocation_,  } | [atlas?: $TextureAtlas, atlasInfoLocation?: $ResourceLocation_, ];
    export class $SimpleBakedModel implements $BakedModel, $SimpleBakedModelAccessor, $IBakedModelExtension {
        useAmbientOcclusion(): boolean;
        isGui3d(): boolean;
        getOverrides(): $ItemOverrides;
        getParticleIcon(): $TextureAtlasSprite;
        usesBlockLight(): boolean;
        isCustomRenderer(): boolean;
        getTransforms(): $ItemTransforms;
        getRenderTypes(arg0: $ItemStack_, arg1: boolean): $List<any>;
        getRenderTypes(arg0: $BlockState_, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource): $List<$BakedQuad>;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        getRenderPasses(arg0: $ItemStack_, arg1: boolean): $List<$BakedModel>;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<$BakedQuad>;
        getModelData(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ModelData): $ModelData;
        isVanillaAdapter(): boolean;
        getBlockRenderTypes(): $ChunkRenderTypeSet;
        unculledFaces: $List<$BakedQuad>;
        culledFaces: $Map<$Direction, $List<$BakedQuad>>;
        /**
         * @deprecated
         */
        constructor(arg0: $List_<$BakedQuad>, arg1: $Map_<$Direction_, $List_<$BakedQuad>>, arg2: boolean, arg3: boolean, arg4: boolean, arg5: $TextureAtlasSprite, arg6: $ItemTransforms, arg7: $ItemOverrides);
        constructor(arg0: $List_<$BakedQuad>, arg1: $Map_<$Direction_, $List_<$BakedQuad>>, arg2: boolean, arg3: boolean, arg4: boolean, arg5: $TextureAtlasSprite, arg6: $ItemTransforms, arg7: $ItemOverrides, arg8: $RenderTypeGroup_);
        get gui3d(): boolean;
        get overrides(): $ItemOverrides;
        get customRenderer(): boolean;
        get transforms(): $ItemTransforms;
        get vanillaAdapter(): boolean;
        get blockRenderTypes(): $ChunkRenderTypeSet;
    }
    export class $ModelManager$ReloadState extends $Record {
        modelCache(): $Map<$BlockState, $BakedModel>;
        missingModel(): $BakedModel;
        modelBakery(): $ModelBakery;
        readyForUpload(): $CompletableFuture<void>;
        atlasPreparations(): $Map<$ResourceLocation, $AtlasSet$StitchResult>;
    }
    /**
     * Values that may be interpreted as {@link $ModelManager$ReloadState}.
     */
    export type $ModelManager$ReloadState_ = { modelBakery?: $ModelBakery, missingModel?: $BakedModel, modelCache?: $Map_<$BlockState_, $BakedModel>, atlasPreparations?: $Map_<$ResourceLocation_, $AtlasSet$StitchResult>, readyForUpload?: $CompletableFuture<void>,  } | [modelBakery?: $ModelBakery, missingModel?: $BakedModel, modelCache?: $Map_<$BlockState_, $BakedModel>, atlasPreparations?: $Map_<$ResourceLocation_, $AtlasSet$StitchResult>, readyForUpload?: $CompletableFuture<void>, ];
    export class $BlockStateModelLoader {
        loadAllBlockStates(): void;
        getModelGroups(): $Object2IntMap<$BlockState>;
        loadBlockStateDefinitions(arg0: $ResourceLocation_, arg1: $StateDefinition<$Block_, $BlockState_>): void;
        static BLOCKSTATE_LISTER: $FileToIdConverter;
        constructor(arg0: $Map_<$ResourceLocation_, $List_<$BlockStateModelLoader$LoadedJson_>>, arg1: $ProfilerFiller, arg2: $UnbakedModel, arg3: $BlockColors, arg4: $BiConsumer_<$ModelResourceLocation, $UnbakedModel>);
        get modelGroups(): $Object2IntMap<$BlockState>;
    }
    export class $BlockStateModelLoader$LoadedModel extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $BlockStateModelLoader$LoadedModel}.
     */
    export type $BlockStateModelLoader$LoadedModel_ = { key?: $Supplier_<$BlockStateModelLoader$ModelGroupKey>, model?: $UnbakedModel,  } | [key?: $Supplier_<$BlockStateModelLoader$ModelGroupKey>, model?: $UnbakedModel, ];
    export class $MultiPartBakedModel implements $BakedModel, $IDynamicBakedModel, $FabricBakedModel {
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        useAmbientOcclusion(): boolean;
        isGui3d(): boolean;
        getOverrides(): $ItemOverrides;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        /**
         * @deprecated
         */
        getParticleIcon(): $TextureAtlasSprite;
        usesBlockLight(): boolean;
        isVanillaAdapter(): boolean;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        isCustomRenderer(): boolean;
        /**
         * @deprecated
         */
        getTransforms(): $ItemTransforms;
        getRenderTypes(arg0: $BlockState_, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<any>;
        getModelData(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ModelData): $ModelData;
        getSelectors(arg0: $BlockState_): $BitSet;
        redirect$hpp000$ferritecore$redirectCachePut(arg0: $Map_<any, any>, arg1: $Object, arg2: $Object): $Object;
        redirect$hpp000$ferritecore$redirectCacheGet(arg0: $Map_<any, any>, arg1: $Object): $Object;
        getRenderTypes(arg0: $ItemStack_, arg1: boolean): $List<$RenderType>;
        getRenderPasses(arg0: $ItemStack_, arg1: boolean): $List<$BakedModel>;
        constructor(arg0: $List_<$Pair<$Predicate_<$BlockState>, $BakedModel>>);
        get gui3d(): boolean;
        get overrides(): $ItemOverrides;
        get vanillaAdapter(): boolean;
        get customRenderer(): boolean;
        get transforms(): $ItemTransforms;
    }
    export class $ModelBakery$BakedCacheKey extends $Record {
        id(): $ResourceLocation;
        transformation(): $Transformation;
        isUvLocked(): boolean;
        constructor(id: $ResourceLocation_, transformation: $Transformation, isUvLocked: boolean);
        get uvLocked(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ModelBakery$BakedCacheKey}.
     */
    export type $ModelBakery$BakedCacheKey_ = { transformation?: $Transformation, isUvLocked?: boolean, id?: $ResourceLocation_,  } | [transformation?: $Transformation, isUvLocked?: boolean, id?: $ResourceLocation_, ];
    export class $BlockStateModelLoader$ModelGroupKey extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $BlockStateModelLoader$ModelGroupKey}.
     */
    export type $BlockStateModelLoader$ModelGroupKey_ = { coloringValues?: $List_<$Object>, models?: $List_<$UnbakedModel>,  } | [coloringValues?: $List_<$Object>, models?: $List_<$UnbakedModel>, ];
    export class $BlockStateModelLoader$BlockStateDefinitionException extends $RuntimeException {
    }
    export class $ModelResourceLocation extends $Record implements $ResourceLocationHelper {
        id(): $ResourceLocation;
        static standalone(arg0: $ResourceLocation_): $ModelResourceLocation;
        getVariant(): string;
        variant(): string;
        static inventory(arg0: $ResourceLocation_): $ModelResourceLocation;
        static vanilla(arg0: string, arg1: string): $ModelResourceLocation;
        FullGrownCropMarker$shouldHaveMarker(): boolean;
        FullGrownCropMarker$setShouldHaveMarker(arg0: boolean): void;
        static INVENTORY_VARIANT: string;
        static STANDALONE_VARIANT: string;
        constructor(id: $ResourceLocation_, variant: string);
    }
    /**
     * Values that may be interpreted as {@link $ModelResourceLocation}.
     */
    export type $ModelResourceLocation_ = { id?: $ResourceLocation_, variant?: string,  } | [id?: $ResourceLocation_, variant?: string, ];
    export class $ModelBakery$ModelBakerImpl implements $ModelBaker, $ModelBakerAddon {
        static lambda$new$0(arg0: $ModelBakery$TextureGetter_, arg1: $ModelResourceLocation_, arg2: $Material): $TextureAtlasSprite;
        getModel(arg0: $ResourceLocation_): $UnbakedModel;
        getTopLevelModel(arg0: $ModelResourceLocation_): $UnbakedModel;
        bakeUncached(arg0: $UnbakedModel, arg1: $ModelState): $BakedModel;
        bakeUncached(arg0: $UnbakedModel, arg1: $ModelState, arg2: $Function_<$Material, $TextureAtlasSprite>): $BakedModel;
        bake(arg0: $ResourceLocation_, arg1: $ModelState, arg2: $Function_<$Material, $TextureAtlasSprite>): $BakedModel;
        bake(arg0: $ResourceLocation_, arg1: $ModelState): $BakedModel;
        getModelTextureGetter(): $Function<$Material, $TextureAtlasSprite>;
        FullGrownCropMarker$id(): $ModelResourceLocation;
        constructor(arg0: $ModelBakery, arg1: $ModelBakery$TextureGetter_, arg2: $ModelResourceLocation_);
        get modelTextureGetter(): $Function<$Material, $TextureAtlasSprite>;
    }
    export class $AtlasSet implements $AutoCloseable {
        close(): void;
        getAtlas(arg0: $ResourceLocation_): $TextureAtlas;
        scheduleLoad(arg0: $ResourceManager, arg1: number, arg2: $Executor_): $Map<$ResourceLocation, $CompletableFuture<$AtlasSet$StitchResult>>;
        constructor(arg0: $Map_<$ResourceLocation_, $ResourceLocation_>, arg1: $TextureManager);
    }
}
