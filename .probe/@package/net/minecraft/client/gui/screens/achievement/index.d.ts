import { $Function_, $ToLongFunction_, $ToIntFunction_, $ToDoubleFunction_ } from "@package/java/util/function";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ObjectSelectionList$Entry, $WidgetTooltipHolder, $ObjectSelectionList, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Font } from "@package/net/minecraft/client/gui";
import { $Comparator, $List } from "@package/java/util";
import { $Comparable } from "@package/java/lang";
import { $StatsCounter } from "@package/net/minecraft/stats";

declare module "@package/net/minecraft/client/gui/screens/achievement" {
    export class $StatsScreen extends $Screen {
        initLists(): void;
        onStatsUpdated(): void;
        setActiveList(arg0: $ObjectSelectionList<never>): void;
        initButtons(): void;
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
        constructor(arg0: $Screen, arg1: $StatsCounter);
        set activeList(value: $ObjectSelectionList<never>);
    }
    export class $StatsScreen$ItemStatisticsList extends $ObjectSelectionList<$StatsScreen$ItemStatisticsList$ItemRow> {
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        itemHeight: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        hovered: $StatsScreen$ItemStatisticsList$ItemRow;
        height: number;
    }
    export class $StatsScreen$GeneralStatisticsList extends $ObjectSelectionList<$StatsScreen$GeneralStatisticsList$Entry> {
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        itemHeight: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        hovered: $StatsScreen$GeneralStatisticsList$Entry;
        height: number;
    }
    export class $StatsScreen$GeneralStatisticsList$Entry extends $ObjectSelectionList$Entry<$StatsScreen$GeneralStatisticsList$Entry> {
    }
    export class $StatsScreen$ItemStatisticsList$ItemRow extends $ObjectSelectionList$Entry<$StatsScreen$ItemStatisticsList$ItemRow> {
    }
    export class $StatsScreen$MobsStatisticsList$MobRow extends $ObjectSelectionList$Entry<$StatsScreen$MobsStatisticsList$MobRow> {
    }
    export class $StatsScreen$ItemStatisticsList$ItemRowComparator implements $Comparator<$StatsScreen$ItemStatisticsList$ItemRow> {
        reversed(): $Comparator<$StatsScreen$ItemStatisticsList$ItemRow>;
        thenComparing<U>(arg0: $Function_<$StatsScreen$ItemStatisticsList$ItemRow, U>, arg1: $Comparator<U>): $Comparator<$StatsScreen$ItemStatisticsList$ItemRow>;
        thenComparing(arg0: $Comparator<$StatsScreen$ItemStatisticsList$ItemRow>): $Comparator<$StatsScreen$ItemStatisticsList$ItemRow>;
        thenComparing<U extends $Comparable<U>>(arg0: $Function_<$StatsScreen$ItemStatisticsList$ItemRow, U>): $Comparator<$StatsScreen$ItemStatisticsList$ItemRow>;
        thenComparingInt(arg0: $ToIntFunction_<$StatsScreen$ItemStatisticsList$ItemRow>): $Comparator<$StatsScreen$ItemStatisticsList$ItemRow>;
        thenComparingLong(arg0: $ToLongFunction_<$StatsScreen$ItemStatisticsList$ItemRow>): $Comparator<$StatsScreen$ItemStatisticsList$ItemRow>;
        thenComparingDouble(arg0: $ToDoubleFunction_<$StatsScreen$ItemStatisticsList$ItemRow>): $Comparator<$StatsScreen$ItemStatisticsList$ItemRow>;
    }
    export class $StatsScreen$MobsStatisticsList extends $ObjectSelectionList<$StatsScreen$MobsStatisticsList$MobRow> {
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        itemHeight: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        hovered: $StatsScreen$MobsStatisticsList$MobRow;
        height: number;
    }
}
