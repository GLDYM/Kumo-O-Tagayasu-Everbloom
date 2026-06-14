import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $RawAnimation } from "@package/software/bernie/geckolib/animation";

declare module "@package/io/redspace/ironsspellbooks/api/util" {
    export class $AnimationHolder {
        static pass(): $AnimationHolder;
        static none(): $AnimationHolder;
        getForPlayer(): ($ResourceLocation) | undefined;
        getForMob(): ($RawAnimation) | undefined;
        animatesLegs: boolean;
        isPass: boolean;
        constructor(arg0: $ResourceLocation_, arg1: boolean);
        /**
         * @deprecated
         */
        constructor(arg0: string, arg1: boolean);
        constructor(arg0: $ResourceLocation_, arg1: boolean, arg2: boolean);
        /**
         * @deprecated
         */
        constructor(arg0: string, arg1: boolean, arg2: boolean);
        get forPlayer(): ($ResourceLocation) | undefined;
        get forMob(): ($RawAnimation) | undefined;
    }
}
