var arr=['a','x','b','d','m','a','m','m','p','j','a'],//m 3 a 3
	stat={},//储存字符键及字符出现位置的数组
    max=0,//出现次数最多字符：位置数组length
    max_char;//出现次数最多字符

// 字符统计
arr.forEach(function(element,index){
	if(stat[element]){
		stat[element].push(index);//遍历的同时存储字符位置
	}else{
		stat[element] = [index];//若对象中不存在该字符，则创建
	}
})

// 出现次数最多
for(var item in stat){
	if(stat[item].length>max){
		max = stat[item].length;
		max_char = item;
	}
}

console.log('出现最多字符及出现次数：'+max_char+","+max)
console.log('出现的位置：')
stat[max_char].forEach(function(element){
	console.log(element);
})


for(var item in stat){
	//判断是否有多个,有即输出
	if((stat[item].length==max)&&item!=max_char){
		console.log('出现最多字符及出现次数：'+item+','+stat[item].length);
		console.log('出现的位置：')
		stat[item].forEach(function(element){
			console.log(element);
		})
	}
}
