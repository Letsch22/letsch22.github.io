import React, { Component } from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-scroll";
import IconSet from "./IconSet";
import PropTypes from "prop-types";

class MenuItems extends Component {

    constructor(props) {
        super(props);
        this.state = { items: ["home", "about", "resume"] };
    }

    renderItem(name, i) {
        return(<Link key={i} to={name} spy={false} smooth={true} duration={500} className="item">{name.toUpperCase()}</Link>);
    }

    render() {
        if (this.props.hasIcons) {
            return(
                <Scrollspy items={this.state.items} offset={-50} currentClassName="active" componentTag="div" className={this.props.className}>
                    {this.state.items.map((item, i) => this.renderItem(item, i))}
                    <IconSet isFooter={false}/>
                </Scrollspy>
            );
        } else {
            return(
                <Scrollspy items={this.state.items} offset={-50} currentClassName="active" componentTag="div" className={this.props.className}>
                    {this.state.items.map((item, i) => this.renderItem(item, i))}
                </Scrollspy>
            );
        }
    }
}

MenuItems.propTypes = {
    hasIcons: PropTypes.bool.isRequired,
    className: PropTypes.string
};

export default MenuItems;