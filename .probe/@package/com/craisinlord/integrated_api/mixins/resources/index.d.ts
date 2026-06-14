import { $FallbackResourceManager, $FallbackResourceManager$PackEntry, $FallbackResourceManager$PackEntry_ } from "@package/net/minecraft/server/packs/resources";
import { $List_, $Map_, $Map, $List } from "@package/java/util";
import { $LootParams } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/com/craisinlord/integrated_api/mixins/resources" {
    export class $LootContextAccessor {
    }
    export interface $LootContextAccessor {
        getParams(): $LootParams;
        get params(): $LootParams;
    }
    /**
     * Values that may be interpreted as {@link $LootContextAccessor}.
     */
    export type $LootContextAccessor_ = (() => $LootParams);
    export class $ReloadableResourceManagerImplAccessor {
    }
    export interface $ReloadableResourceManagerImplAccessor {
        integratedapi_getNamespacedManagers(): $Map<string, $FallbackResourceManager>;
    }
    /**
     * Values that may be interpreted as {@link $ReloadableResourceManagerImplAccessor}.
     */
    export type $ReloadableResourceManagerImplAccessor_ = (() => $Map_<string, $FallbackResourceManager>);
    export class $NamespaceResourceManagerAccessor {
    }
    export interface $NamespaceResourceManagerAccessor {
        integratedapi_getFallbacks(): $List<$FallbackResourceManager$PackEntry>;
    }
    /**
     * Values that may be interpreted as {@link $NamespaceResourceManagerAccessor}.
     */
    export type $NamespaceResourceManagerAccessor_ = (() => $List_<$FallbackResourceManager$PackEntry_>);
}
