/**
 * Created by MHC-PC on 2017/8/2.
 */
import React from 'react';
import B1 from 'img/b3.png';
import B2 from 'img/b3.png';
import B3 from 'img/b3.png';
import B4 from 'img/b3.png';
export class Section06 extends React.Component{
    constructor(props){
        super(props);
        this.state={section06List:[
            {title:'民生',img:B1},
            {title:'民生',img:B2},
            {title:'民生',img:B3},
            {title:'民生',img:B4}
        ]};
    }

    render(){
        const section06List = this.state.section06List.map((section06List,index)=>{
            return (
                <div className="section06-item" style={{background:`url(${section06List.img})`}} key={`${section06List.title}-${index}`}>
                </div>
            );
        });
        return(
            <div id="section06" className="section-box">
                <h1>同业合作</h1>
                <div className="section06-box">
                    {section06List}
                </div>
            </div>
        );
    }
}
