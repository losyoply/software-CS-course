var pen = document.getElementById("pen");
var eraser = document.getElementById("eraser");
var text = document.getElementById("text");
var color_choose = document.getElementById("color-choose");
var text_size = document.getElementById("text-size");
var circle = document.getElementById("circle");
var rect = document.getElementById("rect");
var triangle = document.getElementById("triangle");
var font_fami=document.getElementById("fami");
var font_size=document.getElementById("fontSize");
var textBox = document.getElementById("textBox");
var undo=document.getElementById("undo");
var redo=document.getElementById("redo");
var textFlag = false;
var textContent = ""
var cPushArray = new Array();
var cStep = -1;

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
var line_width =3;
canvas.style.cursor = "default"
let saveImage;
ctx.strokeStyle = "black"; // 設定勾勒圖形時用的顏色
ctx.lineJoin = "round"; // 指定兩條線連結處的屬性，這裡選擇用圓角
ctx.lineCap = "round"; // 指定每一條線末端的屬性，這裡選擇用圓角

let isDrawing = false; // 用來判斷是否正在畫圖
let lastX = 0; //用來設定畫筆的X座標
let lastY = 0; //用來設定畫筆的Y座標
function cPush() {
    cStep++;
    if (cStep < cPushArray.length) { cPushArray.length = cStep; }
    console.log(cStep+' '+canvas.toDataURL());
    cPushArray.push(canvas.toDataURL());
    console.log(cPushArray[cStep]);
    
}
var startx, starty, endx, endy;
const where = canvas.getBoundingClientRect();
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => { 
    console.log(e);
    if(pen.style.color=="yellow"||eraser.style.color=="yellow"||rect.style.color=='yellow'||circle.style.color=='yellow'||triangle.style.color=='yellow')
    {
        isDrawing = true;
       
    }
    lastX = e.offsetX;
    lastY = e.offsetY;
    ctx.lineWidth = text_size.value;
    ctx.strokeStyle = color_choose.value;
    if(rect.style.color=='yellow'||circle.style.color=='yellow'||triangle.style.color=='yellow')
    {
        startx=parseInt(e.clientX-where.left);
        starty=parseInt(e.clientY-where.top);
        saveImage = ctx.getImageData(0, 0, 600, 300);
    }
});
canvas.addEventListener("mouseup", () => {isDrawing = false;
    saveImage = ctx.getImageData(0, 0, 600, 300);
    if(pen.style.color=='yellow'||eraser.style.color=='yellow'||rect.style.color=='yellow'||circle.style.color=='yellow'||triangle.style.color=='yellow')
    {
        cPush();
    }
});
//canvas.addEventListener("mouseout", () => (isDrawing = false));

function draw(e) {
    if (!isDrawing) return; //如果不是在mousedown的時候，這個function不作用
    if(eraser.style.color=='yellow')
    {
        console.log("bonk");
        ctx.globalCompositeOperation = "destination-out";
        ctx.strokeStyle = "rgba(255,255,255,1)";
        console.log(e);
    ctx.beginPath() //產生一個新路徑，產生後再使用繪圖指令來設定路徑
    ctx.moveTo(lastX, lastY) //moveTo()不會畫任何圖形，但卻是上述路徑清單的一部分，這大概有點像是把筆從紙上一點提起來，然後放到另一個點。
    ctx.lineTo(e.offsetX, e.offsetY)//從目前繪圖點畫一條直線到指定的(x, y)座標點。
    ctx.stroke()//stroke() 會繪製出通過 moveTo() 和 lineTo() 方法定義的路径。默認颜色是黑色。
    lastX = e.offsetX; // 
    lastY = e.offsetY; //
    }
    else if(pen.style.color=='yellow')
    {
        ctx.globalCompositeOperation = "source-over";
        console.log(e);
    ctx.beginPath() //產生一個新路徑，產生後再使用繪圖指令來設定路徑
    ctx.moveTo(lastX, lastY) //moveTo()不會畫任何圖形，但卻是上述路徑清單的一部分，這大概有點像是把筆從紙上一點提起來，然後放到另一個點。
    ctx.lineTo(e.offsetX, e.offsetY)//從目前繪圖點畫一條直線到指定的(x, y)座標點。
    ctx.stroke()//stroke() 會繪製出通過 moveTo() 和 lineTo() 方法定義的路径。默認颜色是黑色。
    lastX = e.offsetX; // 
    lastY = e.offsetY; //
    }
    else if(rect.style.color=='yellow')
    {
        var xa;
        var xb;
        var ya;
        var yb;
        if (startx <= e.offsetX) xa = startx;
        else xa = e.offsetX;
        if (startx > e.offsetX) xb = startx;
        else xb = e.offsetX;
        if (starty <= e.offsetY) ya = starty;
        else ya = e.offsetY;
        if (starty > e.offsetY) yb = starty;
        else yb = e.offsetY;
        ctx.putImageData(saveImage, 0, 0);
        ctx.strokeRect(xa, ya, xb - xa, yb - ya);
    }
    else if(circle.style.color=='yellow')
    {
        ctx.putImageData(saveImage, 0, 0);
        var temp;
        temp = (e.offsetX - startx) / 2;
        var xr = Math.abs(temp);
        temp = (e.offsetY-starty)/2;
        var yr = Math.abs(temp);
        temp = (e.offsetX+startx) / 2;
        var cenx = Math.floor(temp);
        temp = (e.offsetY+starty)/2;
        var ceny = Math.floor(temp);
        ctx.beginPath();
        ctx.ellipse(cenx, ceny, xr, yr, 0, 0, Math.PI * 2);
        ctx.closePath();
        ctx.stroke();
    }
    else if(triangle.style.color=='yellow')
    {
        ctx.putImageData(saveImage, 0, 0);
        ctx.beginPath();
        ctx.moveTo(startx,starty);
        ctx.lineTo(startx,e.offsetY);
        ctx.lineTo(e.offsetX,(starty+e.offsetY)/2);
        ctx.closePath();
        ctx.stroke();
    }
}


