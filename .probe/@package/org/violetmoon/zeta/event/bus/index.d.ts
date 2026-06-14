import { $Annotation } from "@package/java/lang/annotation";
import { $Logger } from "@package/org/apache/logging/log4j";
import { $Object, $Class } from "@package/java/lang";
import { $Zeta } from "@package/org/violetmoon/zeta";

declare module "@package/org/violetmoon/zeta/event/bus" {
    export class $ZetaEventBus<E> {
        subscribe(arg0: $Object): $ZetaEventBus<E>;
        unsubscribe(arg0: $Object): $ZetaEventBus<E>;
        fire<T extends E>(arg0: T): T;
        fire<T extends E>(arg0: T, arg1: $Class<T>): T;
        /**
         * @deprecated
         */
        fireExternal<T extends E>(arg0: T, arg1: $Class<T>): T;
        constructor(arg0: $Class<$Annotation>, arg1: $Class<E>, arg2: $Logger, arg3: $Zeta);
    }
    export class $IZetaLoadEvent {
    }
    export interface $IZetaLoadEvent {
    }
    export class $IZetaPlayEvent {
    }
    export interface $IZetaPlayEvent {
    }
}
