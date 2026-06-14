import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $UseOnContextAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Vec3, $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/item/context" {
    export class $BlockPlaceContext extends $UseOnContext {
        static at(arg0: $BlockPlaceContext, arg1: $BlockPos_, arg2: $Direction_): $BlockPlaceContext;
        getNearestLookingVerticalDirection(): $Direction;
        canPlace(): boolean;
        getNearestLookingDirections(): $Direction[];
        getNearestLookingDirection(): $Direction;
        replacingClickedOnBlock(): boolean;
        handler$gop000$moonlight$fixNotAccountingForNullPlayer3(arg0: $CallbackInfoReturnable<any>): void;
        handler$gop000$moonlight$fixNotAccountingForNullPlayer2(arg0: $CallbackInfoReturnable<any>): void;
        handler$gop000$moonlight$fixNotAccountingForNullPlayer1(arg0: $CallbackInfoReturnable<any>): void;
        constructor(arg0: $Level_, arg1: $Player, arg2: $InteractionHand_, arg3: $ItemStack_, arg4: $BlockHitResult);
        constructor(arg0: $UseOnContext);
        constructor(arg0: $Player, arg1: $InteractionHand_, arg2: $ItemStack_, arg3: $BlockHitResult);
        get nearestLookingVerticalDirection(): $Direction;
        get nearestLookingDirections(): $Direction[];
        get nearestLookingDirection(): $Direction;
    }
    export class $DirectionalPlaceContext extends $BlockPlaceContext {
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $ItemStack_, arg4: $Direction_);
    }
    export class $UseOnContext implements $UseOnContextAccessor {
        getLevel(): $Level;
        getHand(): $InteractionHand;
        getItemInHand(): $ItemStack;
        getClickedPos(): $BlockPos;
        getClickedFace(): $Direction;
        getRotation(): number;
        isInside(): boolean;
        getClickLocation(): $Vec3;
        getHorizontalDirection(): $Direction;
        getPlayer(): $Player;
        isSecondaryUseActive(): boolean;
        getHitResult(): $BlockHitResult;
        create$getHitResult(): $BlockHitResult;
        constructor(arg0: $Player, arg1: $InteractionHand_, arg2: $BlockHitResult);
        constructor(arg0: $Level_, arg1: $Player, arg2: $InteractionHand_, arg3: $ItemStack_, arg4: $BlockHitResult);
        get level(): $Level;
        get hand(): $InteractionHand;
        get itemInHand(): $ItemStack;
        get clickedPos(): $BlockPos;
        get clickedFace(): $Direction;
        get rotation(): number;
        get inside(): boolean;
        get clickLocation(): $Vec3;
        get horizontalDirection(): $Direction;
        get player(): $Player;
        get secondaryUseActive(): boolean;
        get hitResult(): $BlockHitResult;
    }
}
