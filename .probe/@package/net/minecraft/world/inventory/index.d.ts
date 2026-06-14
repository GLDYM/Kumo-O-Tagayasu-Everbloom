import { $CraftingResultSlotAccessor } from "@package/dev/emi/emi/mixin/accessor";
import { $Codec } from "@package/com/mojang/serialization";
import { $Recipe, $RecipeHolder, $CraftingInput, $AbstractCookingRecipe, $CraftingInput$Positioned, $RecipeHolder_, $CraftingRecipe, $SingleRecipeInput, $StonecutterRecipe, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Self } from "@package/io/github/forgestove/create_cyber_goggles/core/api";
import { $EquipmentSlot_, $EquipmentSlot, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet, $FeatureElement } from "@package/net/minecraft/world/flag";
import { $IMixinSlot } from "@package/fi/dy/masa/itemscroller/mixin/item";
import { $RecipeBookCategories } from "@package/net/minecraft/client";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $Set_, $Map, $OptionalInt, $List, $List_ } from "@package/java/util";
import { $AccessorCraftingMenu, $AccessorCrafterMenu, $AccessorInventoryMenu } from "@package/com/illusivesoulworks/polymorph/mixin/core";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $AbstractHorse } from "@package/net/minecraft/world/entity/animal/horse";
import { $IMixinCraftingResultSlot } from "@package/fi/dy/masa/itemscroller/mixin/recipe";
import { $SimpleContainer, $Container } from "@package/net/minecraft/world";
import { $Supplier_, $BiFunction, $Predicate_, $Predicate, $BiConsumer_, $BiFunction_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Registry, $Holder_, $Holder, $NonNullList } from "@package/net/minecraft/core";
import { $IMenuTypeExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $IMerchantScreenHandler } from "@package/fi/dy/masa/itemscroller/villager";
import { $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $Enum, $Record, $Runnable_, $Object } from "@package/java/lang";
import { $MerchantOffer, $MerchantOffers, $Merchant, $ItemCost_ } from "@package/net/minecraft/world/item/trading";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $TagKey } from "@package/net/minecraft/tags";
import { $ISlot } from "@package/dev/terminalmc/clientsort/util/inject";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $AccessorMerchantMenu } from "@package/org/violetmoon/quark/mixin/mixins/accessor";
import { $AbstractContainerMenuMixin } from "@package/com/gly091020/netMusicListNeoforge/mixin";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player, $StackedContents, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $Stream } from "@package/java/util/stream";
import { $ContainerLevelAccessMixin } from "@package/com/railwayteam/railways/neoforge/mixin";
import { $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $MenuTypeKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $BlockEntity, $EnderChestBlockEntity, $BannerPattern } from "@package/net/minecraft/world/level/block/entity";
export * as tooltip from "@package/net/minecraft/world/inventory/tooltip";

