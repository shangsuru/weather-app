import React, { useState } from 'react'
import axios from 'axios'
import { Card, Modal, Input } from 'antd'
const { Search } = Input

// card, when clicked opens up a modal, where one can enter a location name to be displayed in the dashboard
const AddLocationCard = () => {
  const [visible, setVisible] = useState(false) // modal visible or not
  const [searchText, setSearchText] = useState('') // content of searchbar in modal

  const showModal = () => {
    setVisible(true)
  }

  const handleOk = e => {
    setVisible(false)
    // create location
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
