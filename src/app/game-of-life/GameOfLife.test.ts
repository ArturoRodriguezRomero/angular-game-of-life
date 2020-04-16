import { GameOfLife } from './GameOfLife';
import { stringToGameState, gameToString } from './GameOfLifeParser';

describe('GameOfLife', () => {
  describe('Still Lifes', () => {
    it('Block', () => {
      const block = ['····', '·**·', '·**·', '····'];

      const game = GameOfLife.new(4, 4, stringToGameState(...block));
      game.tick();

      expect(gameToString(game)).toEqual(block);
    });

    it('Bee-hive', () => {
      const beeHive = ['······', '··**··', '·*··*·', '··**··', '······'];

      const game = GameOfLife.new(6, 5, stringToGameState(...beeHive));
      game.tick();

      expect(gameToString(game)).toEqual(beeHive);
    });

    it('Loaf', () => {
      const loaf = ['······', '··**··', '·*··*·', '··**··', '······'];

      const game = GameOfLife.new(6, 5, stringToGameState(...loaf));
      game.tick();

      expect(gameToString(game)).toEqual(loaf);
    });

    it('Boat', () => {
      const boat = ['·····', '·**··', '·*·*·', '··*··', '·····'];

      const game = GameOfLife.new(5, 5, stringToGameState(...boat));
      game.tick();

      expect(gameToString(game)).toEqual(boat);
    });

    it('Tub', () => {
      const tub = ['·····', '··*··', '·*·*·', '··*··', '·····'];

      const game = GameOfLife.new(5, 5, stringToGameState(...tub));
      game.tick();

      expect(gameToString(game)).toEqual(tub);
    });
  });

  describe('Oscilators', () => {
    it('Blinker', () => {
      const blinker = ['·····', '·····', '·***·', '·····', '·····'];

      const game = GameOfLife.new(5, 5, stringToGameState(...blinker));
      game.tick();

      expect(gameToString(game)).toEqual([
        '·····',
        '··*··',
        '··*··',
        '··*··',
        '·····',
      ]);
    });

    it('Toad', () => {
      const toad = ['······', '······', '··***·', '·***··', '······', '······'];

      const game = GameOfLife.new(6, 6, stringToGameState(...toad));
      game.tick();

      expect(gameToString(game)).toEqual([
        '······',
        '···*··',
        '·*··*·',
        '·*··*·',
        '··*···',
        '······',
      ]);
    });

    it('Beacon', () => {
      const toad = ['······', '·**···', '·*····', '····*·', '···**·', '······'];

      const game = GameOfLife.new(6, 6, stringToGameState(...toad));
      game.tick();

      expect(gameToString(game)).toEqual([
        '······',
        '·**···',
        '·**···',
        '···**·',
        '···**·',
        '······',
      ]);
    });
  });

  describe('Spaceships', () => {
    it('Glider', () => {
      const toad = [
        '··········',
        '·····*····',
        '···*·*····',
        '····**····',
        '··········',
      ];

      const game = GameOfLife.new(10, 5, stringToGameState(...toad));

      game.tick();
      expect(gameToString(game)).toEqual([
        '··········',
        '····*·····',
        '·····**···',
        '····**····',
        '··········',
      ]);

      game.tick();
      expect(gameToString(game)).toEqual([
        '··········',
        '·····*····',
        '······*···',
        '····***···',
        '··········',
      ]);

      game.tick();
      expect(gameToString(game)).toEqual([
        '··········',
        '··········',
        '····*·*···',
        '·····**···',
        '·····*····',
      ]);
    });
  });
});
