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
  numberOfTeams : Number | "" = "";
  teams : string[][] = [];


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


  onInputTeam(value: string) {
    this.numberOfTeams = Number(value);
  }

  generateTeams(){
    if(!this.numberOfTeams || this.numberOfTeams <=0){
      this.messageError = 'Verifiez le nombre de joueurs';
      return;
    }
    if(this.numberOfTeams > this.Players.length){
      this.messageError = 'Pas assez de joueurs';
      return;
    }
    this.messageError = '';

    const allPlayers = [...this.Players];

    while(allPlayers.length){
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allPlayers.length);
        const player = allPlayers.splice(randomIndex,1)[0];

        if(!player)break;
  
        if(this.teams[i]){
          this.teams[i].push(player);
        }else{
          this.teams[i] = [player];
        }
  
      }
    }
    console.log(this.teams);
    this.numberOfTeams = "";
    this.Players = [];
  }

  }

