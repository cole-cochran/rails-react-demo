import { Table, message, Popconfirm } from "antd";
import React from "react";
import AddBikeModal from "./AddBikeModal";

class Bikes extends React.Component {
  columns = [
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Model",
      dataIndex: "model",
      key: "model",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "",
      key: "action",
      render: (_text, record) => (
        <Popconfirm
          title="Are you sure to delete this bike?"
          onConfirm={() => this.deletebike(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <a href="#" type="danger">
            Delete{" "}
          </a>
        </Popconfirm>
      ),
    },
  ];

  state = {
    bikes: [],
  };

  componentDidMount() {
    this.loadBikes();
  }

  loadBikes = () => {
    const url = "api/v1/bikes/index";
    fetch(url)
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
        throw new Error("Network error.");
      })
      .then((data) => {
        data.forEach((bike) => {
          const newEl = {
            key: bike.id,
            id: bike.id,
            brand: bike.brand,
            model: bike.model,
            price: bike.price,
            quantity: bike.quantity,
          };

          this.setState((prevState) => ({
            bikes: [...prevState.bikes, newEl],
          }));
        });
      })
      .catch((err) => message.error("Error: " + err));
  };

  reloadBikes = () => {
    this.setState({ bikes: [] });
    this.loadBikes();
  };

  deleteBikes = (id) => {
    const url = `api/v1/bikes/${id}`;

    fetch(url, {
      method: "delete",
    })
      .then((data) => {
        if (data.ok) {
          this.reloadBikes();
          return data.json();
        }
        throw new Error("Network error.");
      })
      .catch((err) => message.error("Error: " + err));
  };

  render() {
    return (
      <>
        <Table
          className="table-striped-rows"
          dataSource={this.state.bikes}
          columns={this.columns}
          pagination={{ pageSize: 5 }}
        />

        <AddBikeModal reloadBikes={this.reloadBikes} />
      </>
    );
  }
}

export default Bikes;
