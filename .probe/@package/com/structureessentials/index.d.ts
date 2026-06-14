import { $HolderSet_, $HolderSet } from "@package/net/minecraft/core";
import { $Biome } from "@package/net/minecraft/world/level/biome";

declare module "@package/com/structureessentials" {
    export class $IStructureModifier {
    }
    export interface $IStructureModifier {
        setStructureBiomes(arg0: $HolderSet_<$Biome>): void;
        set structureBiomes(value: $HolderSet_<$Biome>);
    }
    /**
     * Values that may be interpreted as {@link $IStructureModifier}.
     */
    export type $IStructureModifier_ = ((arg0: $HolderSet<$Biome>) => void);
    export class $IGeneratorNearbyStructureHolder {
    }
    export interface $IGeneratorNearbyStructureHolder {
        getNearby(arg0: number): string;
        setNearby(arg0: number, arg1: string): void;
    }
}
