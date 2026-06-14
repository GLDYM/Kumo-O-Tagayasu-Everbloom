import { $ItemProviderEntry } from "@package/com/tterrag/registrate/util/entry";
import { $DyeColor_, $Item } from "@package/net/minecraft/world/item";
import { $SimplifiedProjectile, $GrazingEntity, $ProjectileMovement_, $ProjectileMovement } from "@package/dev/xkmc/fastprojectileapi/entity";
import { $LivingEntity, $Entity, $TraceableEntity } from "@package/net/minecraft/world/entity";
import { $AABB, $EntityHitResult, $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $DanmakuItem, $LaserItem } from "@package/dev/xkmc/danmakuapi/content/item";
import { $DisplayType } from "@package/dev/xkmc/danmakuapi/content/render";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/dev/xkmc/danmakuapi/api" {
    export class $DanmakuLaser {
    }
    export interface $DanmakuLaser {
        get(arg0: $DyeColor_): $ItemProviderEntry<$Item, $LaserItem>;
        visualLength(): number;
        setupLength(): boolean;
        damage(): number;
    }
    export class $IYoukaiEntity {
    }
    export interface $IYoukaiEntity {
        isTarget(arg0: $LivingEntity): boolean;
        onDanmakuHit(arg0: $LivingEntity, arg1: $IDanmakuEntity): void;
        onDanmakuImmune(arg0: $LivingEntity, arg1: $IDanmakuEntity, arg2: $DamageSource_): void;
        shouldHurt(arg0: $LivingEntity): boolean;
        danmakuHitTarget(arg0: $IDanmakuEntity, arg1: $DamageSource_, arg2: $LivingEntity): void;
        getBoundingBoxForDanmaku(): $AABB;
        get boundingBoxForDanmaku(): $AABB;
    }
    export class $IDanmakuEntity {
        static alterEntityHitBox(arg0: $Entity, arg1: number, arg2: number): $AABB;
        static GRAZE_RANGE: number;
    }
    export interface $IDanmakuEntity extends $GrazingEntity {
        source(): $DamageSource;
        self(): $SimplifiedProjectile;
        asTraceable(): $TraceableEntity;
        alterHitBox(arg0: $Entity, arg1: number, arg2: number): $AABB;
        damage(arg0: $Entity): number;
        shouldHurt(arg0: $Entity, arg1: $Entity): boolean;
        hurtTarget(arg0: $EntityHitResult): void;
        grazeRange(): number;
    }
    export class $DanmakuCommander {
    }
    export interface $DanmakuCommander {
        move(arg0: number, arg1: number, arg2: $Vec3_): $ProjectileMovement;
        getDanmakuDamageSource(arg0: $IDanmakuEntity): $DamageSource;
    }
    /**
     * Values that may be interpreted as {@link $DanmakuCommander}.
     */
    export type $DanmakuCommander_ = ((arg0: number, arg1: number, arg2: $Vec3) => $ProjectileMovement_);
    export class $DanmakuBullet {
    }
    export interface $DanmakuBullet {
        getName(): string;
        get(arg0: $DyeColor_): $ItemProviderEntry<$Item, $DanmakuItem>;
        display(): $DisplayType;
        damage(): number;
        bypass(): boolean;
        get name(): string;
    }
}
