import React from 'react';

export default class BookShelf extends React.Component {

    constructor(props) {
        super(props);
        this.state = props.book;
    }

    render() {
        return (
            <div className='card horizontal z-depth-1' title={this.state.title}>
                <div className="card-image">
                    <img src={this.state.image} alt=""/>
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p>
                            {this.state.description}
                        </p>
                        <span className='author'>{this.state.author}</span>
                    </div>
                    <div className="card-action">
                        <button className='btn-floating red white-text waves-effect'> + </button>
                    </div>
                </div>
            </div>
        );
    }

}