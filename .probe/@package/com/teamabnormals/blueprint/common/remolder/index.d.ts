import { $PackType_ } from "@package/net/minecraft/server/packs";
import { $Executor_ } from "@package/java/util/concurrent";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Resource, $CloseableResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $List_, $Map_, $Map, $List } from "@package/java/util";

declare module "@package/com/teamabnormals/blueprint/common/remolder" {
    export class $RemolderLoader {
        getResource(arg0: $ResourceLocation_, arg1: ($Resource) | undefined): ($Resource) | undefined;
        listResources(arg0: $Map_<$ResourceLocation_, $Resource>): $Map<$ResourceLocation, $Resource>;
        listResourceStacks(arg0: $Map_<$ResourceLocation_, $List_<$Resource>>): $Map<$ResourceLocation, $List<$Resource>>;
        getResourceStack(arg0: $List_<$Resource>, arg1: $ResourceLocation_): $List<$Resource>;
        reloadRemolders(arg0: $CloseableResourceManager, arg1: $Executor_): void;
        constructor(arg0: $CloseableResourceManager, arg1: $PackType_);
    }
    export class $RemoldableResourceManager {
    }
    export interface $RemoldableResourceManager extends $CloseableResourceManager {
        getRemolderLoader(): $RemolderLoader;
        updateRemolderLoader(arg0: $PackType_): $RemolderLoader;
        get remolderLoader(): $RemolderLoader;
    }
}
