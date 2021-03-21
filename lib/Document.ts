import Prologue from './Prologue';
import Section from './sections/Section';

export default class Document {
    public prologue: Prologue;
    public sections: Section[] = [];

    public constructor(sections: Section[] = []) {
        if (sections) sections.forEach(section => this.addSection(section));
    }

    public addPrologue(prologue: Prologue): void {
        this.prologue = prologue;
    }
    
    public addSection(section: Section): void {
        this.sections = [...this.sections, section];
    }

    public toString(): string {
        const separator = '\n.\\"\n';
        const sections = this.sections.map(section => section.toString());

        return [this.prologue, ...sections].join(separator);
    }
}