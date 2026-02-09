// Node.js 示例程序

// 1. 简单的 Hello World
console.log('Hello, World!');

// 2. 使用内置模块
const fs = require('fs');

// 读取当前文件内容
fs.readFile(__filename, 'utf-8', (err, data) => {
    if (err) {
        console.error('读取文件出错:', err);
        return;
    }
    console.log('\n--- 文件内容 ---');
    console.log(data);
});

// 3. 使用 ES6+ 语法
const greet = (name = 'World') => {
    return `Hello, ${name}!`;
};

console.log('\n' + greet('Node.js'));

// 4. 导出模块（供其他文件使用）
module.exports = {
    greet
};

// 运行方式：node test.js
