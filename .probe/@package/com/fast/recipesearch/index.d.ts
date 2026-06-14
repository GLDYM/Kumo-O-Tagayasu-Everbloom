import { $Int2LongOpenHashMap } from "@package/it/unimi/dsi/fastutil/ints";

declare module "@package/com/fast/recipesearch" {
    export class $IntLongMap extends $Int2LongOpenHashMap {
        add(arg0: number, arg1: number): void;
        putAll(arg0: $IntLongMap): void;
        toIntArray(): number[];
        copyTo(arg0: $IntLongMap): void;
        copyToArray(arg0: number[], arg1: number[]): void;
        static EMPTY: $IntLongMap;
        constructor(arg0: $IntLongMap);
        constructor();
        constructor(arg0: number);
    }
    export class $IntMapContainer {
        match(arg0: $IntLongMap): boolean;
        constructor(arg0: number[]);
    }
}
