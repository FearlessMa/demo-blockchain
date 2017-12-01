/**
 * Created by MHC-PC on 2017/7/27.
 */
import React from 'react';
export class Section02 extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="section-box">
                <h1>同业合作</h1>
                <div className="section02-box">
                    <div className="section02-container">
                        <img src="src/img/industry-1.png" alt=""/>
                        <div className="">
                            <div className="section02-t-title">支付合作</div>
                            <div>支付合作的企业，支付合作。</div>
                        </div>
                        <div className="">
                        </div>
                    </div>
                    <div className="section02-container">
                        <img src="src/img/industry-2.png" alt=""/>
                        <div>
                            <div className="section02-t-title">支付合作</div>
                            <div>支付合作的企业，支付合作。</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
