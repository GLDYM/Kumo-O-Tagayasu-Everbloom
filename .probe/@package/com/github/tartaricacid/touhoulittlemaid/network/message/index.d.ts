import { $MobEffectInstance } from "@package/net/minecraft/world/effect";
import { $Record } from "@package/java/lang";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/network/message" {
    export class $SendEffectPackage$EffectData extends $Record {
        duration(): number;
        category(): number;
        descriptionId(): string;
        amplifier(): number;
        constructor(arg0: $MobEffectInstance);
        constructor(descriptionId: string, amplifier: number, duration: number, category: number);
    }
    /**
     * Values that may be interpreted as {@link $SendEffectPackage$EffectData}.
     */
    export type $SendEffectPackage$EffectData_ = { category?: number, descriptionId?: string, amplifier?: number, duration?: number,  } | [category?: number, descriptionId?: string, amplifier?: number, duration?: number, ];
}
