import { $List_, $List } from "@package/java/util";

declare module "@package/cc/sighs/oelib/config/ui" {
    export class $ConfigUiHint {
        type(): $ConfigUiType;
        min(): number;
        max(): number;
        options(): $List<string>;
        step(): number;
        static text(): $ConfigUiHint;
        static toggle(): $ConfigUiHint;
        tooltip(): string;
        withTooltip(tooltip: string): $ConfigUiHint;
        static slider(min: number, max: number, step: number): $ConfigUiHint;
        static dropdown(options: $List_<string>): $ConfigUiHint;
    }
}
