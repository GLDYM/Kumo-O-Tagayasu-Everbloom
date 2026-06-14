import { $Level } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $ITooltip } from "@package/snownee/jade/api";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $EquipmentSlot, $ExperienceOrb, $EquipmentSlot_, $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $IMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/api/entity";
import { $AbstractArrow } from "@package/net/minecraft/world/entity/projectile";
import { $List, $List_ } from "@package/java/util";
import { $MaidFishingHook } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/projectile";
import { $EventGroup } from "@package/dev/latvian/mods/kubejs/event";
import { $IPluginConfig } from "@package/snownee/jade/api/config";
import { $IMaidTask } from "@package/com/github/tartaricacid/touhoulittlemaid/api/task";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $NonNullList } from "@package/net/minecraft/core";
import { $EntityPowerPoint, $EntityTombstone } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/item";
import { $LivingEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";
export * as client from "@package/com/github/tartaricacid/touhoulittlemaid/api/event/client";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/api/event" {
    export class $MaidBaubleChangeEvent$PutOn extends $MaidBaubleChangeEvent {
        constructor(arg0: $EntityMaid, arg1: $ItemStack_);
    }
    export class $MaidTamedEvent extends $LivingEvent {
        getPlayer(): $Player;
        getMaid(): $EntityMaid;
        isOwnerConversion(): boolean;
        constructor(arg0: $EntityMaid, arg1: $Player, arg2: boolean);
        get player(): $Player;
        get maid(): $EntityMaid;
        get ownerConversion(): boolean;
    }
    export class $MaidPickupEvent$ArrowResult extends $MaidPickupEvent {
        getArrow(): $AbstractArrow;
        constructor(arg0: $EntityMaid, arg1: $AbstractArrow, arg2: boolean);
        get arrow(): $AbstractArrow;
    }
    export class $MaidPlaySoundEvent extends $Event implements $ICancellableEvent {
        getMaid(): $EntityMaid;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $EntityMaid);
        get maid(): $EntityMaid;
    }
    export class $MaidAndItemTransformEvent extends $Event {
        getItem(): $ItemStack;
        getData(): $CompoundTag;
        getMaid(): $EntityMaid;
        constructor(arg0: $EntityMaid, arg1: $ItemStack_, arg2: $CompoundTag_);
        get item(): $ItemStack;
        get data(): $CompoundTag;
        get maid(): $EntityMaid;
    }
    export class $MaidHurtTarget$Pre extends $MaidHurtTarget implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $EntityMaid, arg1: $Entity);
    }
    export class $AddJadeInfoEvent extends $Event {
        getPluginConfig(): $IPluginConfig;
        getTooltip(): $ITooltip;
        getMaid(): $EntityMaid;
        constructor(arg0: $EntityMaid, arg1: $ITooltip, arg2: $IPluginConfig);
        get pluginConfig(): $IPluginConfig;
        get tooltip(): $ITooltip;
        get maid(): $EntityMaid;
    }
    export class $MaidFavorabilityLevelChangeEvent extends $LivingEvent {
        getMaid(): $EntityMaid;
        getNewLevel(): number;
        getOldLevel(): number;
        constructor(arg0: $EntityMaid, arg1: number, arg2: number);
        get maid(): $EntityMaid;
        get newLevel(): number;
        get oldLevel(): number;
    }
    export class $MaidTaskEnableEvent extends $Event implements $ICancellableEvent {
        getEnableConditionDesc(): $List<$Pair<string, $Predicate<$EntityMaid>>>;
        addEnableConditionDesc(arg0: string, arg1: $Predicate_<$EntityMaid>): void;
        getTargetTask(): $IMaidTask;
        getEntityMaid(): $EntityMaid;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $IMaidTask, arg1: $EntityMaid, arg2: $List_<$Pair<string, $Predicate_<$EntityMaid>>>);
        constructor(arg0: $IMaidTask, arg1: $EntityMaid);
        get enableConditionDesc(): $List<$Pair<string, $Predicate<$EntityMaid>>>;
        get targetTask(): $IMaidTask;
        get entityMaid(): $EntityMaid;
    }
    export class $ConvertMaidEvent extends $Event {
        getEntity(): $Mob;
        getMaid(): $IMaid;
        setMaid(arg0: $IMaid): void;
        constructor(arg0: $Mob);
        get entity(): $Mob;
    }
    export class $AddTopInfoEvent extends $Event {
    }
    export class $MaidWirelessIOEvent extends $Event implements $ICancellableEvent {
        getMaidInv(): $IItemHandler;
        getMaid(): $EntityMaid;
        getChestInv(): $IItemHandler;
        getFilterInv(): $IItemHandler;
        isBlacklist(): boolean;
        getSlotConfig(): $List<boolean>;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $EntityMaid, arg1: $IItemHandler, arg2: $IItemHandler, arg3: $IItemHandler, arg4: boolean, arg5: $List_<boolean>);
        get maidInv(): $IItemHandler;
        get maid(): $EntityMaid;
        get chestInv(): $IItemHandler;
        get filterInv(): $IItemHandler;
        get blacklist(): boolean;
        get slotConfig(): $List<boolean>;
    }
    export class $MaidDeathEvent extends $LivingEvent implements $ICancellableEvent {
        getSource(): $DamageSource;
        getMaid(): $EntityMaid;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $EntityMaid, arg1: $DamageSource_);
        get source(): $DamageSource;
        get maid(): $EntityMaid;
    }
    export class $MaidFishedEvent extends $Event implements $ICancellableEvent {
        damageRodBy(arg0: number): void;
        getRodDamage(): number;
        getDrops(): $NonNullList<$ItemStack>;
        getHook(): $MaidFishingHook;
        getMaid(): $EntityMaid;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $List_<$ItemStack_>, arg1: number, arg2: $MaidFishingHook);
        get rodDamage(): number;
        get drops(): $NonNullList<$ItemStack>;
        get hook(): $MaidFishingHook;
        get maid(): $EntityMaid;
    }
    export class $MaidTypeNameEvent extends $Event {
        getTypeName(): $Component;
        getMaid(): $EntityMaid;
        setTypeName(arg0: $Component_): void;
        constructor(arg0: $EntityMaid);
        get maid(): $EntityMaid;
    }
    export class $MaidAndItemTransformEvent$ToItem extends $MaidAndItemTransformEvent {
        constructor(arg0: $EntityMaid, arg1: $ItemStack_, arg2: $CompoundTag_);
    }
    export class $MaidEquipEvent extends $LivingEvent {
        getSlot(): $EquipmentSlot;
        getStack(): $ItemStack;
        getMaid(): $EntityMaid;
        constructor(arg0: $EntityMaid, arg1: $EquipmentSlot_, arg2: $ItemStack_);
        get slot(): $EquipmentSlot;
        get stack(): $ItemStack;
        get maid(): $EntityMaid;
    }
    export class $MaidAndItemTransformEvent$ToMaid extends $MaidAndItemTransformEvent {
        constructor(arg0: $EntityMaid, arg1: $ItemStack_, arg2: $CompoundTag_);
    }
    export class $MaidHurtEvent extends $LivingEvent implements $ICancellableEvent {
        getSource(): $DamageSource;
        getAmount(): number;
        setAmount(arg0: number): void;
        getMaid(): $EntityMaid;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $EntityMaid, arg1: $DamageSource_, arg2: number);
        get source(): $DamageSource;
        get maid(): $EntityMaid;
    }
    export class $MaidBaubleChangeEvent extends $LivingEvent {
        getMaid(): $EntityMaid;
        getBaubleItem(): $ItemStack;
        constructor(arg0: $EntityMaid, arg1: $ItemStack_);
        get maid(): $EntityMaid;
        get baubleItem(): $ItemStack;
    }
    export class $MaidPickupEvent extends $Event implements $ICancellableEvent {
        setCanPickup(arg0: boolean): void;
        isCanPickup(): boolean;
        getMaid(): $EntityMaid;
        isSimulate(): boolean;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $EntityMaid, arg1: boolean);
        get maid(): $EntityMaid;
        get simulate(): boolean;
    }
    export class $MaidRequestItemEvent extends $Event implements $ICancellableEvent {
        getItemFilter(): $Predicate<$ItemStack>;
        hasRequestedItem(): boolean;
        setRequestedItem(arg0: $ItemStack_): void;
        getMaid(): $EntityMaid;
        getRequestedItem(): $ItemStack;
        getMaxCount(): number;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $EntityMaid, arg1: $Predicate_<$ItemStack>, arg2: number);
        get itemFilter(): $Predicate<$ItemStack>;
        get maid(): $EntityMaid;
        get maxCount(): number;
    }
    export class $RegisterKubeJSEvent extends $Event {
        getGroup(): $EventGroup;
        constructor(arg0: $EventGroup);
        get group(): $EventGroup;
    }
    export class $MaidPickupEvent$ItemResultPre extends $MaidPickupEvent {
        getEntityItem(): $ItemEntity;
        constructor(arg0: $EntityMaid, arg1: $ItemEntity, arg2: boolean);
        get entityItem(): $ItemEntity;
    }
    export class $MaidWirelessIOEvent$MaidToChest extends $MaidWirelessIOEvent {
        constructor(arg0: $EntityMaid, arg1: $IItemHandler, arg2: $IItemHandler, arg3: $IItemHandler, arg4: boolean, arg5: $List_<boolean>);
    }
    export class $MaidPickupEvent$ItemResultPost extends $MaidPickupEvent {
        getPickupItem(): $ItemStack;
        constructor(arg0: $EntityMaid, arg1: $ItemStack_);
        get pickupItem(): $ItemStack;
    }
    export class $MaidTombstoneEvent extends $Event implements $ICancellableEvent {
        getMaid(): $EntityMaid;
        getTombstone(): $EntityTombstone;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $EntityMaid, arg1: $EntityTombstone);
        get maid(): $EntityMaid;
        get tombstone(): $EntityTombstone;
    }
    export class $MaidAttackEvent extends $LivingEvent implements $ICancellableEvent {
        getSource(): $DamageSource;
        getAmount(): number;
        getMaid(): $EntityMaid;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $EntityMaid, arg1: $DamageSource_, arg2: number);
        get source(): $DamageSource;
        get amount(): number;
        get maid(): $EntityMaid;
    }
    export class $MaidBackpackChangeEvent$PutOn extends $MaidBackpackChangeEvent {
        constructor(arg0: $EntityMaid, arg1: $ItemStack_);
    }
    export class $MaidTickEvent extends $LivingEvent implements $ICancellableEvent {
        getMaid(): $EntityMaid;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $EntityMaid);
        get maid(): $EntityMaid;
    }
    export class $MaidPickupEvent$PowerPointResult extends $MaidPickupEvent {
        getPowerPoint(): $EntityPowerPoint;
        constructor(arg0: $EntityMaid, arg1: $EntityPowerPoint, arg2: boolean);
        get powerPoint(): $EntityPowerPoint;
    }
    export class $MaidHurtTarget$Post extends $MaidHurtTarget {
        isHurt(): boolean;
        constructor(arg0: $EntityMaid, arg1: $Entity, arg2: boolean);
        get hurt(): boolean;
    }
    export class $MaidDamageEvent extends $LivingEvent implements $ICancellableEvent {
        getSource(): $DamageSource;
        getAmount(): number;
        setAmount(arg0: number): void;
        getMaid(): $EntityMaid;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $EntityMaid, arg1: $DamageSource_, arg2: number);
        get source(): $DamageSource;
        get maid(): $EntityMaid;
    }
    export class $MaidAfterEatEvent extends $Event {
        getFoodAfterEat(): $ItemStack;
        getMaid(): $EntityMaid;
        constructor(arg0: $EntityMaid, arg1: $ItemStack_);
        get foodAfterEat(): $ItemStack;
        get maid(): $EntityMaid;
    }
    export class $MaidBackpackChangeEvent$TakeOff extends $MaidBackpackChangeEvent {
        constructor(arg0: $EntityMaid, arg1: $ItemStack_);
    }
    export class $MaidWirelessIOEvent$ChestToMaid extends $MaidWirelessIOEvent {
        constructor(arg0: $EntityMaid, arg1: $IItemHandler, arg2: $IItemHandler, arg3: $IItemHandler, arg4: boolean, arg5: $List_<boolean>);
    }
    export class $InteractMaidEvent extends $Event implements $ICancellableEvent {
        getStack(): $ItemStack;
        getPlayer(): $Player;
        getMaid(): $EntityMaid;
        getWorld(): $Level;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $Player, arg1: $EntityMaid, arg2: $ItemStack_);
        get stack(): $ItemStack;
        get player(): $Player;
        get maid(): $EntityMaid;
        get world(): $Level;
    }
    export class $MaidBackpackChangeEvent extends $LivingEvent {
        getItemStack(): $ItemStack;
        getMaid(): $EntityMaid;
        constructor(arg0: $EntityMaid, arg1: $ItemStack_);
        get itemStack(): $ItemStack;
        get maid(): $EntityMaid;
    }
    export class $MaidHurtTarget extends $LivingEvent {
        getTarget(): $Entity;
        getMaid(): $EntityMaid;
        constructor(arg0: $EntityMaid, arg1: $Entity);
        get target(): $Entity;
        get maid(): $EntityMaid;
    }
    export class $MaidPickupEvent$ExperienceResult extends $MaidPickupEvent {
        getExperienceOrb(): $ExperienceOrb;
        constructor(arg0: $EntityMaid, arg1: $ExperienceOrb, arg2: boolean);
        get experienceOrb(): $ExperienceOrb;
    }
    export class $MaidBaubleChangeEvent$TakeOff extends $MaidBaubleChangeEvent {
        constructor(arg0: $EntityMaid, arg1: $ItemStack_);
    }
}
