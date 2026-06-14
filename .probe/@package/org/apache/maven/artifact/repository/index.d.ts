import { $Proxy } from "@package/org/apache/maven/repository";
import { $ArtifactRepositoryLayout } from "@package/org/apache/maven/artifact/repository/layout";
import { $Date, $List_, $List } from "@package/java/util";
import { $Artifact } from "@package/org/apache/maven/artifact";
import { $ArtifactMetadata } from "@package/org/apache/maven/artifact/metadata";
export * as layout from "@package/org/apache/maven/artifact/repository/layout";

declare module "@package/org/apache/maven/artifact/repository" {
    export class $ArtifactRepositoryPolicy {
        isEnabled(): boolean;
        merge(arg0: $ArtifactRepositoryPolicy): void;
        setEnabled(arg0: boolean): void;
        setUpdatePolicy(arg0: string): void;
        setChecksumPolicy(arg0: string): void;
        getChecksumPolicy(): string;
        checkOutOfDate(arg0: $Date): boolean;
        getUpdatePolicy(): string;
        static CHECKSUM_POLICY_IGNORE: string;
        static UPDATE_POLICY_DAILY: string;
        static CHECKSUM_POLICY_FAIL: string;
        static UPDATE_POLICY_NEVER: string;
        static CHECKSUM_POLICY_WARN: string;
        static UPDATE_POLICY_INTERVAL: string;
        static UPDATE_POLICY_ALWAYS: string;
        constructor(arg0: boolean, arg1: string, arg2: string);
        constructor(arg0: $ArtifactRepositoryPolicy);
        constructor();
    }
    export class $Authentication {
        setPassword(arg0: string): void;
        getPassword(): string;
        getPrivateKey(): string;
        getUsername(): string;
        setUsername(arg0: string): void;
        getPassphrase(): string;
        setPrivateKey(arg0: string): void;
        setPassphrase(arg0: string): void;
        constructor(arg0: string, arg1: string);
    }
    export class $ArtifactRepository {
    }
    export interface $ArtifactRepository {
        getKey(): string;
        find(arg0: $Artifact): $Artifact;
        getId(): string;
        getProtocol(): string;
        setLayout(arg0: $ArtifactRepositoryLayout): void;
        isBlocked(): boolean;
        setId(arg0: string): void;
        getLayout(): $ArtifactRepositoryLayout;
        getUrl(): string;
        getSnapshots(): $ArtifactRepositoryPolicy;
        getReleases(): $ArtifactRepositoryPolicy;
        getAuthentication(): $Authentication;
        getProxy(): $Proxy;
        /**
         * @deprecated
         */
        isBlacklisted(): boolean;
        setBlocked(arg0: boolean): void;
        setProxy(arg0: $Proxy): void;
        /**
         * @deprecated
         */
        isUniqueVersion(): boolean;
        /**
         * @deprecated
         */
        setBlacklisted(arg0: boolean): void;
        findVersions(arg0: $Artifact): $List<string>;
        isProjectAware(): boolean;
        setAuthentication(arg0: $Authentication): void;
        setUrl(arg0: string): void;
        pathOf(arg0: $Artifact): string;
        getBasedir(): string;
        setSnapshotUpdatePolicy(arg0: $ArtifactRepositoryPolicy): void;
        setReleaseUpdatePolicy(arg0: $ArtifactRepositoryPolicy): void;
        getMirroredRepositories(): $List<$ArtifactRepository>;
        setMirroredRepositories(arg0: $List_<$ArtifactRepository>): void;
        pathOfLocalRepositoryMetadata(arg0: $ArtifactMetadata, arg1: $ArtifactRepository): string;
        pathOfRemoteRepositoryMetadata(arg0: $ArtifactMetadata): string;
        get key(): string;
        get protocol(): string;
        get snapshots(): $ArtifactRepositoryPolicy;
        get releases(): $ArtifactRepositoryPolicy;
        get uniqueVersion(): boolean;
        get projectAware(): boolean;
        get basedir(): string;
        set snapshotUpdatePolicy(value: $ArtifactRepositoryPolicy);
        set releaseUpdatePolicy(value: $ArtifactRepositoryPolicy);
    }
}
