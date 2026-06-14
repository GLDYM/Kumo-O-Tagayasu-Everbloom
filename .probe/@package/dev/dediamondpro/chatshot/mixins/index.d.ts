import { $GuiMessage$Line } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";

declare module "@package/dev/dediamondpro/chatshot/mixins" {
    export class $ChatHudAccessor {
    }
    export interface $ChatHudAccessor {
        getMessageIndexA(arg0: number, arg1: number): number;
        getLineHeightA(): number;
        getVisibleMessages(): $List<$GuiMessage$Line>;
        toChatLineYA(arg0: number): number;
        getScrolledLines(): number;
        get lineHeightA(): number;
        get visibleMessages(): $List<$GuiMessage$Line>;
        get scrolledLines(): number;
    }
}
