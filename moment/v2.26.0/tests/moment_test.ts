// @deno-types="../moment.d.ts"
import moment from 'https://cdn.pika.dev/moment@2.26.0';
import {
  assert,
  assertEquals,
} from "../../../test_deps.ts";

Deno.test("Moment Integration", function (): void {
  assertEquals(moment.parseTwoDigitYear("50"), 2050);
  assertEquals(moment().add(1, 'hours').fromNow(), 'in an hour');
  assertEquals(
    moment(new Date(2011, 9, 16)).format('YYYYMMDD'),
    '20111016',
  );
  assertEquals(
    moment(new Date(2011, 9, 16)).unix(),
    new Date(2011, 9, 16).getTime() / 1000,
  );
  assertEquals(
    moment(1318781876406).valueOf(),
    new Date(1318781876406).getTime(),
  );
  assertEquals(
    moment("12-25-1995", "MM-DD-YYYY").format("MM-DD-YYYY"),
    "12-25-1995",
  );
  assertEquals(
    moment([2010, 1, 14, 15, 25, 50, 125]).unix(),
    1266179150,
  );
  assertEquals(
    moment({ years: 2010, months: 3, days: 5, hours: 15, minutes: 10, seconds: 3, milliseconds: 123 }).unix(),
    1270498203,
  );
  assertEquals(
    moment(new Date(2011, 9, 16).toISOString(), moment.ISO_8601, true).toISOString(),
    new Date(2011, 9, 16).toISOString(),
  );
  assertEquals(
    moment(new Date(2011, 9, 16).toUTCString(), moment.RFC_2822, true).format("YYYY-MM-DD"),
    '2011-10-16',
  );
  assertEquals(
    moment('2010-01-01').add(7, 'days').subtract(1, 'months').year(2009).format("YYYY-MM-DD"),
    "2009-12-08",
  );
  assertEquals(
    moment().set('year', 2013).year(),
    2013,
  );
  assertEquals(
    moment([2007, 0, 29]).diff(moment([2007, 0, 28]), 'days'),
    1,
  );
  assertEquals(
    moment.min(moment([2007, 0, 29]), moment([2007, 0, 28])).format('YYYYMMDD'),
    '20070128',
  );
  assertEquals(
    moment.max(moment([2007, 0, 29]), moment([2007, 0, 28])).format('YYYYMMDD'),
    '20070129',
  );
  assertEquals(
    moment("2012-02", "YYYY-MM").daysInMonth(),
    29,
  );
  assertEquals(
    moment.duration(24, "hours").humanize(),
    'a day',
  );
  assert(!moment(null).isValid());
  assert(moment(undefined).isValid());
  assert(!moment.isMoment(new Date()));
  assert(moment.isMoment(moment()));
  assert(moment("2011-10-10").isValid());
  assert(!moment("2011-10-10T10:20:90").isValid());
  assert(moment([2000]).isLeapYear());
  assert(moment().isBetween(moment().subtract(1, 'year'), moment().add(1, 'year')));
  assert(!moment().isBetween(moment().subtract(1, 'year'), moment().subtract(1, 'year')));
});
