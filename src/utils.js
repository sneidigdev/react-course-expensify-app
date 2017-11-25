console.log('utils.js');

export const square = () => {
  console.log('square called'); 
  return 4*4;
};

const add = () => {
  console.log('add called'); 
  return 4+4;
};

export default add;

class Person {
  constructor(name) {
    this.name = name;
  }
}

class FamilyMember extends Person {
  constructor(name, familyName) {
    super(name);
    this.familyName = familyName;
  }

  getInfo() {
    return this.name + ' has family name ' + this.familyName;
  }
}

class SocialMember extends FamilyMember {
  constructor(name, familyName, socialName) {
    super(name, familyName);
    this.socialName = socialName;
  }

  getSocialInfo() {
    console.log(this.getInfo() + ' that belongs to social club ' + this.socialName);
  }
}

const shawn = new SocialMember('Shawn', 'Neidig', 'UPJ Hockey!');
shawn.getSocialInfo();