import { $ResourceLocation, $ResourceLocation_, $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $LootModifierManager } from "@package/net/neoforged/neoforge/common/loot";
import { $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $ItemAbility_, $ItemAbility } from "@package/net/neoforged/neoforge/common";

declare module "@package/com/yanny/ali/neoforge/mixin" {
    export class $MixinCanItemPerformAbility {
    }
    export interface $MixinCanItemPerformAbility {
        getAbility(): $ItemAbility;
        get ability(): $ItemAbility;
    }
    /**
     * Values that may be interpreted as {@link $MixinCanItemPerformAbility}.
     */
    export type $MixinCanItemPerformAbility_ = (() => $ItemAbility_);
    export class $MixinLootModifier {
    }
    export interface $MixinLootModifier {
        getConditions(): $LootItemCondition[];
        get conditions(): $LootItemCondition[];
    }
    /**
     * Values that may be interpreted as {@link $MixinLootModifier}.
     */
    export type $MixinLootModifier_ = (() => $LootItemCondition[]);
    export class $MixinNeoForgeEventHandler {
        static getLootModifierManager(): $LootModifierManager;
        static get lootModifierManager(): $LootModifierManager;
    }
    export interface $MixinNeoForgeEventHandler {
    }
    export class $MixinAddTableLootModifier {
    }
    export interface $MixinAddTableLootModifier {
        getTable(): $ResourceKey<$LootTable>;
        get table(): $ResourceKey<$LootTable>;
    }
    /**
     * Values that may be interpreted as {@link $MixinAddTableLootModifier}.
     */
    export type $MixinAddTableLootModifier_ = (() => $ResourceKey_<$LootTable>);
    export class $MixinLootTableIdCondition {
    }
    export interface $MixinLootTableIdCondition {
        getTargetLootTableId(): $ResourceLocation;
        get targetLootTableId(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $MixinLootTableIdCondition}.
     */
    export type $MixinLootTableIdCondition_ = (() => $ResourceLocation_);
}
