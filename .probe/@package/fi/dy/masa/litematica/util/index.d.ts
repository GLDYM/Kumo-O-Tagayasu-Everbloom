
declare module "@package/fi/dy/masa/litematica/util" {
    export class $IWorldUpdateSuppressor {
    }
    export interface $IWorldUpdateSuppressor {
        litematica_setShouldPreventBlockUpdates(arg0: boolean): void;
        litematica_getShouldPreventBlockUpdates(): boolean;
    }
}
