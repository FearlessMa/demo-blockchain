/**
 * Created by MHC-PC on 2017/7/27.
 */
import React from 'react';
export class SectionDoc extends React.Component{
    constructor(props){
        super(props);
        this.state={sectionDocList:[
            {step:'01',title:'注册登录'},
            {step:'02',title:'创建项目'},
            {step:'03',title:'获取秘钥'},
            {step:'04',title:'生成签名'},
            {step:'05',title:'启动项目'}
        ]};
    }

    render(){
        const sectionDocList = this.state.sectionDocList.map((sectionDocList,index)=>{
            return (
                <div className="item-div" key={`${sectionDocList.step}-${index}`}>
                    <div className="border-div"></div>
                    <div className="doc-list-item">
                        <div className="doc-item-icon">{sectionDocList.step}</div>
                        <div className="doc-item-content">{sectionDocList.title}</div>
                    </div>
                </div>
            );
        });
        return (
            <div id="sectionDoc" className="section-box">
                <h1>产品文档</h1>
                <div className="doc-list">
                    {sectionDocList}
                </div>
                <div className="doc-btn">
                    查看更多文档
                </div>
            </div>
        );
    }
}