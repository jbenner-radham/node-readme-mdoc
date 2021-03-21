import { expect } from 'chai';
import documentTitle from '../../lib/document-title';

describe('documentTitle', () => {
    it('is a function', () => {
        expect(documentTitle).to.be.a('function');
    });

    it('returns a string', () => {
        expect(documentTitle()).to.be.a('string');
    });

    it('returns a string prefixed with `.Dt`', () => {
        expect(documentTitle().startsWith('.Dt')).to.be.true;
    });

    it('uppercases the title', () => {
        expect(documentTitle('progname')).to.match(/^\.Dt PROGNAME$/);
    });

    it('includes the section number when provided', () => {
        expect(documentTitle('progname', 1)).to.match(/^\.Dt PROGNAME 1$/)
    });

    it('includes the architecture when provided', () => {
        expect(documentTitle('progname', 1, 'i386')).to.match(/^\.Dt PROGNAME 1 i386$/)
    });
});