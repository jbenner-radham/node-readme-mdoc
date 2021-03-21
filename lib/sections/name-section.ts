import { source } from 'common-tags';

export default function nameSection(name: string): string {
    return source`
        .Sh NAME
        .\\" ====
        .Nm ${name}
    `;
}