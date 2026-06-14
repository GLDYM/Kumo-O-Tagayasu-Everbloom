import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";

declare module "@package/com/github/yimeng261/maidspell/api/entity" {
    export class $AnchoredEntityMaid {
        static isMaidAnchored(arg0: $EntityMaid): boolean;
    }
    export interface $AnchoredEntityMaid {
        maidSpell$setAnchored(arg0: boolean): void;
        maidSpell$isAnchored(): boolean;
    }
}
