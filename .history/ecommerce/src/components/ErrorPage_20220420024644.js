import React from 'react';
import {Container, Title} from "../styles/Category.style"
class ErrorPage extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return <Container><Title>Page not found 404</Title></Container>;
    }
}


export default ErrorPage;