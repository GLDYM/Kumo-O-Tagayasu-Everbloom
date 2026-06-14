import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Enum } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/net/mehvahdjukaar/amendments/reg" {
    export class $ModBlockProperties$PostType extends $Enum<$ModBlockProperties$PostType> implements $StringRepresentable {
        getName(): string;
        static get(state: $BlockState_): $ModBlockProperties$PostType;
        static get(state: $BlockState_, needsFullHeight: boolean): $ModBlockProperties$PostType;
        static values(): $ModBlockProperties$PostType[];
        static valueOf(name: string): $ModBlockProperties$PostType;
        getOffset(): number;
        getWidth(): number;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static BEAM: $ModBlockProperties$PostType;
        static WALL: $ModBlockProperties$PostType;
        static PALISADE: $ModBlockProperties$PostType;
        static POST: $ModBlockProperties$PostType;
        get offset(): number;
        get width(): number;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ModBlockProperties$PostType}.
     */
    export type $ModBlockProperties$PostType_ = "post" | "palisade" | "wall" | "beam";
}
