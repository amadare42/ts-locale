import { createProvider } from '../src';

const demoStrings = {
    string: 'simple string',
    simpleStringAsArray: ['simple string'],
    parametrizedString: ['{foo}', ['foo']],
    templateParametrized: ['{foo}', ['foo'], { type: 'html', somethingElse: 42 }],
    section1: {
        string1: 'simple string',
        simpleStringAsArray1: ['simple string'],
        innerSection: {
            string1Inner: 'simple string',
            simpleStringAsArray1Inner: ['simple string'],
        }
    }
} as const;


type ResultMap = {
    html: Element
}
const root = createProvider<typeof demoStrings, string, ResultMap>(() => '');

const string = root.get('string');
const simpleStringAsArray = root.get('simpleStringAsArray');
const parametrizedString = root.get('parametrizedString', { foo: 42 });
const parametrizedStringNoArg = root.get('parametrizedString');

const templateParametrized = root.get('templateParametrized', { foo: 42 });
const templateParametrizedNoArg = root.get('templateParametrized');

const stringInner = root.section('section1', 'innerSection').get('string1Inner');

