import React from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/AddCircle'

function AddButton({title,color,showAddButton}) {
    return (
        <Button
        variant="contained"
        color={color}
        startIcon={<AddIcon />}
        onClick={showAddButton      }
        >
            {title}
        </Button>
    )
}

export default AddButton
