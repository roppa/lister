'use strict';

const expect = require('chai').expect;
let l = require('../');

describe('Lister', () => {

  describe('invalid params', () => {

    it('should return an empty string for invalid object param', () => {
      expect(l()).to.eql('');
      expect(l(undefined)).to.eql('');
    });

    it('should return single value', () => {
      let value = 1;
      expect(l(value)).to.eql('1');
    });

    it('should catch null', () => {
      let value = null;
      expect(l(value)).to.eql('');
    });

  });

  describe('unordered list', () => {

    it('should return an ul for an array', () => {
      let arr = [1, 2, 3];
      expect(l(arr)).to.eql('<ul><li>1</li><li>2</li><li>3</li></ul>');
    });

    it('should return an ul for a single depth object', () => {
      let arr = { a: 1, b: 2, c: 3 };
      expect(l(arr)).to.eql('<ul><li>a: 1</li><li>b: 2</li><li>c: 3</li></ul>');
    });

    it('should return a nested ul for a nested object', () => {
      let arr = { a: { aa: 1 }, b: { bb: { bbb: 2 } }, c: 3 };
      expect(l(arr)).to.eql('<ul><li>a: <ul><li>aa: 1</li></ul></li><li>b: <ul><li>bb: <ul><li>bbb: 2</li></ul></li></ul></li><li>c: 3</li></ul>');
    });

    it('should add a class to an ul list', () => {
      let arr = [1, 2, 3];
      expect(l(arr, { ulClass: 'my-ul-class' })).to.eql('<ul class="my-ul-class"><li>1</li><li>2</li><li>3</li></ul>');
    });

    it('should add a class to an ul list and li', () => {
      let arr = [1, 2, 3];
      expect(l(arr, { ulClass: 'my-ul-class', liClass: 'my-ul-class' })).to.eql('<ul class="my-ul-class"><li class="my-ul-class">1</li><li class="my-ul-class">2</li><li class="my-ul-class">3</li></ul>');
    });

  });

  describe('ordered list', () => {

    it('should return a nested ol for a nested object with options.format = ol', () => {
      let obj = { a: { aa: 1 }, b: { bb: { bbb: 2 } }, c: 3 };
      expect(l(obj, { format: 'ol' })).to.eql('<ol><li>a: <ol><li>aa: 1</li></ol></li><li>b: <ol><li>bb: <ol><li>bbb: 2</li></ol></li></ol></li><li>c: 3</li></ol>');
    });

    it('should add a class to ol list', () => {
      let arr = [1, 2, 3];
      expect(l(arr, { format: 'ol', ulClass: 'my-ul-class' })).to.eql('<ol class="my-ul-class"><li>1</li><li>2</li><li>3</li></ol>');
    });

  });

  describe('markdown list', () => {

    it('should return a markdown list for an array with options.format = md', () => {
      let arr = [1, 2, 3];
      expect(l(arr, { format: 'md' })).to.eql('\n - 1\n - 2\n - 3');
    });

    it('should return a markdown list for an object with options.format = md', () => {
      let obj = { a: 1, b: 2, c: 3 };
      expect(l(obj, { format: 'md' })).to.eql('\n - a: 1\n - b: 2\n - c: 3');
    });

    it('should return a markdown list for a nested object with options.format = md', () => {
      let obj = { a: 1, b: { bb: 2 }, c: 3 };
      expect(l(obj, { format: 'md' })).to.eql('\n - a: 1\n - b: \n  - bb: 2\n - c: 3');
    });

  });

});
