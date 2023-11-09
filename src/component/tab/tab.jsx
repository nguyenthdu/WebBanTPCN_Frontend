import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function CustomTab() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="MoTa" title="Mô tả">
        Tab content for description
      </Tab>
      <Tab eventKey="BinhLuan" title="Bình Luận">
        Tab content for comment
      </Tab>
    </Tabs>
  );
}

export default CustomTab;
