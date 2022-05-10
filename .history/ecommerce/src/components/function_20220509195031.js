<article
  key={this.props.generateKey(new Date().getMilliseconds())}
  className="mini-cart-product-margin flex-container flex-space-between"
>
  <Column>
    <h3 className="mini-cart-product-heading">
      <span>{product.brand}</span>
      <span>{product.name}</span>
    </h3>
    <div className="product-price-value">
      <span>{product.prices[selectedCurrencyIndex].currency.symbol}</span>
      <span>{product.prices[selectedCurrencyIndex].amount}</span>
    </div>
    <div className="attributes-container" key={index}>
      {product.attributes.map((item, index) => {
        let getId = item.id;
        return [
          <h2
            key={this.props.generateKey(Math.random() * 100) + item.id}
            className="total heading"
          >
            {item.name + ":"}
          </h2>,
          <div className="flex btn-container" key={index}>
            {item.type !== "swatch"
              ? item.items.map((item, index) => {
                  return (
                    <div
                      key={index + item.id + new Date().getMilliseconds()}
                      className={`attribute-box flex flex-center btn-font-style  ${
                        !this.props.keepButtonActive(
                          getId,
                          item.id,
                          product.selectedattributes
                        )
                          ? "btn-disabled"
                          : ""
                      }`}
                    >
                      {item.value}
                    </div>
                  );
                })
              : item.items.map((item, index) => {
                  return (
                    <div
                      key={index + item.id + new Date().getMilliseconds()}
                      className={`counter-box  flex flex-center ${
                        this.props.keepButtonActive(
                          getId,
                          item.id,
                          product.selectedattributes
                        )
                          ? "activeSwatchButton"
                          : ""
                      }`}
                      style={{
                        background: item.value,
                        borderColor: item.value,
                      }}
                    >
                      {console.log(index + getId + item.id)}
                    </div>
                  );
                })}
          </div>,
        ];
      })}
    </div>
  </Column>
  <div className="flex-container">
    <div className="counter-container">
      <div
        className="counter-box flex-container"
        onClick={() => this.props.onIncrement(product)}
      >
        <img src={plusSign} alt="counter-sign-part-2" className="plus-sign" />
        <img src={minsSign} alt="counter-sign-part1" />
      </div>
      <div>{product.counter}</div>
      <div
        className="counter-box flex-container"
        onClick={() => this.props.onDecrement(product)}
      >
        {" "}
        <img src={minsSign} className="minus-sign" alt="counter-sign-part1" />
      </div>
    </div>
    <img
      src={product.gallery[0]}
      alt="product-item"
      className="product-image"
    />
  </div>
</article>;
