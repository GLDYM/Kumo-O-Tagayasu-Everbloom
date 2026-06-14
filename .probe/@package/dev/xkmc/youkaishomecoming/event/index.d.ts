import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $GrazingEntity } from "@package/dev/xkmc/fastprojectileapi/entity";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";

declare module "@package/dev/xkmc/youkaishomecoming/event" {
    export class $DanmakuLastHitEvent extends $Event implements $ICancellableEvent {
        getAttacker(): $LivingEntity;
        getPlayer(): $Player;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        attacker: $LivingEntity;
        player: $Player;
        constructor(arg0: $Player, arg1: $LivingEntity);
    }
    export class $DanmakuGrazeEvent extends $Event implements $ICancellableEvent {
        getPlayer(): $Player;
        getDanmaku(): $GrazingEntity;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        danmaku: $GrazingEntity;
        player: $Player;
        constructor(arg0: $Player, arg1: $GrazingEntity);
    }
}
