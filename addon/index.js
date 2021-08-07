import { run } from '@ember/runloop';
import { trySet } from '@ember/object';
import { set, reset } from 'mockdate';

const originalDate = Date;
const originalPlatformNow = run.backburner._platform.now;

/*
 * The backburner.js _platform.now function must be overridden when using this
 * addon in acceptance tests that return async model hooks. Otherwise the ember
 * run loop gets itself into an infinite loop as time will never progress.
 *
 * See this backburner PR for more info:
 * https://github.com/BackburnerJS/backburner.js/pull/264
 */
const freezeDateAt = (...args) => {
  trySet(run, 'backburner._platform.now', () => originalDate());
  set(args);
};

const unfreezeDate = (...args) => {
  trySet(run, 'backburner._platform.now', originalPlatformNow);
  reset(args);
};

export { freezeDateAt, unfreezeDate };
