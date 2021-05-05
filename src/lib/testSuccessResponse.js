import assert from 'assert';

export default function testSuccessResponse(response) {
assert.strictEqual(response.code, '200', 'Response code is not 200');
assert.ok(response.responseTime<200, 'Response time is greater than 200ms');
}
