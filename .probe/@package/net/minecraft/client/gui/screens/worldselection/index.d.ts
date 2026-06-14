import { $Dynamic, $Lifecycle } from "@package/com/mojang/serialization";
import { $RegistryLayer, $RegistryLayer_, $WorldStem, $ReloadableServerResources } from "@package/net/minecraft/server";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $WorldPreset } from "@package/net/minecraft/world/level/levelgen/presets";
import { $DateTimeFormatter } from "@package/java/time/format";
import { $Minecraft } from "@package/net/minecraft/client";
import { $OptionalLong, $Map, $List, $Collection_, $List_ } from "@package/java/util";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $FormattedCharSequence_ } from "@package/net/minecraft/util";
import { $Difficulty_, $Difficulty } from "@package/net/minecraft/world";
import { $Consumer_, $BiFunction, $UnaryOperator, $Function_, $BooleanSupplier_ } from "@package/java/util/function";
import { $RegistryAccess, $Registry, $Holder_, $RegistryAccess$Frozen, $Holder, $LayeredRegistryAccess } from "@package/net/minecraft/core";
import { $Path_, $Path } from "@package/java/nio/file";
import { $GridLayoutTab } from "@package/net/minecraft/client/gui/components/tabs";
import { $BooleanConsumer_ } from "@package/it/unimi/dsi/fastutil/booleans";
import { $Enum, $Record, $AutoCloseable, $Runnable_ } from "@package/java/lang";
import { $WorldDimensions, $WorldOptions, $WorldDimensions_, $WorldGenSettings_ } from "@package/net/minecraft/world/level/levelgen";
import { $GameType, $WorldDataConfiguration, $GameRules, $WorldDataConfiguration_, $GameRules$Value, $LevelSettings } from "@package/net/minecraft/world/level";
import { $LayoutElement } from "@package/net/minecraft/client/gui/layouts";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ObjectSelectionList, $ContainerObjectSelectionList$Entry, $Renderable, $CycleButton, $WidgetTooltipHolder, $ContainerObjectSelectionList, $ObjectSelectionList$Entry } from "@package/net/minecraft/client/gui/components";
import { $WorldData, $LevelStorageSource, $LevelStorageSource$LevelStorageAccess, $LevelSummary } from "@package/net/minecraft/world/level/storage";
import { $PackRepository, $Pack } from "@package/net/minecraft/server/packs/repository";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Font } from "@package/net/minecraft/client/gui";
import { $LevelStem_, $LevelStem } from "@package/net/minecraft/world/level/dimension";

