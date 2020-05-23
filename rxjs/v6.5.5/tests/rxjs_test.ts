
// @deno-types="../testing.d.ts"
import testing from 'https://dev.jspm.io/rxjs@6.5.5/testing';
import {
  assertEquals,
} from "../../../test_deps.ts";

const { TestScheduler } = testing;

const testScheduler = new TestScheduler((actual, expected) => {
  assertEquals(actual, expected);
});

Deno.test("Integration test", function (): void {
  testScheduler.run(({ hot, expectObservable }) => {
    const source = hot('--a--a--a--a--a--a--a--');
    const sub1 = '      --^-----------!';
    const sub2 = '      ---------^--------!';
    const expect1 = '   --a--a--a--a--';
    const expect2 = '   -----------a--a--a-';
    expectObservable(source, sub1).toBe(expect1);
    expectObservable(source, sub2).toBe(expect2);
  });
});
