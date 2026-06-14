import { $ModelPart, $ModelPart$Cube, $ModelPart$Polygon } from "@package/net/minecraft/client/model/geom";
import { $ModelPartAccessor$Workaround_ } from "@package/io/github/kosmx/bendylib";
import { $Map, $List } from "@package/java/util";

declare module "@package/io/github/kosmx/bendylib/impl/accessors" {
    export class $IModelPartAccessor {
    }
    export interface $IModelPartAccessor {
        getChildren(): $Map<string, $ModelPart>;
        setWorkaround(arg0: $ModelPartAccessor$Workaround_): void;
        getCuboids(): $List<$ModelPart$Cube>;
        get children(): $Map<string, $ModelPart>;
        set workaround(value: $ModelPartAccessor$Workaround_);
        get cuboids(): $List<$ModelPart$Cube>;
    }
    export class $CuboidSideAccessor {
    }
    export interface $CuboidSideAccessor {
        getSides(): $ModelPart$Polygon[];
        doSideSwapping(): void;
        resetSides(): void;
        setSides(arg0: $ModelPart$Polygon[]): void;
    }
}
