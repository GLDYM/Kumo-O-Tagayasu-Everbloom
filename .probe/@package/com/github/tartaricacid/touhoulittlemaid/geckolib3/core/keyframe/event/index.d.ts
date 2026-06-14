
declare module "@package/com/github/tartaricacid/touhoulittlemaid/geckolib3/core/keyframe/event" {
    export class $EventKeyFrame<T> {
        getStartTick(): number;
        getEventData(): T;
        constructor(arg0: number, arg1: T);
        get startTick(): number;
        get eventData(): T;
    }
}
