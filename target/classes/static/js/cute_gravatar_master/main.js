
console.log("捏脸js");
/*标记变量roleA*/
var sexTag={"id":0};
var bodyTag={"id":1};
var faceTag={"id":1,"color":"#F4CDA7","x":0,"y":0};
var eyebrowTag={"id":29,"x":0,"y":0};
var glassTag={"id":0,"x":0,"y":0};
var bubbleTag={"id":0,"x":0,"y":0};
var hatTag={"id":0,"x":0,"y":0};
var featureTag={"id":0,"x":0,"y":0};
var backgroundTag={"id":29,"x":0,"y":0};
var clothTag={"id":1,"x":0,"y":0};
var eyeTag={"id":5,"x":0,"y":0};
var hobbyTag={"id":5,"x":0,"y":0};
var hairTag={"id":48,"color":"#F29600","x":0,"y":0};
var mouthTag={"id":12,"x":0,"y":0};
var expressTag={"id":0,"x":0,"y":0};
var noseTag={"id":0,"x":0,"y":0};
/*标记变量roleB*/
var sexTagB={"id":0};
var bodyTagB={"id":1};
var faceTagB={"id":1,"color":"#F4CDA7","x":0,"y":0};
var eyebrowTagB={"id":29,"x":0,"y":0};
var glassTagB={"id":0,"x":0,"y":0};
var bubbleTagB={"id":0,"x":0,"y":0};
var hatTagB={"id":0,"x":0,"y":0};
var featureTagB={"id":0,"x":0,"y":0};
var backgroundTagB={"id":29,"x":0,"y":0};
var clothTagB={"id":1,"x":0,"y":0};
var eyeTagB={"id":5,"x":0,"y":0};
var hobbyTagB={"id":5,"x":0,"y":0};
var hairTagB={"id":48,"color":"#F29600","x":0,"y":0};
var mouthTagB={"id":12,"x":0,"y":0};
var expressTagB={"id":0,"x":0,"y":0};
var noseTagB={"id":0,"x":0,"y":0};
//坐标数据
var svgWidth=640;
var svgHeight=640;
var winWidth=$(window).get(0).innerWidth;
var winHeight=$(window).get(0).innerHeight;
var minWidth=winWidth<winHeight?winWidth:winHeight;
//新建画布
var svg=d3.select("#contentDIV").append("svg")
.attr("xmlns","http://www.w3.org/2000/svg")
.attr("version","1.1")
.attr("id","contentSVG")
.attr("width",svgWidth)
.attr("height",svgHeight)
.attr("viewBox","0 0 "+svgWidth+" "+svgHeight)
.attr("xml:space","preserve");
var background2=svg.append("g").attr("id","background2");
var background3=svg.append("g").attr("id","background3");
var background=svg.append("g").attr("id","background");

var roleA=svg.append("g").attr("id","roleA");
var roleB=svg.append("g").attr("id","roleB");
/*roleA*/
var personSVG=roleA.append("g").attr("id","person");
var backHairSVG=personSVG.append("g").attr("id","backHairSVG");
var bodySVG=personSVG.append("g").attr("id","body");
var headSVG=personSVG.append("g").attr("id","head");
var hobby=roleA.append("g").attr("id","hobby");
var bubble=roleA.append("g").attr("id","bubble");
/*头部编辑*/
var backHair=backHairSVG.append("g").attr("id","backHair");
var middleHair=headSVG.append("g").attr("id","middleHair");
var face=headSVG.append("g").attr("id","face");
var facial =headSVG.append("g").attr("id","facial");
var eyebrow=facial.append("g").attr("id","eyebrow");
var mouth=facial.append("g").attr("id","mouth");
var eye=facial.append("g").attr("id","eye");
var nose=facial.append("g").attr("id","nose");
var express=headSVG.append("g").attr("id","express");
var feature=headSVG.append("g").attr("id","feature");
var frontHair=headSVG.append("g").attr("id","frontHair");
var express2=headSVG.append("g").attr("id","express2");
var glass=headSVG.append("g").attr("id","glass");
var hat=headSVG.append("g").attr("id","hat");

