import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $TofunianProfession } from "@package/baguchan/tofucraft/api";
import { $List_, $List } from "@package/java/util";
import { $VillagerTrades$ItemListing_, $VillagerTrades$ItemListing } from "@package/net/minecraft/world/entity/npc";

declare module "@package/baguchan/tofucraft/api/event" {
    export class $TofunianTradeEvent extends $Event {
        getType(): $ResourceKey<$TofunianProfession>;
        getRegistries(): $HolderLookup$Provider;
        getTrades(): $Int2ObjectMap<$List<$VillagerTrades$ItemListing>>;
        constructor(arg0: $Int2ObjectMap<$List_<$VillagerTrades$ItemListing_>>, arg1: $ResourceKey_<$TofunianProfession>, arg2: $HolderLookup$Provider);
        get type(): $ResourceKey<$TofunianProfession>;
        get registries(): $HolderLookup$Provider;
        get trades(): $Int2ObjectMap<$List<$VillagerTrades$ItemListing>>;
    }
    export class $TravelerTofunianTradesEvent extends $Event {
        getRegistries(): $HolderLookup$Provider;
        getSaleTrades(): $List<$VillagerTrades$ItemListing>;
        getBuyTrades(): $List<$VillagerTrades$ItemListing>;
        constructor(arg0: $List_<$VillagerTrades$ItemListing_>, arg1: $List_<$VillagerTrades$ItemListing_>, arg2: $HolderLookup$Provider);
        get registries(): $HolderLookup$Provider;
        get saleTrades(): $List<$VillagerTrades$ItemListing>;
        get buyTrades(): $List<$VillagerTrades$ItemListing>;
    }
}
