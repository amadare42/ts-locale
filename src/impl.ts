import { DeclareLocale, LocaleValueResolver, LocaleSection, StringResolver } from './domain';

class StringsProvider implements LocaleValueResolver<any, any> {
    constructor(private resolver: StringResolver, private root: string[] = []) { }

    get = (key: string, args?: any, templateArgs?: any) => this.resolver([...this.root, key], args, templateArgs);
    dynGet = (key: string, args?: any, templateArgs?: any) => this.get(key, args, templateArgs);

    section = (...keys: string[]) => new StringsProvider(this.resolver, [...this.root, ...keys]);
    dynSection = (...keys: string[]) => this.section(...keys);
}

export const createProvider = <Strings extends LocaleSection, DefaultType = string, ResultMap = { [key: string]: DefaultType }>(resolver: StringResolver): LocaleValueResolver<Strings, DefaultType, ResultMap> => {
    return new StringsProvider(resolver, []) as any;
}

export const declare: DeclareLocale = (data: any) => data;
