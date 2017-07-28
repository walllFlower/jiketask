var but = document.getElementById('submit');
	but.onclick = function () {
		var score = parseInt(document.getElementById('score').value),//分数
			level = document.getElementById('level'),//等级
			le;
		
		// 分数等级匹配	
		switch(true){
			case (score>=90&&score<=100):
				le=1;break;
			case (score<90&&score>=80):
				le=2;break;
			case (score<80&&score>=70):
				le=3;break;
			case (score<70&&score>=60):
				le=4;break;
			case (score<60&&score>=50):
				le=5;break;
			case (score<50&&score>=40):
				le=6;break;
			case (score<40&&score>=30):
				le=7;break;
			case (score<30&&score>=20):
				le=8;break;
			case (score<20&&score>=10):
				le=9;break;
			case (score<10&&score>=0):
				le=10;break;
			default:
				alert('请输入0~100之间的整数数字!');//非法输入校验
				return;
		}
		level.innerHTML = le;//写入等级
	}