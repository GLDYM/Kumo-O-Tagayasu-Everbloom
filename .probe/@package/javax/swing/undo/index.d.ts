
declare module "@package/javax/swing/undo" {
    export class $UndoableEdit {
    }
    export interface $UndoableEdit {
        canUndo(): boolean;
        die(): void;
        undo(): void;
        redo(): void;
        addEdit(arg0: $UndoableEdit): boolean;
        canRedo(): boolean;
        replaceEdit(arg0: $UndoableEdit): boolean;
        isSignificant(): boolean;
        getPresentationName(): string;
        getUndoPresentationName(): string;
        getRedoPresentationName(): string;
        get significant(): boolean;
        get presentationName(): string;
        get undoPresentationName(): string;
        get redoPresentationName(): string;
    }
}
