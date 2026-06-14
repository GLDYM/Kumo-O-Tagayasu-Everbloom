import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $SpellData, $AbstractSpell } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $IMagicCastingState$CastingPhase_, $IMagicCastingState, $IMagicCastingState$CastingPhase } from "@package/com/github/tartaricacid/touhoulittlemaid/api/animation";
import { $SyncedSpellData } from "@package/io/redspace/ironsspellbooks/capabilities/magic";

declare module "@package/com/github/yimeng261/maidspell/client/animation" {
    export class $MagicCastingAnimateState implements $IMagicCastingState {
        isCancelled(): boolean;
        getCurrentPhase(): $IMagicCastingState$CastingPhase;
        getCastingSpell(): $SpellData;
        updateState(arg0: $EntityMaid, arg1: $SyncedSpellData): void;
        setCancelled(arg0: boolean): void;
        getInstantCastSpellType(): $AbstractSpell;
        clearInstantCastSpellType(): void;
        setCurrentPhase(arg0: $IMagicCastingState$CastingPhase_): void;
        constructor(arg0: $IMagicCastingState$CastingPhase_);
        constructor(arg0: $IMagicCastingState$CastingPhase_, arg1: boolean);
        get castingSpell(): $SpellData;
        get instantCastSpellType(): $AbstractSpell;
    }
}
