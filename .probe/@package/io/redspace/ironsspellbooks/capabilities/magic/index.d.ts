import { $ListTag, $CompoundTag, $ListTag_, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CastSource, $CastSource_, $AbstractSpell_, $ICastDataSerializable } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $PlayerRecastsAccessor } from "@package/com/github/yimeng261/maidspell/mixin/iss/accessor";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SpinAttackType, $SpinAttackType_ } from "@package/io/redspace/ironsspellbooks/player";
import { $List, $Map_, $Map } from "@package/java/util";
import { $MagicData } from "@package/io/redspace/ironsspellbooks/api/magic";
import { $SpellSelection } from "@package/io/redspace/ironsspellbooks/gui/overlays";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ISerializable } from "@package/io/redspace/ironsspellbooks/api/network";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enum } from "@package/java/lang";

declare module "@package/io/redspace/ironsspellbooks/capabilities/magic" {
    export class $SyncedSpellData {
        static write(arg0: $FriendlyByteBuf, arg1: $SyncedSpellData): void;
        static read(arg0: $FriendlyByteBuf): $SyncedSpellData;
        isSpellLearned(arg0: $AbstractSpell_): boolean;
        getCastingSpellId(): string;
        syncToPlayer(arg0: $ServerPlayer): void;
        getCastingEquipmentSlot(): string;
        getPersistentData(arg0: $ServerPlayer): $SyncedSpellData;
        setSpinAttackType(arg0: $SpinAttackType_): void;
        getCastingSpellLevel(): number;
        saveNBTData(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        loadNBTData(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        isCasting(): boolean;
        addHeartstopDamage(arg0: number): void;
        getSpinAttackType(): $SpinAttackType;
        subtractEvasionHit(): void;
        setEvasionHitsRemaining(arg0: number): void;
        getEvasionHitsRemaining(): number;
        doSync(): void;
        setHeartstopAccumulatedDamage(arg0: number): void;
        getHeartstopAccumulatedDamage(): number;
        setIsCasting(arg0: boolean, arg1: string, arg2: number, arg3: string): void;
        getServerPlayerId(): number;
        getSpellSelection(): $SpellSelection;
        forgetAllSpells(): void;
        setSpellSelection(arg0: $SpellSelection): void;
        handler$jhd000$touhou_little_maid_spell$afterDoSync(arg0: $CallbackInfo): void;
        learnSpell(arg0: $AbstractSpell_): void;
        learnSpell(arg0: $AbstractSpell_, arg1: boolean): void;
        constructor(arg0: number);
        constructor(arg0: $LivingEntity);
        get castingSpellId(): string;
        get castingEquipmentSlot(): string;
        get castingSpellLevel(): number;
        get casting(): boolean;
        get serverPlayerId(): number;
    }
    export class $PlayerRecasts implements $PlayerRecastsAccessor {
        removeAll(arg0: $RecastResult_): void;
        tick(arg0: number): void;
        addRecast(arg0: $RecastInstance, arg1: $MagicData): boolean;
        hasRecastForSpell(arg0: $AbstractSpell_): boolean;
        hasRecastForSpell(arg0: string): boolean;
        getRecastInstance(arg0: string): $RecastInstance;
        removeRecast(arg0: $RecastInstance, arg1: $RecastResult_): void;
        removeRecast(arg0: string): void;
        syncToPlayer(arg0: $RecastInstance): void;
        saveNBTData(arg0: $HolderLookup$Provider): $ListTag;
        loadNBTData(arg0: $ListTag_, arg1: $HolderLookup$Provider): void;
        decrementRecastCount(arg0: string): void;
        decrementRecastCount(arg0: $AbstractSpell_): void;
        syncAllToPlayer(): void;
        tickRecasts(): void;
        forceAddRecast(arg0: $RecastInstance): void;
        hasRecastsActive(): boolean;
        getActiveRecasts(): $List<$RecastInstance>;
        isRecastActive(arg0: $RecastInstance): boolean;
        getAllRecasts(): $List<$RecastInstance>;
        syncRemoveToPlayer(arg0: string): void;
        getRemainingRecastsForSpell(arg0: $AbstractSpell_): number;
        getRemainingRecastsForSpell(arg0: string): number;
        maidspell$getRecastLookup(): $Map<string, $RecastInstance>;
        constructor(arg0: $Map_<string, $RecastInstance>);
        constructor(arg0: $ServerPlayer);
        constructor();
        get activeRecasts(): $List<$RecastInstance>;
        get allRecasts(): $List<$RecastInstance>;
    }
    export class $RecastResult extends $Enum<$RecastResult> {
        static values(): $RecastResult[];
        static valueOf(arg0: string): $RecastResult;
        isSuccess(): boolean;
        isFailure(): boolean;
        static USER_CANCEL: $RecastResult;
        static DEATH: $RecastResult;
        static COMMAND: $RecastResult;
        static TIMEOUT: $RecastResult;
        static COUNTERSPELL: $RecastResult;
        static USED_ALL_RECASTS: $RecastResult;
        get success(): boolean;
        get failure(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RecastResult}.
     */
    export type $RecastResult_ = "timeout" | "counterspell" | "death" | "used_all_recasts" | "command" | "user_cancel";
    export class $PlayerCooldowns {
        tick(arg0: number): void;
        getCooldownPercent(arg0: $AbstractSpell_): number;
        decrementCooldown(arg0: $CooldownInstance, arg1: number): boolean;
        removeCooldown(arg0: string): boolean;
        syncToPlayer(arg0: $ServerPlayer): void;
        addCooldown(arg0: $AbstractSpell_, arg1: number, arg2: number): void;
        addCooldown(arg0: string, arg1: number): void;
        addCooldown(arg0: string, arg1: number, arg2: number): void;
        addCooldown(arg0: $AbstractSpell_, arg1: number): void;
        isOnCooldown(arg0: $AbstractSpell_): boolean;
        saveNBTData(): $ListTag;
        loadNBTData(arg0: $ListTag_): void;
        clearCooldowns(): void;
        getSpellCooldowns(): $Map<string, $CooldownInstance>;
        hasCooldownsActive(): boolean;
        setTickBuffer(arg0: number): void;
        static SPELL_ID: string;
        static COOLDOWN_REMAINING: string;
        static SPELL_COOLDOWN: string;
        constructor();
        get spellCooldowns(): $Map<string, $CooldownInstance>;
        set tickBuffer(value: number);
    }
    export class $CooldownInstance {
        decrement(): void;
        getCooldownPercent(): number;
        getSpellCooldown(): number;
        getCooldownRemaining(): number;
        decrementBy(arg0: number): void;
        constructor(arg0: number);
        constructor(arg0: number, arg1: number);
        get cooldownPercent(): number;
        get spellCooldown(): number;
        get cooldownRemaining(): number;
    }
    export class $RecastInstance implements $ISerializable, $INBTSerializable<$CompoundTag> {
        getSpellLevel(): number;
        getCastSource(): $CastSource;
        getCastData(): $ICastDataSerializable;
        getSpellId(): string;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getRemainingRecasts(): number;
        writeToBuffer(arg0: $FriendlyByteBuf): void;
        readFromBuffer(arg0: $FriendlyByteBuf): void;
        getTicksRemaining(): number;
        getTicksToLive(): number;
        getTotalRecasts(): number;
        constructor();
        constructor(arg0: string, arg1: number, arg2: number, arg3: number, arg4: $CastSource_, arg5: $ICastDataSerializable);
        get spellLevel(): number;
        get castSource(): $CastSource;
        get castData(): $ICastDataSerializable;
        get spellId(): string;
        get remainingRecasts(): number;
        get ticksRemaining(): number;
        get ticksToLive(): number;
        get totalRecasts(): number;
    }
}
