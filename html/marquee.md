语法：

<marquee></marquee>

以下是一个最简单的例子：

代码如下:

<marquee><font size=+3 color=red>Hello, World</font></marquee>

下面这两个事件经常用到：

onMouseOut="this.start()" ：用来设置鼠标移出该区域时继续滚动

onMouseOver="this.stop()"：用来设置鼠标移入该区域时停止滚动

代码如下:

<marquee onMouseOut="this.start()" onMouseOver="this.stop()">onMouseOut="this.start()" ：用来设置鼠标移出该区域时继续滚动 onMouseOver="this.stop()"：用来设置鼠标移入该区域时停止滚动</marquee>

这是一个完整的例子：

代码如下:

<marquee id="affiche" align="left" behavior="scroll" bgcolor="#000" direction="up" height="200" width="200" hspace="50" vspace="20" loop="-1" scrollamount="10" scrolldelay="100" onMouseOut="this.start()" onMouseOver="this.stop()">

这是一个完整的例子

</marquee>

该标签支持的属性多达11个：

align

设定marquee标签内容的对齐方式

absbottom：绝对底部对齐（与g、p等字母的最下端对齐）

absmiddle：绝对中央对齐

baseline：底线对齐

bottom：底部对齐（默认）

left：左对齐

middle：中间对齐

right：右对齐

texttop：顶线对齐

top：顶部对齐

代码如下:

<marquee align="absbottom">align="absbottom"：绝对底部对齐（与g、p等字母的最下端对齐）。 </marquee>

<marquee align="absmiddle">align="absmiddle"： 绝对中央对齐。 </marquee>

<marquee align="baseline">align="baseline"： 底线对齐。 </marquee>

<marquee align="bottom">align="bottom"： 底部对齐（默认）。 </marquee>

<marquee align="left">align="left"： 左对齐。 </marquee>

<marquee align="middle">align="middle"： 中间对齐。 </marquee>

<marquee align="right">align="right"： 右对齐。 </marquee>

<marquee align="texttop">align="texttop"： 顶线对齐。 </marquee>

<marquee align="top">align="top"： 顶部对齐。 </marquee>

behavior

设定滚动的方式：

alternate： 表示在两端之间来回滚动。

scroll： 表示由一端滚动到另一端，会重复。

slide：      表示由一端滚动到另一端，不会重复。

代码如下:

<marquee behavior="alternate">alternate：表示在两端之间来回滚动。 </marquee>

<marquee behavior="scroll">scroll：表示由一端滚动到另一端，会重复。</marquee>

<marquee behavior="slide">slide：      表示由一端滚动到另一端，不会重复。</marquee>

bgcolor

设定活动字幕的背景颜色，背景颜色可用RGB、16进制值的格式或颜色名称来设定。

代码如下:

<marquee bgcolor="#006699">设定活动字幕的背景颜色 bgcolor="#006699"</marquee>

<marquee bgcolor="RGB(10%,50%,100%,)">设定活动字幕的背景颜色 bgcolor="rgb(10%,50%,100%,)"</marquee>

<marquee bgcolor="red">设定活动字幕的背景颜色 bgcolor="red"</marquee>

direction

设定活动字幕的滚动方向

代码如下:

<marquee direction="down">设定活动字幕的滚动方向direction="down"：向下</marquee>

<marquee direction="left">设定活动字幕的滚动方向direction="left"：向左</marquee>

<marquee direction="right">设定活动字幕的滚动方向direction="right"：向右</marquee>

<marquee direction="up">设定活动字幕的滚动方向direction="up"：向上</marquee>

height

设定活动字幕的高度

代码如下:

<marquee height="200" direction="down">设定活动字幕的高度height="500"</marquee>

width

设定活动字幕的宽度

代码如下:

<marquee width="500">设定活动字幕的宽度width="500"</marquee>

hspace

设定活动字幕里所在的位置距离父容器水平边框的距离

This controls the horizontal（水平）space around the display box.

代码如下:

<table width="500" border="3" align="center" cellpadding="0" cellspacing="0">
    <tr>
        <td><marquee hspace="100" bgcolor="#000">hspace="100"</marquee></td>
    </tr>
</table>


vspace

设定活动字幕里所在的位置距离父容器垂直边框的距离

This controls the vertical（垂直） space around the display box.

代码如下:

<marquee vspace="100" bgcolor="#CCCCCC">hspace="100"</marquee>

loop

设定滚动的次数，当loop=-1表示一直滚动下去，默认为-1

代码如下:

<marquee loop="-1" bgcolor="#CCCCCC">我会不停地走。</marquee>

<p>&nbsp;</p>

<marquee loop="2" bgcolor="#CCCCCC">我只走两次哦</marquee>

scrollamount

设定活动字幕的滚动速度，单位pixels

代码如下:

<marquee scrollamount="10" >scrollamount="10" </marquee>

