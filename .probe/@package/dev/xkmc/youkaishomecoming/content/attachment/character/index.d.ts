import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $TargetKind } from "@package/dev/xkmc/youkaishomecoming/content/entity/behavior/combat";
import { $Component } from "@package/net/minecraft/network/chat";
import { $EntityType, $EntityType_ } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $YoukaiEntity } from "@package/dev/xkmc/youkaishomecoming/content/entity/youkai";
import { $Enum, $Record } from "@package/java/lang";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/dev/xkmc/youkaishomecoming/content/attachment/character" {
    export class $CharacterData {
        static getState(arg0: number): $ReputationState;
        getState(): $ReputationState;
        loseReputation(arg0: number, arg1: number): void;
        gainReputation(arg0: number, arg1: number): void;
        static MIN: number;
        static MAX: number;
        reputation: number;
        constructor();
    }
    export class $ReputationState extends $Enum<$ReputationState> {
        static values(): $ReputationState[];
        static valueOf(arg0: string): $ReputationState;
        static toInfo(arg0: number): $Component;
        asTargetKind(): $TargetKind;
        static STRANGER: $ReputationState;
        static FRIEND: $ReputationState;
        static JERK: $ReputationState;
        static ENEMY: $ReputationState;
    }
    /**
     * Values that may be interpreted as {@link $ReputationState}.
     */
    export type $ReputationState_ = "friend" | "stranger" | "jerk" | "enemy";
    export class $CharDataHolder extends $Record {
        static get(arg0: $Player, arg1: $YoukaiEntity): $CharDataHolder;
        type(): $EntityType<never>;
        e(): $YoukaiEntity;
        data(): $CharacterData;
        sync(): void;
        isNewFood(arg0: $ItemStack_): boolean;
        player(): $Player;
        feed(arg0: $ItemStack_, arg1: number): number;
        onHurt(arg0: $DamageSource_, arg1: number): void;
        onKilledByCharacter(): void;
        gain(arg0: number, arg1: number): void;
        static getUnbounded(arg0: $Player, arg1: $EntityType_<never>): $CharDataHolder;
        onKillCharacter(): void;
        constructor(data: $CharacterData, player: $Player, type: $EntityType_<never>, e: $YoukaiEntity);
    }
    /**
     * Values that may be interpreted as {@link $CharDataHolder}.
     */
    export type $CharDataHolder_ = { player?: $Player, data?: $CharacterData, type?: $EntityType_<never>, e?: $YoukaiEntity,  } | [player?: $Player, data?: $CharacterData, type?: $EntityType_<never>, e?: $YoukaiEntity, ];
}
