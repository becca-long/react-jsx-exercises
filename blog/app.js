let Header = () => {
    return (
    <header>
        <h1>Becca's Best Blog</h1>
    </header>)
}
let Article = (props) => {
    return (
    <div>
        <h3>{props.title}</h3>
        <div>
        {props.article}
        </div>
    </div>)
}
let Footer = () => {
    return (
    <footer>
        The end.
    </footer>)
}

let firstArticle = (
    <span>I'm trying out some new stuff. 
        Think React seems pretty cool.
        Not sure what I'm doing.
    </span>
)

let secondArticle = (
    <span>Ok this framework is letting me do some pretty cool things.
        Still not sure I know all how to use it.
        But liking the possibilities.
    </span>
)

let thirdArticle = (
    <span>Getting the hang of it now. 
        Very cool.
        Thinking I'm going to be using React.
        Love how easy it is.
    </span>
)

let fourthArticle = (
    <span>I AM THE MASTER.
        YES. I HAVE CONQUERED REACT.
        YOU'RE WELCOME CODEBASE.
    </span>
)

let Blog = () => {
    return (
    <div>
        <Header/>
        <Article title="My First Article" article={firstArticle}/>
        <Article title="Starting to Get the Hang of React" article={secondArticle}/>
        <Article title="Ok I'm Feeling It Now" article={thirdArticle}/>
        <Article title="Now I'm a Master" article={fourthArticle}/>
        <Footer/>
    </div>
    )
}

ReactDOM.render(<Blog/>, document.getElementById('root'))