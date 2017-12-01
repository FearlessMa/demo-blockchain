/**
 * Created by MHC on 2017/7/23.
 * nav组件
 */
import React from 'react';
export default class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state ={navList: [{href:"#",itemName:'首页'},
        {href:"section01",itemName:'平台功能'},
        {href:"section04",itemName:'场景案例'},
        {href:"section05",itemName:'区块链特性'},
        {href:"section06",itemName:'同业合作'},
        {href:"sectionDoc",itemName:'产品文档'}
      ]
    };
    this.handelClick=this.handelClick.bind(this);
  }
  render() {
    const navListDOM = this.state.navList.map((navList,index)=>{
      const itemProps = {
        href: navList.href,
        onClick: (e) => {
          const id = navList.href;
          this.handelClick(e, id);
        }
      };
      return (<li key={`${navList.itemName}-${index}`}>
        <a {...itemProps}>{navList.itemName}</a>
      </li>)
    });
    return  (
        <nav className="nav-bar">
          <div className="div-nav">
            <div className="logo">区块链开放平台</div>
            <ul className="nav-list">
              {navListDOM}
            </ul>
            <div className="login">
              <a href="#">注册</a>
              <a href="#">登陆</a>
            </div>
          </div>
        </nav>
    );
  }
  handelClick(e, id){
          e.preventDefault();
              var top = 0;
              if(id&&id!='#'){
                  //获得锚点目标
                  var elemAnchor=document.getElementById(id);
                  //锚点目标距离顶部距离
                   top = elemAnchor.offsetTop;
              }
              //console.log(top);
              //滚动条当前位置
              var currentPosition= document.body.scrollTop;
              //动画执行的总步数30
              const duration =30;
              //计算duration时间内滚动条需要移动距离 speed可正可负
              const speed =(top-currentPosition)/duration;
              //设置定时器
                var timer=setInterval(function(){
					//移动方法
                    scrollTo(0,currentPosition);
					//滚动条移动的位置
                    currentPosition+=speed;
					//if速度大于0 
                    if(speed>=0){
                        if(currentPosition>=top){
                          clearInterval(timer);
                        }
                    }
                  if(speed<0){
                        if(currentPosition< top){
                          clearInterval(timer);
                        }
                    }
                },10);
  }
}
