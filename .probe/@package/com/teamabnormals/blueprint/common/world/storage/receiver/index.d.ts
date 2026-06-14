import { $Object } from "@package/java/lang";

declare module "@package/com/teamabnormals/blueprint/common/world/storage/receiver" {
    export class $BlueprintServerLevel {
    }
    export interface $BlueprintServerLevel {
        getLevelData(arg0: number): $Object;
    }
    /**
     * Values that may be interpreted as {@link $BlueprintServerLevel}.
     */
    export type $BlueprintServerLevel_ = ((arg0: number) => $Object);
}
