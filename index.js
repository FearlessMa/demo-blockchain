/**
 * Created by MHC on 2017/7/23.
 */
import React from 'react';
import ReactDom from 'react-dom';
//import  'http://at.alicdn.com/t/font_gz3v7ti56kdibe29.css';
import  'normalize.css';
import  'scss/font.scss';
import  'scss/main.scss';

/*组件引用*/
import Nav from 'js/nav';
import Header from 'js/header';
import Section from 'js/section';
import Footer from 'js/footer';

ReactDom.render(
    <div>
      <Nav/>
      <Header/>
      <Section/>
      <Footer/>
    </div>
    ,
  document.getElementById('app')
);