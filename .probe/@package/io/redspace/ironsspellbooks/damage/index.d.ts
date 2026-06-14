import { $AbstractSpell, $AbstractSpell_ } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/io/redspace/ironsspellbooks/damage" {
    export class $SpellDamageSource extends $DamageSource {
        get(): $DamageSource;
        static source(arg0: $Entity, arg1: $Entity, arg2: $AbstractSpell_): $SpellDamageSource;
        static source(arg0: $Entity, arg1: $AbstractSpell_): $SpellDamageSource;
        getFireTime(): number;
        setIFrames(arg0: number): $SpellDamageSource;
        getFreezeTicks(): number;
        hasPostHitEffects(): boolean;
        setFireTicks(arg0: number): $SpellDamageSource;
        indirect(): $SpellDamageSource;
        spell(): $AbstractSpell;
        setFreezeTicks(arg0: number): $SpellDamageSource;
        setLifestealPercent(arg0: number): $SpellDamageSource;
        getLifestealPercent(): number;
        getIFrames(): number;
        get fireTime(): number;
        set fireTicks(value: number);
    }
}
