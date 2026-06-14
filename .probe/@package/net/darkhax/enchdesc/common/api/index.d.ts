import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";

declare module "@package/net/darkhax/enchdesc/common/api" {
    export class $ContextProvider {
    }
    export interface $ContextProvider {
        enchdesc$getStack(): $ItemStack;
        enchdesc$setStack(arg0: $ItemStack_): void;
    }
}
