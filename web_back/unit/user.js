 // 用户模块 
 //把所有的与用户相关的操作全部放在这个对象中
 var baseUrl = 'http://localhost:8000/'
 var user = {
     //  接受两个参数，去发请求，请求回来，执行你传入的回调函数
     login: function(userName, userPassword, callback) {
         // 发ajax请求 检查正确与否
         console.log("发请求", userName, userPassword);
         $.post(baseUrl + 'admin/login', {
             user_name: userName,
             password: userPassword
         }, function(res) {
             //    去调用callback，并传入响应体
             callback(res)

         })
     },
     logout: function(callback) {
         $.post(baseUrl + 'admin/logout', function(res) {
             callback(res)
         })
     },
     getInfo: function(callback) {
         $.get(baseUrl + 'admin/getuser', function(res) {
             callback(res)
         })
     }
 }