/*身体编辑*/
var body=bodySVG.append("g").attr("id","body");
var cloth=bodySVG.append("g").attr("id","cloth");

/*roleB*/
var personSVGB=roleB.append("g").attr("id","personB");
var backHairSVGB=personSVGB.append("g").attr("id","backHairSVGB");
var bodySVGB=personSVGB.append("g").attr("id","bodyB");
var headSVGB=personSVGB.append("g").attr("id","headB");
var hobbyB=roleB.append("g").attr("id","hobbyB");
var bubbleB=roleB.append("g").attr("id","bubbleB");
/*头部编辑*/
var backHairB=backHairSVGB.append("g").attr("id","backHairB");
var middleHairB=headSVGB.append("g").attr("id","middleHairB");
var faceB=headSVGB.append("g").attr("id","faceB");
var facialB=headSVGB.append("g").attr("id","facialB");
var eyebrowB=facialB.append("g").attr("id","eyebrowB");
var mouthB=facialB.append("g").attr("id","mouthB");
var eyeB=facialB.append("g").attr("id","eyeB");
var noseB=facialB.append("g").attr("id","noseB");
var expressB=headSVGB.append("g").attr("id","expressB");
var featureB=headSVGB.append("g").attr("id","featureB");
var frontHairB=headSVGB.append("g").attr("id","frontHairB");
var express2B=headSVGB.append("g").attr("id","express2B");
var glassB=headSVGB.append("g").attr("id","glassB");
var hatB=headSVGB.append("g").attr("id","hatB");

/*身体编辑*/
var bodyB=bodySVGB.append("g").attr("id","bodyB");
var clothB=bodySVGB.append("g").attr("id","clothB");
// hwq：改变这个即可改变初始化人物形象
var personTag1={
	"sexual":{"id":0},
	"hair":{"id":20008,"color":"#000","x":0,"y":0},
	"face":{"id":20000,"color":"#F4CDA7","x":0,"y":0},
	"mouth":{"id":7,"x":0,"y":0},
	"eye":{"id":20010,"x":0,"y":0},
	"eyebrow":{"id":1,"x":0,"y":0},
	"hat":{"id":0,"x":0,"y":0},
	"background":{"id":6,"x":0,"y":0},
	"hobby":{"id":34,"x":0,"y":0},
	"cloth":{"id":11,"x":0,"y":0},
	"bubble":{"id":0,"x":0,"y":0},
	"feature":{"id":0,"x":0,"y":0},
	"glass":{"id":0,"x":0,"y":0},
	"express":{"id":0,"x":0,"y":0},
	"nose":{"id":0,"x":0,"y":0}
}
var xiaoXin={
	"sexual":{"id":0},
	"hair":{"id":44,"color":"#000","x":0,"y":0},
	"face":{"id":20002,"color":"#edbf9d","x":0,"y":0},
	"mouth":{"id":97,"x":0,"y":0},
	"eye":{"id":7,"x":0,"y":0},
	"eyebrow":{"id":25,"x":0,"y":0},
	"hat":{"id":0,"x":0,"y":0},
	"background":{"id":19,"x":0,"y":0},
	"hobby":{"id":20000,"x":0,"y":0},
	"cloth":{"id":29,"x":0,"y":0},
	"bubble":{"id":0,"x":0,"y":0},
	"feature":{"id":0,"x":0,"y":0},
	"glass":{"id":0,"x":0,"y":0},
	"express":{"id":0,"x":0,"y":0},
	"nose":{"id":0,"x":0,"y":0}
}
// 用这个记录服务端的用户历史虚拟人物形象，上传也用这个变量
var changePerson = xiaoXin;
// initHeadEdit(personTag1);
function initHeadEdit(personTag1){

	var person1Tag;
	if(typeof personTag1=="string"){
		person1Tag = eval("(" + personTag1 + ")");
	}else{
		person1Tag=personTag1;
	}
	// console.log(personTag1);
	// console.log(person1Tag);
	recordTag(person1Tag);
	// recordTag(xiaoXin);
	//人物初始化
	personInitA();
	// personSelect();
	//屏幕最大化
	// resizeSVG();
	// $(window).resize(function(){
	// 	d3.select("#contentSVG").attr("width",$(window).get(0).innerWidth)
	// 		.attr("height",$(window).get(0).innerHeight);
	// });
	// setTimeout(resizeSVG,30);
}
function personSelect(){
	$("#roleA").on("click",function(){
		alert("AAAAAA");
	});
}


