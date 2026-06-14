import { $SecureRandom, $AlgorithmConstraints, $Provider } from "@package/java/security";
import { $Collection_, $List, $List_, $Collection } from "@package/java/util";

declare module "@package/javax/net/ssl" {
    export class $SSLContext {
        static getDefault(): $SSLContext;
        static getInstance(arg0: string, arg1: $Provider): $SSLContext;
        static getInstance(arg0: string, arg1: string): $SSLContext;
        static getInstance(arg0: string): $SSLContext;
        init(arg0: $KeyManager[], arg1: $TrustManager[], arg2: $SecureRandom): void;
        getProtocol(): string;
        getProvider(): $Provider;
        static setDefault(arg0: $SSLContext): void;
        getServerSocketFactory(): $SSLServerSocketFactory;
        getSocketFactory(): $SSLSocketFactory;
        createSSLEngine(): $SSLEngine;
        createSSLEngine(arg0: string, arg1: number): $SSLEngine;
        getServerSessionContext(): $SSLSessionContext;
        getClientSessionContext(): $SSLSessionContext;
        getDefaultSSLParameters(): $SSLParameters;
        getSupportedSSLParameters(): $SSLParameters;
        get protocol(): string;
        get provider(): $Provider;
        get serverSocketFactory(): $SSLServerSocketFactory;
        get socketFactory(): $SSLSocketFactory;
        get serverSessionContext(): $SSLSessionContext;
        get clientSessionContext(): $SSLSessionContext;
        get defaultSSLParameters(): $SSLParameters;
        get supportedSSLParameters(): $SSLParameters;
    }
    export class $SSLParameters {
        setAlgorithmConstraints(arg0: $AlgorithmConstraints): void;
        setSNIMatchers(arg0: $Collection_<$SNIMatcher>): void;
        setApplicationProtocols(arg0: string[]): void;
        setUseCipherSuitesOrder(arg0: boolean): void;
        setEnableRetransmissions(arg0: boolean): void;
        setSignatureSchemes(arg0: string[]): void;
        setNamedGroups(arg0: string[]): void;
        getServerNames(): $List<$SNIServerName>;
        getSNIMatchers(): $Collection<$SNIMatcher>;
        getApplicationProtocols(): string[];
        getSignatureSchemes(): string[];
        getNamedGroups(): string[];
        getUseCipherSuitesOrder(): boolean;
        getEnableRetransmissions(): boolean;
        getMaximumPacketSize(): number;
        getAlgorithmConstraints(): $AlgorithmConstraints;
        setNeedClientAuth(arg0: boolean): void;
        getNeedClientAuth(): boolean;
        setWantClientAuth(arg0: boolean): void;
        getWantClientAuth(): boolean;
        getProtocols(): string[];
        getCipherSuites(): string[];
        setEndpointIdentificationAlgorithm(arg0: string): void;
        setServerNames(arg0: $List_<$SNIServerName>): void;
        setMaximumPacketSize(arg0: number): void;
        getEndpointIdentificationAlgorithm(): string;
        setCipherSuites(arg0: string[]): void;
        setProtocols(arg0: string[]): void;
        constructor(arg0: string[], arg1: string[]);
        constructor(arg0: string[]);
        constructor();
    }
}
