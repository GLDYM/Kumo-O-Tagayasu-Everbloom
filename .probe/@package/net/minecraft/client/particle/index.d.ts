import { $JsonObject_ } from "@package/com/google/gson";
import { $RenderBuffers, $LightTexture } from "@package/net/minecraft/client/renderer";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $DustParticleOptions, $ParticleType_, $SculkChargeParticleOptions_, $SculkChargeParticleOptions, $ParticleGroup, $VibrationParticleOption, $ParticleOptions_, $BlockParticleOption, $ParticleOptions, $DustColorTransitionOptions, $ItemParticleOption, $ColorParticleOption, $SimpleParticleType, $ShriekParticleOption, $ScalableParticleOptionsBase } from "@package/net/minecraft/core/particles";
import { $Camera } from "@package/net/minecraft/client";
import { $ResourceManager, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $List, $List_, $Map } from "@package/java/util";
import { $Frustum } from "@package/net/minecraft/client/renderer/culling";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $BlockPos_, $Direction_, $Registry } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $TextureAtlasSprite, $TextureManager, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $Record, $Object } from "@package/java/lang";
import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $EntityRenderDispatcher } from "@package/net/minecraft/client/renderer/entity";
import { $ParticleAccessor as $ParticleAccessor$1 } from "@package/com/moepus/flerovium/mixins/Particle";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $FireworkExplosion_ } from "@package/net/minecraft/world/item/component";
import { $ParticleEngineAccessor } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $IExplosiveParticleHandler } from "@package/dev/xylonity/explosiveenhancement/registry";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $BufferBuilder, $VertexConsumer, $Tesselator } from "@package/com/mojang/blaze3d/vertex";
import { $ParticleAccessor } from "@package/io/redspace/ironsspellbooks/mixin";
import { $AABB_, $Vec3, $AABB, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $Quaternionf } from "@package/org/joml";

