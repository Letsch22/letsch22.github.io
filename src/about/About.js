import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import AboutData from "./data/about.json";

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            about: AboutData
        };
    }

    render() {
        return (
            <div id="about">
                <Grid centered container>
                    <Grid.Column width={7} only="computer">
                    </Grid.Column>
                    {/* <Grid.Column computer={9} mobile={16} tablet={11}>
                        <Header>About Me</Header>
                        {this.state.about.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
                    </Grid.Column> */}
                </Grid>
            </div>
        );
    }
}

export default About;