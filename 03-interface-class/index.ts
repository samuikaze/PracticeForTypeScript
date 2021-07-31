enum Gender { MALE, FEMALE, OTHER };

interface UserInfo {
  id: number;
  name: string;

  birth: Date;
  interests: string[];

  gender: Gender;

  address: {
    country: string;
    city: string;
    postalCode: string;
  }

  logInfo(message: string): void;
}

interface UpdateRecord {
  (id: number, newRecord: UserInfo): void;
}

let person: UserInfo = {
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

  logInfo: (message: string): void => {
    console.log(message);
  }
}

person.logInfo(JSON.stringify(person));
