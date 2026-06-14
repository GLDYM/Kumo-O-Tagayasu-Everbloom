import { $ConfigUiHint } from "@package/cc/sighs/oelib/config/ui";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";

declare module "@package/cc/sighs/oelib/config/model" {
    export class $ConfigValueMeta {
        static builder(key: string): $ConfigValueMeta$Builder;
        key(): string;
        comment(): (string) | undefined;
        hidden(): boolean;
        translationKey(): (string) | undefined;
        tooltip(): (string) | undefined;
        uiHint(): ($ConfigUiHint) | undefined;
    }
    export class $ConfigSide extends $Enum<$ConfigSide> {
        static values(): $ConfigSide[];
        static valueOf(name: string): $ConfigSide;
        static SERVER: $ConfigSide;
        static CLIENT: $ConfigSide;
    }
    /**
     * Values that may be interpreted as {@link $ConfigSide}.
     */
    export type $ConfigSide_ = "client" | "server";
    export class $ConfigStorageFormat extends $Enum<$ConfigStorageFormat> {
        static values(): $ConfigStorageFormat[];
        static valueOf(name: string): $ConfigStorageFormat;
        static JSON5: $ConfigStorageFormat;
        static JSON: $ConfigStorageFormat;
        static TOML: $ConfigStorageFormat;
    }
    /**
     * Values that may be interpreted as {@link $ConfigStorageFormat}.
     */
    export type $ConfigStorageFormat_ = "json" | "json5" | "toml";
    export class $ConfigValueMeta$Builder {
        comment(comment: string): $ConfigValueMeta$Builder;
        build(): $ConfigValueMeta;
        hidden(hidden: boolean): $ConfigValueMeta$Builder;
        translationKey(translationKey: string): $ConfigValueMeta$Builder;
        tooltip(tooltip: string): $ConfigValueMeta$Builder;
        uiHint(uiHint: $ConfigUiHint): $ConfigValueMeta$Builder;
    }
    export class $ConfigMeta$Builder {
        fileName(fileName: string): $ConfigMeta$Builder;
        format(format: $ConfigStorageFormat_): $ConfigMeta$Builder;
        directory(directory: string): $ConfigMeta$Builder;
        build(): $ConfigMeta;
        side(side: $ConfigSide_): $ConfigMeta$Builder;
    }
    export class $ConfigMeta {
        fileName(): string;
        format(): $ConfigStorageFormat;
        static builder(id: $ResourceLocation_): $ConfigMeta$Builder;
        directory(): string;
        id(): $ResourceLocation;
        side(): $ConfigSide;
    }
}
