import { $Supplier_, $Function_, $Consumer_, $BiFunction_, $Function, $Supplier } from "@package/java/util/function";
import { $Rectangle } from "@package/me/shedaniel/math";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $AbstractConfigListEntry, $Expandable, $ModifierKeyCode } from "@package/me/shedaniel/clothconfig2/api";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Iterable_, $Enum, $Class, $Object } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $AbstractContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/me/shedaniel/clothconfig2/gui/entries" {
    export class $LongListListEntry$LongListCell extends $AbstractTextFieldListListEntry$AbstractTextFieldListCell<number, $LongListListEntry$LongListCell, $LongListListEntry> {
        getValue(): number;
        constructor(value: number, listListEntry: $LongListListEntry);
        get value(): number;
    }
    export class $DropdownBoxEntry$SelectionCellCreator<R> {
        create(arg0: R): $DropdownBoxEntry$SelectionCellElement<R>;
        getCellWidth(): number;
        getCellHeight(): number;
        getDropBoxMaxHeight(): number;
        constructor();
        get cellWidth(): number;
        get cellHeight(): number;
        get dropBoxMaxHeight(): number;
    }
    export class $DoubleListEntry extends $AbstractNumberListEntry<number> {
        getValue(): number;
        setMaximum(maximum: number): $DoubleListEntry;
        setMinimum(minimum: number): $DoubleListEntry;
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, value: number, resetButtonKey: $Component_, defaultValue: $Supplier_<number>, saveConsumer: $Consumer_<number>, tooltipSupplier: $Supplier_<($Component[]) | undefined>, requiresRestart: boolean);
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, value: number, resetButtonKey: $Component_, defaultValue: $Supplier_<number>, saveConsumer: $Consumer_<number>, tooltipSupplier: $Supplier_<($Component[]) | undefined>);
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, value: number, resetButtonKey: $Component_, defaultValue: $Supplier_<number>, saveConsumer: $Consumer_<number>);
        get value(): number;
        set maximum(value: number);
        set minimum(value: number);
    }
    export class $AbstractNumberListEntry<T> extends $TextFieldListEntry<T> {
    }
    export class $DropdownBoxEntry$SelectionTopCellElement<R> extends $AbstractContainerEventHandler {
        getValue(): R;
        getParent(): $DropdownBoxEntry<R>;
        setValue(arg0: R): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        hasError(): boolean;
        getError(): ($Component) | undefined;
        getSearchTerm(): $Component;
        getConfigError(): ($Component) | undefined;
        getPreferredTextColor(): number;
        isEdited(): boolean;
        isSuggestionMode(): boolean;
        hasConfigError(): boolean;
        selectFirstRecommendation(): void;
        constructor();
        get parent(): $DropdownBoxEntry<R>;
        get error(): ($Component) | undefined;
        get searchTerm(): $Component;
        get configError(): ($Component) | undefined;
        get preferredTextColor(): number;
        get edited(): boolean;
        get suggestionMode(): boolean;
    }
    export class $StringListListEntry extends $AbstractTextFieldListListEntry<string, $StringListListEntry$StringListCell, $StringListListEntry> {
        self(): $StringListListEntry;
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, value: $List_<string>, defaultExpanded: boolean, tooltipSupplier: $Supplier_<($Component[]) | undefined>, saveConsumer: $Consumer_<$List<string>>, defaultValue: $Supplier_<$List<string>>, resetButtonKey: $Component_, requiresRestart: boolean, deleteButtonEnabled: boolean, insertInFront: boolean);
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, value: $List_<string>, defaultExpanded: boolean, tooltipSupplier: $Supplier_<($Component[]) | undefined>, saveConsumer: $Consumer_<$List<string>>, defaultValue: $Supplier_<$List<string>>, resetButtonKey: $Component_, requiresRestart: boolean);
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, value: $List_<string>, defaultExpanded: boolean, tooltipSupplier: $Supplier_<($Component[]) | undefined>, saveConsumer: $Consumer_<$List<string>>, defaultValue: $Supplier_<$List<string>>, resetButtonKey: $Component_);
    }
    export class $FloatListListEntry extends $AbstractTextFieldListListEntry<number, $FloatListListEntry$FloatListCell, $FloatListListEntry> {
        self(): $FloatListListEntry;
        setMaximum(maximum: number): $FloatListListEntry;
        setMinimum(minimum: number): $FloatListListEntry;
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, value: $List_<number>, defaultExpanded: boolean, tooltipSupplier: $Supplier_<($Component[]) | undefined>, saveConsumer: $Consumer_<$List<number>>, defaultValue: $Supplier_<$List<number>>, resetButtonKey: $Component_, requiresRestart: boolean, deleteButtonEnabled: boolean, insertInFront: boolean);
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, value: $List_<number>, defaultExpanded: boolean, tooltipSupplier: $Supplier_<($Component[]) | undefined>, saveConsumer: $Consumer_<$List<number>>, defaultValue: $Supplier_<$List<number>>, resetButtonKey: $Component_, requiresRestart: boolean);
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, value: $List_<number>, defaultExpanded: boolean, tooltipSupplier: $Supplier_<($Component[]) | undefined>, saveConsumer: $Consumer_<$List<number>>, defaultValue: $Supplier_<$List<number>>, resetButtonKey: $Component_);
        set maximum(value: number);
        set minimum(value: number);
    }
    export class $AbstractListListEntry$AbstractListCell<T, SELF extends $AbstractListListEntry$AbstractListCell<T, SELF, OUTER_SELF>, OUTER_SELF extends $AbstractListListEntry<T, SELF, OUTER_SELF>> extends $BaseListCell {
        getValue(): T;
        constructor(value: T, listListEntry: OUTER_SELF);
        get value(): T;
    }
    export class $SubCategoryListEntry extends $TooltipListEntry<$List<$AbstractConfigListEntry<any>>> implements $Expandable {
        filteredEntries(): $List<$AbstractConfigListEntry<any>>;
        isExpanded(): boolean;
        setExpanded(expanded: boolean): void;
        getCategoryName(): $Component;
        /**
         * @deprecated
         */
        constructor(categoryName: $Component_, entries: $List_<$AbstractConfigListEntry<any>>, defaultExpanded: boolean);
        get categoryName(): $Component;
    }
    export class $EnumListEntry<T extends $Enum<never>> extends $SelectionListEntry<T> {
        static DEFAULT_NAME_PROVIDER: $Function<$Enum<any>, $Component>;
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, clazz: $Class<T>, value: T, resetButtonKey: $Component_, defaultValue: $Supplier_<T>, saveConsumer: $Consumer_<T>, enumNameProvider: $Function_<$Enum<any>, $Component>, tooltipSupplier: $Supplier_<($Component[]) | undefined>, requiresRestart: boolean);
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, clazz: $Class<T>, value: T, resetButtonKey: $Component_, defaultValue: $Supplier_<T>, saveConsumer: $Consumer_<T>, enumNameProvider: $Function_<$Enum<any>, $Component>, tooltipSupplier: $Supplier_<($Component[]) | undefined>);
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, clazz: $Class<T>, value: T, resetButtonKey: $Component_, defaultValue: $Supplier_<T>, saveConsumer: $Consumer_<T>, enumNameProvider: $Function_<$Enum<any>, $Component>);
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, clazz: $Class<T>, value: T, resetButtonKey: $Component_, defaultValue: $Supplier_<T>, saveConsumer: $Consumer_<T>);
    }
    export class $IntegerListListEntry extends $AbstractTextFieldListListEntry<number, $IntegerListListEntry$IntegerListCell, $IntegerListListEntry> {
        self(): $IntegerListListEntry;
        setMaximum(maximum: number): $IntegerListListEntry;
        setMinimum(minimum: number): $IntegerListListEntry;
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, value: $List_<number>, defaultExpanded: boolean, tooltipSupplier: $Supplier_<($Component[]) | undefined>, saveConsumer: $Consumer_<$List<number>>, defaultValue: $Supplier_<$List<number>>, resetButtonKey: $Component_, requiresRestart: boolean, deleteButtonEnabled: boolean, insertInFront: boolean);
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, value: $List_<number>, defaultExpanded: boolean, tooltipSupplier: $Supplier_<($Component[]) | undefined>, saveConsumer: $Consumer_<$List<number>>, defaultValue: $Supplier_<$List<number>>, resetButtonKey: $Component_, requiresRestart: boolean);
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, value: $List_<number>, defaultExpanded: boolean, tooltipSupplier: $Supplier_<($Component[]) | undefined>, saveConsumer: $Consumer_<$List<number>>, defaultValue: $Supplier_<$List<number>>, resetButtonKey: $Component_);
        set maximum(value: number);
        set minimum(value: number);
    }
    export class $LongListListEntry extends $AbstractTextFieldListListEntry<number, $LongListListEntry$LongListCell, $LongListListEntry> {
        self(): $LongListListEntry;
        setMaximum(maximum: number): $LongListListEntry;
        setMinimum(minimum: number): $LongListListEntry;
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, value: $List_<number>, defaultExpanded: boolean, tooltipSupplier: $Supplier_<($Component[]) | undefined>, saveConsumer: $Consumer_<$List<number>>, defaultValue: $Supplier_<$List<number>>, resetButtonKey: $Component_, requiresRestart: boolean, deleteButtonEnabled: boolean, insertInFront: boolean);
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, value: $List_<number>, defaultExpanded: boolean, tooltipSupplier: $Supplier_<($Component[]) | undefined>, saveConsumer: $Consumer_<$List<number>>, defaultValue: $Supplier_<$List<number>>, resetButtonKey: $Component_, requiresRestart: boolean);
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, value: $List_<number>, defaultExpanded: boolean, tooltipSupplier: $Supplier_<($Component[]) | undefined>, saveConsumer: $Consumer_<$List<number>>, defaultValue: $Supplier_<$List<number>>, resetButtonKey: $Component_);
        set maximum(value: number);
        set minimum(value: number);
    }
    export class $LongSliderEntry extends $TooltipListEntry<number> {
        getValue(): number;
        /**
         * @deprecated
         */
        setValue(value: number): void;
        setMaximum(maximum: number): $LongSliderEntry;
        setMinimum(minimum: number): $LongSliderEntry;
        getTextGetter(): $Function<number, $Component>;
        setTextGetter(textGetter: $Function_<number, $Component>): $LongSliderEntry;
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, minimum: number, maximum: number, value: number, saveConsumer: $Consumer_<number>, resetButtonKey: $Component_, defaultValue: $Supplier_<number>, tooltipSupplier: $Supplier_<($Component[]) | undefined>, requiresRestart: boolean);
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, minimum: number, maximum: number, value: number, saveConsumer: $Consumer_<number>, resetButtonKey: $Component_, defaultValue: $Supplier_<number>, tooltipSupplier: $Supplier_<($Component[]) | undefined>);
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, minimum: number, maximum: number, value: number, saveConsumer: $Consumer_<number>, resetButtonKey: $Component_, defaultValue: $Supplier_<number>);
        set maximum(value: number);
        set minimum(value: number);
    }
    export class $DropdownBoxEntry$DropdownMenuElement<R> extends $AbstractContainerEventHandler {
        getEntry(): $DropdownBoxEntry<R>;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: $Rectangle, arg4: number): void;
        getHeight(): number;
        lateRender(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        isExpanded(): boolean;
        isSuggestionMode(): boolean;
        getCellCreator(): $DropdownBoxEntry$SelectionCellCreator<R>;
        getSelections(): $ImmutableList<R>;
        initCells(): void;
        constructor();
        get entry(): $DropdownBoxEntry<R>;
        get height(): number;
        get expanded(): boolean;
        get suggestionMode(): boolean;
        get cellCreator(): $DropdownBoxEntry$SelectionCellCreator<R>;
        get selections(): $ImmutableList<R>;
    }
    export class $DropdownBoxEntry<T> extends $TooltipListEntry<T> {
        isSuggestionMode(): boolean;
        getSelections(): $ImmutableList<T>;
        setSuggestionMode(suggestionMode: boolean): void;
        /**
         * @deprecated
         */
        getSelectionElement(): $DropdownBoxEntry$SelectionElement<T>;
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, resetButtonKey: $Component_, tooltipSupplier: $Supplier_<($Component[]) | undefined>, requiresRestart: boolean, defaultValue: $Supplier_<T>, saveConsumer: $Consumer_<T>, selections: $Iterable_<T>, topRenderer: $DropdownBoxEntry$SelectionTopCellElement<T>, cellCreator: $DropdownBoxEntry$SelectionCellCreator<T>);
        get selections(): $ImmutableList<T>;
        get selectionElement(): $DropdownBoxEntry$SelectionElement<T>;
    }
    export class $FloatListEntry extends $AbstractNumberListEntry<number> {
        getValue(): number;
        setMaximum(maximum: number): $FloatListEntry;
        setMinimum(minimum: number): $FloatListEntry;
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, value: number, resetButtonKey: $Component_, defaultValue: $Supplier_<number>, saveConsumer: $Consumer_<number>, tooltipSupplier: $Supplier_<($Component[]) | undefined>, requiresRestart: boolean);
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, value: number, resetButtonKey: $Component_, defaultValue: $Supplier_<number>, saveConsumer: $Consumer_<number>, tooltipSupplier: $Supplier_<($Component[]) | undefined>);
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, value: number, resetButtonKey: $Component_, defaultValue: $Supplier_<number>, saveConsumer: $Consumer_<number>);
        get value(): number;
        set maximum(value: number);
        set minimum(value: number);
    }
    export class $DoubleListListEntry extends $AbstractTextFieldListListEntry<number, $DoubleListListEntry$DoubleListCell, $DoubleListListEntry> {
        self(): $DoubleListListEntry;
        setMaximum(maximum: number): $DoubleListListEntry;
        setMinimum(minimum: number): $DoubleListListEntry;
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, value: $List_<number>, defaultExpanded: boolean, tooltipSupplier: $Supplier_<($Component[]) | undefined>, saveConsumer: $Consumer_<$List<number>>, defaultValue: $Supplier_<$List<number>>, resetButtonKey: $Component_, requiresRestart: boolean, deleteButtonEnabled: boolean, insertInFront: boolean);
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, value: $List_<number>, defaultExpanded: boolean, tooltipSupplier: $Supplier_<($Component[]) | undefined>, saveConsumer: $Consumer_<$List<number>>, defaultValue: $Supplier_<$List<number>>, resetButtonKey: $Component_, requiresRestart: boolean);
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, value: $List_<number>, defaultExpanded: boolean, tooltipSupplier: $Supplier_<($Component[]) | undefined>, saveConsumer: $Consumer_<$List<number>>, defaultValue: $Supplier_<$List<number>>, resetButtonKey: $Component_);
        set maximum(value: number);
        set minimum(value: number);
    }
    export class $LongListEntry extends $AbstractNumberListEntry<number> {
        getValue(): number;
        setMaximum(maximum: number): $LongListEntry;
        setMinimum(minimum: number): $LongListEntry;
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, value: number, resetButtonKey: $Component_, defaultValue: $Supplier_<number>, saveConsumer: $Consumer_<number>, tooltipSupplier: $Supplier_<($Component[]) | undefined>, requiresRestart: boolean);
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, value: number, resetButtonKey: $Component_, defaultValue: $Supplier_<number>, saveConsumer: $Consumer_<number>, tooltipSupplier: $Supplier_<($Component[]) | undefined>);
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, value: number, resetButtonKey: $Component_, defaultValue: $Supplier_<number>, saveConsumer: $Consumer_<number>);
        get value(): number;
        set maximum(value: number);
        set minimum(value: number);
    }
    export class $AbstractListListEntry<T, C extends $AbstractListListEntry$AbstractListCell<T, C, SELF>, SELF extends $AbstractListListEntry<T, C, SELF>> extends $BaseListEntry<T, C, SELF> {
        getValue(): $List<T>;
        getCellErrorSupplier(): $Function<T, ($Component) | undefined>;
        setCellErrorSupplier(cellErrorSupplier: $Function_<T, ($Component) | undefined>): void;
        constructor(fieldName: $Component_, value: $List_<T>, defaultExpanded: boolean, tooltipSupplier: $Supplier_<($Component[]) | undefined>, saveConsumer: $Consumer_<$List<T>>, defaultValue: $Supplier_<$List<T>>, resetButtonKey: $Component_, requiresRestart: boolean, deleteButtonEnabled: boolean, insertInFront: boolean, createNewCell: $BiFunction_<T, SELF, C>);
        get value(): $List<T>;
    }
    export class $AbstractTextFieldListListEntry<T, C extends $AbstractTextFieldListListEntry$AbstractTextFieldListCell<T, C, SELF>, SELF extends $AbstractTextFieldListListEntry<T, C, SELF>> extends $AbstractListListEntry<T, C, SELF> {
        constructor(fieldName: $Component_, value: $List_<T>, defaultExpanded: boolean, tooltipSupplier: $Supplier_<($Component[]) | undefined>, saveConsumer: $Consumer_<$List<T>>, defaultValue: $Supplier_<$List<T>>, resetButtonKey: $Component_, requiresRestart: boolean, deleteButtonEnabled: boolean, insertInFront: boolean, createNewCell: $BiFunction_<T, SELF, C>);
    }
    export class $StringListEntry extends $TextFieldListEntry<string> {
        getValue(): string;
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, value: string, resetButtonKey: $Component_, defaultValue: $Supplier_<string>, saveConsumer: $Consumer_<string>, tooltipSupplier: $Supplier_<($Component[]) | undefined>, requiresRestart: boolean);
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, value: string, resetButtonKey: $Component_, defaultValue: $Supplier_<string>, saveConsumer: $Consumer_<string>, tooltipSupplier: $Supplier_<($Component[]) | undefined>);
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, value: string, resetButtonKey: $Component_, defaultValue: $Supplier_<string>, saveConsumer: $Consumer_<string>);
        get value(): string;
    }
    export class $TextListEntry extends $TooltipListEntry<$Object> {
        static DISABLED_COLOR: number;
        static LINE_HEIGHT: number;
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, text: $Component_, color: number, tooltipSupplier: $Supplier_<($Component[]) | undefined>);
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, text: $Component_, color: number);
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, text: $Component_);
    }
    export class $DropdownBoxEntry$SelectionCellElement<R> extends $AbstractContainerEventHandler {
        getEntry(): $DropdownBoxEntry<R>;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        getSelection(): R;
        getSearchKey(): $Component;
        dontRender(arg0: $GuiGraphics, arg1: number): void;
        constructor();
        get entry(): $DropdownBoxEntry<R>;
        get selection(): R;
        get searchKey(): $Component;
    }
    export class $TooltipListEntry<T> extends $AbstractConfigListEntry<T> {
        getTooltip(mouseX: number, mouseY: number): ($Component[]) | undefined;
        getTooltip(): ($Component[]) | undefined;
        getTooltipSupplier(): $Supplier<($Component[]) | undefined>;
        setTooltipSupplier(tooltipSupplier: $Supplier_<($Component[]) | undefined>): void;
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, tooltipSupplier: $Supplier_<($Component[]) | undefined>);
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, tooltipSupplier: $Supplier_<($Component[]) | undefined>, requiresRestart: boolean);
    }
    export class $TextFieldListEntry<T> extends $TooltipListEntry<T> {
        /**
         * @deprecated
         */
        setValue(s: string): void;
        set value(value: string);
    }
    export class $StringListListEntry$StringListCell extends $AbstractTextFieldListListEntry$AbstractTextFieldListCell<string, $StringListListEntry$StringListCell, $StringListListEntry> {
        constructor(value: string, listListEntry: $StringListListEntry);
    }
    export class $AbstractTextFieldListListEntry$AbstractTextFieldListCell<T, SELF extends $AbstractTextFieldListListEntry$AbstractTextFieldListCell<T, SELF, OUTER_SELF>, OUTER_SELF extends $AbstractTextFieldListListEntry<T, SELF, OUTER_SELF>> extends $AbstractListListEntry$AbstractListCell<T, SELF, OUTER_SELF> {
        constructor(value: T, listListEntry: OUTER_SELF);
    }
    export class $ColorEntry extends $TextFieldListEntry<number> {
        getValue(): number;
        /**
         * @deprecated
         */
        setValue(color: number): void;
        withAlpha(): void;
        withoutAlpha(): void;
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, value: number, resetButtonKey: $Component_, defaultValue: $Supplier_<number>, saveConsumer: $Consumer_<number>, tooltipSupplier: $Supplier_<($Component[]) | undefined>, requiresRestart: boolean);
    }
    export class $IntegerListEntry extends $AbstractNumberListEntry<number> {
        getValue(): number;
        setMaximum(maximum: number): $IntegerListEntry;
        setMinimum(minimum: number): $IntegerListEntry;
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, value: number, resetButtonKey: $Component_, defaultValue: $Supplier_<number>, saveConsumer: $Consumer_<number>, tooltipSupplier: $Supplier_<($Component[]) | undefined>, requiresRestart: boolean);
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, value: number, resetButtonKey: $Component_, defaultValue: $Supplier_<number>, saveConsumer: $Consumer_<number>, tooltipSupplier: $Supplier_<($Component[]) | undefined>);
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, value: number, resetButtonKey: $Component_, defaultValue: $Supplier_<number>, saveConsumer: $Consumer_<number>);
        get value(): number;
        set maximum(value: number);
        set minimum(value: number);
    }
    export class $KeyCodeEntry extends $TooltipListEntry<$ModifierKeyCode> {
        getValue(): $ModifierKeyCode;
        setValue(value: $ModifierKeyCode): void;
        setAllowModifiers(allowModifiers: boolean): void;
        setAllowKey(allowKey: boolean): void;
        setAllowMouse(allowMouse: boolean): void;
        isAllowKey(): boolean;
        isAllowModifiers(): boolean;
        isAllowMouse(): boolean;
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, value: $ModifierKeyCode, resetButtonKey: $Component_, defaultValue: $Supplier_<$ModifierKeyCode>, saveConsumer: $Consumer_<$ModifierKeyCode>, tooltipSupplier: $Supplier_<($Component[]) | undefined>, requiresRestart: boolean);
    }
    export class $IntegerListListEntry$IntegerListCell extends $AbstractTextFieldListListEntry$AbstractTextFieldListCell<number, $IntegerListListEntry$IntegerListCell, $IntegerListListEntry> {
        getValue(): number;
        constructor(value: number, listListEntry: $IntegerListListEntry);
        get value(): number;
    }
    export class $FloatListListEntry$FloatListCell extends $AbstractTextFieldListListEntry$AbstractTextFieldListCell<number, $FloatListListEntry$FloatListCell, $FloatListListEntry> {
        getValue(): number;
        constructor(value: number, listListEntry: $FloatListListEntry);
        get value(): number;
    }
    export class $DoubleListListEntry$DoubleListCell extends $AbstractTextFieldListListEntry$AbstractTextFieldListCell<number, $DoubleListListEntry$DoubleListCell, $DoubleListListEntry> {
        getValue(): number;
        constructor(value: number, listListEntry: $DoubleListListEntry);
        get value(): number;
    }
    export class $BooleanListEntry extends $TooltipListEntry<boolean> {
        getValue(): boolean;
        getYesNoText(bool: boolean): $Component;
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, bool: boolean, resetButtonKey: $Component_, defaultValue: $Supplier_<boolean>, saveConsumer: $Consumer_<boolean>, tooltipSupplier: $Supplier_<($Component[]) | undefined>, requiresRestart: boolean);
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, bool: boolean, resetButtonKey: $Component_, defaultValue: $Supplier_<boolean>, saveConsumer: $Consumer_<boolean>, tooltipSupplier: $Supplier_<($Component[]) | undefined>);
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, bool: boolean, resetButtonKey: $Component_, defaultValue: $Supplier_<boolean>, saveConsumer: $Consumer_<boolean>);
        get value(): boolean;
    }
    export class $IntegerSliderEntry extends $TooltipListEntry<number> {
        getValue(): number;
        /**
         * @deprecated
         */
        setValue(value: number): void;
        setMaximum(maximum: number): $IntegerSliderEntry;
        setMinimum(minimum: number): $IntegerSliderEntry;
        getTextGetter(): $Function<number, $Component>;
        setTextGetter(textGetter: $Function_<number, $Component>): $IntegerSliderEntry;
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, minimum: number, maximum: number, value: number, resetButtonKey: $Component_, defaultValue: $Supplier_<number>, saveConsumer: $Consumer_<number>, tooltipSupplier: $Supplier_<($Component[]) | undefined>, requiresRestart: boolean);
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, minimum: number, maximum: number, value: number, resetButtonKey: $Component_, defaultValue: $Supplier_<number>, saveConsumer: $Consumer_<number>, tooltipSupplier: $Supplier_<($Component[]) | undefined>);
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, minimum: number, maximum: number, value: number, resetButtonKey: $Component_, defaultValue: $Supplier_<number>, saveConsumer: $Consumer_<number>);
        set maximum(value: number);
        set minimum(value: number);
    }
    export class $SelectionListEntry<T> extends $TooltipListEntry<T> {
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, valuesArray: T[], value: T, resetButtonKey: $Component_, defaultValue: $Supplier_<T>, saveConsumer: $Consumer_<T>, nameProvider: $Function_<T, $Component>, tooltipSupplier: $Supplier_<($Component[]) | undefined>, requiresRestart: boolean);
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, valuesArray: T[], value: T, resetButtonKey: $Component_, defaultValue: $Supplier_<T>, saveConsumer: $Consumer_<T>, nameProvider: $Function_<T, $Component>, tooltipSupplier: $Supplier_<($Component[]) | undefined>);
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, valuesArray: T[], value: T, resetButtonKey: $Component_, defaultValue: $Supplier_<T>, saveConsumer: $Consumer_<T>, nameProvider: $Function_<T, $Component>);
        /**
         * @deprecated
         */
        constructor(fieldName: $Component_, valuesArray: T[], value: T, resetButtonKey: $Component_, defaultValue: $Supplier_<T>, saveConsumer: $Consumer_<T>);
    }
    export class $DropdownBoxEntry$SelectionElement<R> extends $AbstractContainerEventHandler implements $Renderable {
        getValue(): R;
        render(graphics: $GuiGraphics, mouseX: number, mouseY: number, delta: number): void;
        getMorePossibleHeight(): number;
        lateRender(graphics: $GuiGraphics, mouseX: number, mouseY: number, delta: number): void;
        /**
         * @deprecated
         */
        getTopRenderer(): $DropdownBoxEntry$SelectionTopCellElement<R>;
        constructor(entry: $DropdownBoxEntry<R>, bounds: $Rectangle, menu: $DropdownBoxEntry$DropdownMenuElement<R>, topRenderer: $DropdownBoxEntry$SelectionTopCellElement<R>, cellCreator: $DropdownBoxEntry$SelectionCellCreator<R>);
        get value(): R;
        get morePossibleHeight(): number;
        get topRenderer(): $DropdownBoxEntry$SelectionTopCellElement<R>;
    }
}
