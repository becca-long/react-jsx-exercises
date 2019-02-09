let ListGroupItem = (props) => {
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <img src={props.image} />
            </li>
        </ul>
    // <span>Make this component render like a Bootstrap list group item: <a href="https://getbootstrap.com/docs/4.1/components/list-group/" target="_blank">https://goo.gl/images/mY5Qdv</a></span>
    )
}

let ListGroup = () => {
    return (
        <div>
            <ListGroupItem image="https://www.channelweb.co.uk/w-images/daa6fb74-bb2f-48c9-a399-464612d8252a/0/windowslogo-580x358.jpg"/>
            <ListGroupItem image="https://www.channelweb.co.uk/w-images/daa6fb74-bb2f-48c9-a399-464612d8252a/0/windowslogo-580x358.jpg"/>
            <ListGroupItem image="https://www.channelweb.co.uk/w-images/daa6fb74-bb2f-48c9-a399-464612d8252a/0/windowslogo-580x358.jpg"/>
            <ListGroupItem image="https://www.channelweb.co.uk/w-images/daa6fb74-bb2f-48c9-a399-464612d8252a/0/windowslogo-580x358.jpg"/>
        </div>
    )
}

ReactDOM.render(<ListGroup />, document.getElementById('root'))