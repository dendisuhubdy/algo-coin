// tslint:disable: no-namespace
// tslint:disable: max-classes-per-file
import "!!style-loader!css-loader!less-loader!../src/style/order_entry.less";
import {SplitPanel, Widget} from "@phosphor/widgets";

export
class BuySellPane extends Widget {
    constructor() {
        super({node: Private.buildBuySellNode()});
        this.node.style.backgroundColor = "cyan";
    }
}

export
class OrderBookPane extends Widget {
    constructor() {
        super({node: Private.buildNode()});
        this.node.style.backgroundColor = "magenta";
    }
}

export
class TradeChartPane extends Widget {
    constructor() {
        super({node: Private.buildNode()});
        this.node.style.backgroundColor = "green";
    }
}

export
class MyOrdersPane extends Widget {
    constructor() {
        super({node: Private.buildNode()});
        this.node.style.backgroundColor = "green";
    }
}

export
class OrderEntry extends SplitPanel {
    constructor() {
        super();
        const sp = new SplitPanel({orientation: "vertical"});
        sp.addWidget(new TradeChartPane());
        sp.addWidget(new OrderBookPane());
        this.addWidget(sp);

        const sp2 = new SplitPanel({orientation: "vertical"});
        sp2.addWidget(new BuySellPane());
        sp2.addWidget(new MyOrdersPane());
        this.addWidget(sp2);

    }
}

namespace Private {
    export
    function buildNode(): HTMLDivElement {
        const div = document.createElement("div");
        return div;
    }

    export
    function buildBuySellNode(): HTMLDivElement {
        const div = document.createElement("div");
        div.classList.add("order-entry");

        const exchangeSelect = document.createElement("select");
        const exchangeSelectLabel = document.createElement("label");
        exchangeSelectLabel.textContent = "Exchange";

        const assetSelect = document.createElement("select");
        const assetSelectLabel = document.createElement("label");
        assetSelectLabel.textContent = "Asset";

        const orderTypeSelect = document.createElement("select");
        const orderTypeSelectLabel = document.createElement("label");
        orderTypeSelectLabel.textContent = "Order Type";

        const orderAdvancedTypeSelect = document.createElement("select");
        const orderAdvancedTypeSelectLabel = document.createElement("label");
        orderAdvancedTypeSelectLabel.textContent = "Advanced Options";

        const quantityInput = document.createElement("input");
        quantityInput.type = "number";
        const quantityInputLabel = document.createElement("label");
        quantityInputLabel.textContent = "Quantity";

        const priceInput = document.createElement("input");
        priceInput.type = "number";
        const priceInputLabel = document.createElement("label");
        priceInputLabel.textContent = "Price";

        const buyButton = document.createElement("button");
        buyButton.textContent = "BUY";
        const sellButton = document.createElement("button");
        sellButton.textContent = "SELL";

        const buttonDiv = document.createElement("div");
        buttonDiv.appendChild(buyButton);
        buttonDiv.appendChild(sellButton);

        div.appendChild(exchangeSelectLabel);
        div.appendChild(exchangeSelect);
        div.appendChild(assetSelectLabel);
        div.appendChild(assetSelect);
        div.appendChild(orderTypeSelectLabel);
        div.appendChild(orderTypeSelect);
        div.appendChild(quantityInputLabel);
        div.appendChild(quantityInput);
        div.appendChild(priceInputLabel);
        div.appendChild(priceInput);
        div.appendChild(orderAdvancedTypeSelectLabel);
        div.appendChild(orderAdvancedTypeSelect);
        div.appendChild(buttonDiv);
        return div;
    }

}
