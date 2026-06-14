import { $IMaidTask } from "@package/com/github/tartaricacid/touhoulittlemaid/api/task";
import { $AbstractMaidContainerGui } from "@package/com/github/tartaricacid/touhoulittlemaid/client/gui/entity/maid";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $EntityMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/entity/passive";
import { $AnimationFile, $AnimationFile_ } from "@package/com/github/tartaricacid/touhoulittlemaid/geckolib3/file";
import { $ConfigEntryBuilder, $ConfigBuilder } from "@package/me/shedaniel/clothconfig2/api";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $AbstractWidget } from "@package/net/minecraft/client/gui/components";
import { $IMaid } from "@package/com/github/tartaricacid/touhoulittlemaid/api/entity";
import { $Enum } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $EnumMap, $Map_ } from "@package/java/util";
import { $MaidModels$ModelData } from "@package/com/github/tartaricacid/touhoulittlemaid/client/resource/models";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/api/event/client" {
    export class $AddClothConfigEvent extends $Event {
        getRoot(): $ConfigBuilder;
        getEntryBuilder(): $ConfigEntryBuilder;
        constructor(arg0: $ConfigBuilder, arg1: $ConfigEntryBuilder);
        get root(): $ConfigBuilder;
        get entryBuilder(): $ConfigEntryBuilder;
    }
    export class $MaidContainerGuiEvent$Render extends $MaidContainerGuiEvent {
        getPartialTicks(): number;
        getMouseY(): number;
        getMouseX(): number;
        getGraphics(): $GuiGraphics;
        constructor(arg0: $AbstractMaidContainerGui<never>, arg1: number, arg2: number, arg3: $Map_<string, $AbstractWidget>, arg4: $GuiGraphics, arg5: number, arg6: number, arg7: number);
        get partialTicks(): number;
        get mouseY(): number;
        get mouseX(): number;
        get graphics(): $GuiGraphics;
    }
    export class $DefaultGeckoAnimationEvent$AnimationType extends $Enum<$DefaultGeckoAnimationEvent$AnimationType> {
        static values(): $DefaultGeckoAnimationEvent$AnimationType[];
        static valueOf(arg0: string): $DefaultGeckoAnimationEvent$AnimationType;
        static CHAIR: $DefaultGeckoAnimationEvent$AnimationType;
        static IM: $DefaultGeckoAnimationEvent$AnimationType;
        static TAC: $DefaultGeckoAnimationEvent$AnimationType;
        static ISS: $DefaultGeckoAnimationEvent$AnimationType;
        static MAID: $DefaultGeckoAnimationEvent$AnimationType;
    }
    /**
     * Values that may be interpreted as {@link $DefaultGeckoAnimationEvent$AnimationType}.
     */
    export type $DefaultGeckoAnimationEvent$AnimationType_ = "maid" | "tac" | "chair" | "iss" | "im";
    export class $MaidContainerGuiEvent extends $Event {
        getButton(arg0: string): $AbstractWidget;
        getGui(): $AbstractMaidContainerGui<never>;
        getLeftPos(): number;
        getTopPos(): number;
        hasButton(arg0: string): boolean;
        constructor(arg0: $AbstractMaidContainerGui<never>, arg1: number, arg2: number, arg3: $Map_<string, $AbstractWidget>);
        get gui(): $AbstractMaidContainerGui<never>;
        get leftPos(): number;
        get topPos(): number;
    }
    export class $OpenPatchouliBookEvent extends $Event {
        getTask(): $IMaidTask;
        getMaid(): $EntityMaid;
        constructor(arg0: $EntityMaid, arg1: $IMaidTask);
        get task(): $IMaidTask;
        get maid(): $EntityMaid;
    }
    export class $MaidContainerGuiEvent$Init extends $MaidContainerGuiEvent {
        addButton(arg0: string, arg1: $AbstractWidget): void;
        removeButton(arg0: string): void;
        constructor(arg0: $AbstractMaidContainerGui<never>, arg1: number, arg2: number, arg3: $Map_<string, $AbstractWidget>);
    }
    export class $RenderMaidEvent extends $Event implements $ICancellableEvent {
        getModelData(): $MaidModels$ModelData;
        getMaid(): $IMaid;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $IMaid, arg1: $MaidModels$ModelData);
        get modelData(): $MaidModels$ModelData;
        get maid(): $IMaid;
    }
    export class $DefaultGeckoAnimationEvent extends $Event {
        addAnimation(arg0: $AnimationFile_, arg1: $ResourceLocation_): void;
        addAnimation(arg0: $DefaultGeckoAnimationEvent$AnimationType_, arg1: $ResourceLocation_): void;
        /**
         * @deprecated
         */
        getChairAnimationFile(): $AnimationFile;
        /**
         * @deprecated
         */
        getMaidAnimationFile(): $AnimationFile;
        /**
         * @deprecated
         */
        getTacAnimationFile(): $AnimationFile;
        getAnimationFile(arg0: $DefaultGeckoAnimationEvent$AnimationType_): $AnimationFile;
        constructor(arg0: $EnumMap<$DefaultGeckoAnimationEvent$AnimationType_, $AnimationFile_>);
        get chairAnimationFile(): $AnimationFile;
        get maidAnimationFile(): $AnimationFile;
        get tacAnimationFile(): $AnimationFile;
    }
    export class $MaidContainerGuiEvent$Tooltip extends $MaidContainerGuiEvent {
        getPartialTicks(): number;
        getMouseY(): number;
        getMouseX(): number;
        getGraphics(): $GuiGraphics;
        constructor(arg0: $AbstractMaidContainerGui<never>, arg1: number, arg2: number, arg3: $Map_<string, $AbstractWidget>, arg4: $GuiGraphics, arg5: number, arg6: number, arg7: number);
        get partialTicks(): number;
        get mouseY(): number;
        get mouseX(): number;
        get graphics(): $GuiGraphics;
    }
}
