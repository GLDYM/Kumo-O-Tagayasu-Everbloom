import { $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ConfigurableCommunicateData } from "@package/studio/fantasyit/maid_storage_manager/communicate/data";
import { $Enum } from "@package/java/lang";
import { $UUID_, $UUID, $Map_, $Map } from "@package/java/util";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $CommunicateRequest, $CommunicateRequest_ } from "@package/studio/fantasyit/maid_storage_manager/api/communicate/data";

declare module "@package/studio/fantasyit/maid_storage_manager/api/event" {
    export class $CollectCommunicateDataEvent extends $Event implements $IModBusEvent {
        register(arg0: $ResourceLocation_, arg1: $ConfigurableCommunicateData): void;
        register(arg0: $ResourceLocation_, arg1: $Component_, arg2: $ConfigurableCommunicateData): void;
        getData(): $Map<$ResourceLocation, $ConfigurableCommunicateData>;
        getTranslations(): $Map<$ResourceLocation, $Component>;
        constructor(arg0: $Map_<$ResourceLocation_, $ConfigurableCommunicateData>, arg1: $Map_<$ResourceLocation_, $Component_>);
        get data(): $Map<$ResourceLocation, $ConfigurableCommunicateData>;
        get translations(): $Map<$ResourceLocation, $Component>;
    }
    export class $CommunicateFinishEvent extends $Event {
        request: $CommunicateRequest;
        constructor(arg0: $CommunicateRequest_);
    }
    export class $RequestListStatusChangeEvent extends $Event {
        getStatus(): $RequestListStatusChangeEvent$Status;
        getItemStack(): $ItemStack;
        getMaid(): $EntityMaid;
        getTaskUUID(): $UUID;
        getVirtualSource(): string;
        constructor(arg0: $RequestListStatusChangeEvent$Status_, arg1: $EntityMaid, arg2: $UUID_, arg3: $ItemStack_);
        get status(): $RequestListStatusChangeEvent$Status;
        get itemStack(): $ItemStack;
        get maid(): $EntityMaid;
        get taskUUID(): $UUID;
        get virtualSource(): string;
    }
    export class $RequestListStatusChangeEvent$Status extends $Enum<$RequestListStatusChangeEvent$Status> {
        static values(): $RequestListStatusChangeEvent$Status[];
        static valueOf(arg0: string): $RequestListStatusChangeEvent$Status;
        static START: $RequestListStatusChangeEvent$Status;
        static END: $RequestListStatusChangeEvent$Status;
    }
    /**
     * Values that may be interpreted as {@link $RequestListStatusChangeEvent$Status}.
     */
    export type $RequestListStatusChangeEvent$Status_ = "start" | "end";
}