//

pen.onclick = function() {
	if(pen.style.color=='yellow') 
    {
        pen.style.color = 'white';
        canvas.style.cursor = "default";
    }
    else 
    {
        pen.style.color = 'yellow';
        eraser.style.color = 'white';
        text.style.color = 'white';
        circle.style.color = 'white';
        rect.style.color = 'white';
        triangle.style.color = 'white';
        canvas.style.cursor = "url(pic/pencil.png),auto";
    }
    check_txtbox();
};
eraser.onclick = function() {
	if(eraser.style.color=='yellow') 
    {
        eraser.style.color = 'white';
        canvas.style.cursor = "default";
    }
    else 
    {
        pen.style.color = 'white';
        eraser.style.color = 'yellow';
        text.style.color = 'white';
        circle.style.color = 'white';
        rect.style.color = 'white';
        triangle.style.color = 'white';
        canvas.style.cursor = "url(pic/eraser.png),auto";
    }
    check_txtbox();
};
text.onclick = function() {
	if(text.style.color=='yellow')
    {
        text.style.color = 'white';
        canvas.style.cursor = "default";
    } 
    else 
    {
        pen.style.color = 'white';
        eraser.style.color = 'white';
        text.style.color = 'yellow';
        circle.style.color = 'white';
        rect.style.color = 'white';
        triangle.style.color = 'white';
        canvas.style.cursor = "text";
    }
    check_txtbox();
};

circle.onclick = ()=>{
    if(circle.style.color=='yellow')
    {
        circle.style.color = 'white';
        canvas.style.cursor = "default";
    } 
    else 
    {
        pen.style.color = 'white';
        eraser.style.color = 'white';
        text.style.color = 'white';
        circle.style.color = 'yellow';
        rect.style.color = 'white';
        triangle.style.color = 'white';
        canvas.style.cursor ="url(pic/circle.png),auto"
    }
    check_txtbox();
}
rect.onclick = ()=>{
    if(rect.style.color=='yellow')
    {
        rect.style.color = 'white';
        canvas.style.cursor = "default"
    } 
    else 
    {
        pen.style.color = 'white';
        eraser.style.color = 'white';
        text.style.color = 'white';
        circle.style.color = 'white';
        rect.style.color = 'yellow';
        triangle.style.color = 'white';
        canvas.style.cursor = "url(pic/rectangle.png),auto";
    }
    check_txtbox();
}
triangle.onclick = ()=>{
    if(triangle.style.color=='yellow')
    {
        triangle.style.color = 'white';
        canvas.style.cursor = "default";
    } 
    else 
    {
        pen.style.color = 'white';
        eraser.style.color = 'white';
        text.style.color = 'white';
        circle.style.color = 'white';
        rect.style.color = 'white';
        triangle.style.color = 'yellow';
        canvas.style.cursor = "url(pic/triangle.png),auto"
    }
    check_txtbox();
}

