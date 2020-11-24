//获取数据用

class vRequest{
    getData(arg){
        return new Promise((resolve, reject) => {
            $.ajax({
                type: arg.type,
                url:arg.url,
                data:arg.data,
                success: function (data) {
                    resolve(data);
                },
                error:function () {
                    reject('执行失败123')
                }
            });
        })
    }
}

export default vRequest;