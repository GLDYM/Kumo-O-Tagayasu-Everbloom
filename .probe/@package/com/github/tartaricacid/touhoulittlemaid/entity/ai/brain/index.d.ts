import { $EntityDataSerializer } from "@package/net/minecraft/network/syncher";
import { $IntFunction } from "@package/java/util/function";
import { $Enum } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/entity/ai/brain" {
    export class $MaidSchedule extends $Enum<$MaidSchedule> {
        static values(): $MaidSchedule[];
        static valueOf(arg0: string): $MaidSchedule;
        static ALL: $MaidSchedule;
        static NIGHT: $MaidSchedule;
        static DATA: $EntityDataSerializer<$MaidSchedule>;
        static BY_ID: $IntFunction<$MaidSchedule>;
        static DAY: $MaidSchedule;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $MaidSchedule>;
    }
    /**
     * Values that may be interpreted as {@link $MaidSchedule}.
     */
    export type $MaidSchedule_ = "day" | "night" | "all";
}