//download
function downloadImg() {
    var alink = document.createElement("a");
    var imgSrc = canvas.toDataURL("image/png");
    alink.href = imgSrc;
    alink.download = Date.now() + ".png";
    alink.click();
}
function Refresh()
{
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cPush();
    
}
function Upload(id){
    var inputObj = document.createElement('input');
    inputObj.addEventListener('change',readFile,false);
    inputObj.type = 'file';
    inputObj.accept = 'image/*';
    inputObj.id = id;
    inputObj.click();
}
function readFile(){
    var file = this.files[0];//获取input输入的图片
    //判断是否图片，在移动端由于浏览器对调用file类型处理不同，虽然加了accept = 'image/*'，但是还要再次判断
    var reader = new FileReader();
    reader.readAsDataURL(file);//转化成base64数据类型
    reader.onload = function(e){
        drawToCanvas(this.result);
    }
}
function drawToCanvas(imgData){

    var img = new Image;
    img.src = imgData;
    img.onload = function(){//必须onload之后再画
        ctx.drawImage(img,0,0,600,300);
    }
    cStep++;
    if (cStep < cPushArray.length) { cPushArray.length = cStep; }
    console.log(cStep+' '+imgData);
    cPushArray.push(imgData);
    console.log(cPushArray[cStep]);
   

}
function check_txtbox()
{
    if(text.style.color!='yellow')
    {    
        textBox.style.left = "-1000px";
        textBox.style.top = "-1000px";
        textBox.value = "";
        textBox.style.borderColor ="transparent";
    }
    textFlag=false;
}
canvas.onmousedown = function mouseDownAction(e) {
    if(text.style.color!='yellow')
    {    
        return;
    }
    this.X1 = e.offsetX;  // 鼠标按下时保存当前位置，为起始位置
    this.Y1 = e.offsetY;
    // 鼠标按下时需要一个标志位，因为我们的逻辑是按下时分别可调出和完成文字的填写。
    if (textFlag) {
        textContent = textBox.value;
        textFlag = false;
        textBox.style.borderColor ="transparent";
        textBox.value = "";
        this.drawing(this.X1, this.Y1);
        cPush();
    } else if (!textFlag) {
        textFlag = true

        textBox.style.height="80px";
        textBox.style.width="125px";
        textBox.style.borderColor ="blue";
        textBox.style.left = this.X1 + 'px';
        textBox.style.top = this.Y1 + 'px';
        
    }
};


canvas.drawing = function (x1, y1, x2, y2, e) {
    if (!ctx) {
        return;
    } else {
        // 设置画笔的颜色和大小
        ctx.fillStyle = color_choose.value;  
        
        ctx.font=font_size.value+"px "+font_fami.value;
        console.log(font_size.value+" "+font_fami.value);
        ctx.save();
        ctx.beginPath();

        // 写字
        ctx.fillText(textContent, parseInt(textBox.style.left), parseInt(textBox.style.top));
        console.log(textBox.style.top);
        ctx.restore();
        ctx.closePath();
    }
 
};
function cUndo() {
    ctx.globalCompositeOperation = "source-over";
    if (cStep > 0) {
        cStep--;
        var canvasPic = new Image();
        canvasPic.src = cPushArray[cStep];
        canvasPic.onload = function () { ctx.clearRect(0, 0, canvas.width, canvas.height);ctx.drawImage(canvasPic, 0, 0, 600, 300);  }
    }
}
function cRedo() {
    ctx.globalCompositeOperation = "source-over";
    if (cStep < cPushArray.length-1) {
        console.log(cStep);
        cStep++;
        var canvasPic = new Image();
        canvasPic.src = cPushArray[cStep];
        canvasPic.onload = function () {ctx.clearRect(0, 0, canvas.width, canvas.height); ctx.drawImage(canvasPic, 0, 0, 600, 300); }
    }
}
function fan(){
    var id=ctx.getImageData(0,0,600,300);
    var data = id.data;
    for(var i = 0;i<data.length;i+=4)
    {
        data[i]=255-data[i];
        data[i+1]=255-data[i];
        data[i+2]=255-data[i];
    }
    ctx.putImageData(id, 0, 0);
    cPush();
}
function rip(){
    var id=ctx.getImageData(0,0,600,300);
    var data = id.data;
    for(var i = 0;i<data.length;i+=4)
    {
        var a = (data[i]+data[i+1]+data[i+2])/3;
        data[i]=a;
        data[i+1]=a;
        data[i+2]=a;
    }
    
    ctx.putImageData(id, 0, 0);
    cPush();
}
function fugu(){
    var id=ctx.getImageData(0,0,600,300);
    var data = id.data;
    for(var i = 0;i<data.length;i+=4)
    {
        var r = data[i];
        var g=data[i+1];
        var b = data[i+2];
        data[i] = r*0.39+g*0.76+b*0.18;
        data[i+1]=r*0.35+g*0.68+b*0.16;
        data[i+2]=r*0.27+g*0.53+b*0.13;
    }
    
    ctx.putImageData(id, 0, 0);
    cPush();
}
cPush();