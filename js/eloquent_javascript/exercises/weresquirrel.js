/**
 * Code Sample from Chapter 4 - weresquirrel
 */
const JOURNAL = require('./journal.js');

function phi(table) {
	return (table[3] * table[0] - table[2] * table[1]) /
		Math.sqrt((table[2] + table[3]) *
			  (table[0] + table[1]) *
			  (table[1] + table[3]) *
			  (table[0] + table[2]));
}

function tableFor(event, journal) {
	let table = [0, 0, 0, 0];
	for (let i = 0; i < journal.length; i++) {
		let entry = journal[i], index = 0;
		if (entry.events.includes(event)) index += 1;
		if (entry.squirrel) index += 2;
		table[index] += 1;
	}
	return table;
}

function journalEvents(journal) {
	let events = [];
	for (let entry of journal) {
		for (let event of entry.events) {
			if (!events.includes(event)) {
				events.push(event);
			}
		}
	}
	return events;
}

for (let event of journalEvents(JOURNAL)) {
	let correlation = phi(tableFor(event, JOURNAL));
	if (correlation > 0.1 || correlation < -0.1) {
		console.log(event + ":", correlation);
	}
}

for (let entry of JOURNAL) {
	if (entry.events.includes("peanuts") &&
	    !entry.events.includes("brushed teeth")) {
		entry.events.push("peanut teeth");
	}
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));

/**
 * I love the commentary on social inequality within this book.
 *
 * > For a few years, things go great for Jacques. But at some point he loses his job. Because he lives in a nasty country where having no job means having no medical services, he is forced to take employment with a circus where he performs as The Incredible Squirrelman, stuffing his mouth with peanut butter before every show.
 */
