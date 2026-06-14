import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $PlayerDetector$EntitySelector, $PlayerDetector_, $PlayerDetector } from "@package/net/minecraft/world/level/block/entity/trialspawner";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UUID, $Set, $List_ } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $VaultServerDataAccessor } from "@package/io/redspace/ironsspellbooks/mixin";
import { $Enum, $Record } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/world/level/block/entity/vault" {
    export class $VaultBlockEntity$Server {
        static tick(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: $VaultConfig_, arg4: $VaultServerData, arg5: $VaultSharedData): void;
        static tryInsertKey(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: $VaultConfig_, arg4: $VaultServerData, arg5: $VaultSharedData, arg6: $Player, arg7: $ItemStack_): void;
        constructor();
    }
    export class $VaultBlockEntity extends $BlockEntity {
        getConfig(): $VaultConfig;
        setConfig(arg0: $VaultConfig_): void;
        getSharedData(): $VaultSharedData;
        getClientData(): $VaultClientData;
        getServerData(): $VaultServerData;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        config: $VaultConfig;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get sharedData(): $VaultSharedData;
        get clientData(): $VaultClientData;
        get serverData(): $VaultServerData;
    }
    export class $VaultBlockEntity$Client {
        static tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $VaultClientData, arg4: $VaultSharedData): void;
        static emitDeactivationParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $ParticleOptions_): void;
        static emitActivationParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $VaultSharedData, arg4: $ParticleOptions_): void;
        static shouldDisplayActiveEffects(arg0: $VaultSharedData): boolean;
        constructor();
    }
    export class $VaultClientData {
        currentSpin(): number;
        previousSpin(): number;
        static ROTATION_SPEED: number;
    }
    export class $VaultConfig extends $Record {
        lootTable(): $ResourceKey<$LootTable>;
        activationRange(): number;
        playerDetector(): $PlayerDetector;
        deactivationRange(): number;
        entitySelector(): $PlayerDetector$EntitySelector;
        keyItem(): $ItemStack;
        overrideLootTableToDisplay(): ($ResourceKey<$LootTable>) | undefined;
        constructor(arg0: $ResourceKey_<$LootTable>, arg1: number, arg2: number, arg3: $ItemStack_, arg4: ($ResourceKey_<$LootTable>) | undefined, arg5: $PlayerDetector_, arg6: $PlayerDetector$EntitySelector);
        constructor(arg0: $ResourceKey_<$LootTable>, arg1: number, arg2: number, arg3: $ItemStack_, arg4: ($ResourceKey_<$LootTable>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $VaultConfig}.
     */
    export type $VaultConfig_ = { keyItem?: $ItemStack_, activationRange?: number, overrideLootTableToDisplay?: ($ResourceKey_<$LootTable>) | undefined, deactivationRange?: number, entitySelector?: $PlayerDetector$EntitySelector, lootTable?: $ResourceKey_<$LootTable>, playerDetector?: $PlayerDetector_,  } | [keyItem?: $ItemStack_, activationRange?: number, overrideLootTableToDisplay?: ($ResourceKey_<$LootTable>) | undefined, deactivationRange?: number, entitySelector?: $PlayerDetector$EntitySelector, lootTable?: $ResourceKey_<$LootTable>, playerDetector?: $PlayerDetector_, ];
    export class $VaultState$LightLevel extends $Enum<$VaultState$LightLevel> {
    }
    /**
     * Values that may be interpreted as {@link $VaultState$LightLevel}.
     */
    export type $VaultState$LightLevel_ = "half_lit" | "lit";
    export class $VaultServerData implements $VaultServerDataAccessor {
        setItemsToEject(arg0: $List_<$ItemStack_>): void;
        getNextItemToEject(): $ItemStack;
        ejectionProgress(): number;
        addToRewardedPlayers(arg0: $Player): void;
        setLastInsertFailTimestamp(arg0: number): void;
        getLastInsertFailTimestamp(): number;
        pauseStateUpdatingUntil(arg0: number): void;
        irons_spellbooks$getRewardedPlayers(): $Set<$UUID>;
        irons_spellbooks$markChanged(): void;
        set itemsToEject(value: $List_<$ItemStack_>);
        get nextItemToEject(): $ItemStack;
    }
    export class $VaultSharedData {
        hasDisplayItem(): boolean;
        getDisplayItem(): $ItemStack;
        setDisplayItem(arg0: $ItemStack_): void;
    }
    export class $VaultState extends $Enum<$VaultState> implements $StringRepresentable {
        static values(): $VaultState[];
        static valueOf(arg0: string): $VaultState;
        tickAndGetNext(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $VaultConfig_, arg3: $VaultServerData, arg4: $VaultSharedData): $VaultState;
        onTransition(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $VaultState_, arg3: $VaultConfig_, arg4: $VaultSharedData, arg5: boolean): void;
        getSerializedName(): string;
        lightLevel(): number;
        getRemappedEnumConstantName(): string;
        static ACTIVE: $VaultState;
        static INACTIVE: $VaultState;
        static EJECTING: $VaultState;
        static UNLOCKING: $VaultState;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $VaultState}.
     */
    export type $VaultState_ = "inactive" | "active" | "unlocking" | "ejecting";
}
