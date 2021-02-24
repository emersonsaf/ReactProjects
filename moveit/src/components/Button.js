
interface ButtonProps{
    color: String;
}


export default function Button(props: ButtonProps){
    return(
        <button style={{ backgroundColor: props.color}}>
            React Button
        </button>
    );
}