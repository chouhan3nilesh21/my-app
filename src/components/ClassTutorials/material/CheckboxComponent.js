import React,{useState} from 'react'
import { Checkbox,FormControlLabel} from '@material-ui/core'

export default function CheckboxComponent() {

    const[checked,setChecked]=useState(true);
    return (
        <div>
            <FormControlLabel 
            label="Testing Checkbox"
            control={
            <Checkbox checked={checked}
            onChange={(event)=>setChecked(event.target.checked)}/>}
            
            />
        </div>
    )
}
