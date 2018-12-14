import {
  handleRender,
  getData,
  renderFullPage,
  sendError,
  sanitizeData
} from './ssrFunctions';
import express from 'express';
import request from 'supertest';
import React from 'react';
import * as testSetup from '../../../tests/test-setup.js';
import { render, shallow } from 'enzyme';
import app from '../tests/app';


const errorMsg = 'there was an error';

const handleFail = (req, res) => {
  try {
    throw new Error('test error');
  }
  catch (e) {
    sendError(res);
  }
}

const ssrSuccess = '/ssrSuccess';
const ssrFail = '/ssrFail';

app.get(ssrFail, handleFail);
app.use(handleRender);

describe('handleRender', () => {
  it('should return error', (done) => {
    return request(app)
      .get(ssrFail)
      .expect(500)
      .expect(errorMsg, done);
  })
  it('should return success', (done) => {
    return request(app)
      .get('/about')
      .expect(200, done);
  });
});

describe('sanitize data', () => {
  const hello = 'hello';
  const output = JSON.stringify(hello);
  it('should return back value', () => {
    expect(sanitizeData(hello)).toBe(output)
  }) 
  it('should return back value', () => {
    const uncleanData = JSON.stringify(`<${hello}/>`);
    expect(sanitizeData(uncleanData)).not.toMatch(/</) ;
  }) 
})


