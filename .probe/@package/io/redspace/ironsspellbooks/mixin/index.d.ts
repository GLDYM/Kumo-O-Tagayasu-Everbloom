import { $Entity$RemovalReason, $Entity$RemovalReason_ } from "@package/net/minecraft/world/entity";
import { $Set, $UUID } from "@package/java/util";

declare module "@package/io/redspace/ironsspellbooks/mixin" {
    export class $ParticleAccessor {
    }
    export interface $ParticleAccessor {
        irons_spellbooks$stoppedByCollision(arg0: boolean): void;
        irons_spellbooks$z(arg0: number): void;
        irons_spellbooks$zo(arg0: number): void;
        irons_spellbooks$yd(arg0: number): void;
        irons_spellbooks$zd(arg0: number): void;
        irons_spellbooks$gravity(arg0: number): void;
        irons_spellbooks$xd(arg0: number): void;
        irons_spellbooks$yo(arg0: number): void;
        irons_spellbooks$xo(arg0: number): void;
    }
    export class $EntityAccessor {
    }
    export interface $EntityAccessor {
        setRemovalReason(arg0: $Entity$RemovalReason_): void;
        set removalReason(value: $Entity$RemovalReason_);
    }
    /**
     * Values that may be interpreted as {@link $EntityAccessor}.
     */
    export type $EntityAccessor_ = ((arg0: $Entity$RemovalReason) => void);
    export class $VaultServerDataAccessor {
    }
    export interface $VaultServerDataAccessor {
        irons_spellbooks$getRewardedPlayers(): $Set<$UUID>;
        irons_spellbooks$markChanged(): void;
    }
    export class $LivingEntityAccessor {
    }
    export interface $LivingEntityAccessor {
        setLivingEntityFlagInvoker(arg0: number, arg1: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $LivingEntityAccessor}.
     */
    export type $LivingEntityAccessor_ = ((arg0: number, arg1: boolean) => void);
}