<marquee scrollamount="20" >scrollamount="20" </marquee>

<marquee scrollamount="30" >scrollamount="30" </marquee>

scrolldelay

设定活动字幕滚动两次之间的延迟时间，单位millisecond（毫秒）

值大了会有一步一停顿的效果

代码如下:

<marquee scrolldelay="10" >scrolldelay="10" </marquee>

<marquee scrolldelay="100" > scrolldelay="100"</marquee>

<marquee scrolldelay="1000">scrolldelay="1000" </marquee>

 

<marquee> ... </marquee>

移动属性的设置 ,这种移动不仅仅局限于文字，也可以应用于图片，表格等等

鼠标属性

onMouseOut=this.start() ........鼠标移出状态滚动

onMouseOver=this.stop() .........鼠标经过时停止滚动

方向

<direction=#> #=left, right ,up ,down <marquee direction=left>从右向左移！</marquee>

方式

<bihavior=#> #=scroll, slide, alternate <marquee behavior=scroll>一圈一圈绕着走！</marquee>

<marquee behavior=slide>只走一次就歇了！</marquee>

<marquee behavior=alternate>来回走</marquee>

循环

<loop=#> #=次数；若未指定则循环不止(infinite) <marquee loop=3 width=50% behavior=scroll>只走 3 趟</marquee>

<marquee loop=3 width=50% behavior=slide>只走 3 趟</marquee>

<marquee loop=3 width=50% behavior=alternate>只走 3 趟！</marquee>

速度

<scrollamount=#> <marquee scrollamount=20>啦啦啦，我走得好快哟！</marquee>

<marquee scrollamount=2>啦啦啦，我走得好慢哟！</marquee>

延时

<scrolldelay=#> <marquee scrolldelay=500 scrollamount=100>啦啦啦，我走一步，停一停！</marquee>

外观(Layout)设置

对齐方式(Align)

<align=#> #=top, middle, bottom <font size=6>

<marquee align=# width=400>啦啦啦，我会移动耶！</marquee>

</font>

底色

<bgcolor=#> #=rrggbb 16 进制数码，或者是下列预定义色彩：

Black, Olive, Teal, Red, Blue, Maroon, Navy, Gray, Lime,

Fuchsia, White, Green, Purple, Silver, Yellow, Aqua <marquee bgcolor=aaaaee>颜色！</marquee>

面积

<height=# width=#> <marquee height=40 width=50% bgcolor=aaeeaa>面积！</marquee>

空白

(Margins)<hspace=# vspace=#>

<marquee hspace=20 vspace=20 width=150 bgcolor=ffaaaa align=middle>面积！</marquee>

</P>

<marquee id="iescroller" direction=left height=10 onMouseOut=start(); onMouseOver=stop(); scrollamount=2 scrolldelay=10 scrollleft="0" scrolltop="0" behavior="alternate" bgcolor="#999999" style="color: #ffffff; font-size: 14; font-family: '宋体', 'Arial','Helvetica', 'sans-serif'"title=文字内容> 这是放文字或需要移动的图片（光标放在这里时用INSERT命令就可以插入图片）</marquee> </P>








