import React, { Component } from "react";
import { Container, Header, Menu, Responsive } from "semantic-ui-react";
import MenuItems from "../elements/MenuItems";

class Title extends Component {

    render() {
        return(
            <div id="home">
                <Responsive as={Menu}
                    minWidth={768}
                    inverted
                    pointing
                    secondary
                    size="massive"
                    color="teal"
                    className="header-links">
                    <MenuItems hasIcons={true} className="ui container"/>
                </Responsive>
                <Container className="title-content">
                    <Header as="h1" size="huge" color="teal">DANIEL LETSCHER</Header>
                    <Header as="h2" size="large">Product Manager</Header>
                </Container>
            </div>
        );
    }
}

export default Title;