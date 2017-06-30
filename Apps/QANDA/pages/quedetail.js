define(["../logic/quedetail","../components/commonCtl"],function(pluginClass,c){
    return {
        pluginClass:pluginClass,
        style:{
            backgroundColor:"#F2F3F4"
        },
        root:["page_content","sharePoplayer","selfActionPoplayer","bottomBar"],
        components:{
            page_content:{
              type:"view",
              style:{
                flex:1,
                overflowY:"auto",
                overflowX:"hidden",
                marginBottom:50
              },
              root:["QueWrapper","AnswerWrapper"]
            },
            bottomBar:{
              ref:true,
              type:"statusview",
              style:{
                position:"absolute",
                bottom:"0",
                left:0,
                width:"100%",
                height:50,
                borderTop:"1px solid #DCDCDC",
                backgroundColor:"#fff"
              },
              defaultKey:"answer_btn"
            },
            selfActionBar:{
              type:"repeat",
              ref:true,
              items:[{title:"删除",icon:"icomoon_e903",color:"#FF4E5B"},{title:"修改",icon:"icomoon_e904",color:c.mainColor},{title:"回答",icon:"icomoon_e900",color:c.mainColor}],
              root:["selfActionIcon"],
              style:{
                flex:1,
                alignItems:"center",
                justifyContent:"center"
              },
              itemStyle:{
                justifyContent:"center",
                flex:1,
                height:48
              },
              splitStyle:{
                borderLeft:"1px solid #eee",
                height:20
              },
            },
            selfActionIcon:{
              type:"icon",
              font_bind:"icon",
              text_bind:"title",
              textStyle:{
                fontSize:16,
                marginLeft:2
              },

              iconStyle:{
                fontSize:16
              },
              textStyle_bind:{
                color:"color"
              },
              iconStyle_bind:{
                color:"color"
              }
            },
            answer_btn:{
              type:"icon",
              text:"开始回答",
              style:{
                flex:1
              },
              ref:true,
              status:{
                modify:{
                  font:"icomoon_e904",
                  text:"修改回答"
                }
              },
              font:"icomoon_e900",
              iconStyle:{
                fontSize:18,
                color:c.mainColor
              },
              textStyle:{
                color:c.mainColor,
                marginLeft:3,
                fontSize:16
              }
            },
            AnswerWrapper:{
              type:"view",
              style:{
                borderTop:"1px solid #eee",
              },
              root:["answer_repeat"]
            },
            answer_repeat:{
              type:"repeat",
              ref:true,
              style:{
                flexDirection:"column",
              },
              root:["re_top_view","re_content_text","re_bottom_view"],
              itemStyle:{
                padding:"18 13 15 13",
                flexDirection:"column",
                backgroundColor:"#fff"
              },
              splitStyle:{
                borderTop:"1px solid #eee"
              },
              nodata:"answer_nodata"
            },
            re_bottom_view:{
              type:"view",
              style:{
                flexDirection:"row",
                justifyContent:"flex-end",
                marginTop:14
              },
              root:["re_answercount_icon","re_up_icon"]
            },
            re_answercount_icon:{
              type:"icon",
              ref:true,
              selectedClassName:"qaa_upicon_selected",
              font:"icomoon_e912",
              text:"0",
              text_bind:"commentNum",
              textStyle:c.rowIconTextStyle,
              iconStyle:c.rowIconIconStyle,
              style:c.rowIconStyle(false),
            },
            re_up_icon:{
              type:"icon",
              font:"icomoon_e90c",
              text:"0",
              activeClassName:"qaa_upicon_active",
              selectedClassName:"qaa_upicon_selected",
              text_bind:"likes",
              textStyle:c.rowIconTextStyle,
              iconStyle:c.rowIconIconStyle,
              style:c.rowIconStyle(true)
            },
            re_content_text:{
              type:"ContentLabelCtl",
              needExpand:true,
              text_bind:"answerText",
              offsetCount:7,
              baseWidth:345,
              rowCount:5,

              collapseStyle:{
              },
              text:"回答内容",
              style:{
                fontSize:14,
                marginTop:18,
                lineHeight:"20",
                color:c.descColor
              },
            },
            re_top_view:{
              type:"view",
              style:{
                flexDirection:"row",
                alignItems:"center"
              },
              root:["re_header","re_nametime","re_self_icon"]
            },
            re_header:{
              type:"image",
              src_bind:"headImgUrl",
              style:{
                w:40,
                borderRadius:'100%',
                backgroundColor:"#eee"
              }
            },
            re_nametime:{
              type:"view",
              style:{
                flex:1,
                marginLeft:10,
                justifyContent:"center"
              },
              root:["re_name","re_time"]
            },
            re_name:{
              type:"text",
              text:"用户",
              text_bind:"userName",
              style:{
                color:c.titleColor,
                fontSize:16
              }
            },
            re_time:{
              type:"text",
              text_bind:"createTime",
              text:"2012-02-12",
              style:{
                color:c.seTitleColor,
                fontSize:12,
                marginTop:4
              }
            },
            re_self_icon:{
              type:"icon",
              font:"icomoon_e911",
              iconStyle:{
                fontSize:21,
                color:c.mainColor
              },
              style:{
                width:30,
                display:"none"
              }
            },
            answer_nodata:{
              type:"text",
              className:"displaynone",
              style:{
                margin:"40% auto",
                textAlign:"center",
                width:"210",
                fontSize:15,
                color:c.seTitleColor
              },
              text:"暂时没有用户回答，有新的回答 会及时在我的提问中通知您"
            },
            QueWrapper:{
              type:"view",
              style:{
                backgroundColor:"#fff",
                padding:"15 0 13 15",
              },
              root:["QueTitle","Que_Desc","secondWrapper","QueLabelWrapper"]
            },
            QueTitle:{
              type:"icon",
              ref:true,
              text:"问题标题",
              font:"icomoon_e902",
              numberofline:3,
              style:{
                paddingRight:15,
                justifyContent:"flex-start",
                alignItems:"flex-start"
              },
              textStyle:{
                fontSize:16,
                marginLeft:5,
                color:c.titleColor,
                width: "100%",
                paddingRight: "30"
              },
              iconStyle:{
                color:c.mainColor,
                fontSize:18
              }
            },
            Que_Desc:{
              type:"ContentLabelCtl",
              offsetCount:9,
              expandBtnInLine:true,
              baseWidth:345,
              expandStyle:{
                bottom:9,
              },
              collapseStyle:{
              },
              ref:true,
              text:"",
              style:{
                marginRight:15,
                fontSize:15,
                lineHeight:21,
                paddingBottom:5,
                color:c.descColor,
                marginTop:11
              },
              preTextStyle:{
                color:c.seTitleColor
              },
              preText:"描述:"
            },
            secondWrapper:{
              type:"view",
              style:{
                flexDirection:"row",
                marginTop:10
              },
              root:["Que_username","Que_time","Que_answercount"]
            },
            Que_username:{
              type:"text",
              ref:true,
              text:"用户名称",
              style:{
                fontSize:12,
                color:c.seTitleColor
              }
            },
            Que_time:{
              type:"text",
              ref:true,
              text:"时间",
              style:{
                fontSize:12,
                marginLeft:8,
                color:c.seTitleColor
              }
            },
            Que_answercount:{
              type:"text",
              text:"0",
              ref:true,
              nextText:"个回答",
              style:{
                fontSize:12,
                color:c.descColor,
                marginLeft:20,
              },
              nextTextStyle:{
                fontSize:12,
                color:c.seTitleColor

              }
            },

            QueLabelWrapper:{
              type:"view",
              ref:true,
              style:{
                flexDirection:"row",
                borderTop:"1px solid #eee",
                marginTop:14,
                paddingRight:15,
                paddingBottom:2,
                paddingTop:10,
              },
              root:["que_mark_repeat","que_mark_modifyicon"]
            },
            que_mark_modifyicon:{
              type:"icon",
              ref:true,
              text:"修改标签",
              font:"icomoon_e913",
              className:"displaynone",
              textPos:"left",
              style:{
                width:90,
                justifyContent:"flex-end",
              },
              textStyle:{
                fontSize:15,
                color:c.descColor,
              },
              iconStyle:{
                color:"#ccc",
                fontSize:13,
                marginLeft:4
              }
            },

            que_mark_repeat:{
              type:"repeat",
              ref:true,
              style:{
                flex:1,
                flexWrap:"wrap"
              },
              items_bind:"label",
              itemStyle:{
                marginRight:5,
                marginTop:5,
              },
              root:["que_mark_text"]
            },
            que_mark_text:{
              type:"text",
              text_bind:"title",
              style:c.markLabelStyle
            },


            //self action poplayer
            selfActionPoplayer:{
              type:"poplayer",
              mode:"bottom",
              style:{
                backgroundColor:"#f2f3f4",
                flexDirection:"column",
                width:"100%"
              },
              root:["ModifyAnswerIcon","DelteModifyIcon","cancelSelfActionIcon"]
            },
            ModifyAnswerIcon:{
              type:"icon",
              style:{
                backgroundColor:"#fff",
                height:50,
              },
              textStyle:{
                fontSize:16,
                color:c.titleColor,
              },
              text:"修改答案"
            },
            DelteModifyIcon:{
              type:"icon",
              style:{
                backgroundColor:"#fff",
                height:50,
                borderTop:"1px solid #eee"
              },
              textStyle:{
                fontSize:16,
                color:"rgb(255,78,91)"
              },
              text:"删除答案"
            },
            cancelSelfActionIcon:{
              type:"icon",
              textStyle:{
                fontSize:16,
                color:c.titleColor,
              },
              style:{
                marginTop:11,
                backgroundColor:"#fff",
                height:50,
              },
              text:"取消"
            },
            //end self action poplayer


            // start pop
            sharePoplayer:{
              type:"poplayer",
              root:["shareTitleWrapper","shareMidWrapper","shareCancelIcon"],
              mode:"bottom",
              bkCoverStyle:{
                backgroundColor:"rgba(0, 0, 0, 0.63)"
              },
              style:{
                height:185,
                width:"100%",
                backgroundColor:"#f0f4f6",
                flexDirection:"column"
              }
            },
            shareTitleWrapper:{
              type:"view",
              style:{
                height:28,
                justifyContent:"center",
                alignItems:"center"
              },
              root:["shareTitle"]
            },
            shareMidWrapper:{
              type:"view",
              style:{
                flex:1,
              },
              root:["shareRepeat"]
            },
            shareCancelIcon:{
              type:"icon",
              text:"取消",
              style:{
                height:50,
                backgroundColor:"#fff"
              },
              textStyle:{
                fontSize:14,
                color:"#292f33"
              }
            },
            shareTitle:{
              type:"text",
              text:"－分享给朋友－",
              style:{
                color:"#8899a6",
                fontSize:12
              }
            },
            shareRepeat:{
              type:"repeat",
              items:[
                {"title":"空间",src:"./imgs/LOGO@3x.png",icon:"icomoon_e907",color:"rgb(250,196,30)"},
                {"title":"微信",src:"./imgs/wechat@3x.png",color:"rgb(4,197,116)"},
                {"title":"朋友圈",src:"./imgs/pyquan@3x.png",icon:"icomoon_e908",color:"rgb(159,119,241)"},
                {"title":"QQ",src:"./imgs/QQ@3x.png",icon:"icomoon_e909",color:"rgb(24,215,254)"},
              ],
              style:{
                flexWrap:"wrap",
                margin:"0 auto",
                width:350,
              },
              itemStyle:{
                width:"25%",
                height:90,
                alignItems:"center",
                justifyContent:"center"
              },
              root:["shareIcon"]
            },
            shareIcon:{
              type:"icon",
              text:"分享",
              text_bind:"title",
              src_bind:"src",
              iconStyle_bind:{
                color:"color"
              },
              iconStyle:{
                w:58,
                display:"flex",
                fontSize:30,
                justifyContent:"center",
                alignItems:"center",
                backgroundColor:"#fff",
                borderRadius:"100%",
              },
              textStyle:{
                marginTop:8,
                color:"#292f33"
              },
              font:"icomoon_e914",
              textPos:"bottom"
            }

            // end pop




        }
    };
});