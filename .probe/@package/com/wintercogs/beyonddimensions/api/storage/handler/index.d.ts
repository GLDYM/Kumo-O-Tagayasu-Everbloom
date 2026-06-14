import { $IStackKey, $KeyAmount } from "@package/com/wintercogs/beyonddimensions/api/storage/key";
import { $List } from "@package/java/util";
export * as impl from "@package/com/wintercogs/beyonddimensions/api/storage/handler/impl";

declare module "@package/com/wintercogs/beyonddimensions/api/storage/handler" {
    export class $IStackHandler {
    }
    export interface $IStackHandler {
        extract(arg0: $IStackKey<never>, arg1: number, arg2: boolean): $KeyAmount;
        extract(arg0: number, arg1: number, arg2: boolean): $KeyAmount;
        extract(arg0: $IStackKey<never>, arg1: number, arg2: boolean, arg3: boolean): $KeyAmount;
        insert(arg0: $IStackKey<never>, arg1: number, arg2: boolean): $KeyAmount;
        insert(arg0: number, arg1: $IStackKey<never>, arg2: number, arg3: boolean): $KeyAmount;
        isEmpty(): boolean;
        onChange(): void;
        getSlots(): number;
        hasStack(arg0: $IStackKey<never>): boolean;
        getStorage(): $List<$KeyAmount>;
        clearStorage(): void;
        getStackBySlot(arg0: number): $KeyAmount;
        getSlotCapacity(arg0: number): number;
        getStackByKey(arg0: $IStackKey<never>): $KeyAmount;
        setStackDirectly(arg0: number, arg1: $IStackKey<never>, arg2: number): void;
        addStackDirectly(arg0: $IStackKey<never>, arg1: number): void;
        isStackValid(arg0: number, arg1: $IStackKey<never>): boolean;
        get empty(): boolean;
        get slots(): number;
        get storage(): $List<$KeyAmount>;
    }
}
