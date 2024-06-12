import { Button, Flex, Form, Input, Space } from "antd"
import axios from "axios"
import { useEffect } from "react"
import { FaLocationArrow } from "react-icons/fa6"
import "./App.scss"

function App() {
  const [form] = Form.useForm()
  useEffect(() => {
    try {
      const response = axios.post("http://localhost:3000/data")
      console.log("💡 ~ useEffect ~ response:", response)
    } catch (error) {
      console.error(error)
    }
  }, [])

  const onFinish = () => {
    console.log("💡 ~ onFinish ~ form:", form.getFieldsValue())
    form.resetFields()
  }
  return (
    <div className='block'>
      <Flex gap='middle' vertical>
        <Flex vertical={true}>
          <Form form={form} onFinish={onFinish}>
            <Form.Item name='text'>
              <Space.Compact style={{ width: "100%" }}>
                <Input className='input' placeholder='Ask anything ☺️' />
                <Button
                  className='button'
                  htmlType='submit'
                  icon={<FaLocationArrow />}
                  type='primary'
                />
              </Space.Compact>
            </Form.Item>
          </Form>
        </Flex>
      </Flex>
    </div>
  )
}

export default App
