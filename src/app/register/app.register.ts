import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './app.regstser.html',
  styleUrls: ['./app.regstser.scss']
})
export class Register {
  title = 'register page';

  regFields: Object = {
    newLogin: '',
    newPass: '',
    rePass: ''
  };



  log = function(e){

    localStorage.setItem(this.regFields.newLogin, this.regFields.newPass);

    for (let i in localStorage){

      console.dir(i);

    }

  }
  // console.log(regFields)
}
