



function Home(props) {
    return (
        <div style={style.container}>
            <div style={style.dv1}>
                test
            </div>
            <div style={style.dv2}>
                test
            </div>
        </div>
    )
};

export default Home;


let style = {
    container:{
        display:"grid",
        gridTemplateRows:"100px 200px 400px 100px",
        gridTemplateColumns:"200px repeat(3,1fr)",
        gridGap:"30px"
    },
    dv1:{
        backgroundColor:"red",
        gridColumn:"1/-1"
    },
    dv2:{
        backgroundColor:"yellow"
    }

  }