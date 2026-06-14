import { $ClipContext$Block_, $Level_, $ClipContext$Fluid_ } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Item_ } from "@package/net/minecraft/world/item";
import { $IZetaBlock } from "@package/org/violetmoon/zeta/block";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Collection_, $List } from "@package/java/util";
import { $Zeta } from "@package/org/violetmoon/zeta";
import { $Function_ } from "@package/java/util/function";
import { $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Runnable_, $Enum } from "@package/java/lang";
import { $Vec3_, $HitResult, $Vec3 } from "@package/net/minecraft/world/phys";
export * as handler from "@package/org/violetmoon/zeta/util/handler";
export * as zetalist from "@package/org/violetmoon/zeta/util/zetalist";

declare module "@package/org/violetmoon/zeta/util" {
    export class $RaytracingUtil {
        getEntityParams(arg0: $Entity): $Pair<$Vec3, $Vec3>;
        getEntityRange(arg0: $LivingEntity): number;
        rayTrace(arg0: $Entity, arg1: $Level_, arg2: $Entity, arg3: $ClipContext$Block_, arg4: $ClipContext$Fluid_, arg5: number): $HitResult;
        rayTrace(arg0: $Entity, arg1: $Level_, arg2: $Vec3_, arg3: $Vec3_, arg4: $ClipContext$Block_, arg5: $ClipContext$Fluid_): $HitResult;
        rayTrace(arg0: $Entity, arg1: $Level_, arg2: $Vec3_, arg3: $Vec3_, arg4: $ClipContext$Block_, arg5: $ClipContext$Fluid_, arg6: number): $HitResult;
        rayTrace(arg0: $Entity, arg1: $Level_, arg2: $Player, arg3: $ClipContext$Block_, arg4: $ClipContext$Fluid_): $HitResult;
        constructor();
    }
    export class $RegistryUtil {
        static getTagValues<T>(arg0: $RegistryAccess, arg1: $TagKey_<T>): $List<T>;
        static massRegistryGet<T>(arg0: $Collection_<string>, arg1: $Registry<T>): $List<T>;
        inheritQuark(arg0: $IZetaBlock, arg1: string): string;
        inherit(arg0: $Block_, arg1: $Function_<string, string>): string;
        inherit(arg0: $Block_, arg1: string): string;
        constructor(arg0: $Zeta);
    }
    export class $ZetaSide extends $Enum<$ZetaSide> {
        static values(): $ZetaSide[];
        static valueOf(arg0: string): $ZetaSide;
        static fromClient(arg0: boolean): $ZetaSide;
        static SERVER: $ZetaSide;
        static CLIENT: $ZetaSide;
    }
    /**
     * Values that may be interpreted as {@link $ZetaSide}.
     */
    export type $ZetaSide_ = "client" | "server";
    export class $NameChanger {
        changeItem(arg0: $Item_, arg1: string, arg2: boolean): void;
        changeBlock(arg0: $Block_, arg1: string, arg2: boolean): void;
        constructor();
    }
    export class $ZetaCommonProxy {
        tryToExecuteOnMainThread(arg0: $Runnable_): void;
        constructor(arg0: $Zeta);
    }
}
