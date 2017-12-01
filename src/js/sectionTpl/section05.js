/**
 * Created by MHC-PC on 2017/8/1.
 */
import React from 'react';
export class Section05 extends React.Component{
    constructor(props){
        super(props);
        this.state={section05List:[
            {title:'不可篡改，可追溯',content:'参与方都变成区块链网络的一个节点，便于监管与审计资金流、信息流等',href:'#'},
            {title:'效率提升，降低成本',content:'通过程序化记录、存储、传递、核实、分析信息数据，能够将交易流程大大简化，从而提升了交易效率',href:'#'},
            {title:'去中心化',content:'避免了单一记账人被控制贿赂而记假账的可能性，同时除非所有的节点被破坏，否则账目就不会丢失，从而保证了账目数据的安全性',href:'#'},
        ]};
    }
    render(){
        const section05ListDOM = this.state.section05List.map((section05List,index)=>{
            return (
                <div className="section05-c-item" key={`${section05List.title}-${index}`}>
                    <div className="section05-c-t">
                        {section05List.title}
                    </div>
                    <div className="section05-c-c">
                        {section05List.content}
                    </div>
                    <div className="section05-hidden-box">
                        <a href={section05List.href}>查看更多</a>
                    </div>
                </div>
            );
        });
        return(
            <div id="section05" className="section-box section05-box">
                <h1>区块链特性</h1>
                <div className="section05-container">
                    {section05ListDOM}
                </div>
            </div>
        );
    }
}