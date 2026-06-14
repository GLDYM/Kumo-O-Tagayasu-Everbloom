import { $UnaryOperator_ } from "@package/java/util/function";
import { $IElement, $IElement$Align_, $ScreenDirection_ } from "@package/snownee/jade/api/ui";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $List_, $List } from "@package/java/util";
export * as ui from "@package/snownee/jade/api/ui";
export * as config from "@package/snownee/jade/api/config";

declare module "@package/snownee/jade/api" {
    export class $IJadeProvider {
    }
    export interface $IJadeProvider {
        getUid(): $ResourceLocation;
        getDefaultPriority(): number;
        get uid(): $ResourceLocation;
        get defaultPriority(): number;
    }
    /**
     * Values that may be interpreted as {@link $IJadeProvider}.
     */
    export type $IJadeProvider_ = (() => $ResourceLocation_);
    export class $IToggleableProvider {
    }
    export interface $IToggleableProvider extends $IJadeProvider {
        isRequired(): boolean;
        enabledByDefault(): boolean;
        get required(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IToggleableProvider}.
     */
    export type $IToggleableProvider_ = (() => void);
    export class $ITooltip {
    }
    export interface $ITooltip {
        remove(arg0: $ResourceLocation_): boolean;
        size(): number;
        get(arg0: $ResourceLocation_): $List<$IElement>;
        get(arg0: number, arg1: $IElement$Align_): $List<$IElement>;
        append(arg0: $IElement): void;
        append(arg0: number, arg1: $List_<$IElement>): void;
        append(arg0: $Component_, arg1: $ResourceLocation_): void;
        append(arg0: number, arg1: $IElement): void;
        append(arg0: $Component_): void;
        clear(): void;
        isEmpty(): boolean;
        replace(arg0: $ResourceLocation_, arg1: $UnaryOperator_<$List<$List<$IElement>>>): boolean;
        replace(arg0: $ResourceLocation_, arg1: $Component_): boolean;
        add(arg0: $Component_): void;
        add(arg0: $Component_, arg1: $ResourceLocation_): void;
        add(arg0: number, arg1: $Component_): void;
        add(arg0: $List_<$IElement>): void;
        add(arg0: number, arg1: $IElement): void;
        add(arg0: number, arg1: $List_<$IElement>): void;
        add(arg0: number, arg1: $Component_, arg2: $ResourceLocation_): void;
        add(arg0: $IElement): void;
        addAll(arg0: $List_<$Component_>): void;
        getMessage(arg0: $ResourceLocation_): string;
        getMessage(): string;
        setLineMargin(arg0: number, arg1: $ScreenDirection_, arg2: number): void;
        get empty(): boolean;
    }
}
