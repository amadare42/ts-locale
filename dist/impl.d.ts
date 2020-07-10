import { DeclareLocale, LocaleValueResolver, LocaleSection, StringResolver } from './domain';
export declare const createProvider: <Strings extends LocaleSection, DefaultType = string, ResultMap = {
    [key: string]: DefaultType;
}>(resolver: StringResolver) => LocaleValueResolver<Strings, DefaultType, ResultMap>;
export declare const declare: DeclareLocale;
