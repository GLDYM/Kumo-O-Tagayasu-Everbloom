import { $Level } from "@package/net/minecraft/world/level";
import { $ResourceLocation_, $ResourceKey_ } from "@package/net/minecraft/resources";

declare module "@package/com/github/yimeng261/maidspell/dimension/accessor" {
    export class $MinecraftServerAccessor {
    }
    export interface $MinecraftServerAccessor {
        maidspell$createWorld(arg0: $ResourceKey_<$Level>, arg1: $ResourceLocation_): boolean;
        maidspell$removeWorld(arg0: $ResourceKey_<$Level>): void;
    }
}
