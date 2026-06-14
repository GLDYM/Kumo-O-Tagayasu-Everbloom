import { $InputStream, $File_ } from "@package/java/io";
import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $MetaData } from "@package/com/github/tartaricacid/touhoulittlemaid/ai/manager/setting/bean";
import { $List } from "@package/java/util";
export * as bean from "@package/com/github/tartaricacid/touhoulittlemaid/ai/manager/setting/bean";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/ai/manager/setting" {
    export class $CharacterSetting {
        save(arg0: $File_): void;
        getSetting(arg0: $EntityMaid, arg1: string): string;
        getAuthor(): string;
        getModelId(): $List<string>;
        constructor(arg0: $InputStream);
        constructor(arg0: $File_);
        constructor(arg0: $MetaData, arg1: string);
        get author(): string;
        get modelId(): $List<string>;
    }
}
