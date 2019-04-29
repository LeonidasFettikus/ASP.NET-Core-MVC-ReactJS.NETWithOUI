class ExampleComponent extends React.Component {
    render() {
        return (
            <div className="testDiv">
                <TextField label="With error message" errorMessage="Error message" />
                <h1>{this.props.user.name}</h1>
                <h3>{this.props.user.age}</h3>   
            </div>
        );
    }
}