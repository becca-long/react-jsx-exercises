const MyFirstComponent = (props) => {
    return (
        <div>
            <h2 className = "blog-title">
                This is a {props.name} that I made.
            </h2>
            <div className = "blog-body">
                {props.children}
            </div>
        </div>
    )
}

const myElement = (<div>
    Hello World! {3 + 4}
    <h1>My name is Becca</h1>
    <MyFirstComponent name="apricots">
        <span>Monkeys</span>
    </MyFirstComponent>
    <MyFirstComponent name="cherries"/>
    <MyFirstComponent name="bananas"/>
    </div>)


ReactDOM.render(myElement, document.getElementById('root'))