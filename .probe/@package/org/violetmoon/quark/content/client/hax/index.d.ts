import { $AttributeSlot } from "@package/org/violetmoon/quark/content/client/resources";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Multimap } from "@package/com/google/common/collect";
import { $Attribute_, $AttributeModifier, $AttributeModifier_, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $List_, $Map } from "@package/java/util";

declare module "@package/org/violetmoon/quark/content/client/hax" {
    export class $PseudoAccessorItemStack {
    }
    export interface $PseudoAccessorItemStack {
        quark$getCapturedAttributes(): $Map<$AttributeSlot, $Multimap<$Attribute, $AttributeModifier>>;
        quark$capturePotionAttributes(arg0: $List_<$Pair<$Attribute_, $AttributeModifier_>>): void;
    }
}
