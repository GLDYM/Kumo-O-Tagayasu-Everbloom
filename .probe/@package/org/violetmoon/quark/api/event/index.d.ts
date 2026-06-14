import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $EquipmentSlot, $Entity, $EquipmentSlot_ } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Enum } from "@package/java/lang";
import { $Set_, $Set } from "@package/java/util";

declare module "@package/org/violetmoon/quark/api/event" {
    export class $QuarkModuleEvent extends $Event implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        eventName: string;
        constructor(arg0: string);
    }
    export class $UsageTickerEvent$GetCount extends $UsageTickerEvent {
        getResultCount(): number;
        setResultCount(arg0: number): void;
        currentRealStack: $ItemStack;
        pass: $UsageTickerEvent$Pass;
        currentCount: number;
        slot: $EquipmentSlot;
        currentStack: $ItemStack;
        player: $Player;
        constructor(arg0: $EquipmentSlot_, arg1: $ItemStack_, arg2: $ItemStack_, arg3: number, arg4: boolean, arg5: $Player);
    }
    export class $UsageTickerEvent$GetStack extends $UsageTickerEvent {
        setResultStack(arg0: $ItemStack_): void;
        getResultStack(): $ItemStack;
        currentRealStack: $ItemStack;
        pass: $UsageTickerEvent$Pass;
        currentCount: number;
        slot: $EquipmentSlot;
        currentStack: $ItemStack;
        player: $Player;
        constructor(arg0: $EquipmentSlot_, arg1: $ItemStack_, arg2: $ItemStack_, arg3: number, arg4: boolean, arg5: $Player);
    }
    export class $GatherToolClassesEvent extends $Event {
        stack: $ItemStack;
        classes: $Set<string>;
        constructor(arg0: $ItemStack_, arg1: $Set_<string>);
    }
    export class $SimpleHarvestEvent$ActionType extends $Enum<$SimpleHarvestEvent$ActionType> {
        static values(): $SimpleHarvestEvent$ActionType[];
        static valueOf(arg0: string): $SimpleHarvestEvent$ActionType;
        static CLICK: $SimpleHarvestEvent$ActionType;
        static NONE: $SimpleHarvestEvent$ActionType;
        static HARVEST: $SimpleHarvestEvent$ActionType;
    }
    /**
     * Values that may be interpreted as {@link $SimpleHarvestEvent$ActionType}.
     */
    export type $SimpleHarvestEvent$ActionType_ = "none" | "click" | "harvest";
    export class $ModuleStateChangedEvent extends $QuarkModuleEvent {
        eventName: string;
        enabled: boolean;
        constructor(arg0: string, arg1: boolean);
    }
    export class $ModuleLoadedEvent extends $QuarkModuleEvent {
        eventName: string;
        constructor(arg0: string);
    }
    export class $SimpleHarvestEvent extends $Event implements $ICancellableEvent {
        getAction(): $SimpleHarvestEvent$ActionType;
        setAction(arg0: $SimpleHarvestEvent$ActionType_): void;
        getTargetPos(): $BlockPos;
        setCanceled(arg0: boolean): void;
        setTargetPos(arg0: $BlockPos_): void;
        isCanceled(): boolean;
        blockState: $BlockState;
        pos: $BlockPos;
        level: $Level;
        entity: $Entity;
        hand: $InteractionHand;
        constructor(arg0: $BlockState_, arg1: $BlockPos_, arg2: $Level_, arg3: $InteractionHand_, arg4: $Entity, arg5: $SimpleHarvestEvent$ActionType_);
    }
    export class $UsageTickerEvent$Pass extends $Enum<$UsageTickerEvent$Pass> {
        static values(): $UsageTickerEvent$Pass[];
        static valueOf(arg0: string): $UsageTickerEvent$Pass;
        static RENDERING: $UsageTickerEvent$Pass;
        static LOGICAL: $UsageTickerEvent$Pass;
    }
    /**
     * Values that may be interpreted as {@link $UsageTickerEvent$Pass}.
     */
    export type $UsageTickerEvent$Pass_ = "logical" | "rendering";
    export class $UsageTickerEvent extends $Event implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        currentRealStack: $ItemStack;
        pass: $UsageTickerEvent$Pass;
        currentCount: number;
        slot: $EquipmentSlot;
        currentStack: $ItemStack;
        player: $Player;
        constructor(arg0: $EquipmentSlot_, arg1: $ItemStack_, arg2: $ItemStack_, arg3: number, arg4: boolean, arg5: $Player);
    }
}
