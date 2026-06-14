import { $Entity } from "@package/net/minecraft/world/entity";
export * as game from "@package/fi/dy/masa/malilib/util/game";

declare module "@package/fi/dy/masa/malilib/util" {
    export class $IF3KeyStateSetter {
    }
    export interface $IF3KeyStateSetter {
        malilib$setF3KeyState(arg0: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $IF3KeyStateSetter}.
     */
    export type $IF3KeyStateSetter_ = ((arg0: boolean) => void);
    export class $IEntityOwnedInventory {
    }
    export interface $IEntityOwnedInventory {
        malilib$getEntityOwner(): $Entity;
        malilib$setEntityOwner(arg0: $Entity): void;
    }
}
