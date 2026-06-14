import { $Client, $Site, $ServiceType } from "@package/com/github/tartaricacid/touhoulittlemaid/ai/service";
import { $Codec } from "@package/com/mojang/serialization";
import { $Path_ } from "@package/java/nio/file";
import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $HttpClient } from "@package/java/net/http";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $List_, $Map_, $Map } from "@package/java/util";
import { $ToolCall } from "@package/com/github/tartaricacid/touhoulittlemaid/ai/service/llm/openai/response";
export * as openai from "@package/com/github/tartaricacid/touhoulittlemaid/ai/service/llm/openai";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/ai/service/llm" {
    export class $LLMSite {
        static writeSites(arg0: $Path_, arg1: $Map_<string, $LLMSite>): void;
        static readSites(arg0: $Path_): $Map<string, $LLMSite>;
        static LLM_HTTP_CLIENT: $HttpClient;
    }
    export interface $LLMSite extends $Site {
        getServiceType(): $ServiceType;
        client(): $Client;
        get serviceType(): $ServiceType;
    }
    export class $Role extends $Enum<$Role> {
        static values(): $Role[];
        static valueOf(arg0: string): $Role;
        getId(): string;
        static byId(arg0: string): $Role;
        static SYSTEM: $Role;
        static DEVELOPER: $Role;
        static CODEC: $Codec<$Role>;
        static USER: $Role;
        static ASSISTANT: $Role;
        static TOOL: $Role;
        get id(): string;
    }
    /**
     * Values that may be interpreted as {@link $Role}.
     */
    export type $Role_ = "system" | "user" | "assistant" | "tool" | "developer";
    export class $LLMMessage extends $Record {
        message(): string;
        role(): $Role;
        gameTime(): number;
        static assistantChat(arg0: $EntityMaid, arg1: string, arg2: $List_<$ToolCall>): $LLMMessage;
        static assistantChat(arg0: $EntityMaid, arg1: string): $LLMMessage;
        toolCallId(): string;
        static toolChat(arg0: $EntityMaid, arg1: string, arg2: string): $LLMMessage;
        toolCalls(): $List<$ToolCall>;
        static systemChat(arg0: $EntityMaid, arg1: string): $LLMMessage;
        static userChat(arg0: $EntityMaid, arg1: string): $LLMMessage;
        static CODEC: $Codec<$LLMMessage>;
        constructor(arg0: $Role_, arg1: string, arg2: number);
        constructor(role: $Role_, message: string, gameTime: number, toolCalls: $List_<$ToolCall>, toolCallId: string);
    }
    /**
     * Values that may be interpreted as {@link $LLMMessage}.
     */
    export type $LLMMessage_ = { toolCallId?: string, toolCalls?: $List_<$ToolCall>, gameTime?: number, role?: $Role_, message?: string,  } | [toolCallId?: string, toolCalls?: $List_<$ToolCall>, gameTime?: number, role?: $Role_, message?: string, ];
}
