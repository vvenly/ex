
    var date=new Date();        //全局用  当前时间

    function dateFormat(date) {     //时间格式  年月日时分秒   可根据需要筛减
        var y=date.getFullYear(),
            month=date.getMonth() + 1,
            m=month<10 ? "0"+month : month,
            d=(date.getDate()<10) ? "0"+date.getDate() : date.getDate(),
            h=(date.getHours()<10) ? "0"+date.getHours() : date.getHours(),
            mi=(date.getMinutes()<10) ? "0"+date.getMinutes() : date.getMinutes(),
            s=(date.getSeconds()<10) ? "0"+date.getSeconds() : date.getSeconds();

        var sendDate=y + "-" +m + "-" +d + " " +h + ":" +mi + ":" +s;

        return sendDate;
    }

    console.log("当前测试时间："+dateFormat(date)+"<br><br>");

    //昨天
    var yesterday=dateFormat(new Date(date.getTime() - 86400000));

    console.log("昨天："+yesterday+"<br><br>");


    //明天
    var tomorrow=dateFormat(new Date(date.getTime() + 86400000));

    console.log("明天："+tomorrow+"<br><br>");

    function monday (date) {    //周一

        var weekday = date.getDay()||7; 

        date.setDate(date.getDate()-weekday+1);
        return dateFormat(date);
    }

    console.log("周一："+monday (date)+"<br><br>");


    function monthFirst (date) {    //本月第一天
        date.setDate(1);
        return dateFormat(date);
    }

    console.log("本月一号："+monthFirst(date)+"<br><br>");

    function monthLast (now) {    //本月最后一天
        var nowMonth = now.getMonth(); //当前月 
        var nowYear = now.getFullYear(); //当前年 

        //本月的开始时间
        var monthStartDate = new Date(nowYear, nowMonth, 1); 
        //本月的结束时间
        var monthEndDate = new Date(nowYear, nowMonth+1, 0);
        var timeStar=Date.parse(monthStartDate)/1000;//s
        var timeEnd=Date.parse(monthEndDate)/1000;//s

        console.log("本月一号：", timeStar, "最后一天：", timeEnd);

        console.log( "下月最后一天：", timeStar-10);

        console.log("上月一号：", dateFormat(new Date(timeStar*1000-2000)).substring(0,7)+'-01');
        // date.setDate(1);
        // return dateFormat(date);
    }
    monthLast(date)


    function yearFirst (date) {     //今年第一天
        date.setDate(1);
        date.setMonth(0);
        return dateFormat(date);
    }

    console.log("今年一号："+yearFirst(date)+"<br><br>");