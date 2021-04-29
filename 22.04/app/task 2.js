class Dictionary {
	constructor() {
		this.dictionary = {}
	}

	newEntry(word, descr) {
		this.dictionary[word] = descr;
	}

	look(word) {
		if (this.dictionary[word]) {
			return this.dictionary[word];
		}
		return `Can't find entry for ${word}`;
	}
}

console.log('\nTask #2. Interactive Dictionary');

let d = new Dictionary();
d.newEntry("Apple", "A fruit that grows on trees");

console.log(d.look("Apple")); //A fruit that grows on trees
console.log(d.look("Banana")); //Can't find entry for Banana