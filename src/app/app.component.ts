import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newPlayer = '';
  Players : string[] = [];
  messageError : string = '';
  

  onInput(Player: string) {
    this.newPlayer = Player;
  }

  addPlayer() 
  {
    if (this.newPlayer == '') 
    {
      this.messageError = 'Veuillez saisir un nom de joueur';
    }else 
    {
      this.Players.push(this.newPlayer);
      this.messageError = '';
      this.newPlayer = '';
    }
    
  }
}
