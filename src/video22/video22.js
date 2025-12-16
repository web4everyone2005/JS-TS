let globalVar = 'I am a global variable';

function demoFunction() {   
    console.log(globalVar);
}

demoFunction();
console.log(globalVar);

function anotherFunction() {
    let localVar = 'I am a local variable';
    console.log(localVar);

    //block scope
    if (true) {
        let blockVar = 'I am a block-scoped variable';
        console.log(blockVar);
    }
}

anotherFunction();
