import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { GameExamples } from 'src/app/game-of-life/GameExamples';
import { Cell } from 'src/app/game-of-life/GameOfLife';

@Component({
  selector: 'app-simple-game-of-life',
  templateUrl: './simple-game-of-life.component.html',
  styleUrls: ['./simple-game-of-life.component.css'],
})
export class SimpleGameOfLifeComponent {
  subscription: Subscription;
  examples = {
    Block: GameExamples.block(),
    'Bee Hive': GameExamples.beeHive(),
    Loaf: GameExamples.loaf(),
    Blinker: GameExamples.blinker(),
    Toad: GameExamples.toad(),
    Beacon: GameExamples.beacon(),
    Glider: GameExamples.glider(),
  };
  selected = 'Block';
  game = this.examples[this.selected];

  ngOnInit() {
    this.subscription = interval(200).subscribe((_) => this.game.tick());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onExampleChange() {
    this.game = this.examples[this.selected];
  }

  getWorldStyle() {
    return {
      gridTemplateColumns: `repeat(${this.game.dimensions.width}, auto)`,
    };
  }

  getCellClass(cell: Cell) {
    return {
      cell: true,
      dead: cell === Cell.Dead,
      alive: cell === Cell.Alive,
    };
  }
}
