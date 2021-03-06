import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import { Message, Segment } from "semantic-ui-react";

import { GameStatus } from "@codenames/common";

import { IStore } from "../../stores/IStore";

interface IProps {
  store?: IStore;
}

@inject("store")
@observer
class GameHeader extends Component<IProps, {}> {
  private get store(): IStore {
    return this.props.store as IStore;
  }

  constructor(props: IProps) {
    super(props);
  }

  onBeSpyMaster = () => {
    this.store.chooseSpyMaster();
  };

  onLeaveGame = () => {
    this.store.leaveGame();
  };

  onReplayGame = () => {
    this.store.replayGame();
  };

  render() {
    return (
      <div>
        <Message as="h4" attached="top">
          Menu
          {this.store.game.status === GameStatus.Over && (
            <input
              type="button"
              value="Start New Game"
              style={{ float: "right" }}
              onClick={this.onReplayGame}
            />
          )}
          <input
            type="button"
            value="Leave Game"
            style={{ float: "right" }}
            onClick={this.onLeaveGame}
          />
        </Message>

        <Segment attached={true}>
          <div>Players: {this.store.game.players?.join(" , ")}</div>
          <div>
            Spy Masters: {this.store.game.spyMasters?.join(" & ")}
            <input
              type="button"
              value="Be Spy Master!"
              onClick={this.onBeSpyMaster}
              style={{ float: "right" }}
            />
          </div>
        </Segment>
      </div>
    );
  }
}

export default GameHeader;
