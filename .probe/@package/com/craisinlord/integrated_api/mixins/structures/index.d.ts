import { $LevelAccessor } from "@package/net/minecraft/world/level";
import { $StructureTemplatePool, $JigsawJunction, $StructurePoolElement } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $Codec } from "@package/com/mojang/serialization";
import { $Either, $Pair } from "@package/com/mojang/datafixers/util";
import { $StructureTemplate, $StructureProcessorType_, $StructureTemplate$Palette, $StructureTemplateManager, $StructureProcessorList, $StructureProcessorType } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $List, $List_ } from "@package/java/util";
import { $Holder } from "@package/net/minecraft/core";
import { $ObjectArrayList, $ObjectListIterator } from "@package/it/unimi/dsi/fastutil/objects";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Rotation_ } from "@package/net/minecraft/world/level/block";
import { $MutableObject } from "@package/org/apache/commons/lang3/mutable";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Beardifier$Rigid } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/com/craisinlord/integrated_api/mixins/structures" {
    export class $SinglePoolElementAccessor {
    }
    export interface $SinglePoolElementAccessor {
        integratedapi_getTemplate(): $Either<$ResourceLocation, $StructureTemplate>;
        integratedapi_getProcessors(): $Holder<$StructureProcessorList>;
        callGetTemplate(arg0: $StructureTemplateManager): $StructureTemplate;
    }
    export class $JigsawJunctionAccessor {
    }
    export interface $JigsawJunctionAccessor {
        setSourceGroundY(arg0: number): void;
        setSourceX(arg0: number): void;
        setSourceZ(arg0: number): void;
        set sourceGroundY(value: number);
        set sourceX(value: number);
        set sourceZ(value: number);
    }
    export class $StructureTemplateManagerAccessor {
    }
    export interface $StructureTemplateManagerAccessor {
        integratedapi_getResourceManager(): $ResourceManager;
    }
    /**
     * Values that may be interpreted as {@link $StructureTemplateManagerAccessor}.
     */
    export type $StructureTemplateManagerAccessor_ = (() => $ResourceManager);
    export class $StructureManagerAccessor {
    }
    export interface $StructureManagerAccessor {
        getLevel(): $LevelAccessor;
        get level(): $LevelAccessor;
    }
    /**
     * Values that may be interpreted as {@link $StructureManagerAccessor}.
     */
    export type $StructureManagerAccessor_ = (() => $LevelAccessor);
    export class $PoolElementStructurePieceAccessor {
    }
    export interface $PoolElementStructurePieceAccessor {
        setRotation(arg0: $Rotation_): void;
        getStructureManager(): $StructureTemplateManager;
        set rotation(value: $Rotation_);
        get structureManager(): $StructureTemplateManager;
    }
    export class $StructureProcessorAccessor {
    }
    export interface $StructureProcessorAccessor {
        callGetType(): $StructureProcessorType<never>;
    }
    /**
     * Values that may be interpreted as {@link $StructureProcessorAccessor}.
     */
    export type $StructureProcessorAccessor_ = (() => $StructureProcessorType_<never>);
    export class $StructurePieceAccessor {
    }
    export interface $StructurePieceAccessor {
        setBoundingBox(arg0: $BoundingBox): void;
        set boundingBox(value: $BoundingBox);
    }
    /**
     * Values that may be interpreted as {@link $StructurePieceAccessor}.
     */
    export type $StructurePieceAccessor_ = ((arg0: $BoundingBox) => void);
    export class $TemplateAccessor {
    }
    export interface $TemplateAccessor {
        integratedapi_getPalettes(): $List<$StructureTemplate$Palette>;
    }
    /**
     * Values that may be interpreted as {@link $TemplateAccessor}.
     */
    export type $TemplateAccessor_ = (() => $List_<$StructureTemplate$Palette>);
    export class $ListPoolElementAccessor {
    }
    export interface $ListPoolElementAccessor {
        integratedapi_getElements(): $List<$StructurePoolElement>;
    }
    /**
     * Values that may be interpreted as {@link $ListPoolElementAccessor}.
     */
    export type $ListPoolElementAccessor_ = (() => $List_<$StructurePoolElement>);
    export class $StructurePoolAccessor {
        static getCODEC_REFERENCE(): $MutableObject<$Codec<$Holder<$StructureTemplatePool>>>;
        static get CODEC_REFERENCE(): $MutableObject<$Codec<$Holder<$StructureTemplatePool>>>;
    }
    export interface $StructurePoolAccessor {
        integratedapi_getRawTemplates(): $List<$Pair<$StructurePoolElement, number>>;
        integratedapi_setRawTemplates(arg0: $List_<$Pair<$StructurePoolElement, number>>): void;
        integratedapi_setTemplates(arg0: $ObjectArrayList<$StructurePoolElement>): void;
        integratedapi_getTemplates(): $ObjectArrayList<$StructurePoolElement>;
    }
    export class $BeardifierAccessor {
    }
    export interface $BeardifierAccessor {
        getPieceIterator(): $ObjectListIterator<$Beardifier$Rigid>;
        getJunctionIterator(): $ObjectListIterator<$JigsawJunction>;
        get pieceIterator(): $ObjectListIterator<$Beardifier$Rigid>;
        get junctionIterator(): $ObjectListIterator<$JigsawJunction>;
    }
}
