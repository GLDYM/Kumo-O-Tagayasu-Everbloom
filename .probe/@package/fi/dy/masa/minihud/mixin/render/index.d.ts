
declare module "@package/fi/dy/masa/minihud/mixin/render" {
    export class $IMixinBufferBuilder {
    }
    export interface $IMixinBufferBuilder {
        minihud_isBuilding(): boolean;
        minihud_getVertexCount(): number;
        minihud_getVertexPointer(): number;
    }
    export class $IMixinWorldRenderer {
    }
    export interface $IMixinWorldRenderer {
        minihud_getRenderedChunksInvoker(): number;
    }
    /**
     * Values that may be interpreted as {@link $IMixinWorldRenderer}.
     */
    export type $IMixinWorldRenderer_ = (() => number);
}
