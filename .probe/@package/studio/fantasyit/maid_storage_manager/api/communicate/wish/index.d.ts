import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $IActionStep } from "@package/studio/fantasyit/maid_storage_manager/api/communicate/step";
import { $List } from "@package/java/util";
import { $CommunicateWish_ } from "@package/studio/fantasyit/maid_storage_manager/api/communicate/data";

declare module "@package/studio/fantasyit/maid_storage_manager/api/communicate/wish" {
    export class $IActionWish {
    }
    export interface $IActionWish {
        getType(): $ResourceLocation;
        getSteps(arg0: $EntityMaid, arg1: $CommunicateWish_): $List<$IActionStep>;
        get type(): $ResourceLocation;
    }
}
