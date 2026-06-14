import { $ItemStack } from "@package/net/minecraft/world/item";

declare module "@package/studio/fantasyit/maid_storage_manager/integration/kubejs/wrapped/item" {
    export class $KJSItemPair {
        stack: $ItemStack;
        count: number;
    }
}
