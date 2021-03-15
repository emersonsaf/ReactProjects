import PropTypes from 'prop-types'
import Button from './Button'
import Tasks  from './tasks'

const Header = ({onAdd,showAdd}) => {

    return (
        <header className="header">
            <h1>Lista de Tarefas</h1>
            <Button
                text={ showAdd ? "Close" : "Add"}
                onClick={onAdd}
                color={ showAdd ? "red" : "green"}
            />
        </header>
    )
}

Header.PropTypes = {
    title: PropTypes.string,
}

export default Header