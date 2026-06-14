import { $BehaviorControl } from "@package/net/minecraft/world/entity/ai/behavior";
import { $TriConsumer_, $TriPredicate_, $QuadPredicate_, $QuadFunction_ } from "@package/com/github/tartaricacid/touhoulittlemaid/util/functional";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $List } from "@package/java/util";
import { $IFarmTask, $IMaidTask, $IAttackTask, $IRangedAttackTask, $FunctionCallSwitchResult } from "@package/com/github/tartaricacid/touhoulittlemaid/api/task";
import { $MenuProvider } from "@package/net/minecraft/world";
import { $Predicate, $BiConsumer_, $Predicate_, $BiPredicate_, $BiFunction_ } from "@package/java/util/function";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $AABB } from "@package/net/minecraft/world/phys";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/compat/kubejs/register/task" {
    export class $FarmTaskJS$Builder extends $TaskBuilder<$FarmTaskJS$Builder, $FarmTaskJS> {
        /**
         * Check if the item stack is a seed. Used for the canPlant and plant methods. Mandatory. <br>
         * 判断是否是种子，用于后续的 canPlant 和 plant 方法传参。必填项。
         */
        isSeed(arg0: $Predicate_<$ItemStack>): $FarmTaskJS$Builder;
        /**
         * The distance at which the maid considers herself close enough to the crop. <br>
         * Only when the distance to the target block is less than or equal to this value will the planting/harvesting logic be executed. <br>
         * Default is 2 blocks. <br>
         * 女仆认为自己离作物足够近的距离，当距离目标方块小于等于此值时才会执行种植/收割逻辑，默认为 2 格。
         */
        closeEnoughDist(arg0: number): $FarmTaskJS$Builder;
        /**
         * Plant a seed at the given position and return the remaining seed stack. Mandatory. <br>
         * 在指定位置种植种子，并返回剩余的种子物品。必填项。
         */
        plant(arg0: $QuadFunction_<$EntityMaid, $BlockPos, $BlockState, $ItemStack, $ItemStack>): $FarmTaskJS$Builder;
        /**
         * Check if there are two blocks of space above the target position for the maid to reach. Default is true. <br>
         * 检查目标上面是否有两格空间能容纳女仆到达，默认为 true。
         */
        checkCropPosAbove(arg0: boolean): $FarmTaskJS$Builder;
        /**
         * Harvest the crop at the given position. Mandatory. <br>
         * 收割指定位置的作物。必填项。
         */
        harvest(arg0: $TriConsumer_<$EntityMaid, $BlockPos, $BlockState>): $FarmTaskJS$Builder;
        /**
         * Check if the maid can harvest the crop at the given position. Mandatory. <br>
         * 判断女仆是否可以在指定位置收割作物。必填项。
         */
        canHarvest(arg0: $TriPredicate_<$EntityMaid, $BlockPos, $BlockState>): $FarmTaskJS$Builder;
        /**
         * Check if the maid can plant a seed at the given position. Mandatory. <br>
         * 判断女仆是否可以在指定位置种植种子。必填项。
         */
        canPlant(arg0: $QuadPredicate_<$EntityMaid, $BlockPos, $BlockState, $ItemStack>): $FarmTaskJS$Builder;
        constructor(arg0: $ResourceLocation_, arg1: $ItemStack_);
    }
    export class $BaseTaskJS implements $IMaidTask {
        isHidden(arg0: $EntityMaid): boolean;
        getAmbientSound(arg0: $EntityMaid): $SoundEvent;
        enableEating(arg0: $EntityMaid): boolean;
        isEnable(arg0: $EntityMaid): boolean;
        getEnableConditionDesc(arg0: $EntityMaid): $List<$Pair<string, $Predicate<$EntityMaid>>>;
        workPointTask(arg0: $EntityMaid): boolean;
        createBrainTasks(arg0: $EntityMaid): $List<$Pair<number, $BehaviorControl<$EntityMaid>>>;
        enablePanic(arg0: $EntityMaid): boolean;
        searchRadius(arg0: $EntityMaid): number;
        getUid(): $ResourceLocation;
        getIcon(): $ItemStack;
        createRideBrainTasks(arg0: $EntityMaid): $List<$Pair<number, $BehaviorControl<$EntityMaid>>>;
        getConditionDescription(arg0: $EntityMaid): $List<$Pair<string, $Predicate<$EntityMaid>>>;
        enableLookAndRandomWalk(arg0: $EntityMaid): boolean;
        getName(): $MutableComponent;
        getDescription(arg0: $EntityMaid): $List<string>;
        getTaskConfigGuiProvider(arg0: $EntityMaid): $MenuProvider;
        searchDimension(arg0: $EntityMaid): $AABB;
        canSitInJoy(arg0: $EntityMaid, arg1: string): boolean;
        onFunctionCallSwitch(arg0: $EntityMaid): $FunctionCallSwitchResult;
        getTaskInfoGuiProvider(arg0: $EntityMaid): $MenuProvider;
        getMaidActionSummary(): string;
        constructor(arg0: $BaseTaskJS$Builder);
        get uid(): $ResourceLocation;
        get icon(): $ItemStack;
        get name(): $MutableComponent;
        get maidActionSummary(): string;
    }
    export class $BaseTaskJS$Builder extends $TaskBuilder<$BaseTaskJS$Builder, $BaseTaskJS> {
        /**
         * Sets the condition to enable panic behavior for the maid. Default is true. <br>
         * 设置女仆是否启用惊慌行为的条件。默认为 true。
         */
        enablePanic(arg0: $Predicate_<$EntityMaid>): $BaseTaskJS$Builder;
        /**
         * Sets the search radius for the maid's task. Default is the maid's working range. <br>
         * 设置女仆任务的搜索半径。默认为女仆的工作范围。
         */
        searchRadius(arg0: number): $BaseTaskJS$Builder;
        /**
         * Sets the condition to enable work point task for the maid. Default is false. <br>
         * 设置女仆是否启用工作点任务的条件。默认为 false。
         */
        workPoint(arg0: $Predicate_<$EntityMaid>): $BaseTaskJS$Builder;
        constructor(arg0: $ResourceLocation_, arg1: $ItemStack_);
    }
    export class $WalkToBlockTaskJS$Builder extends $TaskBuilder<$WalkToBlockTaskJS$Builder, $WalkToBlockTaskJS> {
        /**
         * Must be set before searching for blocks. If not set, the search will not be performed.
         * Please search only when necessary to reduce performance overhead. <br>
         * 必填项目，否则不进行搜索。开始进行搜索之前的判断条件，请在必要时在进行搜索，减少性能消耗
         */
        setSearchCondition(arg0: $Predicate_<$EntityMaid>): $WalkToBlockTaskJS$Builder;
        /**
         * Set the action to be performed when the maid arrives at the block. If not set, no action will be performed. <br>
         * 设置当女仆到达方块时执行的动作，如果不设置，则不会执行任何动作。
         */
        setArriveAction(arg0: $BiConsumer_<$EntityMaid, $BlockPos>): $WalkToBlockTaskJS$Builder;
        /**
         * Set the predicate for the block to be searched. If not set, the task will not search for blocks. <br>
         * 设置搜索的方块的判断条件，如果不设置，则不会进行方块搜索。
         */
        setBlockPredicate(arg0: $BiPredicate_<$EntityMaid, $BlockPos>): $WalkToBlockTaskJS$Builder;
        /**
         * Set the distance at which the maid is considered close enough to the block. Default is 2 blocks. <br>
         * 设置女仆到达方块时的距离，低于该距离则认为到达。默认为 2 格。
         */
        setCloseEnoughDist(arg0: number): $WalkToBlockTaskJS$Builder;
        /**
         * Search range for the blocks. The search is limited to the maid's working area, so we can only customize the vertical height of the search. <br>
         * But this value should not be too large, otherwise traversing blocks will cause serious performance overhead. <br>
         * Default is 2, which means searching from -2 to 2 in the vertical direction. <br>
         * 搜索范围为女仆的工作范围，我们只能自定义搜索的垂直高度。 <br>
         * 此数值不宜过大，否则遍历方块会带来严重的性能消耗。默认为 2，也就是搜索 -2 ~ 2 的垂直范围。
         */
        setVerticalSearchRange(arg0: number): $WalkToBlockTaskJS$Builder;
        constructor(arg0: $ResourceLocation_, arg1: $ItemStack_);
        set searchCondition(value: $Predicate_<$EntityMaid>);
        set arriveAction(value: $BiConsumer_<$EntityMaid, $BlockPos>);
        set blockPredicate(value: $BiPredicate_<$EntityMaid, $BlockPos>);
        set closeEnoughDist(value: number);
        set verticalSearchRange(value: number);
    }
    export class $MeleeTaskJS$Builder extends $TaskBuilder<$MeleeTaskJS$Builder, $MeleeTaskJS> {
        /**
         * Sets the condition for whether the maid can attack a target. Default is all hostile entities. <br>
         * 设置女仆是否可以攻击目标的条件。默认为所有敌对生物。
         */
        canAttack(arg0: $BiPredicate_<$EntityMaid, $LivingEntity>): $MeleeTaskJS$Builder;
        /**
         * Sets the condition for whether the maid considers an item as a weapon. Mandatory. <br>
         * 设置女仆是否将当前物品视为武器的条件。必填项。
         */
        isWeapon(arg0: $BiPredicate_<$EntityMaid, $ItemStack>): $MeleeTaskJS$Builder;
        /**
         * Sets the action for the maid to perform an extra attack against a target. Default is empty. <br>
         * 设置女仆对目标执行额外攻击的动作。默认为空。
         */
        doExtraAttack(arg0: $BiPredicate_<$EntityMaid, $Entity>): $MeleeTaskJS$Builder;
        /**
         * Sets the condition for whether the maid has an extra attack against a target. Default is false. <br>
         * 设置女仆是否对目标有额外攻击的条件。默认为 false。
         */
        hasExtraAttack(arg0: $BiPredicate_<$EntityMaid, $Entity>): $MeleeTaskJS$Builder;
        /**
         * Sets the cooldown tick for the attack. Default is 20 ticks. <br>
         * 设置攻击的冷却时间（以 tick 为单位）。默认值为 20 ticks。
         */
        meleeCooldownTick(arg0: number): $MeleeTaskJS$Builder;
        /**
         * Sets the walk speed for the maid when moving towards a target. Default is 0.6. <br>
         * 设置女仆在接近目标时的移动速度。默认为 0.6。
         */
        walkSpeed(arg0: number): $MeleeTaskJS$Builder;
        constructor(arg0: $ResourceLocation_, arg1: $ItemStack_);
    }
    export class $WalkToLivingEntityTaskJS$Builder extends $TaskBuilder<$WalkToLivingEntityTaskJS$Builder, $WalkToLivingEntityTaskJS> {
        /**
         * Lastly, this is the logic to execute when arriving near the entity. Mandatory, otherwise no logic will be executed. <br>
         * 最后到达实体附近需要执行的逻辑，必填内容，否则不执行任何逻辑
         */
        setArriveAction(arg0: $BiConsumer_<$EntityMaid, $LivingEntity>): $WalkToLivingEntityTaskJS$Builder;
        /**
         * Optional, default is 2. The logic will only be executed if the distance to the target entity is less than or equal to this number of blocks. <br>
         * 选填内容，默认为 2。当距离目标实体小于等于这里的格数时才会执行后续逻辑
         */
        setCloseEnoughDist(arg0: number): $WalkToLivingEntityTaskJS$Builder;
        /**
         * Mandatory, this is the condition to check whether the entity is suitable for walking to. <br>
         * 必填项目，搜索的实体是否是我们的目标实体
         */
        setEntityPredicate(arg0: $BiPredicate_<$EntityMaid, $LivingEntity>): $WalkToLivingEntityTaskJS$Builder;
        /**
         * Mandatory, this is the condition to check before starting the entity search. <br>
         * Please only perform the search when necessary to reduce performance overhead. <br>
         * 必填项目，开始进行实体搜索之前的判断条件，请在必要时再进行搜索，减少性能消耗
         */
        setStartSearchPredicate(arg0: $Predicate_<$EntityMaid>): $WalkToLivingEntityTaskJS$Builder;
        constructor(arg0: $ResourceLocation_, arg1: $ItemStack_);
        set arriveAction(value: $BiConsumer_<$EntityMaid, $LivingEntity>);
        set closeEnoughDist(value: number);
        set entityPredicate(value: $BiPredicate_<$EntityMaid, $LivingEntity>);
        set startSearchPredicate(value: $Predicate_<$EntityMaid>);
    }
    export class $FarmTaskJS implements $IFarmTask {
        isHidden(arg0: $EntityMaid): boolean;
        getAmbientSound(arg0: $EntityMaid): $SoundEvent;
        isSeed(arg0: $ItemStack_): boolean;
        enableEating(arg0: $EntityMaid): boolean;
        isEnable(arg0: $EntityMaid): boolean;
        getEnableConditionDesc(arg0: $EntityMaid): $List<$Pair<string, $Predicate<$EntityMaid>>>;
        createBrainTasks(arg0: $EntityMaid): $List<$Pair<number, $BehaviorControl<$EntityMaid>>>;
        plant(arg0: $EntityMaid, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ItemStack_): $ItemStack;
        getCloseEnoughDist(): number;
        checkCropPosAbove(): boolean;
        getUid(): $ResourceLocation;
        getIcon(): $ItemStack;
        harvest(arg0: $EntityMaid, arg1: $BlockPos_, arg2: $BlockState_): void;
        canHarvest(arg0: $EntityMaid, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        getConditionDescription(arg0: $EntityMaid): $List<$Pair<string, $Predicate<$EntityMaid>>>;
        enableLookAndRandomWalk(arg0: $EntityMaid): boolean;
        canPlant(arg0: $EntityMaid, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ItemStack_): boolean;
        getName(): $MutableComponent;
        getDescription(arg0: $EntityMaid): $List<string>;
        workPointTask(arg0: $EntityMaid): boolean;
        enablePanic(arg0: $EntityMaid): boolean;
        getTaskConfigGuiProvider(arg0: $EntityMaid): $MenuProvider;
        searchRadius(arg0: $EntityMaid): number;
        searchDimension(arg0: $EntityMaid): $AABB;
        canSitInJoy(arg0: $EntityMaid, arg1: string): boolean;
        onFunctionCallSwitch(arg0: $EntityMaid): $FunctionCallSwitchResult;
        createRideBrainTasks(arg0: $EntityMaid): $List<$Pair<number, $BehaviorControl<$EntityMaid>>>;
        getTaskInfoGuiProvider(arg0: $EntityMaid): $MenuProvider;
        getMaidActionSummary(): string;
        constructor(arg0: $FarmTaskJS$Builder);
        get closeEnoughDist(): number;
        get uid(): $ResourceLocation;
        get icon(): $ItemStack;
        get name(): $MutableComponent;
        get maidActionSummary(): string;
    }
    export class $TaskBuilder<T extends $TaskBuilder<T, E>, E> {
        /**
         * Sets the hidden condition for the task. Default is not hidden. <br>
         * 设置该任务是否在切换界面中隐藏，默认不隐藏。
         */
        isHidden(arg0: $Predicate_<$EntityMaid>): T;
        /**
         * Sets the enable condition for the task. <br>
         * 设置任务的启用条件。
         */
        enable(arg0: $Predicate_<$EntityMaid>): T;
        /**
         * Set the sound for the task. Generally, it does not need to be modified unless you want to customize the sound. <br>
         * 设置该任务所播放的音效，一般不需要修改，除非你需要自定义音效。
         */
        sound(arg0: $SoundEvent_): T;
        /**
         * Sets the condition for enabling eating behavior in the task. <br>
         * 设置任务中是否启用吃东西 AI。
         */
        enableEating(arg0: $Predicate_<$EntityMaid>): T;
        /**
         * Adds a description for the enable condition of the task. <br>
         * 向任务添加一个启用条件的描述。
         * 
         * @param languageKey The language key for the description. <br>
         * 描述的语言文件 key。
         * @param condition The condition that must be met for the task to be enabled. <br>
         * 任务启用所需满足的条件。
         */
        addEnableConditionDesc(arg0: string, arg1: $Predicate_<$EntityMaid>): T;
        /**
         * Adds a description for the condition of the task. <br>
         * 向任务添加一个普通描述。
         * 
         * @param languageKey The language key for the description. <br>
         * 描述的语言文件 key。
         * @param condition The condition that must be met for the task to be considered valid. <br>
         * 任务被认为有效所需满足的条件。
         */
        addConditionDesc(arg0: string, arg1: $Predicate_<$EntityMaid>): T;
        /**
         * Adds a ride brain to the task. Generally, no content needs to be added here unless you need to add some special behavior control. <br>
         * 向任务添加一个新的骑乘状态下的 Brain。一般来说这里不需要添加任何内容，除非你需要添加一些特殊的行为控制。
         * 
         * @param priority The priority of the ride brain task, higher values are executed first. <br>
         * 骑乘状态下的 Brain 的优先级，值越小越先执行，一般为 5。
         * @param control The behavior control object. <br>
         * 骑乘状态下的 Brain 对象。
         */
        addRideBrain(arg0: number, arg1: $BiFunction_<E, $EntityMaid, $BehaviorControl<$EntityMaid>>): T;
        /**
         * Sets the condition for enabling look and random walk behavior in the task. <br>
         * 设置任务中是否启用四处张望和随机行走 AI。
         */
        enableLookAndRandomWalk(arg0: $Predicate_<$EntityMaid>): T;
        /**
         * Adds a brain to the task. Generally, no content needs to be added here unless you need to add some special behavior control. <br>
         * 向任务添加一个新的 Brain。一般来说这里不需要添加任何内容，除非你需要添加一些特殊的行为控制。
         * 
         * @param priority The priority of the brain task, higher values are executed first. <br>
         * Brain 的优先级，值越小越先执行，一般为 5。
         * @param control The behavior control object. <br>
         * Brain 对象。
         */
        addBrain(arg0: number, arg1: $BiFunction_<E, $EntityMaid, $BehaviorControl<$EntityMaid>>): T;
        constructor(arg0: $ResourceLocation_, arg1: $ItemStack_);
    }
    export class $RangedAttackTaskJS implements $IRangedAttackTask {
        isHidden(arg0: $EntityMaid): boolean;
        getAmbientSound(arg0: $EntityMaid): $SoundEvent;
        enableEating(arg0: $EntityMaid): boolean;
        canSee(arg0: $EntityMaid, arg1: $LivingEntity): boolean;
        isEnable(arg0: $EntityMaid): boolean;
        getEnableConditionDesc(arg0: $EntityMaid): $List<$Pair<string, $Predicate<$EntityMaid>>>;
        createBrainTasks(arg0: $EntityMaid): $List<$Pair<number, $BehaviorControl<$EntityMaid>>>;
        canAttack(arg0: $EntityMaid, arg1: $LivingEntity): boolean;
        isWeapon(arg0: $EntityMaid, arg1: $ItemStack_): boolean;
        searchRadius(arg0: $EntityMaid): number;
        searchDimension(arg0: $EntityMaid): $AABB;
        getUid(): $ResourceLocation;
        getIcon(): $ItemStack;
        performRangedAttack(arg0: $EntityMaid, arg1: $LivingEntity, arg2: number): void;
        createRideBrainTasks(arg0: $EntityMaid): $List<$Pair<number, $BehaviorControl<$EntityMaid>>>;
        getConditionDescription(arg0: $EntityMaid): $List<$Pair<string, $Predicate<$EntityMaid>>>;
        enableLookAndRandomWalk(arg0: $EntityMaid): boolean;
        enablePanic(arg0: $EntityMaid): boolean;
        getTaskConfigGuiProvider(arg0: $EntityMaid): $MenuProvider;
        doExtraAttack(arg0: $EntityMaid, arg1: $Entity): boolean;
        hasExtraAttack(arg0: $EntityMaid, arg1: $Entity): boolean;
        onFunctionCallSwitch(arg0: $EntityMaid): $FunctionCallSwitchResult;
        getName(): $MutableComponent;
        getDescription(arg0: $EntityMaid): $List<string>;
        workPointTask(arg0: $EntityMaid): boolean;
        canSitInJoy(arg0: $EntityMaid, arg1: string): boolean;
        getTaskInfoGuiProvider(arg0: $EntityMaid): $MenuProvider;
        getMaidActionSummary(): string;
        constructor(arg0: $RangedAttackTaskJS$Builder);
        get uid(): $ResourceLocation;
        get icon(): $ItemStack;
        get name(): $MutableComponent;
        get maidActionSummary(): string;
    }
    export class $WalkToLivingEntityTaskJS implements $IMaidTask {
        isHidden(arg0: $EntityMaid): boolean;
        getAmbientSound(arg0: $EntityMaid): $SoundEvent;
        enableEating(arg0: $EntityMaid): boolean;
        isEnable(arg0: $EntityMaid): boolean;
        getEnableConditionDesc(arg0: $EntityMaid): $List<$Pair<string, $Predicate<$EntityMaid>>>;
        createBrainTasks(arg0: $EntityMaid): $List<$Pair<number, $BehaviorControl<$EntityMaid>>>;
        getUid(): $ResourceLocation;
        getIcon(): $ItemStack;
        getConditionDescription(arg0: $EntityMaid): $List<$Pair<string, $Predicate<$EntityMaid>>>;
        enableLookAndRandomWalk(arg0: $EntityMaid): boolean;
        getName(): $MutableComponent;
        getDescription(arg0: $EntityMaid): $List<string>;
        workPointTask(arg0: $EntityMaid): boolean;
        enablePanic(arg0: $EntityMaid): boolean;
        getTaskConfigGuiProvider(arg0: $EntityMaid): $MenuProvider;
        searchRadius(arg0: $EntityMaid): number;
        searchDimension(arg0: $EntityMaid): $AABB;
        canSitInJoy(arg0: $EntityMaid, arg1: string): boolean;
        onFunctionCallSwitch(arg0: $EntityMaid): $FunctionCallSwitchResult;
        createRideBrainTasks(arg0: $EntityMaid): $List<$Pair<number, $BehaviorControl<$EntityMaid>>>;
        getTaskInfoGuiProvider(arg0: $EntityMaid): $MenuProvider;
        getMaidActionSummary(): string;
        constructor(arg0: $WalkToLivingEntityTaskJS$Builder);
        get uid(): $ResourceLocation;
        get icon(): $ItemStack;
        get name(): $MutableComponent;
        get maidActionSummary(): string;
    }
    export class $WalkToBlockTaskJS implements $IMaidTask {
        isHidden(arg0: $EntityMaid): boolean;
        getAmbientSound(arg0: $EntityMaid): $SoundEvent;
        enableEating(arg0: $EntityMaid): boolean;
        isEnable(arg0: $EntityMaid): boolean;
        getEnableConditionDesc(arg0: $EntityMaid): $List<$Pair<string, $Predicate<$EntityMaid>>>;
        createBrainTasks(arg0: $EntityMaid): $List<$Pair<number, $BehaviorControl<$EntityMaid>>>;
        getUid(): $ResourceLocation;
        getIcon(): $ItemStack;
        getConditionDescription(arg0: $EntityMaid): $List<$Pair<string, $Predicate<$EntityMaid>>>;
        enableLookAndRandomWalk(arg0: $EntityMaid): boolean;
        getName(): $MutableComponent;
        getDescription(arg0: $EntityMaid): $List<string>;
        workPointTask(arg0: $EntityMaid): boolean;
        enablePanic(arg0: $EntityMaid): boolean;
        getTaskConfigGuiProvider(arg0: $EntityMaid): $MenuProvider;
        searchRadius(arg0: $EntityMaid): number;
        searchDimension(arg0: $EntityMaid): $AABB;
        canSitInJoy(arg0: $EntityMaid, arg1: string): boolean;
        onFunctionCallSwitch(arg0: $EntityMaid): $FunctionCallSwitchResult;
        createRideBrainTasks(arg0: $EntityMaid): $List<$Pair<number, $BehaviorControl<$EntityMaid>>>;
        getTaskInfoGuiProvider(arg0: $EntityMaid): $MenuProvider;
        getMaidActionSummary(): string;
        constructor(arg0: $WalkToBlockTaskJS$Builder);
        get uid(): $ResourceLocation;
        get icon(): $ItemStack;
        get name(): $MutableComponent;
        get maidActionSummary(): string;
    }
    export class $MeleeTaskJS implements $IAttackTask {
        isHidden(arg0: $EntityMaid): boolean;
        getAmbientSound(arg0: $EntityMaid): $SoundEvent;
        enableEating(arg0: $EntityMaid): boolean;
        isEnable(arg0: $EntityMaid): boolean;
        getEnableConditionDesc(arg0: $EntityMaid): $List<$Pair<string, $Predicate<$EntityMaid>>>;
        createBrainTasks(arg0: $EntityMaid): $List<$Pair<number, $BehaviorControl<$EntityMaid>>>;
        canAttack(arg0: $EntityMaid, arg1: $LivingEntity): boolean;
        isWeapon(arg0: $EntityMaid, arg1: $ItemStack_): boolean;
        doExtraAttack(arg0: $EntityMaid, arg1: $Entity): boolean;
        hasExtraAttack(arg0: $EntityMaid, arg1: $Entity): boolean;
        getUid(): $ResourceLocation;
        getIcon(): $ItemStack;
        createRideBrainTasks(arg0: $EntityMaid): $List<$Pair<number, $BehaviorControl<$EntityMaid>>>;
        getConditionDescription(arg0: $EntityMaid): $List<$Pair<string, $Predicate<$EntityMaid>>>;
        enableLookAndRandomWalk(arg0: $EntityMaid): boolean;
        enablePanic(arg0: $EntityMaid): boolean;
        getTaskConfigGuiProvider(arg0: $EntityMaid): $MenuProvider;
        onFunctionCallSwitch(arg0: $EntityMaid): $FunctionCallSwitchResult;
        getName(): $MutableComponent;
        getDescription(arg0: $EntityMaid): $List<string>;
        workPointTask(arg0: $EntityMaid): boolean;
        searchRadius(arg0: $EntityMaid): number;
        searchDimension(arg0: $EntityMaid): $AABB;
        canSitInJoy(arg0: $EntityMaid, arg1: string): boolean;
        getTaskInfoGuiProvider(arg0: $EntityMaid): $MenuProvider;
        getMaidActionSummary(): string;
        constructor(arg0: $MeleeTaskJS$Builder);
        get uid(): $ResourceLocation;
        get icon(): $ItemStack;
        get name(): $MutableComponent;
        get maidActionSummary(): string;
    }
    export class $RangedAttackTaskJS$Builder extends $TaskBuilder<$RangedAttackTaskJS$Builder, $RangedAttackTaskJS> {
        /**
         * Sets the condition for whether the maid can attack a target. Default is all hostile entities. <br>
         * 设置女仆是否可以攻击目标的条件。默认为所有敌对生物。
         */
        canAttack(arg0: $BiPredicate_<$EntityMaid, $LivingEntity>): $RangedAttackTaskJS$Builder;
        /**
         * Sets the condition for whether the maid considers an item as a weapon. Mandatory. <br>
         * 设置女仆是否将当前物品视为武器的条件。必填项。
         */
        isWeapon(arg0: $BiPredicate_<$EntityMaid, $ItemStack>): $RangedAttackTaskJS$Builder;
        /**
         * Sets the search radius for the maid to find targets. Default is the work range, you can increase this value for long-range attacks. <br>
         * 设置女仆寻找目标的搜索半径。默认为工作范围，你可以调大此数值实现超视距打击。
         */
        searchRadius(arg0: number): $RangedAttackTaskJS$Builder;
        /**
         * Sets the action to perform when the maid performs a ranged attack. Default is empty. <br>
         * 设置女仆执行远程攻击时的行为。默认为空。
         */
        performRangedAttack(arg0: $TriConsumer_<$EntityMaid, $LivingEntity, number>): $RangedAttackTaskJS$Builder;
        /**
         * Sets the walk speed for the maid when performing a ranged attack. Since ranged attacks require frequent movement,
         * this value can be slightly less than 0.6f. <br>
         * 设置女仆远程攻击时的行走速度。因为远程攻击走位比较频繁，所以这个数值可以略小于 0.6f。
         */
        walkSpeed(arg0: number): $RangedAttackTaskJS$Builder;
        /**
         * Sets the charge duration for the maid's ranged attack, in ticks. Generally, this is 20 ticks. <br>
         * 设置女仆远程攻击的充能时间，单位为 tick。一般是 20 tick。
         */
        chargeDurationTick(arg0: number): $RangedAttackTaskJS$Builder;
        /**
         * Sets the projectile range for the maid's ranged attack. Generally, this value is less than the search radius,
         * and the maid will actively approach hostile entities until within range. Default is 16 blocks. <br>
         * 设置女仆远程攻击的投射物射程。一般这个数值会小于搜索半径，女仆会主动接近敌对生物，直到射程范围内。默认为 16 格。
         */
        projectileRange(arg0: number): $RangedAttackTaskJS$Builder;
        constructor(arg0: $ResourceLocation_, arg1: $ItemStack_);
    }
}