declare module "@package/net/minecraft/client/gui/screens/worldselection" {
    export class $SwitchGrid {
    }
    export class $EditGameRulesScreen$EntryFactory<T extends $GameRules$Value<T>> {
    }
    export interface $EditGameRulesScreen$EntryFactory<T extends $GameRules$Value<T>> {
    }
    /**
     * Values that may be interpreted as {@link $EditGameRulesScreen$EntryFactory}.
     */
    export type $EditGameRulesScreen$EntryFactory_<T> = (() => void);
    export class $EditGameRulesScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $GameRules, arg1: $Consumer_<($GameRules) | undefined>);
    }
    export class $PresetEditor {
        /**
         * @deprecated
         */
        static EDITORS: $Map<($ResourceKey<$WorldPreset>) | undefined, $PresetEditor>;
    }
    export interface $PresetEditor {
        createEditScreen(arg0: $CreateWorldScreen, arg1: $WorldCreationContext_): $Screen;
    }
    /**
     * Values that may be interpreted as {@link $PresetEditor}.
     */
    export type $PresetEditor_ = ((arg0: $CreateWorldScreen, arg1: $WorldCreationContext) => $Screen);
    export class $WorldSelectionList extends $ObjectSelectionList<$WorldSelectionList$Entry> {
        updateFilter(arg0: string): void;
        getScreen(): $SelectWorldScreen;
        setSelected(arg0: $WorldSelectionList$Entry): void;
        getSelectedOpt(): ($WorldSelectionList$WorldListEntry) | undefined;
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        static DATE_FORMAT: $DateTimeFormatter;
        itemHeight: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        hovered: $WorldSelectionList$Entry;
        height: number;
        constructor(arg0: $SelectWorldScreen, arg1: $Minecraft, arg2: number, arg3: number, arg4: number, arg5: number, arg6: string, arg7: $WorldSelectionList);
        get screen(): $SelectWorldScreen;
        set selected(value: $WorldSelectionList$Entry);
        get selectedOpt(): ($WorldSelectionList$WorldListEntry) | undefined;
    }
    export class $WorldCreationContext$OptionsModifier {
    }
    export interface $WorldCreationContext$OptionsModifier extends $UnaryOperator<$WorldOptions> {
    }
    /**
     * Values that may be interpreted as {@link $WorldCreationContext$OptionsModifier}.
     */
    export type $WorldCreationContext$OptionsModifier_ = (() => void);
    export class $SwitchGrid$SwitchBuilder {
        withInfo(arg0: $Component_): $SwitchGrid$SwitchBuilder;
        withIsActiveCondition(arg0: $BooleanSupplier_): $SwitchGrid$SwitchBuilder;
    }
    export class $EditGameRulesScreen$BooleanRuleEntry extends $EditGameRulesScreen$GameRuleEntry {
    }
    export class $CreateWorldScreen$GameTab extends $GridLayoutTab {
    }
    export class $WorldSelectionList$LoadingHeader extends $WorldSelectionList$Entry {
        constructor(arg0: $Minecraft);
    }
    export class $ExperimentsScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen, arg1: $PackRepository, arg2: $Consumer_<$PackRepository>);
    }
    export class $EditWorldScreen extends $Screen {
        static create(arg0: $Minecraft, arg1: $LevelStorageSource$LevelStorageAccess, arg2: $BooleanConsumer_): $EditWorldScreen;
        static makeBackupAndShowToast(arg0: $LevelStorageSource$LevelStorageAccess): boolean;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
    }
    export class $CreateWorldScreen$MoreTab extends $GridLayoutTab {
    }
    export class $WorldOpenFlows {
        openWorld(arg0: string, arg1: $Runnable_): void;
        createFreshLevel(arg0: string, arg1: $LevelSettings, arg2: $WorldOptions, arg3: $Function_<$RegistryAccess, $WorldDimensions>, arg4: $Screen): void;
        createLevelFromExistingSettings(arg0: $LevelStorageSource$LevelStorageAccess, arg1: $ReloadableServerResources, arg2: $LayeredRegistryAccess<$RegistryLayer_>, arg3: $WorldData): void;
        recreateWorldData(arg0: $LevelStorageSource$LevelStorageAccess): $Pair<$LevelSettings, $WorldCreationContext>;
        loadWorldStem(arg0: $Dynamic<never>, arg1: boolean, arg2: $PackRepository): $WorldStem;
        static confirmWorldCreation(arg0: $Minecraft, arg1: $CreateWorldScreen, arg2: $Lifecycle, arg3: $Runnable_, arg4: boolean): void;
        localvar$fha000$collective$loadLevel_bl2(arg0: boolean): boolean;
        constructor(arg0: $Minecraft, arg1: $LevelStorageSource);
    }
    export class $OptimizeWorldScreen extends $Screen {
        static create(arg0: $Minecraft, arg1: $BooleanConsumer_, arg2: $DataFixer, arg3: $LevelStorageSource$LevelStorageAccess, arg4: boolean): $OptimizeWorldScreen;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
    }
    export class $WorldSelectionList$WorldListEntry extends $WorldSelectionList$Entry implements $AutoCloseable {
        getLevelName(): string;
        canJoin(): boolean;
        editWorld(): void;
        joinWorld(): void;
        recreateWorld(): void;
        doDeleteWorld(): void;
        deleteWorld(): void;
        constructor(arg0: $WorldSelectionList, arg1: $WorldSelectionList, arg2: $LevelSummary);
        get levelName(): string;
    }
    export class $EditGameRulesScreen$CategoryRuleEntry extends $EditGameRulesScreen$RuleEntry {
        constructor(arg0: $EditGameRulesScreen, arg1: $Component_);
    }
    export class $EditGameRulesScreen$GameRuleEntry extends $EditGameRulesScreen$RuleEntry {
    }
    export class $ConfirmExperimentalFeaturesScreen$DetailsScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
    }
    export class $SwitchGrid$InfoUnderneathSettings extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SwitchGrid$InfoUnderneathSettings}.
     */
    export type $SwitchGrid$InfoUnderneathSettings_ = { maxInfoRows?: number, alwaysMaxHeight?: boolean,  } | [maxInfoRows?: number, alwaysMaxHeight?: boolean, ];
    export class $WorldCreationContext extends $Record {
        validate(): void;
        options(): $WorldOptions;
        dataPackResources(): $ReloadableServerResources;
        selectedDimensions(): $WorldDimensions;
        withDimensions(arg0: $WorldCreationContext$DimensionsUpdater_): $WorldCreationContext;
        withSettings(arg0: $WorldOptions, arg1: $WorldDimensions_): $WorldCreationContext;
        worldgenRegistries(): $LayeredRegistryAccess<$RegistryLayer>;
        worldgenLoadContext(): $RegistryAccess$Frozen;
        withDataConfiguration(arg0: $WorldDataConfiguration_): $WorldCreationContext;
        dataConfiguration(): $WorldDataConfiguration;
        datapackDimensions(): $Registry<$LevelStem>;
        withOptions(arg0: $WorldCreationContext$OptionsModifier_): $WorldCreationContext;
        constructor(options: $WorldOptions, datapackDimensions: $Registry<$LevelStem_>, selectedDimensions: $WorldDimensions_, worldgenRegistries: $LayeredRegistryAccess<$RegistryLayer_>, dataPackResources: $ReloadableServerResources, dataConfiguration: $WorldDataConfiguration_);
        constructor(arg0: $WorldOptions, arg1: $WorldDimensions_, arg2: $LayeredRegistryAccess<$RegistryLayer_>, arg3: $ReloadableServerResources, arg4: $WorldDataConfiguration_);
        constructor(arg0: $WorldGenSettings_, arg1: $LayeredRegistryAccess<$RegistryLayer_>, arg2: $ReloadableServerResources, arg3: $WorldDataConfiguration_);
    }
    /**
     * Values that may be interpreted as {@link $WorldCreationContext}.
     */
    export type $WorldCreationContext_ = { selectedDimensions?: $WorldDimensions_, worldgenRegistries?: $LayeredRegistryAccess<$RegistryLayer_>, datapackDimensions?: $Registry<$LevelStem_>, dataPackResources?: $ReloadableServerResources, dataConfiguration?: $WorldDataConfiguration_, options?: $WorldOptions,  } | [selectedDimensions?: $WorldDimensions_, worldgenRegistries?: $LayeredRegistryAccess<$RegistryLayer_>, datapackDimensions?: $Registry<$LevelStem_>, dataPackResources?: $ReloadableServerResources, dataConfiguration?: $WorldDataConfiguration_, options?: $WorldOptions, ];
    export class $ConfirmExperimentalFeaturesScreen$DetailsScreen$PackListEntry extends $ObjectSelectionList$Entry<$ConfirmExperimentalFeaturesScreen$DetailsScreen$PackListEntry> {
    }
    export class $CreateWorldScreen$DataPackReloadCookie extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $CreateWorldScreen$DataPackReloadCookie}.
     */
    export type $CreateWorldScreen$DataPackReloadCookie_ = { dataConfiguration?: $WorldDataConfiguration_, worldGenSettings?: $WorldGenSettings_,  } | [dataConfiguration?: $WorldDataConfiguration_, worldGenSettings?: $WorldGenSettings_, ];
    export class $WorldCreationContext$DimensionsUpdater {
    }
    export interface $WorldCreationContext$DimensionsUpdater extends $BiFunction<$RegistryAccess$Frozen, $WorldDimensions, $WorldDimensions> {
    }
    /**
     * Values that may be interpreted as {@link $WorldCreationContext$DimensionsUpdater}.
     */
    export type $WorldCreationContext$DimensionsUpdater_ = (() => void);
    export class $SwitchGrid$Builder {
        build(arg0: $Consumer_<$LayoutElement>): $SwitchGrid;
        addSwitch(arg0: $Component_, arg1: $BooleanSupplier_, arg2: $Consumer_<boolean>): $SwitchGrid$SwitchBuilder;
        withInfoUnderneath(arg0: number, arg1: boolean): $SwitchGrid$Builder;
        withRowSpacing(arg0: number): $SwitchGrid$Builder;
        withPaddingLeft(arg0: number): $SwitchGrid$Builder;
        constructor(arg0: number);
    }
    export class $WorldCreationUiState {
        getName(): string;
        setName(arg0: string): void;
        isDebug(): boolean;
        setSeed(arg0: string): void;
        getSeed(): string;
        isHardcore(): boolean;
        addListener(arg0: $Consumer_<$WorldCreationUiState>): void;
        setSettings(arg0: $WorldCreationContext_): void;
        getSettings(): $WorldCreationContext;
        setDifficulty(arg0: $Difficulty_): void;
        isAllowCommands(): boolean;
        onChanged(): void;
        setAllowCommands(arg0: boolean): void;
        getTargetFolder(): string;
        getDifficulty(): $Difficulty;
        getGameRules(): $GameRules;
        getGameMode(): $WorldCreationUiState$SelectedGameMode;
        setGameMode(arg0: $WorldCreationUiState$SelectedGameMode_): void;
        getWorldType(): $WorldCreationUiState$WorldTypeEntry;
        updateDimensions(arg0: $WorldCreationContext$DimensionsUpdater_): void;
        isGenerateStructures(): boolean;
        setGenerateStructures(arg0: boolean): void;
        getNormalPresetList(): $List<$WorldCreationUiState$WorldTypeEntry>;
        isBonusChest(): boolean;
        getAltPresetList(): $List<$WorldCreationUiState$WorldTypeEntry>;
        setBonusChest(arg0: boolean): void;
        setWorldType(arg0: $WorldCreationUiState$WorldTypeEntry_): void;
        getPresetEditor(): $PresetEditor;
        setGameRules(arg0: $GameRules): void;
        constructor(arg0: $Path_, arg1: $WorldCreationContext_, arg2: ($ResourceKey_<$WorldPreset>) | undefined, arg3: $OptionalLong);
        get debug(): boolean;
        get hardcore(): boolean;
        get targetFolder(): string;
        get normalPresetList(): $List<$WorldCreationUiState$WorldTypeEntry>;
        get altPresetList(): $List<$WorldCreationUiState$WorldTypeEntry>;
        get presetEditor(): $PresetEditor;
    }
    export class $EditGameRulesScreen$RuleEntry extends $ContainerObjectSelectionList$Entry<$EditGameRulesScreen$RuleEntry> {
        constructor(arg0: $List_<$FormattedCharSequence_>);
    }
    export class $WorldSelectionList$Entry extends $ObjectSelectionList$Entry<$WorldSelectionList$Entry> implements $AutoCloseable {
        close(): void;
        constructor();
    }
    export class $SelectWorldScreen extends $Screen {
        updateButtonStatus(arg0: $LevelSummary): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static TEST_OPTIONS: $WorldOptions;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen);
    }
    export class $EditGameRulesScreen$RuleList extends $ContainerObjectSelectionList<$EditGameRulesScreen$RuleEntry> {
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        itemHeight: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        hovered: $EditGameRulesScreen$RuleEntry;
        height: number;
        constructor(arg0: $EditGameRulesScreen, arg1: $GameRules);
    }
    export class $ConfirmExperimentalFeaturesScreen$DetailsScreen$PackList extends $ObjectSelectionList<$ConfirmExperimentalFeaturesScreen$DetailsScreen$PackListEntry> {
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        itemHeight: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        hovered: $ConfirmExperimentalFeaturesScreen$DetailsScreen$PackListEntry;
        height: number;
    }
    export class $WorldCreationUiState$WorldTypeEntry extends $Record {
        preset(): $Holder<$WorldPreset>;
        describePreset(): $Component;
        isAmplified(): boolean;
        constructor(preset: $Holder_<$WorldPreset>);
        get amplified(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WorldCreationUiState$WorldTypeEntry}.
     */
    export type $WorldCreationUiState$WorldTypeEntry_ = { preset?: $Holder_<$WorldPreset>,  } | [preset?: $Holder_<$WorldPreset>, ];
    export class $SwitchGrid$LabeledSwitch extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SwitchGrid$LabeledSwitch}.
     */
    export type $SwitchGrid$LabeledSwitch_ = { button?: $CycleButton<boolean>, isActiveCondition?: $BooleanSupplier_, stateSupplier?: $BooleanSupplier_,  } | [button?: $CycleButton<boolean>, isActiveCondition?: $BooleanSupplier_, stateSupplier?: $BooleanSupplier_, ];
    export class $WorldOpenFlows$1Data extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $WorldOpenFlows$1Data}.
     */
    export type $WorldOpenFlows$1Data_ = { options?: $WorldOptions, levelSettings?: $LevelSettings, existingDimensions?: $Registry<$LevelStem_>,  } | [options?: $WorldOptions, levelSettings?: $LevelSettings, existingDimensions?: $Registry<$LevelStem_>, ];
    export class $ConfirmExperimentalFeaturesScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Collection_<$Pack>, arg1: $BooleanConsumer_);
    }
    export class $CreateWorldScreen$WorldTab extends $GridLayoutTab {
    }
    export class $EditGameRulesScreen$IntegerRuleEntry extends $EditGameRulesScreen$GameRuleEntry {
    }
    export class $WorldCreationUiState$SelectedGameMode extends $Enum<$WorldCreationUiState$SelectedGameMode> {
        static values(): $WorldCreationUiState$SelectedGameMode[];
        static valueOf(arg0: string): $WorldCreationUiState$SelectedGameMode;
        getInfo(): $Component;
        static SURVIVAL: $WorldCreationUiState$SelectedGameMode;
        gameType: $GameType;
        displayName: $Component;
        static CREATIVE: $WorldCreationUiState$SelectedGameMode;
        static DEBUG: $WorldCreationUiState$SelectedGameMode;
        static HARDCORE: $WorldCreationUiState$SelectedGameMode;
        get info(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $WorldCreationUiState$SelectedGameMode}.
     */
    export type $WorldCreationUiState$SelectedGameMode_ = "survival" | "hardcore" | "creative" | "debug";
    export class $CreateWorldScreen extends $Screen {
        repositionElements(): void;
        static createFromExisting(arg0: $Minecraft, arg1: $Screen, arg2: $LevelSettings, arg3: $WorldCreationContext_, arg4: $Path_): $CreateWorldScreen;
        static createTempDataPackDirFromExistingWorld(arg0: $Path_, arg1: $Minecraft): $Path;
        getUiState(): $WorldCreationUiState;
        static openFresh(arg0: $Minecraft, arg1: $Screen): void;
        popScreen(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static TAB_HEADER_BACKGROUND: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        get uiState(): $WorldCreationUiState;
    }
}
