import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Event, $EventActor } from "@package/dev/architectury/event";
import { $CustomTask, $Task } from "@package/dev/ftb/mods/ftbquests/quest/task";
import { $List, $Date, $Collection_ } from "@package/java/util";
import { $CustomReward } from "@package/dev/ftb/mods/ftbquests/quest/reward";
import { $TeamData, $BaseQuestFile, $Quest, $QuestObject, $Chapter } from "@package/dev/ftb/mods/ftbquests/quest";

declare module "@package/dev/ftb/mods/ftbquests/events" {
    export class $ObjectStartedEvent$ChapterEvent extends $ObjectStartedEvent<$Chapter> {
        getChapter(): $Chapter;
        static TASK: $Event<$EventActor<$ObjectStartedEvent$TaskEvent>>;
        static GENERIC: $Event<$EventActor<$ObjectStartedEvent<never>>>;
        static CHAPTER: $Event<$EventActor<$ObjectStartedEvent$ChapterEvent>>;
        static FILE: $Event<$EventActor<$ObjectStartedEvent$FileEvent>>;
        static QUEST: $Event<$EventActor<$ObjectStartedEvent$QuestEvent>>;
        constructor(d: $QuestProgressEventData<$Chapter>);
        get chapter(): $Chapter;
    }
    export class $QuestProgressEventData<T extends $QuestObject> {
        getObject(): T;
        getTime(): $Date;
        setCompleted(id: number): void;
        setStarted(id: number): void;
        getNotifiedPlayers(): $List<$ServerPlayer>;
        withObject<N extends $QuestObject>(o: N): $QuestProgressEventData<N>;
        notifyPlayers(id: number): void;
        getTeamData(): $TeamData;
        getOnlineMembers(): $List<$ServerPlayer>;
        static forClient<T extends $QuestObject>(date: $Date, teamData: $TeamData, object: T): $QuestProgressEventData<T>;
        constructor(date: $Date, teamData: $TeamData, object: T, online: $Collection_<$ServerPlayer>, notified: $Collection_<$ServerPlayer>);
        get object(): T;
        get time(): $Date;
        set completed(value: number);
        set started(value: number);
        get notifiedPlayers(): $List<$ServerPlayer>;
        get teamData(): $TeamData;
        get onlineMembers(): $List<$ServerPlayer>;
    }
    export class $ObjectStartedEvent<T extends $QuestObject> extends $ObjectProgressEvent<T> {
        static TASK: $Event<$EventActor<$ObjectStartedEvent$TaskEvent>>;
        static GENERIC: $Event<$EventActor<$ObjectStartedEvent<never>>>;
        static CHAPTER: $Event<$EventActor<$ObjectStartedEvent$ChapterEvent>>;
        static FILE: $Event<$EventActor<$ObjectStartedEvent$FileEvent>>;
        static QUEST: $Event<$EventActor<$ObjectStartedEvent$QuestEvent>>;
    }
    export class $ObjectCompletedEvent<T extends $QuestObject> extends $ObjectProgressEvent<T> {
        static TASK: $Event<$EventActor<$ObjectCompletedEvent$TaskEvent>>;
        static GENERIC: $Event<$EventActor<$ObjectCompletedEvent<never>>>;
        static CHAPTER: $Event<$EventActor<$ObjectCompletedEvent$ChapterEvent>>;
        static FILE: $Event<$EventActor<$ObjectCompletedEvent$FileEvent>>;
        static QUEST: $Event<$EventActor<$ObjectCompletedEvent$QuestEvent>>;
    }
    export class $ObjectStartedEvent$FileEvent extends $ObjectStartedEvent<$BaseQuestFile> {
        getFile(): $BaseQuestFile;
        static TASK: $Event<$EventActor<$ObjectStartedEvent$TaskEvent>>;
        static GENERIC: $Event<$EventActor<$ObjectStartedEvent<never>>>;
        static CHAPTER: $Event<$EventActor<$ObjectStartedEvent$ChapterEvent>>;
        static FILE: $Event<$EventActor<$ObjectStartedEvent$FileEvent>>;
        static QUEST: $Event<$EventActor<$ObjectStartedEvent$QuestEvent>>;
        constructor(d: $QuestProgressEventData<$BaseQuestFile>);
        get file(): $BaseQuestFile;
    }
    export class $ObjectCompletedEvent$QuestEvent extends $ObjectCompletedEvent<$Quest> {
        getQuest(): $Quest;
        static TASK: $Event<$EventActor<$ObjectCompletedEvent$TaskEvent>>;
        static GENERIC: $Event<$EventActor<$ObjectCompletedEvent<never>>>;
        static CHAPTER: $Event<$EventActor<$ObjectCompletedEvent$ChapterEvent>>;
        static FILE: $Event<$EventActor<$ObjectCompletedEvent$FileEvent>>;
        static QUEST: $Event<$EventActor<$ObjectCompletedEvent$QuestEvent>>;
        constructor(d: $QuestProgressEventData<$Quest>);
        get quest(): $Quest;
    }
    export class $ObjectCompletedEvent$ChapterEvent extends $ObjectCompletedEvent<$Chapter> {
        getChapter(): $Chapter;
        static TASK: $Event<$EventActor<$ObjectCompletedEvent$TaskEvent>>;
        static GENERIC: $Event<$EventActor<$ObjectCompletedEvent<never>>>;
        static CHAPTER: $Event<$EventActor<$ObjectCompletedEvent$ChapterEvent>>;
        static FILE: $Event<$EventActor<$ObjectCompletedEvent$FileEvent>>;
        static QUEST: $Event<$EventActor<$ObjectCompletedEvent$QuestEvent>>;
        constructor(d: $QuestProgressEventData<$Chapter>);
        get chapter(): $Chapter;
    }
    export class $ObjectCompletedEvent$TaskEvent extends $ObjectCompletedEvent<$Task> {
        getTask(): $Task;
        static TASK: $Event<$EventActor<$ObjectCompletedEvent$TaskEvent>>;
        static GENERIC: $Event<$EventActor<$ObjectCompletedEvent<never>>>;
        static CHAPTER: $Event<$EventActor<$ObjectCompletedEvent$ChapterEvent>>;
        static FILE: $Event<$EventActor<$ObjectCompletedEvent$FileEvent>>;
        static QUEST: $Event<$EventActor<$ObjectCompletedEvent$QuestEvent>>;
        constructor(d: $QuestProgressEventData<$Task>);
        get task(): $Task;
    }
    export class $ObjectProgressEvent<T extends $QuestObject> {
        getObject(): T;
        getTime(): $Date;
        getData(): $TeamData;
        isCancelable(): boolean;
        getNotifiedPlayers(): $List<$ServerPlayer>;
        getOnlineMembers(): $List<$ServerPlayer>;
        get object(): T;
        get time(): $Date;
        get data(): $TeamData;
        get cancelable(): boolean;
        get notifiedPlayers(): $List<$ServerPlayer>;
        get onlineMembers(): $List<$ServerPlayer>;
    }
    export class $ObjectStartedEvent$QuestEvent extends $ObjectStartedEvent<$Quest> {
        getQuest(): $Quest;
        static TASK: $Event<$EventActor<$ObjectStartedEvent$TaskEvent>>;
        static GENERIC: $Event<$EventActor<$ObjectStartedEvent<never>>>;
        static CHAPTER: $Event<$EventActor<$ObjectStartedEvent$ChapterEvent>>;
        static FILE: $Event<$EventActor<$ObjectStartedEvent$FileEvent>>;
        static QUEST: $Event<$EventActor<$ObjectStartedEvent$QuestEvent>>;
        constructor(d: $QuestProgressEventData<$Quest>);
        get quest(): $Quest;
    }
    export class $ObjectStartedEvent$TaskEvent extends $ObjectStartedEvent<$Task> {
        getTask(): $Task;
        static TASK: $Event<$EventActor<$ObjectStartedEvent$TaskEvent>>;
        static GENERIC: $Event<$EventActor<$ObjectStartedEvent<never>>>;
        static CHAPTER: $Event<$EventActor<$ObjectStartedEvent$ChapterEvent>>;
        static FILE: $Event<$EventActor<$ObjectStartedEvent$FileEvent>>;
        static QUEST: $Event<$EventActor<$ObjectStartedEvent$QuestEvent>>;
        constructor(d: $QuestProgressEventData<$Task>);
        get task(): $Task;
    }
    export class $CustomTaskEvent {
        getTask(): $CustomTask;
        static EVENT: $Event<$EventActor<$CustomTaskEvent>>;
        constructor(t: $CustomTask);
        get task(): $CustomTask;
    }
    export class $CustomRewardEvent {
        getReward(): $CustomReward;
        getPlayer(): $ServerPlayer;
        getNotify(): boolean;
        static EVENT: $Event<$EventActor<$CustomRewardEvent>>;
        constructor(reward: $CustomReward, player: $ServerPlayer, notify: boolean);
        get reward(): $CustomReward;
        get player(): $ServerPlayer;
        get notify(): boolean;
    }
    export class $ObjectCompletedEvent$FileEvent extends $ObjectCompletedEvent<$BaseQuestFile> {
        getFile(): $BaseQuestFile;
        static TASK: $Event<$EventActor<$ObjectCompletedEvent$TaskEvent>>;
        static GENERIC: $Event<$EventActor<$ObjectCompletedEvent<never>>>;
        static CHAPTER: $Event<$EventActor<$ObjectCompletedEvent$ChapterEvent>>;
        static FILE: $Event<$EventActor<$ObjectCompletedEvent$FileEvent>>;
        static QUEST: $Event<$EventActor<$ObjectCompletedEvent$QuestEvent>>;
        constructor(d: $QuestProgressEventData<$BaseQuestFile>);
        get file(): $BaseQuestFile;
    }
}