declare module "@package/net/minecraft/world/inventory" {
    export class $FurnaceFuelSlot extends $Slot {
        static isBucket(arg0: $ItemStack_): boolean;
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(arg0: $AbstractFurnaceMenu, arg1: $Container, arg2: number, arg3: number, arg4: number);
    }
    export class $InventoryMenu extends $RecipeBookMenu<$CraftingInput, $CraftingRecipe> implements $AccessorInventoryMenu {
        static isHotbarSlot(arg0: number): boolean;
        getOwner(): $Player;
        getCraftSlots(): $CraftingContainer;
        getResultSlots(): $ResultContainer;
        dataSlots: $List<$DataSlot>;
        static CRAFT_SLOT_END: number;
        static BLOCK_ATLAS: $ResourceLocation;
        static EMPTY_ARMOR_SLOT_BOOTS: $ResourceLocation;
        static TEXTURE_EMPTY_SLOTS: $Map<$EquipmentSlot, $ResourceLocation>;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static USE_ROW_SLOT_START: number;
        static EMPTY_ARMOR_SLOT_CHESTPLATE: $ResourceLocation;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static CRAFT_SLOT_COUNT: number;
        static SHIELD_SLOT: number;
        static ARMOR_SLOT_START: number;
        static ARMOR_SLOT_COUNT: number;
        static INV_SLOT_START: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static CRAFT_SLOT_START: number;
        owner: $Player;
        static EMPTY_ARMOR_SLOT_HELMET: $ResourceLocation;
        static SLOT_IDS: $EquipmentSlot[];
        active: boolean;
        lastSlots: $NonNullList<$ItemStack>;
        static ARMOR_SLOT_END: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static USE_ROW_SLOT_END: number;
        static EMPTY_ARMOR_SLOT_SHIELD: $ResourceLocation;
        static SLOT_CLICKED_OUTSIDE: number;
        static INV_SLOT_END: number;
        static EMPTY_ARMOR_SLOT_LEGGINGS: $ResourceLocation;
        static CONTAINER_ID: number;
        constructor(arg0: $Inventory, arg1: boolean, arg2: $Player);
        get craftSlots(): $CraftingContainer;
        get resultSlots(): $ResultContainer;
    }
    export class $BeaconMenu$PaymentSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
    }
    export class $MerchantResultSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(arg0: $Player, arg1: $Merchant, arg2: $MerchantContainer, arg3: number, arg4: number, arg5: number);
    }
    export class $SlotRanges {
        static allNames(): $Stream<string>;
        static singleSlotNames(): $Stream<string>;
        static nameToIds(arg0: string): $SlotRange;
        static CODEC: $Codec<$SlotRange>;
        constructor();
    }
    export class $ArmorSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(arg0: $Container, arg1: $LivingEntity, arg2: $EquipmentSlot_, arg3: number, arg4: number, arg5: number, arg6: $ResourceLocation_);
    }
    export class $ResultSlot extends $Slot implements $CraftingResultSlotAccessor, $IMixinCraftingResultSlot {
        getInput(): $CraftingContainer;
        itemscroller_getCraftingInventory(): $CraftingContainer;
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(arg0: $Player, arg1: $CraftingContainer, arg2: $Container, arg3: number, arg4: number, arg5: number);
        get input(): $CraftingContainer;
    }
    export class $HorseInventoryMenu extends $AbstractContainerMenu {
        dataSlots: $List<$DataSlot>;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $Container, arg3: $AbstractHorse, arg4: number);
    }
    export class $BrewingStandMenu$IngredientsSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
    }
    export class $SmithingMenu extends $ItemCombinerMenu {
        canMoveIntoInputSlots(arg0: $ItemStack_): boolean;
        dataSlots: $List<$DataSlot>;
        static ADDITIONAL_SLOT: number;
        static TEMPLATE_SLOT: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static ADDITIONAL_SLOT_X_PLACEMENT: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static BASE_SLOT_X_PLACEMENT: number;
        static BASE_SLOT: number;
        containerId: number;
        static SLOT_Y_PLACEMENT: number;
        static TEMPLATE_SLOT_X_PLACEMENT: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $ContainerLevelAccess_);
    }
    export class $MenuType<T extends $AbstractContainerMenu> implements $FeatureElement, $IMenuTypeExtension<T>, $MenuTypeKJS {
        create(arg0: number, arg1: $Inventory): T;
        requiredFeatures(): $FeatureFlagSet;
        kjs$getId(): string;
        kjs$getKey(): $ResourceKey<any>;
        isEnabled(arg0: $FeatureFlagSet): boolean;
        kjs$getRegistryId(): $ResourceKey<$Registry<$MenuType<never>>>;
        kjs$getRegistry(): $Registry<$MenuType<never>>;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        asHolder(): $Holder<T>;
        getIdLocation(): $ResourceLocation;
        getTagKeys(): $List<$TagKey<T>>;
        getTags(): $List<$ResourceLocation>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        create(arg0: number, arg1: $Inventory, arg2: $RegistryFriendlyByteBuf): T;
        static ENCHANTMENT: $MenuType<$EnchantmentMenu>;
        static LOOM: $MenuType<$LoomMenu>;
        static BLAST_FURNACE: $MenuType<$BlastFurnaceMenu>;
        static CARTOGRAPHY_TABLE: $MenuType<$CartographyTableMenu>;
        static BEACON: $MenuType<$BeaconMenu>;
        static MERCHANT: $MenuType<$MerchantMenu>;
        static CRAFTER_3x3: $MenuType<$CrafterMenu>;
        static FURNACE: $MenuType<$FurnaceMenu>;
        static ANVIL: $MenuType<$AnvilMenu>;
        static STONECUTTER: $MenuType<$StonecutterMenu>;
        static GENERIC_3x3: $MenuType<$DispenserMenu>;
        static CRAFTING: $MenuType<$CraftingMenu>;
        static GENERIC_9x1: $MenuType<$ChestMenu>;
        static GENERIC_9x2: $MenuType<$ChestMenu>;
        static GENERIC_9x3: $MenuType<$ChestMenu>;
        static GENERIC_9x4: $MenuType<$ChestMenu>;
        static GENERIC_9x5: $MenuType<$ChestMenu>;
        static GENERIC_9x6: $MenuType<$ChestMenu>;
        static BREWING_STAND: $MenuType<$BrewingStandMenu>;
        static SMOKER: $MenuType<$SmokerMenu>;
        static SMITHING: $MenuType<$SmithingMenu>;
        static HOPPER: $MenuType<$HopperMenu>;
        static LECTERN: $MenuType<$LecternMenu>;
        static GRINDSTONE: $MenuType<$GrindstoneMenu>;
        static SHULKER_BOX: $MenuType<$ShulkerBoxMenu>;
        constructor(arg0: $MenuType$MenuSupplier_<T>, arg1: $FeatureFlagSet);
        get mod(): string;
        get idLocation(): $ResourceLocation;
        get tagKeys(): $List<$TagKey<T>>;
        get tags(): $List<$ResourceLocation>;
    }
    /**
     * Values that may be interpreted as {@link $MenuType}.
     */
    export type $MenuType_<T> = RegistryTypes.Menu;
    export class $MerchantContainer implements $Container {
        isEmpty(): boolean;
        getItem(arg0: number): $ItemStack;
        removeItem(arg0: number, arg1: number): $ItemStack;
        getFutureXp(): number;
        setSelectionHint(arg0: number): void;
        updateSellItem(): void;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        setItem(arg0: number, arg1: $ItemStack_): void;
        stillValid(arg0: $Player): boolean;
        clearContent(): void;
        setChanged(): void;
        getActiveOffer(): $MerchantOffer;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        countItem(arg0: $Item_): number;
        getMaxStackSize(): number;
        getMaxStackSize(arg0: $ItemStack_): number;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        self(): $Container;
        isMutable(): boolean;
        getBlock(level: $Level_): $LevelBlock;
        clear(): void;
        asContainer(): $Container;
        getWidth(): number;
        getHeight(): number;
        setChanged(): void;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        clear(match: $ItemPredicate_): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        isEmpty(): boolean;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        clientsort$setChanged(): void;
        constructor(arg0: $Merchant);
        get futureXp(): number;
        set selectionHint(value: number);
        get containerSize(): number;
        get activeOffer(): $MerchantOffer;
        get mutable(): boolean;
        get width(): number;
        get height(): number;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $BeaconMenu extends $AbstractContainerMenu {
        hasPayment(): boolean;
        getLevels(): number;
        static decodeEffect(arg0: number): $Holder<$MobEffect>;
        getPrimaryEffect(): $Holder<$MobEffect>;
        getSecondaryEffect(): $Holder<$MobEffect>;
        updateEffects(arg0: ($Holder_<$MobEffect>) | undefined, arg1: ($Holder_<$MobEffect>) | undefined): void;
        static encodeEffect(arg0: $Holder_<$MobEffect>): number;
        dataSlots: $List<$DataSlot>;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Container);
        constructor(arg0: number, arg1: $Container, arg2: $ContainerData, arg3: $ContainerLevelAccess_);
        get levels(): number;
        get primaryEffect(): $Holder<$MobEffect>;
        get secondaryEffect(): $Holder<$MobEffect>;
    }
    export class $CraftingMenu extends $RecipeBookMenu<$CraftingInput, $CraftingRecipe> implements $AccessorCraftingMenu {
        beginPlacingRecipe(): void;
        finishPlacingRecipe(arg0: $RecipeHolder_<$CraftingRecipe>): void;
        getCraftSlots(): $CraftingContainer;
        getPlayer(): $Player;
        getResultSlots(): $ResultContainer;
        dataSlots: $List<$DataSlot>;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $ContainerLevelAccess_);
        get craftSlots(): $CraftingContainer;
        get resultSlots(): $ResultContainer;
    }
    export class $CrafterSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(arg0: $Container, arg1: number, arg2: number, arg3: number, arg4: $CrafterMenu);
    }
    export class $ChestMenu extends $AbstractContainerMenu {
        getContainer(): $Container;
        getRowCount(): number;
        static threeRows(arg0: number, arg1: $Inventory, arg2: $Container): $ChestMenu;
        static threeRows(arg0: number, arg1: $Inventory): $ChestMenu;
        static fiveRows(arg0: number, arg1: $Inventory): $ChestMenu;
        static sixRows(arg0: number, arg1: $Inventory, arg2: $Container): $ChestMenu;
        static sixRows(arg0: number, arg1: $Inventory): $ChestMenu;
        static twoRows(arg0: number, arg1: $Inventory): $ChestMenu;
        static oneRow(arg0: number, arg1: $Inventory): $ChestMenu;
        static fourRows(arg0: number, arg1: $Inventory): $ChestMenu;
        dataSlots: $List<$DataSlot>;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $Container, arg4: number);
        get container(): $Container;
        get rowCount(): number;
    }
    export class $SmokerMenu extends $AbstractFurnaceMenu {
        dataSlots: $List<$DataSlot>;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static FUEL_SLOT: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $Container, arg3: $ContainerData);
    }
    export class $ClickAction extends $Enum<$ClickAction> {
        static values(): $ClickAction[];
        static valueOf(arg0: string): $ClickAction;
        static SECONDARY: $ClickAction;
        static PRIMARY: $ClickAction;
    }
    /**
     * Values that may be interpreted as {@link $ClickAction}.
     */
    export type $ClickAction_ = "primary" | "secondary";
    export class $BrewingStandMenu extends $AbstractContainerMenu {
        getBrewingTicks(): number;
        getFuel(): number;
        dataSlots: $List<$DataSlot>;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $Container, arg3: $ContainerData);
        get brewingTicks(): number;
        get fuel(): number;
    }
    export class $BrewingStandMenu$PotionSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
    }
    export class $MenuType$MenuSupplier<T extends $AbstractContainerMenu> {
    }
    export interface $MenuType$MenuSupplier<T extends $AbstractContainerMenu> {
        create(arg0: number, arg1: $Inventory): T;
    }
    /**
     * Values that may be interpreted as {@link $MenuType$MenuSupplier}.
     */
    export type $MenuType$MenuSupplier_<T> = ((arg0: number, arg1: $Inventory) => T);
    export class $LecternMenu extends $AbstractContainerMenu {
        getBook(): $ItemStack;
        getPage(): number;
        dataSlots: $List<$DataSlot>;
        static BUTTON_PREV_PAGE: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static BUTTON_PAGE_JUMP_RANGE_START: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static BUTTON_NEXT_PAGE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static BUTTON_TAKE_BOOK: number;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number);
        constructor(arg0: number, arg1: $Container, arg2: $ContainerData);
        get book(): $ItemStack;
        get page(): number;
    }
    export class $CraftingContainer {
    }
    export interface $CraftingContainer extends $Container, $StackedContentsCompatible {
        getWidth(): number;
        getItems(): $List<$ItemStack>;
        getHeight(): number;
        asCraftInput(): $CraftingInput;
        asPositionedCraftInput(): $CraftingInput$Positioned;
        get width(): number;
        get items(): $List<$ItemStack>;
        get height(): number;
    }
    export class $LoomMenu extends $AbstractContainerMenu {
        modifyExpressionValue$hhm000$quark$getLimit(arg0: number): number;
        getSelectedBannerPatternIndex(): number;
        wrapOperation$bnp000$supplementaries$supp$flagStuff(arg0: $ItemStack_, arg1: $Operation_<any>): $Item;
        getResultSlot(): $Slot;
        getBannerSlot(): $Slot;
        getPatternSlot(): $Slot;
        registerUpdateListener(arg0: $Runnable_): void;
        getSelectablePatterns(): $List<$Holder<$BannerPattern>>;
        getDyeSlot(): $Slot;
        dataSlots: $List<$DataSlot>;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $ContainerLevelAccess_);
        get selectedBannerPatternIndex(): number;
        get resultSlot(): $Slot;
        get bannerSlot(): $Slot;
        get patternSlot(): $Slot;
        get selectablePatterns(): $List<$Holder<$BannerPattern>>;
        get dyeSlot(): $Slot;
    }
    export class $DispenserMenu extends $AbstractContainerMenu {
        dataSlots: $List<$DataSlot>;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $Container);
    }
    export class $StackedContentsCompatible {
    }
    export interface $StackedContentsCompatible {
        fillStackedContents(arg0: $StackedContents): void;
    }
    /**
     * Values that may be interpreted as {@link $StackedContentsCompatible}.
     */
    export type $StackedContentsCompatible_ = ((arg0: $StackedContents) => void);
    export class $ShulkerBoxSlot extends $Slot {
        handler$boj000$supplementaries$supp$preventInsertion(arg0: $ItemStack_, arg1: $CallbackInfoReturnable<any>): void;
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(arg0: $Container, arg1: number, arg2: number, arg3: number);
    }
    export class $PlayerEnderChestContainer extends $SimpleContainer implements $Self<any> {
        setActiveChest(arg0: $EnderChestBlockEntity): void;
        isActiveChest(arg0: $EnderChestBlockEntity): boolean;
        thiz(): $Object;
        size: number;
        items: $NonNullList<$ItemStack>;
        constructor();
    }
    export class $ItemCombinerMenuSlotDefinition {
        getSlot(arg0: number): $ItemCombinerMenuSlotDefinition$SlotDefinition;
        static create(): $ItemCombinerMenuSlotDefinition$Builder;
        getSlots(): $List<$ItemCombinerMenuSlotDefinition$SlotDefinition>;
        hasSlot(arg0: number): boolean;
        getResultSlot(): $ItemCombinerMenuSlotDefinition$SlotDefinition;
        getNumOfInputSlots(): number;
        getResultSlotIndex(): number;
        getInputSlotIndexes(): $List<number>;
        get slots(): $List<$ItemCombinerMenuSlotDefinition$SlotDefinition>;
        get resultSlot(): $ItemCombinerMenuSlotDefinition$SlotDefinition;
        get numOfInputSlots(): number;
        get resultSlotIndex(): number;
        get inputSlotIndexes(): $List<number>;
    }
    export class $SlotRange {
        static of(arg0: string, arg1: $IntList): $SlotRange;
    }
    export interface $SlotRange extends $StringRepresentable {
        size(): number;
        slots(): $IntList;
    }
    export class $MenuConstructor {
    }
    export interface $MenuConstructor {
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
    }
    /**
     * Values that may be interpreted as {@link $MenuConstructor}.
     */
    export type $MenuConstructor_ = ((arg0: number, arg1: $Inventory, arg2: $Player) => $AbstractContainerMenu);
    export class $ContainerData {
    }
    export interface $ContainerData {
        get(arg0: number): number;
        set(arg0: number, arg1: number): void;
        getCount(): number;
        get count(): number;
    }
    export class $EnchantmentMenu extends $AbstractContainerMenu {
        getEnchantmentSeed(): number;
        handler$gen000$taxfreelevels$setLevelRequirement(player: $Player, id: number, cir: $CallbackInfoReturnable<any>): void;
        getGoldCount(): number;
        costs: number[];
        dataSlots: $List<$DataSlot>;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        enchantClue: number[];
        containerId: number;
        levelClue: number[];
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $ContainerLevelAccess_);
        get enchantmentSeed(): number;
        get goldCount(): number;
    }
    export class $ContainerLevelAccess {
        static create(arg0: $Level_, arg1: $BlockPos_): $ContainerLevelAccess;
        static NULL: $ContainerLevelAccess;
    }
    export interface $ContainerLevelAccess extends $ContainerLevelAccessMixin {
        execute(arg0: $BiConsumer_<$Level, $BlockPos>): void;
        evaluate<T>(arg0: $BiFunction_<$Level, $BlockPos, T>, arg1: T): T;
        evaluate<T>(arg0: $BiFunction_<$Level, $BlockPos, T>): (T) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $ContainerLevelAccess}.
     */
    export type $ContainerLevelAccess_ = ((arg0: $BiFunction<$Level, $BlockPos, any>) => (T) | undefined);
    export class $CartographyTableMenu extends $AbstractContainerMenu {
        handler$bml000$supplementaries$supp$getItem(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $Level_, arg4: $BlockPos_, arg5: $CallbackInfo, arg6: $MapItemSavedData): void;
        handler$bml000$supplementaries$supp$getItem(arg0: $Player, arg1: number, arg2: $CallbackInfoReturnable<any>, arg3: $ItemStack_, arg4: $Slot, arg5: $ItemStack_): void;
        container: $Container;
        dataSlots: $List<$DataSlot>;
        static ADDITIONAL_SLOT: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static MAP_SLOT: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $ContainerLevelAccess_);
    }
    export class $ItemCombinerMenu extends $AbstractContainerMenu {
        createResult(): void;
        getResultSlot(): number;
        getSlotToQuickMoveTo(arg0: $ItemStack_): number;
        dataSlots: $List<$DataSlot>;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $ContainerLevelAccess_);
        get resultSlot(): number;
    }
    export class $ResultContainer implements $Container, $RecipeCraftingHolder {
        isEmpty(): boolean;
        getItem(arg0: number): $ItemStack;
        removeItem(arg0: number, arg1: number): $ItemStack;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        setItem(arg0: number, arg1: $ItemStack_): void;
        stillValid(arg0: $Player): boolean;
        clearContent(): void;
        setChanged(): void;
        setRecipeUsed(arg0: $RecipeHolder_<never>): void;
        getRecipeUsed(): $RecipeHolder<never>;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        countItem(arg0: $Item_): number;
        getMaxStackSize(): number;
        getMaxStackSize(arg0: $ItemStack_): number;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        setRecipeUsed(arg0: $Level_, arg1: $ServerPlayer, arg2: $RecipeHolder_<never>): boolean;
        awardUsedRecipes(arg0: $Player, arg1: $List_<$ItemStack_>): void;
        self(): $Container;
        isMutable(): boolean;
        getBlock(level: $Level_): $LevelBlock;
        clear(): void;
        asContainer(): $Container;
        getWidth(): number;
        getHeight(): number;
        setChanged(): void;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        clear(match: $ItemPredicate_): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        isEmpty(): boolean;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        clientsort$setChanged(): void;
        constructor();
        get containerSize(): number;
        get mutable(): boolean;
        get width(): number;
        get height(): number;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $FurnaceMenu extends $AbstractFurnaceMenu {
        dataSlots: $List<$DataSlot>;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static FUEL_SLOT: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $Container, arg3: $ContainerData);
    }
    export class $AbstractFurnaceMenu extends $RecipeBookMenu<$SingleRecipeInput, $AbstractCookingRecipe> {
        isLit(): boolean;
        getLitProgress(): number;
        getBurnProgress(): number;
        dataSlots: $List<$DataSlot>;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static FUEL_SLOT: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        get lit(): boolean;
        get litProgress(): number;
        get burnProgress(): number;
    }
    export class $HopperMenu extends $AbstractContainerMenu {
        dataSlots: $List<$DataSlot>;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static CONTAINER_SIZE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $Container);
    }
    export class $SimpleContainerData implements $ContainerData {
        get(arg0: number): number;
        set(arg0: number, arg1: number): void;
        getCount(): number;
        constructor(arg0: number);
        get count(): number;
    }
    export class $StonecutterMenu extends $AbstractContainerMenu {
        getNumRecipes(): number;
        hasInputItem(): boolean;
        registerUpdateListener(arg0: $Runnable_): void;
        getSelectedRecipeIndex(): number;
        getRecipes(): $List<$RecipeHolder<$StonecutterRecipe>>;
        static INPUT_SLOT: number;
        container: $Container;
        dataSlots: $List<$DataSlot>;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $ContainerLevelAccess_);
        get numRecipes(): number;
        get selectedRecipeIndex(): number;
        get recipes(): $List<$RecipeHolder<$StonecutterRecipe>>;
    }
    export class $ShulkerBoxMenu extends $AbstractContainerMenu {
        container: $Container;
        dataSlots: $List<$DataSlot>;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $Container);
    }
    export class $AbstractContainerMenu implements $AbstractContainerMenuMixin {
        getType(): $MenuType<never>;
        getSlot(arg0: number): $Slot;
        removed(arg0: $Player): void;
        static getQuickcraftMask(arg0: number, arg1: number): number;
        setData(arg0: number, arg1: number): void;
        getItems(): $NonNullList<$ItemStack>;
        wrapOperation$dob000$geckolib$forceGeckolibIdSync(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Operation_<any>): boolean;
        static getRedstoneSignalFromBlockEntity(arg0: $BlockEntity): number;
        static getRedstoneSignalFromContainer(arg0: $Container): number;
        setItem(arg0: number, arg1: number, arg2: $ItemStack_): void;
        canTakeItemForPickAll(arg0: $ItemStack_, arg1: $Slot): boolean;
        static getQuickCraftPlaceCount(arg0: $Set_<$Slot>, arg1: number, arg2: $ItemStack_): number;
        static canItemQuickReplace(arg0: $Slot, arg1: $ItemStack_, arg2: boolean): boolean;
        stillValid(arg0: $Player): boolean;
        wrapOperation$dob000$geckolib$forceGeckolibSlotChange(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Operation_<any>): boolean;
        wrapOperation$dob000$geckolib$removeGeckolibIdOnCopy(arg0: $ItemStack_, arg1: number, arg2: $Operation_<any>): $ItemStack;
        findSlot(arg0: $Container, arg1: number): $OptionalInt;
        canDragTo(arg0: $Slot): boolean;
        broadcastChanges(): void;
        getCarried(): $ItemStack;
        setCarried(arg0: $ItemStack_): void;
        addDataSlot(arg0: $DataSlot): $DataSlot;
        isValidSlotIndex(arg0: number): boolean;
        broadcastFullState(): void;
        removeSlotListener(arg0: $ContainerListener): void;
        initializeContents(arg0: number, arg1: $List_<$ItemStack_>, arg2: $ItemStack_): void;
        incrementStateId(): number;
        clickMenuButton(arg0: $Player, arg1: number): boolean;
        setRemoteCarried(arg0: $ItemStack_): void;
        slotsChanged(arg0: $Container): void;
        quickMoveStack(arg0: $Player, arg1: number): $ItemStack;
        static getQuickcraftType(arg0: number): number;
        synchronizeDataSlotToRemote(arg0: number, arg1: number): void;
        addSlotListener(arg0: $ContainerListener): void;
        setSynchronizer(arg0: $ContainerSynchronizer): void;
        transferState(arg0: $AbstractContainerMenu): void;
        setRemoteSlot(arg0: number, arg1: $ItemStack_): void;
        clicked(arg0: number, arg1: number, arg2: $ClickType_, arg3: $Player): void;
        addSlot(arg0: $Slot): $Slot;
        getStateId(): number;
        updateDataSlotListeners(arg0: number, arg1: number): void;
        setRemoteSlotNoCopy(arg0: number, arg1: $ItemStack_): void;
        synchronizeSlotToRemote(arg0: number, arg1: $ItemStack_, arg2: $Supplier_<$ItemStack>): void;
        triggerSlotListeners(arg0: number, arg1: $ItemStack_, arg2: $Supplier_<$ItemStack>): void;
        sendAllDataToRemote(): void;
        suppressRemoteUpdates(): void;
        synchronizeCarriedToRemote(): void;
        static getQuickcraftHeader(arg0: number): number;
        resumeRemoteUpdates(): void;
        static isValidQuickcraftType(arg0: number, arg1: $Player): boolean;
        invokeAddSlot(arg0: $Slot): $Slot;
        dataSlots: $List<$DataSlot>;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        get type(): $MenuType<never>;
        get items(): $NonNullList<$ItemStack>;
        set remoteCarried(value: $ItemStack_);
        set synchronizer(value: $ContainerSynchronizer);
        get stateId(): number;
    }
    export class $Slot implements $ISlot, $IMixinSlot {
        remove(arg0: number): $ItemStack;
        set(arg0: $ItemStack_): void;
        isActive(): boolean;
        getItem(): $ItemStack;
        hasItem(): boolean;
        getNoItemIcon(): $Pair<$ResourceLocation, $ResourceLocation>;
        isSameInventory(arg0: $Slot): boolean;
        isHighlightable(): boolean;
        getMaxStackSize(): number;
        getMaxStackSize(arg0: $ItemStack_): number;
        clientsort$getIndexInMenu(): number;
        allowModification(arg0: $Player): boolean;
        isFake(): boolean;
        mayPlace(arg0: $ItemStack_): boolean;
        mayPickup(arg0: $Player): boolean;
        setBackground(arg0: $ResourceLocation_, arg1: $ResourceLocation_): $Slot;
        setChanged(): void;
        setByPlayer(arg0: $ItemStack_): void;
        setByPlayer(arg0: $ItemStack_, arg1: $ItemStack_): void;
        onQuickCraft(arg0: $ItemStack_, arg1: $ItemStack_): void;
        getContainerSlot(): number;
        clientsort$getIndexInContainer(): number;
        getSlotIndex(): number;
        safeInsert(arg0: $ItemStack_): $ItemStack;
        safeInsert(arg0: $ItemStack_, arg1: number): $ItemStack;
        safeTake(arg0: number, arg1: number, arg2: $Player): $ItemStack;
        onTake(arg0: $Player, arg1: $ItemStack_): void;
        tryRemove(arg0: number, arg1: number, arg2: $Player): ($ItemStack) | undefined;
        itemscroller_getSlotIndex(): number;
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(arg0: $Container, arg1: number, arg2: number, arg3: number);
        get active(): boolean;
        get item(): $ItemStack;
        get noItemIcon(): $Pair<$ResourceLocation, $ResourceLocation>;
        get highlightable(): boolean;
        get fake(): boolean;
        get containerSlot(): number;
        get slotIndex(): number;
    }
    export class $DataSlot {
        get(): number;
        set(arg0: number): void;
        static shared(arg0: number[], arg1: number): $DataSlot;
        static standalone(): $DataSlot;
        static forContainer(arg0: $ContainerData, arg1: number): $DataSlot;
        checkAndClearUpdateFlag(): boolean;
        constructor();
    }
    export class $BrewingStandMenu$FuelSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
    }
    export class $RecipeBookType extends $Enum<$RecipeBookType> implements $IExtensibleEnum {
        static values(): $RecipeBookType[];
        static valueOf(arg0: string): $RecipeBookType;
        static getExtensionInfo(): $ExtensionInfo;
        static FURNACE: $RecipeBookType;
        static BLAST_FURNACE: $RecipeBookType;
        static BREWINANDCHEWIN_FERMENTING: $RecipeBookType;
        static SMOKER: $RecipeBookType;
        static FARMERSDELIGHT_COOKING: $RecipeBookType;
        static CRAFTING: $RecipeBookType;
        static TOFUCRAFT_TF_CRAFT: $RecipeBookType;
        static TOFUCRAFT_COOKING: $RecipeBookType;
        static get extensionInfo(): $ExtensionInfo;
    }
    /**
     * Values that may be interpreted as {@link $RecipeBookType}.
     */
    export type $RecipeBookType_ = "crafting" | "furnace" | "blast_furnace" | "smoker" | "brewinandchewin_fermenting" | "farmersdelight_cooking" | "tofucraft_cooking" | "tofucraft_tf_craft";
    export class $ItemCombinerMenuSlotDefinition$SlotDefinition extends $Record {
        x(): number;
        y(): number;
        slotIndex(): number;
        mayPlace(): $Predicate<$ItemStack>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $Predicate_<$ItemStack>);
    }
    /**
     * Values that may be interpreted as {@link $ItemCombinerMenuSlotDefinition$SlotDefinition}.
     */
    export type $ItemCombinerMenuSlotDefinition$SlotDefinition_ = { x?: number, y?: number, mayPlace?: $Predicate_<$ItemStack>, slotIndex?: number,  } | [x?: number, y?: number, mayPlace?: $Predicate_<$ItemStack>, slotIndex?: number, ];
    export class $ClickType extends $Enum<$ClickType> {
        static values(): $ClickType[];
        static valueOf(arg0: string): $ClickType;
        static QUICK_MOVE: $ClickType;
        static SWAP: $ClickType;
        static PICKUP_ALL: $ClickType;
        static THROW: $ClickType;
        static QUICK_CRAFT: $ClickType;
        static PICKUP: $ClickType;
        static CLONE: $ClickType;
    }
    /**
     * Values that may be interpreted as {@link $ClickType}.
     */
    export type $ClickType_ = "pickup" | "quick_move" | "swap" | "clone" | "throw" | "quick_craft" | "pickup_all";
    export class $TransientCraftingContainer implements $CraftingContainer {
        isEmpty(): boolean;
        getItem(arg0: number): $ItemStack;
        getWidth(): number;
        getItems(): $List<$ItemStack>;
        removeItem(arg0: number, arg1: number): $ItemStack;
        getHeight(): number;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        setItem(arg0: number, arg1: $ItemStack_): void;
        stillValid(arg0: $Player): boolean;
        clearContent(): void;
        setChanged(): void;
        fillStackedContents(arg0: $StackedContents): void;
        asCraftInput(): $CraftingInput;
        asPositionedCraftInput(): $CraftingInput$Positioned;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        countItem(arg0: $Item_): number;
        getMaxStackSize(): number;
        getMaxStackSize(arg0: $ItemStack_): number;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        self(): $Container;
        isMutable(): boolean;
        getBlock(level: $Level_): $LevelBlock;
        clear(): void;
        asContainer(): $Container;
        getWidth(): number;
        getHeight(): number;
        setChanged(): void;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        clear(match: $ItemPredicate_): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        isEmpty(): boolean;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        clientsort$setChanged(): void;
        menu: $AbstractContainerMenu;
        constructor(arg0: $AbstractContainerMenu, arg1: number, arg2: number);
        constructor(arg0: $AbstractContainerMenu, arg1: number, arg2: number, arg3: $NonNullList<$ItemStack_>);
        get items(): $List<$ItemStack>;
        get containerSize(): number;
        get mutable(): boolean;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $ContainerSynchronizer {
    }
    export interface $ContainerSynchronizer {
        sendSlotChange(arg0: $AbstractContainerMenu, arg1: number, arg2: $ItemStack_): void;
        sendDataChange(arg0: $AbstractContainerMenu, arg1: number, arg2: number): void;
        sendInitialData(arg0: $AbstractContainerMenu, arg1: $NonNullList<$ItemStack_>, arg2: $ItemStack_, arg3: number[]): void;
        sendCarriedChange(arg0: $AbstractContainerMenu, arg1: $ItemStack_): void;
    }
    export class $MerchantMenu extends $AbstractContainerMenu implements $AccessorMerchantMenu, $IMerchantScreenHandler {
        setMerchantLevel(arg0: number): void;
        setSelectionHint(arg0: number): void;
        getTraderLevel(): number;
        getTraderXp(): number;
        setCanRestock(arg0: boolean): void;
        getFutureTraderXp(): number;
        setShowProgressBar(arg0: boolean): void;
        showProgressBar(): boolean;
        getOffers(): $MerchantOffers;
        setOffers(arg0: $MerchantOffers): void;
        tryMoveItems(arg0: number): void;
        setXp(arg0: number): void;
        itemscroller$getOriginalList(): $MerchantOffers;
        canRestock(): boolean;
        invokeMoveFromInventoryToPaymentSlot(arg0: number, arg1: $ItemCost_): void;
        dataSlots: $List<$DataSlot>;
        trader: $Merchant;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $Merchant);
        set merchantLevel(value: number);
        set selectionHint(value: number);
        get traderLevel(): number;
        get traderXp(): number;
        get futureTraderXp(): number;
        set xp(value: number);
    }
    export class $GrindstoneMenu extends $AbstractContainerMenu {
        computeResult(arg0: $ItemStack_, arg1: $ItemStack_): $ItemStack;
        static INPUT_SLOT: number;
        dataSlots: $List<$DataSlot>;
        static ADDITIONAL_SLOT: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static MAX_NAME_LENGTH: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $ContainerLevelAccess_);
    }
    export class $RecipeCraftingHolder {
    }
    export interface $RecipeCraftingHolder {
        setRecipeUsed(arg0: $Level_, arg1: $ServerPlayer, arg2: $RecipeHolder_<never>): boolean;
        setRecipeUsed(arg0: $RecipeHolder_<never>): void;
        getRecipeUsed(): $RecipeHolder<never>;
        awardUsedRecipes(arg0: $Player, arg1: $List_<$ItemStack_>): void;
    }
    export class $RecipeBookMenu<I extends $RecipeInput, R extends $Recipe<I>> extends $AbstractContainerMenu {
        getSize(): number;
        getResultSlotIndex(): number;
        getGridHeight(): number;
        handlePlacement(arg0: boolean, arg1: $RecipeHolder_<never>, arg2: $ServerPlayer): void;
        recipeMatches(arg0: $RecipeHolder_<R>): boolean;
        getGridWidth(): number;
        getRecipeBookType(): $RecipeBookType;
        fillCraftSlotsStackedContents(arg0: $StackedContents): void;
        shouldMoveToInventory(arg0: number): boolean;
        getRecipeBookCategories(): $List<$RecipeBookCategories>;
        clearCraftingContent(): void;
        dataSlots: $List<$DataSlot>;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: $MenuType_<never>, arg1: number);
        get size(): number;
        get resultSlotIndex(): number;
        get gridHeight(): number;
        get gridWidth(): number;
        get recipeBookType(): $RecipeBookType;
        get recipeBookCategories(): $List<$RecipeBookCategories>;
    }
    export class $CrafterMenu extends $AbstractContainerMenu implements $ContainerListener, $AccessorCrafterMenu {
        getContainer(): $Container;
        isPowered(): boolean;
        dataChanged(arg0: $AbstractContainerMenu, arg1: number, arg2: number): void;
        isSlotDisabled(arg0: number): boolean;
        setSlotState(arg0: number, arg1: boolean): void;
        slotChanged(arg0: $AbstractContainerMenu, arg1: number, arg2: $ItemStack_): void;
        callRefreshRecipeResult(): void;
        dataSlots: $List<$DataSlot>;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $CraftingContainer, arg3: $ContainerData);
        get container(): $Container;
        get powered(): boolean;
    }
    export class $NonInteractiveResultSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(arg0: $Container, arg1: number, arg2: number, arg3: number);
    }
    export class $FurnaceResultSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(arg0: $Player, arg1: $Container, arg2: number, arg3: number, arg4: number);
    }
    export class $BlastFurnaceMenu extends $AbstractFurnaceMenu {
        dataSlots: $List<$DataSlot>;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static FUEL_SLOT: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $Container, arg3: $ContainerData);
    }
    export class $AnvilMenu extends $ItemCombinerMenu {
        modify$geo000$taxfreelevels$flattenAnvilCost(negativeLevelCost: number, player: $Player): number;
        handler$gem000$taxfreelevels$makeRenamingCheap(ci: $CallbackInfo, i: number, j: number): void;
        static calculateIncreasedRepairCost(arg0: number): number;
        setMaximumCost(arg0: number): void;
        setItemName(arg0: string): boolean;
        modifyExpressionValue$hfn000$quark$isValidRepairItem(arg0: boolean, arg1: $ItemStack_, arg2: $ItemStack_): boolean;
        modifyExpressionValue$gfa000$taxfreelevels$removeAnvilLimit(original: boolean): boolean;
        getCost(): number;
        onTake(arg0: $Player, arg1: $ItemStack_): void;
        static INPUT_SLOT: number;
        dataSlots: $List<$DataSlot>;
        repairItemCountCost: number;
        static ADDITIONAL_SLOT: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static MAX_NAME_LENGTH: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static RESULT_SLOT: number;
        itemName: string;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $ContainerLevelAccess_);
        set maximumCost(value: number);
        get cost(): number;
    }
    export interface $MenuType extends RegistryMarked<RegistryTypes.MenuTag, RegistryTypes.Menu> {}
    export class $ContainerListener {
    }
    export interface $ContainerListener {
        dataChanged(arg0: $AbstractContainerMenu, arg1: number, arg2: number): void;
        slotChanged(arg0: $AbstractContainerMenu, arg1: number, arg2: $ItemStack_): void;
    }
    export class $ItemCombinerMenuSlotDefinition$Builder {
        build(): $ItemCombinerMenuSlotDefinition;
        withResultSlot(arg0: number, arg1: number, arg2: number): $ItemCombinerMenuSlotDefinition$Builder;
        withSlot(arg0: number, arg1: number, arg2: number, arg3: $Predicate_<$ItemStack>): $ItemCombinerMenuSlotDefinition$Builder;
        constructor();
    }
}
