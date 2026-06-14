import { $Codec } from "@package/com/mojang/serialization";
import { $Component } from "@package/net/minecraft/network/chat";

declare module "@package/com/wintercogs/beyonddimensions/api/longtype" {
    export class $EnergyType extends $LongType<$EnergyType> {
        static CODEC: $Codec<$EnergyType>;
        constructor(arg0: number);
    }
    export class $LongType<T> {
        getName(): $Component;
        isEmpty(): boolean;
        copy(): $LongType<T>;
        grow(arg0: number): void;
        getEmpty(): $LongType<T>;
        shrink(arg0: number): void;
        getStackCount(): number;
        setStackCount(arg0: number): void;
        isSame(arg0: $LongType<never>): boolean;
        copyWithAmount(arg0: number): $LongType<T>;
        constructor();
        get name(): $Component;
    }
}
