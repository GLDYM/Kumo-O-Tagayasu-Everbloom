import { $Event } from "@package/net/neoforged/bus/api";
import { $CookedFoodData_, $CookedFoodData } from "@package/dev/xkmc/cuisinedelight/content/logic";
import { $Player } from "@package/net/minecraft/world/entity/player";

declare module "@package/dev/xkmc/cuisinedelight/events" {
    export class $FoodEatenEvent extends $Event {
        data: $CookedFoodData;
        player: $Player;
        constructor(arg0: $Player, arg1: $CookedFoodData_);
    }
}
