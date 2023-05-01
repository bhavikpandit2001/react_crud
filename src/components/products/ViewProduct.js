import { Badge, Button, Card, Image, Modal, Rate, Typography } from 'antd'
import React, { useState } from 'react'

const ViewProduct = ({ item }) => {
  const [openmodal, setOpenModal] = useState(false)
  return (
    <div>
      <Button type='primary' onClick={() => {
        setOpenModal(true)
      }}>View Product</Button>
      <Modal open={openmodal} onCancel={() => {
        setOpenModal(false)
      }}
        onOk={() => {
          setOpenModal(false)
        }}>
        <div>
          <div style={{ padding: "20px" }}>
            <Badge.Ribbon className='itembadge' text={item.discountPercentage}>
              <Card
                className='maincard'
                title={item.title}
                cover={<Image className='itemcardimg' src={item.images} />}
                actions={
                  [
                    <Rate allowHalf value={item.rating}></Rate>,
                  ]
                }
              >
                <Card.Meta
                  title={<Typography.Paragraph>
                    Price: $
                    <Typography.Text >{item.price} {" "}</Typography.Text>
                    <Typography.Text delete style={{ color: "gray" }}>
                      {Math.floor(item.price / item.discountPercentage * 100)}
                    </Typography.Text>
                  </Typography.Paragraph>
                  }
                  description={<Typography.Paragraph style={{ color: "gray" }} ellipsis={{
                    rows: 1, expandable: true, symbol: "more"
                  }}>{item.description}</Typography.Paragraph>}
                ></Card.Meta>
              </Card >
            </Badge.Ribbon>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ViewProduct