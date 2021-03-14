var phoneArr = [];
var result;

function Manager(){
	this.addInfo = function(){
		var name = prompt('이름');
		var tel = prompt('전화번호');
		
		phoneArr.push(new PhoneInfo(name, tel));
	}
	
	this.phoneList = function(){
		var list="";
		for(var i in phoneArr){
		  list += phoneArr[i].toString()+"<br>";
		}
		result.innerHTML = list;
	}
		
	this.searchPhone = function(){
		var name = prompt('이름');
		for(var i=0;i<phoneArr.length;i++){
			if(phoneArr[i].getName() == name){
				alert(phoneArr[i].toString());
			}
		}
	}
	
	this.updatePhone = function(){
		var name = prompt('이름');
		var index = -1;
		
		for(var i=0;i<phoneArr.length;i++){
			if(phoneArr[i].getName() == name){
				index = i;
			}
		}
		
		if(index < 0){
			alert("수정대상이 존재하지 않습니다.");
		}else{
			var tel = prompt('전화번호');	
			phoneArr[index].setTel(tel);
		}	
	}
	
	this.deletePhone = function(){
		var name = prompt('이름');
		var index = -1;
		
		for(var i=0;i<phoneArr.length;i++){
			if(phoneArr[i].getName() == name){
				index = i;
			}
		}
		
		if(index < 0){
			alert("수정대상이 존재하지 않습니다.");
		}else{
			phoneArr.splice(index, 1);
		}
	}
}

var m = new Manager();

window.onload = function(){
	result = document.getElementById("result");
	
	while(true){
		var menu = Number(prompt('1.입력 2.출력 3.검색 4.수정 5.삭제 6.종료'));
		
		switch (menu) {
		case 1:
			m.addInfo();
			break;
		case 2:
			m.phoneList();
			break;
		case 3:
			m.searchPhone();
			break;
		case 4:
			m.updatePhone();
			break;
		case 5:
			m.deletePhone();
			break;
		case 6:
			alert("프로그램 종료");
			return;

		}
	}
}






