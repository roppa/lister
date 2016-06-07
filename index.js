'use strict';

const format = {
  divider: ': ',
  ul: {
    start: function () {
      return `<ul${this.ulClass}>`;
    },
    end: '</ul>',
    ulClass: '',
    li: {
      start: function () {
        return `<li${this.liClass}>`;
      },
      end: '</li>',
      liClass: ''
    }
  },
  ol: {
    start: function () {
      return `<ol${this.ulClass}>`;
    },
    end: '</ol>',
    ulClass: '',
    li: {
      start: function () {
        return '<li>';
      },
      end: '</li>',
      liClass: ''
    }
  },
  md: {
    start: function (depth) {
      return '';
    },
    end: '',
    ulClass: '',
    li: {
      start: function (depth) {
        return (depth === 0 ? '' : '\n') + ' '.repeat(depth) + '- ';
      },
      end: '',
      liClass: ''
    }
  }
};

let lister = (obj, options) => {

  let settings = {};
  let depth = 0;
  settings.divider = format.divider;

  if (obj === undefined) {
    return '';
  }

  if (!!!options) {
    settings.ul = format.ul;
  } else {
    if (options.format && options.format in format) {
      settings.ul = format[options.format];
    } else {
      settings.ul = format.ul;
    }

    if (options.ulClass) {
      settings.ul.ulClass = ` class="${options.ulClass}"`;
    }

    if (options.liClass) {
      settings.ul.li.liClass = ` class="${options.liClass}"`;
    }
  }

  let list = obj => {

    let result = '';
    depth++;

    if (Array.isArray(obj)) {

      result += settings.ul.start(depth);
      obj.forEach((item, key) => {
        result += settings.ul.li.start(depth) + list(item) + settings.ul.li.end;
      });
      result += settings.ul.end;

    } else if (typeof obj === 'object') {

      result += settings.ul.start(depth);
      for (let property in obj) {
        result += settings.ul.li.start(depth) + property +
         settings.divider + list(obj[property]) + settings.ul.li.end;
      }

      result += settings.ul.end;

    } else {
      result += obj;
    }

    depth--;
    return result;

  };

  return list(obj);

};

module.exports = lister;
