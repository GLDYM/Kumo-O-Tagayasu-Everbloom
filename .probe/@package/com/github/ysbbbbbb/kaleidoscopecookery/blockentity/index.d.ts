import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityType_, $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as kitchen from "@package/com/github/ysbbbbbb/kaleidoscopecookery/blockentity/kitchen";

declare module "@package/com/github/ysbbbbbb/kaleidoscopecookery/blockentity" {
    export class $BaseBlockEntity extends $BlockEntity {
        refresh(): void;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
}
