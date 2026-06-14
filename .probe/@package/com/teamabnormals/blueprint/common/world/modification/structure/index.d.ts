import { $ServerLevelAccessor } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ArrayList, $List, $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Supplier } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $HolderSet, $HolderSet_, $Holder, $HolderGetter } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $StructurePieceType } from "@package/net/minecraft/world/level/levelgen/structure/pieces";
import { $WeightedEntry$Wrapper_, $WeightedEntry$Wrapper, $WeightedRandomList } from "@package/net/minecraft/util/random";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $Structure$GenerationContext, $Structure, $Structure_, $Structure$GenerationContext_ } from "@package/net/minecraft/world/level/levelgen/structure";

declare module "@package/com/teamabnormals/blueprint/common/world/modification/structure" {
    export class $StructureRepaletterEntry extends $Record {
        priority(): number;
        static holder(arg0: $HolderGetter<$Structure_>, ...arg1: $ResourceKey_<$Structure>[]): $HolderSet<$Structure>;
        condition(): ($StructureRepaletter$Condition) | undefined;
        pieces(): ($HolderSet<$StructurePieceType>) | undefined;
        static repalette(): $StructureRepaletterEntry$Builder;
        static simple(arg0: $TagKey_<$Block>, arg1: $Block_): $SimpleTagStructureRepaletter;
        static simple(arg0: $Block_, arg1: $Block_): $SimpleStructureRepaletter;
        structures(): $HolderSet<$Structure>;
        shouldApplyToAfterPlace(): boolean;
        static weighted(arg0: $TagKey_<$Block>, ...arg1: $WeightedEntry$Wrapper_<$Block_>[]): $WeightedTagStructureRepaletter;
        static weighted(arg0: $Block_, ...arg1: $WeightedEntry$Wrapper_<$Block_>[]): $WeightedStructureRepaletter;
        repaletters(): $List<$StructureRepaletter>;
        static CODEC: $Codec<$StructureRepaletterEntry>;
        constructor(structures: $HolderSet_<$Structure>, pieces: ($HolderSet_<$StructurePieceType>) | undefined, shouldApplyToAfterPlace: boolean, priority: number, condition: ($StructureRepaletter$Condition) | undefined, repaletters: $List_<$StructureRepaletter>);
        constructor(arg0: $HolderSet_<$Structure>, arg1: ($HolderSet_<$StructurePieceType>) | undefined, arg2: boolean, arg3: $StructureRepaletter$Condition, arg4: $StructureRepaletter);
        constructor(arg0: $HolderSet_<$Structure>, arg1: ($HolderSet_<$StructurePieceType>) | undefined, arg2: boolean, arg3: $StructureRepaletter);
        constructor(arg0: $HolderSet_<$Structure>, arg1: ($HolderSet_<$StructurePieceType>) | undefined, arg2: boolean, arg3: number, arg4: $StructureRepaletter$Condition, arg5: $StructureRepaletter);
        constructor(arg0: $HolderSet_<$Structure>, arg1: ($HolderSet_<$StructurePieceType>) | undefined, arg2: boolean, arg3: number, arg4: ($StructureRepaletter$Condition) | undefined, arg5: $StructureRepaletter);
    }
    /**
     * Values that may be interpreted as {@link $StructureRepaletterEntry}.
     */
    export type $StructureRepaletterEntry_ = RegistryTypes.BlueprintStructureRepaletters | { priority?: number, shouldApplyToAfterPlace?: boolean, repaletters?: $List_<$StructureRepaletter>, structures?: $HolderSet_<$Structure>, pieces?: ($HolderSet_<$StructurePieceType>) | undefined, condition?: ($StructureRepaletter$Condition) | undefined,  } | [priority?: number, shouldApplyToAfterPlace?: boolean, repaletters?: $List_<$StructureRepaletter>, structures?: $HolderSet_<$Structure>, pieces?: ($HolderSet_<$StructurePieceType>) | undefined, condition?: ($StructureRepaletter$Condition) | undefined, ];
    export class $RepalettedStructureStart {
    }
    export interface $RepalettedStructureStart {
        initializeRepaletters(arg0: $StructureModificationContext): void;
        setRepaletters(arg0: $ArrayList<$StructureRepaletterManager$Entry_>): void;
        set repaletters(value: $ArrayList<$StructureRepaletterManager$Entry_>);
    }
    export class $SimpleTagStructureRepaletter extends $Record implements $StructureRepaletter, $StructureRepaletter$Replacer {
        getReplacement(arg0: $ServerLevelAccessor, arg1: $BlockState_, arg2: $RandomSource): $BlockState;
        savedTagCodec(): $MapCodec<$StructureRepaletter$Replacer>;
        replacesBlock(): $TagKey<$Block>;
        replacesWith(): $Block;
        createReplacer(arg0: $StructureModificationContext): $StructureRepaletter$Replacer;
        codec(): $MapCodec<$StructureRepaletter>;
        static CODEC: $MapCodec<$SimpleTagStructureRepaletter>;
        constructor(replacesBlock: $TagKey_<$Block>, replacesWith: $Block_);
    }
    /**
     * Values that may be interpreted as {@link $SimpleTagStructureRepaletter}.
     */
    export type $SimpleTagStructureRepaletter_ = { replacesWith?: $Block_, replacesBlock?: $TagKey_<$Block>,  } | [replacesWith?: $Block_, replacesBlock?: $TagKey_<$Block>, ];
    export class $StructureModificationContext {
        getPosition(): $BlockPos;
        biome(): $Supplier<$Holder<$Biome>>;
        getGenerationContext(): $Structure$GenerationContext;
        constructor(arg0: $Structure$GenerationContext_, arg1: $BlockPos_);
        get position(): $BlockPos;
        get generationContext(): $Structure$GenerationContext;
    }
    export class $StructureRepaletterManager$Entry extends $Record {
        replacer(): $StructureRepaletter$Replacer;
        pieces(): ($HolderSet<$StructurePieceType>) | undefined;
        shouldApplyToAfterPlace(): boolean;
        static CODEC: $Codec<$StructureRepaletterManager$Entry>;
        static KEY: string;
        constructor(pieces: ($HolderSet_<$StructurePieceType>) | undefined, shouldApplyToAfterPlace: boolean, replacer: $StructureRepaletter$Replacer);
    }
    /**
     * Values that may be interpreted as {@link $StructureRepaletterManager$Entry}.
     */
    export type $StructureRepaletterManager$Entry_ = { replacer?: $StructureRepaletter$Replacer, pieces?: ($HolderSet_<$StructurePieceType>) | undefined, shouldApplyToAfterPlace?: boolean,  } | [replacer?: $StructureRepaletter$Replacer, pieces?: ($HolderSet_<$StructurePieceType>) | undefined, shouldApplyToAfterPlace?: boolean, ];
    export class $StructureRepaletterEntry$Builder {
        priority(arg0: number): $StructureRepaletterEntry$Builder;
        condition(arg0: $StructureRepaletter$Condition): $StructureRepaletterEntry$Builder;
        select(arg0: $HolderSet_<$Structure>): $StructureRepaletterEntry;
        pieces(arg0: $HolderSet_<$StructurePieceType>): $StructureRepaletterEntry$Builder;
        repaletters(...arg0: $StructureRepaletter[]): $StructureRepaletterEntry$Builder;
        applyToAfterPlace(): $StructureRepaletterEntry$Builder;
        constructor();
    }
    export class $StructureRepaletter$Replacer {
        static CODEC: $Codec<$StructureRepaletter$Replacer>;
    }
    export interface $StructureRepaletter$Replacer {
        getReplacement(arg0: $ServerLevelAccessor, arg1: $BlockState_, arg2: $RandomSource): $BlockState;
        savedTagCodec(): $MapCodec<$StructureRepaletter$Replacer>;
    }
    export class $SimpleStructureRepaletter extends $Record implements $StructureRepaletter, $StructureRepaletter$Replacer {
        getReplacement(arg0: $ServerLevelAccessor, arg1: $BlockState_, arg2: $RandomSource): $BlockState;
        savedTagCodec(): $MapCodec<$StructureRepaletter$Replacer>;
        replacesBlock(): $Block;
        replacesWith(): $Block;
        createReplacer(arg0: $StructureModificationContext): $StructureRepaletter$Replacer;
        codec(): $MapCodec<$StructureRepaletter>;
        static CODEC: $MapCodec<$SimpleStructureRepaletter>;
        constructor(replacesBlock: $Block_, replacesWith: $Block_);
    }
    /**
     * Values that may be interpreted as {@link $SimpleStructureRepaletter}.
     */
    export type $SimpleStructureRepaletter_ = { replacesWith?: $Block_, replacesBlock?: $Block_,  } | [replacesWith?: $Block_, replacesBlock?: $Block_, ];
    export interface $StructureRepaletterEntry extends RegistryMarked<RegistryTypes.BlueprintStructureRepalettersTag, RegistryTypes.BlueprintStructureRepaletters> {}
    export class $StructureRepaletter$Condition {
        static CODEC: $Codec<$StructureRepaletter$Condition>;
    }
    export interface $StructureRepaletter$Condition {
        test(arg0: $StructureModificationContext): boolean;
        codec(): $MapCodec<$StructureRepaletter$Condition>;
    }
    export class $StructureRepaletter {
        static CODEC: $Codec<$StructureRepaletter>;
    }
    export interface $StructureRepaletter {
        createReplacer(arg0: $StructureModificationContext): $StructureRepaletter$Replacer;
        codec(): $MapCodec<$StructureRepaletter>;
    }
    export class $WeightedStructureRepaletter extends $Record implements $StructureRepaletter, $StructureRepaletter$Replacer {
        getReplacement(arg0: $ServerLevelAccessor, arg1: $BlockState_, arg2: $RandomSource): $BlockState;
        savedTagCodec(): $MapCodec<$StructureRepaletter$Replacer>;
        replacesBlock(): $Block;
        replacesWith(): $WeightedRandomList<$WeightedEntry$Wrapper<$Block>>;
        createReplacer(arg0: $StructureModificationContext): $StructureRepaletter$Replacer;
        codec(): $MapCodec<$StructureRepaletter>;
        static CODEC: $MapCodec<$WeightedStructureRepaletter>;
        constructor(replacesBlock: $Block_, replacesWith: $WeightedRandomList<$WeightedEntry$Wrapper_<$Block_>>);
    }
    /**
     * Values that may be interpreted as {@link $WeightedStructureRepaletter}.
     */
    export type $WeightedStructureRepaletter_ = { replacesWith?: $WeightedRandomList<$WeightedEntry$Wrapper_<$Block_>>, replacesBlock?: $Block_,  } | [replacesWith?: $WeightedRandomList<$WeightedEntry$Wrapper_<$Block_>>, replacesBlock?: $Block_, ];
    export class $WeightedTagStructureRepaletter extends $Record implements $StructureRepaletter, $StructureRepaletter$Replacer {
        getReplacement(arg0: $ServerLevelAccessor, arg1: $BlockState_, arg2: $RandomSource): $BlockState;
        savedTagCodec(): $MapCodec<$StructureRepaletter$Replacer>;
        replacesWith(): $WeightedRandomList<$WeightedEntry$Wrapper<$Block>>;
        createReplacer(arg0: $StructureModificationContext): $StructureRepaletter$Replacer;
        codec(): $MapCodec<$StructureRepaletter>;
        replacesBlocks(): $TagKey<$Block>;
        static CODEC: $MapCodec<$WeightedTagStructureRepaletter>;
        constructor(replacesBlocks: $TagKey_<$Block>, replacesWith: $WeightedRandomList<$WeightedEntry$Wrapper_<$Block_>>);
    }
    /**
     * Values that may be interpreted as {@link $WeightedTagStructureRepaletter}.
     */
    export type $WeightedTagStructureRepaletter_ = { replacesBlocks?: $TagKey_<$Block>, replacesWith?: $WeightedRandomList<$WeightedEntry$Wrapper_<$Block_>>,  } | [replacesBlocks?: $TagKey_<$Block>, replacesWith?: $WeightedRandomList<$WeightedEntry$Wrapper_<$Block_>>, ];
}
