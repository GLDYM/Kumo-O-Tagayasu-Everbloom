import { $BiPredicate_ } from "@package/java/util/function";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack, $Item_ } from "@package/net/minecraft/world/item";
import { $IAutoCraftGuideGenerator } from "@package/studio/fantasyit/maid_storage_manager/craft/generator/type/base";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ICraftType } from "@package/studio/fantasyit/maid_storage_manager/craft/type";
import { $List, $List_, $Map_ } from "@package/java/util";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $CraftAction$CraftActionProvider_, $CraftAction_, $ActionOption_, $CraftAction$CraftActionPathFindingTargetProvider_ } from "@package/studio/fantasyit/maid_storage_manager/craft/action";
export * as context from "@package/studio/fantasyit/maid_storage_manager/craft/context";
export * as generator from "@package/studio/fantasyit/maid_storage_manager/craft/generator";
export * as action from "@package/studio/fantasyit/maid_storage_manager/craft/action";
export * as debug from "@package/studio/fantasyit/maid_storage_manager/craft/debug";
export * as work from "@package/studio/fantasyit/maid_storage_manager/craft/work";
export * as data from "@package/studio/fantasyit/maid_storage_manager/craft/data";
export * as type from "@package/studio/fantasyit/maid_storage_manager/craft/type";

declare module "@package/studio/fantasyit/maid_storage_manager/craft" {
    export class $CollectCraftEvent extends $Event implements $IModBusEvent {
        addAction(arg0: $ResourceLocation_, arg1: $CraftAction$CraftActionProvider_, arg2: $CraftAction$CraftActionPathFindingTargetProvider_, arg3: number, arg4: boolean, arg5: number, arg6: number, arg7: $List_<$ActionOption_<never>>): void;
        addAction(arg0: $ResourceLocation_, arg1: $CraftAction$CraftActionProvider_, arg2: $CraftAction$CraftActionPathFindingTargetProvider_, arg3: number, arg4: boolean, arg5: number, arg6: number, arg7: number, arg8: $List_<$ActionOption_<never>>): void;
        addAction(arg0: $ResourceLocation_, arg1: $CraftAction$CraftActionProvider_, arg2: $CraftAction$CraftActionPathFindingTargetProvider_, arg3: number, arg4: boolean, arg5: boolean, arg6: number, arg7: number, arg8: $List_<$ActionOption_<never>>): void;
        getCraftTypes(): $List<$ICraftType>;
        addCraftType(arg0: $ICraftType): void;
        addItemStackPredicate(arg0: $Item_, arg1: $BiPredicate_<$ItemStack, $ItemStack>): void;
        addItemStackPredicate(arg0: $ResourceLocation_, arg1: $BiPredicate_<$ItemStack, $ItemStack>): void;
        addAutoCraftGuideGenerator(arg0: $IAutoCraftGuideGenerator): void;
        constructor(arg0: $List_<$ICraftType>, arg1: $List_<$CraftAction_>, arg2: $List_<$IAutoCraftGuideGenerator>, arg3: $Map_<$ResourceLocation_, $List_<$BiPredicate_<$ItemStack, $ItemStack>>>);
        get craftTypes(): $List<$ICraftType>;
    }
}