function partTranslate(part,x,y){
	window[part].attr("transform","translate("+x+","+y+")");
}
//人物初始化
function personInitA() {
	console.log("进入main.js人物初始化：personInitA()");
	bodyChange(1);
	hairChange(hairTag.id);
	mouthChange(mouthTag.id);
	eyeChange(eyeTag.id);
	eyebrowChange(eyebrowTag.id);
	noseChange(noseTag.id);
	expressChange(expressTag.id);
	faceChange(faceTag.id);
	hatChange(hatTag.id);
	backgroundChange(backgroundTag.id);
	hobbyChange(hobbyTag.id);
	clothChange(clothTag.id);
	bubbleChange(bubbleTag.id);
	featureChange(featureTag.id);
	glassChange(glassTag.id);
}

function recordTag(person1Tag,person2Tag){
	console.log("进入main.js记录函数：recordTag()");
	sexTag.id=person1Tag.sexual.id;
	hairTag.id=person1Tag.hair.id;
	hairTag.color=person1Tag.hair.color;
	faceTag.id=person1Tag.face.id;
	faceTag.color=person1Tag.face.color;
	mouthTag.id=person1Tag.mouth.id;
	eyeTag.id=person1Tag.eye.id;
	eyebrowTag.id=person1Tag.eyebrow.id;
	hatTag.id=person1Tag.hat.id;
	backgroundTag.id=person1Tag.background.id;
	hobbyTag.id=person1Tag.hobby.id;
	clothTag.id=person1Tag.cloth.id;
	bubbleTag.id=person1Tag.bubble.id;
	featureTag.id=person1Tag.feature.id;
	glassTag.id=person1Tag.glass.id;
	expressTag.id=person1Tag.express.id;
	noseTag.id=person1Tag.nose.id;
}
//hwq：屏幕自适应
function resizeSVG() {
	// d3.select("#contentSVG").attr("width",$(window).get(0).innerWidth)
	// 	.attr("height",$(window).get(0).innerHeight);
	d3.select("#contentSVG").attr("width",$(window).get(0).innerWidth)
	.attr("height",$(window).get(0).innerHeight/2);
}
function bubbleEdit(inputString){
	var bubbleTextArray=inputString.split("&el&");
	d3.selectAll(".bubbleEditText").style("white-space","pre").text("");
	for(var i=0;i<bubbleTextArray.length;i++){
		$("#bubbleEditText"+i).text(bubbleTextArray[i]);
	}
	if(bubbleTextArray.length==1){
		d3.select("#bubbleEditText0").attr("y",150);
	}
	if(bubbleTextArray.length==2){
		d3.select("#bubbleEditText0").attr("y",120);
		d3.select("#bubbleEditText1").attr("y",180);
	}
	if(bubbleTextArray.length==3){
		d3.select("#bubbleEditText0").attr("y",80);
		d3.select("#bubbleEditText1").attr("y",140);
		d3.select("#bubbleEditText2").attr("y",200);
	}
}

