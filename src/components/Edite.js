import React,{useState} from 'react'

import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import {Controlled as ControlledEditor} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt,faExpandAlt } from '@fortawesome/free-solid-svg-icons'

function Edite(props) {
    let  {
        displayName,
        value,
        language,
        onChange
    }=props
    let handelChange=(editor,data,value)=>{
        onChange(value)
    }

    let [open,setopen]=useState(true)
  return (
    <div className={`editor-container ${open?'':"collapse"}`}>
     <div className="editor-title">
        <h4>{displayName}</h4>
        <button
         onClick={()=>{setopen(prev=>!prev)}}
         className="collapseBtn">
          <FontAwesomeIcon   icon={open?faCompressAlt:faExpandAlt}/>
         </button>
     </div>
     <div className="controlled-editor">
        <ControlledEditor
        onBeforeChange={handelChange}
        className="code-mirrir-wraper"
        value={value}
        options={{
                lineWrapping:true,
                lint:true,
                mode:language,
                theme:'material',
                lineNumbers:true
        }}
        />
     </div>
    </div>
  )
}

export default Edite