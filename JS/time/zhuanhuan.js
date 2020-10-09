function DateFormat(timestamp,format){
	// console.log(timestamp)
		let t = new Date(timestamp)
	    format = format || 'yyyy-MM-dd hh:mm:ss'
	    var o = {
	      'M+': t.getMonth() + 1, // month
	      'd+': t.getDate(), // day
	      'h+': t.getHours(), // hour
	      'm+': t.getMinutes(), // minute
	      's+': t.getSeconds(), // second
	      'q+': Math.floor((t.getMonth() + 3) / 3), // quarter
	      S: t.getMilliseconds() // millisecond
	    }
	    var week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
	    if (/(y+)/.test(format)) {
	      format = format.replace(RegExp.$1, (t.getFullYear() + '').substr(4 - RegExp.$1.length))
	    }
	    if (/(w+)/.test(format)) {
	      format = format.replace(RegExp.$1, week[t.getDay()])
	    }
	    for (var k in o) {
	      if (new RegExp('(' + k + ')').test(format)) {
	        format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
	      }
	    }
	    return format
}