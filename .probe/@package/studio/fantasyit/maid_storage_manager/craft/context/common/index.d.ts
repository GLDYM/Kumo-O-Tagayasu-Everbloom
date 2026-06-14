import { $Enum } from "@package/java/lang";

declare module "@package/studio/fantasyit/maid_storage_manager/craft/context/common" {
    export class $CommonAttackAction$USE_TYPE extends $Enum<$CommonAttackAction$USE_TYPE> {
        static values(): $CommonAttackAction$USE_TYPE[];
        static valueOf(arg0: string): $CommonAttackAction$USE_TYPE;
        static SINGLE: $CommonAttackAction$USE_TYPE;
        static LONG: $CommonAttackAction$USE_TYPE;
    }
    /**
     * Values that may be interpreted as {@link $CommonAttackAction$USE_TYPE}.
     */
    export type $CommonAttackAction$USE_TYPE_ = "long" | "single";
    export class $CommonUseAction$USE_TYPE extends $Enum<$CommonUseAction$USE_TYPE> {
        static values(): $CommonUseAction$USE_TYPE[];
        static valueOf(arg0: string): $CommonUseAction$USE_TYPE;
        static SINGLE: $CommonUseAction$USE_TYPE;
        static LONG: $CommonUseAction$USE_TYPE;
    }
    /**
     * Values that may be interpreted as {@link $CommonUseAction$USE_TYPE}.
     */
    export type $CommonUseAction$USE_TYPE_ = "single" | "long";
}
