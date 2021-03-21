import { expect } from 'chai';
import fs from 'fs';
import path from 'path';
import nameSection from '../../../lib/sections/name-section';

describe('nameSection', () => {
    it('is a function', () => {
        expect(nameSection).to.be.a('function');
    });

    it('returns a string', () => {
        expect(nameSection('example')).to.be.a('string');
    });

    it('renders a "NAME" section', () => {
        const fixturePath = path.join(__dirname, 'fixtures', 'name.mdoc');
        const fixture = fs.readFileSync(fixturePath).toString();

        expect(nameSection('example')).to.equal(fixture);
    });
});