import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Map } from "@package/java/util";

declare module "@package/fi/dy/masa/tweakeroo/mixin/item" {
    export class $IMixinShovelItem {
        static tweakeroo_getPathStates(): $Map<$Block, $BlockState>;
    }
    export interface $IMixinShovelItem {
    }
    export class $IMixinAxeItem {
        static tweakeroo_getStrippedBlocks(): $Map<$Block, $Block>;
    }
    export interface $IMixinAxeItem {
    }
}
