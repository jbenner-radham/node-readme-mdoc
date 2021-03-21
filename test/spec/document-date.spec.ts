import { expect } from 'chai';
import documentDate from '../../lib/document-date';

describe('documentDate', () => {
    it('is a function', () => {
        expect(documentDate).to.be.a('function');
    });

    it('returns a string', () => {
        expect(documentDate()).to.be.a('string');
    });

    it('returns a string prefixed with `.Dd`', () => {
        expect(documentDate().startsWith('.Dd')).to.be.true;
    });

    it('zero pads a single digit date', () => {
        const year = 2021;
        const monthIndex = 6;
        const day = 1;
        const date = new Date(year, monthIndex, day);

        expect(documentDate(date)).to.equal('.Dd July 01, 2021');
    });

    it('does not zero pad a double digit date', () => {
        const year = 2021;
        const monthIndex = 6;
        const day = 25;
        const date = new Date(year, monthIndex, day);

        expect(documentDate(date)).to.equal('.Dd July 25, 2021');
    });
});