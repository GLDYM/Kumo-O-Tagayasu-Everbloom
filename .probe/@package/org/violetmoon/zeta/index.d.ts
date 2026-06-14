import { $EntitySpawnHandler } from "@package/org/violetmoon/zeta/world";
import { $AdvancementModifierRegistry } from "@package/org/violetmoon/zeta/advancement";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ZetaCommonProxy, $RegistryUtil, $ZetaSide, $NameChanger, $RaytracingUtil, $ZetaSide_ } from "@package/org/violetmoon/zeta/util";
import { $IZeta } from "@package/org/violetmoon/zeta/util/zetalist";
import { $DyeablesRegistry, $VariantRegistry, $ZetaRegistry, $RenderLayerRegistry, $PottedPlantRegistry } from "@package/org/violetmoon/zeta/registry";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $ModuleFinder_, $ZetaCategory, $ZetaModuleManager } from "@package/org/violetmoon/zeta/module";
import { $FuelHandler } from "@package/org/violetmoon/zeta/util/handler";
import { $BlockPos_, $RegistryAccess } from "@package/net/minecraft/core";
import { $IZetaConfigInternals, $SectionDefinition, $ConfigManager } from "@package/org/violetmoon/zeta/config";
import { $BlockExtensionFactory } from "@package/org/violetmoon/zeta/block/ext";
import { $ItemExtensionFactory } from "@package/org/violetmoon/zeta/item/ext";
import { $Logger } from "@package/org/apache/logging/log4j";
import { $ZetaEventBus, $IZetaPlayEvent, $IZetaLoadEvent } from "@package/org/violetmoon/zeta/event/bus";
import { $Iterable_, $Object } from "@package/java/lang";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
export * as event from "@package/org/violetmoon/zeta/event";
export * as world from "@package/org/violetmoon/zeta/world";
export * as mixin from "@package/org/violetmoon/zeta/mixin";
export * as util from "@package/org/violetmoon/zeta/util";
export * as advancement from "@package/org/violetmoon/zeta/advancement";
export * as item from "@package/org/violetmoon/zeta/item";
export * as block from "@package/org/violetmoon/zeta/block";
export * as api from "@package/org/violetmoon/zeta/api";
export * as registry from "@package/org/violetmoon/zeta/registry";
export * as config from "@package/org/violetmoon/zeta/config";
export * as client from "@package/org/violetmoon/zeta/client";
export * as module from "@package/org/violetmoon/zeta/module";

declare module "@package/org/violetmoon/zeta" {
    export class $Zeta implements $IZeta {
        start(): void;
        loadModules(arg0: $Iterable_<$ZetaCategory>, arg1: $ModuleFinder_, arg2: $Object): void;
        createProxy(arg0: $ZetaSide_): $ZetaCommonProxy;
        asZeta(): $Zeta;
        isModLoaded(arg0: string): boolean;
        getModDisplayName(arg0: string): string;
        hackilyGetCurrentLevelRegistryAccess(): $RegistryAccess;
        createDyeablesRegistry(): $DyeablesRegistry;
        createModuleManager(): $ZetaModuleManager;
        fireRightClickBlock(arg0: $Player, arg1: $InteractionHand_, arg2: $BlockPos_, arg3: $BlockHitResult): boolean;
        createEntitySpawnHandler(): $EntitySpawnHandler;
        createPottedPlantRegistry(): $PottedPlantRegistry;
        createRaytracingUtil(): $RaytracingUtil;
        makeConfigInternals(arg0: $SectionDefinition): $IZetaConfigInternals;
        createRenderLayerRegistry(): $RenderLayerRegistry;
        createItemExtensionFactory(): $ItemExtensionFactory;
        createNameChanger(): $NameChanger;
        createRegistry(): $ZetaRegistry;
        createFuelHandler(): $FuelHandler;
        createBlockExtensionFactory(): $BlockExtensionFactory;
        createAdvancementModifierRegistry(): $AdvancementModifierRegistry;
        modIntegration<T>(arg0: string, arg1: $Supplier_<$Supplier<T>>, arg2: $Supplier_<$Supplier<T>>): T;
        blockExtensions: $BlockExtensionFactory;
        /**
         * @deprecated
         */
        registry: $ZetaRegistry;
        nameChanger: $NameChanger;
        side: $ZetaSide;
        itemExtensions: $ItemExtensionFactory;
        entitySpawn: $EntitySpawnHandler;
        isProduction: boolean;
        log: $Logger;
        fuel: $FuelHandler;
        pottedPlantRegistry: $PottedPlantRegistry;
        loadBus: $ZetaEventBus<$IZetaLoadEvent>;
        renderLayerRegistry: $RenderLayerRegistry;
        configInternals: $IZetaConfigInternals;
        configManager: $ConfigManager;
        modid: string;
        modules: $ZetaModuleManager;
        dyeables: $DyeablesRegistry;
        proxy: $ZetaCommonProxy;
        variantRegistry: $VariantRegistry;
        advancementModifierRegistry: $AdvancementModifierRegistry;
        raytracingUtil: $RaytracingUtil;
        registryUtil: $RegistryUtil;
        playBus: $ZetaEventBus<$IZetaPlayEvent>;
        constructor(arg0: string, arg1: $Logger, arg2: $ZetaSide_, arg3: boolean);
    }
}
