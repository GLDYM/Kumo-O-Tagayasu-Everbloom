import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $List } from "@package/java/util";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/client/resource/pojo" {
    export class $IModelInfo {
        static createCacheIconId(arg0: $ResourceLocation_): $ResourceLocation;
    }
    export interface $IModelInfo {
        getName(): string;
        extra<T extends $IModelInfo>(arg0: $ResourceLocation_, arg1: $ResourceLocation_): T;
        getDescription(): $List<string>;
        getModel(): $ResourceLocation;
        getTexture(): $ResourceLocation;
        decorate<T extends $IModelInfo>(): T;
        getAnimation(): $List<$ResourceLocation>;
        getModelId(): $ResourceLocation;
        getCacheIconId(): $ResourceLocation;
        getExtraTextures(): $List<$ResourceLocation>;
        isGeckoModel(): boolean;
        getRenderItemScale(): number;
        get name(): string;
        get description(): $List<string>;
        get model(): $ResourceLocation;
        get texture(): $ResourceLocation;
        get animation(): $List<$ResourceLocation>;
        get modelId(): $ResourceLocation;
        get cacheIconId(): $ResourceLocation;
        get extraTextures(): $List<$ResourceLocation>;
        get geckoModel(): boolean;
        get renderItemScale(): number;
    }
    export class $MaidModelInfo implements $IModelInfo {
        getName(): string;
        extra(arg0: $ResourceLocation_, arg1: $ResourceLocation_): $MaidModelInfo;
        getDescription(): $List<string>;
        getModel(): $ResourceLocation;
        getTexture(): $ResourceLocation;
        getRenderEntityScale(): number;
        getAnimation(): $List<$ResourceLocation>;
        getModelId(): $ResourceLocation;
        /**
         * @deprecated
         */
        isCanHoldVehicle(): boolean;
        /**
         * @deprecated
         */
        isCanRidingBroom(): boolean;
        /**
         * @deprecated
         */
        isCanHoldTrolley(): boolean;
        getCacheIconId(): $ResourceLocation;
        getUseSoundPackId(): string;
        getExtraTextures(): $List<$ResourceLocation>;
        isGeckoModel(): boolean;
        isShowBackpack(): boolean;
        isShowCustomHead(): boolean;
        getEasterEgg(): $MaidModelInfo$EasterEgg;
        getRenderItemScale(): number;
        /**
         * @deprecated
         */
        isShowHata(): boolean;
        decorate<T extends $IModelInfo>(): T;
        static NORMAL_EGG_NAME: string;
        static ENCRYPT_EGG_NAME: string;
        constructor();
        get name(): string;
        get description(): $List<string>;
        get model(): $ResourceLocation;
        get texture(): $ResourceLocation;
        get renderEntityScale(): number;
        get animation(): $List<$ResourceLocation>;
        get modelId(): $ResourceLocation;
        get canHoldVehicle(): boolean;
        get canRidingBroom(): boolean;
        get canHoldTrolley(): boolean;
        get cacheIconId(): $ResourceLocation;
        get useSoundPackId(): string;
        get extraTextures(): $List<$ResourceLocation>;
        get geckoModel(): boolean;
        get showBackpack(): boolean;
        get showCustomHead(): boolean;
        get easterEgg(): $MaidModelInfo$EasterEgg;
        get renderItemScale(): number;
        get showHata(): boolean;
    }
    export class $MaidModelInfo$EasterEgg {
        getTag(): string;
        isEncrypt(): boolean;
        constructor();
        get tag(): string;
        get encrypt(): boolean;
    }
}
