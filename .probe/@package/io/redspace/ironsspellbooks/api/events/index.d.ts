import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $SchoolType_, $CastSource, $SchoolType, $CastSource_, $SpellData, $AbstractSpell, $AbstractSpell_ } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $EntityTeleportEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $SpellDamageSource } from "@package/io/redspace/ironsspellbooks/damage";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $LivingEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $MagicData } from "@package/io/redspace/ironsspellbooks/api/magic";
import { $PlayerEvent } from "@package/net/neoforged/neoforge/event/entity/player";

declare module "@package/io/redspace/ironsspellbooks/api/events" {
    export class $SpellOnCastEvent extends $PlayerEvent {
        getSpellLevel(): number;
        getCastSource(): $CastSource;
        getManaCost(): number;
        setSpellLevel(arg0: number): void;
        setManaCost(arg0: number): void;
        getOriginalSpellLevel(): number;
        getOriginalManaCost(): number;
        getSpellId(): string;
        getSchoolType(): $SchoolType;
        constructor(arg0: $Player, arg1: string, arg2: number, arg3: number, arg4: $SchoolType_, arg5: $CastSource_);
        get castSource(): $CastSource;
        get originalSpellLevel(): number;
        get originalManaCost(): number;
        get spellId(): string;
        get schoolType(): $SchoolType;
    }
    export class $ChangeManaEvent extends $PlayerEvent implements $ICancellableEvent {
        getMagicData(): $MagicData;
        getNewMana(): number;
        setNewMana(arg0: number): void;
        getOldMana(): number;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $Player, arg1: $MagicData, arg2: number, arg3: number);
        get magicData(): $MagicData;
        get oldMana(): number;
    }
    export class $SpellSummonEvent<K extends $LivingEntity> extends $LivingEvent {
        getSpellLevel(): number;
        getCreature(): K;
        setCreature(arg0: K): void;
        getSpellId(): $ResourceLocation;
        getCaster(): $LivingEntity;
        constructor(arg0: $LivingEntity, arg1: K, arg2: $ResourceLocation_, arg3: number);
        get spellLevel(): number;
        get spellId(): $ResourceLocation;
        get caster(): $LivingEntity;
    }
    export class $CustomizeScrollModNameEvent extends $Event implements $ICancellableEvent {
        getModId(): string;
        getModName(): $Component;
        setModName(arg0: $Component_): void;
        getOriginalModName(): $Component;
        static resolveModLabel(arg0: string): ($Component) | undefined;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $Component_, arg1: string);
        get modId(): string;
        get originalModName(): $Component;
    }
    export class $SpellPreCastEvent extends $PlayerEvent implements $ICancellableEvent {
        getSpellLevel(): number;
        getCastSource(): $CastSource;
        getSpellId(): string;
        getSchoolType(): $SchoolType;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $Player, arg1: string, arg2: number, arg3: $SchoolType_, arg4: $CastSource_);
        get spellLevel(): number;
        get castSource(): $CastSource;
        get spellId(): string;
        get schoolType(): $SchoolType;
    }
    export class $SetSummonOwnerEvent extends $Event {
        getOwner(): $Entity;
        getSummon(): $Entity;
        constructor(arg0: $Entity, arg1: $Entity);
        get owner(): $Entity;
        get summon(): $Entity;
    }
    export class $CounterSpellEvent extends $Event implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        caster: $Entity;
        target: $Entity;
        constructor(arg0: $Entity, arg1: $Entity);
    }
    export class $SpellHealEvent extends $LivingEvent {
        getSchoolType(): $SchoolType;
        getHealAmount(): number;
        getTargetEntity(): $LivingEntity;
        constructor(arg0: $LivingEntity, arg1: $LivingEntity, arg2: number, arg3: $SchoolType_);
        get schoolType(): $SchoolType;
        get healAmount(): number;
        get targetEntity(): $LivingEntity;
    }
    export class $SpellCooldownAddedEvent$Pre extends $SpellCooldownAddedEvent implements $ICancellableEvent {
        setEffectiveCooldown(arg0: number): void;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: number, arg1: $AbstractSpell_, arg2: $Player, arg3: $CastSource_);
        set effectiveCooldown(value: number);
    }
    export class $SpellDamageEvent extends $LivingEvent implements $ICancellableEvent {
        getAmount(): number;
        setAmount(arg0: number): void;
        getOriginalAmount(): number;
        getSpellDamageSource(): $SpellDamageSource;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: number, arg2: $SpellDamageSource);
        get originalAmount(): number;
        get spellDamageSource(): $SpellDamageSource;
    }
    export class $InscribeSpellEvent extends $PlayerEvent implements $ICancellableEvent {
        getSpellData(): $SpellData;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $Player, arg1: $SpellData);
        get spellData(): $SpellData;
    }
    export class $SpellCooldownAddedEvent$Post extends $SpellCooldownAddedEvent {
        constructor(arg0: number, arg1: $AbstractSpell_, arg2: $Player, arg3: $CastSource_);
    }
    export class $SpellTeleportEvent extends $EntityTeleportEvent {
        getSpell(): $AbstractSpell;
        constructor(arg0: $AbstractSpell_, arg1: $Entity, arg2: number, arg3: number, arg4: number);
        get spell(): $AbstractSpell;
    }
    export class $SpellCooldownAddedEvent extends $Event {
        getEntity(): $Player;
        getCastSource(): $CastSource;
        getSpell(): $AbstractSpell;
        getEffectiveCooldown(): number;
        constructor(arg0: number, arg1: $AbstractSpell_, arg2: $Player, arg3: $CastSource_);
        get entity(): $Player;
        get castSource(): $CastSource;
        get spell(): $AbstractSpell;
        get effectiveCooldown(): number;
    }
    export class $ModifySpellLevelEvent extends $Event {
        getLevel(): number;
        setLevel(arg0: number): void;
        getEntity(): $LivingEntity;
        getBaseLevel(): number;
        getSpell(): $AbstractSpell;
        addLevels(arg0: number): void;
        constructor(arg0: $AbstractSpell_, arg1: $LivingEntity, arg2: number, arg3: number);
        get entity(): $LivingEntity;
        get baseLevel(): number;
        get spell(): $AbstractSpell;
    }
}
