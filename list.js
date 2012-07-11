/**
 * @fileoverview List hook handler definition.
 *
 * See item.js for details.
 */
define(['./dep'], function (dep) {
  /*
   * The module returns a factory method that creates the add-on
   * initialized with the given options
   *
   * @function
   * @param {Object} config Add-on configuration options, generated from
   *  the JSON Form object that the add-on may define in its manifest file
   */
  return function (config) {

    return {
      /**
       * Generates the add-on's HTML content.
       *
       * Generation may be asynchronous. The callback function receives the
       * error and the generated HTML content.
       *
       * @function
       * @param {Object} options Generation options. TBD.
       * @param {function} cb Callback function
       */
      generate: function (options, callback) {
        console.log('addon', 'debugpluginruntime', 'list', 'generate', options);
        return callback(null, '<p>List hook of debug add-on</p>');
      }
    };
  };
});