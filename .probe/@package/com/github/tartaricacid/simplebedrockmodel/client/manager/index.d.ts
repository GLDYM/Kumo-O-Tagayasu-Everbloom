import { $InputStream } from "@package/java/io";
import { $AbstractBedrockEntityModel } from "@package/com/github/tartaricacid/simplebedrockmodel/client/bedrock";
import { $Function_ } from "@package/java/util/function";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $SimplePreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";

declare module "@package/com/github/tartaricacid/simplebedrockmodel/client/manager" {
    export class $BedrockEntityModelRegisterEvent<T extends $AbstractBedrockEntityModel<$Entity>> extends $Event implements $IModBusEvent, $ICancellableEvent {
        register(arg0: $ResourceLocation_, arg1: $Function_<$InputStream, T>): void;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $BedrockEntityModelSet<T>);
    }
    export class $BedrockEntityModelSet<T extends $AbstractBedrockEntityModel<$Entity>> extends $SimplePreparableReloadListener<void> {
        constructor();
    }
}
