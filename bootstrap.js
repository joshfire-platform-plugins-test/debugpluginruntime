/**
 * @fileoverview Bootstrap hook definition
 */
define([], function () {
  return function(runtime, params, callback) {
    // TODO params.deploy.options
    var paramsdump = [
      params.options.opt1withdefault,
      params.options.opt2withoutdefault,
      params.deploy.type,
      params.deploy.env,
      params.deploy.isPhonegap
    ];

    callback(null, params.content +
      'window.POSTBOOTSTRAP=' + JSON.stringify(paramsdump) + ';');
  };
});