import { $IOException } from "@package/java/io";
import { $Executor_, $BlockingQueue } from "@package/java/util/concurrent";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $UUID, $List, $Map, $UUID_ } from "@package/java/util";
import { $SecretPacket } from "@package/de/maxhenkel/voicechat/net";
import { $Consumer_, $Supplier_ } from "@package/java/util/function";
import { $Speaker } from "@package/de/maxhenkel/voicechat/voice/client/speaker";
import { $ClientVoicechatSocket } from "@package/de/maxhenkel/voicechat/api";
import { $ALCCapabilities, $ALCapabilities } from "@package/org/lwjgl/openal";
import { $Path_, $Path } from "@package/java/nio/file";
import { $InetAddress } from "@package/java/net";
import { $ServerConfig$Codec } from "@package/de/maxhenkel/voicechat/config";
import { $Secret, $NetworkMessage, $SoundPacket } from "@package/de/maxhenkel/voicechat/voice/common";
import { $Thread, $Runnable_, $Exception } from "@package/java/lang";
export * as speaker from "@package/de/maxhenkel/voicechat/voice/client/speaker";

declare module "@package/de/maxhenkel/voicechat/voice/client" {
    export class $ClientVoicechat {
        connect(arg0: $InitializationData): void;
        close(): void;
        getConnection(): $ClientVoicechatConnection;
        getStartTime(): number;
        getRecorder(): $AudioRecorder;
        setRecording(arg0: boolean): boolean;
        getSoundManager(): $SoundManager;
        onVoiceChatDisconnected(): void;
        onVoiceChatConnected(arg0: $ClientVoicechatConnection): void;
        toggleRecording(): boolean;
        reloadSoundManager(): void;
        reloadAudio(): void;
        closeMicThread(): void;
        closeAudioChannel(arg0: $UUID_): boolean;
        processSoundPacket(arg0: $SoundPacket<any>): void;
        getMicThread(): $MicThread;
        getTalkCache(): $TalkCache;
        getAudioChannels(): $Map<$UUID, $AudioChannel>;
        getInitializationData(): $InitializationData;
        constructor();
        get connection(): $ClientVoicechatConnection;
        get startTime(): number;
        get recorder(): $AudioRecorder;
        set recording(value: boolean);
        get soundManager(): $SoundManager;
        get micThread(): $MicThread;
        get talkCache(): $TalkCache;
        get audioChannels(): $Map<$UUID, $AudioChannel>;
        get initializationData(): $InitializationData;
    }
    export class $AudioChannel extends $Thread {
        getQueue(): $BlockingQueue<$SoundPacket<never>>;
        isClosed(): boolean;
        getLostPackets(): number;
        closeAndKill(): void;
        getChannelId(): $UUID;
        addToQueue(arg0: $SoundPacket<never>): void;
        getPacketBuffer(): $AudioPacketBuffer;
        canKill(): boolean;
        getSpeaker(): $Speaker;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $ClientVoicechat, arg1: $InitializationData, arg2: $UUID_);
        get queue(): $BlockingQueue<$SoundPacket<never>>;
        get closed(): boolean;
        get lostPackets(): number;
        get channelId(): $UUID;
        get packetBuffer(): $AudioPacketBuffer;
        get speaker(): $Speaker;
    }
    export class $AudioRecorder {
        getLocation(): $Path;
        close(): void;
        static create(): $AudioRecorder;
        getDuration(): string;
        getDuration(arg0: number): string;
        getStartTime(): number;
        saveAndClose(): void;
        getStorage(): string;
        getStorage(arg0: number): string;
        appendChunk(arg0: $UUID_, arg1: number, arg2: number[]): void;
        flushChunkThreaded(arg0: $UUID_): void;
        getRecordedPlayerCount(): number;
        constructor(arg0: $Path_, arg1: number);
        get location(): $Path;
        get startTime(): number;
        get recordedPlayerCount(): number;
    }
    export class $InitializationData {
        getSecret(): $Secret;
        getKeepAlive(): number;
        getCodec(): $ServerConfig$Codec;
        getVoiceChatDistance(): number;
        groupsEnabled(): boolean;
        allowRecording(): boolean;
        getServerPort(): number;
        getServerIP(): string;
        getPlayerUUID(): $UUID;
        getMtuSize(): number;
        constructor(arg0: string, arg1: $SecretPacket);
        get secret(): $Secret;
        get keepAlive(): number;
        get codec(): $ServerConfig$Codec;
        get voiceChatDistance(): number;
        get serverPort(): number;
        get serverIP(): string;
        get playerUUID(): $UUID;
        get mtuSize(): number;
    }
    export class $MicrophoneException extends $IOException {
        constructor(arg0: string);
        constructor(arg0: $Exception);
    }
    export class $AudioPacketBuffer {
        clear(): void;
        getSize(): number;
        poll(arg0: $BlockingQueue<$SoundPacket<never>>): $SoundPacket<never>;
        constructor(arg0: number);
        get size(): number;
    }
    export class $SoundManager {
        close(): void;
        static create(): $SoundManager;
        static create(arg0: string): $SoundManager;
        isClosed(): boolean;
        static canEnumerate(): boolean;
        static getAlcError(arg0: number): string;
        static canEnumerateAll(): boolean;
        static cleanDeviceName(arg0: string): string;
        closeContext(): void;
        static checkAlcError(arg0: number): boolean;
        static getAllSpeakers(): $List<string>;
        runInContext(arg0: $Executor_, arg1: $Runnable_): void;
        openContext(): boolean;
        static checkAlError(): boolean;
        getMaxGain(): number;
        static getAlError(arg0: number): string;
        constructor(arg0: string, arg1: number, arg2: number, arg3: $ALCCapabilities, arg4: $ALCapabilities, arg5: number);
        get closed(): boolean;
        static get allSpeakers(): $List<string>;
        get maxGain(): number;
    }
    export class $TalkCache {
        updateCategoryVolume(arg0: string, arg1: number): void;
        isTalking(arg0: $Entity): boolean;
        isTalking(arg0: $UUID_): boolean;
        isWhispering(arg0: $Entity): boolean;
        isWhispering(arg0: $UUID_): boolean;
        updateLevel(arg0: $UUID_, arg1: string, arg2: boolean, arg3: number[]): void;
        /**
         * @deprecated
         */
        updateTalking(arg0: $UUID_, arg1: boolean): void;
        setTimestampSupplier(arg0: $Supplier_<number>): void;
        getPlayerAudioLevel(arg0: $UUID_): number;
        getCategoryAudioLevel(arg0: string): number;
        constructor();
        set timestampSupplier(value: $Supplier_<number>);
    }
    export class $ClientVoicechatConnection extends $Thread {
        close(): void;
        getAddress(): $InetAddress;
        getData(): $InitializationData;
        isConnected(): boolean;
        disconnect(): void;
        isInitialized(): boolean;
        sendToServer(arg0: $NetworkMessage): boolean;
        getSocket(): $ClientVoicechatSocket;
        checkTimeout(): void;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $ClientVoicechat, arg1: $InitializationData);
        get address(): $InetAddress;
        get data(): $InitializationData;
        get connected(): boolean;
        get initialized(): boolean;
        get socket(): $ClientVoicechatSocket;
    }
    export class $MicThread extends $Thread {
        close(): void;
        isClosed(): boolean;
        getError(arg0: $Consumer_<$MicrophoneException>): void;
        isTalking(): boolean;
        isWhispering(): boolean;
        pollProcessedAudio(arg0: boolean): number[];
        shouldTransmitAudio(): boolean;
        setMicrophoneLocked(arg0: boolean): void;
        pollMic(): number[];
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $ClientVoicechat, arg1: $ClientVoicechatConnection, arg2: $Consumer_<$MicrophoneException>);
        get closed(): boolean;
        get talking(): boolean;
        get whispering(): boolean;
        set microphoneLocked(value: boolean);
    }
}
