import { $List_ } from "@package/java/util";
import { $Runnable_ } from "@package/java/lang";
import { $LLMMessage_ } from "@package/com/github/tartaricacid/touhoulittlemaid/ai/service/llm";
import { $MaidAIChatManager } from "@package/com/github/tartaricacid/touhoulittlemaid/ai/manager/entity";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/ai/manager/entity/summary" {
    export class $HistorySummaryManager {
        tryCompressBeforeChat(arg0: $Runnable_): boolean;
        appendSummaryMessage(arg0: $List_<$LLMMessage_>): void;
        completeHistorySummary(arg0: string, arg1: $List_<$LLMMessage_>): boolean;
        stopHistorySummary(): void;
        constructor(arg0: $MaidAIChatManager);
    }
}
