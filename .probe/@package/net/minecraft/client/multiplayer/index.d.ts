import { $ServerLinks_, $ServerLinks } from "@package/net/minecraft/server";
import { $LevelRenderer, $DimensionSpecialEffects } from "@package/net/minecraft/client/renderer";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $XaeroMinimapSession } from "@package/xaero/common";
import { $Entity, $Entity$RemovalReason_ } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $CustomPacketPayload_, $CustomPacketPayload$Type_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $CloseableResourceManager, $ResourceProvider_ } from "@package/net/minecraft/server/packs/resources";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $URL } from "@package/java/net";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $DisconnectionDetails_, $ServerboundPacketListener, $TickablePacketListener, $FriendlyByteBuf, $Connection, $DisconnectionDetails, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $IMixinClientWorld } from "@package/fi/dy/masa/tweakeroo/mixin/world";
import { $AccessorClientChunkCacheStorage } from "@package/com/railwayteam/railways/mixin/conductor_possession";
import { $DragItem } from "@package/neoforge/com/mrmelon54/DraggableLists";
import { $KubeAnimatedParticle, $KubeSessionData } from "@package/dev/latvian/mods/kubejs/client";
import { $PlayerChatMessage_, $RemoteChatSession, $SignedMessageValidator, $Component_, $PlayerChatMessage, $Component } from "@package/net/minecraft/network/chat";
import { $LevelChunk, $ChunkSource } from "@package/net/minecraft/world/level/chunk";
import { $WritableLevelData } from "@package/net/minecraft/world/level/storage";
import { $Duration_ } from "@package/java/time";
import { $SharedSuggestionProvider$ElementSuggestionType_, $SharedSuggestionProvider, $SharedSuggestionProvider$TextCoordinates } from "@package/net/minecraft/commands";
import { $LocalSampleLogger } from "@package/net/minecraft/util/debugchart";
import { $NeoListenableNetworkHandler } from "@package/org/sinytra/fabric/networking_api";
import { $PlayerSkin } from "@package/net/minecraft/client/resources";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $IXaeroMinimapClientWorld, $MinimapClientWorldData } from "@package/xaero/common/minimap/mcworld";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $StatsCounter } from "@package/net/minecraft/stats";
import { $IWorldMapClientPlayNetHandler } from "@package/xaero/map/core";
import { $ServerStatus$Players } from "@package/net/minecraft/network/protocol/status";
import { $ConnectionType_, $ConnectionType } from "@package/net/neoforged/neoforge/network/connection";
import { $PredictiveAction_ } from "@package/net/minecraft/client/multiplayer/prediction";
import { $UUID_, $Set_, $ArrayList, $Map, $List, $Map_, $List_, $Collection, $Set, $UUID } from "@package/java/util";
import { $ChunkTrackerHolder, $ChunkTracker } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/map";
import { $ClientboundCookieRequestPacket_ } from "@package/net/minecraft/network/protocol/cookie";
import { $BlockPos, $BlockPos_, $HolderLookup$Provider, $RegistryAccess$Frozen, $RegistrySynchronization$PackedRegistryEntry_, $Direction_, $LayeredRegistryAccess, $BlockPos$MutableBlockPos, $RegistryAccess, $Registry, $Holder_ } from "@package/net/minecraft/core";
import { $PacketFlow, $Packet } from "@package/net/minecraft/network/protocol";
import { $Exception, $Throwable, $Enum, $Iterable, $Record, $Runnable_ } from "@package/java/lang";
import { $ClientLoginNetworkAddon } from "@package/net/fabricmc/fabric/impl/networking/client";
import { $BiomeSeedProvider } from "@package/net/caffeinemc/mods/sodium/client/world";
import { $ClientLevelAccessor } from "@package/dev/xkmc/fastprojectileapi/mixin";
import { $GameRules, $ChunkPos, $ColorResolver_, $GameType, $GameType_, $EntityGetter, $LevelHeightAccessor, $Level } from "@package/net/minecraft/world/level";
import { $Renderable, $DebugScreenOverlay, $ChatComponent$State } from "@package/net/minecraft/client/gui/components";
import { $ClientboundGameProfilePacket_, $ClientboundHelloPacket, $ClientboundLoginCompressionPacket, $ClientboundLoginDisconnectPacket, $ClientboundCustomQueryPacket_, $ClientLoginPacketListener } from "@package/net/minecraft/network/protocol/login";
import { $ClientboundPongResponsePacket_ } from "@package/net/minecraft/network/protocol/ping";
import { $IXaeroMinimapClientPlayNetHandler } from "@package/xaero/common/core";
import { $BetterStatus_, $BetterStatus, $ServerDataExtension } from "@package/dev/wuffs/bcc/data";
import { $ServerAddress } from "@package/net/minecraft/client/multiplayer/resolver";
import { $ClientPacketListenerAccessor } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $SimpleChannelInboundHandler } from "@package/io/netty/channel";
import { $Screen, $Screen$DeferredTooltipRendering, $ConfirmScreen } from "@package/net/minecraft/client/gui/screens";
import { $ClientLoginNetworkHandlerAccessor } from "@package/net/fabricmc/fabric/mixin/networking/client/accessor";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $ServerListDuckProvider } from "@package/neoforge/com/mrmelon54/DraggableLists/duck";
import { $AccessorMultiPlayerGameMode } from "@package/org/violetmoon/quark/mixin/mixins/client/accessor";
import { $RecipeManager, $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeCollection } from "@package/net/minecraft/client/gui/screens/recipebook";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $DebugQueryHandler, $Minecraft, $ClientRecipeBook, $User } from "@package/net/minecraft/client";
import { $RandomSource } from "@package/net/minecraft/util";
import { $AdvancementHolder, $AdvancementProgress, $AdvancementTree$Listener, $AdvancementNode, $AdvancementHolder_, $AdvancementTree } from "@package/net/minecraft/advancements";
import { $InteractionResult, $InteractionHand_, $Difficulty_, $Difficulty } from "@package/net/minecraft/world";
import { $CrashReport, $CrashReportCategory } from "@package/net/minecraft";
import { $ExtendedServerListData } from "@package/net/neoforged/neoforge/client";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $ClickType_ } from "@package/net/minecraft/world/inventory";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $LevelCallback, $TransientEntitySectionManager } from "@package/net/minecraft/world/level/entity";
import { $TooltipFlag, $Item$TooltipContext, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $SpriteSet } from "@package/net/minecraft/client/particle";
import { $ProfileKeyPair, $Player, $ProfileKeyPair_ } from "@package/net/minecraft/world/entity/player";
import { $IWorldMapClientWorld, $WorldMapClientWorldData } from "@package/xaero/map/mcworld";
import { $KnownPack_, $KnownPack } from "@package/net/minecraft/server/packs/repository";
import { $AtomicReferenceArray } from "@package/java/util/concurrent/atomic";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $AccessorClientAdvancements } from "@package/vazkii/patchouli/mixin/client";
import { $ClientPacketListenerKJS, $ClientLevelKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $SearchTree } from "@package/net/minecraft/client/searchtree";
import { $UserApiService } from "@package/com/mojang/authlib/minecraft";
import { $EntityHitResult, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $NetworkHandlerExtensions } from "@package/net/fabricmc/fabric/impl/networking";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $ClientboundResourcePackPopPacket_, $ClientboundCustomPayloadPacket_, $ClientboundPingPacket, $ClientboundTransferPacket_, $ClientboundDisconnectPacket_, $ClientboundKeepAlivePacket, $ClientCommonPacketListener, $ClientboundCustomReportDetailsPacket_, $ClientboundUpdateTagsPacket, $ClientboundServerLinksPacket_, $ClientboundStoreCookiePacket_, $ClientboundResourcePackPushPacket_ } from "@package/net/minecraft/network/protocol/common";
import { $Supplier_, $BooleanSupplier_, $Consumer_ } from "@package/java/util/function";
import { $Path_ } from "@package/java/nio/file";
import { $Suggestions, $SuggestionsBuilder } from "@package/com/mojang/brigadier/suggestion";
import { $MapId_, $MapId, $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $TagNetworkSerialization$NetworkPayload } from "@package/net/minecraft/tags";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $ClientboundSetBorderSizePacket, $ClientboundDamageEventPacket_, $ClientboundUpdateAttributesPacket, $ClientboundHurtAnimationPacket_, $ClientboundPlayerInfoRemovePacket_, $ClientboundSetSimulationDistancePacket_, $ClientboundSetTitleTextPacket_, $ClientboundSetActionBarTextPacket_, $ClientboundTickingStatePacket_, $ClientboundSetCarriedItemPacket, $ClientboundLevelChunkWithLightPacket, $ClientboundDisguisedChatPacket_, $ClientboundPlayerCombatEnterPacket, $ClientboundPlayerLookAtPacket, $ClientboundSetBorderCenterPacket, $ClientboundTickingStepPacket_, $ClientboundSetDisplayObjectivePacket, $ClientboundSectionBlocksUpdatePacket, $ClientboundSetPassengersPacket, $ClientboundUpdateMobEffectPacket, $ClientboundSetExperiencePacket, $ClientboundTakeItemEntityPacket, $ClientboundStartConfigurationPacket, $ClientboundLightUpdatePacket, $ClientboundUpdateRecipesPacket, $ClientboundPlayerInfoUpdatePacket, $ClientboundBlockDestructionPacket, $ClientboundPlayerCombatEndPacket, $ClientboundOpenBookPacket, $ClientboundBlockChangedAckPacket_, $ClientboundBlockUpdatePacket, $ClientboundStopSoundPacket, $ClientboundRemoveEntitiesPacket, $ClientboundLevelChunkPacketData$BlockEntityTagOutput, $ClientboundSetCameraPacket, $ClientboundLoginPacket_, $ClientboundSetEquipmentPacket, $ClientboundSetEntityLinkPacket, $ClientboundPlayerPositionPacket, $ClientboundRespawnPacket_, $ClientboundCustomChatCompletionsPacket$Action_, $ClientboundRecipePacket, $ClientboundAwardStatsPacket_, $ClientboundPlayerCombatKillPacket_, $ClientboundChunksBiomesPacket_, $ClientboundForgetLevelChunkPacket_, $ClientboundContainerClosePacket, $ClientboundAddEntityPacket, $ClientboundSetDefaultSpawnPositionPacket, $ClientboundSetObjectivePacket, $ClientboundSetEntityDataPacket_, $ClientboundPlaceGhostRecipePacket, $ClientboundSetTitlesAnimationPacket, $ClientboundSetChunkCacheCenterPacket, $ClientboundHorseScreenOpenPacket, $ClientboundCommandsPacket, $ClientboundLevelEventPacket, $ClientboundLevelParticlesPacket, $ClientboundSystemChatPacket_, $ClientboundPlayerChatPacket_, $ClientboundContainerSetSlotPacket, $ClientboundClearTitlesPacket, $ClientboundProjectilePowerPacket, $ClientboundTabListPacket_, $ClientboundMerchantOffersPacket, $ClientboundSetScorePacket_, $ClientboundTeleportEntityPacket, $ClientboundBossEventPacket, $ClientboundAddExperienceOrbPacket, $ClientboundGameEventPacket, $ClientboundSetSubtitleTextPacket_, $ClientboundRotateHeadPacket, $ClientboundUpdateAdvancementsPacket, $ClientboundChunkBatchStartPacket, $ClientboundMoveEntityPacket, $ClientboundChangeDifficultyPacket, $ClientboundSetEntityMotionPacket, $ClientboundSetHealthPacket, $ClientboundChunkBatchFinishedPacket_, $ClientboundSetPlayerTeamPacket, $ClientboundContainerSetDataPacket, $ClientboundSetBorderWarningDelayPacket, $ClientboundExplodePacket, $ClientboundRemoveMobEffectPacket_, $ClientboundSelectAdvancementsTabPacket, $ClientboundDebugSamplePacket_, $ClientboundSetTimePacket, $ClientboundResetScorePacket_, $ClientboundSetChunkCacheRadiusPacket, $ClientboundCooldownPacket_, $ClientboundLevelChunkPacketData, $ClientboundSetBorderWarningDistancePacket, $ClientboundSetBorderLerpSizePacket, $ClientboundSoundEntityPacket, $ClientboundTagQueryPacket, $ClientboundMapItemDataPacket_, $ClientboundBlockEntityDataPacket, $ClientboundAnimatePacket, $ClientboundInitializeBorderPacket, $ClientboundEntityEventPacket, $ClientGamePacketListener, $ClientboundDeleteChatPacket_, $ClientboundServerDataPacket_, $ClientboundContainerSetContentPacket, $ClientboundSoundPacket, $ClientboundOpenScreenPacket, $ClientboundBundlePacket, $ClientboundCustomChatCompletionsPacket_, $ClientboundCommandSuggestionsPacket_, $ClientboundOpenSignEditorPacket, $ClientboundMoveVehiclePacket, $ClientboundPlayerAbilitiesPacket, $ClientboundBlockEventPacket } from "@package/net/minecraft/network/protocol/game";
import { $ClientboundResetChatPacket, $ClientboundUpdateEnabledFeaturesPacket_, $ClientConfigurationPacketListener, $ClientboundFinishConfigurationPacket, $ClientboundRegistryDataPacket_, $ClientboundSelectKnownPacks_ } from "@package/net/minecraft/network/protocol/configuration";
import { $MultiPlayerGameModeAccessor } from "@package/fuzs/proplacer/mixin/client/accessor";
import { $Stream } from "@package/java/util/stream";
import { $WorldSessionTelemetryManager } from "@package/net/minecraft/client/telemetry";
import { $WorldMapSession } from "@package/xaero/map";
import { $PotionBrewing } from "@package/net/minecraft/world/item/alchemy";
import { $IClientLevel, $ClientLevelData } from "@package/xaero/lib/client/level";
import { $Scoreboard, $PlayerTeam } from "@package/net/minecraft/world/scores";
import { $Font } from "@package/net/minecraft/client/gui";
import { $BlockEntity, $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as chat from "@package/net/minecraft/client/multiplayer/chat";
export * as resolver from "@package/net/minecraft/client/multiplayer/resolver";
export * as prediction from "@package/net/minecraft/client/multiplayer/prediction";

declare module "@package/net/minecraft/client/multiplayer" {
    export class $SessionSearchTrees$Key {
        constructor();
    }
    export class $TagCollector {
        append(arg0: $ResourceKey_<$Registry<never>>, arg1: $TagNetworkSerialization$NetworkPayload): void;
        updateTags(arg0: $RegistryAccess, arg1: boolean): void;
        constructor();
    }
    export class $ServerData$State extends $Enum<$ServerData$State> {
        static values(): $ServerData$State[];
        static valueOf(arg0: string): $ServerData$State;
        static PINGING: $ServerData$State;
        static SUCCESSFUL: $ServerData$State;
        static INITIAL: $ServerData$State;
        static INCOMPATIBLE: $ServerData$State;
        static UNREACHABLE: $ServerData$State;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$State}.
     */
    export type $ServerData$State_ = "initial" | "pinging" | "unreachable" | "incompatible" | "successful";
    export class $AccountProfileKeyPairManager implements $ProfileKeyPairManager {
        prepareKeyPair(): $CompletableFuture<($ProfileKeyPair) | undefined>;
        shouldRefreshKeyPair(): boolean;
        constructor(arg0: $UserApiService, arg1: $UUID_, arg2: $Path_);
    }
    export class $ClientConfigurationPacketListenerImpl extends $ClientCommonPacketListenerImpl implements $ClientConfigurationPacketListener, $TickablePacketListener, $NeoListenableNetworkHandler {
        tick(): void;
        handleDisconnect(): void;
        handleConfigurationFinished(arg0: $ClientboundFinishConfigurationPacket): void;
        handleSelectKnownPacks(arg0: $ClientboundSelectKnownPacks_): void;
        handler$fjd000$fabric_networking_api_v1$handleComplete(arg0: $ClientboundFinishConfigurationPacket, arg1: $CallbackInfo): void;
        handleRegistryData(arg0: $ClientboundRegistryDataPacket_): void;
        handleResetChat(arg0: $ClientboundResetChatPacket): void;
        handleEnabledFeatures(arg0: $ClientboundUpdateEnabledFeaturesPacket_): void;
        minecraft: $Minecraft;
        connection: $Connection;
        constructor(arg0: $Minecraft, arg1: $Connection, arg2: $CommonListenerCookie_);
    }
    export class $ClientHandshakePacketListenerImpl$State extends $Enum<$ClientHandshakePacketListenerImpl$State> {
    }
    /**
     * Values that may be interpreted as {@link $ClientHandshakePacketListenerImpl$State}.
     */
    export type $ClientHandshakePacketListenerImpl$State_ = "connecting" | "authorizing" | "encrypting" | "joining";
    export class $LevelLoadStatusManager {
        tick(): void;
        loadingPacketsReceived(): void;
        levelReady(): boolean;
        constructor(arg0: $LocalPlayer, arg1: $ClientLevel, arg2: $LevelRenderer);
    }
    export class $ClientPacketListener extends $ClientCommonPacketListenerImpl implements $ClientGamePacketListener, $TickablePacketListener, $NeoListenableNetworkHandler, $IXaeroMinimapClientPlayNetHandler, $IWorldMapClientPlayNetHandler, $ClientPacketListenerKJS, $ClientPacketListenerAccessor {
        getId(): $UUID;
        close(): void;
        tick(): void;
        levels(): $Set<$ResourceKey<$Level>>;
        getLevel(): $ClientLevel;
        clearLevel(): void;
        handleDisconnect(): void;
        getRecipeManager(): $RecipeManager;
        enabledFeatures(): $FeatureFlagSet;
        handleBossUpdate(arg0: $ClientboundBossEventPacket): void;
        handleOpenBook(arg0: $ClientboundOpenBookPacket): void;
        handleItemCooldown(arg0: $ClientboundCooldownPacket_): void;
        handler$dhd000$xaerominimap$onOnGameJoin(arg0: $ClientboundLoginPacket_, arg1: $CallbackInfo): void;
        handler$eai001$xaeroworldmap$onOnGameJoin(arg0: $ClientboundLoginPacket_, arg1: $CallbackInfo): void;
        handler$dhd000$xaerominimap$onOnChunkData(arg0: number, arg1: number, arg2: $ClientboundLevelChunkPacketData, arg3: $CallbackInfo): void;
        handler$eag001$xaeroworldmap$onOnChunkData(arg0: number, arg1: number, arg2: $ClientboundLevelChunkPacketData, arg3: $CallbackInfo): void;
        handler$ghj000$ali$handleInvokeTags(clientboundUpdateTagsPacket: $ClientboundUpdateTagsPacket, ci: $CallbackInfo): void;
        handler$ffa000$autofish$onVelocityUpdate(arg0: $ClientboundSetEntityMotionPacket, arg1: $CallbackInfo): void;
        scoreboard(): $Scoreboard;
        setKeyPair(arg0: $ProfileKeyPair_): void;
        handleLogin(arg0: $ClientboundLoginPacket_): void;
        registryAccess(): $RegistryAccess$Frozen;
        getServerData(): $ServerData;
        updateSearchTrees(): void;
        getAdvancements(): $ClientAdvancements;
        handler$eag001$xaeroworldmap$onHandleLevelChunkWithLight(arg0: $ClientboundLevelChunkWithLightPacket, arg1: $CallbackInfo): void;
        handler$gnl000$ftbchunks$handleChunkBlocksUpdateFTBC(packet: $ClientboundSectionBlocksUpdatePacket, ci: $CallbackInfo): void;
        handler$dhd000$xaerominimap$onHandleLevelChunkWithLight(arg0: $ClientboundLevelChunkWithLightPacket, arg1: $CallbackInfo): void;
        getDebugQueryHandler(): $DebugQueryHandler;
        sendUnsignedCommand(arg0: string): boolean;
        handleDamageEvent(arg0: $ClientboundDamageEventPacket_): void;
        handleEntityEvent(arg0: $ClientboundEntityEventPacket): void;
        getCommands(): $CommandDispatcher<$SharedSuggestionProvider>;
        handleSetBorderWarningDistance(arg0: $ClientboundSetBorderWarningDistancePacket): void;
        handleTabListCustomisation(arg0: $ClientboundTabListPacket_): void;
        handleSoundEntityEvent(arg0: $ClientboundSoundEntityPacket): void;
        handlePlayerInfoUpdate(arg0: $ClientboundPlayerInfoUpdatePacket): void;
        handleRemoveMobEffect(arg0: $ClientboundRemoveMobEffectPacket_): void;
        handlePlayerInfoRemove(arg0: $ClientboundPlayerInfoRemovePacket_): void;
        handleUpdateAttributes(arg0: $ClientboundUpdateAttributesPacket): void;
        handleChunkBatchFinished(arg0: $ClientboundChunkBatchFinishedPacket_): void;
        handleParticleEvent(arg0: $ClientboundLevelParticlesPacket): void;
        handleLightUpdatePacket(arg0: $ClientboundLightUpdatePacket): void;
        markMessageAsProcessed(arg0: $PlayerChatMessage_, arg1: boolean): void;
        handleMerchantOffers(arg0: $ClientboundMerchantOffersPacket): void;
        handleSetChunkCacheRadius(arg0: $ClientboundSetChunkCacheRadiusPacket): void;
        handleSetDisplayObjective(arg0: $ClientboundSetDisplayObjectivePacket): void;
        handleChunkBatchStart(arg0: $ClientboundChunkBatchStartPacket): void;
        handleSetChunkCacheCenter(arg0: $ClientboundSetChunkCacheCenterPacket): void;
        handleSetPlayerTeamPacket(arg0: $ClientboundSetPlayerTeamPacket): void;
        getListedOnlinePlayers(): $Collection<$PlayerInfo>;
        sendChat(arg0: string): void;
        getLocalGameProfile(): $GameProfile;
        handleBlockChangedAck(arg0: $ClientboundBlockChangedAckPacket_): void;
        handleSetCarriedItem(arg0: $ClientboundSetCarriedItemPacket): void;
        handleContainerClose(arg0: $ClientboundContainerClosePacket): void;
        handleGameEvent(arg0: $ClientboundGameEventPacket): void;
        getPlayerInfo(arg0: string): $PlayerInfo;
        getPlayerInfo(arg0: $UUID_): $PlayerInfo;
        sendCommand(arg0: string): void;
        potionBrewing(): $PotionBrewing;
        serverLinks(): $ServerLinks;
        getOnlinePlayerIds(): $Collection<$UUID>;
        getOnlinePlayers(): $Collection<$PlayerInfo>;
        handler$eag001$xaeroworldmap$onOnPlayerSpawnPosition(arg0: $ClientboundSetDefaultSpawnPositionPacket, arg1: $CallbackInfo): void;
        handler$bim000$chat_heads$chatheads$captureSenderInfo(packet: $ClientboundPlayerChatPacket_, ci: $CallbackInfo, senderInfo: $LocalRef<any>): void;
        handler$dhd000$xaerominimap$onOnPlayerSpawnPosition(arg0: $ClientboundSetDefaultSpawnPositionPacket, arg1: $CallbackInfo): void;
        modify$bim000$chat_heads$chatheads$rememberSenderInfo(playerChatMessage: $PlayerChatMessage_, senderInfo: $LocalRef<any>): $PlayerChatMessage;
        handler$ebi000$bookshelf$onInit(arg0: $Minecraft, arg1: $Connection, arg2: $CommonListenerCookie_, arg3: $CallbackInfo): void;
        handleSetEntityPassengersPacket(arg0: $ClientboundSetPassengersPacket): void;
        handleSelectAdvancementsTab(arg0: $ClientboundSelectAdvancementsTabPacket): void;
        handleUpdateAdvancementsPacket(arg0: $ClientboundUpdateAdvancementsPacket): void;
        setXaero_minimapSession(arg0: $XaeroMinimapSession): void;
        setXaero_worldmapSession(arg0: $WorldMapSession): void;
        getXaero_worldmapSession(): $WorldMapSession;
        handleCustomPayload(arg0: $CustomPacketPayload_): void;
        getSuggestionsProvider(): $ClientSuggestionProvider;
        handler$dhd000$xaerominimap$onSendUnsignedCommand(arg0: string, arg1: $CallbackInfoReturnable<any>): void;
        handlePlayerAbilities(arg0: $ClientboundPlayerAbilitiesPacket): void;
        handleChangeDifficulty(arg0: $ClientboundChangeDifficultyPacket): void;
        getXaero_minimapSession(): $XaeroMinimapSession;
        handleSetSpawn(arg0: $ClientboundSetDefaultSpawnPositionPacket): void;
        handleRespawn(arg0: $ClientboundRespawnPacket_): void;
        handleSetTime(arg0: $ClientboundSetTimePacket): void;
        kjs$sessionData(): $KubeSessionData;
        handleDeleteChat(arg0: $ClientboundDeleteChatPacket_): void;
        handleExplosion(arg0: $ClientboundExplodePacket): void;
        handleOpenScreen(arg0: $ClientboundOpenScreenPacket): void;
        handleBlockEvent(arg0: $ClientboundBlockEventPacket): void;
        handleMapItemData(arg0: $ClientboundMapItemDataPacket_): void;
        handleBlockUpdate(arg0: $ClientboundBlockUpdatePacket): void;
        handlePlayerChat(arg0: $ClientboundPlayerChatPacket_): void;
        handleSetEquipment(arg0: $ClientboundSetEquipmentPacket): void;
        handleSetHealth(arg0: $ClientboundSetHealthPacket): void;
        handleLevelEvent(arg0: $ClientboundLevelEventPacket): void;
        handleCommands(arg0: $ClientboundCommandsPacket): void;
        handleSystemChat(arg0: $ClientboundSystemChatPacket_): void;
        isFeatureEnabled(arg0: $FeatureFlagSet): boolean;
        searchTrees(): $SessionSearchTrees;
        handleConfigurationStart(arg0: $ClientboundStartConfigurationPacket): void;
        handleDisguisedChat(arg0: $ClientboundDisguisedChatPacket_): void;
        handleHurtAnimation(arg0: $ClientboundHurtAnimationPacket_): void;
        handleEntityLinkPacket(arg0: $ClientboundSetEntityLinkPacket): void;
        handleTakeItemEntity(arg0: $ClientboundTakeItemEntityPacket): void;
        handleStopSoundEvent(arg0: $ClientboundStopSoundPacket): void;
        handleContainerContent(arg0: $ClientboundContainerSetContentPacket): void;
        handleOpenSignEditor(arg0: $ClientboundOpenSignEditorPacket): void;
        handleUpdateRecipes(arg0: $ClientboundUpdateRecipesPacket): void;
        handleContainerSetData(arg0: $ClientboundContainerSetDataPacket): void;
        handleBlockDestruction(arg0: $ClientboundBlockDestructionPacket): void;
        handleContainerSetSlot(arg0: $ClientboundContainerSetSlotPacket): void;
        handleHorseScreenOpen(arg0: $ClientboundHorseScreenOpenPacket): void;
        handleSetExperience(arg0: $ClientboundSetExperiencePacket): void;
        handleCommandSuggestions(arg0: $ClientboundCommandSuggestionsPacket_): void;
        handleMoveVehicle(arg0: $ClientboundMoveVehiclePacket): void;
        handleAnimate(arg0: $ClientboundAnimatePacket): void;
        handleMovePlayer(arg0: $ClientboundPlayerPositionPacket): void;
        handlePlaceRecipe(arg0: $ClientboundPlaceGhostRecipePacket): void;
        handleResetScore(arg0: $ClientboundResetScorePacket_): void;
        setTitlesAnimation(arg0: $ClientboundSetTitlesAnimationPacket): void;
        setSubtitleText(arg0: $ClientboundSetSubtitleTextPacket_): void;
        handleSoundEvent(arg0: $ClientboundSoundPacket): void;
        setTitleText(arg0: $ClientboundSetTitleTextPacket_): void;
        setActionBarText(arg0: $ClientboundSetActionBarTextPacket_): void;
        handleServerData(arg0: $ClientboundServerDataPacket_): void;
        handleAddObjective(arg0: $ClientboundSetObjectivePacket): void;
        handleSetScore(arg0: $ClientboundSetScorePacket_): void;
        handleTitlesClear(arg0: $ClientboundClearTitlesPacket): void;
        handleBundlePacket(arg0: $ClientboundBundlePacket): void;
        handlePongResponse(arg0: $ClientboundPongResponsePacket_): void;
        handleDebugSample(arg0: $ClientboundDebugSamplePacket_): void;
        handleBlockEntityData(arg0: $ClientboundBlockEntityDataPacket): void;
        handler$ffa000$autofish$onPlaySound(arg0: $ClientboundSoundPacket, arg1: $CallbackInfo): void;
        handler$dhd000$xaerominimap$onSendCommand(arg0: string, arg1: $CallbackInfo): void;
        handler$eag001$xaeroworldmap$onHandleLightUpdatePacket(arg0: $ClientboundLightUpdatePacket, arg1: $CallbackInfo): void;
        handler$dhd000$xaerominimap$onHandleLightUpdatePacket(arg0: $ClientboundLightUpdatePacket, arg1: $CallbackInfo): void;
        handleProjectilePowerPacket(arg0: $ClientboundProjectilePowerPacket): void;
        handleSetSimulationDistance(arg0: $ClientboundSetSimulationDistancePacket_): void;
        handleSetBorderWarningDelay(arg0: $ClientboundSetBorderWarningDelayPacket): void;
        handleCustomChatCompletions(arg0: $ClientboundCustomChatCompletionsPacket_): void;
        handler$gbp000$xaerolib$onHandleInitializeBorder(arg0: $ClientboundInitializeBorderPacket, arg1: $CallbackInfo): void;
        handler$eag001$xaeroworldmap$onOnChunkDeltaUpdate(arg0: $ClientboundSectionBlocksUpdatePacket, arg1: $CallbackInfo): void;
        handler$dhd000$xaerominimap$onOnChunkDeltaUpdate(arg0: $ClientboundSectionBlocksUpdatePacket, arg1: $CallbackInfo): void;
        handler$gnl000$ftbchunks$handleLevelChunkFTBC(packet: $ClientboundLevelChunkWithLightPacket, ci: $CallbackInfo): void;
        handleAddEntity(arg0: $ClientboundAddEntityPacket): void;
        handleTickingStep(arg0: $ClientboundTickingStepPacket_): void;
        handleTickingState(arg0: $ClientboundTickingStatePacket_): void;
        handleLookAt(arg0: $ClientboundPlayerLookAtPacket): void;
        handleRotateMob(arg0: $ClientboundRotateHeadPacket): void;
        handleChunksBiomes(arg0: $ClientboundChunksBiomesPacket_): void;
        handleMoveEntity(arg0: $ClientboundMoveEntityPacket): void;
        handleSetCamera(arg0: $ClientboundSetCameraPacket): void;
        handleAwardStats(arg0: $ClientboundAwardStatsPacket_): void;
        handler$eag001$xaeroworldmap$onOnBlockUpdate(arg0: $ClientboundBlockUpdatePacket, arg1: $CallbackInfo): void;
        handler$eag001$xaeroworldmap$onQueueLightRemoval(arg0: $ClientboundForgetLevelChunkPacket_, arg1: $CallbackInfo): void;
        handler$gnl000$ftbchunks$handleBlockUpdateFTBC(packet: $ClientboundBlockUpdatePacket, ci: $CallbackInfo): void;
        handler$dhd000$xaerominimap$onQueueLightRemoval(arg0: $ClientboundForgetLevelChunkPacket_, arg1: $CallbackInfo): void;
        handler$dhd000$xaerominimap$onOnBlockUpdate(arg0: $ClientboundBlockUpdatePacket, arg1: $CallbackInfo): void;
        handleRemoveEntities(arg0: $ClientboundRemoveEntitiesPacket): void;
        handlePlayerCombatEnd(arg0: $ClientboundPlayerCombatEndPacket): void;
        handleSetEntityData(arg0: $ClientboundSetEntityDataPacket_): void;
        handleForgetLevelChunk(arg0: $ClientboundForgetLevelChunkPacket_): void;
        handlePlayerCombatKill(arg0: $ClientboundPlayerCombatKillPacket_): void;
        handleInitializeBorder(arg0: $ClientboundInitializeBorderPacket): void;
        handleAddExperienceOrb(arg0: $ClientboundAddExperienceOrbPacket): void;
        handleLevelChunkWithLight(arg0: $ClientboundLevelChunkWithLightPacket): void;
        handleTagQueryPacket(arg0: $ClientboundTagQueryPacket): void;
        handleSetBorderCenter(arg0: $ClientboundSetBorderCenterPacket): void;
        handleSetBorderLerpSize(arg0: $ClientboundSetBorderLerpSizePacket): void;
        handleSetBorderSize(arg0: $ClientboundSetBorderSizePacket): void;
        handleTeleportEntity(arg0: $ClientboundTeleportEntityPacket): void;
        handleSetEntityMotion(arg0: $ClientboundSetEntityMotionPacket): void;
        handleChunkBlocksUpdate(arg0: $ClientboundSectionBlocksUpdatePacket): void;
        handleUpdateMobEffect(arg0: $ClientboundUpdateMobEffectPacket): void;
        handleAddOrRemoveRecipes(arg0: $ClientboundRecipePacket): void;
        handlePlayerCombatEnter(arg0: $ClientboundPlayerCombatEnterPacket): void;
        handler$ffa000$autofish$onSysChatMessage(arg0: $ClientboundSystemChatPacket_, arg1: $CallbackInfo): void;
        handler$eag000$xaeroworldmap$onCleanup(arg0: $CallbackInfo): void;
        handler$dhd001$xaerominimap$onClose(arg0: $CallbackInfo): void;
        catnip$getServerChunkRadius(): number;
        minecraft: $Minecraft;
        serverChunkRadius: number;
        connection: $Connection;
        commands: $CommandDispatcher<$SharedSuggestionProvider>;
        constructor(arg0: $Minecraft, arg1: $Connection, arg2: $CommonListenerCookie_);
        get id(): $UUID;
        get level(): $ClientLevel;
        get recipeManager(): $RecipeManager;
        set keyPair(value: $ProfileKeyPair_);
        get serverData(): $ServerData;
        get advancements(): $ClientAdvancements;
        get debugQueryHandler(): $DebugQueryHandler;
        get listedOnlinePlayers(): $Collection<$PlayerInfo>;
        get localGameProfile(): $GameProfile;
        get onlinePlayerIds(): $Collection<$UUID>;
        get onlinePlayers(): $Collection<$PlayerInfo>;
        get suggestionsProvider(): $ClientSuggestionProvider;
        set titlesAnimation(value: $ClientboundSetTitlesAnimationPacket);
        set subtitleText(value: $ClientboundSetSubtitleTextPacket_);
        set titleText(value: $ClientboundSetTitleTextPacket_);
        set actionBarText(value: $ClientboundSetActionBarTextPacket_);
    }
    export class $ServerData$ServerPackStatus extends $Enum<$ServerData$ServerPackStatus> {
        getName(): $Component;
        static values(): $ServerData$ServerPackStatus[];
        static valueOf(arg0: string): $ServerData$ServerPackStatus;
        static DISABLED: $ServerData$ServerPackStatus;
        static PROMPT: $ServerData$ServerPackStatus;
        static ENABLED: $ServerData$ServerPackStatus;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$ServerPackStatus}.
     */
    export type $ServerData$ServerPackStatus_ = "enabled" | "disabled" | "prompt";
    export class $ServerData implements $ServerDataExtension {
        type(): $ServerData$Type;
        write(): $CompoundTag;
        static read(arg0: $CompoundTag_): $ServerData;
        state(): $ServerData$State;
        setState(arg0: $ServerData$State_): void;
        copyFrom(arg0: $ServerData): void;
        isRealm(): boolean;
        isLan(): boolean;
        copyNameIconFrom(arg0: $ServerData): void;
        setBetterData(arg0: $BetterStatus_): void;
        getBetterData(): $BetterStatus;
        getIconBytes(): number[];
        static validateIcon(arg0: number[]): number[];
        setIconBytes(arg0: number[]): void;
        getResourcePackStatus(): $ServerData$ServerPackStatus;
        setResourcePackStatus(arg0: $ServerData$ServerPackStatus_): void;
        neoForgeData: $ExtendedServerListData;
        motd: $Component;
        protocol: number;
        players: $ServerStatus$Players;
        ping: number;
        ip: string;
        playerList: $List<$Component>;
        betterStatus: $BetterStatus;
        name: string;
        version: $Component;
        status: $Component;
        constructor(arg0: string, arg1: string, arg2: $ServerData$Type_);
        get realm(): boolean;
        get lan(): boolean;
    }
    export class $LegacyServerPinger extends $SimpleChannelInboundHandler<$ByteBuf> {
        constructor(arg0: $ServerAddress, arg1: $LegacyServerPinger$Output_);
    }
    export class $ServerList implements $ServerListDuckProvider {
        remove(arg0: $ServerData): void;
        size(): number;
        get(arg0: number): $ServerData;
        get(arg0: string): $ServerData;
        load(): void;
        replace(arg0: number, arg1: $ServerData): void;
        add(arg0: $ServerData, arg1: boolean): void;
        save(): void;
        swap(arg0: number, arg1: number): void;
        unhide(arg0: string): $ServerData;
        static saveSingleServer(arg0: $ServerData): void;
        draggable_lists$moveItem(item: $DragItem<any, any>, position: number): void;
        constructor(arg0: $Minecraft);
    }
    export class $ClientCommonPacketListenerImpl$PackConfirmScreen extends $ConfirmScreen {
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
    export class $ClientChunkCache$Storage implements $AccessorClientChunkCacheStorage {
        inRange(arg0: number, arg1: number): boolean;
        railways$getViewCenterZ(): number;
        railways$setViewCenterZ(arg0: number): void;
        railways$getViewCenterX(): number;
        railways$setViewCenterX(arg0: number): void;
        chunks: $AtomicReferenceArray<$LevelChunk>;
    }
    export class $ClientLevel$EntityCallbacks implements $LevelCallback<$Entity> {
    }
    export class $PlayerInfo {
        getLatency(): number;
        getTeam(): $PlayerTeam;
        setTabListDisplayName(arg0: $Component_): void;
        getSkin(): $PlayerSkin;
        getProfile(): $GameProfile;
        getTabListDisplayName(): $Component;
        getGameMode(): $GameType;
        getChatSession(): $RemoteChatSession;
        getMessageValidator(): $SignedMessageValidator;
        hasVerifiableChat(): boolean;
        constructor(arg0: $GameProfile, arg1: boolean);
        get latency(): number;
        get team(): $PlayerTeam;
        get skin(): $PlayerSkin;
        get profile(): $GameProfile;
        get gameMode(): $GameType;
        get chatSession(): $RemoteChatSession;
        get messageValidator(): $SignedMessageValidator;
    }
    export class $PingDebugMonitor {
        tick(): void;
        onPongReceived(arg0: $ClientboundPongResponsePacket_): void;
        constructor(arg0: $ClientPacketListener, arg1: $LocalSampleLogger);
    }
    export class $ProfileKeyPairManager {
        static create(arg0: $UserApiService, arg1: $User, arg2: $Path_): $ProfileKeyPairManager;
        static EMPTY_KEY_MANAGER: $ProfileKeyPairManager;
    }
    export interface $ProfileKeyPairManager {
        prepareKeyPair(): $CompletableFuture<($ProfileKeyPair) | undefined>;
        shouldRefreshKeyPair(): boolean;
    }
    export class $SessionSearchTrees {
        register(arg0: $SessionSearchTrees$Key, arg1: $Runnable_): void;
        static getTooltipLines(arg0: $Stream<$ItemStack_>, arg1: $Item$TooltipContext, arg2: $TooltipFlag): $Stream<string>;
        rebuildAfterLanguageChange(): void;
        recipes(): $SearchTree<$RecipeCollection>;
        updateCreativeTooltips(arg0: $HolderLookup$Provider, arg1: $List_<$ItemStack_>): void;
        updateCreativeTooltips(arg0: $HolderLookup$Provider, arg1: $List_<$ItemStack_>, arg2: $SessionSearchTrees$Key): void;
        updateRecipes(arg0: $ClientRecipeBook, arg1: $RegistryAccess$Frozen): void;
        creativeNameSearch(arg0: $SessionSearchTrees$Key): $SearchTree<$ItemStack>;
        creativeNameSearch(): $SearchTree<$ItemStack>;
        creativeTagSearch(arg0: $SessionSearchTrees$Key): $SearchTree<$ItemStack>;
        creativeTagSearch(): $SearchTree<$ItemStack>;
        updateCreativeTags(arg0: $List_<$ItemStack_>): void;
        updateCreativeTags(arg0: $List_<$ItemStack_>, arg1: $SessionSearchTrees$Key): void;
        static CREATIVE_NAMES: $SessionSearchTrees$Key;
        static CREATIVE_TAGS: $SessionSearchTrees$Key;
        constructor();
    }
    export class $ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest}.
     */
    export type $ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest_ = { hash?: string, id?: $UUID_, url?: $URL,  } | [hash?: string, id?: $UUID_, url?: $URL, ];
    export class $ClientAdvancements implements $AccessorClientAdvancements {
        get(arg0: $ResourceLocation_): $AdvancementHolder;
        update(arg0: $ClientboundUpdateAdvancementsPacket): void;
        getTree(): $AdvancementTree;
        setListener(arg0: $ClientAdvancements$Listener): void;
        setSelectedTab(arg0: $AdvancementHolder_, arg1: boolean): void;
        handler$fgf000$patchouli$onSync(arg0: $ClientboundUpdateAdvancementsPacket, arg1: $CallbackInfo): void;
        getProgress(): $Map<$AdvancementHolder, $AdvancementProgress>;
        constructor(arg0: $Minecraft, arg1: $WorldSessionTelemetryManager);
        get tree(): $AdvancementTree;
        set listener(value: $ClientAdvancements$Listener);
        get progress(): $Map<$AdvancementHolder, $AdvancementProgress>;
    }
    export class $MultiPlayerGameMode implements $MultiPlayerGameModeAccessor, $AccessorMultiPlayerGameMode {
        tick(): void;
        continueDestroyBlock(arg0: $BlockPos_, arg1: $Direction_): boolean;
        attack(arg0: $Player, arg1: $Entity): void;
        interact(arg0: $Player, arg1: $Entity, arg2: $InteractionHand_): $InteractionResult;
        interactAt(arg0: $Player, arg1: $Entity, arg2: $EntityHitResult, arg3: $InteractionHand_): $InteractionResult;
        useItem(arg0: $Player, arg1: $InteractionHand_): $InteractionResult;
        stopDestroyBlock(): void;
        startDestroyBlock(arg0: $BlockPos_, arg1: $Direction_): boolean;
        isDestroying(): boolean;
        hasMissTime(): boolean;
        hasInfiniteItems(): boolean;
        isServerControlledInventory(): boolean;
        handleInventoryMouseClick(arg0: number, arg1: number, arg2: number, arg3: $ClickType_, arg4: $Player): void;
        handleSlotStateChanged(arg0: number, arg1: number, arg2: boolean): void;
        useItemOn(arg0: $LocalPlayer, arg1: $InteractionHand_, arg2: $BlockHitResult): $InteractionResult;
        canHurtPlayer(): boolean;
        handlePickItem(arg0: number): void;
        releaseUsingItem(arg0: $Player): void;
        getPreviousPlayerMode(): $GameType;
        isAlwaysFlying(): boolean;
        destroyBlock(arg0: $BlockPos_): boolean;
        getPlayerMode(): $GameType;
        handleCreativeModeItemAdd(arg0: $ItemStack_, arg1: number): void;
        handleCreativeModeItemDrop(arg0: $ItemStack_): void;
        startPrediction(arg0: $ClientLevel, arg1: $PredictiveAction_): void;
        getDestroyStage(): number;
        sameDestroyTarget(arg0: $BlockPos_): boolean;
        hasExperience(): boolean;
        handlePlaceRecipe(arg0: number, arg1: $RecipeHolder_<never>, arg2: boolean): void;
        createPlayer(arg0: $ClientLevel, arg1: $StatsCounter, arg2: $ClientRecipeBook): $LocalPlayer;
        createPlayer(arg0: $ClientLevel, arg1: $StatsCounter, arg2: $ClientRecipeBook, arg3: boolean, arg4: boolean): $LocalPlayer;
        adjustPlayer(arg0: $Player): void;
        setLocalMode(arg0: $GameType_, arg1: $GameType_): void;
        setLocalMode(arg0: $GameType_): void;
        handleInventoryButtonClick(arg0: number, arg1: number): void;
        proplacer$setDestroyDelay(arg0: number): void;
        quark$performUseItemOn(arg0: $LocalPlayer, arg1: $InteractionHand_, arg2: $BlockHitResult): $InteractionResult;
        destroyBlockPos: $BlockPos;
        destroyDelay: number;
        connection: $ClientPacketListener;
        destroyProgress: number;
        constructor(arg0: $Minecraft, arg1: $ClientPacketListener);
        get destroying(): boolean;
        get serverControlledInventory(): boolean;
        get previousPlayerMode(): $GameType;
        get alwaysFlying(): boolean;
        get playerMode(): $GameType;
        get destroyStage(): number;
    }
    export class $ServerData$Type extends $Enum<$ServerData$Type> {
        static values(): $ServerData$Type[];
        static valueOf(arg0: string): $ServerData$Type;
        static OTHER: $ServerData$Type;
        static LAN: $ServerData$Type;
        static REALM: $ServerData$Type;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$Type}.
     */
    export type $ServerData$Type_ = "lan" | "realm" | "other";
    export class $LegacyServerPinger$Output {
    }
    export interface $LegacyServerPinger$Output {
        handleResponse(arg0: number, arg1: string, arg2: string, arg3: number, arg4: number): void;
    }
    /**
     * Values that may be interpreted as {@link $LegacyServerPinger$Output}.
     */
    export type $LegacyServerPinger$Output_ = ((arg0: number, arg1: string, arg2: string, arg3: number, arg4: number) => void);
    export class $ClientHandshakePacketListenerImpl implements $ClientLoginPacketListener, $ClientLoginNetworkHandlerAccessor, $NetworkHandlerExtensions {
        handleGameProfile(arg0: $ClientboundGameProfilePacket_): void;
        handleCompression(arg0: $ClientboundLoginCompressionPacket): void;
        handleHello(arg0: $ClientboundHelloPacket): void;
        handleDisconnect(arg0: $ClientboundLoginDisconnectPacket): void;
        handleCustomQuery(arg0: $ClientboundCustomQueryPacket_): void;
        handleRequestCookie(arg0: $ClientboundCookieRequestPacket_): void;
        isAcceptingMessages(): boolean;
        onDisconnect(arg0: $DisconnectionDetails_): void;
        fillListenerSpecificCrashDetails(arg0: $CrashReport, arg1: $CrashReportCategory): void;
        getAddon(): $ClientLoginNetworkAddon;
        setMinigameName(arg0: string): void;
        protocol(): $ConnectionProtocol;
        flow(): $PacketFlow;
        onPacketError(arg0: $Packet<any>, arg1: $Exception): void;
        createDisconnectionInfo(arg0: $Component_, arg1: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(arg0: $Packet<never>): boolean;
        fillCrashReport(arg0: $CrashReport): void;
        getConnection(): $Connection;
        constructor(arg0: $Connection, arg1: $Minecraft, arg2: $ServerData, arg3: $Screen, arg4: boolean, arg5: $Duration_, arg6: $Consumer_<$Component>, arg7: $TransferState_);
        get acceptingMessages(): boolean;
        get addon(): $ClientLoginNetworkAddon;
        set minigameName(value: string);
        get connection(): $Connection;
    }
    export class $TransferState extends $Record {
        cookies(): $Map<$ResourceLocation, number[]>;
        constructor(arg0: $Map_<$ResourceLocation_, number[]>);
    }
    /**
     * Values that may be interpreted as {@link $TransferState}.
     */
    export type $TransferState_ = { cookies?: $Map_<$ResourceLocation_, number[]>,  } | [cookies?: $Map_<$ResourceLocation_, number[]>, ];
    export class $DebugSampleSubscriber {
        tick(): void;
        static REQUEST_INTERVAL_MS: number;
        constructor(arg0: $ClientPacketListener, arg1: $DebugScreenOverlay);
    }
    export class $ClientAdvancements$Listener {
    }
    export interface $ClientAdvancements$Listener extends $AdvancementTree$Listener {
        onUpdateAdvancementProgress(arg0: $AdvancementNode, arg1: $AdvancementProgress): void;
        onSelectedTabChanged(arg0: $AdvancementHolder_): void;
    }
    export class $RegistryDataCollector$ContentsCollector {
    }
    export class $RegistryDataCollector {
        appendContents(arg0: $ResourceKey_<$Registry<never>>, arg1: $List_<$RegistrySynchronization$PackedRegistryEntry_>): void;
        collectGameRegistries(arg0: $ResourceProvider_, arg1: $RegistryAccess, arg2: boolean): $RegistryAccess$Frozen;
        appendTags(arg0: $Map_<$ResourceKey_<$Registry<never>>, $TagNetworkSerialization$NetworkPayload>): void;
        constructor();
    }
    export class $ClientLevel extends $Level implements $IMixinClientWorld, $BiomeSeedProvider, $ChunkTrackerHolder, $IXaeroMinimapClientWorld, $ClientLevelAccessor, $IWorldMapClientWorld, $ClientLevelKJS, $IClientLevel {
        unload(arg0: $LevelChunk): void;
        tick(arg0: $BooleanSupplier_): void;
        getChunkSource(): $ClientChunkCache;
        animateTick(arg0: number, arg1: number, arg2: number): void;
        tickEntities(): void;
        setServerSimulationDistance(arg0: number): void;
        setSectionDirtyWithNeighbors(arg0: number, arg1: number, arg2: number): void;
        getServerSimulationDistance(): number;
        setServerVerifiedBlockState(arg0: $BlockPos_, arg1: $BlockState_, arg2: number): void;
        setDayTime(arg0: number): void;
        addEntity(arg0: $Entity): void;
        effects(): $DimensionSpecialEffects;
        entitiesForRendering(): $Iterable<$Entity>;
        handleBlockChangedAck(arg0: number): void;
        isLightUpdateQueueEmpty(): boolean;
        setXaero_worldmapData(arg0: $WorldMapClientWorldData): void;
        sodium$getBiomeZoomSeed(): number;
        getXaero_worldmapData(): $WorldMapClientWorldData;
        setXaero_minimapData(arg0: $MinimapClientWorldData): void;
        getXaero_minimapData(): $MinimapClientWorldData;
        handler$dje000$entityculling$tickEntity(entity: $Entity, info: $CallbackInfo): void;
        getSkyDarken(arg0: number): number;
        clearTintCaches(): void;
        queueLightUpdate(arg0: $Runnable_): void;
        tickNonPassenger(arg0: $Entity): void;
        getEntityCount(): number;
        syncBlockState(arg0: $BlockPos_, arg1: $BlockState_, arg2: $Vec3_): void;
        removeEntity(arg0: number, arg1: $Entity$RemovalReason_): void;
        pollLightUpdates(): void;
        setGameTime(arg0: number): void;
        setDefaultSpawnPos(arg0: $BlockPos_, arg1: number): void;
        onChunkLoaded(arg0: $ChunkPos): void;
        doAnimateTick(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $RandomSource, arg5: $Block_, arg6: $BlockPos$MutableBlockPos): void;
        xaerolib_getData(): $ClientLevelData;
        sodium$getTracker(): $ChunkTracker;
        overrideMapData(arg0: $MapId_, arg1: $MapItemSavedData): void;
        calculateBlockTint(arg0: $BlockPos_, arg1: $ColorResolver_): number;
        xaerolib_setData(arg0: $ClientLevelData): void;
        getSkyFlashTime(): number;
        getCloudColor(arg0: number): $Vec3;
        getSkyColor(arg0: $Vec3_, arg1: number): $Vec3;
        getStarBrightness(arg0: number): number;
        handler$fho000$watervision$inject$onDisconnect(arg0: $CallbackInfo): void;
        self(): $EntityGetter;
        kubeParticle(x: number, y: number, z: number, spriteSet: $SpriteSet): $KubeAnimatedParticle;
        tweakeroo_getMapStates(): $Map<$MapId, $MapItemSavedData>;
        getEntityStorage(): $TransientEntitySectionManager<$Entity>;
        restoringBlockSnapshots: boolean;
        static LONG_PARTICLE_CLIP_RANGE: number;
        levelData: $WritableLevelData;
        freshBlockEntities: $ArrayList<$BlockEntity>;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        static MAX_BRIGHTNESS: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        levelRenderer: $LevelRenderer;
        rainLevel: number;
        oThunderLevel: number;
        static ATTACHMENTS_NBT_KEY: string;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        oRainLevel: number;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        captureBlockSnapshots: boolean;
        constructor(arg0: $ClientPacketListener, arg1: $ClientLevel$ClientLevelData, arg2: $ResourceKey_<$Level>, arg3: $Holder_<$DimensionType>, arg4: number, arg5: number, arg6: $Supplier_<$ProfilerFiller>, arg7: $LevelRenderer, arg8: boolean, arg9: number);
        get chunkSource(): $ClientChunkCache;
        get lightUpdateQueueEmpty(): boolean;
        get entityCount(): number;
        set gameTime(value: number);
        get skyFlashTime(): number;
        get entityStorage(): $TransientEntitySectionManager<$Entity>;
    }
    export class $ClientRegistryLayer extends $Enum<$ClientRegistryLayer> {
        static values(): $ClientRegistryLayer[];
        static valueOf(arg0: string): $ClientRegistryLayer;
        static createRegistryAccess(): $LayeredRegistryAccess<$ClientRegistryLayer>;
        static REMOTE: $ClientRegistryLayer;
        static STATIC: $ClientRegistryLayer;
    }
    /**
     * Values that may be interpreted as {@link $ClientRegistryLayer}.
     */
    export type $ClientRegistryLayer_ = "static" | "remote";
    export class $ClientLevel$ClientLevelData implements $WritableLevelData {
        isHardcore(): boolean;
        setDifficulty(arg0: $Difficulty_): void;
        fillCrashReportCategory(arg0: $CrashReportCategory, arg1: $LevelHeightAccessor): void;
        setDifficultyLocked(arg0: boolean): void;
        getDayTime(): number;
        getHorizonHeight(arg0: $LevelHeightAccessor): number;
        setRaining(arg0: boolean): void;
        getGameTime(): number;
        getDifficulty(): $Difficulty;
        getGameRules(): $GameRules;
        isRaining(): boolean;
        setDayTime(arg0: number): void;
        setSpawn(arg0: $BlockPos_, arg1: number): void;
        getSpawnAngle(): number;
        isThundering(): boolean;
        getSpawnPos(): $BlockPos;
        setGameTime(arg0: number): void;
        isDifficultyLocked(): boolean;
        handler$gmj000$polylib$setDifficulty(newDifficulty: $Difficulty_, ci: $CallbackInfo): void;
        getClearColorScale(): number;
        constructor(arg0: $Difficulty_, arg1: boolean, arg2: boolean);
        get hardcore(): boolean;
        get gameRules(): $GameRules;
        get spawnAngle(): number;
        get thundering(): boolean;
        get spawnPos(): $BlockPos;
        get clearColorScale(): number;
    }
    export class $ServerStatusPinger {
        removeAll(): void;
        tick(): void;
        pingServer(arg0: $ServerData, arg1: $Runnable_, arg2: $Runnable_): void;
        static formatPlayerCount(arg0: number, arg1: number): $Component;
        constructor();
    }
    export class $LevelLoadStatusManager$Status extends $Enum<$LevelLoadStatusManager$Status> {
    }
    /**
     * Values that may be interpreted as {@link $LevelLoadStatusManager$Status}.
     */
    export type $LevelLoadStatusManager$Status_ = "waiting_for_server" | "waiting_for_player_chunk" | "level_ready";
    export class $ClientChunkCache extends $ChunkSource {
        drop(arg0: $ChunkPos): void;
        replaceWithPacketData(arg0: number, arg1: number, arg2: $FriendlyByteBuf, arg3: $CompoundTag_, arg4: $Consumer_<$ClientboundLevelChunkPacketData$BlockEntityTagOutput>): $LevelChunk;
        replaceBiomes(arg0: number, arg1: number, arg2: $FriendlyByteBuf): void;
        updateViewCenter(arg0: number, arg1: number): void;
        updateViewRadius(arg0: number): void;
        handler$enb000$railways$securitycraft$onUpdateViewRadius(arg0: number, arg1: $CallbackInfo): void;
        handler$enb000$railways$securitycraft$onDrop(arg0: $ChunkPos, arg1: $CallbackInfo): void;
        handler$enb000$railways$securitycraft$onInit(arg0: $ClientLevel, arg1: number, arg2: $CallbackInfo): void;
        lightEngine: $LevelLightEngine;
        storage: $ClientChunkCache$Storage;
        constructor(arg0: $ClientLevel, arg1: number);
    }
    export class $KnownPacksManager {
        trySelectingPacks(arg0: $List_<$KnownPack_>): $List<$KnownPack>;
        createResourceManager(): $CloseableResourceManager;
        constructor();
    }
    export class $ClientCommonPacketListenerImpl$DeferredPacket extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ClientCommonPacketListenerImpl$DeferredPacket}.
     */
    export type $ClientCommonPacketListenerImpl$DeferredPacket_ = { expirationTime?: number, sendCondition?: $BooleanSupplier_, packet?: $Packet<$ServerboundPacketListener>,  } | [expirationTime?: number, sendCondition?: $BooleanSupplier_, packet?: $Packet<$ServerboundPacketListener>, ];
    export class $CommonListenerCookie extends $Record {
        connectionType(): $ConnectionType;
        telemetryManager(): $WorldSessionTelemetryManager;
        enabledFeatures(): $FeatureFlagSet;
        serverData(): $ServerData;
        chatState(): $ChatComponent$State;
        serverBrand(): string;
        serverLinks(): $ServerLinks;
        localGameProfile(): $GameProfile;
        receivedRegistries(): $RegistryAccess$Frozen;
        serverCookies(): $Map<$ResourceLocation, number[]>;
        postDisconnectScreen(): $Screen;
        /**
         * @deprecated
         */
        strictErrorHandling(): boolean;
        customReportDetails(): $Map<string, string>;
        /**
         * @deprecated
         */
        constructor(arg0: $GameProfile, arg1: $WorldSessionTelemetryManager, arg2: $RegistryAccess$Frozen, arg3: $FeatureFlagSet, arg4: string, arg5: $ServerData, arg6: $Screen, arg7: $Map_<$ResourceLocation_, number[]>, arg8: $ChatComponent$State, arg9: boolean, arg10: $Map_<string, string>, arg11: $ServerLinks_);
        constructor(localGameProfile: $GameProfile, telemetryManager: $WorldSessionTelemetryManager, receivedRegistries: $RegistryAccess$Frozen, enabledFeatures: $FeatureFlagSet, serverBrand: string, serverData: $ServerData, postDisconnectScreen: $Screen, serverCookies: $Map_<$ResourceLocation_, number[]>, chatState: $ChatComponent$State, strictErrorHandling: boolean, customReportDetails: $Map_<string, string>, serverLinks: $ServerLinks_, connectionType: $ConnectionType_);
    }
    /**
     * Values that may be interpreted as {@link $CommonListenerCookie}.
     */
    export type $CommonListenerCookie_ = { serverLinks?: $ServerLinks_, serverCookies?: $Map_<$ResourceLocation_, number[]>, chatState?: $ChatComponent$State, enabledFeatures?: $FeatureFlagSet, postDisconnectScreen?: $Screen, connectionType?: $ConnectionType_, serverBrand?: string, customReportDetails?: $Map_<string, string>, strictErrorHandling?: boolean, serverData?: $ServerData, localGameProfile?: $GameProfile, telemetryManager?: $WorldSessionTelemetryManager, receivedRegistries?: $RegistryAccess$Frozen,  } | [serverLinks?: $ServerLinks_, serverCookies?: $Map_<$ResourceLocation_, number[]>, chatState?: $ChatComponent$State, enabledFeatures?: $FeatureFlagSet, postDisconnectScreen?: $Screen, connectionType?: $ConnectionType_, serverBrand?: string, customReportDetails?: $Map_<string, string>, strictErrorHandling?: boolean, serverData?: $ServerData, localGameProfile?: $GameProfile, telemetryManager?: $WorldSessionTelemetryManager, receivedRegistries?: $RegistryAccess$Frozen, ];
    export class $ClientCommonPacketListenerImpl implements $ClientCommonPacketListener {
        getConnection(): $Connection;
        onPacketError(arg0: $Packet<any>, arg1: $Exception): void;
        handleDisconnect(arg0: $ClientboundDisconnectPacket_): void;
        send(arg0: $Packet<never>): void;
        handleStoreCookie(arg0: $ClientboundStoreCookiePacket_): void;
        handleTransfer(arg0: $ClientboundTransferPacket_): void;
        handleServerLinks(arg0: $ClientboundServerLinksPacket_): void;
        handleRequestCookie(arg0: $ClientboundCookieRequestPacket_): void;
        createDisconnectionInfo(arg0: $Component_, arg1: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(arg0: $Packet<never>): boolean;
        serverBrand(): string;
        onDisconnect(arg0: $DisconnectionDetails_): void;
        fillListenerSpecificCrashDetails(arg0: $CrashReport, arg1: $CrashReportCategory): void;
        handleKeepAlive(arg0: $ClientboundKeepAlivePacket): void;
        handleResourcePackPush(arg0: $ClientboundResourcePackPushPacket_): void;
        handleResourcePackPop(arg0: $ClientboundResourcePackPopPacket_): void;
        handleCustomReportDetails(arg0: $ClientboundCustomReportDetailsPacket_): void;
        handleCustomPayload(arg0: $ClientboundCustomPayloadPacket_): void;
        handlePing(arg0: $ClientboundPingPacket): void;
        wrapOperation$fjc001$fabric_networking_api_v1$onCustomPayloadUnregisterPacket(arg0: $Connection, arg1: $Set_<any>, arg2: $Operation_<any>): void;
        wrapOperation$fjc001$fabric_networking_api_v1$onCustomPayloadRegisterPacket(arg0: $Connection, arg1: $Set_<any>, arg2: $Operation_<any>): void;
        flow(): $PacketFlow;
        disconnect(arg0: $Component_): void;
        send(arg0: $CustomPacketPayload_): void;
        getMainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
        fillCrashReport(arg0: $CrashReport): void;
        hasChannel(arg0: $CustomPacketPayload_): boolean;
        hasChannel(arg0: $CustomPacketPayload$Type_<never>): boolean;
        hasChannel(arg0: $ResourceLocation_): boolean;
        minecraft: $Minecraft;
        connection: $Connection;
        get mainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
    }
    export class $ClientSuggestionProvider implements $SharedSuggestionProvider {
        levels(): $Set<$ResourceKey<$Level>>;
        enabledFeatures(): $FeatureFlagSet;
        registryAccess(): $RegistryAccess;
        modifyCustomCompletions(arg0: $ClientboundCustomChatCompletionsPacket$Action_, arg1: $List_<string>): void;
        getRelevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        getSelectedEntities(): $Collection<string>;
        getOnlinePlayerNames(): $Collection<string>;
        getAbsoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        suggestRegistryElements(arg0: $ResourceKey_<$Registry<never>>, arg1: $SharedSuggestionProvider$ElementSuggestionType_, arg2: $SuggestionsBuilder, arg3: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        customSuggestion(arg0: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        getAllTeams(): $Collection<string>;
        hasPermission(arg0: number): boolean;
        getRecipeNames(): $Stream<$ResourceLocation>;
        getAvailableSounds(): $Stream<$ResourceLocation>;
        getCustomTabSugggestions(): $Collection<string>;
        completeCustomSuggestions(arg0: number, arg1: $Suggestions): void;
        suggestRegistryElements(arg0: $Registry<never>, arg1: $SharedSuggestionProvider$ElementSuggestionType_, arg2: $SuggestionsBuilder): void;
        constructor(arg0: $ClientPacketListener, arg1: $Minecraft);
        get relevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get selectedEntities(): $Collection<string>;
        get onlinePlayerNames(): $Collection<string>;
        get absoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get allTeams(): $Collection<string>;
        get recipeNames(): $Stream<$ResourceLocation>;
        get availableSounds(): $Stream<$ResourceLocation>;
        get customTabSugggestions(): $Collection<string>;
    }
    export class $ChunkBatchSizeCalculator {
        getDesiredChunksPerTick(): number;
        onBatchStart(): void;
        onBatchFinished(arg0: number): void;
        constructor();
        get desiredChunksPerTick(): number;
    }
}
