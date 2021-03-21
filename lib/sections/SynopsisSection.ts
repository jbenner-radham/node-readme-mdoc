import Section from './Section';

export default class SynopsisSection extends Section {
    constructor({ flags, args }: Record<string, string[]> = {}) {
        super('SYNOPSIS');
        this.addLine('.Nm');
        if (flags) flags.forEach((flag: string) => this.addLine(`.Op Fl ${flag}`));
        if (args) args.forEach((arg: string) => this.addLine(`.Op Ar ${arg}`));
    }
}