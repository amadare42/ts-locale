import { KeysOfType } from './util';
import { RecursiveSections } from './sections';
export declare type ParametrizedValueTemplate = readonly [string, readonly string[], AdditionalArguments?];
export declare type SimpleValueTemplate = string | readonly [string, AdditionalArguments?];
export declare type ValueTemplate = ParametrizedValueTemplate | SimpleValueTemplate;
export declare type AdditionalArguments = Partial<TypedValueMetadata>;
export declare type LocaleSection = {
    [key: string]: ValueTemplate | LocaleSection;
};
export interface TypedValueMetadata {
    type: string;
}
export declare type ArgumentObject<Section, K extends keyof Section> = Section[K] extends ParametrizedValueTemplate ? {
    [key in Section[K][1][number]]: any;
} : any;
export interface LocaleValueResolver<Section extends LocaleSection, DefaultType, ResultMap extends {
    [key: string]: any;
} = {
    [key: string]: DefaultType;
}> extends RecursiveSections<Section, DefaultType, ResultMap> {
    get<K extends KeysOfType<Section, ParametrizedValueTemplate>, Args extends AdditionalArguments>(key: K, args: ArgumentObject<Section, K>, templateArgs?: Args): Section[K][2] extends TypedValueMetadata ? Section[K][2]['type'] extends string ? ResultMap[Section[K][2]['type']] : DefaultType : DefaultType;
    get<K extends KeysOfType<Section, SimpleValueTemplate>, Args extends AdditionalArguments>(key: K, templateArgs?: Args): Section[K] extends string ? DefaultType : Section[K][1] extends TypedValueMetadata ? ResultMap[Section[K][1]['type']] : DefaultType;
    dynGet(key: string, args?: any): string;
    dynSection(...keys: string[]): LocaleValueResolver<any, any>;
}
export declare type StringResolver = (key: string[], args?: any[], templateArgs?: any) => any;
export declare type GeneralizeSection<T extends LocaleSection> = {
    [key in keyof T]: T[key] extends LocaleSection ? GeneralizeSection<T[key]> : T[key] extends ParametrizedValueTemplate ? [string, T[key][1], any?] : SimpleValueTemplate;
};
export declare type GeneralizeSectionPartial<T extends LocaleSection> = Partial<{
    [key in keyof T]: T[key] extends LocaleSection ? GeneralizeSectionPartial<T[key]> : T[key] extends ParametrizedValueTemplate ? [string, T[key][1] | [] | undefined | null, any?] : SimpleValueTemplate;
}>;
export interface DeclareLocale {
    <T extends LocaleSection>(data: GeneralizeSection<T>): T;
    <T extends LocaleSection>(data: GeneralizeSectionPartial<T>, opt: {
        isPartial: true;
    }): T;
}
