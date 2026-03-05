// number 类型代表整数和浮点数。
let num = 123;
let num2 = 123.2;

// 数字可以有很多操作，比如，乘法 *、除法 /、加法 +、减法 - 等等。
alert(num2 - num); // 输出:0.20000000000000284

// 除了常规的数字，还包括所谓的“特殊数值（“special numeric values”）”也属于这种类型：Infinity、-Infinity 和 NaN。
alert(Infinity); // Infinity
alert(1 / 0); // Infinity

alert("askljdalk" / 2); // 输出NaN
//  NaN比较动态,可以进行计算,但是结果都是NaN
alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN
// ⚠️只有一个例外,这里会输出1
alert(NaN ** 0); 

// 脚本永远不会因为一个致命的错误（“死亡”）而停止。最坏的情况下，我们会得到 NaN 的结果。