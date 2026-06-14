import { $ExtraData } from "@package/io/github/mortuusars/exposure/util";
import { $CaptureParameters, $CaptureParameters_ } from "@package/io/github/mortuusars/exposure/world/camera/capture";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Frame_, $Frame } from "@package/io/github/mortuusars/exposure/world/camera/frame";
import { $CameraHolder } from "@package/io/github/mortuusars/exposure/world/entity";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $List, $List_ } from "@package/java/util";

declare module "@package/io/github/mortuusars/exposure/neoforge/api/event" {
    export class $FrameAddedEvent extends $Event {
        getFrame(): $Frame;
        getCameraHolder(): $CameraHolder;
        getEntitiesInFrame(): $List<$LivingEntity>;
        getCamera(): $ItemStack;
        getPositionsInFrame(): $List<$BlockPos>;
        getCameraHolderEntity(): $Entity;
        constructor(cameraHolder: $CameraHolder, camera: $ItemStack_, frame: $Frame_, positionsInFrame: $List_<$BlockPos_>, entitiesInFrame: $List_<$LivingEntity>);
        get frame(): $Frame;
        get cameraHolder(): $CameraHolder;
        get entitiesInFrame(): $List<$LivingEntity>;
        get camera(): $ItemStack;
        get positionsInFrame(): $List<$BlockPos>;
        get cameraHolderEntity(): $Entity;
    }
    export class $ModifyFrameExtraDataEvent extends $Event {
        getData(): $ExtraData;
        getCameraHolder(): $CameraHolder;
        getEntitiesInFrame(): $List<$LivingEntity>;
        getCamera(): $ItemStack;
        getPositionsInFrame(): $List<$BlockPos>;
        getCaptureProperties(): $CaptureParameters;
        getCameraHolderEntity(): $Entity;
        constructor(cameraHolder: $CameraHolder, stack: $ItemStack_, captureParameters: $CaptureParameters_, positionsInFrame: $List_<$BlockPos_>, entitiesInFrame: $List_<$LivingEntity>, data: $ExtraData);
        get data(): $ExtraData;
        get cameraHolder(): $CameraHolder;
        get entitiesInFrame(): $List<$LivingEntity>;
        get camera(): $ItemStack;
        get positionsInFrame(): $List<$BlockPos>;
        get captureProperties(): $CaptureParameters;
        get cameraHolderEntity(): $Entity;
    }
    export class $ModifyEntityInFrameDataEvent extends $Event {
        getData(): $ExtraData;
        getCameraHolder(): $CameraHolder;
        getEntityInFrame(): $LivingEntity;
        getCamera(): $ItemStack;
        getCameraHolderEntity(): $Entity;
        constructor(cameraHolder: $CameraHolder, camera: $ItemStack_, entityInFrame: $LivingEntity, data: $ExtraData);
        get data(): $ExtraData;
        get cameraHolder(): $CameraHolder;
        get entityInFrame(): $LivingEntity;
        get camera(): $ItemStack;
        get cameraHolderEntity(): $Entity;
    }
}
