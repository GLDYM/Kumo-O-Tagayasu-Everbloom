import { $Event } from "@package/net/neoforged/bus/api";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Enum } from "@package/java/lang";
import { $List_ } from "@package/java/util";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
import { $DamageModifier, $DamageModifier$Order_, $AttackListener } from "@package/dev/xkmc/l2damagetracker/contents/attack";

declare module "@package/dev/xkmc/l2damagetracker/contents/logging" {
    export class $LoggingBase {
        static writeToFile(arg0: string, arg1: $List_<string>): void;
        logImmunity(): void;
    }
    export class $AttackLogEntry extends $LoggingBase {
        log(arg0: $AttackLogEntry$Stage_, arg1: number): void;
        end(): void;
        static of(arg0: $DamageSource_, arg1: $LivingEntity, arg2: $LivingEntity): $AttackLogEntry;
        processModifier(arg0: $DamageModifier, arg1: string): void;
        logImmunity(arg0: $AttackListener): void;
        recordModifier(arg0: $DamageModifier): void;
        markLateEntry(): void;
        initModifiers(): $AttackLogEntry;
        logNoImmunity(): void;
        eventLayer(arg0: $Event, arg1: number): void;
        startLayer(arg0: $DamageModifier$Order_, arg1: number): void;
        endLayer(arg0: $DamageModifier$Order_, arg1: number): void;
    }
    export class $AttackLogEntry$Stage extends $Enum<$AttackLogEntry$Stage> {
        static values(): $AttackLogEntry$Stage[];
        static valueOf(arg0: string): $AttackLogEntry$Stage;
        static DAMAGE_POST: $AttackLogEntry$Stage;
        static INCOMING_POST: $AttackLogEntry$Stage;
        static INCOMING: $AttackLogEntry$Stage;
        static DAMAGE: $AttackLogEntry$Stage;
    }
    /**
     * Values that may be interpreted as {@link $AttackLogEntry$Stage}.
     */
    export type $AttackLogEntry$Stage_ = "incoming" | "incoming_post" | "damage" | "damage_post";
}
