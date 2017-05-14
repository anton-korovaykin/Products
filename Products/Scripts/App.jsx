var Test = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                Hello World!!!
            </div>
        );
    }
});
ReactDOM.render(
    <Test/>,
    document.getElementById('content'));