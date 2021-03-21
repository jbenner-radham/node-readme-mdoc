export default class Section {
    public lines: string[] = [];

    public constructor(name: string) {
        this.addLine(`.Sh ${name.toUpperCase()}`);
        this.addLine(`.\\" ${'='.repeat(name.length)}`)
    }

    public addLine(line: string): void {
        this.lines = [...this.lines, line];
    }

    public toString(): string {
        return this.lines.join('\n');
    }
}