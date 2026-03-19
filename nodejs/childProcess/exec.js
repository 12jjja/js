/**
 *  * 相当于一个运行shell的模块
 */
import { exec, spawn } from "node:child_process";
exec('node -e "console.log(1 + 2)"', (err, stdout, stderr) => {
  if (err) {
    console.error("指令执行出错", err);
    return;
  }
  if (stderr) {
    console.error("程序执行出错", stderr);
    return;
  }
  console.log(stdout);
});