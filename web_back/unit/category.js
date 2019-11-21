var baseUrl = 'http://localhost:8000/'
var category = {
    show: function(callback) {
        alert('ajax拿数据')
        $.get(baseUrl + 'admin/category_search', function(res) {
            console.log(res);
            callback(res)
        })
    }
}