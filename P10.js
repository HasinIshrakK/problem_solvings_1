// PingPong

const array = [];

const num = 20;

for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0)
        array.push("PingPong");
    else if (i % 3 === 0) {
        array.push("Ping");
    } else if (i % 5 === 0) {
        array.push("Pong");
    }
    else {
        array.push(i);
    };
};

console.log(array);