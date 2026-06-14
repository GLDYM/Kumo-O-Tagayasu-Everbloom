import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CastSource, $ICastData, $ICastData_, $CastType, $CastSource_, $SpellData, $AbstractSpell_ } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List } from "@package/java/util";
import { $SyncedSpellData, $PlayerCooldowns, $PlayerRecasts } from "@package/io/redspace/ironsspellbooks/capabilities/magic";
import { $PlayerEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $SpellSelection } from "@package/io/redspace/ironsspellbooks/gui/overlays";

declare module "@package/io/redspace/ironsspellbooks/api/magic" {
    export class $MagicData {
        getCastType(): $CastType;
        getCastSource(): $CastSource;
        getPlayerRecasts(): $PlayerRecasts;
        initiateCast(arg0: $AbstractSpell_, arg1: number, arg2: number, arg3: $CastSource_, arg4: string): void;
        getPlayerCooldowns(): $PlayerCooldowns;
        resetCastingState(): void;
        getCastingSpell(): $SpellData;
        getCastingSpellId(): string;
        static getPlayerMagicData(arg0: $LivingEntity): $MagicData;
        markPoisoned(): void;
        setMana(arg0: number): void;
        getCastingEquipmentSlot(): string;
        getSyncedData(): $SyncedSpellData;
        getCastingSpellLevel(): number;
        resetAdditionalCastData(): void;
        saveNBTData(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        loadNBTData(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        handleCastDuration(): void;
        setSyncedData(arg0: $SyncedSpellData): void;
        isCasting(): boolean;
        getCastDurationRemaining(): number;
        addMana(arg0: number): void;
        getMana(): number;
        getAdditionalCastData(): $ICastData;
        setPlayerCastingItem(arg0: $ItemStack_): void;
        setAdditionalCastData(arg0: $ICastData_): void;
        popMarkedPoison(): boolean;
        getPlayerCastingItem(): $ItemStack;
        getCastCompletionPercent(): number;
        setPlayerRecasts(arg0: $PlayerRecasts): void;
        setServerPlayer(arg0: $ServerPlayer): void;
        getCastDuration(): number;
        static MANA: string;
        static COOLDOWNS: string;
        static RECASTS: string;
        constructor(arg0: $ServerPlayer);
        constructor();
        constructor(arg0: boolean);
        get castType(): $CastType;
        get castSource(): $CastSource;
        get playerCooldowns(): $PlayerCooldowns;
        get castingSpell(): $SpellData;
        get castingSpellId(): string;
        get castingEquipmentSlot(): string;
        get castingSpellLevel(): number;
        get casting(): boolean;
        get castDurationRemaining(): number;
        get castCompletionPercent(): number;
        set serverPlayer(value: $ServerPlayer);
        get castDuration(): number;
    }
    export class $SpellSelectionManager$SpellSelectionEvent extends $PlayerEvent {
        getManager(): $SpellSelectionManager;
        addSelectionOption(arg0: $SpellData, arg1: string, arg2: number): void;
        addSelectionOption(arg0: $SpellData, arg1: string, arg2: number, arg3: number): void;
        constructor(arg0: $Player, arg1: $SpellSelectionManager);
        get manager(): $SpellSelectionManager;
    }
    export class $SpellSelectionManager$SelectionOption {
        getCastSource(): $CastSource;
        globalIndex: number;
        spellData: $SpellData;
        slot: string;
        slotIndex: number;
        constructor(arg0: $SpellData, arg1: string, arg2: number, arg3: number);
        get castSource(): $CastSource;
    }
    export class $SpellSelectionManager {
        getSelectedSpellData(): $SpellData;
        getSelectionIndex(): number;
        getSpellSlot(arg0: number): $SpellSelectionManager$SelectionOption;
        getSpellCount(): number;
        makeSelection(arg0: number): void;
        getAllSpells(): $List<$SpellSelectionManager$SelectionOption>;
        getSpellData(arg0: number): $SpellData;
        getSelection(): $SpellSelectionManager$SelectionOption;
        getSpellForSlot(arg0: string, arg1: number): $SpellData;
        getGlobalSelectionIndex(): number;
        getCurrentSelection(): $SpellSelection;
        getSpellsForSlot(arg0: string): $List<$SpellSelectionManager$SelectionOption>;
        static OFFHAND: string;
        static MAINHAND: string;
        constructor(arg0: $Player);
        get selectedSpellData(): $SpellData;
        get selectionIndex(): number;
        get spellCount(): number;
        get allSpells(): $List<$SpellSelectionManager$SelectionOption>;
        get selection(): $SpellSelectionManager$SelectionOption;
        get globalSelectionIndex(): number;
        get currentSelection(): $SpellSelection;
    }
}
