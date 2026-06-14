import { $LayoutElement } from "@package/net/minecraft/client/gui/layouts";
import { $List_, $List } from "@package/java/util";

declare module "@package/io/github/satxm/mcwifipnp/mixin" {
    export class $AccessorGridLayout {
    }
    export interface $AccessorGridLayout {
        getChildren(): $List<$LayoutElement>;
        get children(): $List<$LayoutElement>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorGridLayout}.
     */
    export type $AccessorGridLayout_ = (() => $List_<$LayoutElement>);
    export class $PlayerListAccessor {
    }
    export interface $PlayerListAccessor {
        setMaxPlayers(arg0: number): void;
        set maxPlayers(value: number);
    }
    /**
     * Values that may be interpreted as {@link $PlayerListAccessor}.
     */
    export type $PlayerListAccessor_ = ((arg0: number) => void);
}
