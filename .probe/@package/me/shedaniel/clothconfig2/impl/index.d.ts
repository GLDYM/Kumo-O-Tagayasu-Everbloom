import { $Function_ } from "@package/java/util/function";
import { $Color } from "@package/me/shedaniel/math";
import { $FloatFieldBuilder, $DoubleFieldBuilder, $IntListBuilder, $TextDescriptionBuilder, $DropdownMenuBuilder, $SubCategoryBuilder, $TextFieldBuilder, $SelectorBuilder, $FloatListBuilder, $StringFieldBuilder, $KeyCodeBuilder, $IntFieldBuilder, $IntSliderBuilder, $LongListBuilder, $LongFieldBuilder, $DoubleListBuilder, $LongSliderBuilder, $EnumSelectorBuilder, $BooleanToggleBuilder, $ColorFieldBuilder, $StringListBuilder } from "@package/me/shedaniel/clothconfig2/impl/builders";
import { $Component_, $Component, $TextColor_ } from "@package/net/minecraft/network/chat";
import { $AbstractConfigListEntry, $ConfigEntryBuilder, $ModifierKeyCode } from "@package/me/shedaniel/clothconfig2/api";
import { $KeyMapping } from "@package/net/minecraft/client";
import { $List_ } from "@package/java/util";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $Enum, $Class } from "@package/java/lang";
import { $DropdownBoxEntry$SelectionTopCellElement, $DropdownBoxEntry$SelectionCellCreator } from "@package/me/shedaniel/clothconfig2/gui/entries";
export * as builders from "@package/me/shedaniel/clothconfig2/impl/builders";

declare module "@package/me/shedaniel/clothconfig2/impl" {
    export class $ConfigEntryBuilderImpl implements $ConfigEntryBuilder {
        static create(): $ConfigEntryBuilderImpl;
        startModifierKeyCodeField(fieldNameKey: $Component_, value: $ModifierKeyCode): $KeyCodeBuilder;
        startTextDescription(value: $Component_): $TextDescriptionBuilder;
        startFloatField(fieldNameKey: $Component_, value: number): $FloatFieldBuilder;
        startLongSlider(fieldNameKey: $Component_, value: number, min: number, max: number): $LongSliderBuilder;
        startIntField(fieldNameKey: $Component_, value: number): $IntFieldBuilder;
        startStrList(fieldNameKey: $Component_, value: $List_<string>): $StringListBuilder;
        startDoubleField(fieldNameKey: $Component_, value: number): $DoubleFieldBuilder;
        startLongField(fieldNameKey: $Component_, value: number): $LongFieldBuilder;
        startBooleanToggle(fieldNameKey: $Component_, value: boolean): $BooleanToggleBuilder;
        startSubCategory(fieldNameKey: $Component_): $SubCategoryBuilder;
        startSubCategory(fieldNameKey: $Component_, entries: $List_<$AbstractConfigListEntry<any>>): $SubCategoryBuilder;
        startEnumSelector<T extends $Enum<never>>(fieldNameKey: $Component_, clazz: $Class<T>, value: T): $EnumSelectorBuilder<T>;
        startTextField(fieldNameKey: $Component_, value: string): $TextFieldBuilder;
        startIntSlider(fieldNameKey: $Component_, value: number, min: number, max: number): $IntSliderBuilder;
        getResetButtonKey(): $Component;
        setResetButtonKey(resetButtonKey: $Component_): $ConfigEntryBuilder;
        startLongList(fieldNameKey: $Component_, value: $List_<number>): $LongListBuilder;
        startIntList(fieldNameKey: $Component_, value: $List_<number>): $IntListBuilder;
        startFloatList(fieldNameKey: $Component_, value: $List_<number>): $FloatListBuilder;
        startStrField(fieldNameKey: $Component_, value: string): $StringFieldBuilder;
        startDropdownMenu<T>(fieldNameKey: $Component_, topCellElement: $DropdownBoxEntry$SelectionTopCellElement<T>, cellCreator: $DropdownBoxEntry$SelectionCellCreator<T>): $DropdownMenuBuilder<T>;
        startColorField(fieldNameKey: $Component_, value: number): $ColorFieldBuilder;
        startDoubleList(fieldNameKey: $Component_, value: $List_<number>): $DoubleListBuilder;
        startSelector<T>(fieldNameKey: $Component_, valuesArray: T[], value: T): $SelectorBuilder<T>;
        static createImmutable(): $ConfigEntryBuilderImpl;
        fillKeybindingField(fieldNameKey: $Component_, value: $KeyMapping): $KeyCodeBuilder;
        startStringDropdownMenu(fieldNameKey: $Component_, value: string, cellCreator: $DropdownBoxEntry$SelectionCellCreator<string>): $DropdownMenuBuilder<string>;
        startStringDropdownMenu(fieldNameKey: $Component_, value: string, toTextFunction: $Function_<string, $Component>): $DropdownMenuBuilder<string>;
        startStringDropdownMenu(fieldNameKey: $Component_, value: string): $DropdownMenuBuilder<string>;
        startStringDropdownMenu(fieldNameKey: $Component_, value: string, toTextFunction: $Function_<string, $Component>, cellCreator: $DropdownBoxEntry$SelectionCellCreator<string>): $DropdownMenuBuilder<string>;
        startAlphaColorField(fieldNameKey: $Component_, color: $Color): $ColorFieldBuilder;
        startAlphaColorField(fieldNameKey: $Component_, value: number): $ColorFieldBuilder;
        startDropdownMenu<T>(fieldNameKey: $Component_, topCellElement: $DropdownBoxEntry$SelectionTopCellElement<T>): $DropdownMenuBuilder<T>;
        startDropdownMenu<T>(fieldNameKey: $Component_, value: T, toObjectFunction: $Function_<string, T>, toTextFunction: $Function_<T, $Component>, cellCreator: $DropdownBoxEntry$SelectionCellCreator<T>): $DropdownMenuBuilder<T>;
        startDropdownMenu<T>(fieldNameKey: $Component_, value: T, toObjectFunction: $Function_<string, T>, cellCreator: $DropdownBoxEntry$SelectionCellCreator<T>): $DropdownMenuBuilder<T>;
        startDropdownMenu<T>(fieldNameKey: $Component_, value: T, toObjectFunction: $Function_<string, T>): $DropdownMenuBuilder<T>;
        startDropdownMenu<T>(fieldNameKey: $Component_, value: T, toObjectFunction: $Function_<string, T>, toTextFunction: $Function_<T, $Component>): $DropdownMenuBuilder<T>;
        startColorField(fieldNameKey: $Component_, color: $TextColor_): $ColorFieldBuilder;
        startColorField(fieldNameKey: $Component_, color: $Color): $ColorFieldBuilder;
        startKeyCodeField(fieldNameKey: $Component_, value: $InputConstants$Key): $KeyCodeBuilder;
    }
}
