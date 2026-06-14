import { $Supplier_ } from "@package/java/util/function";
import { $SampleStorage } from "@package/net/minecraft/util/debugchart";
import { $GuiGraphics, $Font } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/components/debugchart" {
    export class $BandwidthDebugChart extends $AbstractDebugChart {
        constructor(arg0: $Font, arg1: $SampleStorage);
    }
    export class $AbstractDebugChart {
        getWidth(arg0: number): number;
        drawChart(arg0: $GuiGraphics, arg1: number, arg2: number): void;
    }
    export class $FpsDebugChart extends $AbstractDebugChart {
        constructor(arg0: $Font, arg1: $SampleStorage);
    }
    export class $TpsDebugChart extends $AbstractDebugChart {
        constructor(arg0: $Font, arg1: $SampleStorage, arg2: $Supplier_<number>);
    }
    export class $PingDebugChart extends $AbstractDebugChart {
        constructor(arg0: $Font, arg1: $SampleStorage);
    }
}
