import { $Enum } from "@package/java/lang";

declare module "@package/studio/fantasyit/maid_storage_manager/util" {
    export class $ItemStackUtil$MATCH_TYPE extends $Enum<$ItemStackUtil$MATCH_TYPE> {
        static values(): $ItemStackUtil$MATCH_TYPE[];
        static valueOf(arg0: string): $ItemStackUtil$MATCH_TYPE;
        static AUTO: $ItemStackUtil$MATCH_TYPE;
        static NOT_MATCHING: $ItemStackUtil$MATCH_TYPE;
        static MATCHING: $ItemStackUtil$MATCH_TYPE;
    }
    /**
     * Values that may be interpreted as {@link $ItemStackUtil$MATCH_TYPE}.
     */
    export type $ItemStackUtil$MATCH_TYPE_ = "auto" | "not_matching" | "matching";
}
