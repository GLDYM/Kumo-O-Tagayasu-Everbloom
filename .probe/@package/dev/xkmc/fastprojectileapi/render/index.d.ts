import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $SimplifiedProjectile } from "@package/dev/xkmc/fastprojectileapi/entity";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $List_ } from "@package/java/util";
import { $Comparable } from "@package/java/lang";

declare module "@package/dev/xkmc/fastprojectileapi/render" {
    export class $ProjTypeHolder<T extends $RenderableProjectileType<T, I>, I> implements $Consumer<I> {
        static wrap<T extends $RenderableProjectileType<T, I>, I>(arg0: T): $ProjTypeHolder<T, I>;
        static setup(): void;
        accept(arg0: I): void;
        create(arg0: $ProjectileRenderer<never>, arg1: $SimplifiedProjectile, arg2: $PoseStack, arg3: number): void;
        andThen(arg0: $Consumer_<I>): $Consumer<I>;
    }
    export class $RenderableProjectileType<T extends $RenderableProjectileType<T, I>, I> {
    }
    export interface $RenderableProjectileType<T extends $RenderableProjectileType<T, I>, I> extends $Comparable<$RenderableProjectileType<never, never>> {
        compareTo(arg0: $RenderableProjectileType<never, never>): number;
        start(arg0: $MultiBufferSource_, arg1: $List_<I>): void;
        create(arg0: $Consumer_<I>, arg1: $ProjectileRenderer<never>, arg2: $SimplifiedProjectile, arg3: $PoseStack, arg4: number): void;
        order(): number;
    }
}
