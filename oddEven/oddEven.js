// create an array of number from 1 to 15
num = 15;
for (let i = 0; i <= num; i++ ) {
      if (i % 2 === 0) {
            const newH1 = document.createElement("h1");
            newH1.innerHTML = `${i} is an even number`;
            document.body.appendChild(newH1);
      }
      if (i % 2 !== 0) {
            const newH1 = document.createElement("h1");
            newH1.innerHTML = `${i} is an odd number`;
            document.body.appendChild(newH1);
      }
      
}
      
      

