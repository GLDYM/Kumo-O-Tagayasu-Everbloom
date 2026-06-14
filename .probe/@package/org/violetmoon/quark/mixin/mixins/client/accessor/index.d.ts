import { $InteractionResult, $InteractionResult_, $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $EntityRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Screen, $MenuScreens$ScreenConstructor_ } from "@package/net/minecraft/client/gui/screens";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $EntityType, $EntityType_ } from "@package/net/minecraft/world/entity";
import { $BakedModel, $ModelResourceLocation, $ModelResourceLocation_ } from "@package/net/minecraft/client/resources/model";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $MenuType_, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Map_, $Map } from "@package/java/util";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/org/violetmoon/quark/mixin/mixins/client/accessor" {
    export class $AccessorModelManager {
    }
    export interface $AccessorModelManager {
        getBakedRegistry(): $Map<$ModelResourceLocation, $BakedModel>;
        get bakedRegistry(): $Map<$ModelResourceLocation, $BakedModel>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorModelManager}.
     */
    export type $AccessorModelManager_ = (() => $Map_<$ModelResourceLocation_, $BakedModel>);
    export class $AccessorMultiPlayerGameMode {
    }
    export interface $AccessorMultiPlayerGameMode {
        quark$performUseItemOn(arg0: $LocalPlayer, arg1: $InteractionHand_, arg2: $BlockHitResult): $InteractionResult;
    }
    /**
     * Values that may be interpreted as {@link $AccessorMultiPlayerGameMode}.
     */
    export type $AccessorMultiPlayerGameMode_ = ((arg0: $LocalPlayer, arg1: $InteractionHand, arg2: $BlockHitResult) => $InteractionResult_);
    export class $AccessorLevelRenderer {
    }
    export interface $AccessorLevelRenderer {
        getPlayingJukeboxSongs(): $Map<$BlockPos, $SoundInstance>;
        get playingJukeboxSongs(): $Map<$BlockPos, $SoundInstance>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorLevelRenderer}.
     */
    export type $AccessorLevelRenderer_ = (() => $Map_<$BlockPos_, $SoundInstance>);
    export class $AccessorEntityRenderDispatcher {
    }
    export interface $AccessorEntityRenderDispatcher {
        getRenderers(): $Map<$EntityType<never>, $EntityRenderer<never>>;
        get renderers(): $Map<$EntityType<never>, $EntityRenderer<never>>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorEntityRenderDispatcher}.
     */
    export type $AccessorEntityRenderDispatcher_ = (() => $Map_<$EntityType_<never>, $EntityRenderer<never>>);
    export class $AccessorCustomCreativeSlot {
    }
    export interface $AccessorCustomCreativeSlot {
    }
    export class $AccessorMenuScreens {
        static invokeRegister<M extends $AbstractContainerMenu, U extends $Screen>(arg0: $MenuType_<M>, arg1: $MenuScreens$ScreenConstructor_<M, U>): void;
    }
    export interface $AccessorMenuScreens {
    }
}
