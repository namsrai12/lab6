function Mendchilgee123(props){console.log(props)
    return(
        <div>
    <h1>{props.ner}</h1>
    <p>{props.nas}</p>
    <p>{props.surchBgaEseh ?"unen":"choloo awsan"}</p>
    <p>{props.dunguud[0]}</p>
    <p>{props.dunguud[1]}</p>
    <p>{props.dunguud[2]}</p>
    {props.dunguud.map(
        ( el,index) => 
        <p key={index}>{el}</p>
    )
    }
    <p>props.myObj.mergjil</p>
    <p>props.myobj.index</p>
        </div>
    );
    }
        ReactDOM.render(
             <Mendchilgee123 ner={"Hello dorj"}
             nas={20}
             surchBgaEseh={true}
             dunguud={[80,"dalan yos",true].le}
             myObj={{mergjil:'sw',index:'ds123442'}}/>      
           document.getElementById('root')
        );
    
    
    
    
    
    
    