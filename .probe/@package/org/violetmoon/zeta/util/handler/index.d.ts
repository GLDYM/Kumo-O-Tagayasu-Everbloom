import { $Item, $Item_ } from "@package/net/minecraft/world/item";
import { $ZLoadComplete_ } from "@package/org/violetmoon/zeta/event/load";
import { $ZFurnaceFuelBurnTime } from "@package/org/violetmoon/zeta/event/play";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Map } from "@package/java/util";
import { $Zeta } from "@package/org/violetmoon/zeta";

declare module "@package/org/violetmoon/zeta/util/handler" {
    export class $FuelHandler {
        addWood(arg0: $Block_): void;
        addFuel(arg0: $Block_, arg1: number): void;
        addFuel(arg0: $Item_, arg1: number): void;
        addAllWoods(arg0: $ZLoadComplete_): void;
        getFuel(arg0: $ZFurnaceFuelBurnTime): void;
        fuelValues: $Map<$Item, number>;
        constructor(arg0: $Zeta);
    }
}
