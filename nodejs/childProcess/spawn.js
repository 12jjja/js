import { exec, spawn, execSync } from "node:child_process";

let result = spawn("node", ["-e", "console.log(process.env)"], {
  env: {
    ...process.env,
    MY_ENV: "123",
  },
});
result.stdout.on("data", (data) => {
  console.log("成功", data.toString());
});

/**
 * ! 返回的是一个childProcess对象,没有error属性
 * 判断错误的方式有几种：判断close状态、on("error")监听和stderr.on("data")监听
 * */
result.on("close", (code) => {
  if (code !== 0) {
    console.log("程序执行失败");
    return;
  }
  console.log("执行完毕，退出码是：", code);
});

result.stderr.on("data", (data) => {
  console.log("程序执行失败", data.toString());
});

try {
  execSync('node -e "process.exit(1)"');
} catch (err) {
  console.log(err);
}