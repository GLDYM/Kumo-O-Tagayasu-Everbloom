import { $Item_ } from "@package/net/minecraft/world/item";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Set_ } from "@package/java/util";
import { $Villager } from "@package/net/minecraft/world/entity/npc";

declare module "@package/cn/mcmod_mmf/mmlib/mixin" {
    export class $VillagerInvoker {
    }
    export interface $VillagerInvoker {
        hungryInvoker(): boolean;
        countFoodPointsInInventoryInvoker(): number;
    }
    export class $TradeWithVillagerInvoker {
        static throwHalfStackInvoker(arg0: $Villager, arg1: $Set_<$Item_>, arg2: $LivingEntity): void;
    }
    export interface $TradeWithVillagerInvoker {
    }
}
