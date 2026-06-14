import { $GameType } from "@package/net/minecraft/world/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Path_, $Path } from "@package/java/nio/file";
export * as network from "@package/io/github/satxm/mcwifipnp/network";
export * as mixin from "@package/io/github/satxm/mcwifipnp/mixin";

declare module "@package/io/github/satxm/mcwifipnp" {
    export class $Config {
        static read(arg0: $Path_): $Config;
        static read(arg0: $MinecraftServer): $Config;
        save(): void;
        applyTo(arg0: $MinecraftServer): void;
        static getConfigPath(arg0: $MinecraftServer): $Path;
        static readFromPublishedServer(arg0: $MinecraftServer): $Config;
        saveAndApply(arg0: $MinecraftServer): void;
        readFromRunningServer(arg0: $MinecraftServer): void;
        onlineMode: boolean;
        gameType: $GameType;
        motd: string;
        enforceWhitelist: boolean;
        maxPlayers: number;
        allowEveryoneCheat: boolean;
        useUPnP: boolean;
        allowHostCheat: boolean;
        getPublicIP: boolean;
        port: number;
        enableUUIDFixer: boolean;
        removePlayerReportingButton: boolean;
        enablePvP: boolean;
    }
}
