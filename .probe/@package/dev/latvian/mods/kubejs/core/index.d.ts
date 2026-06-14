import { $MinecraftServer } from "@package/net/minecraft/server";
import { $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $Recipe, $RecipeHolder, $Ingredient, $Ingredient_, $RecipeSerializer, $RecipeHolder_, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $Tag_, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType_, $EquipmentSlot_, $EntityType, $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $KeyMapping, $Minecraft } from "@package/net/minecraft/client";
import { $IoSupplier, $IoSupplier_ } from "@package/net/minecraft/server/packs/resources";
import { $ExplosionProperties_, $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ItemPredicate_, $ItemPredicate, $ItemBuilder, $ItemStackKey, $ItemStackSet } from "@package/dev/latvian/mods/kubejs/item";
import { $RandomSource } from "@package/net/minecraft/util";
import { $DisplayInfo, $AdvancementNode } from "@package/net/minecraft/advancements";
import { $InteractionHand_, $Container } from "@package/net/minecraft/world";
import { $FakePlayer } from "@package/net/neoforged/neoforge/common/util";
import { $ScheduledEvents$ScheduledEvent, $SlotFilter_, $WrappedJS, $ScheduledEvents, $NotificationToastData_, $ScheduledEvents$Callback_, $WithCodec, $TickDuration_, $AttachedData } from "@package/dev/latvian/mods/kubejs/util";
import { DataComponentTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $SpecialEquality, $ToStringJS } from "@package/dev/latvian/mods/rhino/util";
import { $DataComponentMap_ } from "@package/net/minecraft/core/component";
import { $RecipeMatchContext } from "@package/dev/latvian/mods/kubejs/recipe/filter";
import { $MenuType, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $ScriptType, $ScriptTypeHolder } from "@package/dev/latvian/mods/kubejs/script";
import { $SizedIngredient } from "@package/net/neoforged/neoforge/common/crafting";
import { $KubeAnimatedParticle, $KubeSessionData } from "@package/dev/latvian/mods/kubejs/client";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $KubeJSGUI } from "@package/dev/latvian/mods/kubejs/gui";
import { $SpriteSet } from "@package/net/minecraft/client/particle";
import { $MutableComponent, $Component_, $ClickEvent_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ServerScriptManager } from "@package/dev/latvian/mods/kubejs/server";
import { $Duration_ } from "@package/java/time";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $SoundType_, $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $RelativeURL } from "@package/dev/latvian/mods/kubejs/web";
import { $AABB_, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $JsonElement } from "@package/com/google/gson";
import { $ChestMenuData } from "@package/dev/latvian/mods/kubejs/gui/chest";
import { $AttributeModifier$Operation_, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $ItemFrame } from "@package/net/minecraft/world/entity/decoration";
import { $UUID_, $Map, $Set, $UUID, $List, $Map_, $List_ } from "@package/java/util";
import { $EntityArrayList, $PlayerStatsJS, $KubeJSInventoryListener } from "@package/dev/latvian/mods/kubejs/player";
import { $SizedFluidIngredient, $FluidIngredient, $FluidIngredient_ } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $Consumer_, $Predicate_, $Function, $Supplier } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos_, $Registry, $Holder_, $Holder, $Direction } from "@package/net/minecraft/core";
import { $Enchantment, $ItemEnchantments_, $ItemEnchantments } from "@package/net/minecraft/world/item/enchantment";
import { $ItemMatch, $FluidMatch, $Replaceable, $ReplacementMatchInfo_ } from "@package/dev/latvian/mods/kubejs/recipe/match";
import { $RecipeSchema } from "@package/dev/latvian/mods/kubejs/recipe/schema";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Iterable, $Iterable_, $Record, $Object, $IllegalStateException } from "@package/java/lang";
import { $RandomTickCallback } from "@package/dev/latvian/mods/kubejs/block/callback";
import { $InputStream } from "@package/java/io";
import { $Explosion, $ItemLike_, $EntityGetter, $GameRules$Value, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $TagManager, $TagKey, $TagLoader$EntryWithSource_, $TagKey_ } from "@package/net/minecraft/tags";
import { $BlockBuilder } from "@package/dev/latvian/mods/kubejs/block";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $Fireworks_ } from "@package/net/minecraft/world/item/component";
import { AbstractClientPlayer, $AbstractClientPlayer, LocalPlayer } from "@package/net/minecraft/client/player";
import { $FluidLike } from "@package/dev/latvian/mods/kubejs/fluid";
import { $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $BufferedImage } from "@package/java/awt/image";
import { $TemporalAmount_ } from "@package/java/time/temporal";
import { $EntityPotionEffectsJS, $KubeRayTraceResult } from "@package/dev/latvian/mods/kubejs/entity";
import { $Stages } from "@package/dev/latvian/mods/kubejs/stages";
import { $Stream } from "@package/java/util/stream";
import { $FoodProperties_ } from "@package/net/minecraft/world/food";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $MutableDataComponentHolderFunctions, $ItemComponentFunctions } from "@package/dev/latvian/mods/kubejs/component";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
export * as mixin from "@package/dev/latvian/mods/kubejs/core/mixin";

