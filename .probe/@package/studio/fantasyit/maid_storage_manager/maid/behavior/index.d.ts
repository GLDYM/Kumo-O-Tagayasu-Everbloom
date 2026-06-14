import { $Enum } from "@package/java/lang";

declare module "@package/studio/fantasyit/maid_storage_manager/maid/behavior" {
    export class $ScheduleBehavior$Schedule extends $Enum<$ScheduleBehavior$Schedule> {
        static values(): $ScheduleBehavior$Schedule[];
        static valueOf(arg0: string): $ScheduleBehavior$Schedule;
        static LOGISTICS: $ScheduleBehavior$Schedule;
        static RESORT: $ScheduleBehavior$Schedule;
        static REQUEST: $ScheduleBehavior$Schedule;
        static CO_WORK: $ScheduleBehavior$Schedule;
        static MEAL: $ScheduleBehavior$Schedule;
        static COMMUNICATE: $ScheduleBehavior$Schedule;
        static SORTING: $ScheduleBehavior$Schedule;
        static PLACE: $ScheduleBehavior$Schedule;
        static VIEW: $ScheduleBehavior$Schedule;
        static NO_SCHEDULE: $ScheduleBehavior$Schedule;
    }
    /**
     * Values that may be interpreted as {@link $ScheduleBehavior$Schedule}.
     */
    export type $ScheduleBehavior$Schedule_ = "no_schedule" | "place" | "view" | "request" | "co_work" | "logistics" | "resort" | "sorting" | "meal" | "communicate";
}
