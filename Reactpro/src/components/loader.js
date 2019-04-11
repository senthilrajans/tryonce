import React, { Component } from "react";

export default class Spinner extends React.Component{
    constructor(props){
        super(props)
        this.state={ show:true };
        //this.toggleloader = this.toggleloader.bind(this); 
    }

   /* onClick(){
        this.setState({ show:show})
    }
*/

    componentDidMount(){
        const that=this;
        setTimeout(function(){
            that.setState({show:false});
        },1000);
    }

    

    render(){

        let isShow = (this.state.show)?"":"hide";
        return  (
            <div>
                <div className={"loader "+isShow}>
                    <div className="spinner"></div>
                </div> 
                {/*<button onClick="{ this.onClick }">show</button>*/}
            </div>
        )
    }
}
