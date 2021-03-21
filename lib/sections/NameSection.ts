import Section from './Section';

export default class NameSection extends Section {
    constructor(name: string) {
        super('NAME');
        this.addLine(`.Nm ${name}`);
    }
}