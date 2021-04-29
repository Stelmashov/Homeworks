class Hex {
	constructor(num) {
		this.number = num
	}

	equals() {
		return parseInt(this.number, 10);
	}

	toString() {
		return '0x' + this.number.toString(16).toUpperCase();
	}

	toJSON() {
		return '0x' + this.toString(16).toUpperCase();
	}

	valueOf() {
		return parseInt(this.number, 10);
	}

	plus(arg) {
		const hexSum = (this.equals(this.number) + arg);
		return new Hex(hexSum);
	}

	minus(arg) {
		const hexDif = (this.equals(this.number) - arg);
		return new Hex(hexDif);
	}

	parse(arg) {
		return parseInt(arg, 16);
	}
}
const FF = new Hex(255);
console.log(`${FF.number} + 1 = ${FF + 1}`); // == 256;
console.log(`${FF.number}.toString() = ${FF.toString()}`); // == "0xFF";
console.log(`${FF.number}.toJSON() = ${FF.toJSON()}`); // == "0xFF";
console.log(`${FF.number}.valueOf() = ${FF.valueOf()}`); // == 255;
console.log(`${FF.number}.minus(1).toString() = ${FF.minus(1).toString()}`); // == "0xFE";
console.log(`${FF.number}.minus(FF).valueOf() = ${FF.minus(FF).valueOf()}`); // == 0;
console.log(`${new Hex(10).number}.plus(5).toString() = ${new Hex(10).plus(5).toString()}`); // == "0xF";
console.log(`Hex.parse("FF") = ${FF.parse('FF')}`); // == 255;
console.log(`Hex.parse("0xFF") = ${FF.parse("0xFF")}`); // == 255;