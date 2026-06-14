import { $Level } from "@package/net/minecraft/world/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $ITooltip } from "@package/snownee/jade/api";
import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $EquipmentSlot, $ExperienceOrb, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $AbstractArrow } from "@package/net/minecraft/world/entity/projectile";
import { $List } from "@package/java/util";
import { $MaidTickEvent, $MaidPickupEvent$PowerPointResult, $MaidAfterEatEvent, $MaidPickupEvent$ItemResultPost, $MaidTamedEvent, $InteractMaidEvent, $MaidFishedEvent, $MaidAttackEvent, $AddJadeInfoEvent, $MaidPickupEvent$ItemResultPre, $MaidTaskEnableEvent, $AddTopInfoEvent, $MaidEquipEvent, $MaidPickupEvent$ArrowResult, $MaidPickupEvent$ExperienceResult, $MaidDamageEvent, $MaidPlaySoundEvent, $MaidHurtEvent, $MaidDeathEvent } from "@package/com/github/tartaricacid/touhoulittlemaid/api/event";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $MaidFishingHook } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/projectile";
import { $IPluginConfig } from "@package/snownee/jade/api/config";
import { $KubeLivingEntityEvent } from "@package/dev/latvian/mods/kubejs/entity";
import { $IMaidTask } from "@package/com/github/tartaricacid/touhoulittlemaid/api/task";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $RegistryAccess, $NonNullList } from "@package/net/minecraft/core";
import { $EntityPowerPoint } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/item";
import { $Object } from "@package/java/lang";
import { $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/compat/kubejs/event/common" {
    export class $MaidAttackEventJS implements $KubeLivingEntityEvent {
        getSource(): $DamageSource;
        getEntity(): $LivingEntity;
        getAmount(): number;
        getMaid(): $EntityMaid;
        getLevel(): $Level;
        getPlayer(): $Player;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(arg0: $MaidAttackEvent);
        get source(): $DamageSource;
        get entity(): $LivingEntity;
        get amount(): number;
        get maid(): $EntityMaid;
        get level(): $Level;
        get player(): $Player;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $MaidDamageEventJS implements $KubeLivingEntityEvent {
        getSource(): $DamageSource;
        getEntity(): $LivingEntity;
        getAmount(): number;
        setAmount(arg0: number): void;
        getMaid(): $EntityMaid;
        getLevel(): $Level;
        getPlayer(): $Player;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(arg0: $MaidDamageEvent);
        get source(): $DamageSource;
        get entity(): $LivingEntity;
        get maid(): $EntityMaid;
        get level(): $Level;
        get player(): $Player;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $MaidTamedEventJS implements $KubeLivingEntityEvent {
        getEntity(): $LivingEntity;
        getPlayer(): $Player;
        getMaid(): $EntityMaid;
        isOwnerConversion(): boolean;
        getLevel(): $Level;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(arg0: $MaidTamedEvent);
        get entity(): $LivingEntity;
        get player(): $Player;
        get maid(): $EntityMaid;
        get ownerConversion(): boolean;
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $MaidHurtEventJS implements $KubeLivingEntityEvent {
        getSource(): $DamageSource;
        getEntity(): $LivingEntity;
        getAmount(): number;
        setAmount(arg0: number): void;
        getMaid(): $EntityMaid;
        getLevel(): $Level;
        getPlayer(): $Player;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(arg0: $MaidHurtEvent);
        get source(): $DamageSource;
        get entity(): $LivingEntity;
        get maid(): $EntityMaid;
        get level(): $Level;
        get player(): $Player;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $MaidPickupEventJS$ExperienceResult extends $MaidPickupEventJS {
        getExperienceOrb(): $ExperienceOrb;
        constructor(arg0: $MaidPickupEvent$ExperienceResult);
        get experienceOrb(): $ExperienceOrb;
    }
    export class $MaidAfterEatEventJS implements $KubeEvent {
        getFoodAfterEat(): $ItemStack;
        getMaid(): $EntityMaid;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(arg0: $MaidAfterEatEvent);
        get foodAfterEat(): $ItemStack;
        get maid(): $EntityMaid;
    }
    export class $MaidPlaySoundEventJS implements $KubeEvent {
        getMaid(): $EntityMaid;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(arg0: $MaidPlaySoundEvent);
        get maid(): $EntityMaid;
    }
    export class $MaidTaskEnableEventJS implements $KubeEvent {
        getEnableConditionDesc(): $List<$Pair<string, $Predicate<$EntityMaid>>>;
        addEnableConditionDesc(arg0: string, arg1: $Predicate_<$EntityMaid>): void;
        getTargetTask(): $IMaidTask;
        getEntityMaid(): $EntityMaid;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(arg0: $MaidTaskEnableEvent);
        get enableConditionDesc(): $List<$Pair<string, $Predicate<$EntityMaid>>>;
        get targetTask(): $IMaidTask;
        get entityMaid(): $EntityMaid;
    }
    export class $MaidPickupEventJS$ArrowResult extends $MaidPickupEventJS {
        getArrow(): $AbstractArrow;
        constructor(arg0: $MaidPickupEvent$ArrowResult);
        get arrow(): $AbstractArrow;
    }
    export class $MaidPickupEventJS$ItemResultPost extends $MaidPickupEventJS {
        getPickupItem(): $ItemStack;
        constructor(arg0: $MaidPickupEvent$ItemResultPost);
        get pickupItem(): $ItemStack;
    }
    export class $InteractMaidEventJS implements $KubeEvent {
        getStack(): $ItemStack;
        getPlayer(): $Player;
        getMaid(): $EntityMaid;
        getWorld(): $Level;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(arg0: $InteractMaidEvent);
        get stack(): $ItemStack;
        get player(): $Player;
        get maid(): $EntityMaid;
        get world(): $Level;
    }
    export class $AddJadeInfoEventJS implements $KubeEvent {
        getPluginConfig(): $IPluginConfig;
        getTooltip(): $ITooltip;
        getMaid(): $EntityMaid;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(arg0: $AddJadeInfoEvent);
        get pluginConfig(): $IPluginConfig;
        get tooltip(): $ITooltip;
        get maid(): $EntityMaid;
    }
    export class $MaidTickEventJS implements $KubeLivingEntityEvent {
        getMaid(): $EntityMaid;
        getLevel(): $Level;
        getPlayer(): $Player;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        getEntity(): $LivingEntity;
        constructor(arg0: $MaidTickEvent);
        get maid(): $EntityMaid;
        get level(): $Level;
        get player(): $Player;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
        get entity(): $LivingEntity;
    }
    export class $MaidPickupEventJS implements $KubeEvent {
        setCanPickup(arg0: boolean): void;
        isCanPickup(): boolean;
        getMaid(): $EntityMaid;
        isSimulate(): boolean;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(arg0: $EntityMaid, arg1: boolean);
        get maid(): $EntityMaid;
        get simulate(): boolean;
    }
    export class $MaidPickupEventJS$PowerPointResult extends $MaidPickupEventJS {
        getPowerPoint(): $EntityPowerPoint;
        constructor(arg0: $MaidPickupEvent$PowerPointResult);
        get powerPoint(): $EntityPowerPoint;
    }
    export class $MaidEquipEventJS implements $KubeLivingEntityEvent {
        getSlot(): $EquipmentSlot;
        getStack(): $ItemStack;
        getEntity(): $LivingEntity;
        getMaid(): $EntityMaid;
        getLevel(): $Level;
        getPlayer(): $Player;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(arg0: $MaidEquipEvent);
        get slot(): $EquipmentSlot;
        get stack(): $ItemStack;
        get entity(): $LivingEntity;
        get maid(): $EntityMaid;
        get level(): $Level;
        get player(): $Player;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $MaidDeathEventJS implements $KubeLivingEntityEvent {
        getSource(): $DamageSource;
        getEntity(): $LivingEntity;
        getMaid(): $EntityMaid;
        getLevel(): $Level;
        getPlayer(): $Player;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(arg0: $MaidDeathEvent);
        get source(): $DamageSource;
        get entity(): $LivingEntity;
        get maid(): $EntityMaid;
        get level(): $Level;
        get player(): $Player;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $AddTopInfoEventJS implements $KubeEvent {
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(arg0: $AddTopInfoEvent);
    }
    export class $MaidPickupEventJS$ItemResultPre extends $MaidPickupEventJS {
        getEntityItem(): $ItemEntity;
        constructor(arg0: $MaidPickupEvent$ItemResultPre);
        get entityItem(): $ItemEntity;
    }
    export class $MaidFishedEventJS implements $KubeEvent {
        damageRodBy(arg0: number): void;
        getRodDamage(): number;
        getDrops(): $NonNullList<$ItemStack>;
        getHook(): $MaidFishingHook;
        getMaid(): $EntityMaid;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(arg0: $MaidFishedEvent);
        get rodDamage(): number;
        get drops(): $NonNullList<$ItemStack>;
        get hook(): $MaidFishingHook;
        get maid(): $EntityMaid;
    }
}
