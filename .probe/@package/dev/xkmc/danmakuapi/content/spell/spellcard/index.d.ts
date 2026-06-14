import { $DyeColor_ } from "@package/net/minecraft/world/item";
import { $SimplifiedProjectile, $ProjectileMovement } from "@package/dev/xkmc/fastprojectileapi/entity";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ItemBulletEntity, $ItemLaserEntity } from "@package/dev/xkmc/danmakuapi/content/entity";
import { $DanmakuCommander, $DanmakuLaser, $DanmakuBullet, $IDanmakuEntity } from "@package/dev/xkmc/danmakuapi/api";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/dev/xkmc/danmakuapi/content/spell/spellcard" {
    export class $TrailAction {
        setup(arg0: $CardHolder): void;
        execute(arg0: $CardHolder, arg1: $Vec3_, arg2: $Vec3_): void;
        execute(arg0: $Vec3_, arg1: $Vec3_): void;
        constructor();
        set up(value: $CardHolder);
    }
    export class $SpellCardWrapper extends $SpellCard {
        getModelId(): string;
        modelId: string;
        card: $SpellCard;
        constructor();
    }
    export class $CardHolder {
    }
    export interface $CardHolder {
        target(): $Vec3;
        self(): $LivingEntity;
        random(): $RandomSource;
        center(): $Vec3;
        forward(): $Vec3;
        prepareDanmaku(arg0: number, arg1: $Vec3_, arg2: $DanmakuBullet, arg3: $DyeColor_): $ItemBulletEntity;
        prepareLaser(arg0: number, arg1: $Vec3_, arg2: $Vec3_, arg3: number, arg4: $DanmakuLaser, arg5: $DyeColor_): $ItemLaserEntity;
        targetVelocity(): $Vec3;
        getDanmakuDamageSource(arg0: $IDanmakuEntity): $DamageSource;
        shoot(arg0: $SimplifiedProjectile): void;
    }
    export class $SpellCard implements $DanmakuCommander {
        reset(): void;
        move(arg0: number, arg1: number, arg2: $Vec3_): $ProjectileMovement;
        tick(arg0: $CardHolder): void;
        hurt(arg0: $CardHolder, arg1: $DamageSource_, arg2: number): void;
        getDanmakuDamageSource(arg0: $IDanmakuEntity): $DamageSource;
        constructor();
    }
}
