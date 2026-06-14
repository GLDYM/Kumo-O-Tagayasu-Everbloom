import { $DoubleConsumer_ } from "@package/java/util/function";
import { $Layout } from "@package/net/minecraft/client/gui/layouts";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $WidgetTooltipHolder, $Renderable, $AbstractScrollWidget } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $Options } from "@package/net/minecraft/client";
import { $Record } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $Font } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/screens/telemetry" {
    export class $TelemetryInfoScreen extends $Screen {
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
        constructor(arg0: $Screen, arg1: $Options);
    }
    export class $TelemetryEventWidget extends $AbstractScrollWidget {
        updateLayout(): void;
        setOnScrolledListener(arg0: $DoubleConsumer_): void;
        onOptInChanged(arg0: boolean): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Font);
        set onScrolledListener(value: $DoubleConsumer_);
    }
    export class $TelemetryEventWidget$ContentBuilder {
    }
    export class $TelemetryEventWidget$Content extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $TelemetryEventWidget$Content}.
     */
    export type $TelemetryEventWidget$Content_ = { container?: $Layout, narration?: $Component_,  } | [container?: $Layout, narration?: $Component_, ];
}
