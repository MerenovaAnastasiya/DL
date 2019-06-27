import React from 'react';
import BookShelf from "../components/BookShelf";
import {connect} from "react-redux";
import {getAppBooks} from '../reducers/appReducer';
import * as actions from '../actions/appActions';
import {Carousel} from 'react-materialize';
import {bindActionCreators} from "redux";
import * as M from "../materialize";

class BookCase extends React.Component {

    constructor(props) {
        super(props);
        const {dispatch} = props;
        this.boundActionCreators = bindActionCreators(actions, dispatch)
    }

    componentDidMount() {
        M.Carousel.init(this);
    }

    render() {
        const {books} = this.props;
        console.log(books);
        return (
            <div className='min-height-block'>
                <div className="books">
                    <Carousel options={{fullWidth: true, indicators: true}} className="center">
                        {books.map((book) =>
                            <div>
                                <BookShelf book={book}
                                           {...this.boundActionCreators}
                                />
                            </div>
                        )}
                    </Carousel>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: getAppBooks(state)
    };
}

export default connect(mapStateToProps)(BookCase);