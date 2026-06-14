import { $IKJSCraftContext } from "@package/studio/fantasyit/maid_storage_manager/integration/kubejs/wrapped/craft/context";

declare module "@package/studio/fantasyit/maid_storage_manager/integration/kubejs/wrapped/craft/contextSupplier" {
    export class $IKJSCraftContextSupplier {
    }
    export interface $IKJSCraftContextSupplier {
        get(): $IKJSCraftContext;
    }
    /**
     * Values that may be interpreted as {@link $IKJSCraftContextSupplier}.
     */
    export type $IKJSCraftContextSupplier_ = (() => $IKJSCraftContext);
}
