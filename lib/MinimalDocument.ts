import Document from './Document';
import NameSection from './sections/NameSection';
import Prologue from './Prologue';
import SynopsisSection from './sections/SynopsisSection';
import DescriptionSection from './sections/DescriptionSection';

export default class MinimalDocument extends Document {
    public constructor({ name, date, description, section }) {
        super();
        this.addPrologue(new Prologue({ date, name, section}));
        this.addSection(new NameSection(name));
        this.addSection(new SynopsisSection());
        this.addSection(new DescriptionSection(description));
    }
}