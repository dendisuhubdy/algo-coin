import {CommandRegistry} from "@phosphor/commands";
import {DockPanel} from "@phosphor/widgets";
import {DataLoader, PerspectiveDataLoader} from "phosphor-perspective-utils/data";
import {APIS} from "./define";
import {OrderEntry} from "./order_entry";
import {ITab} from "./utils";

export
function buildOrderEntryTab(commands: CommandRegistry): ITab {
  const oe = new DockPanel();
  oe.title.label = "Orders";

  const myOrdersList = new PerspectiveDataLoader("My Orders");
  oe.addWidget(myOrdersList);
  const myOrdersLoader = new DataLoader([myOrdersList], APIS.MYORDERS);

  const myTradesList = new PerspectiveDataLoader("My Trades");
  oe.addWidget(myTradesList);
  const myTradesLoader = new DataLoader([myTradesList], APIS.MYTRADES);

  const manual = new OrderEntry();
  manual.title.label = "Manual";
  oe.addWidget(manual);

  return {tab: oe, loaders: [myOrdersLoader, myTradesLoader], perspectives: [myOrdersList, myTradesList], menus: []};
}
