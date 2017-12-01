/**
 * Created by MHC-PC on 2017/7/24.
 */
import React from 'react';
export default class Footer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className="footer">
            <div className="footer-box">
                <ul className="footer-list">
                    <li><a href="#"><h4>产品服务</h4></a></li>
                    <li><a href="#">服务1</a></li>
                    <li><a href="#">服务2</a></li>
                    <li><a href="#">服务3</a></li>
                    <li><a href="#">服务4</a></li>
                </ul>
                <ul className="footer-list">
                    <li><a href="#"><h4>产品服务</h4></a></li>
                    <li><a href="#">服务1</a></li>
                    <li><a href="#">服务2</a></li>
                    <li><a href="#">服务3</a></li>
                    <li><a href="#">服务4</a></li>
                </ul>
                <ul className="footer-list">
                    <li><a href="#"><h4>产品服务</h4></a></li>
                    <li><a href="#">服务1</a></li>
                    <li><a href="#">服务2</a></li>
                    <li><a href="#">服务3</a></li>
                    <li><a href="#">服务4</a></li>
                </ul>
                <ul className="footer-list footer-list-last">
                    <li><a href="#"><h4>产品服务</h4></a></li>
                    <li><a href="#">服务1</a></li>
                    <li><a href="#">服务2</a></li>
                    <li><a href="#">服务3</a></li>
                    <li><a href="#">服务4</a></li>
                </ul>
            </div>
        </div>
    }
}