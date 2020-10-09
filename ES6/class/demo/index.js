class Card{
		
	constructor(x,y,w,h,color){
		this.i = 0;
		this.element = document.createElement('div');
		this.EStyle = this.element.style
		this.EStyle.position = 'absolute';
		this.EStyle.top = y+'px';
		this.EStyle.left = x+'px';
		this.EStyle.width = w+'px';
		this.EStyle.height = h+'px';
		this.EStyle.backgroundColor = color;

	}

	render(){
		this.element.onmouseover = ()=>{
			this.show();
		}
		document.body.appendChild(this.element)
	}
	show(){
		this.EStyle.width = '200px';
		this.EStyle.height = '200px';
		this.EStyle.zIndex = Card.i++;
	}
}

class RoundCard extends Card{
	constructor(x,y,w,h,color){
		super(x,y,w,h,color)
		this.EStyle.borderRadius = '15px';
	}

	show(){
		//调用父类的show方法， 
		super.show()
		//再加一些其他方法
		this.EStyle.border = "3px solid #000";
	}

	render(){
		super.render();

		//给鼠标移出后加个当前元素删除的方法
		this.element.onmouseout= ()=>{
			this.element.remove();
		}
	}
}