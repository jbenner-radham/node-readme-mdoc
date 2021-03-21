import { sprintf } from 'sprintf-js';

export default function documentDate(date: Date = new Date()): string {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    const month = months[date.getUTCMonth()];

    return sprintf('.Dd %s %02d, %d', month, date.getUTCDate(), date.getUTCFullYear());
}