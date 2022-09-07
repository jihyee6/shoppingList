class Counter{
    constructor() {
        this.counter = 0;
    }

    increase(run5Times){ //class 안에 함수 생성할때 function 사용 안해도 됨 //run5Times는 콜백함수
        this.counter++;
        if(this.counter % 5 === 0){
            run5Times();
        }
    }
}

const coolConter = new Counter();
function printSomeThing(){
    console.log('yo');
}
coolConter.increase(printSomeThing());