function sleep(ms){
return new Promise((res,rej) => {
    setTimeout(res,ms);
    console.log("hmm")
  });
}

async function process()
{
  console.log('Hello!');
  await sleep(2000);
  console.log('Bye.');
}


