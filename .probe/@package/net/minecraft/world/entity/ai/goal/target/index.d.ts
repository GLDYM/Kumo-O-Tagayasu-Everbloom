import { $Goal } from "@package/net/minecraft/world/entity/ai/goal";
import { $Predicate_ } from "@package/java/util/function";
import { $TamableAnimal, $Mob, $LivingEntity, $PathfinderMob } from "@package/net/minecraft/world/entity";
import { $Raider } from "@package/net/minecraft/world/entity/raid";
import { $Class } from "@package/java/lang";
import { $TargetGoalAccessor } from "@package/dev/xkmc/l2weaponry/mixin";
import { $IronGolem } from "@package/net/minecraft/world/entity/animal";

declare module "@package/net/minecraft/world/entity/ai/goal/target" {
    export class $NonTameRandomTargetGoal<T extends $LivingEntity> extends $NearestAttackableTargetGoal<T> {
        constructor(arg0: $TamableAnimal, arg1: $Class<T>, arg2: boolean, arg3: $Predicate_<$LivingEntity>);
    }
    export class $DefendVillageTargetGoal extends $TargetGoal {
        constructor(arg0: $IronGolem);
    }
    export class $OwnerHurtByTargetGoal extends $TargetGoal {
        constructor(arg0: $TamableAnimal);
    }
    export class $HurtByTargetGoal extends $TargetGoal {
        setAlertOthers(...arg0: $Class<never>[]): $HurtByTargetGoal;
        timestamp: number;
        constructor(arg0: $PathfinderMob, ...arg1: $Class<never>[]);
        set alertOthers(value: $Class<never>[]);
    }
    export class $ResetUniversalAngerTargetGoal<T extends $Mob> extends $Goal {
        constructor(arg0: T, arg1: boolean);
    }
    export class $TargetGoal extends $Goal implements $TargetGoalAccessor {
        setUnseenMemoryTicks(arg0: number): $TargetGoal;
        setTargetMob(arg0: $LivingEntity): void;
        constructor(arg0: $Mob, arg1: boolean);
        constructor(arg0: $Mob, arg1: boolean, arg2: boolean);
        set unseenMemoryTicks(value: number);
        set targetMob(value: $LivingEntity);
    }
    export class $OwnerHurtTargetGoal extends $TargetGoal {
        constructor(arg0: $TamableAnimal);
    }
    export class $NearestHealableRaiderTargetGoal<T extends $LivingEntity> extends $NearestAttackableTargetGoal<T> {
        decrementCooldown(): void;
        getCooldown(): number;
        constructor(arg0: $Raider, arg1: $Class<T>, arg2: boolean, arg3: $Predicate_<$LivingEntity>);
        get cooldown(): number;
    }
    export class $NearestAttackableWitchTargetGoal<T extends $LivingEntity> extends $NearestAttackableTargetGoal<T> {
        setCanAttack(arg0: boolean): void;
        constructor(arg0: $Raider, arg1: $Class<T>, arg2: number, arg3: boolean, arg4: boolean, arg5: $Predicate_<$LivingEntity>);
        set canAttack(value: boolean);
    }
    export class $NearestAttackableTargetGoal<T extends $LivingEntity> extends $TargetGoal {
        setTarget(arg0: $LivingEntity): void;
        constructor(arg0: $Mob, arg1: $Class<T>, arg2: number, arg3: boolean, arg4: boolean, arg5: $Predicate_<$LivingEntity>);
        constructor(arg0: $Mob, arg1: $Class<T>, arg2: boolean, arg3: boolean);
        constructor(arg0: $Mob, arg1: $Class<T>, arg2: boolean, arg3: $Predicate_<$LivingEntity>);
        constructor(arg0: $Mob, arg1: $Class<T>, arg2: boolean);
        set target(value: $LivingEntity);
    }
}