declare module "@package/dev/latvian/mods/kubejs/core" {
    export class $EntityKJS {
    }
    export interface $EntityKJS extends $WithPersistentData, $MessageSenderKJS, $ScriptTypeHolder {
        getNbt(): $CompoundTag;
        /**
         * Damages an entity by a given amount of HP dealing generic damage.
         * 
         * @param hp The amount of damage to deal.
         */
        damage(hp: number): boolean;
        /**
         * Damages an entity by a given amount of HP dealing a specific type of damage.
         * 
         * @param hp The amount of damage to deal.
         * @param source The damage source. It may be a string specifying a damage source, like `'minecraft:cramming'`.
         */
        damage(hp: number, source: $DamageSource_): boolean;
        /**
         * Checks if the entity is an item entity.
         */
        isItem(): this is $ItemEntity;
        setX(x: number): void;
        setY(y: number): void;
        setZ(z: number): void;
        spawn(): void;
        /**
         * @deprecated
         * Replaced by `entity.damage(hp)`
         */
        attack(hp: number): boolean;
        /**
         * @deprecated
         * Replaced by `entity.damage(hp, damageSource)`
         */
        attack(source: $DamageSource_, hp: number): boolean;
        setNbt(nbt: $CompoundTag_): void;
        /**
         * Checks, whether the entity is a reference to yourself - that is - the client player you are controlling.
         */
        isSelf(): this is LocalPlayer;
        /**
         * Sends a message in chat to the entity.
         * 
         * @param message A text component. It may be a string, which will be implicitly wrapped into a text component.
         */
        tell(message: $Component_): void;
        /**
         * Checks if the entity is a `LivingEntity`.
         */
        isLiving(): this is $LivingEntity;
        getLevel(): $Level;
        getType(): string;
        /**
         * Gets the name of the team entity is in, or `''` (empty string) if the entity is not part of any team
         */
        getTeamName(): string;
        getServer(): $MinecraftServer;
        /**
         * Measures the distance of entity to the point at specified 3D position vector.
         */
        distanceTo(position: $Vec3_): number;
        /**
         * Measures the distance of entity to the point at specified `x`, `y` and `z`.
         */
        distanceTo(x: number, y: number, z: number): number;
        /**
         * Gets a block at the position of the entity.
         */
        getBlock(): $LevelBlock;
        rayTraceEntity(distance: number, filter: $Predicate_<$Entity>): $Entity;
        getScriptType(): $ScriptType;
        /**
         * Checks if the entity is a player entity.
         */
        isPlayer(): this is $Player;
        /**
         * Checks if the entity is a server-side player.
         */
        isServerPlayer(): this is $ServerPlayer;
        /**
         * Checks if the entity is a client-side player.
         */
        isClientPlayer(): this is AbstractClientPlayer;
        rayTrace(distance: number): $KubeRayTraceResult;
        rayTrace(distance: number, fluids: boolean): $KubeRayTraceResult;
        /**
         * If the entity is a player, gets the player's profile, otherwise returns `null`.
         */
        getProfile(): $GameProfile;
        setPosition(x: number, y: number, z: number): void;
        setPosition(block: $LevelBlock): void;
        /**
         * Teleports an entity to a dimension of specified ID, to specified coordinates and rotation.
         * 
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportTo(x: number, y: number, z: number, yaw: number, pitch: number): void;
        /**
         * Teleports an entity to a dimension of specified ID, to specified coordinates and rotation.
         * 
         * @param dimension A `ResourceLocation` of the target dimension. It can be a string representing the dimension ID.
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportTo(dimension: $ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): boolean;
        /**
         * Teleports an entity to specified coordinates.
         * 
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         */
        teleportTo(x: number, y: number, z: number): void;
        /**
         * Gets the entity's custom name, or entity ID if entity has no custom name.
         */
        getUsername(): string;
        /**
         * Gets the entity's facing direction.
         * If the entity faces more than 45 degrees up or down, the resulting facing direction is respectively `up` or `down`.
         * Otherwise, the resulting facing direction is determined by whichever cardinal direction is closer to entity's yaw.
         */
        getFacing(): $Direction;
        /**
         * Checks if the entity is an animal.
         */
        isAnimal(): boolean;
        setMotionZ(z: number): void;
        setRotation(yaw: number, pitch: number): void;
        /**
         * Gets the item stack corresponding to either:
         * - the item contained in the item entity,
         * - the item in the item frame.
         * Will be `null` if the entity is neither an item entity nor an item frame.
         */
        getItem(): $ItemStack;
        /**
         * Checks if the entity is a monster.
         */
        isMonster(): boolean;
        /**
         * Checks if the entity is an item frame entity.
         */
        isFrame(): this is $ItemFrame;
        getMotionX(): number;
        /**
         * @deprecated
         * Replaced by `entity.getTeamName()`
         */
        getTeamId(): string;
        /**
         * Gets a list of all passengers of the entity.
         */
        getPassengers(): $EntityArrayList;
        setMotionX(x: number): void;
        setMotionY(y: number): void;
        getMotionZ(): number;
        getMotionY(): number;
        /**
         * @deprecated
         * Replaced by `entity.distanceTo(x, y, z)`.
         */
        getDistance(x: number, y: number, z: number): number;
        /**
         * @deprecated
         * Replaced by `entity.distanceToSqr(x, y, z)`.
         */
        getDistanceSq(x: number, y: number, z: number): number;
        /**
         * @deprecated
         * Replaced by `entity.distanceToBlockSqr(pos)`.
         */
        getDistanceSq(pos: $BlockPos_): number;
        mergeNbt(tag: $CompoundTag_): $Entity;
        /**
         * Teleports an entity to a specified `ServerLevel`, to specified coordinates and rotation.
         * 
         * @param level A `ServerLevel` to teleport the entity to.
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportToLevel(level: $ServerLevel, x: number, y: number, z: number, yaw: number, pitch: number): boolean;
        /**
         * Measures the **square** of a distance of entity to the block at specified `BlockPos`.
         */
        distanceToBlockSqr(pos: $BlockPos_): number;
        /**
         * Checks if the entity is an ambient creature.
         */
        isAmbientCreature(): boolean;
        /**
         * Checks if the entity is a water creature.
         */
        isWaterCreature(): boolean;
        /**
         * Measures the distance of entity to block at specified `BlockPos`.
         */
        distanceToBlock(pos: $BlockPos_): number;
        /**
         * Checks, whether the entity is part of a team called `teamName`.
         * 
         * @param teamName The name of the team to check.
         */
        isOnScoreboardTeam(teamName: string): boolean;
        /**
         * Checks, whether the entity is part of any team.
         */
        isOnScoreboardTeam(): boolean;
        /**
         * Checks if the entity is a peaceful creature (not a monster).
         */
        isPeacefulCreature(): boolean;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        /**
         * Runs the specified console command with permission level of the entity.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getName(): $Component;
        getDisplayName(): $Component;
        /**
         * Runs the specified console command with permission level of the entity. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        set x(value: number);
        set y(value: number);
        set z(value: number);
        get self(): boolean;
        get living(): boolean;
        get level(): $Level;
        get type(): string;
        get teamName(): string;
        get server(): $MinecraftServer;
        get block(): $LevelBlock;
        get scriptType(): $ScriptType;
        get player(): boolean;
        get serverPlayer(): boolean;
        get clientPlayer(): boolean;
        get profile(): $GameProfile;
        get username(): string;
        get facing(): $Direction;
        get animal(): boolean;
        get monster(): boolean;
        get frame(): boolean;
        get teamId(): string;
        get passengers(): $EntityArrayList;
        get ambientCreature(): boolean;
        get waterCreature(): boolean;
        get peacefulCreature(): boolean;
        get name(): $Component;
        get displayName(): $Component;
    }
    export class $IngredientSupplierKJS {
    }
    export interface $IngredientSupplierKJS {
        kjs$asIngredient(): $Ingredient;
    }
    export class $FluidStackKJS {
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
    }
    export interface $FluidStackKJS extends $Replaceable, $SpecialEquality, $WithCodec, $FluidLike, $FluidMatch, $MutableDataComponentHolderFunctions, $RegistryObjectKJS<$Fluid> {
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, ingredient: $FluidIngredient_, exact: boolean): boolean;
        kjs$copy(amount: number): $FluidLike;
        kjs$getMod(): string;
        kjs$getId(): string;
        kjs$self(): $FluidStack;
        kjs$getKey(): $ResourceKey<$Fluid>;
        kjs$getRegistryId(): $ResourceKey<$Registry<$Fluid>>;
        kjs$asHolder(): $Holder<$Fluid>;
        kjs$getIdLocation(): $ResourceLocation;
        kjs$getRegistry(): $Registry<$Fluid>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        kjs$getAmount(): number;
        kjs$getFluid(): $Fluid;
        kjs$getWebIconURL(ops: $DynamicOps<$Tag_>, size: number): $RelativeURL;
        kjs$isEmpty(): boolean;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getCodec(): $Codec<never>;
        kjs$equalsIgnoringCount(stack: $FluidStack_): boolean;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        get codec(): $Codec<never>;
    }
    export class $EntityGetterKJS {
    }
    export interface $EntityGetterKJS extends $EntityCollectionKJS {
        self(): $EntityGetter;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        getMcEntities(): $Iterable<$Entity>;
        getPlayers(): $EntityArrayList;
        getMcPlayers(): $List<$Player>;
        get mcEntities(): $Iterable<$Entity>;
        get players(): $EntityArrayList;
        get mcPlayers(): $List<$Player>;
    }
    export class $SizedIngredientKJS {
    }
    export interface $SizedIngredientKJS extends $Replaceable, $IngredientSupplierKJS, $ItemMatch {
        matches(cx: $RecipeMatchContext, item: $ItemStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        kjs$self(): $SizedIngredient;
        kjs$toFlatJson(): $JsonElement;
        kjs$toNestedJson(): $JsonElement;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        kjs$asIngredient(): $Ingredient;
    }
    export class $RegistryObjectKJS<T> {
    }
    export interface $RegistryObjectKJS<T> extends $SpecialEquality {
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        getId(): string;
        getKey(): $ResourceKey<T>;
        getRegistryId(): $ResourceKey<$Registry<T>>;
        asHolder(): $Holder<T>;
        getIdLocation(): $ResourceLocation;
        getTagKeys(): $List<$TagKey<T>>;
        getRegistry(): $Registry<T>;
        getTags(): $List<$ResourceLocation>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        get mod(): string;
        get id(): string;
        get key(): $ResourceKey<T>;
        get registryId(): $ResourceKey<$Registry<T>>;
        get idLocation(): $ResourceLocation;
        get tagKeys(): $List<$TagKey<T>>;
        get registry(): $Registry<T>;
        get tags(): $List<$ResourceLocation>;
    }
    export class $DiggerItemKJS {
    }
    export interface $DiggerItemKJS {
        kjs$getMineableTag(): $TagKey<$Block>;
    }
    /**
     * Values that may be interpreted as {@link $DiggerItemKJS}.
     */
    export type $DiggerItemKJS_ = (() => $TagKey_<$Block>);
    export class $EntityCollectionKJS {
    }
    export interface $EntityCollectionKJS {
        getEntityByNetworkID(id: number): $Entity;
        getEntityByUUID(id: $UUID_): $Entity;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        getMcEntities(): $Iterable<$Entity>;
        getPlayers(): $EntityArrayList;
        getEntities(): $EntityArrayList;
        getMcPlayers(): $List<$Player>;
        get mcEntities(): $Iterable<$Entity>;
        get players(): $EntityArrayList;
        get entities(): $EntityArrayList;
        get mcPlayers(): $List<$Player>;
    }
    /**
     * Values that may be interpreted as {@link $EntityCollectionKJS}.
     */
    export type $EntityCollectionKJS_ = (() => $Iterable_<$Entity>);
    export class $CreativeModeTabKJS {
    }
    export interface $CreativeModeTabKJS {
        kjs$setDisplayName(component: $Component_): void;
        kjs$setIcon(icon: $ItemStack_): void;
    }
    export class $WithPersistentData {
    }
    export interface $WithPersistentData extends $MessageSenderKJS {
        getPersistentData(): $CompoundTag;
        get persistentData(): $CompoundTag;
    }
    export class $TagLoaderKJS<T> {
    }
    export interface $TagLoaderKJS<T> {
        kjs$getRegistry(): $Registry<T>;
        kjs$getResources(): $ReloadableServerResourcesKJS;
        kjs$customTags(kjs$resources: $ReloadableServerResourcesKJS, map: $Map_<$ResourceLocation_, $List_<$TagLoader$EntryWithSource_>>): void;
        kjs$init(resources: $ReloadableServerResourcesKJS, registry: $Registry<T>): void;
    }
    export class $ItemFrameEntityKJS {
    }
    export interface $ItemFrameEntityKJS extends $EntityKJS {
        /**
         * Gets the item stack corresponding to the item in the item frame.
         * Will be `null` if the contained stack is empty.
         */
        getItem(): $ItemStack;
        /**
         * Checks if the entity is an item frame entity.
         */
        isFrame(): this is $ItemFrame;
        get item(): $ItemStack;
        get frame(): boolean;
    }
    export class $BlockProviderKJS {
    }
    export interface $BlockProviderKJS extends $RegistryObjectKJS<$Block> {
        getTypeData(): $Map<string, $Object>;
        getId(): string;
        getKey(): $ResourceKey<$Block>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        asHolder(): $Holder<$Block>;
        getRegistry(): $Registry<$Block>;
        getBlock(): $Block;
        get typeData(): $Map<string, $Object>;
        get id(): string;
        get key(): $ResourceKey<$Block>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get registry(): $Registry<$Block>;
        get block(): $Block;
    }
    /**
     * Values that may be interpreted as {@link $BlockProviderKJS}.
     */
    export type $BlockProviderKJS_ = (() => $Block_);
    export class $LivingEntityKJS {
        static KJS_PLAYER_CUSTOM_SPEED: $ResourceLocation;
    }
    export interface $LivingEntityKJS extends $EntityKJS {
        setDefaultMovementSpeedMultiplier(speed: number): void;
        setTotalMovementSpeedMultiplier(speed: number): void;
        swing(): void;
        swing(hand: $InteractionHand_): void;
        foodEaten(eatenStack: $ItemStack_, food: $FoodProperties_): void;
        getOffHandItem(): $ItemStack;
        isLiving(): this is $LivingEntity;
        /**
         * Sets the entity's maximum health to specified HP.
         * 
         * @param hp The new maximum health of the entity.
         */
        setMaxHealth(hp: number): void;
        damageHeldItem(hand: $InteractionHand_, amount: number): void;
        damageHeldItem(): void;
        damageHeldItem(hand: $InteractionHand_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        setEquipment(slot: $EquipmentSlot_, item: $ItemStack_): void;
        getEquipment(slot: $EquipmentSlot_): $ItemStack;
        getHeldItem(hand: $InteractionHand_): $ItemStack;
        rayTraceEntity(filter: $Predicate_<$Entity>): $Entity;
        isUndead(): boolean;
        rayTrace(): $KubeRayTraceResult;
        setHeldItem(hand: $InteractionHand_, item: $ItemStack_): void;
        setOffHandItem(item: $ItemStack_): void;
        getMainHandItem(): $ItemStack;
        getReachDistance(): number;
        getHeadArmorItem(): $ItemStack;
        setMainHandItem(item: $ItemStack_): void;
        setHeadArmorItem(item: $ItemStack_): void;
        setChestArmorItem(item: $ItemStack_): void;
        getLegsArmorItem(): $ItemStack;
        setLegsArmorItem(item: $ItemStack_): void;
        getChestArmorItem(): $ItemStack;
        getFeetArmorItem(): $ItemStack;
        setFeetArmorItem(item: $ItemStack_): void;
        damageEquipment(slot: $EquipmentSlot_, amount: number): void;
        damageEquipment(slot: $EquipmentSlot_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        damageEquipment(slot: $EquipmentSlot_): void;
        getPotionEffects(): $EntityPotionEffectsJS;
        modifyAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_, amount: number, operation: $AttributeModifier$Operation_): void;
        removeAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): void;
        getAttributeTotalValue(attribute: $Holder_<$Attribute>): number;
        getAttributeBaseValue(attribute: $Holder_<$Attribute>): number;
        getTotalMovementSpeed(): number;
        canEntityBeSeen(entity: $LivingEntity): boolean;
        setAttributeBaseValue(attribute: $Holder_<$Attribute>, value: number): void;
        isHoldingInAnyHand(itemPredicate: $ItemPredicate_): boolean;
        setMovementSpeedAddition(speed: number): void;
        setDefaultMovementSpeed(speed: number): void;
        getDefaultMovementSpeed(): number;
        set defaultMovementSpeedMultiplier(value: number);
        set totalMovementSpeedMultiplier(value: number);
        get living(): boolean;
        set maxHealth(value: number);
        get undead(): boolean;
        get reachDistance(): number;
        get potionEffects(): $EntityPotionEffectsJS;
        get totalMovementSpeed(): number;
        set movementSpeedAddition(value: number);
    }
    export class $ServerLevelKJS {
    }
    export interface $ServerLevelKJS extends $LevelKJS, $WithPersistentData {
        self(): $EntityGetter;
        spawnParticles(options: $ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ServerLevelKJS}.
     */
    export type $ServerLevelKJS_ = (() => void);
    export class $ClientPacketListenerKJS {
    }
    export interface $ClientPacketListenerKJS {
        kjs$sessionData(): $KubeSessionData;
    }
    export class $TagManagerKJS {
    }
    export interface $TagManagerKJS extends $ReloadableServerResourceHolderKJS {
    }
    export class $MinecraftServerKJS {
    }
    export interface $MinecraftServerKJS extends $WithAttachedData<$MinecraftServer>, $WithPersistentData, $DataSenderKJS, $MinecraftEnvironmentKJS, $EntityCollectionKJS {
        self(): $MinecraftServer;
        tell(message: $Component_): void;
        sendData(channel: string, data: $CompoundTag_): void;
        getLevel(dimension: $ResourceLocation_): $ServerLevel;
        getPlayer(selector: $PlayerSelector_): $ServerPlayer;
        getEntityByNetworkID(id: number): $Entity;
        getEntityByUUID(id: $UUID_): $Entity;
        restoreInventories(): $Map<$UUID, $Map<number, $ItemStack>>;
        /**
         * Runs the specified console command.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getName(): $Component;
        getMcEntities(): $Iterable<$Entity>;
        getPlayers(): $EntityArrayList;
        getMcPlayers(): $List<$Player>;
        getAdvancement(id: $ResourceLocation_): $AdvancementNode;
        /**
         * Runs the specified console command. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setStatusMessage(message: $Component_): void;
        setActivePostShader(id: $ResourceLocation_): void;
        getOverworld(): $ServerLevel;
        get name(): $Component;
        get mcEntities(): $Iterable<$Entity>;
        get players(): $EntityArrayList;
        get mcPlayers(): $List<$Player>;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get overworld(): $ServerLevel;
    }
    export class $MenuTypeKJS {
    }
    export interface $MenuTypeKJS extends $RegistryObjectKJS<$MenuType<never>> {
        kjs$getRegistryId(): $ResourceKey<$Registry<$MenuType<never>>>;
        kjs$getRegistry(): $Registry<$MenuType<never>>;
    }
    export class $DataSenderKJS {
    }
    export interface $DataSenderKJS {
        sendData(channel: string, data: $CompoundTag_): void;
        sendData(channel: string): void;
    }
    export class $RecipeLikeKJS {
    }
    export interface $RecipeLikeKJS {
        getSchema(): $RecipeSchema;
        replaceInput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        setGroup(group: string): void;
        getSerializer(): $RecipeSerializer<never>;
        getGroup(): string;
        getOrCreateId(): $ResourceLocation;
        replaceOutput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        getTypeKey(): $ResourceKey<$RecipeSerializer<never>>;
        getMod(): string;
        getType(): $ResourceLocation;
        hasInput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        hasOutput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        get schema(): $RecipeSchema;
        get serializer(): $RecipeSerializer<never>;
        get orCreateId(): $ResourceLocation;
        get typeKey(): $ResourceKey<$RecipeSerializer<never>>;
        get mod(): string;
        get type(): $ResourceLocation;
    }
    export class $LevelKJS {
    }
    export interface $LevelKJS extends $WithAttachedData<$Level>, $ScriptTypeHolder, $EntityGetterKJS {
        self(): $EntityGetter;
        tell(message: $Component_): void;
        getBlock(entity: $BlockEntity): $LevelBlock;
        getBlock(pos: $BlockPos_): $LevelBlock;
        getBlock(x: number, y: number, z: number): $LevelBlock;
        getSide(): $ScriptType;
        /**
         * Each player in the level (world) runs the specified console command with their permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getName(): $Component;
        spawnLightning(x: number, y: number, z: number, visualOnly: boolean, cause: $ServerPlayer): void;
        spawnLightning(x: number, y: number, z: number, visualOnly: boolean): void;
        explode(x: number, y: number, z: number, properties: $ExplosionProperties_): $Explosion;
        createEntity(type: $EntityType_<never>): $Entity;
        spawnParticles(options: $ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
        spawnEntity(type: $EntityType_<never>, callback: $Consumer_<$Entity>): void;
        isOverworld(): boolean;
        setTime(time: number): void;
        getDimension(): $ResourceLocation;
        spawnFireworks(x: number, y: number, z: number, fireworks: $Fireworks_, lifetime: number): void;
        /**
         * Each player in the level (world) runs the specified console command with their permission level. The command won't output any logs in chat nor console
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setStatusMessage(message: $Component_): void;
        setActivePostShader(id: $ResourceLocation_): void;
        get side(): $ScriptType;
        get name(): $Component;
        get overworld(): boolean;
        set time(value: number);
        get dimension(): $ResourceLocation;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $LevelKJS}.
     */
    export type $LevelKJS_ = (() => void);
    export class $FluidIngredientKJS {
    }
    export interface $FluidIngredientKJS extends $WithCodec, $FluidMatch {
        matches(cx: $RecipeMatchContext, arg1: $FluidIngredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        self(): $FluidIngredient;
        getCodec(): $Codec<never>;
        withAmount(amount: number): $SizedFluidIngredient;
        get codec(): $Codec<never>;
    }
    export class $WindowKJS$KJSScaledIconProvider extends $Record implements $Supplier<number[]> {
        target(): number;
        original(): $BufferedImage;
        get(): number[];
        constructor(original: $BufferedImage, target: number);
    }
    /**
     * Values that may be interpreted as {@link $WindowKJS$KJSScaledIconProvider}.
     */
    export type $WindowKJS$KJSScaledIconProvider_ = { original?: $BufferedImage, target?: number,  } | [original?: $BufferedImage, target?: number, ];
    export class $PlayerSelector {
        static name(name: string): $PlayerSelector;
        static wrap(o: $Object): $PlayerSelector;
        static identity(player: $ServerPlayer): $PlayerSelector;
        static uuid(uuid: $UUID_): $PlayerSelector;
        static fuzzyName(name: string): $PlayerSelector;
        static TYPE_INFO: $TypeInfo;
    }
    export interface $PlayerSelector {
        or(fallback: $PlayerSelector_): $PlayerSelector;
        getPlayer(server: $MinecraftServer): $ServerPlayer;
    }
    /**
     * Values that may be interpreted as {@link $PlayerSelector}.
     */
    export type $PlayerSelector_ = ((server: $MinecraftServer) => $ServerPlayer);
    export class $LocalClientPlayerKJS {
    }
    export interface $LocalClientPlayerKJS extends $ClientPlayerKJS {
        /**
         * Checks, whether the entity is a reference to yourself - that is - the client player you are controlling.
         */
        isSelf(): this is LocalPlayer;
        getStats(): $PlayerStatsJS;
        /**
         * Checks, whether the player is currently mining a block.
         */
        isMiningBlock(): boolean;
        sendData(channel: string, data: $CompoundTag_): void;
        notify(notification: $NotificationToastData_): void;
        /**
         * Runs the specified console command client-side with the player's permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getMinecraft(): $Minecraft;
        /**
         * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        get self(): boolean;
        get stats(): $PlayerStatsJS;
        get miningBlock(): boolean;
        get minecraft(): $Minecraft;
        set activePostShader(value: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $LocalClientPlayerKJS}.
     */
    export type $LocalClientPlayerKJS_ = (() => void);
    export class $WithAttachedData<T> {
    }
    export interface $WithAttachedData<T> extends $MessageSenderKJS {
        getData(): $AttachedData<T>;
        get data(): $AttachedData<T>;
    }
    /**
     * Values that may be interpreted as {@link $WithAttachedData}.
     */
    export type $WithAttachedData_<T> = (() => $AttachedData<T>);
    export class $LazyComponentKJS {
    }
    export interface $LazyComponentKJS extends $Supplier<$Component> {
        get(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $LazyComponentKJS}.
     */
    export type $LazyComponentKJS_ = (() => $Component_);
    export class $CustomIngredientKJS {
    }
    export interface $CustomIngredientKJS extends $ItemPredicate {
        getItems(): $Stream<$ItemStack>;
        kjs$canBeUsedForMatching(): boolean;
        kjs$getDisplayStacks(): $ItemStackSet;
        kjs$getStackArray(): $ItemStack[];
        kjs$asIngredient(): $Ingredient;
        get items(): $Stream<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $CustomIngredientKJS}.
     */
    export type $CustomIngredientKJS_ = (() => void);
    export class $FluidKJS {
    }
    export interface $FluidKJS extends $RegistryObjectKJS<$Fluid>, $FluidLike {
        getRegistryId(): $ResourceKey<$Registry<$Fluid>>;
        getRegistry(): $Registry<$Fluid>;
        getAmount(): number;
        getFluid(): $Fluid;
        isEmpty(): boolean;
        get registryId(): $ResourceKey<$Registry<$Fluid>>;
        get registry(): $Registry<$Fluid>;
        get amount(): number;
        get fluid(): $Fluid;
        get empty(): boolean;
    }
    export class $GameRulesKJS {
    }
    export interface $GameRulesKJS {
        kjs$set(rule: string, value: string): void;
        kjs$get(rule: string): $GameRules$Value<never>;
        kjs$getString(rule: string): string;
        kjs$getBoolean(rule: string): boolean;
        kjs$getInt(rule: string): number;
    }
    export class $PlayerKJS {
    }
    export interface $PlayerKJS extends $LivingEntityKJS, $DataSenderKJS, $WithAttachedData<$Player> {
        spawn(): void;
        getStats(): $PlayerStatsJS;
        isMiningBlock(): boolean;
        giveInHand(item: $ItemStack_): void;
        getMouseItem(): $ItemStack;
        setMouseItem(item: $ItemStack_): void;
        addFood(hunger: number, saturation: number): void;
        getFoodLevel(): number;
        setFoodLevel(foodLevel: number): void;
        getSaturation(): number;
        addExhaustion(exhaustion: number): void;
        setSaturation(saturation: number): void;
        addXPLevels(levels: number): void;
        setXpLevel(levels: number): void;
        getXpLevel(): number;
        getStages(): $Stages;
        getInventory(): $InventoryKJS;
        /**
         * Checks if the entity is a player entity.
         */
        isPlayer(): this is $Player;
        /**
         * Gets the player's profile.
         */
        getProfile(): $GameProfile;
        /**
         * Gets the player's username.
         */
        getUsername(): string;
        getInventoryChangeListener(): $KubeJSInventoryListener;
        notify(builder: $NotificationToastData_): void;
        notify(title: $Component_, text: $Component_): void;
        give(item: $ItemStack_): void;
        /**
         * Checks if the player is fake.
         */
        isFake(): this is $FakePlayer;
        addXP(xp: number): void;
        setXp(xp: number): void;
        getXp(): number;
        sendInventoryUpdate(): void;
        getCraftingGrid(): $InventoryKJS;
        getSelectedSlot(): number;
        setSelectedSlot(index: number): void;
        getOpenInventory(): $AbstractContainerMenu;
        boostElytraFlight(): void;
        addItemCooldown(item: $Item_, ticks: number): void;
        setStatusMessage(message: $Component_): void;
        get stats(): $PlayerStatsJS;
        get miningBlock(): boolean;
        get stages(): $Stages;
        get inventory(): $InventoryKJS;
        get player(): boolean;
        get profile(): $GameProfile;
        get username(): string;
        get inventoryChangeListener(): $KubeJSInventoryListener;
        get fake(): boolean;
        get craftingGrid(): $InventoryKJS;
        get openInventory(): $AbstractContainerMenu;
        set statusMessage(value: $Component_);
    }
    /**
     * Values that may be interpreted as {@link $PlayerKJS}.
     */
    export type $PlayerKJS_ = (() => void);
    export class $FireworkRocketEntityKJS {
    }
    export interface $FireworkRocketEntityKJS {
        setLifetimeKJS(lifetime: number): void;
        set lifetimeKJS(value: number);
    }
    /**
     * Values that may be interpreted as {@link $FireworkRocketEntityKJS}.
     */
    export type $FireworkRocketEntityKJS_ = ((lifetime: number) => void);
    export class $SizedFluidIngredientKJS {
    }
    export interface $SizedFluidIngredientKJS extends $Replaceable, $FluidMatch {
        matches(cx: $RecipeMatchContext, arg1: $FluidIngredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        self(): $SizedFluidIngredient;
        toFlatJson(): $JsonElement;
        toNestedJson(): $JsonElement;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
    }
    export class $RecipeHolderKJS {
    }
    export interface $RecipeHolderKJS extends $RecipeLikeKJS {
        getSchema(): $RecipeSchema;
        replaceInput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        setGroup(group: string): void;
        getSerializer(): $RecipeSerializer<never>;
        getRecipe(): $Recipe<never>;
        getGroup(): string;
        getOrCreateId(): $ResourceLocation;
        replaceOutput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        getTypeKey(): $ResourceKey<$RecipeSerializer<never>>;
        self(): $RecipeHolder<never>;
        hasInput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        hasOutput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        get schema(): $RecipeSchema;
        get serializer(): $RecipeSerializer<never>;
        get recipe(): $Recipe<never>;
        get orCreateId(): $ResourceLocation;
        get typeKey(): $ResourceKey<$RecipeSerializer<never>>;
    }
    export class $ReloadableServerResourcesKJS {
    }
    export interface $ReloadableServerResourcesKJS {
        kjs$getServerScriptManager(): $ServerScriptManager;
        kjs$getTagManager(): $TagManager;
    }
    export class $MessageSenderKJS {
    }
    export interface $MessageSenderKJS {
        /**
         * Sends a message in chat to something.
         * 
         * @param message A text component. It may be a string, which will be implicitly wrapped into a text component.
         */
        tell(message: $Component_): void;
        /**
         * Runs the specified console command.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getName(): $Component;
        getDisplayName(): $Component;
        /**
         * Runs the specified console command. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setStatusMessage(message: $Component_): void;
        setActivePostShader(id: $ResourceLocation_): void;
        get name(): $Component;
        get displayName(): $Component;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
    }
    export class $AdvancementNodeKJS {
    }
    export interface $AdvancementNodeKJS {
        getId(): $ResourceLocation;
        self(): $AdvancementNode;
        getTitle(): $Component;
        getDisplayText(): $Component;
        hasDisplay(): boolean;
        getDescription(): $Component;
        getDisplay(): $DisplayInfo;
        addChild(a: $AdvancementNode): void;
        getChildren(): $Set<$AdvancementNode>;
        getParent(): $AdvancementNode;
        get id(): $ResourceLocation;
        get title(): $Component;
        get displayText(): $Component;
        get description(): $Component;
        get display(): $DisplayInfo;
        get children(): $Set<$AdvancementNode>;
        get parent(): $AdvancementNode;
    }
    export class $BlockBuilderProvider {
    }
    export interface $BlockBuilderProvider {
        getBlockBuilder(): $BlockBuilder;
        get blockBuilder(): $BlockBuilder;
    }
    export class $RecipeInputKJS {
    }
    export interface $RecipeInputKJS {
        find(filter: $SlotFilter_): $ItemStack;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        self(): $RecipeInput;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        findAll(): $List<$ItemStack>;
    }
    export class $InventoryKJS {
    }
    export interface $InventoryKJS {
        isMutable(): boolean;
        getBlock(level: $Level_): $LevelBlock;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        isEmpty(): boolean;
        asContainer(): $Container;
        getWidth(): number;
        getHeight(): number;
        setChanged(): void;
        getAllItems(): $List<$ItemStack>;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        get mutable(): boolean;
        get empty(): boolean;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
        get slots(): number;
    }
    export class $BlockKJS {
    }
    export interface $BlockKJS extends $BlockBuilderProvider, $BlockBehaviourKJS, $Replaceable {
        setNameKey(key: string): void;
        setBlockBuilder(b: $BlockBuilder): void;
        getBlockStates(): $List<$BlockState>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        setRequiresTool(v: boolean): void;
        setDestroySpeed(v: number): void;
        setLightEmission(v: number): void;
        getBlock(): $Block;
        set nameKey(value: string);
        set blockBuilder(value: $BlockBuilder);
        get blockStates(): $List<$BlockState>;
        set requiresTool(value: boolean);
        set destroySpeed(value: number);
        set lightEmission(value: number);
        get block(): $Block;
    }
    export class $EntityTypeKJS {
    }
    export interface $EntityTypeKJS extends $RegistryObjectKJS<$EntityType<never>> {
        kjs$getRegistryId(): $ResourceKey<$Registry<$EntityType<never>>>;
        kjs$getRegistry(): $Registry<$EntityType<never>>;
    }
    export class $ServerPlayerKJS {
    }
    export interface $ServerPlayerKJS extends $PlayerKJS {
        /**
         * Kicks the player from the server with a generic reason.
         */
        kick(): void;
        /**
         * Kicks the player from the server with the provided reason.
         * 
         * @param reason A text component, containing the kick reason. It may be a string, which will be implicitly wrapped into a text component.
         */
        kick(reason: $Component_): void;
        /**
         * Bans the player from the server.
         * 
         * @param banner A string, that specifies who/what banned the player.
         * @param reason A string, that contains the ban reason.
         * @param banDuration Duration of a ban. Negative durations will result in a 10-year ban.
         */
        ban(banner: string, reason: string, banDuration: $Duration_): void;
        /**
         * Checks, whether the player is a server operator.
         */
        isOp(): boolean;
        /**
         * Heals the player to full, and fully restores hunger and saturation.
         */
        heal(): void;
        getStats(): $PlayerStatsJS;
        /**
         * Checks, whether the player is currently mining a block.
         */
        isMiningBlock(): boolean;
        setMouseItem(item: $ItemStack_): void;
        sendData(channel: string, data: $CompoundTag_): void;
        /**
         * Checks if the entity is a server-side player.
         */
        isServerPlayer(): this is $ServerPlayer;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        notify(builder: $NotificationToastData_): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number, rows: number): void;
        revokeAdvancement(id: $ResourceLocation_): void;
        /**
         * Switches the player's gamemode between Creative and Survival.
         * To change the player's gamemode to a mode other than Creative or Survival, use `setGameMode`.
         * 
         * @param mode `true` to change the player's gamemode to Creative.
         * `false` to change the player's gamemode to Survival.
         */
        setCreativeMode(mode: boolean): void;
        getSpawnLocation(): $LevelBlock;
        setSpawnLocation(c: $LevelBlock): void;
        captureInventory(autoRestore: boolean): $Container;
        isAdvancementDone(id: $ResourceLocation_): boolean;
        unlockAdvancement(id: $ResourceLocation_): void;
        setSelectedSlot(index: number): void;
        openChestGUI(title: $Component_, rows: number, gui: $Consumer_<$ChestMenuData>): void;
        openChestGUI(gui: $Consumer_<$KubeJSGUI>): void;
        setActivePostShader(id: $ResourceLocation_): void;
        get op(): boolean;
        get stats(): $PlayerStatsJS;
        get miningBlock(): boolean;
        set mouseItem(value: $ItemStack_);
        get serverPlayer(): boolean;
        set creativeMode(value: boolean);
        set selectedSlot(value: number);
        set activePostShader(value: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $ServerPlayerKJS}.
     */
    export type $ServerPlayerKJS_ = (() => void);
    export class $BlockStateKJS {
    }
    export interface $BlockStateKJS extends $RegistryObjectKJS<$Block>, $Replaceable {
        getId(): string;
        getKey(): $ResourceKey<$Block>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        asHolder(): $Holder<$Block>;
        getRegistry(): $Registry<$Block>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        toString(): string;
        getWebIconURL(size: number): $RelativeURL;
        setRequiresTool(v: boolean): void;
        setDestroySpeed(v: number): void;
        setLightEmission(v: number): void;
        randomTickOverride(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): boolean;
        get id(): string;
        get key(): $ResourceKey<$Block>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get registry(): $Registry<$Block>;
        set requiresTool(value: boolean);
        set destroySpeed(value: number);
        set lightEmission(value: number);
    }
    export class $MinecraftEnvironmentKJS {
    }
    export interface $MinecraftEnvironmentKJS extends $MessageSenderKJS {
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        schedule(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        getScheduledEvents(): $ScheduledEvents;
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        get scheduledEvents(): $ScheduledEvents;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftEnvironmentKJS}.
     */
    export type $MinecraftEnvironmentKJS_ = (() => $ScheduledEvents);
    export class $ClientLevelKJS {
    }
    export interface $ClientLevelKJS extends $LevelKJS {
        self(): $EntityGetter;
        kubeParticle(x: number, y: number, z: number, spriteSet: $SpriteSet): $KubeAnimatedParticle;
    }
    /**
     * Values that may be interpreted as {@link $ClientLevelKJS}.
     */
    export type $ClientLevelKJS_ = (() => void);
    export class $BlockBehaviourKJS {
    }
    export interface $BlockBehaviourKJS extends $BlockProviderKJS {
        setFriction(v: number): void;
        setSpeedFactor(v: number): void;
        setJumpFactor(v: number): void;
        setSoundType(v: $SoundType_): void;
        setHasCollision(v: boolean): void;
        setIsRandomlyTicking(v: boolean): void;
        setExplosionResistance(v: number): void;
        setRandomTickCallback(callback: $Consumer_<$RandomTickCallback>): void;
        set friction(value: number);
        set speedFactor(value: number);
        set jumpFactor(value: number);
        set soundType(value: $SoundType_);
        set hasCollision(value: boolean);
        set isRandomlyTicking(value: boolean);
        set explosionResistance(value: number);
        set randomTickCallback(value: $Consumer_<$RandomTickCallback>);
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviourKJS}.
     */
    export type $BlockBehaviourKJS_ = (() => void);
    export class $ItemKJS {
    }
    export interface $ItemKJS extends $IngredientSupplierKJS, $RegistryObjectKJS<$Item> {
        getTypeData(): $Map<string, $Object>;
        setNameKey(key: string): void;
        getItem(): $Item;
        getRegistryId(): $ResourceKey<$Registry<$Item>>;
        getRegistry(): $Registry<$Item>;
        getItemBuilder(): $ItemBuilder;
        setCraftingRemainder(i: $Item_): void;
        getTypeItemStackKey(): $ItemStackKey;
        setCanRepair(repairable: boolean): void;
        setItemBuilder(b: $ItemBuilder): void;
        get typeData(): $Map<string, $Object>;
        set nameKey(value: string);
        get item(): $Item;
        get registryId(): $ResourceKey<$Registry<$Item>>;
        get registry(): $Registry<$Item>;
        set craftingRemainder(value: $Item_);
        get typeItemStackKey(): $ItemStackKey;
        set canRepair(value: boolean);
    }
    export class $ComponentKJS {
    }
    export interface $ComponentKJS extends $Component, $WithCodec, $WrappedJS {
        forEach(action: $Consumer_<$Component>): void;
        self(): $MutableComponent;
        bold(value: boolean): $MutableComponent;
        bold(): $MutableComponent;
        click(s: $ClickEvent_): $MutableComponent;
        gray(): $MutableComponent;
        hover(s: $Component_): $MutableComponent;
        black(): $MutableComponent;
        blue(): $MutableComponent;
        yellow(): $MutableComponent;
        gold(): $MutableComponent;
        white(): $MutableComponent;
        aqua(): $MutableComponent;
        color(c: $KubeColor_): $MutableComponent;
        italic(value: boolean): $MutableComponent;
        italic(): $MutableComponent;
        red(): $MutableComponent;
        font(s: $ResourceLocation_): $MutableComponent;
        green(): $MutableComponent;
        asIterable(): $Iterable<$Component>;
        darkRed(): $MutableComponent;
        underlined(): $MutableComponent;
        underlined(value: boolean): $MutableComponent;
        /**
         * @deprecated
         */
        rawCopy(): $MutableComponent;
        hasStyle(): boolean;
        noColor(): $MutableComponent;
        darkBlue(): $MutableComponent;
        darkGray(): $MutableComponent;
        isEmpty(): boolean;
        strikethrough(value: boolean): $MutableComponent;
        strikethrough(): $MutableComponent;
        darkGreen(): $MutableComponent;
        clickCopy(text: string): $MutableComponent;
        /**
         * @deprecated
         */
        component(): $Component;
        clickOpenUrl(url: string): $MutableComponent;
        lightPurple(): $MutableComponent;
        insertion(s: string): $MutableComponent;
        darkPurple(): $MutableComponent;
        clickOpenFile(path: string): $MutableComponent;
        /**
         * @deprecated
         */
        rawComponent(): $MutableComponent;
        darkAqua(): $MutableComponent;
        obfuscated(value: boolean): $MutableComponent;
        obfuscated(): $MutableComponent;
        hasSiblings(): boolean;
        getCodec(): $Codec<never>;
        clickChangePage(page: string): $MutableComponent;
        clickRunCommand(command: string): $MutableComponent;
        clickSuggestCommand(command: string): $MutableComponent;
        get codec(): $Codec<never>;
    }
    export class $MinecraftClientKJS {
    }
    export interface $MinecraftClientKJS extends $MinecraftEnvironmentKJS {
        getParticleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        self(): $Minecraft;
        tell(message: $Component_): void;
        getTitle(): string;
        /**
         * Runs the specified console command client-side with the player's permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        isShiftDown(): boolean;
        isCtrlDown(): boolean;
        isKeyBindDown(id: string): boolean;
        setTitle(t: string): void;
        isKeyDown(keyName: string): boolean;
        isKeyDown(key: number): boolean;
        getName(): $Component;
        isAltDown(): boolean;
        /**
         * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setStatusMessage(message: $Component_): void;
        getCurrentWorldName(): string;
        setActivePostShader(id: $ResourceLocation_): void;
        getCurrentScreen(): $Screen;
        getKeyBindPressedTicks(id: string): number;
        getBlockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        isKeyMappingDown(key: $KeyMapping): boolean;
        setCurrentScreen(gui: $Screen): void;
        get particleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        get shiftDown(): boolean;
        get ctrlDown(): boolean;
        get name(): $Component;
        get altDown(): boolean;
        set statusMessage(value: $Component_);
        get currentWorldName(): string;
        set activePostShader(value: $ResourceLocation_);
        get blockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftClientKJS}.
     */
    export type $MinecraftClientKJS_ = (() => void);
    export class $WindowKJS {
    }
    export interface $WindowKJS {
        kjs$loadIcons(original: $List_<$IoSupplier_<$InputStream>>): $List<$IoSupplier<$InputStream>>;
    }
    export class $RecipeManagerKJS {
    }
    export interface $RecipeManagerKJS extends $ReloadableServerResourceHolderKJS {
        kjs$getRecipeIdMap(): $Map<$ResourceLocation, $RecipeHolder<never>>;
        kjs$replaceRecipes(byName: $Map_<$ResourceLocation_, $RecipeHolder_<never>>): void;
    }
    export class $ContainerKJS {
    }
    export interface $ContainerKJS extends $InventoryKJS {
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
        get mutable(): boolean;
        get width(): number;
        get height(): number;
        get slots(): number;
    }
    export class $IngredientKJS {
    }
    export interface $IngredientKJS extends $ItemPredicate, $Replaceable, $WithCodec, $ItemMatch {
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, item: $ItemStack_, exact: boolean): boolean;
        or(ingredient: $Ingredient_): $Ingredient;
        and(ingredient: $Ingredient_): $Ingredient;
        except(subtracted: $Ingredient_): $Ingredient;
        self(): $Ingredient;
        toIngredientString(ops: $DynamicOps<$Tag_>): string;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        withCount(count: number): $SizedIngredient;
        getCodec(): $Codec<never>;
        getTagKey(): $TagKey<$Item>;
        containsAnyTag(): boolean;
        asStack(): $SizedIngredient;
        getStackArray(): $ItemStack[];
        asIngredient(): $Ingredient;
        isWildcard(): boolean;
        get codec(): $Codec<never>;
        get tagKey(): $TagKey<$Item>;
        get stackArray(): $ItemStack[];
        get wildcard(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IngredientKJS}.
     */
    export type $IngredientKJS_ = (() => void);
    export class $ItemEntityKJS {
    }
    export interface $ItemEntityKJS extends $EntityKJS {
        isItem(): this is $ItemEntity;
        setLifespan(lifespan: number): void;
        setNoDespawn(): void;
        getLifespan(): number;
        setDefaultPickUpDelay(): void;
        setNoPickUpDelay(): void;
        getTicksUntilDespawn(): number;
        setTicksUntilDespawn(ticks: number): void;
        setInfinitePickUpDelay(): void;
        /**
         * Gets the item stack corresponding to the item contained in the item entity.
         * Will be `null` if the contained stack is empty.
         */
        getItem(): $ItemStack;
    }
    export class $NoMixinException extends $IllegalStateException {
        constructor();
    }
    export class $ReloadableServerResourceHolderKJS {
    }
    export interface $ReloadableServerResourceHolderKJS {
        kjs$setResources(resources: $ReloadableServerResourcesKJS): void;
        kjs$getResources(): $ReloadableServerResourcesKJS;
    }
    export class $ItemStackKJS {
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
    }
    export interface $ItemStackKJS extends $SpecialEquality, $WithCodec, $IngredientSupplierKJS, $ToStringJS, $Replaceable, $ItemComponentFunctions, $MutableDataComponentHolderFunctions, $ItemMatch, $RegistryObjectKJS<$Item> {
        matches(cx: $RecipeMatchContext, itemLike: $ItemLike_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, s: $ItemStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        getTypeData(): $Map<string, $Object>;
        getMod(): string;
        getId(): string;
        self(): $ItemStack;
        getKey(): $ResourceKey<$Item>;
        getRegistryId(): $ResourceKey<$Registry<$Item>>;
        asHolder(): $Holder<$Item>;
        getIdLocation(): $ResourceLocation;
        getRegistry(): $Registry<$Item>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        getWebIconURL(ops: $DynamicOps<$Tag_>, size: number): $RelativeURL;
        getBlock(): $Block;
        toItemString0(dynamicOps: $DynamicOps<$Tag_>): string;
        withCustomName(name: $Component_): this;
        hasEnchantment(enchantment: $Holder_<$Enchantment>, level: number): boolean;
        toItemString(): string;
        /**
         * @deprecated
         */
        withChance(chance: number): $ItemStack;
        areItemsEqual(other: $ItemStack_): boolean;
        enchant(enchantments: $ItemEnchantments_): this;
        enchant(enchantment: $Holder_<$Enchantment>, level: number): this;
        withLore(lines: $Component_[]): this;
        withLore(lines: $Component_[], styledLines: $Component_[]): this;
        withCount(c: number): this;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getCodec(): $Codec<$ItemStack>;
        toStringJS(): string;
        asIngredient(): $Ingredient;
        getComponentString(): string;
        equalsIgnoringCount(stack: $ItemStack_): boolean;
        getEnchantments(): $ItemEnchantments;
        areComponentsEqual(other: $ItemStack_): boolean;
        getHarvestSpeed(block: $LevelBlock): number;
        getHarvestSpeed(): number;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        get typeData(): $Map<string, $Object>;
        get mod(): string;
        get id(): string;
        get key(): $ResourceKey<$Item>;
        get registryId(): $ResourceKey<$Registry<$Item>>;
        get idLocation(): $ResourceLocation;
        get registry(): $Registry<$Item>;
        get block(): $Block;
        get codec(): $Codec<$ItemStack>;
        get componentString(): string;
        get enchantments(): $ItemEnchantments;
    }
    export class $ClientPlayerKJS {
    }
    export interface $ClientPlayerKJS extends $PlayerKJS {
        getStats(): $PlayerStatsJS;
        isMiningBlock(): boolean;
        sendData(channel: string, data: $CompoundTag_): void;
        /**
         * Checks if the entity is a client-side player.
         */
        isClientPlayer(): this is $AbstractClientPlayer;
        notify(notification: $NotificationToastData_): void;
        get stats(): $PlayerStatsJS;
        get miningBlock(): boolean;
        get clientPlayer(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientPlayerKJS}.
     */
    export type $ClientPlayerKJS_ = (() => void);
}
