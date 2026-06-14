import { $LivingEntity } from "@package/net/minecraft/world/entity";

declare module "@package/artifacts/extensions/mobeffect/magnetism" {
    export class $ItemEntityExtensions {
    }
    export interface $ItemEntityExtensions {
        artifacts$wasThrownBy(arg0: $LivingEntity): boolean;
        artifacts$setThrower(arg0: $LivingEntity): void;
    }
}
