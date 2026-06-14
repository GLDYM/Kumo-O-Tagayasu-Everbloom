import { $IKJSAutoCraftGuideGenerator, $IKJSAutoCraftGuideGenerator$Full } from "@package/studio/fantasyit/maid_storage_manager/integration/kubejs/wrapped/craft/generator";
import { $BiPredicate_ } from "@package/java/util/function";
import { $ItemStack, $Item_ } from "@package/net/minecraft/world/item";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $IKJSCraftContextSupplier_ } from "@package/studio/fantasyit/maid_storage_manager/integration/kubejs/wrapped/craft/contextSupplier";
import { $CollectCraftEvent } from "@package/studio/fantasyit/maid_storage_manager/craft";
import { $IKJSCraftType, $IKJSCraftType$Full } from "@package/studio/fantasyit/maid_storage_manager/integration/kubejs/wrapped/craft/type";
import { $Object } from "@package/java/lang";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $ActionOption_, $CraftAction$CraftActionPathFindingTargetProvider_ } from "@package/studio/fantasyit/maid_storage_manager/craft/action";

declare module "@package/studio/fantasyit/maid_storage_manager/integration/kubejs/event" {
    export class $KJSCraftEvent implements $KubeEvent {
        addAction(arg0: $ResourceLocation_, arg1: $IKJSCraftContextSupplier_, arg2: $CraftAction$CraftActionPathFindingTargetProvider_, arg3: number, arg4: boolean, arg5: number, arg6: number): void;
        addCraftGuideGenerator(arg0: $IKJSAutoCraftGuideGenerator): void;
        addCraftGuideGeneratorFull(arg0: $IKJSAutoCraftGuideGenerator$Full): void;
        addActionNoOccupation(arg0: $ResourceLocation_, arg1: $IKJSCraftContextSupplier_, arg2: $CraftAction$CraftActionPathFindingTargetProvider_, arg3: number, arg4: boolean, arg5: number, arg6: number): void;
        addItemStackPredicateRaw(arg0: $ResourceLocation_, arg1: $BiPredicate_<$ItemStack, $ItemStack>): void;
        addCraftType(arg0: $IKJSCraftType): void;
        addCraftTypeFull(arg0: $IKJSCraftType$Full): void;
        addActionSimple(arg0: $ResourceLocation_, arg1: $IKJSCraftContextSupplier_, arg2: boolean, arg3: number, arg4: number): void;
        addActionVirtual(arg0: $ResourceLocation_, arg1: number, arg2: number): void;
        addActionFull(arg0: $ResourceLocation_, arg1: $IKJSCraftContextSupplier_, arg2: $CraftAction$CraftActionPathFindingTargetProvider_, arg3: number, arg4: boolean, arg5: number, arg6: number, arg7: number, arg8: $ActionOption_<never>[]): void;
        addActionSimpleNoOccupation(arg0: $ResourceLocation_, arg1: $IKJSCraftContextSupplier_, arg2: boolean, arg3: number, arg4: number): void;
        addItemStackPredicate(arg0: $Item_, arg1: $BiPredicate_<$ItemStack, $ItemStack>): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(arg0: $CollectCraftEvent);
    }
}
