import { Button, Flex, Form, Input, Space, notification } from "antd"
import axios from "axios"
import { FaLocationArrow } from "react-icons/fa6"
import { iForm } from "../../App"
import { iData, useStore } from "../../store/store"

const FormInput = () => {
  const [form] = Form.useForm<iForm>()
  const { updData, setIsLoadingData } = useStore()

  const [api] = notification.useNotification()
  const openNotification = (message: string, description: string) => {
    api["error"]({
      message: message,
      description: description,
    })
  }

  const postData = async (message: iForm) => {
    setIsLoadingData(true)
    try {
      const response = await axios.post<iData>("http://localhost:3000/data", { message })
      updData(response.data)
    } catch (error) {
      console.error("Error:", error)
      openNotification("Error", "Error processing request")
    } finally {
      setIsLoadingData(false)
    }
  }

  const onFinish = async (fieldsValue: iForm) => {
    form.resetFields()
    fieldsValue.content = fieldsValue.content.trim()
    if (fieldsValue?.content?.length > 0) {
      await postData(fieldsValue)
    }
  }
  return (
    <Flex gap='middle' vertical>
      <Flex vertical={true}>
        <Form form={form} onFinish={onFinish}>
          <Form.Item name='content'>
            <Space.Compact style={{ width: "100%" }}>
              <Input className='input' placeholder='💭 Ask something ☺️' />
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
  )
}

export default FormInput
