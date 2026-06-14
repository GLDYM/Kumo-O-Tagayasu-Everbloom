import { $Gson } from "@package/com/google/gson";
import { $ToIntFunction } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $HttpResponse } from "@package/java/net/http";
import { $Enum } from "@package/java/lang";
import { $Comparator, $Map } from "@package/java/util";
export * as llm from "@package/com/github/tartaricacid/touhoulittlemaid/ai/service/llm";
export * as tts from "@package/com/github/tartaricacid/touhoulittlemaid/ai/service/tts";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/ai/service" {
    export class $Client {
        static GSON: $Gson;
    }
    export interface $Client {
        isSuccessful(arg0: $HttpResponse<never>): boolean;
        shouldStopChat(arg0: $EntityMaid): boolean;
    }
    export class $ServiceType extends $Enum<$ServiceType> {
        static values(): $ServiceType[];
        static valueOf(arg0: string): $ServiceType;
        static STT: $ServiceType;
        static TTS: $ServiceType;
        static LLM: $ServiceType;
    }
    /**
     * Values that may be interpreted as {@link $ServiceType}.
     */
    export type $ServiceType_ = "llm" | "stt" | "tts";
    export class $SerializableSite<T extends $Site> {
        static defaultIcon(arg0: string): $ResourceLocation;
    }
    export interface $SerializableSite<T extends $Site> {
        defaultSite(): T;
        codec(): $Codec<T>;
        fromNetwork(arg0: $FriendlyByteBuf): T;
        writeToNetwork(arg0: T, arg1: $FriendlyByteBuf): void;
    }
    export class $Site {
        static FIXED_ORDER_FIELDS: $ToIntFunction<string>;
        static HOT_WORD: string;
        static SECRET_ID: string;
        static SECRET_KEY: string;
        static KEY_COMPARATOR: $Comparator<string>;
        static API_TYPE: string;
        static URL: string;
        static ENG_SER_VICE_TYPE: string;
        static SITE_MODEL: string;
        static HEADERS: string;
        static MODELS: string;
        static ENABLED: string;
        static ID: string;
        static ICON: string;
        static HAS_THINKING_FIELD: string;
    }
    export interface $Site {
        url(): string;
        id(): string;
        enabled(): boolean;
        getNameKey(): string;
        serializer(): $SerializableSite<$Site>;
        client(): $Client;
        headers(): $Map<string, string>;
        getServiceType(): $ServiceType;
        getApiType(): string;
        icon(): $ResourceLocation;
        setEnabled(arg0: boolean): void;
        get nameKey(): string;
        get serviceType(): $ServiceType;
        get apiType(): string;
    }
}
