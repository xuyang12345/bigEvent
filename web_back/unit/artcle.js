var article = {
    show: function(obj, callback) {
        // console.log("article.show的参数", obj);

        $.get(APIURLS.article_search, {
                page: obj.page,
                type: obj.type,
                state: obj.status,
            },
            function(res) {
                callback(res)
            }
        )
    },

    del: function(id, callback) {
        $.get(APIURLS.article_del, { 'id': id }, function(res) {
            callback(res)
        })
    },
    getDetail: function(id, callback) {
        // console.log(" getDetail的参数", obj);

        $.get(APIURLS.article_search, {
                id: id
            },
            function(res) {
                callback(res)
            }
        )
    },
    //获取月新增文章数量
    getMonthCount: function(callback) {
        $.get(APIURLS.month_article_count, function(res) {
            callback(res)
        })
    }
}