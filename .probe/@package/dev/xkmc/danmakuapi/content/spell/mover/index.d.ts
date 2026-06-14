import { $ProjectileMovement } from "@package/dev/xkmc/fastprojectileapi/entity";
import { $IDanmakuEntity } from "@package/dev/xkmc/danmakuapi/api";
import { $Record } from "@package/java/lang";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/dev/xkmc/danmakuapi/content/spell/mover" {
    export class $MoverInfo extends $Record {
        self(): $IDanmakuEntity;
        tick(): number;
        prevPos(): $Vec3;
        offsetTime(arg0: number): $MoverInfo;
        prevVel(): $Vec3;
        constructor(tick: number, prevPos: $Vec3_, prevVel: $Vec3_, self: $IDanmakuEntity);
    }
    /**
     * Values that may be interpreted as {@link $MoverInfo}.
     */
    export type $MoverInfo_ = { prevPos?: $Vec3_, prevVel?: $Vec3_, self?: $IDanmakuEntity, tick?: number,  } | [prevPos?: $Vec3_, prevVel?: $Vec3_, self?: $IDanmakuEntity, tick?: number, ];
    export class $DanmakuMover {
        move(arg0: $MoverInfo_): $ProjectileMovement;
        constructor();
    }
}
