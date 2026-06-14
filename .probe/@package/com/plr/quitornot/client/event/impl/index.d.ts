import { $Button } from "@package/net/minecraft/client/gui/components";
import { $CancelableEvent } from "@package/com/plr/quitornot/client/event/api";

declare module "@package/com/plr/quitornot/client/event/impl" {
    export class $ClientScheduleStopEvent extends $CancelableEvent {
        constructor();
    }
    export class $ButtonPressEvent extends $CancelableEvent {
        getButton(): $Button;
        constructor(arg0: $Button);
        get button(): $Button;
    }
}
