import {SplitPanel, Widget} from "@phosphor/widgets";
// tslint:disable: no-namespace
// tslint:disable: max-classes-per-file
import "!!style-loader!css-loader!less-loader!../src/style/order_entry.less";

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
        let sp = new SplitPanel({orientation: "vertical"});
        sp.addWidget(new TradeChartPane());
        sp.addWidget(new OrderBookPane());
        this.addWidget(sp);

        let sp2 = new SplitPanel({orientation: "vertical"});
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

        let exchangeSelect = document.createElement("select");
        let exchangeSelectLabel = document.createElement("label");
        exchangeSelectLabel.textContent = "Exchange";

        let assetSelect = document.createElement("select");
        let assetSelectLabel = document.createElement("label");
        assetSelectLabel.textContent = "Asset";

        let orderTypeSelect = document.createElement("select");
        let orderTypeSelectLabel = document.createElement("label");
        orderTypeSelectLabel.textContent = "Order Type";

        let orderAdvancedTypeSelect = document.createElement("select");
        let orderAdvancedTypeSelectLabel = document.createElement("label");
        orderAdvancedTypeSelectLabel.textContent = "Advanced Options";

        let quantityInput = document.createElement("input");
        quantityInput.type = "number";
        let quantityInputLabel = document.createElement("label");
        quantityInputLabel.textContent = "Quantity";

        let priceInput = document.createElement("input");
        priceInput.type = "number";
        let priceInputLabel = document.createElement("label");
        priceInputLabel.textContent = "Price";


        let buyButton = document.createElement("button");
        buyButton.textContent = "BUY";
        let sellButton = document.createElement("button");
        sellButton.textContent = "SELL";

        let buttonDiv = document.createElement("div");
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
