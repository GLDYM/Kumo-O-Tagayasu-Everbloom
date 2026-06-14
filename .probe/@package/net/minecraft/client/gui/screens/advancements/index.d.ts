import { $AdvancementHolder_, $DisplayInfo, $AdvancementProgress, $AdvancementType_, $AdvancementNode } from "@package/net/minecraft/advancements";
import { $ClientAdvancements, $ClientAdvancements$Listener } from "@package/net/minecraft/client/multiplayer";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Enum, $Record } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/screens/advancements" {
    export class $AdvancementTabType extends $Enum<$AdvancementTabType> {
    }
    /**
     * Values that may be interpreted as {@link $AdvancementTabType}.
     */
    export type $AdvancementTabType_ = "above" | "below" | "left" | "right";
    export class $AdvancementTabType$Sprites extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $AdvancementTabType$Sprites}.
     */
    export type $AdvancementTabType$Sprites_ = { last?: $ResourceLocation_, first?: $ResourceLocation_, middle?: $ResourceLocation_,  } | [last?: $ResourceLocation_, first?: $ResourceLocation_, middle?: $ResourceLocation_, ];
    export class $AdvancementsScreen extends $Screen implements $ClientAdvancements$Listener {
        renderWindow(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        onUpdateAdvancementProgress(arg0: $AdvancementNode, arg1: $AdvancementProgress): void;
        getAdvancementWidget(arg0: $AdvancementNode): $AdvancementWidget;
        onAddAdvancementTask(arg0: $AdvancementNode): void;
        onAddAdvancementRoot(arg0: $AdvancementNode): void;
        onRemoveAdvancementRoot(arg0: $AdvancementNode): void;
        onSelectedTabChanged(arg0: $AdvancementHolder_): void;
        onAdvancementsCleared(): void;
        onRemoveAdvancementTask(arg0: $AdvancementNode): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static WINDOW_INSIDE_HEIGHT: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static WINDOW_HEIGHT: number;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static WINDOW_WIDTH: number;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static WINDOW_INSIDE_WIDTH: number;
        static BACKGROUND_TILE_COUNT_X: number;
        static BACKGROUND_TILE_COUNT_Y: number;
        static BACKGROUND_TILE_WIDTH: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        static BACKGROUND_TILE_HEIGHT: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $ClientAdvancements);
        constructor(arg0: $ClientAdvancements, arg1: $Screen);
    }
    export class $AdvancementWidgetType extends $Enum<$AdvancementWidgetType> {
        static values(): $AdvancementWidgetType[];
        static valueOf(arg0: string): $AdvancementWidgetType;
        boxSprite(): $ResourceLocation;
        frameSprite(arg0: $AdvancementType_): $ResourceLocation;
        static OBTAINED: $AdvancementWidgetType;
        static UNOBTAINED: $AdvancementWidgetType;
    }
    /**
     * Values that may be interpreted as {@link $AdvancementWidgetType}.
     */
    export type $AdvancementWidgetType_ = "obtained" | "unobtained";
    export class $AdvancementTab {
        getType(): $AdvancementTabType;
        static create(arg0: $Minecraft, arg1: $AdvancementsScreen, arg2: number, arg3: $AdvancementNode): $AdvancementTab;
        getIndex(): number;
        getRootNode(): $AdvancementNode;
        drawContents(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        drawTooltips(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getTitle(): $Component;
        isMouseOver(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getScreen(): $AdvancementsScreen;
        getWidget(arg0: $AdvancementHolder_): $AdvancementWidget;
        getDisplay(): $DisplayInfo;
        drawIcon(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        getPage(): number;
        scroll(arg0: number, arg1: number): void;
        drawTab(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: boolean): void;
        addAdvancement(arg0: $AdvancementNode): void;
        constructor(arg0: $Minecraft, arg1: $AdvancementsScreen, arg2: $AdvancementTabType_, arg3: number, arg4: $AdvancementNode, arg5: $DisplayInfo);
        constructor(arg0: $Minecraft, arg1: $AdvancementsScreen, arg2: $AdvancementTabType_, arg3: number, arg4: number, arg5: $AdvancementNode, arg6: $DisplayInfo);
        get type(): $AdvancementTabType;
        get index(): number;
        get rootNode(): $AdvancementNode;
        get title(): $Component;
        get screen(): $AdvancementsScreen;
        get display(): $DisplayInfo;
        get page(): number;
    }
    export class $AdvancementWidget {
        getWidth(): number;
        getY(): number;
        addChild(arg0: $AdvancementWidget): void;
        draw(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        isMouseOver(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getX(): number;
        setProgress(arg0: $AdvancementProgress): void;
        drawHover(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        drawConnectivity(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: boolean): void;
        attachToParent(): void;
        constructor(arg0: $AdvancementTab, arg1: $Minecraft, arg2: $AdvancementNode, arg3: $DisplayInfo);
        get width(): number;
        get y(): number;
        get x(): number;
        set progress(value: $AdvancementProgress);
    }
}
