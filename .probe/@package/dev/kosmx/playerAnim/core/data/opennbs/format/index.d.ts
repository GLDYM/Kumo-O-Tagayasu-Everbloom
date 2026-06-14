import { $ArrayList } from "@package/java/util";

declare module "@package/dev/kosmx/playerAnim/core/data/opennbs/format" {
    export class $Layer {
        getLock(): boolean;
        findAtTick(tick: number): number;
        addNote(tick: number): $Layer$Note;
        getNotesFrom(toTick: number): $ArrayList<$Layer$Note>;
        getNotesFrom(fromTick: number, toTick: number): $ArrayList<$Layer$Note>;
        setLock(newValue: boolean): void;
        volume: number;
        notes: $ArrayList<$Layer$Note>;
        stereo: number;
        name: string;
        lock: number;
        constructor();
    }
    export class $Header {
        Loop_on_off(): boolean;
        Auto_saving(): boolean;
        Note_blocks_removed: number;
        Song_name: string;
        Loop_start_tick: number;
        Song_description: string;
        /**
         * @deprecated
         */
        Auto_saving_duration: number;
        Time_signature: number;
        Minutes_spent: number;
        Max_loop_count: number;
        NBS_version: number;
        Song_original_author: string;
        /**
         * @deprecated
         */
        Song_length: number;
        Left_clicks: number;
        Vanilla_instrument_count: number;
        Song_author: string;
        MIDI_Schematic_file_name: string;
        Note_blocks_added: number;
        Layer_count: number;
        Right_clicks: number;
        Song_tempo: number;
        constructor();
    }
    export class $CustomInstrument {
    }
    export interface $CustomInstrument {
        setName(arg0: string): void;
        setsetSoundPitch(arg0: number): void;
        setToSongFile(arg0: string): void;
        setPressKey(arg0: boolean): void;
        set name(value: string);
        set setSoundPitch(value: number);
        set toSongFile(value: string);
        set pressKey(value: boolean);
    }
    export class $Layer$Note {
        getVolume(): number;
        getPitch(): number;
        panning: number;
        instrument: number;
        velocity: number;
        pitch: number;
        tick: number;
        key: number;
        constructor(this$0: $Layer, tick: number);
        get volume(): number;
    }
}
