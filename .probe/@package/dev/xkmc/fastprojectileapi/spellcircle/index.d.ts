import { $ResourceLocation } from "@package/net/minecraft/resources";

declare module "@package/dev/xkmc/fastprojectileapi/spellcircle" {
    export class $SpellCircleHolder {
    }
    export interface $SpellCircleHolder {
        getCircleSize(arg0: number): number;
        getSpellCircle(): $ResourceLocation;
        shouldShowSpellCircle(): boolean;
        get spellCircle(): $ResourceLocation;
    }
}
