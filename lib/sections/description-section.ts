import { source } from 'common-tags';

export default function descriptionSection(description: string = ''): string {
    return source`
        .Sh DESCRIPTION
    `;
}