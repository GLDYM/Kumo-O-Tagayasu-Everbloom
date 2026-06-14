import { $List_, $List } from "@package/java/util";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/ai/manager/setting/bean" {
    export class $MetaData {
        getLanguage(): string;
        setLanguage(arg0: string): void;
        getVersion(): number;
        setVersion(arg0: number): void;
        getAuthor(): string;
        setAuthor(arg0: string): void;
        getModelId(): $List<string>;
        setModel_id(arg0: $List_<string>): void;
        constructor();
        constructor(arg0: number, arg1: string, arg2: $List_<string>, arg3: string);
        get modelId(): $List<string>;
        set model_id(value: $List_<string>);
    }
}
