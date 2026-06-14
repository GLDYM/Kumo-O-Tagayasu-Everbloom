import { $DataResult } from "@package/com/mojang/serialization";
import { $HoverEvent$Action } from "@package/net/minecraft/network/chat";

declare module "@package/io/github/kituin/actionlib/mixin" {
    export class $HoverEventAccessor {
        static invokeValidate(arg0: $HoverEvent$Action<never>): $DataResult<$HoverEvent$Action<never>>;
    }
    export interface $HoverEventAccessor {
    }
}
