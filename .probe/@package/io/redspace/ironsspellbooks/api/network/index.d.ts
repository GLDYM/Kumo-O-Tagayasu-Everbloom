import { $FriendlyByteBuf } from "@package/net/minecraft/network";

declare module "@package/io/redspace/ironsspellbooks/api/network" {
    export class $ISerializable {
    }
    export interface $ISerializable {
        writeToBuffer(arg0: $FriendlyByteBuf): void;
        readFromBuffer(arg0: $FriendlyByteBuf): void;
    }
}
