import typia from 'typia';
import type { IMember } from './type.js';
const random = (() => { const $generator = (typia.createRandom as any).generator; const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
    email: (_generator?.customs ?? $generator.customs)?.string?.([
        {
            name: "Format<\"email\">",
            kind: "format",
            value: "email"
        }
    ]) ?? (_generator?.email ?? $generator.email)(),
    id: (_generator?.customs ?? $generator.customs)?.string?.([
        {
            name: "Format<\"uuid\">",
            kind: "format",
            value: "uuid"
        }
    ]) ?? (_generator?.uuid ?? $generator.uuid)(),
    age: (_generator?.customs ?? $generator.customs)?.number?.([
        {
            name: "Type<\"uint32\">",
            kind: "type",
            value: "uint32"
        },
        {
            name: "ExclusiveMinimum<19>",
            kind: "exclusiveMinimum",
            value: 19
        },
        {
            name: "Maximum<100>",
            kind: "maximum",
            value: 100
        }
    ]) ?? (_generator?.integer ?? $generator.integer)(19, 100)
}); let _generator: any; return (generator?: Partial<typia.IRandomGenerator>): import("typia").Resolved<IMember> => {
    _generator = generator;
    return $ro0();
}; })();
random();
