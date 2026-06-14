import { $CraftLayer } from "@package/studio/fantasyit/maid_storage_manager/craft/work";
import { $Predicate_, $Function_, $Function } from "@package/java/util/function";
import { $CraftGuideStepData, $CraftGuideData } from "@package/studio/fantasyit/maid_storage_manager/craft/data";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $EntityMaid, $MaidPathFindingBFS } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $AbstractCraftActionContext } from "@package/studio/fantasyit/maid_storage_manager/craft/context";

declare module "@package/studio/fantasyit/maid_storage_manager/craft/action" {
    export class $CraftAction$CraftActionProvider {
    }
    export interface $CraftAction$CraftActionProvider {
        create(arg0: $EntityMaid, arg1: $CraftGuideData, arg2: $CraftGuideStepData, arg3: $CraftLayer): $AbstractCraftActionContext;
    }
    /**
     * Values that may be interpreted as {@link $CraftAction$CraftActionProvider}.
     */
    export type $CraftAction$CraftActionProvider_ = ((arg0: $EntityMaid, arg1: $CraftGuideData, arg2: $CraftGuideStepData, arg3: $CraftLayer) => $AbstractCraftActionContext);
    export class $ActionOption<T> extends $Record {
        id(): $ResourceLocation;
        defaultValue(): string;
        getOptionValue(arg0: $CraftGuideStepData): string;
        converter(): $ActionOption$BiConverter<number, T>;
        icon(): $ResourceLocation[];
        tooltip(): $Component[];
        static valueOnly(arg0: $ResourceLocation_, arg1: string): $ActionOption<boolean>;
        setOptionValue(arg0: $CraftGuideStepData, arg1: string): void;
        getOptionSelection(arg0: $CraftGuideStepData): (T) | undefined;
        setOptionSelection(arg0: $CraftGuideStepData, arg1: T): void;
        valuePredicatorOrGetter(): $ActionOption$ValuePredicatorOrGetter<T>;
        getOptionSelectionId(arg0: $CraftGuideStepData): (number) | undefined;
        setOptionSelectionId(arg0: $CraftGuideStepData, arg1: number): void;
        static OPTIONAL: $ActionOption<boolean>;
        constructor(arg0: $ResourceLocation_, arg1: string, arg2: $ActionOption$BiConverter<number, T>, arg3: $ActionOption$ValuePredicatorOrGetter<T>);
        constructor(id: $ResourceLocation_, tooltip: $Component_[], icon: $ResourceLocation_[], defaultValue: string, converter: $ActionOption$BiConverter<number, T>, valuePredicatorOrGetter: $ActionOption$ValuePredicatorOrGetter<T>);
    }
    /**
     * Values that may be interpreted as {@link $ActionOption}.
     */
    export type $ActionOption_<T> = { id?: $ResourceLocation_, converter?: $ActionOption$BiConverter<number, any>, valuePredicatorOrGetter?: $ActionOption$ValuePredicatorOrGetter<any>, defaultValue?: string, icon?: $ResourceLocation_[], tooltip?: $Component_[],  } | [id?: $ResourceLocation_, converter?: $ActionOption$BiConverter<number, any>, valuePredicatorOrGetter?: $ActionOption$ValuePredicatorOrGetter<any>, defaultValue?: string, icon?: $ResourceLocation_[], tooltip?: $Component_[], ];
    export class $ActionOption$ValuePredicatorOrGetter<T> {
        getValue(arg0: T): ($Component) | undefined;
        static getter<T>(arg0: $Function_<T, $Component>): $ActionOption$ValuePredicatorOrGetter<T>;
        predicate(arg0: string): boolean;
        static predicator<T>(arg0: $Predicate_<string>): $ActionOption$ValuePredicatorOrGetter<T>;
        hasPredicator(): boolean;
        valueGetter: $Function<T, $Component>;
        constructor(arg0: $Predicate_<string>, arg1: $Function_<T, $Component>);
    }
    export class $ActionOption$BiConverter<T, R> {
        ba(arg0: R): T;
        ab(arg0: T): R;
        from: $Function<T, R>;
        to: $Function<R, T>;
        constructor(arg0: $Function_<T, R>, arg1: $Function_<R, T>);
    }
    export class $CraftAction$CraftActionPathFindingTargetProvider {
    }
    export interface $CraftAction$CraftActionPathFindingTargetProvider {
        find(arg0: $EntityMaid, arg1: $CraftGuideData, arg2: $CraftGuideStepData, arg3: $CraftLayer, arg4: $MaidPathFindingBFS): $BlockPos;
    }
    /**
     * Values that may be interpreted as {@link $CraftAction$CraftActionPathFindingTargetProvider}.
     */
    export type $CraftAction$CraftActionPathFindingTargetProvider_ = ((arg0: $EntityMaid, arg1: $CraftGuideData, arg2: $CraftGuideStepData, arg3: $CraftLayer, arg4: $MaidPathFindingBFS) => $BlockPos_);
    export class $CraftAction extends $Record {
        type(): $ResourceLocation;
        provider(): $CraftAction$CraftActionProvider;
        options(): $List<$ActionOption<never>>;
        hasOption(arg0: $ActionOption_<never>): boolean;
        outputCount(): number;
        inputCount(): number;
        canBeCommon(): boolean;
        marks(): number;
        noOccupation(): boolean;
        hasMark(arg0: number): boolean;
        getOptionIndex(arg0: $ActionOption_<never>): number;
        pathCloseEnoughThreshold(): number;
        pathFindingTargetProvider(): $CraftAction$CraftActionPathFindingTargetProvider;
        static MARK_NO_MARKS: number;
        static MARK_NO_OCCUPATION: number;
        static MARK_HAND_RELATED: number;
        constructor(type: $ResourceLocation_, provider: $CraftAction$CraftActionProvider_, pathFindingTargetProvider: $CraftAction$CraftActionPathFindingTargetProvider_, pathCloseEnoughThreshold: number, canBeCommon: boolean, marks: number, inputCount: number, outputCount: number, options: $List_<$ActionOption_<never>>);
    }
    /**
     * Values that may be interpreted as {@link $CraftAction}.
     */
    export type $CraftAction_ = { provider?: $CraftAction$CraftActionProvider_, options?: $List_<$ActionOption_<never>>, type?: $ResourceLocation_, marks?: number, inputCount?: number, canBeCommon?: boolean, outputCount?: number, pathFindingTargetProvider?: $CraftAction$CraftActionPathFindingTargetProvider_, pathCloseEnoughThreshold?: number,  } | [provider?: $CraftAction$CraftActionProvider_, options?: $List_<$ActionOption_<never>>, type?: $ResourceLocation_, marks?: number, inputCount?: number, canBeCommon?: boolean, outputCount?: number, pathFindingTargetProvider?: $CraftAction$CraftActionPathFindingTargetProvider_, pathCloseEnoughThreshold?: number, ];
    export class $ActionOptionSet {
        add<T>(arg0: $ActionOption_<T>, arg1: T, arg2: string): $ActionOptionSet;
        add<T>(arg0: $ActionOption_<T>, arg1: T): $ActionOptionSet;
        static "with"<T>(arg0: $ActionOption_<T>, arg1: T, arg2: string): $ActionOptionSet;
        static "with"<T>(arg0: $ActionOption_<T>, arg1: T): $ActionOptionSet;
        applyTo(arg0: $CraftGuideStepData): void;
        options: $List<$ActionOptionSet$ActionOptionSetItem<never>>;
        constructor(arg0: $List_<$ActionOptionSet$ActionOptionSetItem_<never>>);
    }
    export class $ActionOptionSet$ActionOptionSetItem<T> extends $Record {
        value(): string;
        option(): $ActionOption<never>;
        selection(): T;
        constructor(arg0: $ActionOption_<never>, arg1: T);
        constructor(option: $ActionOption_<never>, selection: T, value: string);
    }
    /**
     * Values that may be interpreted as {@link $ActionOptionSet$ActionOptionSetItem}.
     */
    export type $ActionOptionSet$ActionOptionSetItem_<T> = { selection?: any, value?: string, option?: $ActionOption_<never>,  } | [selection?: any, value?: string, option?: $ActionOption_<never>, ];
}
