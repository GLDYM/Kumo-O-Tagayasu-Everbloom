import { $Annotation } from "@package/java/lang/annotation";
import { $Supplier_, $BooleanSupplier_, $Supplier } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $ItemStack, $Item_ } from "@package/net/minecraft/world/item";
import { $ZGatherHints } from "@package/org/violetmoon/zeta/event/load";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $List, $Map_, $Collection } from "@package/java/util";
import { $Object, $Iterable_, $Record, $Class } from "@package/java/lang";
import { $Zeta } from "@package/org/violetmoon/zeta";

declare module "@package/org/violetmoon/zeta/module" {
    export class $IDisableable<SELF> {
        static isEnabled(arg0: $Item_): boolean;
        static isEnabled(arg0: $Block_): boolean;
    }
    export interface $IDisableable<SELF> {
        getModule(): $ZetaModule;
        isEnabled(): boolean;
        doesConditionApply(): boolean;
        setCondition(arg0: $BooleanSupplier_): SELF;
        get module(): $ZetaModule;
        set condition(value: $BooleanSupplier_);
    }
    export class $ZetaModuleManager {
        get<M extends $ZetaModule>(arg0: $Class<M>): M;
        load(arg0: $ModuleFinder_): void;
        isEnabled(arg0: $Class<$ZetaModule>): boolean;
        getCategory(arg0: string): $ZetaCategory;
        getOptional<M extends $ZetaModule>(arg0: $Class<M>): (M) | undefined;
        getModules(): $Collection<$ZetaModule>;
        doFinalize(): void;
        getCategories(): $Collection<$ZetaCategory>;
        initCategories(arg0: $Iterable_<$ZetaCategory>): void;
        isEnabledOrOverlapping(arg0: $Class<$ZetaModule>): boolean;
        getInhabitedCategories(): $List<$ZetaCategory>;
        modulesInCategory(arg0: $ZetaCategory): $List<$ZetaModule>;
        constructor(arg0: $Zeta);
        get modules(): $Collection<$ZetaModule>;
        get categories(): $Collection<$ZetaCategory>;
        get inhabitedCategories(): $List<$ZetaCategory>;
    }
    export class $ModuleFinder {
    }
    export interface $ModuleFinder extends $Supplier<$Stream<$ZetaLoadModuleAnnotationData>> {
        and(arg0: $ModuleFinder_): $ModuleFinder;
    }
    /**
     * Values that may be interpreted as {@link $ModuleFinder}.
     */
    export type $ModuleFinder_ = (() => void);
    export class $ZetaCategory {
        isAddon(): boolean;
        getDisabledTooltip(): $Component;
        static unknownCategory(arg0: string): $ZetaCategory;
        requiredModsLoaded(): boolean;
        requiredMod: string;
        name: string;
        icon: $Supplier<$ItemStack>;
        constructor(arg0: string, arg1: $Item_);
        constructor(arg0: string, arg1: $Item_, arg2: string);
        constructor(arg0: string, arg1: $Supplier_<$ItemStack>, arg2: string);
        get addon(): boolean;
        get disabledTooltip(): $Component;
    }
    export class $ZetaLoadModuleAnnotationData extends $Record {
        clazz(): $Class<never>;
        name(): string;
        description(): string;
        category(): string;
        static fromAnnotation(arg0: $Class<never>, arg1: $ZetaLoadModule): $ZetaLoadModuleAnnotationData;
        enabledByDefault(): boolean;
        clientReplacement(): boolean;
        antiOverlap(): string[];
        loadPhase(): number;
        static fromForgeThing(arg0: $Class<never>, arg1: $Map_<string, $Object>): $ZetaLoadModuleAnnotationData;
        constructor(clazz: $Class<never>, category: string, name: string, description: string, antiOverlap: string[], enabledByDefault: boolean, clientReplacement: boolean, loadPhase: number);
    }
    /**
     * Values that may be interpreted as {@link $ZetaLoadModuleAnnotationData}.
     */
    export type $ZetaLoadModuleAnnotationData_ = { name?: string, description?: string, category?: string, antiOverlap?: string[], loadPhase?: number, clientReplacement?: boolean, clazz?: $Class<never>, enabledByDefault?: boolean,  } | [name?: string, description?: string, category?: string, antiOverlap?: string[], loadPhase?: number, clientReplacement?: boolean, clazz?: $Class<never>, enabledByDefault?: boolean, ];
    export class $ZetaModule {
        isEnabled(): boolean;
        displayName(): string;
        description(): string;
        category(): $ZetaCategory;
        zeta(): $Zeta;
        setEnabled(arg0: $Zeta, arg1: boolean): void;
        setIgnoreAntiOverlap(arg0: boolean): void;
        setEnabledByDefault(arg0: boolean): void;
        disabledByOverlap(): boolean;
        enabledByDefault(): boolean;
        antiOverlap(): $List<string>;
        postConstruct(): void;
        ignoreAntiOverlap(): boolean;
        addAnnotationHints(arg0: $ZGatherHints): void;
        lowerCaseName(): string;
        constructor();
    }
    export class $ZetaLoadModule implements $Annotation {
        name(): string;
        description(): string;
        category(): string;
        enabledByDefault(): boolean;
        clientReplacement(): boolean;
        antiOverlap(): string[];
        loadPhase(): number;
    }
}
