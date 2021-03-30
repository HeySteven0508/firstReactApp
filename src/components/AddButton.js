import React from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/AddCircle'
import CloseIcon from '@material-ui/icons/Close'

function AddButton({title,color,showAddButton}) {
    return (
        <Button
        variant="contained"
        color={color}
        startIcon={title === 'Add Student' ? <AddIcon /> : <CloseIcon />}
        onClick={showAddButton      }
        >
            {title}
        </Button>
    )
}       

export default AddButton
