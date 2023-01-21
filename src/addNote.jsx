import React, {useState} from 'react'

const AddNotes = (props) => {
  const [fieldState, setfieldState] = useState(false);
  const [noteData, setNoteData] = useState({
     title : '',
     content : '',
  });
  const borderStyle = {
    borderBottomColor : 'red',
    borderBottomWidth : '2px',
  }
  const deafultStyle = {
    borderBottomColor : 'blue',
    focus : 'borderBottomColor:#254ab9',
  }
  const InputEvent = (event) => {
     setNoteData((preData)=>{
       return {
         ...preData,
         [event.target.name]:event.target.value,
       }
     })
  }
  const getData = () => {
    console.log(noteData.title);
    if(noteData.title == '' && noteData.content == ''){
      setfieldState(true);
    }
    else{
      props.notedata(noteData);
      props.btnstate(false)
      setNoteData(()=>{
       return{title : '',
       content : '',}
      })
    }
   }

   return (<>
    <form onSubmit={(e)=>e.preventDefault()} className="rounded-[10px] form inline-block mb-3 h-[170px] w-[420px] p-[15px] shadow-[0px_0px_8px_rgba(0,0,0,0.5)] shadow-[#bbbbdd] flex-col">
      <input type="text" value={noteData.title}  placeholder="Title" name="title" className="outline-none h-[30px] focus:border-b-2 border-b-[#254ab9] mb-3 w-full" onChange={InputEvent} style={fieldState ? borderStyle : deafultStyle }/>
      <div className="relative">
      <textarea name="content" value={noteData.content} className="resize-none h-[100px] w-full outline-none" placeholder="Description" onChange={InputEvent} />
       <button className="absolute h-[35px] w-[35px] top-14 left-[90%] border-0 rounded-[50%]" onClick={getData}><img className="" src="src/next.png"/></button>
      </div>
    </form>
   </>)
}

export default AddNotes;