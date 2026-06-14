import { $Config } from "@package/xaero/lib/common/config";
import { $ConfigChannel } from "@package/xaero/lib/common/config/channel";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Iterable } from "@package/java/lang";
import { $IConfigProfileInfo, $ConfigProfile } from "@package/xaero/lib/common/config/profile";

declare module "@package/xaero/lib/client/gui/config/context" {
    export class $IEditConfigScreenContext {
    }
    export interface $IEditConfigScreenContext {
        reset(arg0: $ConfigChannel): void;
        isClientSide(): boolean;
        createProfile(arg0: string, arg1: string, arg2: $ConfigChannel, arg3: string): void;
        hasPermission(arg0: $ConfigChannel): boolean;
        getCurrentProfile(arg0: $ConfigChannel): $ConfigProfile;
        getScreenTitleFormat(): string;
        isAutoDefaultProfile(): boolean;
        getDropdownNarration(): $Component;
        setDefaultProfileId(arg0: string, arg1: $ConfigChannel): void;
        getSelectedProfileId(arg0: $ConfigChannel): string;
        getDefaultProfileId(arg0: $ConfigChannel): string;
        deleteProfile(arg0: $ConfigProfile, arg1: $ConfigChannel): void;
        isAutoConfirm(): boolean;
        getEnforcedConfig(arg0: $ConfigChannel): $Config;
        getProfiles(arg0: $ConfigChannel): $Iterable<$IConfigProfileInfo>;
        setCurrentProfile(arg0: string, arg1: $ConfigChannel): void;
        getSyncStatus(arg0: $ConfigChannel): boolean;
        getSyncMessage(): $Component;
        confirmProfile(arg0: $ConfigProfile, arg1: $ConfigChannel): void;
        profileExists(arg0: string, arg1: $ConfigChannel): boolean;
        get clientSide(): boolean;
        get screenTitleFormat(): string;
        get autoDefaultProfile(): boolean;
        get dropdownNarration(): $Component;
        get autoConfirm(): boolean;
        get syncMessage(): $Component;
    }
}
