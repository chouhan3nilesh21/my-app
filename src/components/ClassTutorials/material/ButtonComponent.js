import React from 'react';
import { Button,ButtonGroup } from '@material-ui/core';
import { Save,Delete} from '@material-ui/icons';

export default function ButtonComponent() {
    return (
        <div>
            <ButtonGroup>
            <Button
                startIcon={<Save />}
                variant="contained"
                color="primary"
                onClick={() => alert('Hey Material UI')}
                size="large"
            >
                Save
            </Button>
            <Button
                startIcon={<Delete />}
                variant="contained"
                color="secondary"
                onClick={() => alert('Hey Material UI')}
                size="large"
            >
                Delete
            </Button>
            </ButtonGroup>

        </div>
    )
}
