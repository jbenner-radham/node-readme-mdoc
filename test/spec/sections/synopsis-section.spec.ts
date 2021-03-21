import { expect } from 'chai';
import fs from 'fs';
import path from 'path';
import synopsisSection from '../../../lib/sections/synopsis-section';

describe('synopsisSection', () => {
    it('is a function', () => {
        expect(synopsisSection).to.be.a('function');
    });

    it('returns a string', () => {
        expect(synopsisSection()).to.be.a('string');
    });

    it('renders a "SYNOPSIS" section', () => {
        const fixturePath = path.join(__dirname, 'fixtures', 'synopsis.mdoc');
        const fixture = fs.readFileSync(fixturePath).toString();

        expect(synopsisSection()).to.equal(fixture);
    });
});