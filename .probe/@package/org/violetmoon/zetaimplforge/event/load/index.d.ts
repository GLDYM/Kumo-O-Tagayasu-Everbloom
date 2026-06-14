import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $RenderLayerRegistry, $VariantRegistry, $ZetaRegistry } from "@package/org/violetmoon/zeta/registry";
import { $ZetaModule } from "@package/org/violetmoon/zeta/module";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $ConfigFlagManager } from "@package/org/violetmoon/zeta/config";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ZGatherAdditionalFlags, $ZModulesReady, $ZRegister, $ZRegister$Post, $ZGatherAdditionalFlags_, $ZConfigChanged, $ZGatherHints } from "@package/org/violetmoon/zeta/event/load";
import { $ZFirstClientTick } from "@package/org/violetmoon/zeta/client/event/play";
import { $AdvancementModifierRegistry } from "@package/org/violetmoon/zeta/advancement";
import { $Object } from "@package/java/lang";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $Zeta } from "@package/org/violetmoon/zeta";

declare module "@package/org/violetmoon/zetaimplforge/event/load" {
    export class $ForgeZGatherAdditionalFlags extends $Event implements $ZGatherAdditionalFlags, $IModBusEvent {
        flagManager(): $ConfigFlagManager;
        constructor(arg0: $ZGatherAdditionalFlags_);
    }
    export class $ForgeZModulesReady extends $Event implements $ZModulesReady, $IModBusEvent {
        constructor();
    }
    export class $ForgeZFirstClientTick extends $Event implements $ZFirstClientTick, $IModBusEvent {
        constructor();
    }
    export class $ForgeZConfigChange extends $Event implements $ZConfigChanged, $IModBusEvent {
        constructor();
    }
    export class $ForgeZRegister extends $Event implements $ZRegister, $IModBusEvent {
        getVariantRegistry(): $VariantRegistry;
        getRegistry(): $ZetaRegistry;
        getRenderLayerRegistry(): $RenderLayerRegistry;
        getAdvancementModifierRegistry(): $AdvancementModifierRegistry;
        constructor(arg0: $Zeta);
        get variantRegistry(): $VariantRegistry;
        get registry(): $ZetaRegistry;
        get renderLayerRegistry(): $RenderLayerRegistry;
        get advancementModifierRegistry(): $AdvancementModifierRegistry;
    }
    export class $ForgeZRegister$Post extends $Event implements $ZRegister$Post, $IModBusEvent {
        constructor();
    }
    export class $ForgeZGatherHints extends $Event implements $ZGatherHints, $IModBusEvent {
        accept(arg0: $ItemLike_, arg1: $Component_): void;
        hintItem(arg0: $ItemLike_, arg1: string, ...arg2: $Object[]): void;
        hintItem(arg0: $ItemLike_, ...arg1: $Object[]): void;
        gatherHintsFromModule(arg0: $ZetaModule, arg1: $ConfigFlagManager): void;
        getRegistryAccess(): $RegistryAccess;
        constructor(arg0: $ZGatherHints);
        get registryAccess(): $RegistryAccess;
    }
}
