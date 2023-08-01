import { Button, Form, Input, Modal, Select } from "antd";
import React from "react";

const { Option } = Select;

class AddBikeModal extends React.Component {
  formRef = React.createRef();
  state = {
    visible: false,
  };

  onFinish = (values) => {
    const url = "api/v1/bikes/";
    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((data) => {
        if (data.ok) {
          this.handleCancel();

          return data.json();
        }
        throw new Error("Network error.");
      })
      .then(() => {
        this.props.reloadBikes();
      })
      .catch((err) => console.error("Error: " + err));
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Create New +
        </Button>

        <Modal
          title="Add New Bike ..."
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
        >
          <Form ref={this.formRef} layout="vertical" onFinish={this.onFinish}>
            <Form.Item
              name="brand"
              label="Brand"
              rules={[
                { required: true, message: "Please input your bike brand!" },
              ]}
            >
              <Input placeholder="Input your bike brand" />
            </Form.Item>

            <Form.Item
              name="model"
              label="Model"
              rules={[
                { required: true, message: "Please input your bike model!" },
              ]}
            >
              <Input placeholder="Input your bike model" />
            </Form.Item>

            <Form.Item
              name="price"
              label="price"
              rules={[
                {
                  required: true,
                  message: "Please add price for new bike!",
                },
              ]}
            >
              <Select
                showSearch
                placeholder="Select your bike brand"
                optionFilterProp="children"
                style={{ width: "100%" }}
              >
                <Option value="Revel">Revel</Option>
                <Option value="Specialized">Specialized</Option>
                <Option value="Trek">Trek</Option>
                <Option value="Cannondale">Cannondale</Option>
                <Option value="Canyon">Canyon</Option>
                <Option value="Salsa">Salsa</Option>
                <Option value="Surly">Surly</Option>
                <Option value="Other">Other</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="quantity"
              label="Quantity"
              rules={[
                {
                  required: true,
                  message: "Please input the quantity in inventory!",
                },
              ]}
            >
              <Input type="number" placeholder="How many bikes on order?" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  }
}

export default AddBikeModal;
