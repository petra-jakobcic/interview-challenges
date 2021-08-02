// Import our dependency.
const events = require('./events');
const testData = require('./testData');

// Write the tests.
describe('The "createEvent" function', () => {
	test('creates an event', () => {
		const event = testData.walkOscar;

		expect(events.createEvent(event.id, event.startsAt, event.endsAt, event.title)).toEqual(
			{
				id: event.id,
				startsAt: event.startsAt,
				endsAt: event.endsAt,
				title: event.title
			}
		)
	});
});

describe('The "getEarliestDate" function', () => {
	test('gets the earliest date from an array of events', () => {
		const myEvents = testData.myEvents;
		const date = new Date(myEvents[2].startsAt);

		expect(events.getEarliestDate(myEvents)).toEqual(date);
	});
});

describe('The "sortByDate" function', () => {
	test('sorts an array of events by date', () => {
		const myEvents = testData.myEvents;
		const sortedArray = [myEvents[2], myEvents[0], myEvents[3], myEvents[4], myEvents[1]];

		expect(events.sortByDate(myEvents)).toEqual(sortedArray);
	});
});

describe('The "getEventsForDate" function', () => {
	test('gets all the events for a specific date', () => {
		const myEvents = testData.myEvents;
		const dateObject = new Date(myEvents[2].startsAt);
		const eventsForDate = [myEvents[2]];

		expect(events.getEventsForDate(myEvents, dateObject)).toEqual(eventsForDate);
	});
});

describe('The "areDatesEqual" function', () => {
	test('checks if two dates are the same', () => {
		const date1 = new Date('2021-08-13');
		const date2 = new Date('2021-08-13');

		expect(events.areDatesEqual(date1, date2)).toBeTruthy();
	});

	test('checks if two dates are the same', () => {
		const date1 = new Date('2021-05-30T16:00:00Z');
		const date2 = new Date('2021-07-28T14:00:11Z');

		expect(events.areDatesEqual(date1, date2)).toBeFalsy();
	});
});

describe('The "groupByDay" function', () => {
	test('throws an error if given a non-array type', () => {
		const errorMessage = 'This is not an array.';

		// Calling a function that's going to throw an error
		// will crash everything before Jest gets a chance
		// to take control.
		// We can wrap the dangerous call inside an anonymous
		// function, so that Jest can call it later in a controlled,
		// safe environment (a try/catch block).
		expect(() => events.groupEventsByDay(7)).toThrowError(errorMessage);
		expect(() => events.groupEventsByDay(false)).toThrowError(errorMessage);
		expect(() => events.groupEventsByDay("Hello!")).toThrowError(errorMessage);
	});

	test('gives an empty object without any keys for an empty array', () => {
		expect(events.groupEventsByDay([])).toEqual({});
	});

	test('groups one event under one key called "0"', () => {
		const walkOscar = testData.walkOscar;
		const event = { "0": [walkOscar] };
		const toTest = events.groupEventsByDay([walkOscar]);
		console.log(toTest)

		expect(toTest).toEqual(event);
	});

	test('groups and sorts events occurring on the same day, but at different times under one key called "0"', () => {
		const myEvents = testData.myEvents;
		const date = new Date(myEvents[0].startsAt);
		const toTest = events.groupEventsByDay(myEvents, date);
		const sortedEvents = [myEvents[0], myEvents[3], myEvents[4]];
		const result = {
			"0": sortedEvents
		};

		expect(toTest).toEqual(result);
	});

	test('sorts three different events under three correct keys', () => {
		expect(events.groupEventsByDay(myEvents)).toBe({

		});
	});

	test('groups events occurring on the same day, but in different years/months at separate keys', () => {
		const myEvents = [walkOscar, practiceJavaScript, playGuitar];
		const result = events.groupEventsByDay(myEvents);

		const objectKeys = Object.keys(result);

		expect(objectKeys).toHaveLength(3);
	});
});

// test('moveEvent', () => {});
