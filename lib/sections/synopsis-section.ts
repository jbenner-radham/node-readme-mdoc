import { source } from 'common-tags';

export default function synopsisSection(synopsis: string = ''): string {
    return source`
        .Sh SYNOPSIS
        .\\" ========
        .Nm
        ${synopsis}
    `
}