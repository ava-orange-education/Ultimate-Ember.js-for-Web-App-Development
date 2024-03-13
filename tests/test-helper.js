import Application from 'my-ember-project/app';
import config from 'my-ember-project/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';
import {
  forceModulesToBeLoaded,
  sendCoverage,
} from 'ember-cli-code-coverage/test-support';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();

QUnit.done(async function () {
  forceModulesToBeLoaded();
  await sendCoverage();
});
