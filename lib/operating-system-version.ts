export default function operatingSystemVersion(system: string = '', version: string = ''): string {
    return `.Os ${system} ${version}`.trim();
}