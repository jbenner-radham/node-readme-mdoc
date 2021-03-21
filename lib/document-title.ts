export type Section = 1|2|3|4|5|6|7|8|9|''

export default function documentTitle(title: string = '', section: Section = '', arch: string = ''): string {
    return `.Dt ${title.toUpperCase()} ${section} ${arch}`.trim();
}