import { $FlywheelAccessibleKineticNetwork } from "@package/com/kipti/bnb/mixin_accessor";
import { $KineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Map } from "@package/java/util";
export * as base from "@package/com/simibubi/create/content/kinetics/base";
export * as fan from "@package/com/simibubi/create/content/kinetics/fan";
export * as transmission from "@package/com/simibubi/create/content/kinetics/transmission";
export * as belt from "@package/com/simibubi/create/content/kinetics/belt";
export * as mechanicalArm from "@package/com/simibubi/create/content/kinetics/mechanicalArm";
export * as deployer from "@package/com/simibubi/create/content/kinetics/deployer";

declare module "@package/com/simibubi/create/content/kinetics" {
    export class $KineticNetwork implements $FlywheelAccessibleKineticNetwork {
        remove(arg0: $KineticBlockEntity): void;
        add(arg0: $KineticBlockEntity): void;
        getSize(): number;
        sync(): void;
        updateNetwork(): void;
        addSilently(arg0: $KineticBlockEntity, arg1: number, arg2: number): void;
        calculateCapacity(): number;
        initFromTE(arg0: number, arg1: number, arg2: number): void;
        updateStress(): void;
        updateCapacityFor(arg0: $KineticBlockEntity, arg1: number): void;
        updateStressFor(arg0: $KineticBlockEntity, arg1: number): void;
        handler$cia000$bits_n_bobs$updateNetworkHead(arg0: $CallbackInfo): void;
        bits_n_bobs$updateFlywheelStresses(): void;
        bits_n_bobs$getFlywheelStressReleaseCapacity(): number;
        bits_n_bobs$getFlywheelStressAbsoptionCapacity(): number;
        getActualCapacityOf(arg0: $KineticBlockEntity): number;
        handler$cia000$bits_n_bobs$remove(arg0: $KineticBlockEntity, arg1: $CallbackInfo): void;
        handler$cia000$bits_n_bobs$add(arg0: $KineticBlockEntity, arg1: $CallbackInfo): void;
        handler$cia000$bits_n_bobs$addSilently(arg0: $KineticBlockEntity, arg1: number, arg2: number, arg3: $CallbackInfo): void;
        calculateStress(): number;
        getActualStressOf(arg0: $KineticBlockEntity): number;
        updateCapacity(): void;
        sources: $Map<$KineticBlockEntity, number>;
        members: $Map<$KineticBlockEntity, number>;
        initialized: boolean;
        id: number;
        constructor();
        get size(): number;
    }
}
