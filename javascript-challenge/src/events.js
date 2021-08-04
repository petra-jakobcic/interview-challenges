'use strict';

// // Import the dependencies.
const { format, parseISO, differenceInDays } = require('date-fns');

/**
 * Sorts a list of events by date.
 *
 * @param {Array} events A list of events.
 *
 * @returns {Array} The list of events sorted by date.
 */
const sortEvents = events => {
	const sortedEvents = events.sort((a, b) => {
		const dateA = new Date(a.startsAt);
		const dateB = new Date(b.startsAt);
		return dateA - dateB;
	});

	return sortedEvents;
};

/**
 * Determines if a new slot is needed.
 * If the two given date strings are the same,
 * then we don't need a new slot, however,
 * if they are different,
 * then we do need a new slot.
 *
 * @param {string} date1 The first date.
 * @param {string} date2 The second date.
 *
 * @return {boolean} True if they differ,
 *                   otherwise false.
 */
const newSlotIsNeeded = (date1, date2) => {
    return date1 !== date2;
};

/**
 * Gets a number which is the difference between the earliest and
 * later date.
 *
 * @param {string} earliestDate The earliest event date.
 * @param {string} laterDate A later event date.
 *
 * @returns {number} The difference in days between the two dates.
 */
const createNewSlot = (earliestDate, laterDate) => {
    const dateObject1 = parseISO(earliestDate);
    const dateObject2 = parseISO(laterDate);

    return differenceInDays(dateObject2, dateObject1);
}

/**
 * Adds an event at the given slot in the given groups object.
 *
 * @param {Object} groups The events grouped by their day difference.
 * @param {number} slot The day difference from the first event day (0).
 * @param {Object} event An event object.
 *
 * @returns {void}
 */
const addToSlot = (groups, slot, event) => {
    groups[slot].push(event);
};

/**
 * Formats the date to read "yyyy-MM-dd".
 *
 * @param {Date} date The date to be formatted.
 *
 * @returns {string} The formatted date excluding the time.
 */
const dateWithoutTime = date => {
	return format(date, "yyyy-MM-dd");
};

/**
 * Groups events by day difference.
 *
 * @param {Array} events A list of events.
 *
 * @returns {Object} The events grouped by day difference.
 */
const groupEventsByDayDifference = events => {
    const sortedEvents = sortEvents(events);
    const groups = { "0": [] };
    const minDate = dateWithoutTime(parseISO(sortedEvents[0].startsAt));
    let slot = 0;
    let prevDateOnly = minDate;

    sortedEvents.forEach(event => {
        const dateOnly = dateWithoutTime(parseISO(event.startsAt));

        if (newSlotIsNeeded(dateOnly, prevDateOnly)) {
            slot = createNewSlot(minDate, dateOnly);
            groups[slot] = [];
        }

        addToSlot(groups, slot, event);
        prevDateOnly = dateOnly;
    });

    return groups;
};

module.exports = {
    dateWithoutTime,
    sortEvents,
    newSlotIsNeeded,
    createNewSlot,
    addToSlot,
    groupEventsByDayDifference
};
