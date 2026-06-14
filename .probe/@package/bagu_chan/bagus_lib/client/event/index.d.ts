import { $EntityModel } from "@package/net/minecraft/client/model";
import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $Event } from "@package/net/neoforged/bus/api";
import { $IRootModel } from "@package/bagu_chan/bagus_lib/api/client";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";

declare module "@package/bagu_chan/bagus_lib/client/event" {
    export class $BagusModelEvent extends $Event {
        getModel(): $EntityModel<any>;
        getEntity(): $Entity;
        isSupportedAnimateModel(): boolean;
        getRootModel(): $IRootModel;
        getPartialTick(): number;
        constructor(arg0: $LivingEntity, arg1: $EntityModel<any>, arg2: number);
        get model(): $EntityModel<any>;
        get entity(): $Entity;
        get supportedAnimateModel(): boolean;
        get rootModel(): $IRootModel;
        get partialTick(): number;
    }
    export class $BagusModelEvent$FirstPersonArmAnimate extends $BagusModelEvent {
        getPoseStack(): $PoseStack;
        getArm(): $InteractionHand;
        getAgeInTick(): number;
        constructor(arg0: $LivingEntity, arg1: $EntityModel<any>, arg2: number, arg3: $InteractionHand_, arg4: $PoseStack);
        get poseStack(): $PoseStack;
        get arm(): $InteractionHand;
        get ageInTick(): number;
    }
    export class $BagusModelEvent$Scale extends $BagusModelEvent {
        getPoseStack(): $PoseStack;
        constructor(arg0: $LivingEntity, arg1: $EntityModel<any>, arg2: number, arg3: $PoseStack);
        get poseStack(): $PoseStack;
    }
    export class $BagusModelEvent$Init extends $BagusModelEvent {
        constructor(arg0: $LivingEntity, arg1: $EntityModel<any>, arg2: number);
    }
    export class $BagusModelEvent$PreAnimate extends $BagusModelEvent {
        getAgeInTick(): number;
        constructor(arg0: $LivingEntity, arg1: $EntityModel<any>, arg2: number);
        get ageInTick(): number;
    }
    export class $BagusModelEvent$PostAnimate extends $BagusModelEvent {
        getAgeInTick(): number;
        constructor(arg0: $LivingEntity, arg1: $EntityModel<any>, arg2: number);
        get ageInTick(): number;
    }
}
