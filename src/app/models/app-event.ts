export const eventTypes = ['subMenuClicked'] as const;

export type EventType = typeof eventTypes[number];

export interface AppEvent {
    id: string,
    type: EventType;
    payload?: object;
}