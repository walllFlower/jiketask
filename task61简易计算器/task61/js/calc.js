var b_opers = getByClassName('operand','input'), //数字按钮
    b_operators = getByClassName('operator','input'), //二元运算符按钮
    b_calc = document.getElementById('calc'), //=
    b_clear = document.getElementById('clear'), //C
    b_sqrt = document.getElementById('sqrt'), //√
    b_log = document.getElementById('log'), //log
	output = document.getElementById('output'), //显示
	opera = null,//运算符
    oper1 = null,//操作数1
    oper2 = null;//操作数2
var flag = false; //输入第一个操作符后，是否清屏
var flag1 = false; //标识是否完成一次完整的运算

/*
IE8及以下不支持getElementsByClassName
*/
function getByClassName(classStr, tagName) {
    if (document.getElementsByClassName) {
        return document.getElementsByClassName(classStr)
    } else {
        var nodes = document.getElementsByTagName(tagName),
            ret = [];
        for (i = 0; i < nodes.length; i++) {
            if (hasClass(nodes[i], classStr)) {
                ret.push(nodes[i])
            }
        }
        return ret;
    }
}

function hasClass(tagStr,classStr){  
     var arr=tagStr.className.split(/\s+/ );  //这个正则表达式是因为class可以有多个,判断是否包含  
     for (var i=0;i<arr.length;i++){  
            if (arr[i]==classStr){  
                  return true ;  
            }  
     }  
     return false ;  
}

/*
跨浏览器绑定事件处理函数
*/
function addEvent(element,func){
	if (element.addEventListener) {
		console.log('w1');
        element.addEventListener('click', func);
    } else if (element.attachEvent) {
		console.log('w2');
        element.attachEvent('onclick', func);
    } else {
		console.log('w3');
        element.onclick = func;
    }
}

/*
输入操作数
*/
function addOperand(event) {
	target = event.target || event.srcElement;
    if (opera && !flag) { //如果用户已选择操作符，输入第二个操作数时首先清屏
        if(target.value=='.'){//若输入为小数点，自动补零
        	output.value = '0';
        }else{
	        output.value = '';
        }
        flag = true;
    }
    if (output.value == '0' && target.value != '.') { //如果output为默认显示'0'且输入不为小数点时，则输入操作数时先清屏
        output.value = '';
    }
    if (flag1) { //完成一次运算后，直接输入操作数时，自动清屏
        output.value = '';
        flag1 = false;
    }
    output.value += target.value;
}

/*
输入运算符
*/
function addOperator () {
	target = event.srcElement || event.target;
	opera = target.value;
    oper1 = parseFloat(output.value);//保存第一个操作数
    console.log(oper1 + opera);
}

/*
绑定操作数点击事件
*/
for (var i = 0; i < b_opers.length; i++) {
    //绑定操作数按钮事件并将输入显示到output
    addEvent(b_opers[i],addOperand);
}

/*
绑定运算符点击事件
*/
for (var i = 0; i < b_operators.length; i++) {
    addEvent(b_operators[i],addOperator);
}

/*
绑定计算点击事件
*/
addEvent(b_calc,function() {
    if(!opera) return;//若未输入操作数，不进行任何操作
    oper2 = parseFloat(output.value);//保存第一个操作数
    var res = calc(oper1, opera, oper2);
    clear();
    flag1 = true;//完成一次完整运算
    output.value = res;
});

/*
绑定平方根点击事件
*/
addEvent(b_sqrt,function(){
    oper1 = parseFloat(output.value);// 直接从output中取得操作数
    var res;
    if (oper1 > 0) {
        res = Math.sqrt(oper1);
    } else {
        res = 'Error,非法输入！';
    }
    clear();
    flag1=true;
    output.value = res;
});

/*
log点击事件
*/
addEvent(b_log,function(){
    oper1 = parseFloat(output.value);//直接从output中取得操作数
    var res;
    if (oper1 > 0) {
        res = parseFloat((Math.log(oper1) / Math.LN10).toFixed(9));
    } else {
        res = 'Error,非法输入！';
    }
    clear();
    flag1=true;
    output.value = res;
});

/*
清屏事件
*/
addEvent(b_clear,clear);

/*
处理二元运算
*/
function calc(oper1, opera, oper2) {
    switch (opera) {
        case '+':
            return parseFloat((oper1 + oper2).toFixed(9));
        case '-':
            return parseFloat((oper1 - oper2).toFixed(9));
        case '*':
            return parseFloat((oper1 * oper2).toFixed(9));
        case '/':
            if (!oper2) {
                return 'Error,除数为0!';
            }
            return parseFloat((oper1 / oper2).toFixed(9));
        case '%':
            return oper1 % oper2;
        default:
            return;
    }
}

/*
清屏
*/
function clear() {
    output.value = '0';
    oper1 = null;
    opera = null;
    oper2 = null;
    flag = false;
}

