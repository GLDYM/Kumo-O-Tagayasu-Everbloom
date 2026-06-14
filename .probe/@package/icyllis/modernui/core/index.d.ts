import { $Parcelable, $Parcel } from "@package/icyllis/modernui/util";
import { $CharSequence, $Object, $Class, $ClassLoader } from "@package/java/lang";

declare module "@package/icyllis/modernui/core" {
    export class $UndoOperation<DATA> implements $Parcelable {
        commit(): void;
        getOwner(): $UndoOwner;
        hasData(): boolean;
        undo(): void;
        redo(): void;
        getOwnerData(): DATA;
        matchOwner(owner: $UndoOwner): boolean;
        allowMerge(): boolean;
        constructor(owner: $UndoOwner);
        get owner(): $UndoOwner;
        get ownerData(): DATA;
    }
    export class $UndoOwner {
        getTag(): string;
        getData(): $Object;
        get tag(): string;
        get data(): $Object;
    }
    export class $UndoManager {
        getOwner(tag: string, data: $Object): $UndoOwner;
        undo(owners: $UndoOwner[], count: number): number;
        redo(owners: $UndoOwner[], count: number): number;
        isInUndo(): boolean;
        beginUpdate(label: $CharSequence): void;
        getLastOperation(mergeMode: number): $UndoOperation<never>;
        getLastOperation(owner: $UndoOwner, mergeMode: number): $UndoOperation<never>;
        getLastOperation<T extends $UndoOperation<never>>(clazz: $Class<T>, owner: $UndoOwner, mergeMode: number): T;
        addOperation(op: $UndoOperation<never>, mergeMode: number): void;
        commitState(owner: $UndoOwner): number;
        hasOperation(owner: $UndoOwner): boolean;
        forgetRedos(owners: $UndoOwner[], count: number): number;
        forgetUndos(owners: $UndoOwner[], count: number): number;
        endUpdate(): void;
        countUndos(owners: $UndoOwner[]): number;
        countRedos(owners: $UndoOwner[]): number;
        setHistorySize(size: number): void;
        getRedoLabel(owners: $UndoOwner[]): $CharSequence;
        setUndoLabel(label: $CharSequence): void;
        saveInstanceState(p: $Parcel): void;
        uncommitState(commitId: number, owner: $UndoOwner): boolean;
        getUndoLabel(owners: $UndoOwner[]): $CharSequence;
        suggestUndoLabel(label: $CharSequence): void;
        getHistorySize(): number;
        restoreInstanceState(p: $Parcel, loader: $ClassLoader): void;
        getUpdateNestingLevel(): number;
        isInUpdate(): boolean;
        static MERGE_MODE_ANY: number;
        static MERGE_MODE_UNIQUE: number;
        static MERGE_MODE_NONE: number;
        constructor();
        get inUndo(): boolean;
        get updateNestingLevel(): number;
        get inUpdate(): boolean;
    }
}
