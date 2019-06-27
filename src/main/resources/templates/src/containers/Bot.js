import React from 'react';
import {Footer} from "react-materialize";

export default class Bot extends React.Component {
    render() {
        return(
            <Footer
                copyrights="&copy 2019 Copyright Text"
                links={<ul/>}
                className="brown"
            >
                <h5 className="white-text">
                    Footer Content
                </h5>
                <p className="grey-text text-lighten-4">
                    You can use rows and columns here to organize your footer content.
                </p>
            </Footer>
        )
    }
}