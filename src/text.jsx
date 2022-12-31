import React, {useState} from 'react'

const Text = (props) => {
  const [state, setState] = useState(false);

  const showNotes = () => {
    props.state(state);
  }

  return (
    <>
    <input type="text" onClick={showNotes} placeholder="Add Notes" className="outline-none text pl-4 shadow-[0px_0px_5px_rgba(4,59,92,0.8)] h-[45px] w-[450px] focus:border-b-2 border-b-[#254ab9] mb-3" />
    </>
  )
}
export default Text;