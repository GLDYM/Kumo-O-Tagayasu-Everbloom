import { $IFluidHandler$FluidAction_, $IFluidHandlerItem, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Predicate_, $Supplier_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SimpleFluidContent, $FluidStack_, $FluidStack, $IFluidTank } from "@package/net/neoforged/neoforge/fluids";
import { $DataComponentType } from "@package/net/minecraft/core/component";

declare module "@package/net/neoforged/neoforge/fluids/capability/templates" {
    export class $FluidHandlerItemStackSimple$SwapEmpty extends $FluidHandlerItemStackSimple {
        constructor(arg0: $Supplier_<$DataComponentType<$SimpleFluidContent>>, arg1: $ItemStack_, arg2: $ItemStack_, arg3: number);
    }
    export class $FluidHandlerItemStack$Consumable extends $FluidHandlerItemStack {
        constructor(arg0: $Supplier_<$DataComponentType<$SimpleFluidContent>>, arg1: $ItemStack_, arg2: number);
    }
    export class $FluidTank implements $IFluidHandler, $IFluidTank {
        isEmpty(): boolean;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        getSpace(): number;
        getCapacity(): number;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        setCapacity(arg0: number): $FluidTank;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        isFluidValid(arg0: $FluidStack_): boolean;
        getTanks(): number;
        setValidator(arg0: $Predicate_<$FluidStack>): $FluidTank;
        getTankCapacity(arg0: number): number;
        getFluid(): $FluidStack;
        writeToNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $CompoundTag;
        getFluidInTank(arg0: number): $FluidStack;
        setFluid(arg0: $FluidStack_): void;
        readFromNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $FluidTank;
        getFluidAmount(): number;
        constructor(arg0: number);
        constructor(arg0: number, arg1: $Predicate_<$FluidStack>);
        get empty(): boolean;
        get space(): number;
        get tanks(): number;
        set validator(value: $Predicate_<$FluidStack>);
        get fluidAmount(): number;
    }
    export class $FluidHandlerItemStack implements $IFluidHandlerItem {
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        getContainer(): $ItemStack;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        getTanks(): number;
        getTankCapacity(arg0: number): number;
        getFluid(): $FluidStack;
        getFluidInTank(arg0: number): $FluidStack;
        canDrainFluidType(arg0: $FluidStack_): boolean;
        canFillFluidType(arg0: $FluidStack_): boolean;
        constructor(arg0: $Supplier_<$DataComponentType<$SimpleFluidContent>>, arg1: $ItemStack_, arg2: number);
        get container(): $ItemStack;
        get tanks(): number;
        get fluid(): $FluidStack;
    }
    export class $FluidHandlerItemStack$SwapEmpty extends $FluidHandlerItemStack {
        constructor(arg0: $Supplier_<$DataComponentType<$SimpleFluidContent>>, arg1: $ItemStack_, arg2: $ItemStack_, arg3: number);
    }
    export class $EmptyFluidHandler implements $IFluidHandler {
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        getTanks(): number;
        getTankCapacity(arg0: number): number;
        getFluidInTank(arg0: number): $FluidStack;
        static INSTANCE: $EmptyFluidHandler;
        get tanks(): number;
    }
    export class $FluidHandlerItemStackSimple implements $IFluidHandlerItem {
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        getContainer(): $ItemStack;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        getTanks(): number;
        getTankCapacity(arg0: number): number;
        getFluid(): $FluidStack;
        getFluidInTank(arg0: number): $FluidStack;
        canDrainFluidType(arg0: $FluidStack_): boolean;
        canFillFluidType(arg0: $FluidStack_): boolean;
        constructor(arg0: $Supplier_<$DataComponentType<$SimpleFluidContent>>, arg1: $ItemStack_, arg2: number);
        get container(): $ItemStack;
        get tanks(): number;
        get fluid(): $FluidStack;
    }
    export class $FluidHandlerItemStackSimple$Consumable extends $FluidHandlerItemStackSimple {
        constructor(arg0: $Supplier_<$DataComponentType<$SimpleFluidContent>>, arg1: $ItemStack_, arg2: number);
    }
    export class $VoidFluidHandler implements $IFluidHandler {
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        getTanks(): number;
        getTankCapacity(arg0: number): number;
        getFluidInTank(arg0: number): $FluidStack;
        static INSTANCE: $VoidFluidHandler;
        constructor();
        get tanks(): number;
    }
}
