import { describe, it } from 'mocha';
import { expect } from 'chai';
import middleware from './middleware';

describe('middleware', () => {
  it('sets the correct headers', () => {
    const req = {};
    const res = {
      setHeader: (key, value) => {
        expect(key).to.equal('Referrer-Policy');
        expect(value).to.equal('origin-when-cross-origin');
      },
    };
    const next = () => {};

    middleware(req, res, next);

    expect(res.setHeader.callCount).to.equal(5);
    expect(res.setHeader.getCall(0).args).to.deep.equal(['X-Frame-Options', 'DENY']);
    expect(res.setHeader.getCall(1).args).to.deep.equal(['X-Content-Type-Options', 'nosniff']);
    expect(res.setHeader.getCall(2).args).to.deep.equal(['X-DNS-Prefetch-Control', 'on']);
    expect(res.setHeader.getCall(3).args).to.deep.equal(['Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload']);
    expect(res.setHeader.getCall(4).args).to.deep.equal(['host', 'localhost:8081']);
  });
});