<!-- hwq：修改形象尺寸 -->
resizeSVG();
// d3.select("#contentSVG").attr("width",480)
// 		.attr("height",480);
// hwq：这里注释了初始化函数，需要在控制器中
// initHeadEdit(personTag1);
var dcMap = [["发型", "hair", "0 0 640, 700"], 
["发色", "hairColor", ["#282828", "#340002", "#000", "#3f3432", "#be7019", "#a2352f", "#8e4f0c", "#415200", "#33836d", "#337583", "#96529c", "#f5c73c", "#ffe374", "#fff", "#3e7e4e", "#68b82e", "#bfd000", "#b386b8", "#5bbfe4", "#b9f0ef", "#ee7119", "#fa9595", "#ff6057", "#ea5f46", "#ef4324"]],
["脸型", "face", "0 0 640 640"],
["肤色", "faceColor", ["#fffaf6", "#fff6ef", "#ffefdf", "#ffeacb", "#ffe2c0", "#efdcb7", "#ffd5bc", "#edbf9d", "#e2ae86", "#d29e79", "#c68f70", "#b8866d", "#a97f69", "#a65a4a", "#8f7044", "#846a37", "#7e7258", "#554a34", "#ffe4dd", "#ffd9d0", "#fed1ce"]],
["眉毛", "eyebrow", "70 70 500 500"],
["眼睛", "eye", "70 90 500 500"],
["嘴巴", "mouth", "120 220 400 400"],
["鼻子", "nose", "200 270 240 240"],
["特征", "feature", "70 120 500 500"],
["眼镜", "glass", "70 90 500 500"],
["衣服", "cloth", "170 340 300 300"],
["帽子", "hat", "0 0 640 640"],
["爱好", "hobby", "0 0 640 640"],
["背景", "background", "0 0 640 640"],
["表情", "express", "0 0 640 640"],
["气泡", "bubble", "0 0 640 640"],

];
var templete = "<div class=\"category\">${title}</div>";
var categoryDiv = $("#categoryDiv");
for (var i = 0; i < dcMap.length; i++) {
	var category = $(templete.replace("${title}", dcMap[i][0]));
	!function(arg){
		category.click(function(){
			selectCategory(dcMap[arg], $(this));
		})
	}(i);
	categoryDiv.append(category);
};
selectCategory(dcMap[dcMap.length - 1], categoryDiv.first());
function selectCategory(id, sender){
	$(".category.select").removeClass("select");
	sender.addClass("select");
	$("#pickerDiv").html("");
	if (window[id[1] + "Data"]) {
		var data = window[id[1] + "Data"];
		for (var key in data) {
			var val = data[key];
			var frontSide = data[key].frontSide;
			var cell = d3.select("#pickerDiv").append("div")
			.attr("class","picker")
			.attr("id",key);
			var cellSvg=cell.append("svg")
			.attr("xmlns","http://www.w3.org/2000/svg")
			.attr("version","1.1")
			.attr("width",$(window).get(0).innerWidth/4)
			.attr("height",$(window).get(0).innerWidth/5)
			.attr("viewBox",id[2])
			.attr("xml:space","preserve");
			var eleList = ["backPath", "middlePath", "frontPath", "path"];
			for (var index in eleList) {
				var path = frontSide[eleList[index]];
				if (path) {
					for (var i=0; i<path.length; i++) {
						var d = path[i];
						var node=cellSvg;
						var pathContent=node.append(d.type?d.type:"path").attr("d",d.path);
						d.style.forEach(function(css){
							if (css.attr === "text") {
								pathContent.html(css.val);
							} else if (css.val) {
								pathContent.attr(css.attr,css.val);
							}
						});
					}
				};
			};
			switch(id[1]) {
				case "face":
				cellSvg.selectAll(".faceColor").attr("fill","#F4CDA7");
				break;
			}
			!function(index) {
				$("#"+key).click(function(){
					window[id[1] + "Change"](index);
					$(".picker.select").removeClass("select");
					$(this).addClass("select");
				});
			}(key.substring(id[1] == "background"? 2: id[1].length));
		}
	} else {
		for (var i=0; i<id[2].length; i++){
			var color = id[2][i];
			var cell = $("<div></div>")
			.attr("class","picker")
			.css("background", color);
			$("#pickerDiv").append(cell);
			!function(arg) {
				cell.click(function(){
					window[id[1] + "Change"](arg);
					$(".picker.select").removeClass("select");
					$(this).addClass("select");
				});
			}(color);
		}
	}
	// $(window).get(0).innerWidth/4
	// d3.select(".hwq_w_h").attr("width",666)
	// 	.attr("height",666);
	
}	
<!-- hwq：底部配饰div自适应其高度 -->
$("#controlDiv").height($(window).get(0).innerHeight/2);
// $("#pickerDiv").height($(window).get(0).innerHeight/2-320);