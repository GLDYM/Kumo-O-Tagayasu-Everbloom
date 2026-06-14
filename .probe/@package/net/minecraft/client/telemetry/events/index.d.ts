import { $Duration_ } from "@package/java/time";
import { $GameType_ } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $TelemetryProperty_, $TelemetryPropertyMap$Builder, $TelemetryEventSender_ } from "@package/net/minecraft/client/telemetry";
import { $Record } from "@package/java/lang";
import { $Stopwatch } from "@package/com/google/common/base";

declare module "@package/net/minecraft/client/telemetry/events" {
    export class $GameLoadTimesEvent {
        endStep(arg0: $TelemetryProperty_<$GameLoadTimesEvent$Measurement_>): void;
        beginStep(arg0: $TelemetryProperty_<$GameLoadTimesEvent$Measurement_>): void;
        beginStep(arg0: $TelemetryProperty_<$GameLoadTimesEvent$Measurement_>, arg1: $Stopwatch): void;
        send(arg0: $TelemetryEventSender_): void;
        setBootstrapTime(arg0: number): void;
        static INSTANCE: $GameLoadTimesEvent;
        set bootstrapTime(value: number);
    }
    export class $WorldLoadTimesEvent {
        send(arg0: $TelemetryEventSender_): void;
        constructor(arg0: boolean, arg1: $Duration_);
    }
    export class $WorldUnloadEvent {
        setTime(arg0: number): void;
        send(arg0: $TelemetryEventSender_): void;
        onPlayerInfoReceived(): void;
        constructor();
        set time(value: number);
    }
    export class $AggregatedTelemetryEvent {
        start(): void;
        stop(): void;
        tick(arg0: $TelemetryEventSender_): void;
        shouldSentEvent(): boolean;
        shouldTakeSample(): boolean;
        sendEvent(arg0: $TelemetryEventSender_): void;
        takeSample(): void;
        constructor();
    }
    export class $GameLoadTimesEvent$Measurement extends $Record {
        millis(): number;
        static CODEC: $Codec<$GameLoadTimesEvent$Measurement>;
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $GameLoadTimesEvent$Measurement}.
     */
    export type $GameLoadTimesEvent$Measurement_ = { millis?: number,  } | [millis?: number, ];
    export class $PerformanceMetricsEvent extends $AggregatedTelemetryEvent {
        constructor();
    }
    export class $WorldLoadEvent {
        send(arg0: $TelemetryEventSender_): boolean;
        setGameMode(arg0: $GameType_, arg1: boolean): void;
        setServerBrand(arg0: string): void;
        addProperties(arg0: $TelemetryPropertyMap$Builder): void;
        constructor(arg0: string);
        set serverBrand(value: string);
    }
}
