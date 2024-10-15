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
