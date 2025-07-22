export const signSizes = ['S', 'M', 'L'] as const
export const signTypes = ['IP', 'IC', 'A', 'N', 'LI'] as const
export const roadImportances = ['XL', 'L', 'M', 'S'] as const
export const identificationModes = ['HAUT', 'COTE'] as const
export const signArrows = ['HAUT', 'BAS', 'GAUCHE', 'DROITE', 'HAUT_GAUCHE', 'HAUT_DROITE', 'BAS_GAUCHE', 'BAS_DROITE'] as const

export type SignSize = typeof signSizes[number];
export type SignType = typeof signTypes[number];
export type SignArrow = typeof signArrows[number];
export type RoadImportance = typeof roadImportances[number];
export type RoadIdentificationMode = typeof identificationModes[number];

export interface Sign {
    size: SignSize
    type: SignType
    parts: SignPart[]
    identification: RoadIdentification[]
    bottomArrows: number;
    bottomArrowsType?: SignArrow;
    leftArrow: boolean;
    leftArrowType?: SignArrow
    rightArrow: boolean;
    rightArrowType?: SignArrow;
}

export interface RoadIdentification {
    type: SignType,
    name: string
    hasToll?: boolean
}

export interface RoadDirection {
    label: string;
    importance: RoadImportance
}

export interface SignPart {
    identification: RoadIdentification[]
    identificationPosition: RoadIdentificationMode;
    direction: RoadDirection[]
    leftArrow: boolean;
    leftArrowType?: SignArrow;
    rightArrow: boolean;
    rightArrowType?: SignArrow;
}