import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $ParticleEngine$SpriteParticleRegistration_, $ParticleEngine$SpriteParticleRegistration } from "@package/net/minecraft/client/particle";
import { $ParticleType_, $ParticleOptions, $ParticleType } from "@package/net/minecraft/core/particles";

declare module "@package/dev/xylonity/explosiveenhancement/registry" {
    export class $IExplosiveParticleHandler {
    }
    export interface $IExplosiveParticleHandler {
        registerMutableSprite<P extends $ParticleOptions, E extends $ParticleType<P>>(arg0: $DeferredHolder<$ParticleType_<never>, E>, arg1: $ParticleEngine$SpriteParticleRegistration_<P>): void;
    }
    /**
     * Values that may be interpreted as {@link $IExplosiveParticleHandler}.
     */
    export type $IExplosiveParticleHandler_ = ((arg0: $DeferredHolder<$ParticleType<never>, any>, arg1: $ParticleEngine$SpriteParticleRegistration<any>) => void);
}
