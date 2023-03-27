const Link = ReactRouterDOM.Link;



function SPA(){
    const Route = ReactRouterDOM.Route;

    const HashRouter = ReactRouterDOM.HashRouter;

    return(

        <HashRouter>
        <div>
            <h1>Routing - Hello World</h1>
            <Nav/>
            <hr/>
            <Route  path="/" exact         component={Home}  /> 
            <Route  path="/about/"         component={About} />
            <Route  path="/products/"      component={Products} />
        </div>
        </HashRouter>
    );
}

ReactDOM.render(

    <SPA/>,
    document.getElementById('root')
)

