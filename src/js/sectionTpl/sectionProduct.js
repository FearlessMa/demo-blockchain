/**
 * Created by MHC-PC on 2017/7/27.
 */
import React from 'react';

export class SectionProduct extends React.Component{
    constructor(props){
        super();
    }

    render(){
        return(
            <div className="section-box section-A">
                <h1>产品服务</h1>
                <ul>
                    <li>
                        <div className="product-icon">
                            <img src="src/img/s2.png" alt=""/>
                        </div>
                        <h3>智能风控决策系统</h3>
                        <p>
                            催收策略个性化定制，数据监测，互联网
                            <br/>
                            模块委外催收，深度整合主流呼叫中心
                        </p>
                    </li>
                    <li>
                        <div className="product-icon">
                            <img src="src/img/s2.png" alt=""/>
                        </div>
                        <h3>CRC信用中心</h3>
                        <p>
                            接入大量数据源，进行多重关联匹配和关系检索，能精准地描绘客户信用状况
                        </p>
                    </li>
                    <li>
                        <div className="product-icon">
                            <img src="src/img/s2.png" alt=""/>
                        </div>
                        <h3>消费金融平台</h3>
                        <p>
                            支撑线上线下相结合的有场景消费金融全
                            <br/>
                            流程业务，灵活的产品配置，秒批放款
                        </p>
                    </li>
                    <li>
                        <div className="product-icon">
                            <img src="src/img/s2.png" alt=""/>
                        </div>
                        <h3>微信小程序金融解决方案</h3>
                        <p>
                            基于金融行业深刻理解，为金融企业量身定做金融业微信小程序，安全稳定，简单易用
                        </p>
                    </li>
                    <li>
                        <div className="product-icon">
                            <img src="src/img/s2.png" alt=""/>
                        </div>
                        <h3>金融业务解决方案</h3>
                        <p>
                            技术架构领先，多重安全保障，更好的
                            <br/>
                            用户体验，率先完成银行存管要求
                        </p>
                    </li>
                    <li>
                        <div className="product-icon">
                            <img src="src/img/s2.png" alt=""/>
                        </div>
                        <h3>区块链云服务</h3>
                        <p>
                            国内资深的区块链研究团队，基于深度定
                            <br/>
                            制的以太坊平台提供区块链公有云服务
                        </p>
                    </li>
                </ul>
            </div>
        )
    }
}