import { $EntityModel } from "@package/net/minecraft/client/model";
import { $MenuProvider } from "@package/net/minecraft/world";
import { $ItemStack, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $EntityModelSet } from "@package/net/minecraft/client/model/geom";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $EntityTombstone } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ContainerData } from "@package/net/minecraft/world/inventory";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/api/backpack" {
    export class $IMaidBackpack {
        getId(): $ResourceLocation;
        getItem(): $Item;
        getTakeOffItemStack(arg0: $ItemStack_, arg1: $Player, arg2: $EntityMaid): $ItemStack;
        getAvailableMaxContainerIndex(): number;
        onSpawnTombstone(arg0: $EntityMaid, arg1: $EntityTombstone): void;
        hasBackpackData(): boolean;
        getBackpackData(arg0: $EntityMaid): $IBackpackData;
        getGuiProvider(arg0: number): $MenuProvider;
        offsetBackpackItem(arg0: $PoseStack): void;
        getBackpackModel(arg0: $EntityModelSet): $EntityModel<$EntityMaid>;
        getBackpackTexture(): $ResourceLocation;
        onPutOn(arg0: $ItemStack_, arg1: $Player, arg2: $EntityMaid): void;
        onTakeOff(arg0: $ItemStack_, arg1: $Player, arg2: $EntityMaid): void;
        constructor();
        get id(): $ResourceLocation;
        get item(): $Item;
        get availableMaxContainerIndex(): number;
        get backpackTexture(): $ResourceLocation;
    }
    export class $IBackpackData {
    }
    export interface $IBackpackData {
        load(arg0: $CompoundTag_, arg1: $EntityMaid): void;
        save(arg0: $CompoundTag_, arg1: $EntityMaid): void;
        serverTick(arg0: $EntityMaid): void;
        getDataAccess(): $ContainerData;
        get dataAccess(): $ContainerData;
    }
}
