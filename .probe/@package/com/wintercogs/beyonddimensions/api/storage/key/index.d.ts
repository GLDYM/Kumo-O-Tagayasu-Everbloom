import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Item$TooltipContext, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List } from "@package/java/util";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $Record, $Object, $Class } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as impl from "@package/com/wintercogs/beyonddimensions/api/storage/key/impl";

declare module "@package/com/wintercogs/beyonddimensions/api/storage/key" {
    export class $IStackRender {
    }
    export interface $IStackRender {
        getDisplayName(arg0: $IStackKey<never>): $Component;
        render(arg0: $GuiGraphics, arg1: $IStackKey<never>, arg2: number, arg3: number): void;
        getTooltipLines(arg0: $IStackKey<never>, arg1: number, arg2: $Item$TooltipContext, arg3: $Player, arg4: $TooltipFlag): $List<$Component>;
        renderTooltip(arg0: $GuiGraphics, arg1: $Font, arg2: $IStackKey<never>, arg3: number, arg4: number, arg5: number): void;
        getTooltipImage(arg0: $IStackKey<never>): ($TooltipComponent) | undefined;
        getCountText(arg0: number): string;
        renderAmount(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
    }
    export class $IStackKey<T> {
        static CODEC: $Codec<$IStackKey<never>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $IStackKey<never>>;
    }
    export interface $IStackKey<T> {
        equals(arg0: $Object): boolean;
        hashCode(): number;
        isEmpty(): boolean;
        getSource(): $Object;
        deserialize(arg0: $RegistryFriendlyByteBuf): $IStackKey<T>;
        serialize(arg0: $RegistryFriendlyByteBuf): void;
        getEmpty(): $IStackKey<T>;
        getModId(): string;
        hasTag(arg0: $TagKey_<never>): boolean;
        getTags(): $Stream<$TagKey<never>>;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $IStackKey<T>;
        codec(): $MapCodec<$IStackKey<T>>;
        isSame(arg0: $IStackKey<never>): boolean;
        copyStack(): T;
        getTypeId(): $ResourceLocation;
        getReadOnlyStack(): T;
        getStackClass(): $Class<T>;
        copyStackWithCount(arg0: number): T;
        fromSourceObject(arg0: $Object, arg1: $DataComponentPatch_): $IStackKey<T>;
        getRenderStack(): T;
        getEmptyStack(): T;
        getSourceClass(): $Class<never>;
        fromStackObject(arg0: $Object): $KeyAmount;
        getRender(): $IStackRender;
        getVanillaMaxStackSize(): number;
        isSameTypeSameComponents(arg0: $IStackKey<never>): boolean;
        getCustomMaxStackSize(): number;
        get source(): $Object;
        get modId(): string;
        get tags(): $Stream<$TagKey<never>>;
        get typeId(): $ResourceLocation;
        get readOnlyStack(): T;
        get stackClass(): $Class<T>;
        get renderStack(): T;
        get emptyStack(): T;
        get sourceClass(): $Class<never>;
        get render(): $IStackRender;
        get vanillaMaxStackSize(): number;
        get customMaxStackSize(): number;
    }
    export class $KeyAmount extends $Record {
        isEmpty(): boolean;
        key(): $IStackKey<never>;
        amount(): number;
        toStack(): $Object;
        static TYPE_CODEC: $MapCodec<$KeyAmount>;
        static CODEC: $Codec<$KeyAmount>;
        static AMOUNT_COMPAT: $MapCodec<number>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $KeyAmount>;
        constructor(key: $IStackKey<never>, amount: number);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $KeyAmount}.
     */
    export type $KeyAmount_ = { key?: $IStackKey<never>, amount?: number,  } | [key?: $IStackKey<never>, amount?: number, ];
}
