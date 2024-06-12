import { Timeline } from "antd"
import React from "react"
import { useStore } from "../../store/store"
import "./ChatLine.scss"

const ChatLine: React.FC = () => {
  const { data } = useStore()
  return (
    <Timeline
      className='timeline'
      items={data.map((obj) => ({
        color: "gray",
        children: (
          <div style={{ width: "max-content" }}>
            <p style={{ fontWeight: "bold" }}>Chat GPT</p>
            <p className='p-animate'>{obj.content}</p>
          </div>
        ),
      }))}
    />
  )
}

export default ChatLine
