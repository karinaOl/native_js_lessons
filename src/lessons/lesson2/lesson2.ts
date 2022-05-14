console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

function sum(arg: number) {

    return function (arg2: number) {
        return arg += arg2
    }
}
console.log("task 1");
console.log(sum(3)(6));

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

function makeCounter() {
    let count = 0;
    return function () {
        return ++count;
    }
}

console.log("task 2");
const counter = makeCounter();
//@ts-ignore
console.log(counter());
//@ts-ignore
console.log(counter());
const counter2 = makeCounter();
//@ts-ignore
console.log(counter2());
//@ts-ignore
console.log(counter());


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

function makeCounter2(arg: number) {
    let count = arg;
    return {
        increase() {
            return ++count;
        },
        decrease() {
            return --count;
        },
        reset() {
            return count = 0;
        },
        set(arg: number) {
            return count = arg;
        }
    }
}

console.log("task3")
let counter3 = makeCounter2(1);
//@ts-ignore
console.log(counter3.increase());
//@ts-ignore
console.log(counter3.decrease());
//@ts-ignore
console.log(counter3.reset());
//@ts-ignore
console.log(counter3.set(2));

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

function superSum(n: number) {
    if (n <= 0) return 0;
    if (n === 1) return (num: number) => num;

    let outerParams: number[] = [];

    function inner(...arg: number[]) {
        outerParams = [...outerParams, ...arg];
        if (outerParams.length >= n) {
            outerParams.length = n;
            return outerParams.reduce((acc, el) => acc + el);
        } else {
            return inner;
        }
    }

    return inner;
}

console.log("task 4");
//@ts-ignore
console.log(superSum(3)(2)(5)(3));
//@ts-ignore
console.log(superSum(3)(2)(5, 3));
//@ts-ignore
console.log(superSum(3)(2, 5, 3));
//@ts-ignore
console.log(superSum(3)(2, 5)(3));
//@ts-ignore
console.log(superSum(3)(2, 5)(3, 9));

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
//     Например:
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Сделайте три варианта решения:
//
//     С использованием цикла.
//     Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
//     С использованием формулы арифметической прогрессии.
//     Пример работы вашей функции:
//     function sumTo(n) { /*... ваш код ... */ }
// alert( sumTo(100) ); // 5050

function sumTo(n: number) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
       result += i
    }
    return result
}

function sumTo2(n: number) {
    // if(n === 1){
    //     return n
    // }else {
    //     return n + sumTo(n-1)
    // }
    return n === 1 ? n : n + sumTo(n-1);
}

function sumTo3(n: number) {
    return (n*(n+1))/2;
}

console.log("task 5.1")
console.log(sumTo(4));
console.log(sumTo2(4));
console.log(sumTo3(4));

// Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1.
// Факториал n обозначается как n!
// Определение факториала можно записать как:
//     n! = n * (n - 1) * (n - 2) * ...*1
// Примеры значений для разных n:
//     1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.
// alert( factorial(5) ); // 120
// P.S. Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6

function factorial(n: number): number {
    if(n === 1) {
        return n
    }else{
        return n * factorial(n-1);
    }
}
console.log("task 5.2")
console.log(factorial(5));

// Числа Фибоначчи
// Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2.
// То есть, следующее число получается как сумма двух предыдущих.
// Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

// Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.
// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

// Пример работы:
// function fib(n) { /* ваш код */ }
// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757

// P.S. Все запуски функций из примера выше должны работать быстро. Вызов fib(77) должен занимать не более доли секунды.

function fibRecursion(n: number): number {
    return n <= 1 ? n : fibRecursion(n - 1) + fibRecursion(n - 2);
}

console.log("task 5.3")
console.log(fibRecursion(3));

// Вывод односвязного списка
// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

// Напишите функцию printList(list), которая выводит элементы списка по одному.
// Сделайте два варианта решения: используя цикл и через рекурсию.
// Как лучше: с рекурсией или без?

function printList(list: any): any {
    let temp = list;
    while (temp) {
        console.log(temp.value);
        temp = temp.next;
    }
}

function printList2(list: any): any {
    console.log(list.value);
    if (list.next) {
        printList(list.next);
    }
}

console.log("task 5.4");
(printList(list));
(printList2(list));

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

const arr = [1, 2, [3, 4, [5, 6]]];

function flatten(arr: any[]) {
    const stack = [...arr];
    const result = [];
    while (stack.length) {
        const next = stack.pop();
        if (Array.isArray(next)) {
            stack.push(...next);
        } else {
            result.push(next);
        }
    }
    return result.reverse();
}

console.log("task 6");
console.log(flatten(arr));

// just a plug
export default () => {
};