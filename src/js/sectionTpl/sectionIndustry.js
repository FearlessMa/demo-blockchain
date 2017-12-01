/**
 * Created by MHC-PC on 2017/7/27.
 */
import React from 'react';
export default class SectionIndustry extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="section-box">
                <h1>商业合作</h1>
                <div className="industry-box">
                    <div className="industry-content">
                        <img src="src/img/industry-1.png" alt=""/>
                        <div>
                            <div className="i-content-title">支付合作</div>
                            <div>支付合作的企业，支付合作。</div>
                        </div>
                    </div>
                    <div className="industry-content">
                        <img src="src/img/industry-2.png" alt=""/>
                        <div>
                            <div className="i-content-title">支付合作</div>
                            <div>支付合作的企业，支付合作。</div>
                        </div>
                    </div>
                </div>
            </div>)
    }
}
