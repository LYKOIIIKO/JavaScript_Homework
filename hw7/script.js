//Домашняя работа №7 - Объекты

/*
Задание: Используя полученные знания, реализуйте экземпляр любого объекта. Объект
должен иметь, как внутренние, так и доступные для пользователя, свойства и методы.
Примеры объектов:

 Калькулятор. Возможные методы: вкл/выкл калькулятора, получение выражения для
расчета или, а и б числа с операцией, вычисление выражения, показ результата расчета.
 Лампочка. Возможные методы: ввод информации о лампочке (мощность, стоимость
электроэнергии), вкл./выкл. лампочки, получение расхода за горение лампочки,
счетчик горения лампочки.
 Чайник. Возможные методы: ввод инф. о чайнике (мощность, объем, кол-во воды),
вкл./выкл., расчет времени закипания воды.
 Автомобиль. Возможные методы: ввод информации об авто (марка, номер), вкл./выкл.
двигателя, вкл./выкл. передачи (вперед, назад, нейтральная), движение вперед и назад
(ввод информации о скорости движения), расчет пройденных километров.
 Контакты. Возм. методы: добавление нового контакта (ввод ФИО, возраст, телефон, эл.
почта), проверка введенной информации, например: проверить возраст – должен быть
целым неотрицательным числом больше 18, вывод информации о конкретном контакте, вывод всех контактов.

Можно выдумать любой другой объект. Кол-во методов и свойств может быть любым, но не менее трех.
*/


//Калькулятор. Возможные методы: вкл/выкл калькулятора, получение выражения для расчета или, а и б числа с операцией, вычисление выражения, показ результата расчета.

//включение калькулятора происходит по кнопке на странице
let Calc = function() {
	this.expression = function () {
		this.formula = prompt('Введите выражение для расчета...');

		if(!this.formula) {
			this.get();
		} else {
			alert(`${this.formula} = ${eval(this.formula)}`);
		}
	};

	this.get = function() {
		this.a = +prompt('Введите число a');
		this.b = +prompt('Введите число b');
		this.oper = prompt('Введите операцию: +, -, *, /');

		this.operation();
	};

	this.operation = function() {
		switch(this.oper) {
			case '+':
				this.result = this.a + this.b;
			break;
			case '-':
				this.resulr = this.a - this.b;
			break;
			case '*':
				this.result = this.a * this.b;
			break;
			case '/':
				this.result = this.a / this.b;
			break;
			default: this.result = 0;
		}

		this.show();
	};

	this.show = function() {
		alert(this.a + ' ' + this.oper + ' ' + this.b + ' = ' + this.result);
	};
};

let calc = new Calc();

//Чайник. Возможные методы: ввод инф. о чайнике (мощность, объем, кол-во воды), вкл./выкл., расчет времени закипания воды.

let Kettle = function() {
	this.turnOn = function () {
		this.info();
	};

	this.info = function() {
		this.power = prompt('Введите мощность чайника, Вт.');
		this.volume = prompt('Введите объем чайника, л.');
		this.waterVolume = prompt('Введите количество воды в чайнике, л.');

		this.power = this.power || 1700;
		this.volume = this.volume || 1.8;
		this.waterVolume = this.waterVolume || 1.8;

		if(this.waterVolume > this.volume) {
			alert('Вы не можете налить воды больше чем объем чайника!')
		} else {
			this.result();
		}
	};

	this.result = function() {
		this.waterCurrentTempC = 25;
		this.waterRequiredTempC = 100;
		this.heatCapacityWater = 4183;
		
		this.timeBoiling = this.heatCapacityWater * this.waterVolume * ((this.waterRequiredTempC + 273.15) - (this.waterCurrentTempC + 273.15)) / this.power;

		alert(`Время закипания ${this.waterVolume} л воды в чайнике мощностью ${this.power} Вт и объемом ${this.volume} л, равно ${Math.round(this.timeBoiling)} сек.`)
	};
};

let kettle = new Kettle();