import Section from './Section';

export default class DescriptionSection extends Section {
    public constructor(description: string) {
        super('DESCRIPTION');
        if (description) this.addLine(description);
    }
}