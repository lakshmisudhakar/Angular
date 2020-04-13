export class Signup {
name: string;
lastname: string;
emai: string;
pasword: string;
languge: string;
  constructor(public firstName: string = '',
              public lastName: string = '',
              public email: string = '',
              public password: string = '',
              public language: string = '') {
                this.name = firstName;
                this.lastname = lastName;
                this.emai = email;
                this.pasword = password;
                this.languge = language;
  }
}
