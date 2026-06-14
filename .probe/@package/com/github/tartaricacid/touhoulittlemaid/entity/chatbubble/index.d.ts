import { $ObjectIterator } from "@package/it/unimi/dsi/fastutil/objects";
import { $LongSortedSet, $Long2ObjectSortedMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $IChatBubbleRenderer, $IChatBubbleRenderer$Position_ } from "@package/com/github/tartaricacid/touhoulittlemaid/client/renderer/entity/chatbubble";
import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/entity/chatbubble" {
    export class $ChatBubbleDataCollection extends $Record {
        remove(arg0: number): void;
        size(): number;
        get(arg0: number): $IChatBubbleData;
        put(arg0: number, arg1: $IChatBubbleData): void;
        update(): boolean;
        isEmpty(): boolean;
        add(arg0: $IChatBubbleData): number;
        iterator(): $ObjectIterator<$IChatBubbleData>;
        containsKey(arg0: number): boolean;
        keySet(): $LongSortedSet;
        getFirst(): $IChatBubbleData;
        getLast(): $IChatBubbleData;
        static getEmptyCollection(): $ChatBubbleDataCollection;
        chatBubbles(): $Long2ObjectSortedMap<$IChatBubbleData>;
        static MAX_SIZE: number;
        constructor(chatBubbles: $Long2ObjectSortedMap<$IChatBubbleData>);
        get empty(): boolean;
        get first(): $IChatBubbleData;
        get last(): $IChatBubbleData;
        static get emptyCollection(): $ChatBubbleDataCollection;
    }
    /**
     * Values that may be interpreted as {@link $ChatBubbleDataCollection}.
     */
    export type $ChatBubbleDataCollection_ = { chatBubbles?: $Long2ObjectSortedMap<$IChatBubbleData>,  } | [chatBubbles?: $Long2ObjectSortedMap<$IChatBubbleData>, ];
    export class $ChatBubbleManager {
        tick(): void;
        addLLMChatText(arg0: string, arg1: number): void;
        removeChatBubble(arg0: number): void;
        addThinkingText(arg0: string, arg1: $Component_): number;
        addThinkingText(arg0: string): number;
        addChatBubble(arg0: $IChatBubbleData): number;
        getChatBubbleDataCollection(): $ChatBubbleDataCollection;
        refreshThinkingText(arg0: string, arg1: number, arg2: $Component_): number;
        addTextChatBubbleIfTimeout(arg0: string, arg1: number): number;
        getChatBubble(arg0: number): $IChatBubbleData;
        addTextChatBubble(arg0: string): number;
        forceUpdateChatBubble(): void;
        constructor(arg0: $EntityMaid);
        get chatBubbleDataCollection(): $ChatBubbleDataCollection;
    }
    export class $IChatBubbleData {
        static DEFAULT_PRIORITY: number;
        static DEFAULT_EXIST_TICK: number;
        static TYPE_1: $ResourceLocation;
        static TYPE_2: $ResourceLocation;
    }
    export interface $IChatBubbleData {
        priority(): number;
        id(): $ResourceLocation;
        getRenderer(arg0: $IChatBubbleRenderer$Position_): $IChatBubbleRenderer;
        existTick(): number;
    }
}
