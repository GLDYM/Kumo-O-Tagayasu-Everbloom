import { $AIChatSettingsTTSSiteScreen, $AIChatSettingsHubScreen } from "@package/com/github/tartaricacid/touhoulittlemaid/client/gui/entity/maid/ai/settings";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component } from "@package/net/minecraft/network/chat";
import { $TTSSite } from "@package/com/github/tartaricacid/touhoulittlemaid/ai/service/tts";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $Font } from "@package/net/minecraft/client/gui";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/client/gui/entity/maid/ai/editor" {
    export class $TTSSiteEditorScreen extends $Screen {
        getParentHub(): $AIChatSettingsHubScreen;
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
        constructor(arg0: $AIChatSettingsTTSSiteScreen, arg1: $TTSSite);
        get parentHub(): $AIChatSettingsHubScreen;
    }
}
