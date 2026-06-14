import { $Item, $DyeColor, $ItemStack_, $Item$Properties, $DyeColor_ } from "@package/net/minecraft/world/item";
import { $ProjTypeHolder, $RenderableProjectileType } from "@package/dev/xkmc/fastprojectileapi/render";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $DanmakuBullet, $DanmakuLaser } from "@package/dev/xkmc/danmakuapi/api";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Map } from "@package/java/util";

declare module "@package/dev/xkmc/danmakuapi/content/item" {
    export class $DanmakuItem extends $Item {
        getTypeForRender(): $ProjTypeHolder<$RenderableProjectileType<never, never>, never>;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        color: $DyeColor;
        size: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        craftingRemainingItem: $Item;
        type: $DanmakuBullet;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties, arg1: $DanmakuBullet, arg2: $DyeColor_, arg3: number);
        get typeForRender(): $ProjTypeHolder<$RenderableProjectileType<never, never>, never>;
    }
    export class $LaserItem extends $Item {
        getDanmakuColor(arg0: $ItemStack_, arg1: number): number;
        getTypeForRender(): $ProjTypeHolder<$RenderableProjectileType<never, never>, never>;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        color: $DyeColor;
        size: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        craftingRemainingItem: $Item;
        type: $DanmakuLaser;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties, arg1: $DanmakuLaser, arg2: $DyeColor_, arg3: number);
        get typeForRender(): $ProjTypeHolder<$RenderableProjectileType<never, never>, never>;
    }
}
