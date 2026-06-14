import { $Direction_ } from "@package/net/minecraft/core";
import { $ModelPart, $PartPose, $ModelPart$Cube } from "@package/net/minecraft/client/model/geom";
import { $Set_, $List, $List_, $Map } from "@package/java/util";

declare module "@package/net/minecraft/client/model/geom/builders" {
    export class $CubeDefinition {
        bake(arg0: number, arg1: number): $ModelPart$Cube;
    }
    export class $CubeDeformation {
        extend(arg0: number, arg1: number, arg2: number): $CubeDeformation;
        extend(arg0: number): $CubeDeformation;
        static NONE: $CubeDeformation;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: number);
    }
    export class $PartDefinition {
        getChild(arg0: string): $PartDefinition;
        addOrReplaceChild(arg0: string, arg1: $CubeListBuilder, arg2: $PartPose): $PartDefinition;
        bake(arg0: number, arg1: number): $ModelPart;
        partPose: $PartPose;
        children: $Map<string, $PartDefinition>;
        cubes: $List<$CubeDefinition>;
        constructor(arg0: $List_<$CubeDefinition>, arg1: $PartPose);
    }
    export class $LayerDefinition {
        static create(arg0: $MeshDefinition, arg1: number, arg2: number): $LayerDefinition;
        bakeRoot(): $ModelPart;
        material: $MaterialDefinition;
        mesh: $MeshDefinition;
        constructor(arg0: $MeshDefinition, arg1: $MaterialDefinition);
    }
    export class $CubeListBuilder {
        static create(): $CubeListBuilder;
        mirror(): $CubeListBuilder;
        mirror(arg0: boolean): $CubeListBuilder;
        texOffs(arg0: number, arg1: number): $CubeListBuilder;
        addBox(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $CubeDeformation, arg7: number, arg8: number): $CubeListBuilder;
        addBox(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): $CubeListBuilder;
        addBox(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $CubeDeformation): $CubeListBuilder;
        addBox(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): $CubeListBuilder;
        addBox(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): $CubeListBuilder;
        addBox(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $CubeDeformation, arg8: number, arg9: number): $CubeListBuilder;
        addBox(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $CubeListBuilder;
        addBox(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $Set_<$Direction_>): $CubeListBuilder;
        addBox(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $CubeDeformation): $CubeListBuilder;
        getCubes(): $List<$CubeDefinition>;
        constructor();
        get cubes(): $List<$CubeDefinition>;
    }
    export class $MaterialDefinition {
        constructor(arg0: number, arg1: number);
    }
    export class $MeshDefinition {
        getRoot(): $PartDefinition;
        constructor();
        get root(): $PartDefinition;
    }
    export class $UVPair {
        v(): number;
        u(): number;
        constructor(arg0: number, arg1: number);
    }
}
