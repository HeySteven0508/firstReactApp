import Button from './AddButton'
const Header = ({showAddButton,showAddValue}) => {
    return (
        <div className="header">
            <h1> List of Students </h1> 
            <Button title = {!showAddValue ?  'Add Student' : 'Close'} 
            color={!showAddValue ? 'primary' : 'secondary'} 
            showAddButton = {showAddButton}/>
        </div>
    )
}

export default Header
