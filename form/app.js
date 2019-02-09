let TextInput = () => {
    return (
        <div>
            <input type="text" placeholder="Enter Text here"/>
        </div>
    )
}

let YesNoRadio = () => {
    return (
        <div>
            <label>
                <input type="radio" value="yes"/>
                Yes
            </label>
            <label>
                <input type="radio" value="no"/>
                No
            </label>
        </div>
    )
}

let SubmitButton = () => {
    return (
        <div>
            <input type="submit" value="Submit"/>
        </div>
    )
}

let Form = () => {
    return (
        <div>
        <TextInput />
        <TextInput />
        <TextInput />
        <YesNoRadio />
        <YesNoRadio />
        <SubmitButton />
    </div>
    )
}


ReactDOM.render(<Form />, document.getElementById('root'))