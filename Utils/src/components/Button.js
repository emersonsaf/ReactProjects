import PropTypes from 'prop-types'

export default function Button(props) {
    return (
        <div>
            <button
                onClick={props.onClick}
                className="btn"
                style={{ backgroundColor: props.color }}
            >
                {props.text}
            </button>
        </div>
    )
}

Button.defaulProps = {
    color: 'steelblue'
}

Button.PropTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}