import { $Consumer, $IntFunction_, $Supplier_, $Function_, $Consumer_, $UnaryOperator_, $Predicate_, $Function, $Supplier } from "@package/java/util/function";
import { $Color } from "@package/me/shedaniel/math";
import { $Stream } from "@package/java/util/stream";
import { $Component_, $TextColor, $Component, $TextColor_ } from "@package/net/minecraft/network/chat";
import { $AbstractConfigListEntry, $Requirement_, $ModifierKeyCode } from "@package/me/shedaniel/clothconfig2/api";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $Iterable_, $Enum, $Class, $Object } from "@package/java/lang";
import { $Spliterator, $Iterator, $List, $SequencedCollection, $Collection_, $List_, $Comparator, $ListIterator } from "@package/java/util";
import { $SelectionListEntry, $DropdownBoxEntry$SelectionTopCellElement, $IntegerSliderEntry, $LongListListEntry$LongListCell, $StringListEntry, $DoubleListListEntry$DoubleListCell, $KeyCodeEntry, $BooleanListEntry, $SubCategoryListEntry, $StringListListEntry$StringListCell, $EnumListEntry, $DoubleListEntry, $TextListEntry, $LongSliderEntry, $ColorEntry, $IntegerListListEntry$IntegerListCell, $IntegerListListEntry, $FloatListListEntry, $DropdownBoxEntry, $FloatListListEntry$FloatListCell, $LongListListEntry, $DropdownBoxEntry$SelectionCellCreator, $StringListListEntry, $LongListEntry, $DoubleListListEntry, $IntegerListEntry, $FloatListEntry } from "@package/me/shedaniel/clothconfig2/gui/entries";

