import { $HistorySummaryManager } from "@package/com/github/tartaricacid/touhoulittlemaid/ai/manager/entity/summary";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $CappedQueue } from "@package/com/github/tartaricacid/touhoulittlemaid/util";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $TTSSite } from "@package/com/github/tartaricacid/touhoulittlemaid/ai/service/tts";
import { $CharacterSetting } from "@package/com/github/tartaricacid/touhoulittlemaid/ai/manager/setting";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $LLMSite, $LLMMessage } from "@package/com/github/tartaricacid/touhoulittlemaid/ai/service/llm";
import { $ToolCall } from "@package/com/github/tartaricacid/touhoulittlemaid/ai/service/llm/openai/response";
export * as summary from "@package/com/github/tartaricacid/touhoulittlemaid/ai/manager/entity/summary";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/ai/manager/entity" {
    export class $MaidAIChatSerializable {
        decode(arg0: $FriendlyByteBuf): void;
        encode(arg0: $FriendlyByteBuf): void;
        copyFrom(arg0: $MaidAIChatSerializable): void;
        readFromTag(arg0: $CompoundTag_): $CompoundTag;
        writeToTag(arg0: $CompoundTag_): $CompoundTag;
        static isNoTTSSite(arg0: string): boolean;
        ownerName: string;
        llmSite: string;
        ttsLanguage: string;
        ttsSite: string;
        customSetting: string;
        llmModel: string;
        static NO_TTS_SITE: string;
        chatLanguage: string;
        ttsModel: string;
        constructor();
    }
    export class $ChatClientInfo extends $Record {
        name(): string;
        static decode(arg0: $FriendlyByteBuf): $ChatClientInfo;
        encode(arg0: $FriendlyByteBuf): void;
        language(): string;
        description(): $List<string>;
        static fromMaid(arg0: $EntityMaid): $ChatClientInfo;
        constructor(language: string, name: string, description: $List_<string>);
    }
    /**
     * Values that may be interpreted as {@link $ChatClientInfo}.
     */
    export type $ChatClientInfo_ = { description?: $List_<string>, language?: string, name?: string,  } | [description?: $List_<string>, language?: string, name?: string, ];
    export class $MaidAIChatData extends $MaidAIChatSerializable {
        getSetting(): ($CharacterSetting) | undefined;
        getChatLanguage(): string;
        addToolHistory(arg0: string, arg1: string): void;
        getHistory(): $CappedQueue<$LLMMessage>;
        getMaid(): $EntityMaid;
        getLLMSite(): $LLMSite;
        getTTSSite(): $TTSSite;
        getCompressedSummary(): string;
        setCompressedSummary(arg0: string): void;
        hasCompressedSummary(): boolean;
        getLastChatTokenUsage(): number;
        setLastChatTokenUsage(arg0: number): void;
        addAssistantHistory(arg0: string): void;
        addAssistantHistory(arg0: string, arg1: $List_<$ToolCall>): void;
        clearAllChatMemory(): void;
        getTTSLanguage(): string;
        getLLMModel(): string;
        addUserHistory(arg0: string): void;
        getTTSModel(): string;
        ownerName: string;
        historySummaryRunning: boolean;
        llmSite: string;
        ttsLanguage: string;
        ttsSite: string;
        customSetting: string;
        llmModel: string;
        static NO_TTS_SITE: string;
        chatLanguage: string;
        ttsModel: string;
        constructor(arg0: $EntityMaid);
        get setting(): ($CharacterSetting) | undefined;
        get history(): $CappedQueue<$LLMMessage>;
        get maid(): $EntityMaid;
        get LLMSite(): $LLMSite;
        get TTSSite(): $TTSSite;
        get TTSLanguage(): string;
        get LLMModel(): string;
        get TTSModel(): string;
    }
    export class $MaidAIChatManager extends $MaidAIChatData {
        tts(arg0: $TTSSite, arg1: string, arg2: string, arg3: number): void;
        chat(arg0: string, arg1: $ChatClientInfo_, arg2: $ServerPlayer): void;
        getHistorySummaryManager(): $HistorySummaryManager;
        ownerName: string;
        historySummaryRunning: boolean;
        llmSite: string;
        ttsLanguage: string;
        ttsSite: string;
        customSetting: string;
        llmModel: string;
        static NO_TTS_SITE: string;
        chatLanguage: string;
        ttsModel: string;
        constructor(arg0: $EntityMaid);
        get historySummaryManager(): $HistorySummaryManager;
    }
}
