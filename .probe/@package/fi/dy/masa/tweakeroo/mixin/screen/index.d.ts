import { $CreateWorldScreen } from "@package/net/minecraft/client/gui/screens/worldselection";

declare module "@package/fi/dy/masa/tweakeroo/mixin/screen" {
    export class $IMixinCustomizeFlatLevelScreen {
    }
    export interface $IMixinCustomizeFlatLevelScreen {
        tweakeroo_getCreateWorldParent(): $CreateWorldScreen;
    }
    /**
     * Values that may be interpreted as {@link $IMixinCustomizeFlatLevelScreen}.
     */
    export type $IMixinCustomizeFlatLevelScreen_ = (() => $CreateWorldScreen);
}
