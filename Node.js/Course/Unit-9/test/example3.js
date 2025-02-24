/*
   Copyright 2018 Makoto Consulting Group, Inc.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */
const {describe, it} = require('mocha');
const {expect} = require('chai');
const sinon = require('sinon');

describe('When spying on console.log()', function() {
  it('console.log() should still be called', function() {
    const consoleLogSpy = sinon.spy(console, 'log');
    const message = 'You will see this line of output in the test report';
    console.log(message);
    expect(consoleLogSpy.calledWith(message)).to.be.true;
    consoleLogSpy.restore();
  });
});
