import { $Lifecycle, $Dynamic } from "@package/com/mojang/serialization";
import { $MinecraftServer, $WorldLoader$PackConfig } from "@package/net/minecraft/server";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $DateTimeFormatter } from "@package/java/time/format";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SavedData$Factory_, $SavedData } from "@package/net/minecraft/world/level/saveddata";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $Spliterator, $Iterator, $UUID, $List, $UUID_, $List_, $Map, $Set } from "@package/java/util";
import { $EndDragonFight$Data_, $EndDragonFight$Data } from "@package/net/minecraft/world/level/dimension/end";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $WorldBorder$Settings } from "@package/net/minecraft/world/level/border";
import { $Difficulty_, $Difficulty } from "@package/net/minecraft/world";
import { $Consumer_ } from "@package/java/util/function";
import { $TimerQueue } from "@package/net/minecraft/world/level/timers";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $HolderLookup$Provider, $BlockPos, $RegistryAccess$Frozen, $BlockPos_, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $Enum, $Record, $RuntimeException, $AutoCloseable, $Comparable, $Iterable } from "@package/java/lang";
import { $AccessorMixinDimensionDataStorage } from "@package/noobanidus/mods/lootr/common/mixin/accessor";
import { $WorldDimensions$Complete_, $WorldOptions, $WorldDimensions$Complete } from "@package/net/minecraft/world/level/levelgen";
import { $File, $File_ } from "@package/java/io";
import { $LevelSettings, $GameType, $WorldDataConfiguration, $GameRules, $GameType_, $LevelHeightAccessor, $Level, $WorldDataConfiguration_ } from "@package/net/minecraft/world/level";
import { $LevelResourceAccessor } from "@package/com/iafenvoy/gamerule/mixin";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Instant, $LocalDateTime } from "@package/java/time";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $DataFixTypes_ } from "@package/net/minecraft/util/datafix";
import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LevelStem_ } from "@package/net/minecraft/world/level/dimension";
import { $DirectoryValidator } from "@package/net/minecraft/world/level/validation";
export * as loot from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/minecraft/world/level/storage" {
    export class $CommandStorage {
        get(arg0: $ResourceLocation_): $CompoundTag;
        set(arg0: $ResourceLocation_, arg1: $CompoundTag_): void;
        keys(): $Stream<$ResourceLocation>;
        constructor(arg0: $DimensionDataStorage);
    }
    export class $CommandStorage$Container extends $SavedData {
    }
    export class $LevelStorageSource$LevelDirectory extends $Record {
        path(): $Path;
        resourcePath(arg0: $LevelResource): $Path;
        directoryName(): string;
        oldDataFile(): $Path;
        corruptedDataFile(arg0: $LocalDateTime): $Path;
        dataFile(): $Path;
        iconFile(): $Path;
        lockFile(): $Path;
        rawDataFile(arg0: $LocalDateTime): $Path;
        constructor(path: $Path_);
    }
    /**
     * Values that may be interpreted as {@link $LevelStorageSource$LevelDirectory}.
     */
    export type $LevelStorageSource$LevelDirectory_ = { path?: $Path_,  } | [path?: $Path_, ];
    export class $LevelDataAndDimensions extends $Record {
        dimensions(): $WorldDimensions$Complete;
        worldData(): $WorldData;
        constructor(arg0: $WorldData, arg1: $WorldDimensions$Complete_);
    }
    /**
     * Values that may be interpreted as {@link $LevelDataAndDimensions}.
     */
    export type $LevelDataAndDimensions_ = { worldData?: $WorldData, dimensions?: $WorldDimensions$Complete_,  } | [worldData?: $WorldData, dimensions?: $WorldDimensions$Complete_, ];
    export class $WorldData {
        static ANVIL_VERSION_ID: number;
        static MCREGION_VERSION_ID: number;
    }
    export interface $WorldData {
        getVersion(): number;
        getLevelName(): string;
        isHardcore(): boolean;
        createTag(arg0: $RegistryAccess, arg1: $CompoundTag_): $CompoundTag;
        enabledFeatures(): $FeatureFlagSet;
        getLevelSettings(): $LevelSettings;
        isDebugWorld(): boolean;
        getLoadedPlayerTag(): $CompoundTag;
        overworldData(): $ServerLevelData;
        setDifficulty(arg0: $Difficulty_): void;
        setModdedInfo(arg0: string, arg1: boolean): void;
        isAllowCommands(): boolean;
        fillCrashReportCategory(arg0: $CrashReportCategory): void;
        getStorageVersionName(arg0: number): string;
        getCustomBossEvents(): $CompoundTag;
        getKnownServerBrands(): $Set<string>;
        worldGenSettingsLifecycle(): $Lifecycle;
        setCustomBossEvents(arg0: $CompoundTag_): void;
        getDataConfiguration(): $WorldDataConfiguration;
        setDataConfiguration(arg0: $WorldDataConfiguration_): void;
        setDifficultyLocked(arg0: boolean): void;
        getRemovedFeatureFlags(): $Set<string>;
        endDragonFightData(): $EndDragonFight$Data;
        setGameType(arg0: $GameType_): void;
        worldGenOptions(): $WorldOptions;
        isFlatWorld(): boolean;
        setEndDragonFightData(arg0: $EndDragonFight$Data_): void;
        getDifficulty(): $Difficulty;
        getGameRules(): $GameRules;
        wasModded(): boolean;
        getGameType(): $GameType;
        isDifficultyLocked(): boolean;
        get version(): number;
        get levelName(): string;
        get hardcore(): boolean;
        get levelSettings(): $LevelSettings;
        get debugWorld(): boolean;
        get loadedPlayerTag(): $CompoundTag;
        get allowCommands(): boolean;
        get knownServerBrands(): $Set<string>;
        get removedFeatureFlags(): $Set<string>;
        get flatWorld(): boolean;
        get gameRules(): $GameRules;
    }
    export class $LevelSummary$CorruptedLevelSummary extends $LevelSummary {
        static PLAY_WORLD: $Component;
        constructor(arg0: string, arg1: $Path_, arg2: number);
    }
    export class $LevelSummary$SymlinkLevelSummary extends $LevelSummary {
        static PLAY_WORLD: $Component;
        constructor(arg0: string, arg1: $Path_);
    }
    export class $DataVersion {
        getVersion(): number;
        getSeries(): string;
        isSideSeries(): boolean;
        isCompatible(arg0: $DataVersion): boolean;
        static MAIN_SERIES: string;
        constructor(arg0: number);
        constructor(arg0: number, arg1: string);
        get version(): number;
        get series(): string;
        get sideSeries(): boolean;
    }
    export class $DerivedLevelData implements $ServerLevelData {
        getLevelName(): string;
        isHardcore(): boolean;
        setInitialized(arg0: boolean): void;
        isInitialized(): boolean;
        getWorldBorder(): $WorldBorder$Settings;
        isAllowCommands(): boolean;
        getDayTimeFraction(): number;
        fillCrashReportCategory(arg0: $CrashReportCategory, arg1: $LevelHeightAccessor): void;
        setWorldBorder(arg0: $WorldBorder$Settings): void;
        getDayTime(): number;
        setRaining(arg0: boolean): void;
        setThundering(arg0: boolean): void;
        setThunderTime(arg0: number): void;
        setGameType(arg0: $GameType_): void;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        setRainTime(arg0: number): void;
        getRainTime(): number;
        getThunderTime(): number;
        setClearWeatherTime(arg0: number): void;
        getClearWeatherTime(): number;
        getGameTime(): number;
        getDifficulty(): $Difficulty;
        getGameRules(): $GameRules;
        isRaining(): boolean;
        setDayTime(arg0: number): void;
        setSpawn(arg0: $BlockPos_, arg1: number): void;
        getSpawnAngle(): number;
        isThundering(): boolean;
        getDayTimePerTick(): number;
        setDayTimeFraction(arg0: number): void;
        setDayTimePerTick(arg0: number): void;
        getSpawnPos(): $BlockPos;
        setGameTime(arg0: number): void;
        getGameType(): $GameType;
        isDifficultyLocked(): boolean;
        getWanderingTraderSpawnChance(): number;
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnChance(arg0: number): void;
        setWanderingTraderSpawnDelay(arg0: number): void;
        setWanderingTraderId(arg0: $UUID_): void;
        getWanderingTraderId(): $UUID;
        constructor(arg0: $WorldData, arg1: $ServerLevelData);
        get levelName(): string;
        get hardcore(): boolean;
        get allowCommands(): boolean;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get difficulty(): $Difficulty;
        get gameRules(): $GameRules;
        get spawnAngle(): number;
        get spawnPos(): $BlockPos;
        get difficultyLocked(): boolean;
    }
    export class $LevelStorageException extends $RuntimeException {
        getMessageComponent(): $Component;
        constructor(arg0: $Component_);
        get messageComponent(): $Component;
    }
    export class $WritableLevelData {
    }
    export interface $WritableLevelData extends $LevelData {
        setSpawn(arg0: $BlockPos_, arg1: number): void;
    }
    export class $LevelData {
    }
    export interface $LevelData {
        isHardcore(): boolean;
        fillCrashReportCategory(arg0: $CrashReportCategory, arg1: $LevelHeightAccessor): void;
        getDayTime(): number;
        setRaining(arg0: boolean): void;
        getGameTime(): number;
        getDifficulty(): $Difficulty;
        getGameRules(): $GameRules;
        isRaining(): boolean;
        getSpawnAngle(): number;
        isThundering(): boolean;
        getSpawnPos(): $BlockPos;
        isDifficultyLocked(): boolean;
        get hardcore(): boolean;
        get dayTime(): number;
        get gameTime(): number;
        get difficulty(): $Difficulty;
        get gameRules(): $GameRules;
        get spawnAngle(): number;
        get thundering(): boolean;
        get spawnPos(): $BlockPos;
        get difficultyLocked(): boolean;
    }
    export class $DimensionDataStorage implements $AccessorMixinDimensionDataStorage {
        get<T extends $SavedData>(arg0: $SavedData$Factory_<T>, arg1: string): T;
        set(arg0: string, arg1: $SavedData): void;
        computeIfAbsent<T extends $SavedData>(arg0: $SavedData$Factory_<T>, arg1: string): T;
        save(): void;
        readTagFromDisk(arg0: string, arg1: $DataFixTypes_, arg2: number): $CompoundTag;
        getCache(): $Map<string, $SavedData>;
        dataFolder: $File;
        constructor(arg0: $File_, arg1: $DataFixer, arg2: $HolderLookup$Provider);
        get cache(): $Map<string, $SavedData>;
    }
    export class $LevelSummary$BackupStatus extends $Enum<$LevelSummary$BackupStatus> {
        static values(): $LevelSummary$BackupStatus[];
        static valueOf(arg0: string): $LevelSummary$BackupStatus;
        shouldBackup(): boolean;
        getTranslationKey(): string;
        isSevere(): boolean;
        static UPGRADE_TO_SNAPSHOT: $LevelSummary$BackupStatus;
        static DOWNGRADE: $LevelSummary$BackupStatus;
        static NONE: $LevelSummary$BackupStatus;
        get translationKey(): string;
        get severe(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LevelSummary$BackupStatus}.
     */
    export type $LevelSummary$BackupStatus_ = "none" | "downgrade" | "upgrade_to_snapshot";
    export class $LevelStorageSource$LevelStorageAccess implements $AutoCloseable {
        parent(): $LevelStorageSource;
        close(): void;
        getLevelId(): string;
        getFileModificationTime(arg0: boolean): $Instant;
        getIconFile(): ($Path) | undefined;
        estimateDiskSpace(): number;
        renameLevel(arg0: string): void;
        getWorldDir(): $Path;
        getDataTagFallback(): $Dynamic<never>;
        makeWorldBackup(): number;
        getDimensionPath(arg0: $ResourceKey_<$Level>): $Path;
        saveDataTag(arg0: $RegistryAccess, arg1: $WorldData): void;
        saveDataTag(arg0: $RegistryAccess, arg1: $WorldData, arg2: $CompoundTag_): void;
        getLevelPath(arg0: $LevelResource): $Path;
        readAdditionalLevelSaveData(arg0: boolean): void;
        getLevelDirectory(): $LevelStorageSource$LevelDirectory;
        hasWorldData(): boolean;
        deleteLevel(): void;
        safeClose(): void;
        getSummary(arg0: $Dynamic<never>): $LevelSummary;
        createPlayerStorage(): $PlayerDataStorage;
        checkForLowDiskSpace(): boolean;
        handler$dhg000$xaerominimap$onDeleteLevel(arg0: $CallbackInfo): void;
        handler$eah001$xaeroworldmap$onDeleteLevel(arg0: $CallbackInfo): void;
        renameAndDropPlayer(arg0: string): void;
        restoreLevelDataFromOld(): boolean;
        getDataTag(): $Dynamic<never>;
        get levelId(): string;
        get iconFile(): ($Path) | undefined;
        get worldDir(): $Path;
        get dataTagFallback(): $Dynamic<never>;
        get levelDirectory(): $LevelStorageSource$LevelDirectory;
        get dataTag(): $Dynamic<never>;
    }
    export class $PlayerDataStorage {
        load(arg0: $Player): ($CompoundTag) | undefined;
        save(arg0: $Player): void;
        getPlayerDir(): $File;
        constructor(arg0: $LevelStorageSource$LevelStorageAccess, arg1: $DataFixer);
        get playerDir(): $File;
    }
    export class $ServerLevelData {
    }
    export interface $ServerLevelData extends $WritableLevelData {
        getLevelName(): string;
        setInitialized(arg0: boolean): void;
        isInitialized(): boolean;
        getWorldBorder(): $WorldBorder$Settings;
        isAllowCommands(): boolean;
        getDayTimeFraction(): number;
        fillCrashReportCategory(arg0: $CrashReportCategory, arg1: $LevelHeightAccessor): void;
        setWorldBorder(arg0: $WorldBorder$Settings): void;
        setThundering(arg0: boolean): void;
        setThunderTime(arg0: number): void;
        setGameType(arg0: $GameType_): void;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        setRainTime(arg0: number): void;
        getRainTime(): number;
        getThunderTime(): number;
        setClearWeatherTime(arg0: number): void;
        getClearWeatherTime(): number;
        setDayTime(arg0: number): void;
        getDayTimePerTick(): number;
        setDayTimeFraction(arg0: number): void;
        setDayTimePerTick(arg0: number): void;
        setGameTime(arg0: number): void;
        getGameType(): $GameType;
        getWanderingTraderSpawnChance(): number;
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnChance(arg0: number): void;
        setWanderingTraderSpawnDelay(arg0: number): void;
        setWanderingTraderId(arg0: $UUID_): void;
        getWanderingTraderId(): $UUID;
        get levelName(): string;
        get allowCommands(): boolean;
        set thundering(value: boolean);
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        set dayTime(value: number);
        set gameTime(value: number);
    }
    export class $LevelVersion {
        snapshot(): boolean;
        static parse(arg0: $Dynamic<never>): $LevelVersion;
        levelDataVersion(): number;
        minecraftVersion(): $DataVersion;
        minecraftVersionName(): string;
        lastPlayed(): number;
    }
    export class $LevelStorageSource {
        getName(): string;
        static parseValidator(arg0: $Path_): $DirectoryValidator;
        static createDefault(arg0: $Path_): $LevelStorageSource;
        static readDataConfig(arg0: $Dynamic<never>): $WorldDataConfiguration;
        getBackupPath(): $Path;
        loadLevelSummaries(arg0: $LevelStorageSource$LevelCandidates_): $CompletableFuture<$List<$LevelSummary>>;
        levelExists(arg0: string): boolean;
        static getPackConfig(arg0: $Dynamic<never>, arg1: $PackRepository, arg2: boolean): $WorldLoader$PackConfig;
        validateAndCreateAccess(arg0: string): $LevelStorageSource$LevelStorageAccess;
        getWorldDirValidator(): $DirectoryValidator;
        findLevelCandidates(): $LevelStorageSource$LevelCandidates;
        static getLevelDataAndDimensions(arg0: $Dynamic<never>, arg1: $WorldDataConfiguration_, arg2: $Registry<$LevelStem_>, arg3: $RegistryAccess$Frozen): $LevelDataAndDimensions;
        isNewLevelIdAcceptable(arg0: string): boolean;
        getLevelPath(arg0: string): $Path;
        getBaseDir(): $Path;
        createAccess(arg0: string): $LevelStorageSource$LevelStorageAccess;
        static ALLOWED_SYMLINKS_CONFIG_NAME: string;
        constructor(arg0: $Path_, arg1: $Path_, arg2: $DirectoryValidator, arg3: $DataFixer);
        get name(): string;
        get backupPath(): $Path;
        get worldDirValidator(): $DirectoryValidator;
        get baseDir(): $Path;
    }
    export class $PrimaryLevelData implements $ServerLevelData, $WorldData {
        static parse<T>(arg0: $Dynamic<T>, arg1: $LevelSettings, arg2: $PrimaryLevelData$SpecialWorldProperty_, arg3: $WorldOptions, arg4: $Lifecycle): $PrimaryLevelData;
        getVersion(): number;
        getLevelName(): string;
        isHardcore(): boolean;
        setInitialized(arg0: boolean): void;
        isInitialized(): boolean;
        createTag(arg0: $RegistryAccess, arg1: $CompoundTag_): $CompoundTag;
        getWorldBorder(): $WorldBorder$Settings;
        getLevelSettings(): $LevelSettings;
        isDebugWorld(): boolean;
        getLoadedPlayerTag(): $CompoundTag;
        overworldData(): $ServerLevelData;
        setDifficulty(arg0: $Difficulty_): void;
        setModdedInfo(arg0: string, arg1: boolean): void;
        isAllowCommands(): boolean;
        getDayTimeFraction(): number;
        fillCrashReportCategory(arg0: $CrashReportCategory, arg1: $LevelHeightAccessor): void;
        getCustomBossEvents(): $CompoundTag;
        getKnownServerBrands(): $Set<string>;
        worldGenSettingsLifecycle(): $Lifecycle;
        setCustomBossEvents(arg0: $CompoundTag_): void;
        getDataConfiguration(): $WorldDataConfiguration;
        setDataConfiguration(arg0: $WorldDataConfiguration_): void;
        setDifficultyLocked(arg0: boolean): void;
        getRemovedFeatureFlags(): $Set<string>;
        setWorldBorder(arg0: $WorldBorder$Settings): void;
        getDayTime(): number;
        setRaining(arg0: boolean): void;
        endDragonFightData(): $EndDragonFight$Data;
        setThundering(arg0: boolean): void;
        setThunderTime(arg0: number): void;
        setGameType(arg0: $GameType_): void;
        worldGenOptions(): $WorldOptions;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        setRainTime(arg0: number): void;
        getRainTime(): number;
        getThunderTime(): number;
        isFlatWorld(): boolean;
        setClearWeatherTime(arg0: number): void;
        getClearWeatherTime(): number;
        setEndDragonFightData(arg0: $EndDragonFight$Data_): void;
        getGameTime(): number;
        getDifficulty(): $Difficulty;
        getGameRules(): $GameRules;
        isRaining(): boolean;
        setDayTime(arg0: number): void;
        setSpawn(arg0: $BlockPos_, arg1: number): void;
        wasModded(): boolean;
        getSpawnAngle(): number;
        isThundering(): boolean;
        getDayTimePerTick(): number;
        setDayTimeFraction(arg0: number): void;
        setDayTimePerTick(arg0: number): void;
        getSpawnPos(): $BlockPos;
        setGameTime(arg0: number): void;
        getGameType(): $GameType;
        isDifficultyLocked(): boolean;
        hasConfirmedExperimentalWarning(): boolean;
        withConfirmedWarning(arg0: boolean): $PrimaryLevelData;
        getWanderingTraderSpawnChance(): number;
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnChance(arg0: number): void;
        setWanderingTraderSpawnDelay(arg0: number): void;
        setWanderingTraderId(arg0: $UUID_): void;
        getWanderingTraderId(): $UUID;
        handler$fgm000$collective$hasConfirmedExperimentalWarning(arg0: $CallbackInfoReturnable<any>): void;
        enabledFeatures(): $FeatureFlagSet;
        fillCrashReportCategory(arg0: $CrashReportCategory): void;
        getStorageVersionName(arg0: number): string;
        static LEVEL_NAME: string;
        constructor(arg0: $LevelSettings, arg1: $WorldOptions, arg2: $PrimaryLevelData$SpecialWorldProperty_, arg3: $Lifecycle);
        get version(): number;
        get levelName(): string;
        get hardcore(): boolean;
        get levelSettings(): $LevelSettings;
        get debugWorld(): boolean;
        get loadedPlayerTag(): $CompoundTag;
        get allowCommands(): boolean;
        get knownServerBrands(): $Set<string>;
        get removedFeatureFlags(): $Set<string>;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get flatWorld(): boolean;
        get gameRules(): $GameRules;
        get spawnAngle(): number;
        get spawnPos(): $BlockPos;
    }
    export class $LevelSummary implements $Comparable<$LevelSummary> {
        compareTo(arg0: $LevelSummary): number;
        isLocked(): boolean;
        getLevelName(): string;
        getInfo(): $Component;
        getLevelId(): string;
        isHardcore(): boolean;
        getSettings(): $LevelSettings;
        backupStatus(): $LevelSummary$BackupStatus;
        shouldBackup(): boolean;
        isDowngrade(): boolean;
        hasCommands(): boolean;
        levelVersion(): $LevelVersion;
        canRecreate(): boolean;
        getLastPlayed(): number;
        canDelete(): boolean;
        getWorldVersionName(): $MutableComponent;
        requiresManualConversion(): boolean;
        primaryActionMessage(): $Component;
        primaryActionActive(): boolean;
        isExperimental(): boolean;
        isDisabled(): boolean;
        canEdit(): boolean;
        canUpload(): boolean;
        isCompatible(): boolean;
        getGameMode(): $GameType;
        getIcon(): $Path;
        static PLAY_WORLD: $Component;
        constructor(arg0: $LevelSettings, arg1: $LevelVersion, arg2: string, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $Path_);
        get locked(): boolean;
        get levelName(): string;
        get info(): $Component;
        get levelId(): string;
        get hardcore(): boolean;
        get settings(): $LevelSettings;
        get downgrade(): boolean;
        get lastPlayed(): number;
        get worldVersionName(): $MutableComponent;
        get experimental(): boolean;
        get disabled(): boolean;
        get compatible(): boolean;
        get gameMode(): $GameType;
        get icon(): $Path;
    }
    export class $FileNameDateFormatter {
        static create(): $DateTimeFormatter;
        constructor();
    }
    export class $LevelResource implements $LevelResourceAccessor {
        getId(): string;
        static gameRuleManager$newInstance$gamerule_manager_$md$70d283$0(arg0: string): $LevelResource;
        static PLAYER_ADVANCEMENTS_DIR: $LevelResource;
        static PLAYER_OLD_DATA_DIR: $LevelResource;
        static GENERATED_DIR: $LevelResource;
        static LEVEL_DATA_FILE: $LevelResource;
        static MAP_RESOURCE_FILE: $LevelResource;
        static ROOT: $LevelResource;
        static ICON_FILE: $LevelResource;
        static LOCK_FILE: $LevelResource;
        static OLD_LEVEL_DATA_FILE: $LevelResource;
        static PLAYER_STATS_DIR: $LevelResource;
        static PLAYER_DATA_DIR: $LevelResource;
        static DATAPACK_DIR: $LevelResource;
        constructor(arg0: string);
        get id(): string;
    }
    /**
     * @deprecated
     */
    export class $PrimaryLevelData$SpecialWorldProperty extends $Enum<$PrimaryLevelData$SpecialWorldProperty> {
        static values(): $PrimaryLevelData$SpecialWorldProperty[];
        static valueOf(arg0: string): $PrimaryLevelData$SpecialWorldProperty;
        static FLAT: $PrimaryLevelData$SpecialWorldProperty;
        static NONE: $PrimaryLevelData$SpecialWorldProperty;
        static DEBUG: $PrimaryLevelData$SpecialWorldProperty;
    }
    /**
     * Values that may be interpreted as {@link $PrimaryLevelData$SpecialWorldProperty}.
     */
    export type $PrimaryLevelData$SpecialWorldProperty_ = "none" | "flat" | "debug";
    export class $LevelStorageSource$LevelCandidates extends $Record implements $Iterable<$LevelStorageSource$LevelDirectory> {
        isEmpty(): boolean;
        iterator(): $Iterator<$LevelStorageSource$LevelDirectory>;
        levels(): $List<$LevelStorageSource$LevelDirectory>;
        spliterator(): $Spliterator<$LevelStorageSource$LevelDirectory>;
        forEach(arg0: $Consumer_<$LevelStorageSource$LevelDirectory>): void;
        constructor(levels: $List_<$LevelStorageSource$LevelDirectory_>);
        [Symbol.iterator](): Iterator<$LevelStorageSource$LevelDirectory>
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LevelStorageSource$LevelCandidates}.
     */
    export type $LevelStorageSource$LevelCandidates_ = { levels?: $List_<$LevelStorageSource$LevelDirectory_>,  } | [levels?: $List_<$LevelStorageSource$LevelDirectory_>, ];
}
