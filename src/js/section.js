/**
 * Created by MHC-PC on 2017/7/24.
 */
import React from 'react';
import {Section01} from 'js/sectionTpl/Section01';
import {Section04} from 'js/sectionTpl/section04';
import {Section05} from 'js/sectionTpl/section05';
import {Section06} from 'js/sectionTpl/section06';
import {SectionDoc} from 'js/sectionTpl/sectionDoc';

export default class Section extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="section">
                <Section01/>
                <Section04/>
                <Section05/>
                <Section06/>
                <SectionDoc/>
            </div>);
    }
}