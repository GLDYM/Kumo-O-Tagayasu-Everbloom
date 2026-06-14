import { $Duration, $Duration_ } from "@package/java/time";
import { $BiPredicate_, $Function_, $Function } from "@package/java/util/function";
import { $SSLContext, $SSLParameters, $SSLSession } from "@package/javax/net/ssl";
import { $CookieHandler, $Authenticator, $InetAddress, $ProxySelector, $URI } from "@package/java/net";
import { $Executor_, $ConcurrentMap, $CompletableFuture, $Executor, $Flow$Publisher } from "@package/java/util/concurrent";
import { $Enum, $AutoCloseable } from "@package/java/lang";
import { $ByteBuffer } from "@package/java/nio";

declare module "@package/java/net/http" {
    export class $HttpResponse$PushPromiseHandler<T> {
        static of<T>(arg0: $Function_<$HttpRequest, $HttpResponse$BodyHandler<T>>, arg1: $ConcurrentMap<$HttpRequest, $CompletableFuture<$HttpResponse<T>>>): $HttpResponse$PushPromiseHandler<T>;
    }
    export interface $HttpResponse$PushPromiseHandler<T> {
        applyPushPromise(arg0: $HttpRequest, arg1: $HttpRequest, arg2: $Function_<$HttpResponse$BodyHandler<T>, $CompletableFuture<$HttpResponse<T>>>): void;
    }
    /**
     * Values that may be interpreted as {@link $HttpResponse$PushPromiseHandler}.
     */
    export type $HttpResponse$PushPromiseHandler_<T> = ((arg0: $HttpRequest, arg1: $HttpRequest, arg2: $Function<$HttpResponse$BodyHandler<T>, $CompletableFuture<$HttpResponse<T>>>) => void);
    export class $HttpClient$Redirect extends $Enum<$HttpClient$Redirect> {
        static values(): $HttpClient$Redirect[];
        static valueOf(arg0: string): $HttpClient$Redirect;
        static NEVER: $HttpClient$Redirect;
        static ALWAYS: $HttpClient$Redirect;
        static NORMAL: $HttpClient$Redirect;
    }
    /**
     * Values that may be interpreted as {@link $HttpClient$Redirect}.
     */
    export type $HttpClient$Redirect_ = "never" | "always" | "normal";
    export class $HttpResponse<T> {
    }
    export interface $HttpResponse<T> {
        version(): $HttpClient$Version;
        uri(): $URI;
        statusCode(): number;
        body(): T;
        request(): $HttpRequest;
        headers(): $HttpHeaders;
        previousResponse(): ($HttpResponse<T>) | undefined;
        sslSession(): ($SSLSession) | undefined;
    }
    export class $HttpClient$Version extends $Enum<$HttpClient$Version> {
        static values(): $HttpClient$Version[];
        static valueOf(arg0: string): $HttpClient$Version;
        static HTTP_1_1: $HttpClient$Version;
        static HTTP_2: $HttpClient$Version;
    }
    /**
     * Values that may be interpreted as {@link $HttpClient$Version}.
     */
    export type $HttpClient$Version_ = "http_1_1" | "http_2";
    export class $HttpClient implements $AutoCloseable {
        shutdown(): void;
        version(): $HttpClient$Version;
        isTerminated(): boolean;
        close(): void;
        proxy(): ($ProxySelector) | undefined;
        executor(): ($Executor) | undefined;
        awaitTermination(arg0: $Duration_): boolean;
        shutdownNow(): void;
        connectTimeout(): ($Duration) | undefined;
        static newBuilder(): $HttpClient$Builder;
        sslContext(): $SSLContext;
        followRedirects(): $HttpClient$Redirect;
        send<T>(arg0: $HttpRequest, arg1: $HttpResponse$BodyHandler_<T>): $HttpResponse<T>;
        static newHttpClient(): $HttpClient;
        sslParameters(): $SSLParameters;
        newWebSocketBuilder(): $WebSocket$Builder;
        cookieHandler(): ($CookieHandler) | undefined;
        authenticator(): ($Authenticator) | undefined;
        sendAsync<T>(arg0: $HttpRequest, arg1: $HttpResponse$BodyHandler_<T>, arg2: $HttpResponse$PushPromiseHandler_<T>): $CompletableFuture<$HttpResponse<T>>;
        sendAsync<T>(arg0: $HttpRequest, arg1: $HttpResponse$BodyHandler_<T>): $CompletableFuture<$HttpResponse<T>>;
        get terminated(): boolean;
    }
    export class $WebSocket$Builder {
    }
    export interface $WebSocket$Builder {
        header(arg0: string, arg1: string): $WebSocket$Builder;
        connectTimeout(arg0: $Duration_): $WebSocket$Builder;
        subprotocols(arg0: string, ...arg1: string[]): $WebSocket$Builder;
        buildAsync(arg0: $URI, arg1: $WebSocket$Listener): $CompletableFuture<$WebSocket>;
    }
    export class $HttpRequest$BodyPublisher {
    }
    export interface $HttpRequest$BodyPublisher extends $Flow$Publisher<$ByteBuffer> {
        contentLength(): number;
    }
    export class $HttpResponse$BodyHandler<T> {
    }
    export interface $HttpResponse$BodyHandler<T> {
        apply(arg0: $HttpResponse$ResponseInfo): $HttpResponse$BodySubscriber<T>;
    }
    /**
     * Values that may be interpreted as {@link $HttpResponse$BodyHandler}.
     */
    export type $HttpResponse$BodyHandler_<T> = ((arg0: $HttpResponse$ResponseInfo) => $HttpResponse$BodySubscriber<T>);
    export class $HttpClient$Builder {
        static NO_PROXY: $ProxySelector;
    }
    export interface $HttpClient$Builder {
        priority(arg0: number): $HttpClient$Builder;
        version(arg0: $HttpClient$Version_): $HttpClient$Builder;
        proxy(arg0: $ProxySelector): $HttpClient$Builder;
        build(): $HttpClient;
        executor(arg0: $Executor_): $HttpClient$Builder;
        connectTimeout(arg0: $Duration_): $HttpClient$Builder;
        localAddress(arg0: $InetAddress): $HttpClient$Builder;
        sslContext(arg0: $SSLContext): $HttpClient$Builder;
        followRedirects(arg0: $HttpClient$Redirect_): $HttpClient$Builder;
        sslParameters(arg0: $SSLParameters): $HttpClient$Builder;
        cookieHandler(arg0: $CookieHandler): $HttpClient$Builder;
        authenticator(arg0: $Authenticator): $HttpClient$Builder;
    }
    export class $HttpRequest {
        method(): string;
        version(): ($HttpClient$Version) | undefined;
        uri(): $URI;
        timeout(): ($Duration) | undefined;
        static newBuilder(): $HttpRequest$Builder;
        static newBuilder(arg0: $HttpRequest, arg1: $BiPredicate_<string, string>): $HttpRequest$Builder;
        static newBuilder(arg0: $URI): $HttpRequest$Builder;
        headers(): $HttpHeaders;
        expectContinue(): boolean;
        bodyPublisher(): ($HttpRequest$BodyPublisher) | undefined;
    }
}
