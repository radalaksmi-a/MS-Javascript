//callback.ts

type Callback = (result: boolean) => void;


const isEven = (num: number, callback: Callback): void => {
  setTimeout(() => {
    if (num % 2 === 0) {
      callback(true);
    } else {
      callback(false);
    }
  }, 3000);
}


isEven(12, (result: boolean) => {
  console.log(result);
});


//async.ts


const isEven = (num: number): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (num % 2 === 0) {
          resolve(true);
        } else {
          reject(false);
        }
      }, 3000);
    });
  };
  
 
  (async () => {
    try {
      const result = await isEven(2); 
      console.log("Yay! it's even");
    } catch (error) {
     
      console.log("Meh! it's odd");
    }
  })();
  

  //promise.ts
  
const isEven = (num: number): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (num % 2 === 0) {
          resolve(true);
        } else {
          reject(false);
        }
      }, 3000);
    });
  };
  
  
  isEven(11)
    .then((result: boolean) => {
      console.log('Even', result);
    })
    .catch((error: boolean) => {
      console.log('Odd', error);
    });
  