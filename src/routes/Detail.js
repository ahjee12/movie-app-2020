import React from 'react';

// function Detail(props){
//     console.log(props);
//     return <span>hello</span>
// }

class Detail extends React.Component {
    // 리다이렉트 기능
    componentDidMount(){
        const {location, history} = this.props;
        if (location.state === undefined){
            history.push('/')
        }
    }
    render(){
        const {location} = this.props;
        if (location.state){
            return <span>{location.state.title}</span>
        }else{
            return null;
        }
        
    }
}

export default Detail;