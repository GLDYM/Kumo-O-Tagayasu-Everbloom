import { $BiConsumer_ } from "@package/java/util/function";
import { $ItemStackHandler } from "@package/net/neoforged/neoforge/items";

declare module "@package/lain/mods/cos/api/inventory" {
    export class $CAStacksBase extends $ItemStackHandler {
        isHidden(arg0: string, arg1: string): boolean;
        setHidden(arg0: string, arg1: string, arg2: boolean): boolean;
        forEachHidden(arg0: $BiConsumer_<string, string>): void;
        isSkinArmor(arg0: number): boolean;
        setSkinArmor(arg0: number, arg1: boolean): void;
        constructor();
        constructor(arg0: number);
    }
}
