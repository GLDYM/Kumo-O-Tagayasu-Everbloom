import { $Decoder_ } from "@package/com/mojang/serialization";
import { $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $Tag_ } from "@package/net/minecraft/nbt";
import { $Pair, $Either } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ImmutableStringReader, $StringReader } from "@package/com/mojang/brigadier";
import { $Grammar, $ResourceLookupRule } from "@package/net/minecraft/util/parsing/packrat/commands";
import { $List, $List_, $Collection } from "@package/java/util";
import { $CommandSourceStack, $CommandBuildContext } from "@package/net/minecraft/commands";
import { $Predicate, $Predicate_, $Function_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $Suggestions, $SuggestionsBuilder } from "@package/com/mojang/brigadier/suggestion";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $DataComponentType_, $DataComponentPatch_, $DataComponentPatch } from "@package/net/minecraft/core/component";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $CommandFunction } from "@package/net/minecraft/commands/functions";
import { $Record } from "@package/java/lang";
import { $ArgumentType } from "@package/com/mojang/brigadier/arguments";

declare module "@package/net/minecraft/commands/arguments/item" {
    export class $ComponentPredicateParser$PredicateLookupRule<T, C, P> extends $ResourceLookupRule<$ComponentPredicateParser$Context<T, C, P>, P> {
    }
    export class $ItemParser {
        parse(arg0: $StringReader): $ItemParser$ItemResult;
        parse(arg0: $StringReader, arg1: $ItemParser$Visitor): void;
        fillSuggestions(arg0: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static SYNTAX_REMOVED_COMPONENT: string;
        static SYNTAX_END_COMPONENTS: string;
        static SYNTAX_COMPONENT_ASSIGNMENT: string;
        static SYNTAX_START_COMPONENTS: string;
        static SYNTAX_COMPONENT_SEPARATOR: string;
        constructor(arg0: $HolderLookup$Provider);
    }
    export class $ItemParser$State {
    }
    export class $ItemArgument implements $ArgumentType<$ItemInput> {
        static item(arg0: $CommandBuildContext): $ItemArgument;
        static getItem<S>(arg0: $CommandContext<S>, arg1: string): $ItemInput;
        getExamples(): $Collection<string>;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): $ItemInput;
        parse(arg0: $StringReader): $ItemInput;
        constructor(arg0: $CommandBuildContext);
        get examples(): $Collection<string>;
    }
    export class $ComponentPredicateParser$ComponentLookupRule<T, C, P> extends $ResourceLookupRule<$ComponentPredicateParser$Context<T, C, P>, C> {
    }
    export class $ComponentPredicateParser {
        static createGrammar<T, C, P>(arg0: $ComponentPredicateParser$Context<T, C, P>): $Grammar<$List<T>>;
        constructor();
    }
    export class $ItemPredicateArgument$Result {
    }
    export interface $ItemPredicateArgument$Result extends $Predicate<$ItemStack> {
    }
    /**
     * Values that may be interpreted as {@link $ItemPredicateArgument$Result}.
     */
    export type $ItemPredicateArgument$Result_ = (() => void);
    export class $ComponentPredicateParser$Context<T, C, P> {
    }
    export interface $ComponentPredicateParser$Context<T, C, P> {
        negate(arg0: T): T;
        anyOf(arg0: $List_<T>): T;
        forTagType(arg0: $ImmutableStringReader, arg1: $ResourceLocation_): T;
        createPredicateTest(arg0: $ImmutableStringReader, arg1: P, arg2: $Tag_): T;
        createComponentTest(arg0: $ImmutableStringReader, arg1: C): T;
        createComponentTest(arg0: $ImmutableStringReader, arg1: C, arg2: $Tag_): T;
        lookupPredicateType(arg0: $ImmutableStringReader, arg1: $ResourceLocation_): P;
        lookupComponentType(arg0: $ImmutableStringReader, arg1: $ResourceLocation_): C;
        listComponentTypes(): $Stream<$ResourceLocation>;
        forElementType(arg0: $ImmutableStringReader, arg1: $ResourceLocation_): T;
        listPredicateTypes(): $Stream<$ResourceLocation>;
        listTagTypes(): $Stream<$ResourceLocation>;
        listElementTypes(): $Stream<$ResourceLocation>;
    }
    export class $ComponentPredicateParser$ElementLookupRule<T, C, P> extends $ResourceLookupRule<$ComponentPredicateParser$Context<T, C, P>, T> {
    }
    export class $ItemParser$SuggestionsVisitor implements $ItemParser$Visitor {
        visitRemovedComponent<T>(arg0: $DataComponentType_<T>): void;
        visitItem(arg0: $Holder_<$Item>): void;
        visitSuggestions(arg0: $Function_<$SuggestionsBuilder, $CompletableFuture<$Suggestions>>): void;
        visitComponent<T>(arg0: $DataComponentType_<T>, arg1: T): void;
    }
    export class $ItemParser$ItemResult extends $Record {
        item(): $Holder<$Item>;
        components(): $DataComponentPatch;
        constructor(arg0: $Holder_<$Item>, arg1: $DataComponentPatch_);
    }
    /**
     * Values that may be interpreted as {@link $ItemParser$ItemResult}.
     */
    export type $ItemParser$ItemResult_ = { item?: $Holder_<$Item>, components?: $DataComponentPatch_,  } | [item?: $Holder_<$Item>, components?: $DataComponentPatch_, ];
    export class $ItemPredicateArgument implements $ArgumentType<$ItemPredicateArgument$Result> {
        getExamples(): $Collection<string>;
        static itemPredicate(arg0: $CommandBuildContext): $ItemPredicateArgument;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getItemPredicate(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $ItemPredicateArgument$Result;
        parse<S>(arg0: $StringReader, arg1: S): $ItemPredicateArgument$Result;
        parse(arg0: $StringReader): $ItemPredicateArgument$Result;
        constructor(arg0: $CommandBuildContext);
        get examples(): $Collection<string>;
    }
    export class $ItemPredicateArgument$Context implements $ComponentPredicateParser$Context<$Predicate<$ItemStack>, $ItemPredicateArgument$ComponentWrapper, $ItemPredicateArgument$PredicateWrapper> {
    }
    export class $FunctionArgument$Result {
    }
    export interface $FunctionArgument$Result {
        create(arg0: $CommandContext<$CommandSourceStack>): $Collection<$CommandFunction<$CommandSourceStack>>;
        unwrap(arg0: $CommandContext<$CommandSourceStack>): $Pair<$ResourceLocation, $Either<$CommandFunction<$CommandSourceStack>, $Collection<$CommandFunction<$CommandSourceStack>>>>;
        unwrapToCollection(arg0: $CommandContext<$CommandSourceStack>): $Pair<$ResourceLocation, $Collection<$CommandFunction<$CommandSourceStack>>>;
    }
    export class $ComponentPredicateParser$TagLookupRule<T, C, P> extends $ResourceLookupRule<$ComponentPredicateParser$Context<T, C, P>, T> {
    }
    export class $FunctionArgument implements $ArgumentType<$FunctionArgument$Result> {
        static functions(): $FunctionArgument;
        getExamples(): $Collection<string>;
        static getFunctions(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Collection<$CommandFunction<$CommandSourceStack>>;
        static getFunctionCollection(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Pair<$ResourceLocation, $Collection<$CommandFunction<$CommandSourceStack>>>;
        static getFunctionOrTag(arg0: $CommandContext<$CommandSourceStack>, arg1: string): $Pair<$ResourceLocation, $Either<$CommandFunction<$CommandSourceStack>, $Collection<$CommandFunction<$CommandSourceStack>>>>;
        parse<S>(arg0: $StringReader, arg1: S): $FunctionArgument$Result;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse(arg0: $StringReader): $FunctionArgument$Result;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $ItemPredicateArgument$PredicateWrapper extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ItemPredicateArgument$PredicateWrapper}.
     */
    export type $ItemPredicateArgument$PredicateWrapper_ = { id?: $ResourceLocation_, type?: $Decoder_<$Predicate<$ItemStack>>,  } | [id?: $ResourceLocation_, type?: $Decoder_<$Predicate<$ItemStack>>, ];
    export class $ItemInput {
        getItem(): $Item;
        serialize(arg0: $HolderLookup$Provider): string;
        createItemStack(arg0: number, arg1: boolean): $ItemStack;
        constructor(arg0: $Holder_<$Item>, arg1: $DataComponentPatch_);
        get item(): $Item;
    }
    export class $ItemPredicateArgument$ComponentWrapper extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ItemPredicateArgument$ComponentWrapper}.
     */
    export type $ItemPredicateArgument$ComponentWrapper_ = { presenceChecker?: $Predicate_<$ItemStack>, valueChecker?: $Decoder_<$Predicate<$ItemStack>>, id?: $ResourceLocation_,  } | [presenceChecker?: $Predicate_<$ItemStack>, valueChecker?: $Decoder_<$Predicate<$ItemStack>>, id?: $ResourceLocation_, ];
    export class $ItemParser$Visitor {
    }
    export interface $ItemParser$Visitor {
        visitRemovedComponent<T>(arg0: $DataComponentType_<T>): void;
        visitItem(arg0: $Holder_<$Item>): void;
        visitSuggestions(arg0: $Function_<$SuggestionsBuilder, $CompletableFuture<$Suggestions>>): void;
        visitComponent<T>(arg0: $DataComponentType_<T>, arg1: T): void;
    }
}
