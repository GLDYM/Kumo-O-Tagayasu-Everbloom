import { $DataResult, $DynamicOps } from "@package/com/mojang/serialization";
import { $Tag_, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EquipmentSlotGroup_ } from "@package/net/minecraft/world/entity";
import { $StringReader } from "@package/com/mojang/brigadier";
import { $AttributeModifier_, $AttributeModifier, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Map_, $UUID_, $List_, $Map, $Set } from "@package/java/util";
import { $FoodBuilder } from "@package/dev/latvian/mods/kubejs/item";
import { $Unit_ } from "@package/net/minecraft/util";
import { $Consumer, $Consumer_ } from "@package/java/util/function";
import { $TypeInfo_, $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $Holder_ } from "@package/net/minecraft/core";
import { $Dynamic2CommandExceptionType, $DynamicCommandExceptionType, $SimpleCommandExceptionType } from "@package/com/mojang/brigadier/exceptions";
import { $Lazy } from "@package/dev/latvian/mods/kubejs/util";
import { DataComponentTypes } from "@special/types";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $DataComponentType, $DataComponentPredicate, $DataComponentType_, $DataComponentMap, $DataComponentMap_, $DataComponentPatch_, $DataComponentPatch$Builder, $DataComponentPatch, $DataComponentMap$Builder } from "@package/net/minecraft/core/component";
import { $StringBuilder, $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $MutableDataComponentHolder } from "@package/net/neoforged/neoforge/common";
import { $DyeColor_, $ItemStack_, $Instrument, $Rarity_ } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ItemAttributeModifiers, $Fireworks_, $Tool_, $FireworkExplosion_, $ItemAttributeModifiers$Entry_ } from "@package/net/minecraft/world/item/component";
import { $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $FoodProperties_ } from "@package/net/minecraft/world/food";
import { $PotionContents_, $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceLocation_, $ResourceKey_ } from "@package/net/minecraft/resources";

