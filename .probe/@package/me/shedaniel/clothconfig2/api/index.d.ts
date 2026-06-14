import { $DynamicElementListWidget$ElementEntry } from "@package/me/shedaniel/clothconfig2/gui/widget";
import { $Component_, $FormattedText, $Component, $TextColor_ } from "@package/net/minecraft/network/chat";
import { $AbstractConfigScreen } from "@package/me/shedaniel/clothconfig2/gui";
import { $KeyMapping } from "@package/net/minecraft/client";
import { $InputConstants$Type, $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $Iterator, $List, $List_ } from "@package/java/util";
import { $DropdownBoxEntry$SelectionTopCellElement, $DropdownBoxEntry$SelectionCellCreator } from "@package/me/shedaniel/clothconfig2/gui/entries";
import { $FormattedCharSequence, $FormattedCharSequence_ } from "@package/net/minecraft/util";
import { $Consumer, $Supplier_, $Function_, $Consumer_, $Supplier } from "@package/java/util/function";
import { $Color, $Rectangle, $Point } from "@package/me/shedaniel/math";
import { $FloatFieldBuilder, $IntListBuilder, $SubCategoryBuilder, $SelectorBuilder, $StringFieldBuilder, $IntFieldBuilder, $IntSliderBuilder, $DoubleListBuilder, $LongSliderBuilder, $EnumSelectorBuilder, $BooleanToggleBuilder, $ColorFieldBuilder, $StringListBuilder, $DoubleFieldBuilder, $TextDescriptionBuilder, $DropdownMenuBuilder, $TextFieldBuilder, $FloatListBuilder, $KeyCodeBuilder, $LongListBuilder, $LongFieldBuilder } from "@package/me/shedaniel/clothconfig2/impl/builders";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Iterable_, $Enum, $Class, $Runnable_, $Object, $Runnable } from "@package/java/lang";
import { $ConfigEntryBuilderImpl } from "@package/me/shedaniel/clothconfig2/impl";

