import documentDate from './document-date';
import documentTitle, { Section } from './document-title';
import operatingSystemVersion from './operating-system-version';

export default class Prologue {
    public lines: string[] = [];

    public constructor({ date, name, section }: { date?: Date, name?: string, section?: Section }) {
        this.addLine(documentDate(date ?? new Date()));
        this.addLine(documentTitle(name, section));
        this.addLine(operatingSystemVersion());
    }

    public addLine(line: string): void {
        this.lines = [...this.lines, line];
    }

    public toString(): string {
        return this.lines.join('\n');
    }
}