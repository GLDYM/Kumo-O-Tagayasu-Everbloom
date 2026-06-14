import { $Consumer_ } from "@package/java/util/function";
import { $Team } from "@package/dev/ftb/mods/ftbteams/api";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UUID_, $Collection } from "@package/java/util";
import { $Chapter, $QuestLink, $Quest, $TeamData } from "@package/dev/ftb/mods/ftbquests/quest";
export * as event from "@package/dev/ftb/mods/ftbquests/api/event";

declare module "@package/dev/ftb/mods/ftbquests/api" {
    export class $QuestFile {
    }
    export interface $QuestFile {
        canEdit(): boolean;
        getNullableTeamData(arg0: $UUID_): $TeamData;
        getOrCreateTeamData(arg0: $UUID_): $TeamData;
        getOrCreateTeamData(arg0: $Team): $TeamData;
        /**
         * @deprecated
         */
        getOrCreateTeamData(arg0: $Entity): $TeamData;
        forAllQuestLinks(arg0: $Consumer_<$QuestLink>): void;
        forAllChapters(arg0: $Consumer_<$Chapter>): void;
        forAllQuests(arg0: $Consumer_<$Quest>): void;
        getAllTeamData(): $Collection<$TeamData>;
        getTeamData(arg0: $Player): ($TeamData) | undefined;
        isServerSide(): boolean;
        get allTeamData(): $Collection<$TeamData>;
        get serverSide(): boolean;
    }
}
