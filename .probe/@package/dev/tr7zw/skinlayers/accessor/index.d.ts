import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $OffsetProvider, $OffsetProvider_, $SkullData, $Mesh, $PlayerData } from "@package/dev/tr7zw/skinlayers/api";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";

declare module "@package/dev/tr7zw/skinlayers/accessor" {
    export class $NativeImageAccessor {
    }
    export interface $NativeImageAccessor {
        skinlayers$isAllocated(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $NativeImageAccessor}.
     */
    export type $NativeImageAccessor_ = (() => boolean);
    export class $SkullModelAccessor {
    }
    export interface $SkullModelAccessor {
        injectHatMesh(arg0: $Mesh): void;
    }
    /**
     * Values that may be interpreted as {@link $SkullModelAccessor}.
     */
    export type $SkullModelAccessor_ = ((arg0: $Mesh) => void);
    export class $HttpTextureAccessor {
    }
    export interface $HttpTextureAccessor {
        getImage(): $NativeImage;
        get image(): $NativeImage;
    }
    /**
     * Values that may be interpreted as {@link $HttpTextureAccessor}.
     */
    export type $HttpTextureAccessor_ = (() => $NativeImage);
    export class $PlayerSettings {
    }
    export interface $PlayerSettings extends $PlayerData {
        setHeadMesh(arg0: $Mesh): void;
        setTorsoMesh(arg0: $Mesh): void;
        setLeftLegMesh(arg0: $Mesh): void;
        setRightLegMesh(arg0: $Mesh): void;
        getCurrentSkin(): $ResourceLocation;
        setThinArms(arg0: boolean): void;
        setCurrentSkin(arg0: $ResourceLocation_): void;
        hasThinArms(): boolean;
        setRightArmMesh(arg0: $Mesh): void;
        setLeftArmMesh(arg0: $Mesh): void;
        clearMeshes(): void;
        set headMesh(value: $Mesh);
        set torsoMesh(value: $Mesh);
        set leftLegMesh(value: $Mesh);
        set rightLegMesh(value: $Mesh);
        set thinArms(value: boolean);
        set rightArmMesh(value: $Mesh);
        set leftArmMesh(value: $Mesh);
    }
    export class $ModelPartInjector {
    }
    export interface $ModelPartInjector {
        setInjectedMesh(arg0: $Mesh, arg1: $OffsetProvider_): void;
        getInjectedMesh(): $Mesh;
        getOffsetProvider(): $OffsetProvider;
        isVisible(): boolean;
        prepareTranslateAndRotate(arg0: $PoseStack): void;
        get offsetProvider(): $OffsetProvider;
        get visible(): boolean;
    }
    export class $PlayerEntityModelAccessor {
    }
    export interface $PlayerEntityModelAccessor {
        hasThinArms(): boolean;
        setIgnored(arg0: boolean): void;
        set ignored(value: boolean);
    }
    export class $SkullSettings {
    }
    export interface $SkullSettings extends $SkullData {
        initialized(): boolean;
        setInitialized(arg0: boolean): void;
        setLastTexture(arg0: $ResourceLocation_): void;
        getHeadLayers(): $Mesh;
        getLastTexture(): $ResourceLocation;
        setupHeadLayers(arg0: $Mesh): void;
        getMesh(): $Mesh;
        get headLayers(): $Mesh;
        set upHeadLayers(value: $Mesh);
        get mesh(): $Mesh;
    }
}
