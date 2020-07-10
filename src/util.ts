export type KeysOfType<Section, PropType> = {
    [K in keyof Section]: Section[K] extends PropType ? K : never
} extends { [_ in keyof Section]: infer U } ? U : never;
