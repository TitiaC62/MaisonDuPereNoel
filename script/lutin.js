// neige qui tombe

const createSnowflake = () => {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.width = '10px';
    snowflake.style.height = '10px';
    snowflake.style.top = '-10px';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(snowflake);
    return snowflake;
 };

const moveSnowflake = (snowflake) => {
    const fallSpeed = 3 + Math.random() * 10;
    const initialPosition = -10;
    let position = initialPosition;

    const updatePosition = () => {
    position += fallSpeed;
    snowflake.style.top = position + 'px';
    if (position > window.innerHeight) {

    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    }
    };

    const animate = () => {
    updatePosition();
    requestAnimationFrame(animate);
    };

    animate();
};

const createSnowfall = () => {
    const isMobile = window.innerWidth <= 450; 

    if (!isMobile) {
    const NUM_SNOWFLAKES = 100;
    const snowflakes = [];

    for (let i = 0; i < NUM_SNOWFLAKES; i++) {
    const snowflake = createSnowflake();
    snowflakes.push(snowflake);
    moveSnowflake(snowflake);
    }

    const checkSnowflakes = () => {
    snowflakes.forEach((snowflake, index) => {
    const position = parseFloat(snowflake.style.top);
    if (position > window.innerHeight) {
    snowflake.remove();
    snowflakes[index] = createSnowflake();
    moveSnowflake(snowflakes[index]);
    }
    });
    requestAnimationFrame(checkSnowflakes);
    };

    checkSnowflakes();
    }
 };

 createSnowfall();


 //Cadeaux


 //Cadeau rose
 const lightPinkGift = document.getElementById("js-lightpink-gift")
 const purpleGift = document.getElementById("js-purple-gift")
 const pinkGift = document.getElementById("js-pink-gift")
 const greenGift = document.getElementById("js-green-gift")
 const blueGift = document.getElementById("js-blue-gift")

 OpenGift = () =>{
    lightPinkGift.style.display="none",
    purpleGift.style.display="none",
    pinkGift.style.display="none",
    greenGift.style.display="none",
    blueGift.style.display="none"

 }

 OpenGift()