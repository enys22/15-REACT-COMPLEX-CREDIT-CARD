import React, { Component } from 'react'
import CardImg from './img/card.png'
import './Card.css'


export default class test extends Component {
state={
    name : "",
    validity : '',
    num : ''
}
handleChangeName=(event)=>{
    if( event.target.value.length < 19 /* && event.target.value.match(/[a-zA-Z]/g)*/) {
        this.setState({
            name:event.target.value.toUpperCase()
        })
    }
}

handleChangeValidity=(event)=>{
    if( event.target.value.substring(0,2) < 13 /*&& event.target.value.substring(2) < 31 */){
        this.setState({
            validity:event.target.value
        })
    }
    if(event.target.value.length===2){
        this.setState({
            validity:event.target.value+"/"
        })
    }

}

handleChangeNum=(event)=>{
    if( event.target.value.length < 20 ){
        this.setState({
            num:event.target.value
        })
    }
    if( event.target.value.length ===4 || event.target.value.length ===9 || event.target.value.length ===14 ){
        this.setState({
            num:event.target.value+" "
        })
    }
}

    render() {
        return (
            <section className={"container"}>
                <img src={CardImg} style={{position:'absolute', zIndex:'-1'}} alt=""/>
                <div styles={{ backgroundImage:`url(${CardImg})` }}>
                    <span className={"num"}>{this.state.num.padEnd(19,"*")}</span>
                    <span className={"validity"}>{this.state.validity.padEnd(5,"*")}</span>
                    <span className={"name"}>{this.state.name}</span>
                </div>
                <div className="inputs">
                    <input value={this.state.num} onChange={this.handleChangeNum} maxLength={"19"}/>
                    <input value={this.state.validity} onChange={this.handleChangeValidity} maxLength={"5"}/>
                    <input value={this.state.name} onChange={this.handleChangeName} maxLength={"20"}/>
                </div>
            </section>
        )
    }
}
