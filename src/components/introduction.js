import '../App.css';

function Introduction(props){
    // console.log('parameter kiriman: ', props.name)
    return (
        <div>
            <h1>INTRODUCTION</h1>
            <p>Halo nama saya adalah: {  props.name }</p>
        </div>
    );
}

export default Introduction;
