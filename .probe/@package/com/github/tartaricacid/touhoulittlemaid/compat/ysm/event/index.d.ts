import { $Object2FloatOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $Event } from "@package/net/neoforged/bus/api";
import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/compat/ysm/event" {
    export class $OpenYsmMaidScreenEvent extends $Event {
        getMaid(): $EntityMaid;
        constructor(arg0: $EntityMaid);
        get maid(): $EntityMaid;
    }
    export class $UpdateRemoteStructEvent extends $Event {
        getMaid(): $EntityMaid;
        getRoamingVars(): $Object2FloatOpenHashMap<string>;
        constructor(arg0: $EntityMaid, arg1: $Object2FloatOpenHashMap<string>);
        get maid(): $EntityMaid;
        get roamingVars(): $Object2FloatOpenHashMap<string>;
    }
    export class $YsmMaidClientTickEvent extends $Event {
        getMaid(): $EntityMaid;
        constructor(arg0: $EntityMaid);
        get maid(): $EntityMaid;
    }
}
