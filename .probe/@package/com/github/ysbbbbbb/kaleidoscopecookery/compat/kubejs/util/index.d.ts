import { $Level } from "@package/net/minecraft/world/level";
import { $Predicate_ } from "@package/java/util/function";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $TriFunction_ } from "@package/org/apache/commons/lang3/function";

declare module "@package/com/github/ysbbbbbb/kaleidoscopecookery/compat/kubejs/util" {
    export class $SimpleSoupBaseBuilder {
        /**
         * Create a soup base, need to provide an id, this id will be used in subsequent stockpot recipes. <br>
         * 创建一个汤底，需要填写 id，这个 id 将用于后续汤锅配方。
         */
        static create(arg0: $ResourceLocation_): $SimpleSoupBaseBuilder;
        /**
         * The item used to display the soup base in the JEI UI. <br>
         * 在 JEI 界面中用于显示汤底的物品。
         */
        displayStack(arg0: $ItemStack_): $SimpleSoupBaseBuilder;
        /**
         * The color of the bubble particles when the soup base is first added to the soup pot. <br>
         * 刚放入汤底时，汤锅中气泡粒子的颜色。
         */
        bubbleColor(arg0: number): $SimpleSoupBaseBuilder;
        /**
         * A predicate to test whether an item is the soup base. <br>
         * 当玩家将物品放入汤锅时，判断该物品是否为该汤底的物品。
         */
        soupBasePredicate(arg0: $Predicate_<$ItemStack>): $SimpleSoupBaseBuilder;
        /**
         * A predicate to test whether an item is a valid container to retrieve the soup base. <br>
         * 当玩家将物品放入汤锅时，判断该物品是否为取回汤底的有效容器。
         */
        containerPredicate(arg0: $Predicate_<$ItemStack>): $SimpleSoupBaseBuilder;
        /**
         * The texture used to render the soup base in the soup pot. Supports dynamic textures. The texture needs to be registered in atlases/block.json. <br>
         * 在汤锅中用于渲染汤底的材质，支持动态材质。材质需要在 atlases/block.json 中注册。
         */
        soupBaseTexture(arg0: $ResourceLocation_): $SimpleSoupBaseBuilder;
        /**
         * When soupBasePredicate tests true, this function is called to get the item returned to the player. <br>
         * 当 soupBasePredicate 判断汤底物品符合时，调用该函数获取返回给玩家的物品。
         */
        returnContainerFunction(arg0: $TriFunction_<$Level, $LivingEntity, $ItemStack, $ItemStack>): $SimpleSoupBaseBuilder;
        /**
         * When containerPredicate tests true, this function is called to get the item returned to the player. <br>
         * 当 containerPredicate 判断容器物品符合时，调用该函数获取返回给玩家的物品。
         */
        returnSoupBaseFunction(arg0: $TriFunction_<$Level, $LivingEntity, $ItemStack, $ItemStack>): $SimpleSoupBaseBuilder;
    }
    export class $ModKubeJSUtil {
        /**
         * Register a soup base, used for soup pot recipe. <br>
         * 注册一个汤底，用于汤锅合成。
         */
        static registerSoupBase(arg0: $SimpleSoupBaseBuilder): void;
        constructor();
    }
}
