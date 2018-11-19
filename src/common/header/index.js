import React, {Component} from 'react';
import { 
    HeaderWrapper, Logo, Nav, NavItem, NavSearch, 
    Addition, Button, SearchWrapper
} from './style';

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            focused: false
        }

        this.handleSearchInputFocus = this.handleSearchInputFocus.bind(this);
        this.handleSearchInputBlur = this.handleSearchInputBlur.bind(this);
    }

    render() {
        return (
            <HeaderWrapper>
                <Logo href='/'/>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>
                        <i className='iconfont'>&#xe636;</i>
                    </NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <SearchWrapper>
                        <NavSearch
                            className={this.state.focused? 'focused': ''}
                            onFocus={this.handleSearchInputFocus}
                            onBlur={this.handleSearchInputBlur}
                        ></NavSearch>
                        <i className={this.state.focused? 'focused iconfont': 'iconfont'}>
                            &#xe623;
                        </i>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writting'>
                        <i className='iconfont'>&#xe624;</i>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        );
    }

    handleSearchInputFocus(){
        this.setState({
            focused: true
        });
    }

    handleSearchInputBlur(){
        this.setState({
            focused: false
        });
    }
}

export default Header;