export * as legacy from "@package/org/apache/maven/repository/legacy";

declare module "@package/org/apache/maven/repository" {
    export class $Proxy {
        getHost(): string;
        getPort(): number;
        getProtocol(): string;
        setHost(arg0: string): void;
        setPort(arg0: number): void;
        setProtocol(arg0: string): void;
        setPassword(arg0: string): void;
        getPassword(): string;
        getUserName(): string;
        getNtlmHost(): string;
        setNtlmDomain(arg0: string): void;
        getNtlmDomain(): string;
        setUserName(arg0: string): void;
        getNonProxyHosts(): string;
        setNtlmHost(arg0: string): void;
        setNonProxyHosts(arg0: string): void;
        static PROXY_HTTP: string;
        static PROXY_SOCKS4: string;
        static PROXY_SOCKS5: string;
        constructor();
    }
}
