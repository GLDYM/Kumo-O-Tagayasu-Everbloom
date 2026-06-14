import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Item } from "@package/net/minecraft/world/item";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/com/teamabnormals/blueprint/core/api" {
    export class $EggLayer {
    }
    export interface $EggLayer {
        getEggItem(): $Item;
        getEggLayingSound(): $SoundEvent;
        isBirdJockey(): boolean;
        getEggTimer(): number;
        getNextEggTime(arg0: $RandomSource): number;
        setEggTimer(arg0: number): void;
        setBirdJockey(arg0: boolean): void;
        get eggItem(): $Item;
        get eggLayingSound(): $SoundEvent;
    }
}
