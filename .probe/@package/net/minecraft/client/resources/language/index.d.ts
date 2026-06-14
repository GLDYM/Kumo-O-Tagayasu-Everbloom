import { $Consumer_ } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Component, $FormattedText } from "@package/net/minecraft/network/chat";
import { $CompletableFuture, $Executor_ } from "@package/java/util/concurrent";
import { $Language } from "@package/net/minecraft/locale";
import { $TranslationStorage } from "@package/com/natamus/collective_common_neoforge/translations";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ResourceManager, $ResourceManagerReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $SortedMap, $List_, $Map_, $Locale, $Map } from "@package/java/util";
import { $Object, $Record } from "@package/java/lang";
import { $FormattedCharSequence } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/client/resources/language" {
    export class $I18n {
        static get(arg0: string, ...arg1: $Object[]): string;
        static exists(arg0: string): boolean;
    }
    export class $LanguageManager implements $ResourceManagerReloadListener {
        getLanguage(arg0: string): $LanguageInfo;
        getSelected(): string;
        onResourceManagerReload(arg0: $ResourceManager): void;
        setSelected(arg0: string): void;
        getLanguages(): $SortedMap<string, $LanguageInfo>;
        getJavaLocale(): $Locale;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        getName(): string;
        constructor(arg0: string, arg1: $Consumer_<$ClientLanguage>);
        get languages(): $SortedMap<string, $LanguageInfo>;
        get javaLocale(): $Locale;
        get name(): string;
    }
    export class $ClientLanguage extends $Language implements $TranslationStorage {
        static loadFrom(arg0: $ResourceManager, arg1: $List_<string>, arg2: boolean): $ClientLanguage;
        handler$ebj000$bookshelf$getOrDefault(arg0: string, arg1: string, arg2: $CallbackInfoReturnable<any>): void;
        collective$mergeTranslations(arg0: $Map_<any, any>): void;
        handler$ebj000$bookshelf$has(arg0: string, arg1: $CallbackInfoReturnable<any>): void;
        handler$fge000$touhou_little_maid$getCustomLanguage(arg0: string, arg1: string, arg2: $CallbackInfoReturnable<any>): void;
        handler$fge000$touhou_little_maid$hasCustomLanguage(arg0: string, arg1: $CallbackInfoReturnable<any>): void;
        storage: $Map<string, string>;
        static DEFAULT: string;
    }
    export class $FormattedBidiReorder {
        static reorder(text: $FormattedText, defaultRtl: boolean): $FormattedCharSequence;
        constructor();
    }
    export class $LanguageInfo extends $Record {
        name(): string;
        region(): string;
        toComponent(): $Component;
        bidirectional(): boolean;
        static CODEC: $Codec<$LanguageInfo>;
        constructor(arg0: string, arg1: string, arg2: boolean);
    }
    /**
     * Values that may be interpreted as {@link $LanguageInfo}.
     */
    export type $LanguageInfo_ = { region?: string, bidirectional?: boolean, name?: string,  } | [region?: string, bidirectional?: boolean, name?: string, ];
}
