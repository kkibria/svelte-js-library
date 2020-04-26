(function () {
    function this_lib_require(exports_list, exports_param_list, exports_index_list) {
        function get_exports(exports_index, o_param_f) {
            if (!exports_param_list[exports_index]) {
                if (!exports_list[exports_index]) {
                    var local_require = "function" == typeof require && require;
                    if (!o_param_f && local_require)
                        return local_require(exports_index, !0);
                    if (global_require)
                        return global_require(exports_index, !0);
                    var o_error_a = new Error("Cannot find module '" + exports_index + "'");
                    throw o_error_a.code = "MODULE_NOT_FOUND", o_error_a
                }
                var exports_param = exports_param_list[exports_index] = {
                    exports: {}
                };
                exports_list[exports_index][0].call(
                    exports_param.exports,
                    function (anon_param_r) {
                        var anon_var_n = exports_list[exports_index][1][anon_param_r];
                        return get_exports(anon_var_n || anon_param_r)
                    },
                    exports_param,
                    exports_param.exports,
                    this_lib_require,
                    exports_list,
                    exports_param_list,
                    exports_index_list
                )
            }
            return exports_param_list[exports_index].exports
        }
        for (var global_require = "function" == typeof require && require, i = 0; i < exports_index_list.length; i++)
            get_exports(exports_index_list[i]);
        return get_exports
    }
    return this_lib_require
})()({
    1: [function (require, module, exports) {
        exports.getName = () => {
            return 'Jim';
        };

        exports.getLocation = () => {
            return 'Munich';
        };

        exports.dob = '12.01.1982';
    }, {}]
}, {}, [1]);