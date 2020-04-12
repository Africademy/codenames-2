/**
 * The player details model.
 */
export interface IPlayer {
  socketId: string;
  name: string;
  gameId?: string;
  isSpyMaster: boolean;

  save(): void;
  delete(): void;

  joinGame(gameId: string): void;
  leaveGame(): void;

  makeSpyMaster(): void;
}
