import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $SignText, $SignBlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/fi/dy/masa/tweakeroo/util" {
    export class $ISignTextAccess {
    }
    export interface $ISignTextAccess {
        getText(arg0: boolean): $SignText;
    }
    /**
     * Values that may be interpreted as {@link $ISignTextAccess}.
     */
    export type $ISignTextAccess_ = ((arg0: boolean) => $SignText);
    export class $IGuiEditSign {
    }
    export interface $IGuiEditSign {
        getTile(): $SignBlockEntity;
        applyText(arg0: $SignText): void;
        get tile(): $SignBlockEntity;
    }
    export class $IDecorationEntity {
    }
    export interface $IDecorationEntity {
        tweakeroo$getAttached(): $BlockPos;
    }
    /**
     * Values that may be interpreted as {@link $IDecorationEntity}.
     */
    export type $IDecorationEntity_ = (() => $BlockPos_);
    export class $IMinecraftClientInvoker {
    }
    export interface $IMinecraftClientInvoker {
        tweakeroo_setItemUseCooldown(arg0: number): void;
        tweakeroo_invokeDoItemUse(): void;
        tweakeroo_invokeDoAttack(): boolean;
    }
}
