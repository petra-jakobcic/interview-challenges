// Import our dependency.
const events = require('./events');
const testData = require('./testData');
const { parseISO } = require('date-fns');

// Write the tests.
describe('The "dateWithoutTime" function', () => {
	test('gets a date without time', () => {
		// Arrange
        const dateString = testData.walkOscar.startsAt;
        const dateObject = parseISO(dateString);
        const expected = '2021-07-28';

        // Act
        const result = events.dateWithoutTime(dateObject);

        // Assert
		expect(result).toEqual(expected);
	});
});

describe('The "sortEvents" function', () => {
	test('sorts the events', () => {
        // Arrange
		const myEvents = testData.myEvents;
        const expected = [myEvents[2], myEvents[0], myEvents[3], myEvents[4], myEvents[1]];

        // Act
        const result = events.sortEvents(myEvents);

        // Assert
		expect(result).toEqual(expected);
	});
});

describe('The "newSlotIsNeeded" function', () => {
	test('returns false with two identical days', () => {
        // Arrange
        const exampleDate1 = '2021-08-13';
        const exampleDate2 = '2021-08-13';

        // Act
        const result = events.newSlotIsNeeded(exampleDate1, exampleDate2);

        // Assert
		expect(result).toBe(false);
	});

	test('returns true with two different days', () => {
        // Arrange
        const exampleDate1 = '2021-08-13';
        const exampleDate2 = '2022-08-13';

        // Act
        const result = events.newSlotIsNeeded(exampleDate1, exampleDate2);

        // Assert
		expect(result).toBe(true);
	});
});

describe('The "createNewSlot" function', () => {
    test('returns 0 if two dates are the same', () => {
        // Arrange
        const firstDate = '2021-06-16';
        const laterDate = firstDate;

        // Act
        const result = events.createNewSlot(firstDate, laterDate);

        // Assert
        expect(result).toEqual(0);
    });

    test('returns 3 if two dates are three days apart', () => {
        // Arrange
        const firstDate = '2021-06-16';
        const laterDate = '2021-06-19';

        // Act
        const result = events.createNewSlot(firstDate, laterDate);

        // Assert
        expect(result).toEqual(3);
    });

    test('returns 8 between Christmas and January 2nd', () => {
        // Arrange
        const christmas = '2021-12-25';
        const january2 = '2022-01-02';

        // Act
        const result = events.createNewSlot(christmas, january2);

        // Assert
        expect(result).toEqual(8);
    });

    test('accounts for a leap year', () => {
        // Arrange
        const date1 = '1992-02-28';
        const date2 = '1992-03-01';

        // Act
        const result = events.createNewSlot(date1, date2);

        // Assert
        expect(result).toEqual(2);
    });
});

describe('The "addToSlot" function', () => {
    test('adds an event to a new slot', () => {
        // Arrange
        const groups = { "0": [] };
        const slot = 0;
        const event = testData.walkOscar;
        const expected = { "0": [event] };

        // Act
        events.addToSlot(groups, slot, event);

        // Assert
        expect(groups).toEqual(expected);
    });
});

describe('The "groupEventsByDayDifference" function', () => {
    test('groups events by day difference', () => {
        // Arrange
        const myEvents = testData.myEvents;

        const expected = {
            "0": [testData.playGuitar],

            "59": [testData.walkOscar, testData.goCycling, testData.cook],

            "75": [testData.practiceJavaScript]
        }

        // Act
        const result = events.groupEventsByDayDifference(myEvents);

        // Assert
        expect(result).toEqual(expected);
    });
});
