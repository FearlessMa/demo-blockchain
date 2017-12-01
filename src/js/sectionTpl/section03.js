/**
 * Created by MHC-PC on 2017/7/31.
 */
import React from 'react';
export class Section03 extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="section-box section03-box">
                <h1>场景案例</h1>
                <div className="section03-content-box">
                    <div className="section03-item">
                        <img src="src/img/industry-1.png" alt=""/>
                        <div className="section03-item-left">left</div>
                        <div className="section03-item-right"></div>
                    </div>
                    <div className="section03-item">2</div>
                    <div className="section03-item">3</div>
                </div>
            </div>
        );
    }
}