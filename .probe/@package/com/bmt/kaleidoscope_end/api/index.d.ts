import { $KEEndermiteInfo } from "@package/com/bmt/kaleidoscope_end/common";
import { $Endermite } from "@package/net/minecraft/world/entity/monster";

declare module "@package/com/bmt/kaleidoscope_end/api" {
    export class $IEndermiteExtension {
        static getInfo(arg0: $Endermite): $KEEndermiteInfo;
    }
    export interface $IEndermiteExtension {
        ke$getEndermiteInfo(): $KEEndermiteInfo;
    }
    /**
     * Values that may be interpreted as {@link $IEndermiteExtension}.
     */
    export type $IEndermiteExtension_ = (() => $KEEndermiteInfo);
}
