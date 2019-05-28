import {CommandRegistry} from "@phosphor/commands";
import {DockPanel} from "@phosphor/widgets";
import {DataLoader, PerspectiveDataLoader} from "phosphor-perspective-utils/data";
import {APIS} from "./define";
import {ITab} from "./utils";

export
function buildStrategiesTab(commands: CommandRegistry): ITab {
  const strategies = new DockPanel();
  strategies.id = "strategies";
  strategies.title.label = "Strategies";

  const stratsList = new PerspectiveDataLoader("Strategies");
  strategies.addWidget(stratsList);
  const stratsLoader = new DataLoader([stratsList], APIS.STRATEGIES);

  const backtest = new DockPanel();
  backtest.title.label = "Backtest";
  strategies.addWidget(backtest);

  return {tab: strategies, loaders: [stratsLoader], perspectives: [stratsList], menus: []};
}
