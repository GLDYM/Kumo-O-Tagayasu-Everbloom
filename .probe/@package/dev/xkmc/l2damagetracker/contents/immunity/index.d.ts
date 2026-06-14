import { $EntityInvulnerabilityCheckEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $LivingDamageEvent$Pre, $LivingIncomingDamageEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $AttackLogEntry } from "@package/dev/xkmc/l2damagetracker/contents/logging";

declare module "@package/dev/xkmc/l2damagetracker/contents/immunity" {
    export class $ImmunityDataExtra {
        static get(arg0: $LivingDamageEvent$Pre): $ImmunityData;
        static get(arg0: $LivingIncomingDamageEvent): $ImmunityData;
        static get(arg0: $EntityInvulnerabilityCheckEvent): $ImmunityData;
    }
    export interface $ImmunityDataExtra {
        l2damagetracker$getExtra(): $ImmunityData;
    }
    /**
     * Values that may be interpreted as {@link $ImmunityDataExtra}.
     */
    export type $ImmunityDataExtra_ = (() => $ImmunityData);
    export class $ImmunityData {
        log(): void;
        end(): void;
        setup(arg0: $EntityInvulnerabilityCheckEvent): void;
        attach(arg0: $AttackLogEntry): void;
        constructor();
        set up(value: $EntityInvulnerabilityCheckEvent);
    }
}
