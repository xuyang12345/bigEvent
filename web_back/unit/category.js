var category = {
    show: function(callback) {
        // alert('ajax拿数据')
        $.get(APIURLS.article_show, function(res) {
            // console.log(res);
            callback(res)
        })
    }
}