import { $Sniffer } from "@package/net/minecraft/world/entity/animal/sniffer";
import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Event } from "@package/net/neoforged/bus/api";
import { $List_, $List } from "@package/java/util";

declare module "@package/com/renyigesai/immortalers_delight/api/event" {
    export class $SnifferDropSeedEvent extends $Event {
        getStacks(): $List<$ItemStack>;
        getLevel(): $Level;
        getBlockPos(): $BlockPos;
        setStacks(arg0: $List_<$ItemStack_>): void;
        getSniffer(): $Sniffer;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $List_<$ItemStack_>);
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $List_<$ItemStack_>, arg3: $Sniffer);
        get level(): $Level;
        get blockPos(): $BlockPos;
        get sniffer(): $Sniffer;
    }
}
