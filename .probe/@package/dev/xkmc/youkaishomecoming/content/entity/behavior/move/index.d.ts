import { $Path } from "@package/net/minecraft/world/level/pathfinder";
import { $YoukaiEntity } from "@package/dev/xkmc/youkaishomecoming/content/entity/youkai";
import { $Record } from "@package/java/lang";

declare module "@package/dev/xkmc/youkaishomecoming/content/entity/behavior/move" {
    export class $CompoundPath extends $Record {
        path(): $Path;
        flying(): boolean;
        constructor(flying: boolean, path: $Path);
    }
    /**
     * Values that may be interpreted as {@link $CompoundPath}.
     */
    export type $CompoundPath_ = { flying?: boolean, path?: $Path,  } | [flying?: boolean, path?: $Path, ];
    export class $YoukaiNavigationControl {
        getPath(): $CompoundPath;
        setFlying(): void;
        moveTo(arg0: $CompoundPath_, arg1: number): boolean;
        tickMove(): void;
        setWalking(): void;
        markHuman(): void;
        isFlying(): boolean;
        constructor(arg0: $YoukaiEntity);
        get path(): $CompoundPath;
    }
}
