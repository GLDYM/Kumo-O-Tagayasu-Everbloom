import { $ZetaModule } from "@package/org/violetmoon/zeta/module";
import { $Holder, $Holder_ } from "@package/net/minecraft/core";
import { $ConfigFlagManager } from "@package/org/violetmoon/zeta/config";
import { $Biome } from "@package/net/minecraft/world/level/biome";

declare module "@package/org/violetmoon/zeta/config/type" {
    export class $IBiomeConfig {
    }
    export interface $IBiomeConfig {
        canSpawn(arg0: $Holder_<$Biome>): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IBiomeConfig}.
     */
    export type $IBiomeConfig_ = ((arg0: $Holder<$Biome>) => boolean);
    export class $EntitySpawnConfig implements $IConfigType {
        isEnabled(): boolean;
        onReload(arg0: $ZetaModule, arg1: $ConfigFlagManager): void;
        minGroupSize: number;
        biomes: $IBiomeConfig;
        spawnWeight: number;
        maxGroupSize: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $IBiomeConfig_);
        get enabled(): boolean;
    }
    export class $IConfigType {
    }
    export interface $IConfigType {
        onReload(arg0: $ZetaModule, arg1: $ConfigFlagManager): void;
    }
}
