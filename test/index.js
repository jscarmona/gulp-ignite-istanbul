import { expect } from 'chai';
import { Instrumenter } from 'isparta';
import task from '../src';

describe('Task', () => {
  describe('#name', () => {
    it('should be a string', () => {
      expect(task.name).to.be.a('string');
    });

    it('should equal `istanbul`', () => {
      expect(task.name).to.equal('istanbul');
    });
  });

  describe('#description', () => {
    it('should be a string', () => {
      expect(task.name).to.be.a('string');
    });
  });

  describe('#config', () => {
    it('should be an object', () => {
      expect(task.config).to.be.a('object');
    });

    it('should equal the default configs set', () => {
      expect(task.config).to.eql({
        src: [
          './client/app/*.js',
          '!./client/app/*.spec.js',
        ],
        options: {
          instrumenter: Instrumenter,
        },
        reports: {},
        thresholds: {},
      });
    });
  });

  describe('#help', () => {
    it('should be an object', () => {
      expect(task.help).to.be.a('object');
    });
  });

  describe('#fn', () => {
    it('should be a function', () => {
      expect(task.fn).to.be.a('function');
    });
  });
});
