import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
export * as event from "@package/baguchan/tofucraft/api/event";
export * as tfenergy from "@package/baguchan/tofucraft/api/tfenergy";

declare module "@package/baguchan/tofucraft/api" {
    export class $TofunianProfession extends $Record {
        is(arg0: $BlockState_): boolean;
        isValidTarget(arg0: $BlockState_): boolean;
        jobSite(): ($TagKey<$Block>) | undefined;
        constructor(jobSite: ($TagKey_<$Block>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $TofunianProfession}.
     */
    export type $TofunianProfession_ = RegistryTypes.TofucraftTofunianProfession | { jobSite?: ($TagKey_<$Block>) | undefined,  } | [jobSite?: ($TagKey_<$Block>) | undefined, ];
    export interface $TofunianProfession extends RegistryMarked<RegistryTypes.TofucraftTofunianProfessionTag, RegistryTypes.TofucraftTofunianProfession> {}
}
