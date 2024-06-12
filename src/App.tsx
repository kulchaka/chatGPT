import "./App.scss"
import ChatLine from "./components/ChatLine/ChatLine"
import FormInput from "./components/FormInput/FormInput"
import { useStore } from "./store/store"
export interface iForm {
  content: string
}

function App() {
  const { data } = useStore()
  return (
    <div className='block'>
      {data.length > 0 && <ChatLine />}
      <FormInput />
    </div>
  )
}

export default App
