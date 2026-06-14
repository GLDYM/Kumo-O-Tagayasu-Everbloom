import { $DoublePredicate_, $Predicate_ } from "@package/java/util/function";
import { $Object2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $Stream } from "@package/java/util/stream";
import { $DynamicOps, $Dynamic, $Codec } from "@package/com/mojang/serialization";
import { $Enum, $Record } from "@package/java/lang";
import { $UUID_, $UUID, $Map } from "@package/java/util";
import { $RandomSource, $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/entity/ai/gossip" {
    export class $GossipContainer$GossipEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $GossipContainer$GossipEntry}.
     */
    export type $GossipContainer$GossipEntry_ = { type?: $GossipType_, value?: number, target?: $UUID_,  } | [type?: $GossipType_, value?: number, target?: $UUID_, ];
    export class $GossipType extends $Enum<$GossipType> implements $StringRepresentable {
        static values(): $GossipType[];
        static valueOf(arg0: string): $GossipType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static MINOR_NEGATIVE: $GossipType;
        static CODEC: $Codec<$GossipType>;
        static MAJOR_NEGATIVE: $GossipType;
        max: number;
        decayPerTransfer: number;
        static MINOR_POSITIVE: $GossipType;
        weight: number;
        decayPerDay: number;
        static TRADING: $GossipType;
        static REPUTATION_CHANGE_PER_EVERLASTING_MEMORY: number;
        static MAJOR_POSITIVE: $GossipType;
        static REPUTATION_CHANGE_PER_EVENT: number;
        id: string;
        static REPUTATION_CHANGE_PER_TRADE: number;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $GossipType}.
     */
    export type $GossipType_ = "major_negative" | "minor_negative" | "minor_positive" | "major_positive" | "trading";
    export class $GossipContainer$EntityGossips {
        remove(arg0: $GossipType_): void;
        isEmpty(): boolean;
        unpack(arg0: $UUID_): $Stream<$GossipContainer$GossipEntry>;
        decay(): void;
        weightedValue(arg0: $Predicate_<$GossipType>): number;
        makeSureValueIsntTooLowOrTooHigh(arg0: $GossipType_): void;
        get empty(): boolean;
    }
    export class $GossipContainer {
        remove(arg0: $UUID_, arg1: $GossipType_, arg2: number): void;
        remove(arg0: $UUID_, arg1: $GossipType_): void;
        remove(arg0: $GossipType_): void;
        update(arg0: $Dynamic<never>): void;
        store<T>(arg0: $DynamicOps<T>): T;
        add(arg0: $UUID_, arg1: $GossipType_, arg2: number): void;
        transferFrom(arg0: $GossipContainer, arg1: $RandomSource, arg2: number): void;
        getReputation(arg0: $UUID_, arg1: $Predicate_<$GossipType>): number;
        decay(): void;
        getGossipEntries(): $Map<$UUID, $Object2IntMap<$GossipType>>;
        getCountForType(arg0: $GossipType_, arg1: $DoublePredicate_): number;
        gossips: $Map<$UUID, $GossipContainer$EntityGossips>;
        static DISCARD_THRESHOLD: number;
        constructor();
        get gossipEntries(): $Map<$UUID, $Object2IntMap<$GossipType>>;
    }
}
