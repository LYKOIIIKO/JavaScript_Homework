// const test = (a:number, b:string): string => {
// 	return a + b
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// test(4,'6');
/**
 *  Специальные типы данных:
 * any - не рекомендуется, обозначает любой тип. пропадает смысл TS
 * unknown - неизвестный тип
 */
//const arr: Array<number> = [1, 3, 'asd']; //<> это дженерики
//const arr: number[] = [1, 3, 'asd'];
var p = Promise.all([]);
/*const a1: MyType<Admin> = {
    name: {
        access:false,
        age: 44,
        name: 'Petya',
        setAccess: (a) => a1.name.access = a
    },
    age: 44,
    getName: () => a1.name
}*/
var a2 = {
    name: 'Alex',
    age: 22,
    getName: function () { return a2.name; }
};
var A = /** @class */ (function () {
    function A(name, age, surName) {
        this.name = name,
            this.age = age,
            this.surName = surName;
    }
    return A;
}());
/*const newA = new A();

newA.surName //доступно в подсказке только surName*/
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.getAll = function () {
        return this.age;
    };
    return B;
}(A));
var Season;
(function (Season) {
    Season["Winter"] = "\u0417\u0438\u043C\u0430";
    Season["Spring"] = "\u0412\u0435\u0441\u043D\u0430";
    Season["Summer"] = "\u041B\u0435\u0442\u043E";
    Season["Autumn"] = "\u041E\u0441\u0435\u043D\u044C";
})(Season || (Season = {}));
var obj = {
    a: 1
};
Object.freeze(obj); //запрещаем изменение свойств объекта
obj.a = 12;
var current = Season.Autumn;
console.log(current);
