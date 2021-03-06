define(["../logic/comment","../components/commonCtl"],function(pluginClass,c){
    return {
        pluginClass:pluginClass,
        style:{
            backgroundColor:"#f0f4f6"
        },
        root:["page_content"],
        components:{
            page_content:{
              type:"view",
              style:{
                flex:1,
                paddingBottom:40,
              },
              root:["comment_textarea","splitLine1"]
            },
             splitLine1:{
              type:"view",
              className:"icomoon_splitline",
            },
            comment_textarea:{
              type:"textarea",
              placeholder:"评论",
              style:{
                height:200,
                paddingLeft:15,
                fontSize:15,
                paddingTop:15,
              },
            },

        }
    };
});
