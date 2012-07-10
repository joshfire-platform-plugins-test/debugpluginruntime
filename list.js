/**
 * @fileoverview List hook definition
 */
define(['./dep'], function (dep) {
  return {
    generate: function (options, callback) {
      return callback(null, '<p>List hook of debug add-on</p>');
    }
  };
});