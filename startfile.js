/**
 * @fileoverview Startfile hook definition
 */
define([], function () {
  return function(runtime, params, callback) {
    params.content = runtime.headPrepend(params.content, "PREHEAD $1 Iñtërnâtiônàlizætiøn ");
    params.content = runtime.headAppend(params.content, "POSTHEAD $1 Iñtërnâtiônàlizætiøn ");
    params.content = runtime.bodyAppend(params.content, "POSTBODY $1 Iñtërnâtiônàlizætiøn ");
    params.content = runtime.bodyPrepend(params.content, "PREBODY $1 Iñtërnâtiônàlizætiøn ");
    
    // TODO params.deploy.options
    var paramsdump = [
      params.options.opt1withdefault,
      params.options.opt2withoutdefault,
      params.deploy.type,
      params.deploy.env,
      params.deploy.isPhonegap
    ];

    callback(null, JSON.stringify(paramsdump) + params.content);
  };
});