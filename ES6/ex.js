const vlRequest = (arg)=>{
    return new Promise((resolve,reject)=>{
        // console.log(JavaUrl)
        $.ajax({
            type: arg.type,
            // headers: { "Content-Type": "application/json;charset=utf-8" },
            // xhrFields: { withCredentials: false },
            // url: "http://192.168.124.114:8865/v1/"+arg.url,
            // url: JavaUrl+'v1/fuel/'+arg.url,
            url: '/web/reverse_proxy/web_api4',
            // data: arg.data,
            data: {
                request_way: arg.type,
                url: "http://192.168.124.88:981/v1/fuel/"+arg.url,
                data: arg.data || [0]
            },
            success: function (json) {
                // console.log(JSON.parse(json))

                resolve(JSON.parse(json))
            },
            error:function (err) {
                reject(err)
            }
        })
    })
};