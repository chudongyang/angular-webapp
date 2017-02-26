//用于表单验证
angular.module('app').config(['$validationProvider',function ($validationProvider) {
    var expression = {
        phone: /^1\d{10}$/,
        password:function (value) {
            return value > 5;
        }
    };
    var defaultMsg = {
        phone: {
            success: '',
            error: '必须是11位手机号'
        },
        password:{
            success:'',
            error: '密码长度至少是6位'
        }
    };
    $validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);
}]);