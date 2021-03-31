canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1_width = 100;
car1_height = 90;
car1_x = 10;
car1_y = 10;

car2_width = 100;
car2_height = 90;
car2_x = 10;
car2_y = 10;
randomnumber = Math.floor(Math.random()*4);
background_image = marsterraniaum;
marsterraniaum = "https://i.postimg.cc/bv5d35nK/racing.jpg"
car1_image = "https://i.postimg.cc/YqdnnNX1/car1.png";
function add() {
    background_image_tag = new Image();
    background_image_tag.onload = upload_backround;
    background_image_tag.src = background_image;

    car1_image_tag = new Image();
    car1_image_tag.onload = upload_car1;
    car1_image_tag.src = car1_image;

    car2_image_tag = new Image();
    car2_image_tag.onload = upload_car2;
    car2_image_tag.src = car1_image;
}
function upload_backround() {
    ctx.drawImage(background_image_tag,0,0, canvas.width,canvas.height);
}
function upload_car1() {
    ctx.drawImage(car1_image_tag,car1_x,car1_y,car1_width,car1_height);
}

function upload_car2() {
    ctx.drawImage(car2_image_tag,car2_x,car2_y,car2_width,car2_height);
}
canvas.addEventListener("keydown", my_keydown);
function my_keydown(e) 
{
    keypressed = e.keyCode;
    console.log(keypressed);
        if (keypressed == '38')
        {
            up();
            console.log("up");
        }

        if (keypressed == '40')
        {
            down();
            console.log("down");
        }

        if (keypressed == '37')
        {
            left();
            console.log("left");
        }

        if (keypressed == '39')
        {
            right();
            console.log("right");
        }
}
function up()
{
    if(car1_y >= 0)
    {
        car1_y = car1_y - 10;
        console.log("when up arrow is pressed = " + car1_x + "-" + car1_y);
        upload_backround();
        upload_car1();
    }
}

function down()
{
    if(car1_y <= 500)
    {
        car1_y = car1_y + 10;
        console.log("when down arrow is pressed = " + car1_x + "-" + car1_y);
        upload_backround();
        upload_car1();
    }
}

function left()
{
    if(rover_x >= 0)
    {
        car1_x = car1_x - 10;
        console.log("when left arrow is pressed = " + car1_x + "-" + car1_y);
        upload_backround();
        upload_car1();
    }
}

function right()
{
    if(car1_x <= 700)
    {
        car1_x = car1_x + 10;
        console.log("when right arrow is pressed = " + car1_x + "-" + car1_y);
        upload_backround();
        upload_car1();
    }
}


function up()
{
    if(car2_y >= 0)
    {
        car2_y = car2_y - 10;
        console.log("when up arrow is pressed = " + car2_x + "-" + car2_y);
        upload_backround();
        upload_car2();
    }
}

function down()
{
    if(car2_y <= 500)
    {
        car2_y = car2_y + 10;
        console.log("when down arrow is pressed = " + car2_x + "-" + car2_y);
        upload_backround();
        upload_car2();
    }
}

function left()
{
    if(rover_x >= 0)
    {
        car2_x = car2_x - 10;
        console.log("when left arrow is pressed = " + car2_x + "-" + car2_y);
        upload_backround();
        upload_car2();
    }
}

function right()
{
    if(car2_x <= 700)
    {
        car2_x = car2_x + 10;
        console.log("when right arrow is pressed = " + car2_x + "-" + car1_y);
        upload_backround();
        upload_car2();
    }
}