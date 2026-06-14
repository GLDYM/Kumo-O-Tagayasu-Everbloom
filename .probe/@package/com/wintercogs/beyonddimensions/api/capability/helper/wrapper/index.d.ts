import { $ItemStack } from "@package/net/minecraft/world/item";
import { $ResourceLocation } from "@package/net/minecraft/resources";

declare module "@package/com/wintercogs/beyonddimensions/api/capability/helper/wrapper" {
    export class $IStackHandlerWrapper<T> {
    }
    export interface $IStackHandlerWrapper<T> {
        extract(arg0: number, arg1: number, arg2: boolean): number;
        extract(arg0: T, arg1: boolean): number;
        insert(arg0: T, arg1: boolean): number;
        insert(arg0: number, arg1: T, arg2: boolean): number;
        getCapacity(arg0: number): number;
        getContainer(): ($ItemStack) | undefined;
        getSlots(): number;
        getStackInSlot(arg0: number): T;
        getTypeId(): $ResourceLocation;
        isStackValid(arg0: number, arg1: T): boolean;
        get container(): ($ItemStack) | undefined;
        get slots(): number;
        get typeId(): $ResourceLocation;
    }
}
