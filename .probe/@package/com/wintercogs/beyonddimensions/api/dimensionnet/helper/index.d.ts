import { $KeyAmount, $KeyAmount_ } from "@package/com/wintercogs/beyonddimensions/api/storage/key";
import { $Record } from "@package/java/lang";
import { $DimensionsNet } from "@package/com/wintercogs/beyonddimensions/api/dimensionnet";

declare module "@package/com/wintercogs/beyonddimensions/api/dimensionnet/helper" {
    export class $UnifiedStorageBeforeInsertHandler {
        static addHandler(arg0: $UnifiedStorageBeforeInsertHandler$BeforeInsertHandler_): void;
        static onBeforeInsert(arg0: $KeyAmount_, arg1: $DimensionsNet): $UnifiedStorageBeforeInsertHandler$BeforeInsertHandlerReturnInfo;
        constructor();
    }
    export class $UnifiedStorageBeforeInsertHandler$BeforeInsertHandler {
    }
    export interface $UnifiedStorageBeforeInsertHandler$BeforeInsertHandler {
        beforeInsert(arg0: $KeyAmount_, arg1: $KeyAmount_, arg2: $DimensionsNet): $UnifiedStorageBeforeInsertHandler$BeforeInsertHandlerReturnInfo;
    }
    /**
     * Values that may be interpreted as {@link $UnifiedStorageBeforeInsertHandler$BeforeInsertHandler}.
     */
    export type $UnifiedStorageBeforeInsertHandler$BeforeInsertHandler_ = ((arg0: $KeyAmount, arg1: $KeyAmount, arg2: $DimensionsNet) => $UnifiedStorageBeforeInsertHandler$BeforeInsertHandlerReturnInfo_);
    export class $UnifiedStorageBeforeInsertHandler$BeforeInsertHandlerReturnInfo extends $Record {
        cancel(): boolean;
        beforeInsert(): $KeyAmount;
        constructor(beforeInsert: $KeyAmount_, cancel: boolean);
    }
    /**
     * Values that may be interpreted as {@link $UnifiedStorageBeforeInsertHandler$BeforeInsertHandlerReturnInfo}.
     */
    export type $UnifiedStorageBeforeInsertHandler$BeforeInsertHandlerReturnInfo_ = { beforeInsert?: $KeyAmount_, cancel?: boolean,  } | [beforeInsert?: $KeyAmount_, cancel?: boolean, ];
}
