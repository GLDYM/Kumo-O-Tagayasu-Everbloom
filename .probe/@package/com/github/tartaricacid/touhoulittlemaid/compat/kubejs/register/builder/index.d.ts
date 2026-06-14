import { $WalkToLivingEntityTaskJS$Builder, $WalkToBlockTaskJS$Builder, $BaseTaskJS$Builder, $FarmTaskJS$Builder, $RangedAttackTaskJS$Builder, $MeleeTaskJS$Builder } from "@package/com/github/tartaricacid/touhoulittlemaid/compat/kubejs/register/task";
import { $TriConsumer_, $QuadFunction_, $QuadConsumer_, $TriFunction_ } from "@package/com/github/tartaricacid/touhoulittlemaid/util/functional";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $IMaidBauble } from "@package/com/github/tartaricacid/touhoulittlemaid/api/bauble";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $MaidMealType } from "@package/com/github/tartaricacid/touhoulittlemaid/api/task/meal";
import { $IRangedAttackTask } from "@package/com/github/tartaricacid/touhoulittlemaid/api/task";
import { $Consumer_, $BiConsumer_ } from "@package/java/util/function";
import { $MaidTipsOverlay } from "@package/com/github/tartaricacid/touhoulittlemaid/client/overlay";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $MutableFloat } from "@package/org/apache/commons/lang3/mutable";
import { $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/compat/kubejs/register/builder" {
    export class $MaidBaubleBuilder {
        /**
         * @deprecated
         * Bind an item to a maid bauble. And specify a callback function that will be called every tick of the maid. <br>
         * 将物品与女仆饰品绑定。并且可以指定一个回调函数，在女仆每次 tick 时调用。
         */
        bind(arg0: $Item_, arg1: $BiConsumer_<$EntityMaid, $ItemStack>): $MaidBaubleBuilder$CustomKubeJSBauble;
        /**
         * Bind an item to a maid bauble. <br>
         * 将物品与女仆饰品绑定。
         */
        bind(arg0: $Item_): $MaidBaubleBuilder$CustomKubeJSBauble;
        constructor();
    }
    export class $MaidBaubleBuilder$CustomKubeJSBauble implements $IMaidBauble {
        /**
         * When the maid's favorability level changes while wearing this bauble, this callback is called. <br>
         * 当女仆在佩戴此饰品时好感度等级变化，会调用此回调。
         */
        triggerFavorabilityLevelChange(arg0: $QuadConsumer_<$EntityMaid, $ItemStack, number, number>): $MaidBaubleBuilder$CustomKubeJSBauble;
        /**
         * When the maid is injured while wearing this bauble, this callback is called. <br>
         * Returning true indicates that subsequent damage processing is canceled. <br>
         * 当女仆在佩戴此饰品时受到伤害，会调用此回调。返回 true 表示取消后续伤害处理。
         */
        triggerInjured(arg0: $QuadFunction_<$EntityMaid, $ItemStack, $DamageSource, $MutableFloat, boolean>): $MaidBaubleBuilder$CustomKubeJSBauble;
        /**
         * When equipped as a bauble, this callback is called every tick. <br>
         * 当装备饰品时，每 tick 会调用此回调。
         */
        triggerTick(arg0: $BiConsumer_<$EntityMaid, $ItemStack>): $MaidBaubleBuilder$CustomKubeJSBauble;
        /**
         * When player removes this bauble from the maid, this callback is called once. <br>
         * Can be used to revert the maid's attributes modified by `triggerPutOn`. <br>
         * 当玩家从女仆身上移除此饰品时，会调用一次此回调。可用于还原 `triggerPutOn` 修改的女仆 attribute。
         */
        triggerTakeOff(arg0: $BiConsumer_<$EntityMaid, $ItemStack>): $MaidBaubleBuilder$CustomKubeJSBauble;
        /**
         * When the maid performs a melee attack while wearing this bauble, this callback is called. <br>
         * 当女仆在佩戴此饰品时进行近战攻击，会调用此回调。
         */
        triggerMeleeAttack(arg0: $TriConsumer_<$EntityMaid, $ItemStack, $Entity>): $MaidBaubleBuilder$CustomKubeJSBauble;
        /**
         * When the maid dies while wearing this bauble, this callback is called. <br>
         * Returning true indicates that subsequent death processing is canceled. <br>
         * 当女仆在佩戴此饰品时死亡，会调用此回调。返回 true 表示取消后续死亡处理。
         */
        triggerDeath(arg0: $TriFunction_<$EntityMaid, $ItemStack, $DamageSource, boolean>): $MaidBaubleBuilder$CustomKubeJSBauble;
        /**
         * When player equips this bauble to the maid, this callback is called once. <br>
         * Can be used to modify the maid's attributes. <br>
         * 当玩家给女仆装备此饰品时，会调用一次此回调，可用于修改女仆的 attribute。
         */
        triggerPutOn(arg0: $BiConsumer_<$EntityMaid, $ItemStack>): $MaidBaubleBuilder$CustomKubeJSBauble;
        /**
         * When the maid eats food while wearing this bauble, this callback is called. <br>
         * 当女仆在佩戴此饰品时进食食物，会调用此回调。
         */
        triggerMaidEat(arg0: $QuadConsumer_<$EntityMaid, $ItemStack, $ItemStack, $MaidMealType>): $MaidBaubleBuilder$CustomKubeJSBauble;
        /**
         * When the maid performs a ranged attack while wearing this bauble, this callback is called. <br>
         * 当女仆在佩戴此饰品时进行远程攻击，会调用此回调。
         */
        triggerRangedAttack(arg0: $TriConsumer_<$EntityMaid, $ItemStack, $IRangedAttackTask>): $MaidBaubleBuilder$CustomKubeJSBauble;
        /**
         * @deprecated
         */
        getChatBubbleId(): string;
        syncClient(arg0: $EntityMaid, arg1: $ItemStack_): boolean;
        constructor();
        get chatBubbleId(): string;
    }
    export class $MaidTaskBuilder {
        /**
         * Creates a new walk to block task builder, you need to add logic such as start condition, searching for blocks, arriving at blocks, etc. <br>
         * 创建一个走向目标方块的任务构建器，你需要定义起始条件、方块搜索判断、到达目标方块后的行为等内容。
         * 
         * @param id The unique identifier for the task. <br>
         * 任务的 ID
         * @param icon use an item to represent the task icon <br>
         * 用物品来表示任务的图标
         */
        walkToBlockTask(arg0: $ResourceLocation_, arg1: $ItemStack_): $WalkToBlockTaskJS$Builder;
        /**
         * Creates a new ranged attack task builder, you generally only need to modify weapon checks, add custom ranged attack logic, etc. <br>
         * 创建一个新的远程攻击任务构建器，你一般只需要修改武器判断，添加自定义的远程攻击逻辑等内容即可
         * 
         * @param id The unique identifier for the task. <br>
         * 任务的 ID
         * @param icon use an item to represent the task icon <br>
         * 用物品来表示任务的图标
         */
        rangedAttackTask(arg0: $ResourceLocation_, arg1: $ItemStack_): $RangedAttackTaskJS$Builder;
        /**
         * Creates a new farm task builder, you need to add farming logic such as planting, harvesting, and other content. <br>
         * 创建一个新的种田任务构建器，你需要添加种田的逻辑，比如种植、收割等诸多内容
         * 
         * @param id The unique identifier for the task. <br>
         * 任务的 ID
         * @param icon use an item to represent the task icon <br>
         * 用物品来表示任务的图标
         */
        farmTask(arg0: $ResourceLocation_, arg1: $ItemStack_): $FarmTaskJS$Builder;
        /**
         * Creates a new melee task builder, you generally only need to modify weapon checks, extra attack, etc. <br>
         * 创建一个新的近战任务构建器，你一般只需要修改武器判断、额外攻击等内容即可
         * 
         * @param id The unique identifier for the task. <br>
         * 任务的 ID
         * @param icon use an item to represent the task icon <br>
         * 用物品来表示任务的图标
         */
        meleeTask(arg0: $ResourceLocation_, arg1: $ItemStack_): $MeleeTaskJS$Builder;
        /**
         * Creates a new blank task builder. It does not contain any Brain content, you need to add Brain using java.forClass. <br>
         * 创建一个新的空白的任务构建器。里面没有 Brain 内容，需要自行使用 java.forClass 来添加 Brain。
         * 
         * @param id The unique identifier for the task. <br>
         * 任务的 ID
         * @param icon use an item to represent the task icon <br>
         * 用物品来表示任务的图标
         */
        baseTask(arg0: $ResourceLocation_, arg1: $ItemStack_): $BaseTaskJS$Builder;
        /**
         * Creates a new walk to living entity task builder, you need to add logic such as start condition, searching for entities, arriving at entities, etc. <br>
         * 创建一个走向目标生物的任务构建器，你需要定义起始条件、实体搜索判断、到达目标实体后的行为等内容。
         * 
         * @param id The unique identifier for the task. <br>
         * 任务的 ID
         * @param icon use an item to represent the task icon <br>
         * 用物品来表示任务的图标
         */
        walkToLivingEntityTask(arg0: $ResourceLocation_, arg1: $ItemStack_): $WalkToLivingEntityTaskJS$Builder;
        constructor();
    }
    export class $MaidTipsBuilder {
        /**
         * Register text prompts, which will be displayed when the player points at a maid with the corresponding item in hand. <br>
         * 注册提示文本，当玩家手持对应物品指向女仆时会显示对应的提示文本
         */
        tips(arg0: $Consumer_<$MaidTipsOverlay>): $MaidTipsBuilder;
        constructor();
    }
}
