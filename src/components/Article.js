import React, {Component}  from 'react';
import PropTypes from "prop-types";
import toggleOpen from "../decorators/toggleOpen"


class Article extends Component{
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired
        }).isRequired
    }

    componentWillMount(){
console.log("---", "mounting");
    }
     render(){
         let {article, toggleOpen} = this.props;
        return (<div >
            <h3>{article.title}</h3>
            <button onClick={toggleOpen}>Open</button>
            {this.showText()}

        </div>)
     }

    componentWillReceiveProps(nextProps){
        console.log("---", "updating", this.props.isOpen, nextProps.isOpen);
    }
     componentDidMount(){
         console.log("---", "mounted");
     }
     showText(){
         let {article, isOpen} = this.props;
          return isOpen ? <section>{article.text}</section>: null
     }


}

// function Article({article, isOpen,toggleOpen}) {
//     return (<div>
//         <h3>{article.title}</h3>
//         <button onClick={toggleOpen}>Open</button>
//         {showText()}
//
//     </div>)
//
//     function showText(){
//         return isOpen ? <section>{article.text}</section>: null
//     }
//
// }
export default toggleOpen(Article);

// export default function Article({article}) {
//     return (<div>
//         <h3>{article.title}</h3>
//         <section>{article.text}</section>
//     </div>)
// }