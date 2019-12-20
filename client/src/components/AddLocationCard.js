import React, { useState } from 'react'
import axios from 'axios'
import { Card, Modal, Input } from 'antd'
const { Search } = Input

const AddLocationCard = () => {
  const [visible, setVisible] = useState(false)
  const [searchText, setSearchText] = useState('')

  const showModal = () => {
    setVisible(true)
  }

  const handleOk = e => {
    setVisible(false)
    axios
      .post('http://localhost:8000/location', {
        location: searchText
      })
      .then(() => {
        setSearchText('')
        window.location.reload()
      })
  }

  const handleCancel = e => {
    setVisible(false)
  }

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleOk()
    }
  }

  return (
    <div>
      <Card
        hoverable
        onClick={showModal}
        style={{
          width: 300,
          height: 187,
          border: '1px dashed grey'
        }}
      >
        + Ort hinzufügen
      </Card>
      <Modal
        title='Stadt auswählen'
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText='Abbruch'
        okText='OK'
      >
        <Search
          placeholder='Ort hinzufügen'
          onKeyDown={event => handleKeyPress(event)}
          onChange={event => setSearchText(event.target.value)}
          style={{ width: 200 }}
        />
      </Modal>
    </div>
  )
}

export default AddLocationCard
