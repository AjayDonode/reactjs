// tutorial8.js
var data = [{
    id: 1,
    author: "Ajay Donode",
    text: "This is one comment"
}, {
    id: 2,
    author: "Suparna Donode",
    text: "This is *another* comment"
}];

var CommentList = React.createClass({
    render: function() {

        var commentNodes = this.props.data.map(function(comment) {
            return ( < Comment author = {
                    comment.author
                }
                key = {
                    comment.id
                } > {
                    comment.text
                } < /Comment>
            );
        });

        return ( < div className = "commentList" > {
            commentNodes
        } < /div>);
    }
});

var CommentForm = React.createClass({
    render: function() {
        return ( < div className = "commentForm" >
            Hello, world!I am a CommentForm. < /div>
        );
    }
});

var Comment = React.createClass({
    render: function() {
        var md = new Remarkable();
        return ( < div className = "comment" >
            < h2 className = "commentAuthor" > {
                this.props.author
            } < /h2>

            {
                md.render(this.props.children.toString())
            } < /div>
        );
    }
});

var CommentBox = React.createClass({
    render: function() {
        return ( < div className = "commentBox" >
            < h1 > Comments < /h1> < CommentList data = {
                this.props.data
            }
            /> < CommentForm / >
            < /div>
        );
    }
});
ReactDOM.render( < CommentBox data = {
            data
        }
        />, document.getElementById('content'));
