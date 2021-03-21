#!/usr/bin/env ts-node
import MinimalDocument from './lib/MinimalDocument';

const doc = new MinimalDocument({
    date: new Date(),
    description: 'It does stuff.',
    name: 'progname',
    section: 1
});

console.log(doc.toString());