import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $DyeColor_ } from "@package/net/minecraft/world/item";
import { $CardHolder } from "@package/dev/xkmc/danmakuapi/content/spell/spellcard";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ItemBulletEntity, $ItemLaserEntity } from "@package/dev/xkmc/danmakuapi/content/entity";
import { $DanmakuLaser, $DanmakuBullet, $IDanmakuEntity } from "@package/dev/xkmc/danmakuapi/api";
import { $UUID_, $List } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $SimplifiedProjectile } from "@package/dev/xkmc/fastprojectileapi/entity";
import { $YoukaiEntity } from "@package/dev/xkmc/youkaishomecoming/content/entity/youkai";
import { $Record } from "@package/java/lang";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/dev/xkmc/youkaishomecoming/content/entity/behavior/combat" {
    export class $YoukaiCardHolder extends $Record implements $CardHolder {
        target(): $Vec3;
        self(): $YoukaiEntity;
        random(): $RandomSource;
        center(): $Vec3;
        forward(): $Vec3;
        prepareDanmaku(arg0: number, arg1: $Vec3_, arg2: $DanmakuBullet, arg3: $DyeColor_): $ItemBulletEntity;
        prepareLaser(arg0: number, arg1: $Vec3_, arg2: $Vec3_, arg3: number, arg4: $DanmakuLaser, arg5: $DyeColor_): $ItemLaserEntity;
        targetVelocity(): $Vec3;
        getDanmakuDamageSource(arg0: $IDanmakuEntity): $DamageSource;
        shoot(arg0: $SimplifiedProjectile): void;
        constructor(self: $YoukaiEntity);
    }
    /**
     * Values that may be interpreted as {@link $YoukaiCardHolder}.
     */
    export type $YoukaiCardHolder_ = { self?: $YoukaiEntity,  } | [self?: $YoukaiEntity, ];
    export class $YoukaiFightEvent extends $Event implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        youkai: $YoukaiEntity;
        target: $LivingEntity;
        constructor(arg0: $YoukaiEntity, arg1: $LivingEntity);
    }
    export class $YoukaiCombatManager {
    }
    export interface $YoukaiCombatManager {
        tick(): void;
        doPreyAttack(arg0: $LivingEntity): number;
        isInvulnerableTo(arg0: $DamageSource_): boolean;
        targetKind(arg0: $LivingEntity): $TargetKind;
        getCircleSize(arg0: number): number;
        getSpellCircle(): $ResourceLocation;
        onDanmakuHit(arg0: $LivingEntity, arg1: $IDanmakuEntity): void;
        shouldHurtInnocent(arg0: $LivingEntity): boolean;
        onDanmakuImmune(arg0: $LivingEntity, arg1: $IDanmakuEntity, arg2: $DamageSource_): void;
        get spellCircle(): $ResourceLocation;
    }
    export class $YoukaiTargetContainer {
        contains(arg0: $LivingEntity): boolean;
        tick(): void;
        checkTarget(arg0: $LivingEntity): $LivingEntity;
        getTargets(): $List<$LivingEntity>;
        getPrimaryTarget(): $LivingEntity;
        addPlayer(arg0: $LivingEntity): void;
        isValidTarget(arg0: $LivingEntity): boolean;
        removePlayer(arg0: $UUID_): void;
        constructor(arg0: $YoukaiEntity, arg1: number);
        get targets(): $List<$LivingEntity>;
        get primaryTarget(): $LivingEntity;
    }
    export class $TargetKind extends $Record {
        isPrey(): boolean;
        initiateAttack(): boolean;
        noAdditionalEffect(): boolean;
        static ENEMY: $TargetKind;
        static NONE: $TargetKind;
        static WORTHY: $TargetKind;
        static PRAY: $TargetKind;
        constructor(initiateAttack: boolean, isPrey: boolean, noAdditionalEffect: boolean);
        get prey(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TargetKind}.
     */
    export type $TargetKind_ = { noAdditionalEffect?: boolean, isPrey?: boolean, initiateAttack?: boolean,  } | [noAdditionalEffect?: boolean, isPrey?: boolean, initiateAttack?: boolean, ];
}
