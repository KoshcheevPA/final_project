import React, {Component} from 'react';

class Theme extends Component {
    state = {
        theme: localStorage.getItem('theme'),
        containerColor: 'page-header__theme'
    };

    componentDidMount() {
        let element = document.getElementById('root').classList;
        if(localStorage.getItem('theme') === 'black') {
            this.setState({
                theme:'black',
                containerColor: 'page-header__theme page-header__theme--light'
            });
            element.add('root-dark');
        }
    }

    onThemeClick = () => {
        let element = document.getElementById('root').classList;
        this.setState({
            theme: this.state.theme === 'white' ? 'black' : 'white',
            containerColor: this.state.theme === 'white' ? 'page-header__theme page-header__theme--light' : 'page-header__theme'
        });
        this.state.theme === 'white' ? element.add('root-dark') : element.remove('root-dark');
    };

    render() {
        if(localStorage.getItem('theme') === null) {
            this.setState({
                theme:'white',
                containerColor: 'page-header__theme'
            });
        }
        localStorage.setItem('theme', this.state.theme);
        return (
            <span className={this.state.containerColor} id='theme' onClick={this.onThemeClick}>
            </span>
        );
    }
}

export default Theme;