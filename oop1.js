var person = {
    ho : 'Ho',
    ten : 'Quyen',
    chaomung : function () {
        console.log('chao ban ' + this.ho + ' ' + this.ten);
    }
}

person.chaomung();

console.log(person['ten']);
