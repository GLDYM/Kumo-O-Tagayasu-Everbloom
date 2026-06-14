import { $MaidTipsBuilder, $MaidBaubleBuilder, $MaidTaskBuilder } from "@package/com/github/tartaricacid/touhoulittlemaid/compat/kubejs/register/builder";
export * as task from "@package/com/github/tartaricacid/touhoulittlemaid/compat/kubejs/register/task";
export * as builder from "@package/com/github/tartaricacid/touhoulittlemaid/compat/kubejs/register/builder";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/compat/kubejs/register" {
    export class $MaidRegisterJS {
        static TASK: $MaidTaskBuilder;
        static BAUBLE: $MaidBaubleBuilder;
        static TIPS: $MaidTipsBuilder;
        constructor();
    }
}
