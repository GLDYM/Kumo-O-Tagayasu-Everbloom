import { $EntityType } from "@package/net/minecraft/world/entity";

declare module "@package/com/craisinlord/integrated_api/mixins/features" {
    export class $DungeonFeatureAccessor {
        static getMOBS(): $EntityType<never>[];
        static get MOBS(): $EntityType<never>[];
    }
    export interface $DungeonFeatureAccessor {
    }
}
