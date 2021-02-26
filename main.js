canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

images = ["Nasa_img_1.jpg","Nasa_img_2.jpg","Nasa_img_3.jpg","Nasa_img_4.jpg"];
random_no = Math.floor(Math.random()*4);
console.log(random_no);
rover_width = 100;
rover_height = 90;
rover_X = 10;
rover_Y = 10;
background_img = images[random_no] ;
console.log("Background image =" + background_img );
rover_img = "rover.png" ;

function add()
{
    background_img_tag = new Image();
    background_img_tag.onload = uploadBackground;
    background_img_tag.src = background_img;

    rover_img_tag = new Image();
    rover_img_tag.onload = uploadRover;
    rover_img_tag.src = rover_img;

}

function uploadBackground()
{
    ctx.drawImage(background_img_tag, 0, 0, canvas.width, canvas.height);
}

function uploadRover()
{
    ctx.drawImage(rover_img_tag, rover_X, rover_Y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keypress = e.keyCode;
    console.log(keypress);

    if(keypress == '38')
    {
        up();
        console.log("up");
    }

    if(keypress == '40')
    {
        down();
        console.log("down");
    }

    if(keypress == '37')
    {
        left();
        console.log("left");
    }

    if(keypress == '39')
    {
        right();
        console.log("right");
    }

}

function up()
{
    if(rover_Y >= 0)
    {
        rover_Y = rover_Y - 10;
        console.log("When up arrow is pressed, x =" + rover_X + ",y =" + rover_Y);
        uploadBackground();
        uploadRover();
    }
}

function down()
{
    if(rover_Y <= 500)
    {
        rover_Y = rover_Y + 10;
        console.log("When down arrow is press, x=" + rover_X + ", y =" + rover_Y);
        uploadBackground();
        uploadRover();
    }
}

function left()
{
    if(rover_X >= 0)
    {
        rover_X = rover_X - 10;
        console.log("When left arrow is pressed, x=" + rover_X + ", y = " + rover_Y);
        uploadBackground();
        uploadRover();
    }
}

function right()
{
    if(rover_X <= 700)
    {
        rover_X = rover_X + 10;
        console.log("When right arrow is pressed, x=" + rover_X + ", y =" + rover_Y);
        uploadBackground();
        uploadRover();
    }
}