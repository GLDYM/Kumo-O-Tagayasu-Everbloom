import { $EquipmentSlot, $EquipmentSlot_ } from "@package/net/minecraft/world/entity";
import { $Enum } from "@package/java/lang";

declare module "@package/org/violetmoon/quark/content/client/resources" {
    export class $AttributeSlot extends $Enum<$AttributeSlot> {
        static values(): $AttributeSlot[];
        static valueOf(arg0: string): $AttributeSlot;
        getTranslationKey(): string;
        hasCanonicalSlot(): boolean;
        getCanonicalSlot(): $EquipmentSlot;
        static fromCanonicalSlot(arg0: $EquipmentSlot_): $AttributeSlot;
        static CHEST: $AttributeSlot;
        static HEAD: $AttributeSlot;
        static OFFHAND: $AttributeSlot;
        static MAINHAND: $AttributeSlot;
        static LEGS: $AttributeSlot;
        static POTION: $AttributeSlot;
        static FEET: $AttributeSlot;
        get translationKey(): string;
        get canonicalSlot(): $EquipmentSlot;
    }
    /**
     * Values that may be interpreted as {@link $AttributeSlot}.
     */
    export type $AttributeSlot_ = "mainhand" | "offhand" | "feet" | "legs" | "chest" | "head" | "potion";
}