declare module "@package/net/minecraft/client/particle" {
    export class $ParticleEngine$SpriteParticleRegistration<T extends $ParticleOptions> {
    }
    export interface $ParticleEngine$SpriteParticleRegistration<T extends $ParticleOptions> {
        create(arg0: $SpriteSet): $ParticleProvider<T>;
    }
    /**
     * Values that may be interpreted as {@link $ParticleEngine$SpriteParticleRegistration}.
     */
    export type $ParticleEngine$SpriteParticleRegistration_<T> = ((arg0: $SpriteSet) => $ParticleProvider<T>);
    export class $PortalParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $GlowParticle extends $TextureSheetParticle {
        getLightColor(arg0: number): number;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $FallingDustParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $DustPlumeParticle extends $BaseAshSmokeParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $MobAppearanceParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor();
    }
    export class $DragonBreathParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $FlyStraightTowardsParticle extends $TextureSheetParticle {
        getLightColor(arg0: number): number;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $SpitParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $LavaParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $TotemParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $GustParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $FireworkParticles$Starter extends $NoRenderParticle {
        createParticle(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $IntList, arg7: $IntList, arg8: boolean, arg9: boolean): void;
        handler$gdp000$chloride$inject$create(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $IntList, arg7: $IntList, arg8: boolean, arg9: boolean, arg10: $CallbackInfo): void;
        redirect$zbp000$sodium_extra$tick(arg0: $Particle, arg1: number, arg2: number, arg3: number): void;
        createParticleBall(arg0: number, arg1: number, arg2: $IntList, arg3: $IntList, arg4: boolean, arg5: boolean): void;
        createParticleBurst(arg0: $IntList, arg1: $IntList, arg2: boolean, arg3: boolean): void;
        createParticleShape(arg0: number, arg1: number[][], arg2: $IntList, arg3: $IntList, arg4: boolean, arg5: boolean, arg6: boolean): void;
        handler$zbp000$sodium_extra$addExplosionParticle(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $IntList, arg7: $IntList, arg8: boolean, arg9: boolean, arg10: $CallbackInfo): void;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $ParticleEngine, arg8: $List_<$FireworkExplosion_>);
    }
    export class $ExplodeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $TerrainParticle$DustPillarProvider implements $ParticleProvider<$BlockParticleOption> {
        createParticle(arg0: $BlockParticleOption, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor();
    }
    export class $HeartParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $AshParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SquidInkParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SingleQuadParticle$FacingCameraMode {
        static LOOKAT_Y: $SingleQuadParticle$FacingCameraMode;
        static LOOKAT_XYZ: $SingleQuadParticle$FacingCameraMode;
    }
    export interface $SingleQuadParticle$FacingCameraMode {
        setRotation(arg0: $Quaternionf, arg1: $Camera, arg2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $SingleQuadParticle$FacingCameraMode}.
     */
    export type $SingleQuadParticle$FacingCameraMode_ = ((arg0: $Quaternionf, arg1: $Camera, arg2: number) => void);
    export class $CampfireSmokeParticle$SignalProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SpellParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $GustParticle extends $TextureSheetParticle {
        getLightColor(arg0: number): number;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $HeartParticle$AngryVillagerProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SculkChargePopParticle extends $TextureSheetParticle {
        getLightColor(arg0: number): number;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $WhiteSmokeParticle extends $BaseAshSmokeParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $PortalParticle extends $TextureSheetParticle {
        getLightColor(arg0: number): number;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $SpellParticle$WitchProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SimpleAnimatedParticle extends $TextureSheetParticle {
        setColor(arg0: number): void;
        setFadeColor(arg0: number): void;
        getLightColor(arg0: number): number;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        set color(value: number);
        set fadeColor(value: number);
    }
    export class $DustPlumeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SmokeParticle extends $BaseAshSmokeParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $FlameParticle extends $RisingParticle {
        getLightColor(arg0: number): number;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $SuspendedTownParticle$HappyVillagerProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $ReversePortalParticle extends $PortalParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $GlowParticle$WaxOffProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SuspendedTownParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $SonicBoomParticle extends $HugeExplosionParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $PlayerCloudParticle$SneezeProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $DustParticle extends $DustParticleBase<$DustParticleOptions> {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $WhiteAshParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $LavaParticle extends $TextureSheetParticle {
        getLightColor(arg0: number): number;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $BreakingItemParticle$SnowballProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor();
    }
    export class $GustSeedParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: number, arg1: number, arg2: number);
    }
    export class $SquidInkParticle$GlowInkProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SingleQuadParticle extends $Particle {
        getFacingCameraMode(): $SingleQuadParticle$FacingCameraMode;
        getQuadSize(arg0: number): number;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        get facingCameraMode(): $SingleQuadParticle$FacingCameraMode;
    }
    export class $Particle$LifetimeAlpha extends $Record {
        isOpaque(): boolean;
        currentAlphaForAge(arg0: number, arg1: number, arg2: number): number;
        startAlpha(): number;
        endAlpha(): number;
        endAtNormalizedAge(): number;
        startAtNormalizedAge(): number;
        static ALWAYS_OPAQUE: $Particle$LifetimeAlpha;
        constructor(startAlpha: number, endAlpha: number, startAtNormalizedAge: number, endAtNormalizedAge: number);
        get opaque(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Particle$LifetimeAlpha}.
     */
    export type $Particle$LifetimeAlpha_ = { endAtNormalizedAge?: number, startAtNormalizedAge?: number, endAlpha?: number, startAlpha?: number,  } | [endAtNormalizedAge?: number, startAtNormalizedAge?: number, endAlpha?: number, startAlpha?: number, ];
    export class $BlockMarker extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $ParticleRenderType {
        static NO_RENDER: $ParticleRenderType;
        static TERRAIN_SHEET: $ParticleRenderType;
        static PARTICLE_SHEET_LIT: $ParticleRenderType;
        static PARTICLE_SHEET_OPAQUE: $ParticleRenderType;
        static PARTICLE_SHEET_TRANSLUCENT: $ParticleRenderType;
        static CUSTOM: $ParticleRenderType;
    }
    export interface $ParticleRenderType {
        begin(arg0: $Tesselator, arg1: $TextureManager): $BufferBuilder;
        isTranslucent(): boolean;
        get translucent(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ParticleRenderType}.
     */
    export type $ParticleRenderType_ = ((arg0: $Tesselator, arg1: $TextureManager) => $BufferBuilder);
    export class $SuspendedTownParticle$DolphinSpeedProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $CritParticle$MagicProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SoulParticle$EmissiveProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $FlyTowardsPositionParticle$VaultConnectionProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $WaterDropParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $BaseAshSmokeParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $FlameParticle$SmallFlameProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $NoteParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $CherryParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $AshParticle extends $BaseAshSmokeParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $FireworkParticles$SparkParticle extends $SimpleAnimatedParticle {
        setTwinkle(arg0: boolean): void;
        setTrail(arg0: boolean): void;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        set twinkle(value: boolean);
        set trail(value: boolean);
    }
    export class $FlyTowardsPositionParticle$NautilusProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $CritParticle$DamageIndicatorProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SculkChargeParticle$Provider extends $Record implements $ParticleProvider<$SculkChargeParticleOptions> {
        sprite(): $SpriteSet;
        createParticle(arg0: $SculkChargeParticleOptions_, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    /**
     * Values that may be interpreted as {@link $SculkChargeParticle$Provider}.
     */
    export type $SculkChargeParticle$Provider_ = { sprite?: $SpriteSet,  } | [sprite?: $SpriteSet, ];
    export class $HugeExplosionParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $DripParticle extends $TextureSheetParticle {
        getLightColor(arg0: number): number;
        static createHoneyFallParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
        static createHoneyLandParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
        static createNectarFallParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
        static createLavaFallParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
        static createWaterFallParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
        static createWaterHangParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
        static createHoneyHangParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
        static createLavaHangParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
        static createLavaLandParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
        static createDripstoneWaterFallParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
        static createObsidianTearFallParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
        static createDripstoneLavaHangParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
        static createDripstoneLavaFallParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
        static createDripstoneWaterHangParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
        static createObsidianTearLandParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
        static createObsidianTearHangParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
        static createSporeBlossomFallParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: $Fluid_);
    }
    export class $CampfireSmokeParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $BreakingItemParticle$Provider implements $ParticleProvider<$ItemParticleOption> {
        createParticle(arg0: $ItemParticleOption, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor();
    }
    export class $WakeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $PlayerCloudParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $FireworkParticles {
        constructor();
    }
    export class $ParticleEngine$MutableSpriteSet implements $SpriteSet {
        get(arg0: $RandomSource): $TextureAtlasSprite;
        get(arg0: number, arg1: number): $TextureAtlasSprite;
        rebind(arg0: $List_<$TextureAtlasSprite>): void;
        sprites: $List<$TextureAtlasSprite>;
        constructor();
    }
    export class $GlowParticle$WaxOnProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $GlowParticle$GlowSquidProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $DripParticle$DripHangParticle extends $DripParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $ParticleProvider$Sprite<T extends $ParticleOptions> {
    }
    export interface $ParticleProvider$Sprite<T extends $ParticleOptions> {
        createParticle(arg0: T, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $TextureSheetParticle;
    }
    /**
     * Values that may be interpreted as {@link $ParticleProvider$Sprite}.
     */
    export type $ParticleProvider$Sprite_<T> = ((arg0: T, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number) => $TextureSheetParticle);
    export class $GlowParticle$ScrapeProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SuspendedParticle$CrimsonSporeProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $DripParticle$FallAndLandParticle extends $DripParticle$FallingParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $BreakingItemParticle$SlimeProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor();
    }
    export class $SmokeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $FireworkParticles$OverlayParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $ShriekParticle$Provider implements $ParticleProvider<$ShriekParticleOption> {
        createParticle(arg0: $ShriekParticleOption, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $ExplodeParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $SculkChargePopParticle$Provider extends $Record implements $ParticleProvider<$SimpleParticleType> {
        sprite(): $SpriteSet;
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    /**
     * Values that may be interpreted as {@link $SculkChargePopParticle$Provider}.
     */
    export type $SculkChargePopParticle$Provider_ = { sprite?: $SpriteSet,  } | [sprite?: $SpriteSet, ];
    export class $SuspendedTownParticle$ComposterFillProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $NoRenderParticle extends $Particle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $BubbleParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $SoulParticle extends $RisingParticle {
        getLightColor(arg0: number): number;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $DripParticle$FallingParticle extends $DripParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $ItemPickupParticle extends $Particle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(arg0: $EntityRenderDispatcher, arg1: $RenderBuffers, arg2: $ClientLevel, arg3: $Entity, arg4: $Entity);
    }
    export class $FireworkParticles$SparkProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $BlockMarker$Provider implements $ParticleProvider<$BlockParticleOption> {
        createParticle(arg0: $BlockParticleOption, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor();
    }
    export class $DustParticleBase<T extends $ScalableParticleOptionsBase> extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $VibrationSignalParticle extends $TextureSheetParticle {
        getLightColor(arg0: number): number;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $ParticleProvider<T extends $ParticleOptions> {
    }
    export interface $ParticleProvider<T extends $ParticleOptions> {
        createParticle(arg0: T, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
    }
    /**
     * Values that may be interpreted as {@link $ParticleProvider}.
     */
    export type $ParticleProvider_<T> = ((arg0: T, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number) => $Particle);
    export class $WaterCurrentDownParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $CampfireSmokeParticle$CosyProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $HugeExplosionSeedParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor();
    }
    export class $EndRodParticle extends $SimpleAnimatedParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $TrialSpawnerDetectionParticle extends $TextureSheetParticle {
        getLightColor(arg0: number): number;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $DripParticle$CoolingDripHangParticle extends $DripParticle$DripHangParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $WaterCurrentDownParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $TotemParticle extends $SimpleAnimatedParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $BubbleColumnUpParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $BreakingItemParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $WhiteSmokeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SpellParticle$MobEffectProvider implements $ParticleProvider<$ColorParticleOption> {
        createParticle(arg0: $ColorParticleOption, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $CritParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $TrackingEmitter extends $NoRenderParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(arg0: $ClientLevel, arg1: $Entity, arg2: $ParticleOptions_, arg3: number);
        constructor(arg0: $ClientLevel, arg1: $Entity, arg2: $ParticleOptions_);
    }
    export class $SplashParticle extends $WaterDropParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $NoteParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $TerrainParticle extends $TextureSheetParticle {
        updateSprite(arg0: $BlockState_, arg1: $BlockPos_): $TerrainParticle;
        getLightColor(arg0: number): number;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $BlockState_);
        constructor(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $BlockState_, arg8: $BlockPos_);
    }
    export class $DustParticle$Provider implements $ParticleProvider<$DustParticleOptions> {
        createParticle(arg0: $DustParticleOptions, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $DripParticle$DripstoneFallAndLandParticle extends $DripParticle$FallAndLandParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $WaterDropParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $ParticleEngine$1ParticleDefinition extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ParticleEngine$1ParticleDefinition}.
     */
    export type $ParticleEngine$1ParticleDefinition_ = { id?: $ResourceLocation_, sprites?: ($List_<$ResourceLocation_>) | undefined,  } | [id?: $ResourceLocation_, sprites?: ($List_<$ResourceLocation_>) | undefined, ];
    export class $SpitParticle extends $ExplodeParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $BubbleColumnUpParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $BubblePopParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $LargeSmokeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $CritParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $Particle implements $ParticleAccessor, $ParticleAccessor$1 {
        remove(): void;
        scale(arg0: number): $Particle;
        isAlive(): boolean;
        move(arg0: number, arg1: number, arg2: number): void;
        tick(): void;
        setColor(arg0: number, arg1: number, arg2: number): void;
        render(arg0: $VertexConsumer, arg1: $Camera, arg2: number): void;
        getPos(): $Vec3;
        setPos(arg0: number, arg1: number, arg2: number): void;
        getBoundingBox(): $AABB;
        setBoundingBox(arg0: $AABB_): void;
        setPower(arg0: number): $Particle;
        getRenderType(): $ParticleRenderType;
        getLifetime(): number;
        setLifetime(arg0: number): void;
        getParticleGroup(): ($ParticleGroup) | undefined;
        setParticleSpeed(arg0: number, arg1: number, arg2: number): void;
        getRenderBoundingBox(arg0: number): $AABB;
        irons_spellbooks$stoppedByCollision(arg0: boolean): void;
        irons_spellbooks$z(arg0: number): void;
        irons_spellbooks$zo(arg0: number): void;
        irons_spellbooks$yd(arg0: number): void;
        irons_spellbooks$zd(arg0: number): void;
        irons_spellbooks$gravity(arg0: number): void;
        irons_spellbooks$xd(arg0: number): void;
        isStoppedByCollision(): boolean;
        irons_spellbooks$yo(arg0: number): void;
        irons_spellbooks$xo(arg0: number): void;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
        get alive(): boolean;
        set power(value: number);
        get renderType(): $ParticleRenderType;
        get particleGroup(): ($ParticleGroup) | undefined;
        get stoppedByCollision(): boolean;
    }
    export class $FlyTowardsPositionParticle$EnchantProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SpellParticle$InstantProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $DustColorTransitionParticle extends $DustParticleBase<$DustColorTransitionOptions> {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $FallingDustParticle$Provider implements $ParticleProvider<$BlockParticleOption> {
        createParticle(arg0: $BlockParticleOption, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $ReversePortalParticle$ReversePortalProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $FlameParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SpellParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SuspendedParticle$UnderwaterProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SuspendedParticle$WarpedSporeProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SpriteSet {
    }
    export interface $SpriteSet {
        get(arg0: number, arg1: number): $TextureAtlasSprite;
        get(arg0: $RandomSource): $TextureAtlasSprite;
    }
    export class $EndRodParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $GustParticle$SmallProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $FlyStraightTowardsParticle$OminousSpawnProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $ParticleDescription {
        static fromJson(arg0: $JsonObject_): $ParticleDescription;
        getTextures(): $List<$ResourceLocation>;
        constructor(arg0: $List_<$ResourceLocation_>);
        get textures(): $List<$ResourceLocation>;
    }
    export class $BubblePopParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $SuspendedParticle$SporeBlossomAirProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $BubbleParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SuspendedParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(arg0: $ClientLevel, arg1: $SpriteSet, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $ClientLevel, arg1: $SpriteSet, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number);
    }
    export class $SplashParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $LargeSmokeParticle extends $SmokeParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $GustSeedParticle extends $NoRenderParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $WhiteAshParticle extends $BaseAshSmokeParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $ParticleEngine implements $PreparableReloadListener, $IExplosiveParticleHandler, $ParticleEngineAccessor {
        add(arg0: $Particle): void;
        /**
         * @deprecated
         */
        register<T extends $ParticleOptions>(arg0: $ParticleType_<T>, arg1: $ParticleEngine$SpriteParticleRegistration_<T>): void;
        /**
         * @deprecated
         */
        register<T extends $ParticleOptions>(arg0: $ParticleType_<T>, arg1: $ParticleProvider$Sprite_<T>): void;
        /**
         * @deprecated
         */
        register<T extends $ParticleOptions>(arg0: $ParticleType_<T>, arg1: $ParticleProvider_<T>): void;
        destroy(arg0: $BlockPos_, arg1: $BlockState_): void;
        close(): void;
        tick(): void;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        setLevel(arg0: $ClientLevel): void;
        /**
         * @deprecated
         */
        render(arg0: $LightTexture, arg1: $Camera, arg2: number): void;
        render(arg0: $LightTexture, arg1: $Camera, arg2: number, arg3: $Frustum, arg4: $Predicate_<$ParticleRenderType>): void;
        redirect$gdo000$chloride$redirect$particleRegistry(arg0: $Registry<any>, arg1: $Object): $ResourceLocation;
        handler$zca000$sodium_extra$addBlockBreakParticles(arg0: $BlockPos_, arg1: $BlockState_, arg2: $CallbackInfo): void;
        addBlockHitEffects(arg0: $BlockPos_, arg1: $BlockHitResult): void;
        countParticles(): string;
        iterateParticles(arg0: $Consumer_<$Particle>): void;
        createParticle(arg0: $ParticleOptions_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): $Particle;
        createTrackingEmitter(arg0: $Entity, arg1: $ParticleOptions_, arg2: number): void;
        createTrackingEmitter(arg0: $Entity, arg1: $ParticleOptions_): void;
        crack(arg0: $BlockPos_, arg1: $Direction_): void;
        handler$zca000$sodium_extra$addBlockBreakingParticles(arg0: $BlockPos_, arg1: $Direction_, arg2: $CallbackInfo): void;
        registerMutableSprite(arg0: $DeferredHolder<any, any>, arg1: $ParticleEngine$SpriteParticleRegistration_<any>): void;
        handler$gdo000$chloride$inject$create(arg0: $ParticleOptions_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $CallbackInfoReturnable<any>): void;
        handler$gdo000$chloride$inject$crack(arg0: $BlockPos_, arg1: $Direction_, arg2: $CallbackInfo): void;
        handler$zca000$sodium_extra$addParticle(arg0: $ParticleOptions_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $CallbackInfoReturnable<any>): void;
        handler$gdo000$chloride$inject$destroy(arg0: $BlockPos_, arg1: $BlockState_, arg2: $CallbackInfo): void;
        getName(): string;
        ponder$getProviders(): $Map<$ResourceLocation, $ParticleProvider<never>>;
        textureAtlas: $TextureAtlas;
        constructor(arg0: $ClientLevel, arg1: $TextureManager);
        set level(value: $ClientLevel);
        get name(): string;
    }
    export class $DripParticle$DripLandParticle extends $DripParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $TrialSpawnerDetectionParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $RisingParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $FlyTowardsPositionParticle extends $TextureSheetParticle {
        getLightColor(arg0: number): number;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $SnowflakeParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $SonicBoomParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $MobAppearanceParticle extends $Particle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $HugeExplosionParticle extends $TextureSheetParticle {
        getLightColor(arg0: number): number;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $VibrationSignalParticle$Provider implements $ParticleProvider<$VibrationParticleOption> {
        createParticle(arg0: $VibrationParticleOption, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $BreakingItemParticle$CobwebProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor();
    }
    export class $SuspendedTownParticle$EggCrackProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $DragonBreathParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SquidInkParticle extends $SimpleAnimatedParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $ShriekParticle extends $TextureSheetParticle {
        getLightColor(arg0: number): number;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $HugeExplosionSeedParticle extends $NoRenderParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $TextureSheetParticle extends $SingleQuadParticle {
        pickSprite(arg0: $SpriteSet): void;
        setSpriteFromAge(arg0: $SpriteSet): void;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        set spriteFromAge(value: $SpriteSet);
    }
    export class $DustColorTransitionParticle$Provider implements $ParticleProvider<$DustColorTransitionOptions> {
        createParticle(arg0: $DustColorTransitionOptions, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $AttackSweepParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SculkChargeParticle extends $TextureSheetParticle {
        getLightColor(arg0: number): number;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $SuspendedTownParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SnowflakeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $FireworkParticles$FlashProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $TerrainParticle$Provider implements $ParticleProvider<$BlockParticleOption> {
        createParticle(arg0: $BlockParticleOption, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor();
    }
    export class $PlayerCloudParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $GlowParticle$ElectricSparkProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SoulParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $DripParticle$HoneyFallAndLandParticle extends $DripParticle$FallAndLandParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $AttackSweepParticle extends $TextureSheetParticle {
        getLightColor(arg0: number): number;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $WakeParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $HeartParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
}
