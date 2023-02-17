import invItems from "../data/items.json"
import { StoreItem } from "../components/StoreItem"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export function Registry() {

    return (
      <div>
        <h1>Registry</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
          {invItems.map(item => (
            <Col key={item.id}>
              {/* {JSON.stringify(item)} */}
              <StoreItem {...item} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
  
 