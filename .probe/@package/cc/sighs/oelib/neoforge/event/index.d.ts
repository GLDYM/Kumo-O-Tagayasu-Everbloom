import { $Event } from "@package/net/neoforged/bus/api";
import { $Class } from "@package/java/lang";

declare module "@package/cc/sighs/oelib/neoforge/event" {
    export class $DataReloadEvent extends $Event {
        isDataType(clazz: $Class<never>): boolean;
        getLoadedCount(): number;
        getDataClass(): $Class<never>;
        getInvalidCount(): number;
        constructor(dataClass: $Class<never>, loadedCount: number, invalidCount: number);
        get loadedCount(): number;
        get dataClass(): $Class<never>;
        get invalidCount(): number;
    }
}
