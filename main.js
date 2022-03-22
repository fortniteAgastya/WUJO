var canvas = new fabric.Canvas('myCanvas')
player_X = 20;
player_Y = 31;
block_width = 30;
block_height = 30;
var block_image = "";
var player_image = "";
function pu(){
    fabric.Image.fromURL("player.png", function(Img){
        player_image = Img;
        player_image.scaleToWidth(151);
        player_image.scaleToHeight(101);
        player_image.set({
            top:player_Y, left:player_X
        });
        canvas.add(player_image)
    });
}
function ni(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image = Img;
        block_image.scaleToWidth(block_width);
        block_image.scaleToHeight(block_height);
        block_image.set({
            top: player_Y, left:player_X
        });
        canvas.add(block_image)
    });
    }
    window.addEventListener("keydown", mykey);
    function mykey(e){
        kpre = e.keyCode;
        console.log(kpre);
        if(e.shiftkey  == true && kpre == '80')
        {
            console.log("p & shift pressed together");
            block_width = block_width+10;
            block_height = block_height+10;
            document.getElementById("cw").innerHTML=block_width;
            document.getElementById("ch").innerHTML=block_height;
        }
        if(e.shiftkey == true && kpre == '77'){
            console.log("m & shift pressed together");
            block_height = block_height-10;
            block_width = block_width-10;
            document.getElementById("cw").innerHTML=block_width;
            document.getElementById("ch").innerHTML=block_height;            
        }
        if(kpre == '37'){
            left();
            console.log("left");
        }
        if(kpre == '38'){
            up();
            console.log("up");
        }
        if(kpre == '39'){
            right();
            console.log("right");
        }
        if(kpre == '40'){
            down();
            console.log("down");
        }
        if(kpre = '87'){
            ni('wall.jpg')
            console.log("w");
        }
        if(kpre = '67'){
            ni('cloud.jpg');
            console.log("c");
        }
        if(kpre = '68'){
            ni('dark_green.png');
            console.log("d");
        }
        if(kpre = '71'){
            ni('ground.png');
            console.log('g');
        }
        if(kpre = '76'){
            ni('light_green.png');
            console.log('l');
        }
        if(kpre = '82'){
            ni('roof.jpg');
            console.log('r');
        }
        if(kpre = '84'){
            ni('trunk.jpg');
            console.log('t');
        }
        if(kpre = '85'){
            ni('unique.png');
            console.log('u')
        }
        if(kpre = '89'){
            ni('yellow_wall.png');
            console.log('y')
        }
}
function up(){
    if(player_Y>=0){
        player_Y=player_Y-block_height;
        console.log("height of block = "+block_height);
        console.log("X="+player_X+"Y="+player_Y);
        canvas.remove(player_image);
        pu();
    }
}
function down(){
    if(player_Y<=499){
        player_Y=player_Y+block_height;
        console.log("Height of block = "+block_height);
        console.log("X= "+player_X+",Y=" +player_Y);
        canvas.remove(player_image);
        pu();
    }
}
function left(){
    if(player_X>=0){
        player_X=player_X-block_width;
        console.log("Width= "+block_width);
        console.log("left X="+player_X+"y= "+player_Y);
        canvas.remove(player_image);
        pu();
    }
}
function right(){
    if(player_X<=849){
        player_X=player_X+block_width;
        console.log("Width= "+block_width);
        console.log("right X="+player_X+"y="+player_Y);
        canvas.remove(player_image);
        pu();
    }
}