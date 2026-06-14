import { $Codec } from "@package/com/mojang/serialization";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/ai/service/llm/openai/response" {
    export class $FunctionToolCall {
        getName(): string;
        getArguments(): string;
        static CODEC: $Codec<$FunctionToolCall>;
        constructor(arg0: string, arg1: string);
        get name(): string;
        get arguments(): string;
    }
    export class $ToolCall {
        getId(): string;
        getType(): string;
        getFunction(): $FunctionToolCall;
        static CODEC: $Codec<$ToolCall>;
        constructor(arg0: string, arg1: $FunctionToolCall);
        get id(): string;
        get type(): string;
        get function(): $FunctionToolCall;
    }
}
