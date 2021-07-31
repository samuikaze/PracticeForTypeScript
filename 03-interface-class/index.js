"use strict";
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["OTHER"] = 2] = "OTHER";
})(Gender || (Gender = {}));
;
var person = {
    id: 1,
    name: 'Maxwell',
    birth: new Date(1999, 1, 15),
    interests: ['Basketball'],
    gender: Gender.MALE,
    address: {
        country: 'TW',
        city: 'KH',
        postalCode: '806',
    },
    logInfo: function (message) {
        console.log(message);
    }
};
person.logInfo(JSON.stringify(person));