declare module "@package/me/shedaniel/clothconfig2/api" {
    export class $ConfigScreen {
    }
    export interface $ConfigScreen {
        addTooltip(arg0: $Tooltip): void;
        saveAll(arg0: boolean): void;
        setAfterInitConsumer(arg0: $Consumer_<$Screen>): void;
        isRequiresRestart(): boolean;
        isEdited(): boolean;
        setSavingRunnable(arg0: $Runnable_): void;
        matchesSearch(arg0: $Iterator<string>): boolean;
        getBackgroundLocation(): $ResourceLocation;
        set afterInitConsumer(value: $Consumer_<$Screen>);
        get requiresRestart(): boolean;
        get edited(): boolean;
        set savingRunnable(value: $Runnable_);
        get backgroundLocation(): $ResourceLocation;
    }
    export class $ConfigBuilder {
        static create(): $ConfigBuilder;
    }
    export interface $ConfigBuilder {
        build(): $Screen;
        getTitle(): $Component;
        setEditable(arg0: boolean): $ConfigBuilder;
        setTitle(arg0: $Component_): $ConfigBuilder;
        setDefaultBackgroundTexture(arg0: $ResourceLocation_): $ConfigBuilder;
        hasCategory(arg0: $Component_): boolean;
        setShouldListSmoothScroll(arg0: boolean): $ConfigBuilder;
        isListSmoothScrolling(): boolean;
        /**
         * @deprecated
         */
        setDoesProcessErrors(processErrors: boolean): $ConfigBuilder;
        setShouldTabsSmoothScroll(arg0: boolean): $ConfigBuilder;
        getAfterInitConsumer(): $Consumer<$Screen>;
        setFallbackCategory(arg0: $ConfigCategory): $ConfigBuilder;
        isTabsSmoothScrolling(): boolean;
        removeCategoryIfExists(arg0: $Component_): $ConfigBuilder;
        transparentBackground(): $ConfigBuilder;
        hasTransparentBackground(): boolean;
        setTransparentBackground(arg0: boolean): $ConfigBuilder;
        setAfterInitConsumer(arg0: $Consumer_<$Screen>): $ConfigBuilder;
        getParentScreen(): $Screen;
        isEditable(): boolean;
        getOrCreateCategory(arg0: $Component_): $ConfigCategory;
        setParentScreen(arg0: $Screen): $ConfigBuilder;
        entryBuilder(): $ConfigEntryBuilder;
        setSavingRunnable(arg0: $Runnable_): $ConfigBuilder;
        setGlobalized(arg0: boolean): void;
        /**
         * @deprecated
         */
        getEntryBuilder(): $ConfigEntryBuilderImpl;
        removeCategory(arg0: $Component_): $ConfigBuilder;
        /**
         * @deprecated
         */
        doesProcessErrors(): boolean;
        isAlwaysShowTabs(): boolean;
        solidBackground(): $ConfigBuilder;
        alwaysShowTabs(): $ConfigBuilder;
        doesConfirmSave(): boolean;
        getSavingRunnable(): $Runnable;
        setAlwaysShowTabs(arg0: boolean): $ConfigBuilder;
        setDoesConfirmSave(arg0: boolean): $ConfigBuilder;
        setGlobalizedExpanded(arg0: boolean): void;
        getDefaultBackgroundTexture(): $ResourceLocation;
        set shouldListSmoothScroll(value: boolean);
        get listSmoothScrolling(): boolean;
        set shouldTabsSmoothScroll(value: boolean);
        set fallbackCategory(value: $ConfigCategory);
        get tabsSmoothScrolling(): boolean;
        set globalized(value: boolean);
        set globalizedExpanded(value: boolean);
    }
    export class $ConfigCategory {
    }
    export interface $ConfigCategory {
        addEntry(arg0: $AbstractConfigListEntry<any>): $ConfigCategory;
        /**
         * @deprecated
         */
        getEntries(): $List<$Object>;
        getDescription(): $Supplier<($FormattedText[]) | undefined>;
        getBackground(): $ResourceLocation;
        setBackground(arg0: $ResourceLocation_): void;
        removeCategory(): void;
        setDescription(description: $FormattedText[]): void;
        setDescription(arg0: $Supplier_<($FormattedText[]) | undefined>): void;
        setCategoryBackground(arg0: $ResourceLocation_): $ConfigCategory;
        getCategoryKey(): $Component;
        get entries(): $List<$Object>;
        set categoryBackground(value: $ResourceLocation_);
        get categoryKey(): $Component;
    }
    export class $Modifier {
        getValue(): number;
        isEmpty(): boolean;
        static of(alt: boolean, control: boolean, shift: boolean): $Modifier;
        static of(value: number): $Modifier;
        static current(): $Modifier;
        static none(): $Modifier;
        hasAlt(): boolean;
        hasShift(): boolean;
        hasControl(): boolean;
        matchesCurrent(): boolean;
        get value(): number;
        get empty(): boolean;
    }
    export class $Requirement {
        static matches<T>(firstDependency: $ValueHolder_<T>, secondDependency: $ValueHolder_<T>): $Requirement;
        static all(...requirements: $Requirement_[]): $Requirement;
        static not(requirement: $Requirement_): $Requirement;
        static any(...requirements: $Requirement_[]): $Requirement;
        static isTrue(dependency: $ValueHolder_<boolean>): $Requirement;
        static one(...requirements: $Requirement_[]): $Requirement;
        static none(...requirements: $Requirement_[]): $Requirement;
        static isFalse(dependency: $ValueHolder_<boolean>): $Requirement;
        static isValue<T>(dependency: $ValueHolder_<T>, firstValue: T, ...otherValues: T[]): $Requirement;
    }
    export interface $Requirement {
        check(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Requirement}.
     */
    export type $Requirement_ = (() => boolean);
    export class $Tooltip {
        static of(location: $Point, ...text: $FormattedCharSequence_[]): $Tooltip;
        static of(location: $Point, ...text: $FormattedText[]): $Tooltip;
        static of(location: $Point, ...text: $Component_[]): $Tooltip;
    }
    export interface $Tooltip {
        getText(): $List<$FormattedCharSequence>;
        getY(): number;
        getX(): number;
        getPoint(): $Point;
        get text(): $List<$FormattedCharSequence>;
        get y(): number;
        get x(): number;
        get point(): $Point;
    }
    export class $ModifierKeyCode {
        static copyOf(code: $ModifierKeyCode): $ModifierKeyCode;
        static of(keyCode: $InputConstants$Key, modifier: $Modifier): $ModifierKeyCode;
        static unknown(): $ModifierKeyCode;
    }
    export interface $ModifierKeyCode {
        toString(): string;
        getType(): $InputConstants$Type;
        copy(): $ModifierKeyCode;
        matchesKey(keyCode: number, scanCode: number): boolean;
        getLocalizedName(): $Component;
        isUnknown(): boolean;
        matchesMouse(button: number): boolean;
        setKeyCode(arg0: $InputConstants$Key): $ModifierKeyCode;
        getKeyCode(): $InputConstants$Key;
        getModifier(): $Modifier;
        setModifier(arg0: $Modifier): $ModifierKeyCode;
        matchesCurrentKey(): boolean;
        clearModifier(): $ModifierKeyCode;
        setKeyCodeAndModifier(keyCode: $InputConstants$Key, modifier: $Modifier): $ModifierKeyCode;
        matchesCurrentMouse(): boolean;
        get type(): $InputConstants$Type;
        get localizedName(): $Component;
    }
    export class $AbstractConfigListEntry<T> extends $AbstractConfigEntry<T> {
        setEditable(editable: boolean): void;
        isMouseInside(mouseX: number, mouseY: number, x: number, y: number, entryWidth: number, entryHeight: number): boolean;
        getEntryArea(x: number, y: number, entryWidth: number, entryHeight: number): $Rectangle;
        getPreferredTextColor(): number;
        isEditable(): boolean;
        constructor(fieldName: $Component_, requiresRestart: boolean);
        get preferredTextColor(): number;
    }
    export class $ValueHolder<T> {
    }
    export interface $ValueHolder<T> {
        getValue(): T;
        get value(): T;
    }
    /**
     * Values that may be interpreted as {@link $ValueHolder}.
     */
    export type $ValueHolder_<T> = (() => T);
    export class $ConfigEntryBuilder {
        static create(): $ConfigEntryBuilder;
    }
    export interface $ConfigEntryBuilder {
        startModifierKeyCodeField(arg0: $Component_, arg1: $ModifierKeyCode): $KeyCodeBuilder;
        fillKeybindingField(fieldNameKey: $Component_, value: $KeyMapping): $KeyCodeBuilder;
        startStringDropdownMenu(fieldNameKey: $Component_, value: string, cellCreator: $DropdownBoxEntry$SelectionCellCreator<string>): $DropdownMenuBuilder<string>;
        startStringDropdownMenu(fieldNameKey: $Component_, value: string, toTextFunction: $Function_<string, $Component>): $DropdownMenuBuilder<string>;
        startStringDropdownMenu(fieldNameKey: $Component_, value: string): $DropdownMenuBuilder<string>;
        startStringDropdownMenu(fieldNameKey: $Component_, value: string, toTextFunction: $Function_<string, $Component>, cellCreator: $DropdownBoxEntry$SelectionCellCreator<string>): $DropdownMenuBuilder<string>;
        startAlphaColorField(fieldNameKey: $Component_, color: $Color): $ColorFieldBuilder;
        startAlphaColorField(fieldNameKey: $Component_, value: number): $ColorFieldBuilder;
        startTextDescription(arg0: $Component_): $TextDescriptionBuilder;
        startFloatField(arg0: $Component_, arg1: number): $FloatFieldBuilder;
        startLongSlider(arg0: $Component_, arg1: number, arg2: number, arg3: number): $LongSliderBuilder;
        startIntField(arg0: $Component_, arg1: number): $IntFieldBuilder;
        startStrList(arg0: $Component_, arg1: $List_<string>): $StringListBuilder;
        startDoubleField(arg0: $Component_, arg1: number): $DoubleFieldBuilder;
        startLongField(arg0: $Component_, arg1: number): $LongFieldBuilder;
        startBooleanToggle(arg0: $Component_, arg1: boolean): $BooleanToggleBuilder;
        startSubCategory(arg0: $Component_): $SubCategoryBuilder;
        startSubCategory(arg0: $Component_, arg1: $List_<$AbstractConfigListEntry<any>>): $SubCategoryBuilder;
        startEnumSelector<T extends $Enum<never>>(arg0: $Component_, arg1: $Class<T>, arg2: T): $EnumSelectorBuilder<T>;
        startTextField(arg0: $Component_, arg1: string): $TextFieldBuilder;
        startIntSlider(arg0: $Component_, arg1: number, arg2: number, arg3: number): $IntSliderBuilder;
        getResetButtonKey(): $Component;
        setResetButtonKey(arg0: $Component_): $ConfigEntryBuilder;
        startLongList(arg0: $Component_, arg1: $List_<number>): $LongListBuilder;
        startIntList(arg0: $Component_, arg1: $List_<number>): $IntListBuilder;
        startFloatList(arg0: $Component_, arg1: $List_<number>): $FloatListBuilder;
        startStrField(arg0: $Component_, arg1: string): $StringFieldBuilder;
        startDropdownMenu<T>(fieldNameKey: $Component_, topCellElement: $DropdownBoxEntry$SelectionTopCellElement<T>): $DropdownMenuBuilder<T>;
        startDropdownMenu<T>(fieldNameKey: $Component_, value: T, toObjectFunction: $Function_<string, T>, toTextFunction: $Function_<T, $Component>, cellCreator: $DropdownBoxEntry$SelectionCellCreator<T>): $DropdownMenuBuilder<T>;
        startDropdownMenu<T>(fieldNameKey: $Component_, value: T, toObjectFunction: $Function_<string, T>, cellCreator: $DropdownBoxEntry$SelectionCellCreator<T>): $DropdownMenuBuilder<T>;
        startDropdownMenu<T>(fieldNameKey: $Component_, value: T, toObjectFunction: $Function_<string, T>): $DropdownMenuBuilder<T>;
        startDropdownMenu<T>(fieldNameKey: $Component_, value: T, toObjectFunction: $Function_<string, T>, toTextFunction: $Function_<T, $Component>): $DropdownMenuBuilder<T>;
        startDropdownMenu<T>(arg0: $Component_, arg1: $DropdownBoxEntry$SelectionTopCellElement<T>, arg2: $DropdownBoxEntry$SelectionCellCreator<T>): $DropdownMenuBuilder<T>;
        startColorField(fieldNameKey: $Component_, color: $TextColor_): $ColorFieldBuilder;
        startColorField(arg0: $Component_, arg1: number): $ColorFieldBuilder;
        startColorField(fieldNameKey: $Component_, color: $Color): $ColorFieldBuilder;
        startDoubleList(arg0: $Component_, arg1: $List_<number>): $DoubleListBuilder;
        startSelector<T>(arg0: $Component_, arg1: T[], arg2: T): $SelectorBuilder<T>;
        startKeyCodeField(fieldNameKey: $Component_, value: $InputConstants$Key): $KeyCodeBuilder;
    }
    export class $AbstractConfigEntry<T> extends $DynamicElementListWidget$ElementEntry<$AbstractConfigEntry<T>> implements $ReferenceProvider<T>, $ValueHolder<T> {
        save(): void;
        getDefaultValue(): (T) | undefined;
        getFieldName(): $Component;
        setScreen(screen: $AbstractConfigScreen): void;
        getError(): ($Component) | undefined;
        addTooltip(tooltip: $Tooltip): void;
        getReferenceProviderEntries(): $List<$ReferenceProvider<never>>;
        setReferenceProviderEntries(referencableEntries: $List_<$ReferenceProvider_<never>>): void;
        updateSelected(isSelected: boolean): void;
        getSearchTags(): $Iterator<string>;
        setErrorSupplier(errorSupplier: $Supplier_<($Component) | undefined>): void;
        isRequiresRestart(): boolean;
        getConfigError(): ($Component) | undefined;
        appendSearchTags(tags: $Iterable_<string>): void;
        requestReferenceRebuilding(): void;
        provideReferenceEntry(): $AbstractConfigEntry<T>;
        getDisplayedFieldName(): $Component;
        getInitialReferenceOffset(): number;
        isEdited(): boolean;
        lateRender(graphics: $GuiGraphics, mouseX: number, mouseY: number, delta: number): void;
        getConfigScreen(): $AbstractConfigScreen;
        setRequiresRestart(arg0: boolean): void;
        constructor();
        get defaultValue(): (T) | undefined;
        get fieldName(): $Component;
        set screen(value: $AbstractConfigScreen);
        get error(): ($Component) | undefined;
        get searchTags(): $Iterator<string>;
        set errorSupplier(value: $Supplier_<($Component) | undefined>);
        get configError(): ($Component) | undefined;
        get displayedFieldName(): $Component;
        get initialReferenceOffset(): number;
        get edited(): boolean;
        get configScreen(): $AbstractConfigScreen;
    }
    export class $Expandable {
    }
    export interface $Expandable {
        isExpanded(): boolean;
        setExpanded(arg0: boolean): void;
    }
    export class $ReferenceProvider<T> {
    }
    export interface $ReferenceProvider<T> {
        provideReferenceEntry(): $AbstractConfigEntry<T>;
    }
    /**
     * Values that may be interpreted as {@link $ReferenceProvider}.
     */
    export type $ReferenceProvider_<T> = (() => $AbstractConfigEntry<T>);
}
