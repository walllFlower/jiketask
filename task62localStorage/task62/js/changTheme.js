/*
1.点击颜色小圆点 用类theme标识 绑定onclick方法
2.找到所有需要改变颜色的地方
  1.字体 2.背景 3.边框
*/
var b_themes = document.getElementsByClassName('theme'),//changeTheme button
	change_col = document.getElementsByClassName('change_col'),//change color
	change_bor = document.getElementsByClassName('change_bor'),//change border color
	change_bcg = document.getElementsByClassName('change_bcg'),//change background color
	change_hov = document.getElementsByClassName('change_hov'),//change hover color
 	_color=null;//theme color

if(localStorage.length) {//如果localStorage不为空，设置主题色
  	_color = localStorage.getItem('color');
  	setTheme(_color);
}

function setTheme (color) {
	for(var i=0;i<change_col.length;i++){
			change_col[i].style.color = color;
		}
	for(var i=0;i<change_bor.length;i++){
		change_bor[i].style.borderColor = color;
	}
	for(var i=0;i<change_bcg.length;i++){
		change_bcg[i].style.backgroundColor = color;
	}
	for(var i=0;i<change_hov.length;i++){//hover效果每改变一次主题后重新绑定事件
		change_hov[i].addEventListener('mouseenter',function(){
			this.style.color = color;
		});
		change_hov[i].addEventListener('mouseleave',function(){
			this.style.color = '';
	    });
	}
}

for(var i=0;i<b_themes.length;i++){
	b_themes[i].addEventListener('click',function(e){
		e.preventDefault();
		var _color = this.getAttribute('data-color');//主题颜色
		localStorage.setItem('color',_color);//储存主题颜色
		setTheme(_color);
	});
}



