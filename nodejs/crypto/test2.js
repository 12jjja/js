const {createHash} = await import('node:crypto');
let hash = createHash('sha256');
// hash.update("I love cupcakes");
// console.log(hash.digest('hex'));

hash.on('readable', () => {
  const data = hash.read();
  if(data){
    console.log(data.toString('hex'));
  }
});

hash.write("I love cupcakes");
hash.end();

