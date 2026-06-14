import { $OrderedTextTooltipComponentAccessor } from "@package/dev/emi/emi/mixin/accessor";
import { $IExtendedText$TextAlignment_, $IExtendedText, $IExtendedText$TextAlignment } from "@package/com/anthonyhilyard/iceberg/component";
import { $MultiBufferSource$BufferSource } from "@package/net/minecraft/client/renderer";
import { $AccessClientTextTooltip } from "@package/icyllis/modernui/mc/mixin";
import { $BundleContents } from "@package/net/minecraft/world/item/component";
import { $ClientTextTooltipAccessor } from "@package/dev/obscuria/tooltips/mixin";
import { $ScreenRectangle_ } from "@package/net/minecraft/client/gui/navigation";
import { $List, $List_ } from "@package/java/util";
import { $FormattedCharSequence, $FormattedCharSequence_ } from "@package/net/minecraft/util";
import { $ProfileResult_, $ProfileResult } from "@package/com/mojang/authlib/yggdrasil";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $Enum, $Record } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Vector2ic, $Matrix4f } from "@package/org/joml";

declare module "@package/net/minecraft/client/gui/screens/inventory/tooltip" {
    export class $ClientActivePlayersTooltip$ActivePlayersTooltip extends $Record implements $TooltipComponent {
        profiles(): $List<$ProfileResult>;
        constructor(arg0: $List_<$ProfileResult_>);
    }
    /**
     * Values that may be interpreted as {@link $ClientActivePlayersTooltip$ActivePlayersTooltip}.
     */
    export type $ClientActivePlayersTooltip$ActivePlayersTooltip_ = { profiles?: $List_<$ProfileResult_>,  } | [profiles?: $List_<$ProfileResult_>, ];
    export class $DefaultTooltipPositioner implements $ClientTooltipPositioner {
        positionTooltip(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $Vector2ic;
        static INSTANCE: $ClientTooltipPositioner;
    }
    export class $ClientTooltipPositioner {
    }
    export interface $ClientTooltipPositioner {
        positionTooltip(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $Vector2ic;
    }
    /**
     * Values that may be interpreted as {@link $ClientTooltipPositioner}.
     */
    export type $ClientTooltipPositioner_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) => $Vector2ic);
    export class $ClientBundleTooltip$Texture extends $Enum<$ClientBundleTooltip$Texture> {
    }
    /**
     * Values that may be interpreted as {@link $ClientBundleTooltip$Texture}.
     */
    export type $ClientBundleTooltip$Texture_ = "blocked_slot" | "slot";
    export class $ClientTooltipComponent {
        static create(arg0: $FormattedCharSequence_): $ClientTooltipComponent;
        static create(arg0: $TooltipComponent): $ClientTooltipComponent;
    }
    export interface $ClientTooltipComponent {
        getWidth(arg0: $Font): number;
        renderText(arg0: $Font, arg1: number, arg2: number, arg3: $Matrix4f, arg4: $MultiBufferSource$BufferSource): void;
        renderImage(arg0: $Font, arg1: number, arg2: number, arg3: $GuiGraphics): void;
        getHeight(): number;
        get height(): number;
    }
    export class $BelowOrAboveWidgetTooltipPositioner implements $ClientTooltipPositioner {
        positionTooltip(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $Vector2ic;
        constructor(arg0: $ScreenRectangle_);
    }
    export class $ClientBundleTooltip implements $ClientTooltipComponent {
        getWidth(arg0: $Font): number;
        renderImage(arg0: $Font, arg1: number, arg2: number, arg3: $GuiGraphics): void;
        getHeight(): number;
        renderText(arg0: $Font, arg1: number, arg2: number, arg3: $Matrix4f, arg4: $MultiBufferSource$BufferSource): void;
        constructor(arg0: $BundleContents);
        get height(): number;
    }
    export class $ClientActivePlayersTooltip implements $ClientTooltipComponent {
        getWidth(arg0: $Font): number;
        renderImage(arg0: $Font, arg1: number, arg2: number, arg3: $GuiGraphics): void;
        getHeight(): number;
        renderText(arg0: $Font, arg1: number, arg2: number, arg3: $Matrix4f, arg4: $MultiBufferSource$BufferSource): void;
        constructor(arg0: $ClientActivePlayersTooltip$ActivePlayersTooltip_);
        get height(): number;
    }
    export class $TooltipRenderUtil {
        static renderTooltipBackground(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        static renderTooltipBackground(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        static MOUSE_OFFSET: number;
        static PADDING_LEFT: number;
        static PADDING_RIGHT: number;
        static PADDING_TOP: number;
        static PADDING_BOTTOM: number;
        static BORDER_COLOR_TOP: number;
        static BACKGROUND_COLOR: number;
        static BORDER_COLOR_BOTTOM: number;
        constructor();
    }
    export class $MenuTooltipPositioner implements $ClientTooltipPositioner {
        positionTooltip(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $Vector2ic;
        static MAX_OVERLAP_WITH_WIDGET: number;
        static MAX_DISTANCE_TO_WIDGET: number;
        constructor(arg0: $ScreenRectangle_);
    }
    export class $ClientTextTooltip implements $ClientTooltipComponent, $AccessClientTextTooltip, $OrderedTextTooltipComponentAccessor, $ClientTextTooltipAccessor, $IExtendedText {
        getWidth(arg0: $Font): number;
        getAlignment(): $IExtendedText$TextAlignment;
        renderText(arg0: $Font, arg1: number, arg2: number, arg3: $Matrix4f, arg4: $MultiBufferSource$BufferSource): void;
        getHeight(): number;
        setAlignment(alignment: $IExtendedText$TextAlignment_): void;
        setPadding(left: number, right: number, top: number, bottom: number): void;
        getBottomPadding(): number;
        getRightPadding(): number;
        getLeftPadding(): number;
        getTopPadding(): number;
        renderImage(arg0: $Font, arg1: number, arg2: number, arg3: $GuiGraphics): void;
        setPadding(left: number, right: number): void;
        setPadding(padding: number): void;
        getText(): $FormattedCharSequence;
        text: $FormattedCharSequence;
        constructor(arg0: $FormattedCharSequence_);
        get height(): number;
        get bottomPadding(): number;
        get rightPadding(): number;
        get leftPadding(): number;
        get topPadding(): number;
    }
}
