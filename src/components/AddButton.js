import React from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/AddCircle'

function AddButton() {
    return (
        <Button
        variant="contained"
        color="secondary"
        startIcon={<AddIcon />}
        >
            Add Student
        </Button>
    )
}

export default AddButton
