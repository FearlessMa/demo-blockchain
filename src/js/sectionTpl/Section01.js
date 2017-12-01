/**
 * Created by MHC-PC on 2017/7/27.
 */
import React from 'react';

//import moreImg from 'img/p-icon-more.png';

export class Section01 extends React.Component{
    constructor(props){
        super(props);
        this.state={section01List :[
            {title : '智能管控系统',icon:'iconfont icon-pingtaiguanli',item:"支持对底层云计算平台的运维<br/>灵活确定区块链部署的规模和节点运行状态<br/>功能完备的api接口及实时监控、历史浏览，及智能合约的部署、调用功能"},
            {title : '开放平台',icon:'iconfont icon-kaifangpingtai',item:"提供易用的API、请客户端、外链服务等，降低技术门槛"},
            {title : '核心模块化',icon:'iconfont icon-mokuaifangda',item:"共识机制、加密机制、智能合约等核心模块深度优化<br/>联盟的稳定性、安全和性能得到提升"},
            {title : '支撑技术',icon:'iconfont icon-icon_jishushili',item:"Kubernates集群管理基于Docker的容器化部署<br/>完善的日志分析工具"},
            {title : '更多功能',icon:'iconfont icon-gengduo',item:"敬请期待"}
        ]};
    }

    render(){
        const section01ListDOM = this.state.section01List.map((section01List,index)=>{
            return (
                <li key={`${section01List.title}-${index}`}>
                    <div className="product-icon">
                        <i className={section01List.icon}></i>
                    </div>
                    <h3>{section01List.title}</h3>
                    <p dangerouslySetInnerHTML={{__html:section01List.item}}>

                    </p>
                </li>
            );
        });
        return(
            <div id="section01" className="section-box section-A">
                <h1>平台功能</h1>
                <div>
                    <ul>
                        {section01ListDOM}
                    </ul>
                </div>
            </div>
        )
    }
}