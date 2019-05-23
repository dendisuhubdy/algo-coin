import {CommandRegistry} from "@phosphor/commands";
import {DockPanel, MenuBar, Menu, Panel} from "@phosphor/widgets";
import {DataLoader, PerspectiveDataLoader} from "phosphor-perspective-utils/data";
import {COMMAND_ICONS, COMMANDS} from "./define";
import {ITab} from "./utils";

export
function buildMarketDataTab(commands: CommandRegistry): ITab {
  const marketDataContainer = new Panel();
  marketDataContainer.title.label = "Data";
  marketDataContainer.addClass("marketdata-container");

  let bar = new MenuBar();
  const marketData = new DockPanel();

  const liveMenu = new Menu({commands});
  liveMenu.title.label = "Live";

  const trades = new PerspectiveDataLoader("Trades");
  trades.title.closable = true;

  const bidask = new PerspectiveDataLoader("Orders");
  bidask.title.closable = true;

  const dataLoader = new DataLoader([trades], "/api/json/v1/messages", {pair: "BTCUSD", type: "TRADE"});
  const bidLoader = new DataLoader([bidask], "/api/json/v1/orders", {pair: "BTCUSD", type: "CHANGE"});

  commands.addCommand(COMMANDS.LIVEDATA_TRADES, {
    execute: () => {
      marketData.addWidget(trades);
      marketData.selectWidget(trades);
    },
    iconClass: COMMAND_ICONS.LIVEDATA_TRADES,
    label: "Trades",
    mnemonic: 2,
  });
  liveMenu.addItem({ command: COMMANDS.LIVEDATA_TRADES});

  commands.addCommand(COMMANDS.LIVEDATA_ORDERBOOK, {
    execute: () => {
      marketData.addWidget(bidask);
      marketData.selectWidget(bidask);
    },
    iconClass: COMMAND_ICONS.LIVEDATA_ORDERBOOK,
    label: "Order Book",
    mnemonic: 2,
  });
  liveMenu.addItem({ command: COMMANDS.LIVEDATA_ORDERBOOK});

  const historicalMenu = new Menu({commands});
  historicalMenu.title.label = "Historical";

  bar.addMenu(liveMenu);
  bar.addMenu(historicalMenu);
  marketDataContainer.addWidget(bar);
  marketDataContainer.addWidget(marketData);

  return {tab: marketDataContainer, loaders: [dataLoader, bidLoader], perspectives: [trades, bidask], menus: []};
}