declare module "@package/me/shedaniel/clothconfig2/impl/builders" {
    export class $LongListBuilder extends $AbstractRangeListBuilder<number, $LongListListEntry, $LongListBuilder> {
        build(): $LongListListEntry;
        setMin(min: number): $LongListBuilder;
        setMax(max: number): $LongListBuilder;
        setAddButtonTooltip(addTooltip: $Component_): $LongListBuilder;
        setRemoveButtonTooltip(removeTooltip: $Component_): $LongListBuilder;
        setCreateNewInstance(createNewInstance: $Function_<$LongListListEntry, $LongListListEntry$LongListCell>): $LongListBuilder;
        setDeleteButtonEnabled(deleteButtonEnabled: boolean): $LongListBuilder;
        setSaveConsumer(saveConsumer: $Consumer_<$List<number>>): $LongListBuilder;
        setDefaultValue(defaultValue: $List_<number>): $LongListBuilder;
        requireRestart(): $LongListBuilder;
        removeMax(): $LongListBuilder;
        constructor(resetButtonKey: $Component_, fieldNameKey: $Component_, value: $List_<number>);
        set min(value: number);
        set max(value: number);
        set addButtonTooltip(value: $Component_);
        set removeButtonTooltip(value: $Component_);
        set createNewInstance(value: $Function_<$LongListListEntry, $LongListListEntry$LongListCell>);
        set deleteButtonEnabled(value: boolean);
        set saveConsumer(value: $Consumer_<$List<number>>);
        set defaultValue(value: $List_<number>);
    }
    export class $IntSliderBuilder extends $AbstractSliderFieldBuilder<number, $IntegerSliderEntry, $IntSliderBuilder> {
        setMin(min: number): $IntSliderBuilder;
        setMax(max: number): $IntSliderBuilder;
        setTooltip(tooltip: ($Component_[]) | undefined): $IntSliderBuilder;
        setTooltip(...tooltip: $Component_[]): $IntSliderBuilder;
        removeMin(): $IntSliderBuilder;
        setTooltipSupplier(tooltipSupplier: $Function_<number, ($Component[]) | undefined>): $IntSliderBuilder;
        setSaveConsumer(saveConsumer: $Consumer_<number>): $IntSliderBuilder;
        setDefaultValue(defaultValue: $Supplier_<number>): $IntSliderBuilder;
        setDefaultValue(defaultValue: number): $IntSliderBuilder;
        requireRestart(): $IntSliderBuilder;
        constructor(resetButtonKey: $Component_, fieldNameKey: $Component_, value: number, min: number, max: number);
        set min(value: number);
        set max(value: number);
        set tooltipSupplier(value: $Function_<number, ($Component[]) | undefined>);
        set saveConsumer(value: $Consumer_<number>);
    }
    export class $TextDescriptionBuilder extends $FieldBuilder<$Component, $TextListEntry, $TextDescriptionBuilder> {
        build(): $TextListEntry;
        setColor(color: number): $TextDescriptionBuilder;
        setTooltip(...tooltip: $Component_[]): $TextDescriptionBuilder;
        setTooltip(tooltip: ($Component_[]) | undefined): $TextDescriptionBuilder;
        setTooltipSupplier(tooltipSupplier: $Supplier_<($Component[]) | undefined>): $TextDescriptionBuilder;
        constructor(resetButtonKey: $Component_, fieldNameKey: $Component_, value: $Component_);
        set color(value: number);
        set tooltipSupplier(value: $Supplier_<($Component[]) | undefined>);
    }
    export class $AbstractListBuilder<T, A extends $AbstractConfigListEntry<any>, SELF extends $AbstractListBuilder<T, A, SELF>> extends $AbstractFieldBuilder<$List<T>, A, SELF> {
        setAddButtonTooltip(addTooltip: $Component_): SELF;
        setRemoveButtonTooltip(removeTooltip: $Component_): SELF;
        isDeleteButtonEnabled(): boolean;
        setInsertButtonEnabled(insertButtonEnabled: boolean): SELF;
        isInsertButtonEnabled(): boolean;
        getCellErrorSupplier(): $Function<$List<T>, ($Component) | undefined>;
        setDeleteButtonEnabled(deleteButtonEnabled: boolean): SELF;
        setCellErrorSupplier(cellErrorSupplier: $Function_<$List<T>, ($Component) | undefined>): SELF;
        isExpanded(): boolean;
        setExpanded(expanded: boolean): SELF;
        getAddTooltip(): $Component;
        getRemoveTooltip(): $Component;
        setInsertInFront(insertInFront: boolean): SELF;
        isInsertInFront(): boolean;
        set addButtonTooltip(value: $Component_);
        set removeButtonTooltip(value: $Component_);
        get addTooltip(): $Component;
        get removeTooltip(): $Component;
    }
    export class $DoubleListBuilder extends $AbstractRangeListBuilder<number, $DoubleListListEntry, $DoubleListBuilder> {
        setMin(min: number): $DoubleListBuilder;
        setMax(max: number): $DoubleListBuilder;
        setTooltip(tooltip: ($Component_[]) | undefined): $DoubleListBuilder;
        removeMin(): $DoubleListBuilder;
        setErrorSupplier(errorSupplier: $Function_<$List<number>, ($Component) | undefined>): $DoubleListBuilder;
        setAddButtonTooltip(addTooltip: $Component_): $DoubleListBuilder;
        setCreateNewInstance(createNewInstance: $Function_<$DoubleListListEntry, $DoubleListListEntry$DoubleListCell>): $DoubleListBuilder;
        setCellErrorSupplier(cellErrorSupplier: $Function_<number, ($Component) | undefined>): $DoubleListBuilder;
        setTooltipSupplier(tooltipSupplier: $Supplier_<($Component[]) | undefined>): $DoubleListBuilder;
        setSaveConsumer(saveConsumer: $Consumer_<$List<number>>): $DoubleListBuilder;
        setDefaultValue(defaultValue: $List_<number>): $DoubleListBuilder;
        setDefaultValue(defaultValue: $Supplier_<$List<number>>): $DoubleListBuilder;
        requireRestart(): $DoubleListBuilder;
        constructor(resetButtonKey: $Component_, fieldNameKey: $Component_, value: $List_<number>);
        set min(value: number);
        set max(value: number);
        set tooltip(value: ($Component_[]) | undefined);
        set errorSupplier(value: $Function_<$List<number>, ($Component) | undefined>);
        set addButtonTooltip(value: $Component_);
        set createNewInstance(value: $Function_<$DoubleListListEntry, $DoubleListListEntry$DoubleListCell>);
        set cellErrorSupplier(value: $Function_<number, ($Component) | undefined>);
        set tooltipSupplier(value: $Supplier_<($Component[]) | undefined>);
        set saveConsumer(value: $Consumer_<$List<number>>);
    }
    export class $StringFieldBuilder extends $AbstractFieldBuilder<string, $StringListEntry, $StringFieldBuilder> {
        build(): $StringListEntry;
        setTooltip(tooltip: ($Component_[]) | undefined): $StringFieldBuilder;
        setTooltip(...tooltip: $Component_[]): $StringFieldBuilder;
        setDefaultValue(defaultValue: $Supplier_<string>): $StringFieldBuilder;
        setDefaultValue(defaultValue: string): $StringFieldBuilder;
        requireRestart(): $StringFieldBuilder;
        constructor(resetButtonKey: $Component_, fieldNameKey: $Component_, value: string);
    }
    export class $AbstractRangeListBuilder<T, A extends $AbstractConfigListEntry<any>, SELF extends $AbstractRangeListBuilder<T, A, SELF>> extends $AbstractListBuilder<T, A, SELF> {
        setMin(min: T): SELF;
        setMax(max: T): SELF;
        removeMin(): SELF;
        removeMax(): SELF;
        set min(value: T);
        set max(value: T);
    }
    export class $LongSliderBuilder extends $AbstractSliderFieldBuilder<number, $LongSliderEntry, $LongSliderBuilder> {
        setTooltip(...tooltip: $Component_[]): $LongSliderBuilder;
        setTooltip(tooltip: ($Component_[]) | undefined): $LongSliderBuilder;
        setErrorSupplier(errorSupplier: $Function_<number, ($Component) | undefined>): $LongSliderBuilder;
        setDefaultValue(defaultValue: number): $LongSliderBuilder;
        setTextGetter(textGetter: $Function_<number, $Component>): $LongSliderBuilder;
        requireRestart(): $LongSliderBuilder;
        constructor(resetButtonKey: $Component_, fieldNameKey: $Component_, value: number, min: number, max: number);
        set errorSupplier(value: $Function_<number, ($Component) | undefined>);
        set defaultValue(value: number);
        set textGetter(value: $Function_<number, $Component>);
    }
    export class $KeyCodeBuilder extends $FieldBuilder<$ModifierKeyCode, $KeyCodeEntry, $KeyCodeBuilder> {
        build(): $KeyCodeEntry;
        setTooltip(...tooltip: $Component_[]): $KeyCodeBuilder;
        setTooltip(tooltip: ($Component_[]) | undefined): $KeyCodeBuilder;
        setErrorSupplier(errorSupplier: $Function_<$InputConstants$Key, ($Component) | undefined>): $KeyCodeBuilder;
        setModifierSaveConsumer(saveConsumer: $Consumer_<$ModifierKeyCode>): $KeyCodeBuilder;
        setModifierErrorSupplier(errorSupplier: $Function_<$ModifierKeyCode, ($Component) | undefined>): $KeyCodeBuilder;
        setModifierTooltipSupplier(tooltipSupplier: $Function_<$ModifierKeyCode, ($Component[]) | undefined>): $KeyCodeBuilder;
        setModifierDefaultValue(defaultValue: $Supplier_<$ModifierKeyCode>): $KeyCodeBuilder;
        setKeyTooltipSupplier(tooltipSupplier: $Function_<$InputConstants$Key, ($Component[]) | undefined>): $KeyCodeBuilder;
        setTooltipSupplier(tooltipSupplier: $Supplier_<($Component[]) | undefined>): $KeyCodeBuilder;
        setDefaultValue(defaultValue: $Supplier_<$InputConstants$Key>): $KeyCodeBuilder;
        setDefaultValue(defaultValue: $InputConstants$Key): $KeyCodeBuilder;
        setDefaultValue(defaultValue: $ModifierKeyCode): $KeyCodeBuilder;
        requireRestart(): $KeyCodeBuilder;
        setAllowModifiers(allowModifiers: boolean): $KeyCodeBuilder;
        setKeySaveConsumer(saveConsumer: $Consumer_<$InputConstants$Key>): $KeyCodeBuilder;
        setAllowKey(allowKey: boolean): $KeyCodeBuilder;
        setAllowMouse(allowMouse: boolean): $KeyCodeBuilder;
        constructor(resetButtonKey: $Component_, fieldNameKey: $Component_, value: $ModifierKeyCode);
        set errorSupplier(value: $Function_<$InputConstants$Key, ($Component) | undefined>);
        set modifierSaveConsumer(value: $Consumer_<$ModifierKeyCode>);
        set modifierErrorSupplier(value: $Function_<$ModifierKeyCode, ($Component) | undefined>);
        set modifierTooltipSupplier(value: $Function_<$ModifierKeyCode, ($Component[]) | undefined>);
        set modifierDefaultValue(value: $Supplier_<$ModifierKeyCode>);
        set keyTooltipSupplier(value: $Function_<$InputConstants$Key, ($Component[]) | undefined>);
        set tooltipSupplier(value: $Supplier_<($Component[]) | undefined>);
        set allowModifiers(value: boolean);
        set keySaveConsumer(value: $Consumer_<$InputConstants$Key>);
        set allowKey(value: boolean);
        set allowMouse(value: boolean);
    }
    export class $AbstractFieldBuilder<T, A extends $AbstractConfigListEntry<any>, SELF extends $FieldBuilder<T, A, SELF>> extends $FieldBuilder<T, A, SELF> {
        setTooltip(tooltip: ($Component_[]) | undefined): SELF;
        setTooltip(...tooltip: $Component_[]): SELF;
        setErrorSupplier(errorSupplier: $Function_<T, ($Component) | undefined>): SELF;
        getTooltipSupplier(): $Function<T, ($Component[]) | undefined>;
        setTooltipSupplier(tooltipSupplier: $Function_<T, ($Component[]) | undefined>): SELF;
        setTooltipSupplier(tooltipSupplier: $Supplier_<($Component[]) | undefined>): SELF;
        setSaveConsumer(saveConsumer: $Consumer_<T>): SELF;
        setDefaultValue(defaultValue: $Supplier_<T>): SELF;
        setDefaultValue(defaultValue: T): SELF;
        requireRestart(): SELF;
        getSaveConsumer(): $Consumer<T>;
        set errorSupplier(value: $Function_<T, ($Component) | undefined>);
    }
    export class $AbstractRangeFieldBuilder<T, A extends $AbstractConfigListEntry<any>, SELF extends $FieldBuilder<T, A, SELF>> extends $AbstractFieldBuilder<T, A, SELF> {
        setMin(min: T): SELF;
        setMax(max: T): SELF;
        removeMin(): SELF;
        removeMax(): SELF;
        set min(value: T);
        set max(value: T);
    }
    export class $IntListBuilder extends $AbstractRangeListBuilder<number, $IntegerListListEntry, $IntListBuilder> {
        build(): $IntegerListListEntry;
        setMin(min: number): $IntListBuilder;
        setMax(max: number): $IntListBuilder;
        setAddButtonTooltip(addTooltip: $Component_): $IntListBuilder;
        setRemoveButtonTooltip(removeTooltip: $Component_): $IntListBuilder;
        setCreateNewInstance(createNewInstance: $Function_<$IntegerListListEntry, $IntegerListListEntry$IntegerListCell>): $IntListBuilder;
        setDeleteButtonEnabled(deleteButtonEnabled: boolean): $IntListBuilder;
        setSaveConsumer(saveConsumer: $Consumer_<$List<number>>): $IntListBuilder;
        setDefaultValue(defaultValue: $List_<number>): $IntListBuilder;
        requireRestart(): $IntListBuilder;
        removeMax(): $IntListBuilder;
        constructor(resetButtonKey: $Component_, fieldNameKey: $Component_, value: $List_<number>);
        set min(value: number);
        set max(value: number);
        set addButtonTooltip(value: $Component_);
        set removeButtonTooltip(value: $Component_);
        set createNewInstance(value: $Function_<$IntegerListListEntry, $IntegerListListEntry$IntegerListCell>);
        set deleteButtonEnabled(value: boolean);
        set saveConsumer(value: $Consumer_<$List<number>>);
        set defaultValue(value: $List_<number>);
    }
    export class $DoubleFieldBuilder extends $AbstractRangeFieldBuilder<number, $DoubleListEntry, $DoubleFieldBuilder> {
        setMin(min: number): $DoubleFieldBuilder;
        setMax(max: number): $DoubleFieldBuilder;
        setTooltip(...tooltip: $Component_[]): $DoubleFieldBuilder;
        removeMin(): $DoubleFieldBuilder;
        setDefaultValue(defaultValue: number): $DoubleFieldBuilder;
        constructor(resetButtonKey: $Component_, fieldNameKey: $Component_, value: number);
        set min(value: number);
        set max(value: number);
        set tooltip(value: $Component_[]);
        set defaultValue(value: number);
    }
    export class $BooleanToggleBuilder extends $AbstractFieldBuilder<boolean, $BooleanListEntry, $BooleanToggleBuilder> {
        setTooltip(...tooltip: $Component_[]): $BooleanToggleBuilder;
        setTooltip(tooltip: ($Component_[]) | undefined): $BooleanToggleBuilder;
        setDefaultValue(defaultValue: boolean): $BooleanToggleBuilder;
        getYesNoTextSupplier(): $Function<boolean, $Component>;
        setYesNoTextSupplier(yesNoTextSupplier: $Function_<boolean, $Component>): $BooleanToggleBuilder;
        constructor(resetButtonKey: $Component_, fieldNameKey: $Component_, value: boolean);
        set defaultValue(value: boolean);
    }
    export class $LongFieldBuilder extends $AbstractRangeFieldBuilder<number, $LongListEntry, $LongFieldBuilder> {
        setMin(min: number): $LongFieldBuilder;
        setMax(max: number): $LongFieldBuilder;
        setTooltip(...tooltip: $Component_[]): $LongFieldBuilder;
        setTooltip(tooltip: ($Component_[]) | undefined): $LongFieldBuilder;
        removeMin(): $LongFieldBuilder;
        setTooltipSupplier(tooltipSupplier: $Function_<number, ($Component[]) | undefined>): $LongFieldBuilder;
        setTooltipSupplier(tooltipSupplier: $Supplier_<($Component[]) | undefined>): $LongFieldBuilder;
        setDefaultValue(defaultValue: number): $LongFieldBuilder;
        constructor(resetButtonKey: $Component_, fieldNameKey: $Component_, value: number);
        set min(value: number);
        set max(value: number);
        set defaultValue(value: number);
    }
    export class $SubCategoryBuilder extends $FieldBuilder<$List<$AbstractConfigListEntry<any>>, $SubCategoryListEntry, $SubCategoryBuilder> implements $List<$AbstractConfigListEntry<any>> {
        remove(o: $Object): boolean;
        remove(index: number): $AbstractConfigListEntry<any>;
        size(): number;
        indexOf(o: $Object): number;
        clear(): void;
        lastIndexOf(o: $Object): number;
        isEmpty(): boolean;
        add(abstractConfigListEntry: $AbstractConfigListEntry<any>): boolean;
        add(index: number, element: $AbstractConfigListEntry<any>): void;
        subList(fromIndex: number, toIndex: number): $List<$AbstractConfigListEntry<any>>;
        toArray<T>(a: T[]): T[];
        toArray(): $Object[];
        iterator(): $Iterator<$AbstractConfigListEntry<any>>;
        contains(o: $Object): boolean;
        addAll(c: $Collection_<$AbstractConfigListEntry<any>>): boolean;
        addAll(index: number, c: $Collection_<$AbstractConfigListEntry<any>>): boolean;
        set(index: number, element: $AbstractConfigListEntry<any>): $AbstractConfigListEntry<any>;
        removeAll(c: $Collection_<never>): boolean;
        retainAll(c: $Collection_<never>): boolean;
        listIterator(index: number): $ListIterator<$AbstractConfigListEntry<any>>;
        listIterator(): $ListIterator<$AbstractConfigListEntry<any>>;
        containsAll(c: $Collection_<never>): boolean;
        setTooltip(...tooltip: $Component_[]): $SubCategoryBuilder;
        setTooltip(tooltip: ($Component_[]) | undefined): $SubCategoryBuilder;
        setTooltipSupplier(tooltipSupplier: $Function_<$List<$AbstractConfigListEntry<any>>, ($Component[]) | undefined>): $SubCategoryBuilder;
        setTooltipSupplier(tooltipSupplier: $Supplier_<($Component[]) | undefined>): $SubCategoryBuilder;
        setExpanded(expanded: boolean): $SubCategoryBuilder;
        replaceAll(arg0: $UnaryOperator_<$AbstractConfigListEntry<any>>): void;
        spliterator(): $Spliterator<$AbstractConfigListEntry<any>>;
        sort(arg0: $Comparator<$AbstractConfigListEntry<any>>): void;
        getFirst(): $AbstractConfigListEntry<any>;
        getLast(): $AbstractConfigListEntry<any>;
        addFirst(arg0: $AbstractConfigListEntry<any>): void;
        addLast(arg0: $AbstractConfigListEntry<any>): void;
        removeFirst(): $AbstractConfigListEntry<any>;
        removeLast(): $AbstractConfigListEntry<any>;
        toArray<T>(arg0: $IntFunction_<T[]>): T[];
        stream(): $Stream<$AbstractConfigListEntry<any>>;
        removeIf(arg0: $Predicate_<$AbstractConfigListEntry<any>>): boolean;
        parallelStream(): $Stream<$AbstractConfigListEntry<any>>;
        forEach(arg0: $Consumer_<$AbstractConfigListEntry<any>>): void;
        get(arg0: number): $AbstractConfigListEntry<any>;
        reversed(): $SequencedCollection<$AbstractConfigListEntry<any>>;
        constructor(resetButtonKey: $Component_, fieldNameKey: $Component_);
        [Symbol.iterator](): Iterator<$AbstractConfigListEntry<any>>
        get empty(): boolean;
        set expanded(value: boolean);
        get first(): $AbstractConfigListEntry<any>;
        get last(): $AbstractConfigListEntry<any>;
    }
    export class $FloatListBuilder extends $AbstractRangeListBuilder<number, $FloatListListEntry, $FloatListBuilder> {
        build(): $FloatListListEntry;
        setMin(min: number): $FloatListBuilder;
        setMax(max: number): $FloatListBuilder;
        setTooltip(tooltip: ($Component_[]) | undefined): $FloatListBuilder;
        setTooltip(...tooltip: $Component_[]): $FloatListBuilder;
        setAddButtonTooltip(addTooltip: $Component_): $FloatListBuilder;
        setRemoveButtonTooltip(removeTooltip: $Component_): $FloatListBuilder;
        setCreateNewInstance(createNewInstance: $Function_<$FloatListListEntry, $FloatListListEntry$FloatListCell>): $FloatListBuilder;
        setTooltipSupplier(tooltipSupplier: $Function_<$List<number>, ($Component[]) | undefined>): $FloatListBuilder;
        setDefaultValue(defaultValue: $List_<number>): $FloatListBuilder;
        removeMax(): $FloatListBuilder;
        constructor(resetButtonKey: $Component_, fieldNameKey: $Component_, value: $List_<number>);
        set min(value: number);
        set max(value: number);
        set addButtonTooltip(value: $Component_);
        set removeButtonTooltip(value: $Component_);
        set createNewInstance(value: $Function_<$FloatListListEntry, $FloatListListEntry$FloatListCell>);
        set tooltipSupplier(value: $Function_<$List<number>, ($Component[]) | undefined>);
        set defaultValue(value: $List_<number>);
    }
    export class $IntFieldBuilder extends $AbstractRangeFieldBuilder<number, $IntegerListEntry, $IntFieldBuilder> {
        setMin(min: number): $IntFieldBuilder;
        setMax(max: number): $IntFieldBuilder;
        setTooltip(tooltip: ($Component_[]) | undefined): $IntFieldBuilder;
        removeMin(): $IntFieldBuilder;
        setErrorSupplier(errorSupplier: $Function_<number, ($Component) | undefined>): $IntFieldBuilder;
        setTooltipSupplier(tooltipSupplier: $Supplier_<($Component[]) | undefined>): $IntFieldBuilder;
        setDefaultValue(defaultValue: number): $IntFieldBuilder;
        requireRestart(): $IntFieldBuilder;
        removeMax(): $IntFieldBuilder;
        constructor(resetButtonKey: $Component_, fieldNameKey: $Component_, value: number);
        set min(value: number);
        set max(value: number);
        set tooltip(value: ($Component_[]) | undefined);
        set errorSupplier(value: $Function_<number, ($Component) | undefined>);
        set tooltipSupplier(value: $Supplier_<($Component[]) | undefined>);
        set defaultValue(value: number);
    }
    export class $TextFieldBuilder extends $AbstractFieldBuilder<string, $StringListEntry, $TextFieldBuilder> {
        build(): $StringListEntry;
        setTooltip(tooltip: ($Component_[]) | undefined): $TextFieldBuilder;
        setTooltip(...tooltip: $Component_[]): $TextFieldBuilder;
        setDefaultValue(defaultValue: $Supplier_<string>): $TextFieldBuilder;
        setDefaultValue(defaultValue: string): $TextFieldBuilder;
        requireRestart(): $TextFieldBuilder;
        constructor(resetButtonKey: $Component_, fieldNameKey: $Component_, value: string);
    }
    export class $ColorFieldBuilder extends $AbstractFieldBuilder<number, $ColorEntry, $ColorFieldBuilder> {
        build(): $ColorEntry;
        setTooltip(...tooltip: $Component_[]): $ColorFieldBuilder;
        setTooltip(tooltip: ($Component_[]) | undefined): $ColorFieldBuilder;
        setErrorSupplier(errorSupplier: $Function_<number, ($Component) | undefined>): $ColorFieldBuilder;
        setSaveConsumer(saveConsumer: $Consumer_<number>): $ColorFieldBuilder;
        setAlphaMode(withAlpha: boolean): $ColorFieldBuilder;
        setDefaultValue(defaultValue: $Supplier_<number>): $ColorFieldBuilder;
        setDefaultValue(defaultValue: $TextColor_): $ColorFieldBuilder;
        setDefaultValue(defaultValue: number): $ColorFieldBuilder;
        setDefaultValue3(defaultValue: $Supplier_<$TextColor>): $ColorFieldBuilder;
        setSaveConsumer2(saveConsumer: $Consumer_<$Color>): $ColorFieldBuilder;
        setSaveConsumer3(saveConsumer: $Consumer_<$TextColor>): $ColorFieldBuilder;
        setDefaultValue2(defaultValue: $Supplier_<$Color>): $ColorFieldBuilder;
        constructor(resetButtonKey: $Component_, fieldNameKey: $Component_, value: number);
        set errorSupplier(value: $Function_<number, ($Component) | undefined>);
        set saveConsumer(value: $Consumer_<number>);
        set alphaMode(value: boolean);
        set defaultValue3(value: $Supplier_<$TextColor>);
        set saveConsumer2(value: $Consumer_<$Color>);
        set saveConsumer3(value: $Consumer_<$TextColor>);
        set defaultValue2(value: $Supplier_<$Color>);
    }
    export class $DropdownMenuBuilder<T> extends $FieldBuilder<T, $DropdownBoxEntry<T>, $DropdownMenuBuilder<T>> {
        build(): $DropdownBoxEntry<T>;
        setTooltip(tooltip: ($Component_[]) | undefined): $DropdownMenuBuilder<T>;
        setTooltip(...tooltip: $Component_[]): $DropdownMenuBuilder<T>;
        setErrorSupplier(errorSupplier: $Function_<T, ($Component) | undefined>): $DropdownMenuBuilder<T>;
        setTooltipSupplier(tooltipSupplier: $Supplier_<($Component[]) | undefined>): $DropdownMenuBuilder<T>;
        setTooltipSupplier(tooltipSupplier: $Function_<T, ($Component[]) | undefined>): $DropdownMenuBuilder<T>;
        setSaveConsumer(saveConsumer: $Consumer_<T>): $DropdownMenuBuilder<T>;
        setDefaultValue(defaultValue: $Supplier_<T>): $DropdownMenuBuilder<T>;
        setDefaultValue(defaultValue: T): $DropdownMenuBuilder<T>;
        requireRestart(): $DropdownMenuBuilder<T>;
        isSuggestionMode(): boolean;
        setSelections(selections: $Iterable_<T>): $DropdownMenuBuilder<T>;
        setSuggestionMode(suggestionMode: boolean): $DropdownMenuBuilder<T>;
        constructor(resetButtonKey: $Component_, fieldNameKey: $Component_, topCellElement: $DropdownBoxEntry$SelectionTopCellElement<T>, cellCreator: $DropdownBoxEntry$SelectionCellCreator<T>);
        set errorSupplier(value: $Function_<T, ($Component) | undefined>);
        set saveConsumer(value: $Consumer_<T>);
        set selections(value: $Iterable_<T>);
    }
    export class $AbstractSliderFieldBuilder<T, A extends $AbstractConfigListEntry<any>, SELF extends $FieldBuilder<T, A, SELF>> extends $AbstractRangeFieldBuilder<T, A, SELF> {
        setTextGetter(textGetter: $Function_<T, $Component>): SELF;
        set textGetter(value: $Function_<T, $Component>);
    }
    export class $SelectorBuilder<T> extends $AbstractFieldBuilder<T, $SelectionListEntry<T>, $SelectorBuilder<T>> {
        build(): $SelectionListEntry<T>;
        setTooltip(tooltip: ($Component_[]) | undefined): $SelectorBuilder<T>;
        setTooltip(...tooltip: $Component_[]): $SelectorBuilder<T>;
        setDefaultValue(defaultValue: T): $SelectorBuilder<T>;
        setNameProvider(enumNameProvider: $Function_<T, $Component>): $SelectorBuilder<T>;
        constructor(resetButtonKey: $Component_, fieldNameKey: $Component_, valuesArray: T[], value: T);
        set defaultValue(value: T);
        set nameProvider(value: $Function_<T, $Component>);
    }
    export class $StringListBuilder extends $AbstractListBuilder<string, $StringListListEntry, $StringListBuilder> {
        setTooltip(...tooltip: $Component_[]): $StringListBuilder;
        setTooltip(tooltip: ($Component_[]) | undefined): $StringListBuilder;
        setErrorSupplier(errorSupplier: $Function_<$List<string>, ($Component) | undefined>): $StringListBuilder;
        setAddButtonTooltip(addTooltip: $Component_): $StringListBuilder;
        setCreateNewInstance(createNewInstance: $Function_<$StringListListEntry, $StringListListEntry$StringListCell>): $StringListBuilder;
        setTooltipSupplier(tooltipSupplier: $Function_<$List<string>, ($Component[]) | undefined>): $StringListBuilder;
        setSaveConsumer(saveConsumer: $Consumer_<$List<string>>): $StringListBuilder;
        setDefaultValue(defaultValue: $List_<string>): $StringListBuilder;
        constructor(resetButtonKey: $Component_, fieldNameKey: $Component_, value: $List_<string>);
        set errorSupplier(value: $Function_<$List<string>, ($Component) | undefined>);
        set addButtonTooltip(value: $Component_);
        set createNewInstance(value: $Function_<$StringListListEntry, $StringListListEntry$StringListCell>);
        set tooltipSupplier(value: $Function_<$List<string>, ($Component[]) | undefined>);
        set saveConsumer(value: $Consumer_<$List<string>>);
        set defaultValue(value: $List_<string>);
    }
    export class $FloatFieldBuilder extends $AbstractRangeFieldBuilder<number, $FloatListEntry, $FloatFieldBuilder> {
        setMin(min: number): $FloatFieldBuilder;
        setMax(max: number): $FloatFieldBuilder;
        setTooltip(...tooltip: $Component_[]): $FloatFieldBuilder;
        setTooltip(tooltip: ($Component_[]) | undefined): $FloatFieldBuilder;
        removeMin(): $FloatFieldBuilder;
        setTooltipSupplier(tooltipSupplier: $Supplier_<($Component[]) | undefined>): $FloatFieldBuilder;
        setTooltipSupplier(tooltipSupplier: $Function_<number, ($Component[]) | undefined>): $FloatFieldBuilder;
        setDefaultValue(defaultValue: number): $FloatFieldBuilder;
        constructor(resetButtonKey: $Component_, fieldNameKey: $Component_, value: number);
        set min(value: number);
        set max(value: number);
        set defaultValue(value: number);
    }
    export class $EnumSelectorBuilder<T extends $Enum<never>> extends $AbstractFieldBuilder<T, $EnumListEntry<T>, $EnumSelectorBuilder<T>> {
        build(): $EnumListEntry<T>;
        setTooltip(tooltip: ($Component_[]) | undefined): $EnumSelectorBuilder<T>;
        setTooltip(...tooltip: $Component_[]): $EnumSelectorBuilder<T>;
        setErrorSupplier(errorSupplier: $Function_<T, ($Component) | undefined>): $EnumSelectorBuilder<T>;
        setEnumNameProvider(enumNameProvider: $Function_<$Enum<any>, $Component>): $EnumSelectorBuilder<T>;
        setSaveConsumer(saveConsumer: $Consumer_<T>): $EnumSelectorBuilder<T>;
        setDefaultValue(defaultValue: T): $EnumSelectorBuilder<T>;
        requireRestart(): $EnumSelectorBuilder<T>;
        constructor(resetButtonKey: $Component_, fieldNameKey: $Component_, clazz: $Class<T>, value: T);
        set errorSupplier(value: $Function_<T, ($Component) | undefined>);
        set enumNameProvider(value: $Function_<$Enum<any>, $Component>);
        set saveConsumer(value: $Consumer_<T>);
        set defaultValue(value: T);
    }
    export class $FieldBuilder<T, A extends $AbstractConfigListEntry<any>, SELF extends $FieldBuilder<T, A, SELF>> {
        getDefaultValue(): $Supplier<T>;
        build(): A;
        setRequirement(requirement: $Requirement_): SELF;
        setDisplayRequirement(requirement: $Requirement_): SELF;
        requireRestart(requireRestart: boolean): void;
        getResetButtonKey(): $Component;
        /**
         * @deprecated
         */
        buildEntry(): $AbstractConfigListEntry<any>;
        isRequireRestart(): boolean;
        getFieldNameKey(): $Component;
        get defaultValue(): $Supplier<T>;
        set requirement(value: $Requirement_);
        set displayRequirement(value: $Requirement_);
        get resetButtonKey(): $Component;
        get fieldNameKey(): $Component;
    }
}
