process.stdin.on("data", (data) => {
  console.log("收到:", data.toString());
  process.exit(0);
});
