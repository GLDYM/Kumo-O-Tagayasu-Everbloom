import { $ListTag_ } from "@package/net/minecraft/nbt";
import { $ArmInteractionPoint } from "@package/com/simibubi/create/content/kinetics/mechanicalArm";
import { $List } from "@package/java/util";

declare module "@package/com/yision/fluidlogistics/mixin/accessor" {
    export class $ArmBlockEntityAccessor {
    }
    export interface $ArmBlockEntityAccessor {
        getInputs(): $List<$ArmInteractionPoint>;
        getOutputs(): $List<$ArmInteractionPoint>;
        setUpdateInteractionPoints(arg0: boolean): void;
        setInteractionPointTag(arg0: $ListTag_): void;
        get inputs(): $List<$ArmInteractionPoint>;
        get outputs(): $List<$ArmInteractionPoint>;
        set updateInteractionPoints(value: boolean);
        set interactionPointTag(value: $ListTag_);
    }
}
