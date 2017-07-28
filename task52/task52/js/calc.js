var calcu = document.getElementById('calcu');
	calcu.onclick = function(){
		var op1 = document.getElementById('op1').value,//操作数1
			op2 = document.getElementById('op2').value,//操作数2
			op  = document.getElementById('op').value,//操作符
			result = document.getElementById('res'),//结果
		 	res;
		 	if(isNaN(op1)||isNaN(op2)) {//若字符串中为纯数字，如'12'，isNaN判断为false
		 		alert('请输入数字！');
		 		return;
		 	}
		 	op1 = parseFloat(op1);
		 	op2 = parseFloat(op2);
		switch(op){
			case '+':
				res = parseFloat((op1+op2).toFixed(4));//解决近似差值问题，并用parseFloat解析
				break;                                 //去掉小数点后多余的0
			case '-':
				res = parseFloat((op1-op2).toFixed(4));
				break;
			case '*':
				res = parseFloat((op1*op2).toFixed(4));
				break;
			case '/':
				res = op2?parseFloat((op1/op2).toFixed(4)):'NaN';
				break;
			default:
				break;
		}
		result.value = res;
	}