declare module "@package/dev/latvian/mods/kubejs/component" {
    export class $DataComponentWrapper {
        static filter(from: $Object, target: $TypeInfo_): boolean;
        static getTypeInfo(type: $DataComponentType_<never>): $TypeInfo;
        /**
         * @deprecated
         */
        static mapOf(ops: $DynamicOps<$Tag_>, o: $Object): $DataComponentMap;
        static mapOf(from: $Object): $DataComponentMap;
        static visualPatch(patch: $DataComponentPatch_): $DataComponentPatch;
        static tryWrapComponent<T>(type: $DataComponentType_<T>, value: $Object): $DataResult<(T) | undefined>;
        static patchToString(builder: $StringBuilder, ops: $DynamicOps<$Tag_>, patch: $DataComponentPatch_): $StringBuilder;
        static readMap(registryOps: $DynamicOps<$Tag_>, reader: $StringReader): $DataComponentMap;
        /**
         * @deprecated
         */
        static patchOf(ops: $DynamicOps<$Tag_>, o: $Object): $DataComponentPatch;
        static patchOf(from: $Object): $DataComponentPatch;
        static readPatch(registryOps: $DynamicOps<$Tag_>, reader: $StringReader): $DataComponentPatch;
        static wrapType(object: $Object): $DataComponentType<never>;
        static readPredicate(registryOps: $DynamicOps<$Tag_>, reader: $StringReader): $DataComponentPredicate;
        static readComponentType(stringReader: $StringReader): $DataComponentType<never>;
        static mapToString(builder: $StringBuilder, ops: $DynamicOps<$Tag_>, map: $DataComponentMap_): $StringBuilder;
        static mapOrEmptyOf(from: $Object): $DataComponentMap;
        /**
         * @deprecated
         */
        static mapOrEmptyOf(ops: $DynamicOps<$Tag_>, o: $Object): $DataComponentMap;
        static patchOrEmptyOf(from: $Object): $DataComponentPatch;
        /**
         * @deprecated
         */
        static patchOrEmptyOf(ops: $DynamicOps<$Tag_>, o: $Object): $DataComponentPatch;
        static tryMapOf(o: $Object): $DataResult<$DataComponentMap>;
        static tryPatchOf(o: $Object): $DataResult<$DataComponentPatch>;
        static VISUAL_DIFFERENCE: $Lazy<$Set<$DataComponentType<never>>>;
        static ERROR_UNKNOWN_COMPONENT: $DynamicCommandExceptionType;
        static ERROR_MALFORMED_COMPONENT: $Dynamic2CommandExceptionType;
        static TYPE_INFOS: $Lazy<$Map<$DataComponentType<never>, $TypeInfo>>;
        static ERROR_EXPECTED_COMPONENT: $SimpleCommandExceptionType;
        static COMPONENT_TYPE: $TypeInfo;
    }
    export interface $DataComponentWrapper {
    }
    export class $ComponentFunctions {
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
    }
    export interface $ComponentFunctions {
        setEntityData(tag: $CompoundTag_): void;
        setDyedColor(color: $KubeColor_): void;
        setBaseColor(color: $DyeColor_): void;
        setLore(lines: $List_<$Component_>, styledLines: $List_<$Component_>): void;
        setLore(lines: $List_<$Component_>): void;
        setLockCode(lock: string): void;
        getCustomName(): $Component;
        setCustomName(name: $Component_): void;
        setUnit(component: $DataComponentType_<$Unit_>): this;
        setProfile(name: string, uuid: $UUID_): void;
        setProfile(profile: $GameProfile): void;
        setRarity(rarity: $Rarity_): void;
        setPotionId(potion: $Holder_<$Potion>): void;
        setCustomData(tag: $CompoundTag_): void;
        getCustomData(): $CompoundTag;
        setDyedColorWithTooltip(color: $KubeColor_): void;
        setBlockStateProperties(properties: $Map_<string, string>): void;
        setAdditionalTooltipHidden(): void;
        patch(components: $DataComponentPatch_): this;
        remove(type: $DataComponentType_<never>): this;
        getComponentString(): string;
        setCustomModelData(data: number): void;
        setPotionContents(contents: $PotionContents_): void;
        setGlintOverride(override: boolean): void;
        setTooltipHidden(): void;
        resetComponents(): this;
        getComponentMap(): $DataComponentMap;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>): void;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        set entityData(value: $CompoundTag_);
        set dyedColor(value: $KubeColor_);
        set baseColor(value: $DyeColor_);
        set lockCode(value: string);
        set unit(value: $DataComponentType_<$Unit_>);
        set rarity(value: $Rarity_);
        set potionId(value: $Holder_<$Potion>);
        set dyedColorWithTooltip(value: $KubeColor_);
        set blockStateProperties(value: $Map_<string, string>);
        get componentString(): string;
        set customModelData(value: number);
        set potionContents(value: $PotionContents_);
        set glintOverride(value: boolean);
        get componentMap(): $DataComponentMap;
    }
    /**
     * Values that may be interpreted as {@link $ComponentFunctions}.
     */
    export type $ComponentFunctions_ = (() => void);
    export class $ItemComponentFunctions {
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
    }
    export interface $ItemComponentFunctions extends $ComponentFunctions, $AttributeModifierFunctions {
        setUnbreakable(): void;
        setItemName(component: $Component_): void;
        setRepairCost(repairCost: number): void;
        setFireworks(fireworks: $Fireworks_): void;
        modifyFood(foodBuilder: $Consumer_<$FoodBuilder>): void;
        setFood(foodProperties: $FoodProperties_): void;
        setFood(nutrition: number, saturation: number): void;
        setTool(tool: $Tool_): void;
        setInstrument(instrument: $Holder_<$Instrument>): void;
        setMaxDamage(maxDamage: number): void;
        setDamage(damage: number): void;
        setUnbreakableWithTooltip(): void;
        setChargedProjectiles(items: $List_<$ItemStack_>): void;
        setMaxStackSize(size: number): void;
        setBundleContents(items: $List_<$ItemStack_>): void;
        setFireResistant(): void;
        setMapItemColor(color: $KubeColor_): void;
        setBucketEntityData(tag: $CompoundTag_): void;
        setNoteBlockSound(id: $ResourceLocation_): void;
        setBlockEntityData(tag: $CompoundTag_): void;
        getAttributeModifiers(): $ItemAttributeModifiers;
        setFireworkExplosion(explosion: $FireworkExplosion_): void;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        set itemName(value: $Component_);
        set repairCost(value: number);
        set fireworks(value: $Fireworks_);
        set tool(value: $Tool_);
        set instrument(value: $Holder_<$Instrument>);
        set maxDamage(value: number);
        set damage(value: number);
        set chargedProjectiles(value: $List_<$ItemStack_>);
        set maxStackSize(value: number);
        set bundleContents(value: $List_<$ItemStack_>);
        set mapItemColor(value: $KubeColor_);
        set bucketEntityData(value: $CompoundTag_);
        set noteBlockSound(value: $ResourceLocation_);
        set blockEntityData(value: $CompoundTag_);
        get attributeModifiers(): $ItemAttributeModifiers;
        set fireworkExplosion(value: $FireworkExplosion_);
    }
    /**
     * Values that may be interpreted as {@link $ItemComponentFunctions}.
     */
    export type $ItemComponentFunctions_ = (() => void);
    export class $DataComponentWrapper$MapBuilder {
    }
    export interface $DataComponentWrapper$MapBuilder extends $Consumer<$DataComponentMap$Builder> {
        accept(builder: $DataComponentMap$Builder): void;
    }
    /**
     * Values that may be interpreted as {@link $DataComponentWrapper$MapBuilder}.
     */
    export type $DataComponentWrapper$MapBuilder_ = ((builder: $DataComponentMap$Builder) => void);
    export class $MutableDataComponentHolderFunctions {
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
    }
    export interface $MutableDataComponentHolderFunctions extends $ComponentFunctions {
        patch(components: $DataComponentPatch_): $ComponentFunctions;
        getComponentHolder(): $MutableDataComponentHolder;
        getComponentMap(): $DataComponentMap;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        get componentHolder(): $MutableDataComponentHolder;
        get componentMap(): $DataComponentMap;
    }
    export class $DataComponentWrapper$PatchBuilder {
    }
    export interface $DataComponentWrapper$PatchBuilder extends $Consumer<$DataComponentPatch$Builder> {
        accept(builder: $DataComponentPatch$Builder): void;
    }
    /**
     * Values that may be interpreted as {@link $DataComponentWrapper$PatchBuilder}.
     */
    export type $DataComponentWrapper$PatchBuilder_ = ((builder: $DataComponentPatch$Builder) => void);
    export class $AttributeModifierFunctions {
    }
    export interface $AttributeModifierFunctions {
        setAttributeModifiersWithTooltip(modifiers: $List_<$ItemAttributeModifiers$Entry_>): void;
        getAttackSpeed(): number;
        /**
         * Sets the attack speed of this item to the given value, **removing** all other modifiers to attack speed.
         * Note that players have a default attack speed of 4.0, so this modifier is added on top of that.
         * (Example: Swords have an attack speed of -2.4, leading to a total value of 1.6 without any other changes.)
         */
        setAttackSpeed(speed: number): void;
        getBaseAttackSpeed(): number;
        hasAttributeModifier(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): boolean;
        /**
         * Overrides the *base* attack speed of this item to be the given value, keeping other modifiers intact.
         * Note that players have a default attack speed of 4.0, so this modifier is added on top of that.
         */
        setBaseAttackSpeed(speed: number): void;
        addAttributeModifier(attribute: $Holder_<$Attribute>, mod: $AttributeModifier_, slot: $EquipmentSlotGroup_): void;
        setAttributeModifiers(modifiers: $List_<$ItemAttributeModifiers$Entry_>): void;
        /**
         * Overrides the *base* attack damage of this item to be the given value, keeping other modifiers intact.
         * Note that since players have a default attack damage of 1.0, total damage will be (dmg + 1.0) before other modifiers.
         */
        setBaseAttackDamage(dmg: number): void;
        getAttributeModifier(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): $AttributeModifier;
        getBaseAttackDamage(): number;
        getAttributeModifiers(): $ItemAttributeModifiers;
        /**
         * Sets the attack damage of this item to the given value, **removing** all other modifiers to attack damage.
         * Note that since players have a default attack damage of 1.0, total damage will be (dmg + 1.0) before other modifiers.
         * (In practice, this simply means that most weapons have this value set to 1 less than what you might think.)
         */
        setAttackDamage(dmg: number): void;
        getAttackDamage(): number;
        set attributeModifiersWithTooltip(value: $List_<$ItemAttributeModifiers$Entry_>);
    }
}
