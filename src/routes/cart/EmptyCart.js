import React from "react";
import { Link } from "react-router-dom";
//components
import ResetLocation from "../../helpers/ResetLocation";

const EmptyCart = () => {
  return (
    <React.Fragment>
      <h3>Oh, hayır, sepetiniz boş</h3>
      <p>Görünüşe göre henüz sepetinize bir şey eklememişsiniz.</p>
      <Link to="/menu" className="active-button-style" onClick={ResetLocation}>
        Menüyü keşfedin
      </Link>
    </React.Fragment>
  );
};

export default EmptyCart;
