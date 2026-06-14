import { $TTSSiteEditorScreen } from "@package/com/github/tartaricacid/touhoulittlemaid/client/gui/entity/maid/ai/editor";
import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $MutableComponent, $Component } from "@package/net/minecraft/network/chat";
import { $TTSSite } from "@package/com/github/tartaricacid/touhoulittlemaid/ai/service/tts";
import { $Record } from "@package/java/lang";
import { $Map_, $Map, $List } from "@package/java/util";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/client/gui/entity/maid/ai/layout" {
    export class $TTSSiteFormLayout {
        getInitialModels(): $Map<string, string>;
        supportsModelRows(): boolean;
        modelsTitle(): $MutableComponent;
        buildSite(arg0: $Function_<string, string>, arg1: $Map_<string, string>, arg2: $Consumer_<$Component>): $TTSSite;
        getFieldDescriptors(): $List<$FieldDescriptor>;
        extraInit(arg0: number, arg1: number, arg2: number, arg3: $TTSSiteEditorScreen): number;
        get initialModels(): $Map<string, string>;
        get fieldDescriptors(): $List<$FieldDescriptor>;
    }
    export class $FieldDescriptor extends $Record {
        value(): string;
        label(): string;
        secret(): boolean;
        editable(): boolean;
        constructor(label: string, value: string, editable: boolean, secret: boolean);
    }
    /**
     * Values that may be interpreted as {@link $FieldDescriptor}.
     */
    export type $FieldDescriptor_ = { secret?: boolean, value?: string, editable?: boolean, label?: string,  } | [secret?: boolean, value?: string, editable?: boolean, label?: string, ];
}
