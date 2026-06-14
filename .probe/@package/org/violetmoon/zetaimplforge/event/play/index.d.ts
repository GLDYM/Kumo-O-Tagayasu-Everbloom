import { $Event } from "@package/net/neoforged/bus/api";
import { $Recipe } from "@package/net/minecraft/world/item/crafting";
import { $ZScreenshot } from "@package/org/violetmoon/zeta/client/event/play";
import { $ZRecipeCrawl, $ZRecipeCrawl$Visit$Shapeless, $ZRecipeCrawl$Visit, $ZRecipeCrawl$Visit$Shaped, $ZRecipeCrawl$Reset, $ZRecipeCrawl$Digest, $ZRecipeCrawl$Visit$Custom, $ZRecipeCrawl$Visit$Misc, $ZRecipeCrawl$Starting, $ZRecipeCrawl$Visit$Cooking } from "@package/org/violetmoon/zeta/event/play";
import { $IZetaPlayEvent } from "@package/org/violetmoon/zeta/event/bus";

declare module "@package/org/violetmoon/zetaimplforge/event/play" {
    export class $ForgeZRecipeCrawl$Reset extends $ForgeZRecipeCrawl<$ZRecipeCrawl$Reset> {
        constructor(arg0: $ZRecipeCrawl$Reset);
    }
    export class $ForgeZRecipeCrawl$Starting extends $ForgeZRecipeCrawl<$ZRecipeCrawl$Starting> {
        constructor(arg0: $ZRecipeCrawl$Starting);
    }
    export class $ForgeZRecipeCrawl$Digest extends $ForgeZRecipeCrawl<$ZRecipeCrawl$Digest> {
        constructor(arg0: $ZRecipeCrawl$Digest);
    }
    export class $ForgeZRecipeCrawl$Visit<T extends $Recipe<never>> extends $ForgeZRecipeCrawl<$ZRecipeCrawl$Visit<any>> {
        constructor(arg0: $ZRecipeCrawl$Visit<any>);
    }
    export class $ForgeZRecipeCrawl<W extends $ZRecipeCrawl> extends $Event implements $IZetaPlayEvent {
        get(): W;
        constructor(arg0: W);
    }
    export class $ForgeZRecipeCrawl$Visit$Custom extends $ForgeZRecipeCrawl<$ZRecipeCrawl$Visit$Custom> {
        constructor(arg0: $ZRecipeCrawl$Visit$Custom);
    }
    export class $ForgeZRecipeCrawl$Visit$Cooking extends $ForgeZRecipeCrawl<$ZRecipeCrawl$Visit$Cooking> {
        constructor(arg0: $ZRecipeCrawl$Visit$Cooking);
    }
    export class $ForgeZRecipeCrawl$Visit$Shaped extends $ForgeZRecipeCrawl<$ZRecipeCrawl$Visit$Shaped> {
        constructor(arg0: $ZRecipeCrawl$Visit$Shaped);
    }
    export class $ForgeZRecipeCrawl$Visit$Misc extends $ForgeZRecipeCrawl<$ZRecipeCrawl$Visit$Misc> {
        constructor(arg0: $ZRecipeCrawl$Visit$Misc);
    }
    export class $ForgeZScreenshot extends $Event implements $ZScreenshot {
        constructor();
    }
    export class $ForgeZRecipeCrawl$Visit$Shapeless extends $ForgeZRecipeCrawl<$ZRecipeCrawl$Visit$Shapeless> {
        constructor(arg0: $ZRecipeCrawl$Visit$Shapeless);
    }
}
