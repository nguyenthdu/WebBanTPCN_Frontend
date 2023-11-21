import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function CustomTab({ productData }) {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="MoTa" title="Mô tả">
        {productData.description ? (
          <div className="custom-row d-flex description p-3">
            <h5 className="title">Mô tả sản phẩm: </h5>
            <h5 className="txt-description">{productData.description}</h5>
          </div>
        ) : null}
        {productData.ingredients ? (
          <div className="custom-row d-flex c-brand p-3">
            <h5 className="title">Thành phần: </h5>
            <h5 className="txt-brand">{productData.ingredients}</h5>
          </div>
        ) : null}
        {productData.dosageForm ? (
          <div className="custom-row d-flex c-brand p-3">
            <h5 className="title">Dạng thuốc: </h5>
            <h5 className="txt-brand">{productData.dosageForm}</h5>
          </div>
        ) : null}
        {productData.packingWay ? (
          <div className="custom-row d-flex c-brand p-3">
            <h5 className="title">Đơn vị tính: </h5>
            <h5 className="txt-brand">{productData.packingWay}</h5>
          </div>
        ) : null}
        {productData.placeOfManufacture ? (
          <div className="custom-row d-flex c-brand p-3">
            <h5 className="title">Sản xuất tại: </h5>
            <h5 className="txt-brand">{productData.placeOfManufacture}</h5>
          </div>
        ) : null}
        {productData.expiryDate ? (
          <div className="custom-row d-flex c-brand p-3">
            <h5 className="title">Hạn sử dụng: </h5>
            <h5 className="txt-brand">{productData.expiryDate}</h5>
          </div>
        ) : null}
      </Tab>
      <Tab eventKey="BinhLuan" title="Bình Luận">
        Tab content for comment
      </Tab>
    </Tabs>
  );
}

export default CustomTab;
