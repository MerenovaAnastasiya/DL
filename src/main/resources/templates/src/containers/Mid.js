import React from 'react';
import Main from "./Main";
import BookShelf from "./BookShelf";
import {Switch, Route} from "react-router-dom";

export default class Mid extends React.Component {

    render() {
        return (
            <Switch>
                <Route path='/' render={() => {
                    return (<div><Main/><BookShelf/></div>)
                }}/>
            </Switch>
        )
    }
}