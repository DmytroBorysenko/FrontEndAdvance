import { BgView } from "./bgView.jsx";
import { BgModel } from "./bgModel.jsx";
import { Ctrl } from "../mvc/Ctrl.jsx";
import { stateMachine } from "../stateMachine.jsx";

window.stateMachine = stateMachine;

export class BgCtrl extends Ctrl {
  constructor() {
    super(new BgModel(), new BgView());
    stateMachine.observe("onBegin", () => {
      this.model.setWinText("Game is started");
    });

    stateMachine.observe("onProgress", () => {
      console.log("Bg is in progress");
      this.model.setWinText("Game is progress");
    });
    stateMachine.observe("onFinish", () => {
      this.model.setWinText("Game is finish");
    });
  }
}
