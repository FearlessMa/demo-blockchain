/**
 * Created by MHC-PC on 2017/7/24.
 */
import React from 'react';

import B6 from 'img/b6.jpg';
export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={headerNewsList:[
            {href:'#',title:'收钱码新政公告'},
            {href:'#',title:'服务商收钱码收单服务业务协作费延迟发放通知'},
            {href:'#',title:'收钱码物料申请变更公告'},
            {href:'#',title:'查看更多'}
        ]};
    }

    render(){
        const headerNewsList = this.state.headerNewsList.map((headerNewsList,index)=>{
            return(
                <li key={`${headerNewsList.href}-${index}`}>
                    <a href={headerNewsList.href}>{headerNewsList.title}</a>
                </li>
            );
        });
        return (
            <div className="header">
                <ul className="multicast">
                    <li className="li-img">
                        <img src={B6} alt=""/>
                    </li>
                </ul>
                <div className="header-news">
                    <div className="news-box">
                        <div className="news-box-title">
                            <i className="iconfont icon-xiaoxiguangbo"></i>
                        </div>
                        <ul>
                            {headerNewsList}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}