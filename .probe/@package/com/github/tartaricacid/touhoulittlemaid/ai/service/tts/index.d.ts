import { $ServiceType, $Client, $Site } from "@package/com/github/tartaricacid/touhoulittlemaid/ai/service";
import { $TTSSiteFormLayout } from "@package/com/github/tartaricacid/touhoulittlemaid/client/gui/entity/maid/ai/layout";
import { $Path_ } from "@package/java/nio/file";
import { $HttpClient } from "@package/java/net/http";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/ai/service/tts" {
    export class $TTSSite {
        static writeSites(arg0: $Path_, arg1: $Map_<string, $TTSSite>): void;
        static readSites(arg0: $Path_): $Map<string, $TTSSite>;
        static TTS_HTTP_CLIENT: $HttpClient;
    }
    export interface $TTSSite extends $Site {
        getServiceType(): $ServiceType;
        formLayout(): $TTSSiteFormLayout;
        client(): $Client;
        get serviceType(): $ServiceType;
    }
}
