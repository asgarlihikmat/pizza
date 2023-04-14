
function ShoppingCart(params) {
    return(
        <div>
        <button
          className="btn btn-warning"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          Корзина: 0
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">
              Корзина : 0
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">...</div>
        </div>
        </div>
    )
}

export default ShoppingCart;