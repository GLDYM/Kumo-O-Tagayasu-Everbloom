import { $Event } from "@package/net/neoforged/bus/api";

declare module "@package/com/plr/quitornot/client/event/api" {
    export class $CancelableEvent extends $Event {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor();
    }
}