<div class="table-wrapper">
<table style="width: 760px" border="0" cellspacing="5" cellpadding="0">
<tbody>
<tr>
<td align="middle"><span style="font-size: 16px">marquee的滚动属性参数</span><span style="font-size: 16px; line-height: 1.5">&nbsp;</span></td>
</tr>
<tr>
<td>
<p><span style="font-size: 16px">&nbsp;</span></p>
<p><span style="font-size: 16px">&nbsp;&nbsp;&nbsp;&nbsp; 从&lt;marquee&gt;开始到&lt;/marquee&gt;结束,其中有很多参数,其实,朋友们还是应用得很多了,让图片滚动起来,也是经常经常应用的,下面对这个网页参数的属性做一些简单的描述;</span></p>
<p><span style="font-size: 16px">滚动参数：</span></p>
<p><span style="font-size: 16px">1：方向：DIRECTION</span></p>
<p><span style="font-size: 16px">left---左（默认）</span></p>
<p><span style="font-size: 16px">right---右</span></p>
<p><span style="font-size: 16px">up------上</span></p>
<p><span style="font-size: 16px">down----下</span></p>
<p><span style="font-size: 16px">2：方式：BEHAVIOR</span></p>
<p><span style="font-size: 16px">SCROLL -------环绕滚动（默认）</span></p>
<p><span style="font-size: 16px">SLIDE---------滚动一次</span></p>
<p><span style="font-size: 16px">ALTERNATE-----来回滚动</span></p>
<p><span style="font-size: 16px">3：次数：LOOP</span></p>
<p><span style="font-size: 16px">当LOOP=-1或LOOP=INFINITE时，则表明文字滚动是无限循环（默认）</span></p>
<p><span style="font-size: 16px">4：速度：SCROLLDELAY</span></p>
<p><span style="font-size: 16px">任意自然整数</span></p>
<p><span style="font-size: 16px">5：对齐：ALIGN</span></p>
<p><span style="font-size: 16px">TOP---------对齐上方</span></p>
<p><span style="font-size: 16px">MIDDLE------对齐中部</span></p>
<p><span style="font-size: 16px">BOTTOM------对齐下方</span></p>
<p><span style="font-size: 16px">6：鼠标的划过与离开</span></p>
<p><span style="font-size: 16px">onMouseOver=this.stop(); onMouseOut=this.start();</span></p>
<p><span style="font-size: 16px">划过停止滚动。离开，继续滚动</span></p>
<p><span style="font-size: 16px">有了以上参数。我们就很容易制作出一个logo图片的任意滚动方式，例如：</span></p>
<p><span style="font-size: 16px">&lt;marquee width=120 height=200 DIRECTION=up BEHAVIOR=ALTERNATE SCROLLDELAY=120 ALIGN=MIDDLE onMouseOver=this.stop(); onMouseOut=this.start();&gt;&lt;a href=http://qjpz.com&gt;&lt;img src=http://qjpz.com/bbs/images/logo.gif border=0&gt;&lt;marquee&gt;</span></p>
<p><span style="font-size: 16px">很容易对照出。这是一个滚动速度为120MM，从下到上碰壁即返回并对齐中间，鼠标划过图标即停止，点击图标进入〈千娇论坛〉的一个来回滚动的代码。</span></p>
<p><span style="font-size: 16px">在背景图片上做滚动字幕</span></p>
<p><span style="font-size: 16px">&lt;TABLE width="500" border=0&gt;</span></p>
<p><span style="font-size: 16px">&lt;TBODY&gt;</span></p>
<p><span style="font-size: 16px">&lt;TR&gt;</span></p>
<p><span style="font-size: 16px">&lt;TD background=背景图片地址 height=250&gt;</span></p>
<p><span style="font-size: 16px">&lt;P&gt;&lt;MARQUEE scrollAmount=2 scrollDelay=50 direction=up width=200 height=200 behavior=scroll&gt;要滚动的文字&lt;/MARQUEE&gt;&lt;/P&gt;&lt;/TD&gt;&lt;/TR&gt;&lt;/TBODY&gt;&lt;/TABLE&gt;&lt;/DIV&gt;</span></p>
<p><span style="font-size: 16px">参数设置：</span></p>
<p><span style="font-size: 16px">a）scrollAmount表示速度，值越大速度越快。如果没有它，默认为6，建议设为1～3比较好</span></p>
<p><span style="font-size: 16px">b）scrollDelay也是用来控制速度的，表示走走停停，默认为90，值越大，速度越慢。通常scrollDelay是不需要设置的。</span></p>
<p><span style="font-size: 16px">c）direction很明显是表示滚动的方向，默认为从右向左：←，因此如果是向左滚动的话不需要次参数。其他可选的值还有right，down，up。滚动方向分别为：right表示→，up表示↑，down表示↓。</span></p>
<p><span style="font-size: 16px">d）width和height用来表示滚动区域的大小，width是宽度，height是高度。特别是在做垂直滚动的时候，一定要设height的值。</span></p>
<p><span style="font-size: 16px">e）behavior是来控制滚动属性的，默认为循环滚动(scroll)，同样，如果是循环滚动的话可以不需要此参数。其他可选的值还有alternate(交替滚动)，slide(幻灯片效果，指的是滚动一次，然后停止滚动)。</span></p>
<p><span style="font-size: 16px">f）每行字的前后&lt;FONT color=#990066 size=4 face=隶书&gt;和&lt;/FONT&gt;用定义每行字的颜色，大小和字体，如果哪项不需要的话，把代码去掉就行。</span></p>
</td>
</tr>
</tbody>
</table></div>

<hr>

图片滚动
用```<img src=相对路径/文件名>```的语句。并且要注意图片名不要中文，要注意区分英文大小写。

图片做超链接
用<a href=>和</a>把<img>包围，并且img必须设border=0，否则图片会出现蓝框。

正确的例子如：

```<a href=http://www.sina.com.cn/><img src=../../j/01.jpg border=0></a>```

其中a href=表示超链接，这是最常用的。练习的方法也很简单，就是平时用FP或DW做网页的时候，要多查看源代码。

多张图片排列滚动
通常图片和图片之间用
```
<br>(回行)或<p style=margin-top:9>
```
(精确调整图片间的距离)来链接。也可以把你的图片先用表格排版，然后把这个表格的所有语句也加入到marquee中，让这个表格来滚动。
代码如：
```
<script>document.write('<marquee scrollAmount=2 width=340 height=160 direction=up onmouseover=stop() onmouseout=start()><a href=http://www.sina.com.cn/><img src=../../j/01.jpg border=0></a></marquee>')</script> 
```