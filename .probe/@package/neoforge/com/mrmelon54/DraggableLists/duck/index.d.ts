import { $ServerData } from "@package/net/minecraft/client/multiplayer";
import { $ServerSelectionList$OnlineServerEntry } from "@package/net/minecraft/client/gui/screens/multiplayer";
import { $DragItem } from "@package/neoforge/com/mrmelon54/DraggableLists";

declare module "@package/neoforge/com/mrmelon54/DraggableLists/duck" {
    export class $ResourcePackOrganizerDuckProvider {
    }
    export interface $ResourcePackOrganizerDuckProvider {
        draggable_lists$updateSelectedList(): void;
    }
    /**
     * Values that may be interpreted as {@link $ResourcePackOrganizerDuckProvider}.
     */
    export type $ResourcePackOrganizerDuckProvider_ = (() => void);
    export class $AbstractPackDuckProvider {
    }
    export interface $AbstractPackDuckProvider {
        draggable_lists$moveTo(arg0: number): void;
    }
    /**
     * Values that may be interpreted as {@link $AbstractPackDuckProvider}.
     */
    export type $AbstractPackDuckProvider_ = ((arg0: number) => void);
    export class $ServerListDuckProvider {
    }
    export interface $ServerListDuckProvider {
        draggable_lists$moveItem(arg0: $DragItem<$ServerData, $ServerSelectionList$OnlineServerEntry>, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ServerListDuckProvider}.
     */
    export type $ServerListDuckProvider_ = ((arg0: $DragItem<$ServerData, $ServerSelectionList$OnlineServerEntry>, arg1: number) => void);
}
