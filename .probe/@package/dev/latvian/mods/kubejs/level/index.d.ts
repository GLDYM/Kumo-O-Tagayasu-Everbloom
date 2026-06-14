import { $Explosion, $Level$ExplosionInteraction, $Level$ExplosionInteraction_, $Level, $ExplosionDamageCalculator, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Fireworks_ } from "@package/net/minecraft/world/item/component";
import { $EntityType_, $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $List, $Map_, $List_, $Map } from "@package/java/util";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $LevelTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockPos, $Holder_, $Holder, $BlockPos_, $Direction_, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $BlockProviderKJS, $InventoryKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Record, $Object } from "@package/java/lang";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $ExplosionEvent$Detonate, $LevelEvent$Unload, $ExplosionEvent$Start, $LevelEvent$Load } from "@package/net/neoforged/neoforge/event/level";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";
export * as ruletest from "@package/dev/latvian/mods/kubejs/level/ruletest";

declare module "@package/dev/latvian/mods/kubejs/level" {
    export class $ExplosionKubeEvent$After extends $ExplosionKubeEvent {
        /**
         * Gets a list of all blocks affected by the explosion.
         */
        getAffectedBlocks(): $List<$LevelBlock>;
        /**
         * Gets a list of all entities affected by the explosion.
         */
        getAffectedEntities(): $EntityArrayList;
        /**
         * Remove all knockback from all affected *players*.
         */
        removeKnockback(): void;
        /**
         * Remove all entities from the list of affected entities.
         */
        removeAllAffectedEntities(): void;
        /**
         * Remove an entity from the list of affected entities.
         */
        removeAffectedEntity(entity: $Entity): void;
        /**
         * Remove all blocks from the list of affected blocks.
         */
        removeAllAffectedBlocks(): void;
        /**
         * Remove a block from the list of affected blocks.
         */
        removeAffectedBlock(block: $LevelBlock): void;
        constructor(level: $Level_, explosion: $Explosion, affectedEntities: $List_<$Entity>);
        get affectedBlocks(): $List<$LevelBlock>;
        get affectedEntities(): $EntityArrayList;
    }
    export class $WrappedSpawner extends $Record {
        static of(spawner: $Either<$BlockEntity, $Entity>): $WrappedSpawner;
        block(): $LevelBlock;
        entity(): $Entity;
        isWorldgen(): boolean;
        constructor(entity: $Entity, block: $LevelBlock);
        get worldgen(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WrappedSpawner}.
     */
    export type $WrappedSpawner_ = { entity?: $Entity, block?: $LevelBlock,  } | [entity?: $Entity, block?: $LevelBlock, ];
    export class $KubeLevelEvent {
    }
    export interface $KubeLevelEvent extends $KubeEvent {
        getLevel(): $Level;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    /**
     * Values that may be interpreted as {@link $KubeLevelEvent}.
     */
    export type $KubeLevelEvent_ = (() => $Level_);
    export class $CachedLevelBlock implements $LevelBlock {
        clearCache(): void;
        getLevel(): $Level;
        getEntity(): $BlockEntity;
        getBlockState(): $BlockState;
        getPos(): $BlockPos;
        setBlockState(state: $BlockState_, flags: number): void;
        offset(f: $Direction_, d: number): $LevelBlock;
        offset(x: number, y: number, z: number): $LevelBlock;
        offset(f: $Direction_): $LevelBlock;
        set(block: $Block_, properties: $Map_<never, never>, flags: number): void;
        set(block: $Block_, properties: $Map_<never, never>): void;
        set(block: $Block_): void;
        getProperties(): $Map<string, string>;
        getItem(): $ItemStack;
        getDimension(): $ResourceLocation;
        getY(): number;
        createEntity(type: $EntityType_<never>): $Entity;
        getZ(): number;
        getX(): number;
        getInventory(facing: $Direction_): $InventoryKJS;
        getInventory(): $InventoryKJS;
        getEntityData(): $CompoundTag;
        getBlock(): $Block;
        explode(properties: $ExplosionProperties_): $Explosion;
        getCenterX(): number;
        getCenterZ(): number;
        spawnFireworks(fireworks: $Fireworks_, lifetime: number): void;
        getBlockLight(): number;
        popItemFromFace(item: $ItemStack_, dir: $Direction_): void;
        setEntityData(tag: $CompoundTag_): void;
        getCanSeeSky(): boolean;
        mergeEntityData(tag: $CompoundTag_): void;
        spawnLightning(): void;
        spawnLightning(effectOnly: boolean): void;
        spawnLightning(effectOnly: boolean, player: $ServerPlayer): void;
        getSkyLight(): number;
        toBlockStateString(): string;
        getPlayersInRadius(radius: number): $EntityArrayList;
        getPlayersInRadius(): $EntityArrayList;
        getEntityId(): string;
        canSeeSkyFromBelowWater(): boolean;
        getUp(): $LevelBlock;
        getDown(): $LevelBlock;
        popItem(item: $ItemStack_): void;
        getWest(): $LevelBlock;
        getBiomeId(): $ResourceLocation;
        getCenterY(): number;
        getLight(): number;
        getSouth(): $LevelBlock;
        getEast(): $LevelBlock;
        getNorth(): $LevelBlock;
        getDrops(): $List<$ItemStack>;
        getDrops(entity: $Entity, heldItem: $ItemStack_): $List<$ItemStack>;
        setBlockState(state: $BlockState_): void;
        getDimensionKey(): $ResourceKey<$Level>;
        getTypeData(): $Map<string, $Object>;
        getId(): string;
        getKey(): $ResourceKey<$Block>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        asHolder(): $Holder<$Block>;
        getRegistry(): $Registry<$Block>;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        getIdLocation(): $ResourceLocation;
        getTagKeys(): $List<$TagKey<$Block>>;
        getTags(): $List<$ResourceLocation>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        minecraftLevel: $Level;
        constructor(w: $Level_, p: $BlockPos_);
        get level(): $Level;
        get entity(): $BlockEntity;
        get pos(): $BlockPos;
        get properties(): $Map<string, string>;
        get item(): $ItemStack;
        get dimension(): $ResourceLocation;
        get y(): number;
        get z(): number;
        get x(): number;
        get block(): $Block;
        get centerX(): number;
        get centerZ(): number;
        get blockLight(): number;
        get canSeeSky(): boolean;
        get skyLight(): number;
        get entityId(): string;
        get up(): $LevelBlock;
        get down(): $LevelBlock;
        get west(): $LevelBlock;
        get biomeId(): $ResourceLocation;
        get centerY(): number;
        get light(): number;
        get south(): $LevelBlock;
        get east(): $LevelBlock;
        get north(): $LevelBlock;
        get dimensionKey(): $ResourceKey<$Level>;
        get typeData(): $Map<string, $Object>;
        get id(): string;
        get key(): $ResourceKey<$Block>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get registry(): $Registry<$Block>;
        get mod(): string;
        get idLocation(): $ResourceLocation;
        get tagKeys(): $List<$TagKey<$Block>>;
        get tags(): $List<$ResourceLocation>;
    }
    export class $ExplosionProperties extends $Record {
        mode(): $Level$ExplosionInteraction;
        source(): $Entity;
        particles(): (boolean) | undefined;
        strength(): (number) | undefined;
        damageSource(): $DamageSource;
        explode(level: $Level_, x: number, y: number, z: number): $Explosion;
        damageCalculator(): $ExplosionDamageCalculator;
        explosionSound(): $Holder<$SoundEvent>;
        causesFire(): (boolean) | undefined;
        smallParticles(): $ParticleOptions;
        largeParticles(): $ParticleOptions;
        constructor(source: $Entity, damageSource: $DamageSource_, damageCalculator: $ExplosionDamageCalculator, strength: (number) | undefined, causesFire: (boolean) | undefined, mode: $Level$ExplosionInteraction_, particles: (boolean) | undefined, smallParticles: $ParticleOptions_, largeParticles: $ParticleOptions_, explosionSound: $Holder_<$SoundEvent>);
    }
    /**
     * Values that may be interpreted as {@link $ExplosionProperties}.
     */
    export type $ExplosionProperties_ = { smallParticles?: $ParticleOptions_, damageCalculator?: $ExplosionDamageCalculator, largeParticles?: $ParticleOptions_, explosionSound?: $Holder_<$SoundEvent>, damageSource?: $DamageSource_, particles?: (boolean) | undefined, causesFire?: (boolean) | undefined, mode?: $Level$ExplosionInteraction_, source?: $Entity, strength?: (number) | undefined,  } | [smallParticles?: $ParticleOptions_, damageCalculator?: $ExplosionDamageCalculator, largeParticles?: $ParticleOptions_, explosionSound?: $Holder_<$SoundEvent>, damageSource?: $DamageSource_, particles?: (boolean) | undefined, causesFire?: (boolean) | undefined, mode?: $Level$ExplosionInteraction_, source?: $Entity, strength?: (number) | undefined, ];
    export class $SimpleLevelKubeEvent implements $KubeLevelEvent {
        getLevel(): $Level;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(l: $Level_);
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $KubeJSWorldEventHandler {
        static serverLevelUnload(event: $LevelEvent$Unload): void;
        static serverTickEvent(event: $LevelTickEvent$Post): void;
        static preExplosion(event: $ExplosionEvent$Start): void;
        static detonateExplosion(event: $ExplosionEvent$Detonate): void;
        static serverLevelLoad(event: $LevelEvent$Load): void;
        constructor();
    }
    export class $LevelBlock {
    }
    export interface $LevelBlock extends $BlockProviderKJS {
        offset(f: $Direction_, d: number): $LevelBlock;
        offset(x: number, y: number, z: number): $LevelBlock;
        offset(f: $Direction_): $LevelBlock;
        set(block: $Block_, properties: $Map_<never, never>, flags: number): void;
        set(block: $Block_, properties: $Map_<never, never>): void;
        set(block: $Block_): void;
        getProperties(): $Map<string, string>;
        getLevel(): $Level;
        getItem(): $ItemStack;
        getDimension(): $ResourceLocation;
        getY(): number;
        getEntity(): $BlockEntity;
        createEntity(type: $EntityType_<never>): $Entity;
        getZ(): number;
        getBlockState(): $BlockState;
        getPos(): $BlockPos;
        getX(): number;
        getInventory(facing: $Direction_): $InventoryKJS;
        getInventory(): $InventoryKJS;
        getEntityData(): $CompoundTag;
        getBlock(): $Block;
        explode(properties: $ExplosionProperties_): $Explosion;
        getCenterX(): number;
        getCenterZ(): number;
        spawnFireworks(fireworks: $Fireworks_, lifetime: number): void;
        getBlockLight(): number;
        popItemFromFace(item: $ItemStack_, dir: $Direction_): void;
        setEntityData(tag: $CompoundTag_): void;
        getCanSeeSky(): boolean;
        mergeEntityData(tag: $CompoundTag_): void;
        spawnLightning(): void;
        spawnLightning(effectOnly: boolean): void;
        spawnLightning(effectOnly: boolean, player: $ServerPlayer): void;
        getSkyLight(): number;
        toBlockStateString(): string;
        getPlayersInRadius(radius: number): $EntityArrayList;
        getPlayersInRadius(): $EntityArrayList;
        getEntityId(): string;
        canSeeSkyFromBelowWater(): boolean;
        getUp(): $LevelBlock;
        getDown(): $LevelBlock;
        popItem(item: $ItemStack_): void;
        getWest(): $LevelBlock;
        getBiomeId(): $ResourceLocation;
        getCenterY(): number;
        getLight(): number;
        getSouth(): $LevelBlock;
        getEast(): $LevelBlock;
        getNorth(): $LevelBlock;
        getDrops(): $List<$ItemStack>;
        getDrops(entity: $Entity, heldItem: $ItemStack_): $List<$ItemStack>;
        setBlockState(state: $BlockState_, flags: number): void;
        setBlockState(state: $BlockState_): void;
        getDimensionKey(): $ResourceKey<$Level>;
        get properties(): $Map<string, string>;
        get level(): $Level;
        get item(): $ItemStack;
        get dimension(): $ResourceLocation;
        get y(): number;
        get entity(): $BlockEntity;
        get z(): number;
        get pos(): $BlockPos;
        get x(): number;
        get block(): $Block;
        get centerX(): number;
        get centerZ(): number;
        get blockLight(): number;
        get canSeeSky(): boolean;
        get skyLight(): number;
        get entityId(): string;
        get up(): $LevelBlock;
        get down(): $LevelBlock;
        get west(): $LevelBlock;
        get biomeId(): $ResourceLocation;
        get centerY(): number;
        get light(): number;
        get south(): $LevelBlock;
        get east(): $LevelBlock;
        get north(): $LevelBlock;
        get dimensionKey(): $ResourceKey<$Level>;
    }
    export class $ExplosionKubeEvent$Before extends $ExplosionKubeEvent {
        /**
         * Returns the size of the explosion.
         */
        getSize(): number;
        /**
         * Sets the size of the explosion.
         */
        setSize(s: number): void;
        constructor(level: $Level_, explosion: $Explosion);
    }
    export class $ExplosionKubeEvent implements $KubeLevelEvent {
        getLevel(): $Level;
        getPosition(): $Vec3;
        getBlock(): $LevelBlock;
        getY(): number;
        getZ(): number;
        getX(): number;
        getExploder(): $LivingEntity;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(level: $Level_, explosion: $Explosion);
        get level(): $Level;
        get position(): $Vec3;
        get block(): $LevelBlock;
        get y(): number;
        get z(): number;
        get x(): number;
        get exploder(): $LivingEntity;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
}
