import { $JigsawJunction } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $ObjectListIterator } from "@package/it/unimi/dsi/fastutil/objects";
import { $Record } from "@package/java/lang";
import { $EnhancedTerrainAdaptation } from "@package/com/craisinlord/integrated_api/world/terrainadaptation";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";

declare module "@package/com/craisinlord/integrated_api/world/terrainadaptation/beardifier" {
    export class $EnhancedBeardifierData {
    }
    export interface $EnhancedBeardifierData {
        setEnhancedJunctionIterator(arg0: $ObjectListIterator<$EnhancedJigsawJunction_>): void;
        getEnhancedJunctionIterator(): $ObjectListIterator<$EnhancedJigsawJunction>;
        getEnhancedRigidIterator(): $ObjectListIterator<$EnhancedBeardifierRigid>;
        setEnhancedRigidIterator(arg0: $ObjectListIterator<$EnhancedBeardifierRigid_>): void;
    }
    export class $EnhancedJigsawJunction extends $Record {
        jigsawJunction(): $JigsawJunction;
        pieceTerrainAdaptation(): $EnhancedTerrainAdaptation;
        constructor(jigsawJunction: $JigsawJunction, pieceTerrainAdaptation: $EnhancedTerrainAdaptation);
    }
    /**
     * Values that may be interpreted as {@link $EnhancedJigsawJunction}.
     */
    export type $EnhancedJigsawJunction_ = { jigsawJunction?: $JigsawJunction, pieceTerrainAdaptation?: $EnhancedTerrainAdaptation,  } | [jigsawJunction?: $JigsawJunction, pieceTerrainAdaptation?: $EnhancedTerrainAdaptation, ];
    export class $EnhancedBeardifierRigid extends $Record {
        pieceBoundingBox(): $BoundingBox;
        pieceTerrainAdaptation(): $EnhancedTerrainAdaptation;
        pieceGroundLevelDelta(): number;
        constructor(pieceBoundingBox: $BoundingBox, pieceTerrainAdaptation: $EnhancedTerrainAdaptation, pieceGroundLevelDelta: number);
    }
    /**
     * Values that may be interpreted as {@link $EnhancedBeardifierRigid}.
     */
    export type $EnhancedBeardifierRigid_ = { pieceTerrainAdaptation?: $EnhancedTerrainAdaptation, pieceGroundLevelDelta?: number, pieceBoundingBox?: $BoundingBox,  } | [pieceTerrainAdaptation?: $EnhancedTerrainAdaptation, pieceGroundLevelDelta?: number, pieceBoundingBox?: $BoundingBox, ];
}
