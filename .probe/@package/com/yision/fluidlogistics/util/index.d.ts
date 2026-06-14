
declare module "@package/com/yision/fluidlogistics/util" {
    export class $IFluidPromiseLimit {
    }
    export interface $IFluidPromiseLimit {
        fluidlogistics$setPromiseLimit(arg0: number): void;
        fluidlogistics$getPromiseLimit(): number;
        fluidlogistics$hasPromiseLimit(): boolean;
    }
    export class $IFluidRestockThreshold {
    }
    export interface $IFluidRestockThreshold {
        fluidlogistics$setRestockThreshold(arg0: number): void;
        fluidlogistics$getRestockThreshold(): number;
    }
    export class $IFluidAdditionalStock {
    }
    export interface $IFluidAdditionalStock {
        fluidlogistics$setAdditionalStock(arg0: number): void;
        fluidlogistics$getRemainingAdditionalStock(): number;
        fluidlogistics$getAdditionalStock(): number;
        fluidlogistics$hasAdditionalStock(): boolean;
    }
}
