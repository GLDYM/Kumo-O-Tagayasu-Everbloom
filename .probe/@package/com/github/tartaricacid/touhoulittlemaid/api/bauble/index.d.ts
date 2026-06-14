import { $IRangedAttackTask } from "@package/com/github/tartaricacid/touhoulittlemaid/api/task";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $MaidMealType_ } from "@package/com/github/tartaricacid/touhoulittlemaid/api/task/meal";
import { $MutableFloat } from "@package/org/apache/commons/lang3/mutable";
import { $Random } from "@package/java/util";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/api/bauble" {
    export class $IMaidBauble {
        static RANDOM: $Random;
    }
    export interface $IMaidBauble {
        /**
         * @deprecated
         */
        getChatBubbleId(): string;
        onTick(arg0: $EntityMaid, arg1: $ItemStack_): void;
        onRangedAttack(arg0: $EntityMaid, arg1: $ItemStack_, arg2: $IRangedAttackTask): void;
        onMeleeAttack(arg0: $EntityMaid, arg1: $ItemStack_, arg2: $Entity): void;
        onDeath(arg0: $EntityMaid, arg1: $ItemStack_, arg2: $DamageSource_): boolean;
        onInjured(arg0: $EntityMaid, arg1: $ItemStack_, arg2: $DamageSource_, arg3: $MutableFloat): boolean;
        onFavorabilityLevelChange(arg0: $EntityMaid, arg1: $ItemStack_, arg2: number, arg3: number): void;
        onPutOn(arg0: $EntityMaid, arg1: $ItemStack_): void;
        onTakeOff(arg0: $EntityMaid, arg1: $ItemStack_): void;
        onMaidEat(arg0: $EntityMaid, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $MaidMealType_): void;
        syncClient(arg0: $EntityMaid, arg1: $ItemStack_): boolean;
        get chatBubbleId(): string;
    }
}
