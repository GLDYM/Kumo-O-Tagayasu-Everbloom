import { $Level } from "@package/net/minecraft/world/level";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";

declare module "@package/com/github/yimeng261/maidspell/worldgen/accessor" {
    export class $ChunkGeneratorAccessor {
    }
    export interface $ChunkGeneratorAccessor {
        maidspell$getDimensionKey(): $ResourceKey<$Level>;
        maidspell$setDimensionKey(arg0: $ResourceKey_<$Level>): void;
    }
}
