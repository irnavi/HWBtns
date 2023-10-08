
HTMLCollection.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };

const parent = document.querySelector('#root')

const btnChild = parent.children;


btnChild.myForEach((elem) => { 
     elem.style.background = 'red';

     elem.onclick = ()=> {
      btnChild.myForEach((elem) => { 
        elem.style.background = 'red';
               })
        elem.style.background = 'black';
     
    }
    
})
  
// btnChild.myForEach(elem => console.log(btnChild))



    HTMLCollection.prototype.myMap = function (callback) {
        const result = [];
        
       for (let i = 0; i < this.length; i++) {
          result.push(callback(this[i], i, this));
          
        }
      
         return result;
      };

// const res = btnChild.myMap(el => console.log(el))



HTMLCollection.prototype.myReduce = function (callback, initialValue) {
    let i = 0;
  
    if (!initialValue) {
      initialValue = this[0];
      i = 1;
    }
  
    for (; i < this.length; i++) {
      initialValue = callback(initialValue, this[i], i, this);
    }
  
    return initialValue;
  };

  

  HTMLCollection.prototype.myFilter = function(callback) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
      
      if(callback(this[i], i, this)){
        newArr.push(this[i])
      }
    }


    return newArr;
  }


