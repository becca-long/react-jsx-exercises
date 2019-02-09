let FirstComponent = () => {
    return (
        <img src="https://www.channelweb.co.uk/w-images/daa6fb74-bb2f-48c9-a399-464612d8252a/0/windowslogo-580x358.jpg"/>
    )
}

const myLogo = (
    <FirstComponent/>
)

ReactDOM.render(myLogo, document.getElementById('root'))