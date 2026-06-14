import { $IMaidTask } from "@package/com/github/tartaricacid/touhoulittlemaid/api/task";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Mob } from "@package/net/minecraft/world/entity";
import { $IMaidBackpack } from "@package/com/github/tartaricacid/touhoulittlemaid/api/backpack";
export * as data from "@package/com/github/tartaricacid/touhoulittlemaid/api/entity/data";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/api/entity" {
    export class $IMaid {
        static convert(arg0: $Mob): $IMaid;
        static convertToMaid(arg0: $Mob): $EntityMaid;
    }
    export interface $IMaid {
        getTask(): $IMaidTask;
        getBackpackShowItem(): $ItemStack;
        isMaidInSittingPose(): boolean;
        getMaidBackpackType(): $IMaidBackpack;
        getHandItemsForAnimation(): $ItemStack[];
        onClimbable(): boolean;
        getExperience(): number;
        getYsmModelName(): $Component;
        getYsmModelTexture(): string;
        setIsYsmModel(arg0: boolean): void;
        getFavorability(): number;
        getYsmModelId(): string;
        setYsmModel(arg0: string, arg1: string, arg2: $Component_): void;
        playRouletteAnim(arg0: string): void;
        stopRouletteAnim(): void;
        isSwingingArms(): boolean;
        hasChestPlate(): boolean;
        hasLeggings(): boolean;
        /**
         * @deprecated
         */
        getAtBiomeTemp(): string;
        /**
         * @deprecated
         */
        hasSasimono(): boolean;
        asStrictMaid(): $EntityMaid;
        hasFishingHook(): boolean;
        hasBackpack(): boolean;
        /**
         * @deprecated
         */
        isSitInJoyBlock(): boolean;
        getModelId(): string;
        isYsmModel(): boolean;
        asEntity(): $Mob;
        isBegging(): boolean;
        /**
         * @deprecated
         */
        getDim(): number;
        hasBoots(): boolean;
        onHurt(): boolean;
        hasHelmet(): boolean;
        get task(): $IMaidTask;
        get backpackShowItem(): $ItemStack;
        get maidInSittingPose(): boolean;
        get maidBackpackType(): $IMaidBackpack;
        get handItemsForAnimation(): $ItemStack[];
        get experience(): number;
        get ysmModelName(): $Component;
        get ysmModelTexture(): string;
        get favorability(): number;
        get ysmModelId(): string;
        get swingingArms(): boolean;
        get atBiomeTemp(): string;
        get sitInJoyBlock(): boolean;
        get modelId(): string;
        get begging(): boolean;
        get dim(): number;
    }
}
