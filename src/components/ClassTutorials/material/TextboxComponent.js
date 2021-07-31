import React from 'react'
import { TextField } from '@material-ui/core'

export default function TextboxComponent() {
    return (
        <div>
            <TextField 
            variant="outlined" 
            color="secondary"
            type="email"
            placeholder="Enter Email"
            label="Email"
            />
        </div>
    )
}
