export enum SocketState {
    "CONNECTING" = 0,
    "OPEN" = 1,
    "CLOSING" = 2,
    "CLOSED" = 3,
    "RECONNECTING" = 4,
    /**
     * PRE_CLOSING state is when RECONNECTING state reaches
     * maximum attempt of provided retry.
     */
    "PRE_CLOSING" = 5
}

export type OperationItemType = {
    operationId: number
    operation: string
    regionName?: string
}
