/*
 *  Autogenerated file. Do not edit manually
 */
import { LocaleSection, LocaleValueResolver } from './domain';
import { KeysOfType } from './util';

export interface RecursiveSections<Section extends LocaleSection, DefaultType, ResultMap> {

    section<
        K extends KeysOfType<Section, LocaleSection>,
    > (key: K)
    : LocaleValueResolver<Section[K], DefaultType, ResultMap>;

    section<
        K extends KeysOfType<Section, LocaleSection>,
        K1 extends KeysOfType<Section[K], LocaleSection>,
    > (key: K, key1: K1)
    : LocaleValueResolver<Section[K][K1], DefaultType, ResultMap>;

    section<
        K extends KeysOfType<Section, LocaleSection>,
        K1 extends KeysOfType<Section[K], LocaleSection>,
        K2 extends KeysOfType<Section[K][K1], LocaleSection>,
    > (key: K, key1: K1, key2: K2)
    : LocaleValueResolver<Section[K][K1][K2], DefaultType, ResultMap>;

    section<
        K extends KeysOfType<Section, LocaleSection>,
        K1 extends KeysOfType<Section[K], LocaleSection>,
        K2 extends KeysOfType<Section[K][K1], LocaleSection>,
        K3 extends KeysOfType<Section[K][K1][K2], LocaleSection>,
    > (key: K, key1: K1, key2: K2, key3: K3)
    : LocaleValueResolver<Section[K][K1][K2][K3], DefaultType, ResultMap>;

    section<
        K extends KeysOfType<Section, LocaleSection>,
        K1 extends KeysOfType<Section[K], LocaleSection>,
        K2 extends KeysOfType<Section[K][K1], LocaleSection>,
        K3 extends KeysOfType<Section[K][K1][K2], LocaleSection>,
        K4 extends KeysOfType<Section[K][K1][K2][K3], LocaleSection>,
    > (key: K, key1: K1, key2: K2, key3: K3, key4: K4)
    : LocaleValueResolver<Section[K][K1][K2][K3][K4], DefaultType, ResultMap>;

    section<
        K extends KeysOfType<Section, LocaleSection>,
        K1 extends KeysOfType<Section[K], LocaleSection>,
        K2 extends KeysOfType<Section[K][K1], LocaleSection>,
        K3 extends KeysOfType<Section[K][K1][K2], LocaleSection>,
        K4 extends KeysOfType<Section[K][K1][K2][K3], LocaleSection>,
        K5 extends KeysOfType<Section[K][K1][K2][K3][K4], LocaleSection>,
    > (key: K, key1: K1, key2: K2, key3: K3, key4: K4, key5: K5)
    : LocaleValueResolver<Section[K][K1][K2][K3][K4][K5], DefaultType, ResultMap>;

    section<
        K extends KeysOfType<Section, LocaleSection>,
        K1 extends KeysOfType<Section[K], LocaleSection>,
        K2 extends KeysOfType<Section[K][K1], LocaleSection>,
        K3 extends KeysOfType<Section[K][K1][K2], LocaleSection>,
        K4 extends KeysOfType<Section[K][K1][K2][K3], LocaleSection>,
        K5 extends KeysOfType<Section[K][K1][K2][K3][K4], LocaleSection>,
        K6 extends KeysOfType<Section[K][K1][K2][K3][K4][K5], LocaleSection>,
    > (key: K, key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6)
    : LocaleValueResolver<Section[K][K1][K2][K3][K4][K5][K6], DefaultType, ResultMap>;

    section<
        K extends KeysOfType<Section, LocaleSection>,
        K1 extends KeysOfType<Section[K], LocaleSection>,
        K2 extends KeysOfType<Section[K][K1], LocaleSection>,
        K3 extends KeysOfType<Section[K][K1][K2], LocaleSection>,
        K4 extends KeysOfType<Section[K][K1][K2][K3], LocaleSection>,
        K5 extends KeysOfType<Section[K][K1][K2][K3][K4], LocaleSection>,
        K6 extends KeysOfType<Section[K][K1][K2][K3][K4][K5], LocaleSection>,
        K7 extends KeysOfType<Section[K][K1][K2][K3][K4][K5][K6], LocaleSection>,
    > (key: K, key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6, key7: K7)
    : LocaleValueResolver<Section[K][K1][K2][K3][K4][K5][K6][K7], DefaultType, ResultMap>;

}