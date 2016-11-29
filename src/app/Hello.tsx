import * as React from "react";
const _ = require('lodash');

interface HelloProps {
    name: string;
}

export default class Hello extends React.Component<HelloProps, any> {
    constructor(props) {
        super(props);
        console.log(_.find([1, 2], () => true));
    }
    render() {
        return <div>Hello, {this.props.name}</div>;
    }
}

