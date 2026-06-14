import { $Holder_ } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/github/ysbbbbbb/kaleidoscopecookery/crafting/output" {
    export class $RandomOutput extends $Record {
        stack(): $ItemStack;
        isEmpty(): boolean;
        chance(): number;
        static CODEC: $Codec<$RandomOutput>;
        static EMPTY: $RandomOutput;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $RandomOutput>;
        constructor(arg0: $Holder_<$Item>, arg1: number, arg2: $DataComponentPatch_, arg3: number);
        constructor(stack: $ItemStack_, chance: number);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RandomOutput}.
     */
    export type $RandomOutput_ = { stack?: $ItemStack_, chance?: number,  } | [stack?: $ItemStack_, chance?: number, ];
}
