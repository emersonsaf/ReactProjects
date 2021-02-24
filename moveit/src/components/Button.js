
interface ButtonProps{
    color: String;
}


export default function Button(props: ButtonProps){
    return(
        <Button style={{ backgroundColor: props.color}}>
            React Button
        </Button>
    );
}