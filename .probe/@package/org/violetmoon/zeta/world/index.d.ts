import { $BooleanSupplier_ } from "@package/java/util/function";
import { $ZetaModule } from "@package/org/violetmoon/zeta/module";
import { $ZConfigChanged } from "@package/org/violetmoon/zeta/event/load";
import { $MobSpawnSettings$SpawnerData } from "@package/net/minecraft/world/level/biome";
import { $MobCategory_, $SpawnPlacementType_, $EntityType, $EntityType_, $MobCategory, $Mob, $SpawnPlacements$SpawnPredicate_ } from "@package/net/minecraft/world/entity";
import { $EntitySpawnConfig } from "@package/org/violetmoon/zeta/config/type";
import { $List } from "@package/java/util";
import { $Heightmap$Types_ } from "@package/net/minecraft/world/level/levelgen";
import { $Zeta } from "@package/org/violetmoon/zeta";

declare module "@package/org/violetmoon/zeta/world" {
    export class $EntitySpawnHandler {
        refresh(arg0: $ZConfigChanged): void;
        track<T extends $Mob>(arg0: $EntityType_<T>, arg1: $MobCategory_, arg2: $EntitySpawnConfig, arg3: boolean): void;
        addEgg(arg0: $EntityType_<$Mob>, arg1: number, arg2: number, arg3: $ZetaModule, arg4: $BooleanSupplier_): void;
        addEgg(arg0: $ZetaModule, arg1: $EntityType_<$Mob>, arg2: number, arg3: number, arg4: $EntitySpawnConfig): void;
        registerSpawn<T extends $Mob>(arg0: $EntityType_<T>, arg1: $MobCategory_, arg2: $SpawnPlacementType_, arg3: $Heightmap$Types_, arg4: $SpawnPlacements$SpawnPredicate_<T>, arg5: $EntitySpawnConfig): void;
        trackedSpawnConfigs: $List<$EntitySpawnHandler$TrackedSpawnConfig>;
        constructor(arg0: $Zeta);
    }
    export class $EntitySpawnHandler$TrackedSpawnConfig {
        getEntry(): $MobSpawnSettings$SpawnerData;
        secondary: boolean;
        entityType: $EntityType<never>;
        classification: $MobCategory;
        config: $EntitySpawnConfig;
        get entry(): $MobSpawnSettings$SpawnerData;
    }
}
