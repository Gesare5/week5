const styleObject = {
    backgroundColor: '#6F6FC8',
    //color: '#333',
    fontSize: '20px',
    fontFamily: 'inherit',
    border: 'none',
    margin: '10px',
    padding: '10px 20px',
    height: '45px',
    width: '70px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bolder',
    color: '#fff',
    outline: 'none'


};

function Buton(props) {
    return (
        <button style={styleObject} >{props.children}</button>
    );
};


export default Buton;