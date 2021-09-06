import { Route, Redirect } from 'react-router-dom';


export default function RouteWrapper({
    component: Component, // recebe o componente
    isPrivate,            // recebe se o componente é privado ou não
    ...rest               // redebe o resto
}){

    const loading = false;
    const signed = false;

    if(loading){
        return(
            <div></div>
        )
    }

    if(!signed && isPrivate){ // verifica se o usuário está logado e se a rota que está tentando acessar é privada
        return <Redirect to="/" />
    }

    if(signed && !isPrivate){
        return <Redirect to="/dashboard" />
    }

    return(
        <Route 
            {...rest}
            render={ props => (
                <Component { ...props } />
            ) }
        />
    )
}