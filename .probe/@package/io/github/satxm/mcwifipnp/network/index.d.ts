import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Config } from "@package/io/github/satxm/mcwifipnp";
import { $Runnable, $Record } from "@package/java/lang";

declare module "@package/io/github/satxm/mcwifipnp/network" {
    export class $UPnPModule extends $Record implements $Runnable {
        run(): void;
        port(): number;
        static stop(arg0: $MinecraftServer): void;
        stop(): void;
        displayName(): string;
        static has(arg0: $MinecraftServer): boolean;
        static startIfEnabled(arg0: $MinecraftServer, arg1: $Config): void;
        constructor(port: number, displayName: string);
    }
    /**
     * Values that may be interpreted as {@link $UPnPModule}.
     */
    export type $UPnPModule_ = { port?: number, displayName?: string,  } | [port?: number, displayName?: string, ];
    export class $IUPnPProvider {
    }
    export interface $IUPnPProvider {
        getUPnPInstance(): $UPnPModule;
        setUPnPInstance(arg0: $UPnPModule_): void;
    }
}
