import React, {Component} from 'react';
import '../App.css';

class Theme extends Component {
    state = {
        theme: false,
        containerColor: 'page-header__theme'
    };

    onThemeClick = () => {
        let element = document.getElementById('root').classList;
        this.setState({ theme: !this.state.theme,
            containerColor: this.state.theme ? 'page-header__theme' : 'page-header__theme page-header__theme--light'});
        this.state.theme ? element.remove('root-dark') : element.add('root-dark');
    };

    render() {
        return (
            <span className={this.state.containerColor} id='theme' onClick={this.onThemeClick}>
            </span>
        );
    }
}

export default Theme;