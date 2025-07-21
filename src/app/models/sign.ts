export const signSizes = ['S', 'M', 'L'] as const
export const signTypes = ['IP', 'IC', 'A', 'N', 'LI'] as const

export type SignSize = typeof signSizes[number];
export type SignType = typeof signTypes[number];

export interface Sign {
    size: SignSize
    type: SignType
}

export interface RoadIdentification {
    type: SignType,
    name: string
    hasToll?: boolean
}