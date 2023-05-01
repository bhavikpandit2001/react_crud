import { ArrowRightOutlined } from '@ant-design/icons'
import { Badge, Button, Modal, Tag, Typography } from 'antd'
import React, { useState } from 'react'

const ViewPost = ({ post }) => {
  const [openmodal, setOpenModal] = useState(false)
  return (
    <div>
      <Button type='primary' onClick={() => {
        setOpenModal(true)
      }}>View Post</Button>
      <Modal open={openmodal} onCancel={() => { 
        setOpenModal(false)
      }}
        onOk={() => {
          setOpenModal(false)
        }}>
        <div className="box">
          <div className="boxlayout">
            <div className="profile">
              <div className='name'>
                <div><ArrowRightOutlined /></div>
                <Typography.Title ellipsis={{ rows: 2, expandable: true, symbol: "more" }}>{post.title}</Typography.Title>
                <div>
                  <Tag color="#f50">{post.tags[0]}</Tag>
                  <Tag color="#2db7f5">{post.tags[1]}</Tag>
                  <Tag color="#87d068">{post.tags[2]}</Tag>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <Badge count={post.reactions} />
                </div>
                <div style={{ marginTop: "20px" }}>
                  <Typography.Paragraph >{post.body}</Typography.Paragraph>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ViewPost