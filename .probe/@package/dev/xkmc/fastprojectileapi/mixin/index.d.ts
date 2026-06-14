import { $Entity } from "@package/net/minecraft/world/entity";
import { $Set, $UUID } from "@package/java/util";
import { $EntitySectionStorage, $TransientEntitySectionManager, $PersistentEntitySectionManager, $EntityAccess } from "@package/net/minecraft/world/level/entity";

declare module "@package/dev/xkmc/fastprojectileapi/mixin" {
    export class $ClientLevelAccessor {
    }
    export interface $ClientLevelAccessor {
        getEntityStorage(): $TransientEntitySectionManager<$Entity>;
        get entityStorage(): $TransientEntitySectionManager<$Entity>;
    }
    /**
     * Values that may be interpreted as {@link $ClientLevelAccessor}.
     */
    export type $ClientLevelAccessor_ = (() => $TransientEntitySectionManager<$Entity>);
    export class $TransientEntitySectionManagerAccessor<T extends $Entity> {
    }
    export interface $TransientEntitySectionManagerAccessor<T extends $Entity> {
        getSectionStorage(): $EntitySectionStorage<T>;
        get sectionStorage(): $EntitySectionStorage<T>;
    }
    /**
     * Values that may be interpreted as {@link $TransientEntitySectionManagerAccessor}.
     */
    export type $TransientEntitySectionManagerAccessor_<T> = (() => $EntitySectionStorage<T>);
    export class $ServerLevelAccessor {
    }
    export interface $ServerLevelAccessor {
        getEntityManager(): $PersistentEntitySectionManager<$Entity>;
        get entityManager(): $PersistentEntitySectionManager<$Entity>;
    }
    /**
     * Values that may be interpreted as {@link $ServerLevelAccessor}.
     */
    export type $ServerLevelAccessor_ = (() => $PersistentEntitySectionManager<$Entity>);
    export class $PersistentEntitySectionManagerAccessor<T extends $Entity> {
    }
    export interface $PersistentEntitySectionManagerAccessor<T extends $Entity> {
        getSectionStorage(): $EntitySectionStorage<T>;
        getKnownUuids(): $Set<$UUID>;
        callStopTicking(arg0: $EntityAccess): void;
        callStopTracking(arg0: $EntityAccess): void;
        get sectionStorage(): $EntitySectionStorage<T>;
        get knownUuids(): $Set<$UUID>;
    }
}
