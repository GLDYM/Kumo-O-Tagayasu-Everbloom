
declare module "@package/fi/dy/masa/minihud/mixin/client" {
    export class $IMixinOptions {
    }
    export interface $IMixinOptions {
        minihud_getServerRenderDistance(): number;
    }
    /**
     * Values that may be interpreted as {@link $IMixinOptions}.
     */
    export type $IMixinOptions_ = (() => number);
}
