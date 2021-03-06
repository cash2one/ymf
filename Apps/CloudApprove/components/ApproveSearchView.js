/**
 * Created by Gin on 17/2/20.
 */
define(["utils", "base"], function (utils, baseClass) {
    var Component = function (config) {
        var _this = this;


        Component.baseConstructor.call(this, config);
        var className = "displayflex yy-seachview yy-fd-column";
        var iconStyle = this.config.iconStyle;
        var iconItemStyle = this.config.iconItemStyle;
        var searchInputStyle = this.config.searchInputStyle;
        this.$el.addClass(className);

        var font = this.config.font||"";
        var font_arr = font.split("_");
        var font_family,font_code;
        font_family = font_arr[0];
        font_code = font_arr[1];
        utils.css(this.$el,{fontFamily:font_family});
        this.iconDom = $('<i class="yy-icon-code" data-code="'+font_code+'" data-icon="&#x'+font_code+';"></i>');

        if(iconStyle){
            utils.css(this.iconDom,iconStyle);
        }
        this.searchBtn = $('<div class="displayflex yy-icon yy-ai-center yy-jc-center"></div>');
        if(iconItemStyle){
            utils.css(this.searchBtn,iconItemStyle);
        }
        this.searchBtn.bind("click", function (event) {
            event.stopPropagation();
            _this._click();

        });

        this.searchBar = $('<div style="background-color: #00b412; height: 33px;position: absolute;top: 0;left: 0;bottom: 0px;right: 0;z-index: 11; display: none;"></div>');
        if(searchInputStyle){
            utils.css(this.searchBar,searchInputStyle);
        }
        this.searchBar.bind("click", function (event) {
            event.stopPropagation();
        });
        this.cancelBtnWidth = utils.getRealWidth(60);
        // this.inputWidth = utils.getRealWidth(355);
        // var inputMarginLeft = utils.getRealWidth(10);
        var inputHeight = utils.getRealHeight(30);
        // var offset = utils.getRealHeight(10);
        // var inputPaddingLeft = utils.getRealWidth(30);
//         this.inputFocusWidth = this.inputWidth - this.cancelBtnWidth + offset;
//         this.searchBarClassName = "yy-sv-bar yy-fd-row displayflex yy-ai-center";
//         this.searchBar = $("<div class='" + this.searchBarClassName + " yy-sv-defalut'></div>");
//         if (this.config.searchBarStyle) {
//             if (!this.config.searchBarStyle["paddingLeft"]) {
//                 this.config.searchBarStyle["paddingLeft"] = utils.getRealWidth(10);
//             }
//             if (!this.config.searchBarStyle["paddingRight"]) {
//                 this.config.searchBarStyle["paddingRight"] = utils.getRealWidth(10);
//             }
//             utils.css(this.searchBar, this.config.searchBarStyle);
//         }
//
//         this.form = $("<form class='yy-sv-form' style='margin-left:" + inputMarginLeft + "px;height:" + inputHeight + "px;width:" + this.inputWidth + "px'></form>");
//         var formdiv = $("<div class='yy-sv-input-div' style=''></div>");
//         this.clearBtn = $("<div class='yy-sv-clear yy-icommon displaynone' style='height:" + inputHeight + "px;width:" + inputHeight + "px'></div>");
//         var placeholder = this.config.placeholder || "搜索";
//         this.input = $("<input style='font-size:" + utils.fontSize(14) + "px;padding-left:" + inputPaddingLeft + "px' placeholder='" + placeholder + "' type='search'/>");
//
//         this.input.bind("focus", function () {
//             _this._focus();
//         });
//
//         this.input.bind("input", function () {
//             _this.inputChange();
//         });


        // this.clearBtn.bind("click", function () {
        //     _this.input.val("");
        //     _this.input.focus();
        // });
        //
        // formdiv.append(this.clearBtn).append(this.input);
        // this.form.append(formdiv);
        //
        //
        // this.form.bind("submit", function (e) {
        //     e.preventDefault();
        //     return false;
        // });
        var cancelBtn = $("<div style='width:" + this.cancelBtnWidth + "px;height:" + inputHeight + "px;font-size:" + utils.fontSize(16) + "px' class='yy-sv-cancel displayflex yy-jc-center yy-ai-center'>取消</div>");
        //
        if (this.config.cancelBtnStyle) {
            utils.css(cancelBtn, this.config.cancelBtnStyle);
        }
        //
        // var cancelMethodName = this.config.comKey + "_cancel";
        // var cancelMethod = this.pageview.plugin[cancelMethodName];
        // cancelBtn.bind("click", function () {
        //     _this._cancelSearch();
        //     if (cancelMethod) {
        //         cancelMethod.call(_this.pageview.plugin, _this, {value: _this.input.val()});
        //     }
        // });
        //
        // var changeMethodName = this.config.comKey + "_search";
        // var changeMethod = this.pageview.plugin[changeMethodName];
        // this.input.bind("keydown", function (e) {
        //     if (e.keyCode === 13) {
        //         // _this._cancelSearch();
        //         _this.input.blur();
        //         if (changeMethod) {
        //             changeMethod.call(_this.pageview.plugin, _this, {value: _this.input.val()});
        //         }
        //     }
        // });
        //
        //
        // this.searchBar.append(this.form).append(cancelBtn);

        this.searchBtn.append(this.iconDom);


        this.$el.append(this.searchBar);
        this.$el.append(this.searchBtn);


    }

    utils.extends(Component, baseClass);
    Component.prototype.inputChange = function (noTimeout) {
        var _this = this;
        var val = this.input.val();
        if (val == "") {
            this.clearBtn.addClass("displaynone");
        } else {
            this.clearBtn.removeClass("displaynone");
        }
    };
    Component.prototype._cancelSearch = function () {
        this.form.css({"width": (this.inputWidth) + "px"});
        this.clearBtn.addClass("displaynone");
        this.searchBar[0].className = this.searchBarClassName + " yy-sv-defalut";
        if (this.defaultComyWrapper) {
            this.defaultComyWrapper.removeClass("displaynone");
            this.resultComWrapper && this.resultComWrapper.addClass("displaynone");
        }
    };

    Component.prototype._focus = function () {

        this.form.css({"width": this.inputFocusWidth + "px"});
        if (this.input.val().length > 0) {
            this.clearBtn.removeClass("displaynone");
        }
        this.searchBar[0].className = this.searchBarClassName + " yy-sv-active";
        if (this.resultComWrapper) {
            this.resultComWrapper.removeClass("displaynone");
            this.defaultComyWrapper && this.defaultComyWrapper.addClass("displaynone");
        }
    };
    Component.prototype._click = function () {
        this.searchBar.show();
        // this.form.css({"width": this.inputFocusWidth + "px"});
        // if (this.input.val().length > 0) {
        //     this.clearBtn.removeClass("displaynone");
        // }
        // this.searchBar[0].className = this.searchBarClassName + " yy-sv-active";
        // if (this.resultComWrapper) {
        //     this.resultComWrapper.removeClass("displaynone");
        //     this.defaultComyWrapper && this.defaultComyWrapper.addClass("displaynone");
        // }
        return this.iconDom;
    };
    return Component;
});
