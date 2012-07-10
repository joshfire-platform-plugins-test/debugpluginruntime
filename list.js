/**
 * @fileoverview List hook definition
 */
define([], function () {
  return {
    generate: function (callback) {
      return callback(null, '<p>Debug plugin: list hook</p>');
    }
  };
});