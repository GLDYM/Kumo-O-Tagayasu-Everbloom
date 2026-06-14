import { $BedrockModel } from "@package/com/github/tartaricacid/touhoulittlemaid/client/model/bedrock";
import { $Mob } from "@package/net/minecraft/world/entity";
import { $MaidModelInfo } from "@package/com/github/tartaricacid/touhoulittlemaid/client/resource/pojo";
import { $List_, $List } from "@package/java/util";
import { $Object } from "@package/java/lang";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/client/resource/models" {
    export class $MaidModels$ModelData {
        getInfo(): $MaidModelInfo;
        getModel(): $BedrockModel<$Mob>;
        setInfo(arg0: $MaidModelInfo): void;
        setAnimations(arg0: $List_<$Object>): void;
        getAnimations(): $List<$Object>;
        setModel(arg0: $BedrockModel<$Mob>): void;
        constructor(arg0: $BedrockModel<$Mob>, arg1: $MaidModelInfo, arg2: $List_<$Object>);
    }
}
