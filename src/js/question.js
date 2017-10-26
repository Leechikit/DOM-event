/**
* @name: question
* @description: 问题
* @author: leechikit
* @update: 
*/

const question = (() => {

    // 是否开启捕捉
    const ISCAPTURE = true;
    // 是否清楚内容
    let isClear = false;

    /**
    * 创建html结构
    *
    */
    function createHtml() {
        const content = `<div class="mod-box" id="outer" data-name="outer">
                            <div class="mod-box" id="inner1" data-name="inner1">
                                <div class="mod-box" id="inner2" data-name="inner2">
                                    <div class="mod-box" id="inner3" data-name="inner3">
                                    </div>
                                </div>
                            </div>
                        </div>`;
        document.body.innerHTML = content;
    }

    /**
    * 委托事件
    *
    * @param: {type} name description
    * @return: {type} description
    */
    function delegation({ elem, type, selector, listener, useCapture }) {
        elem.addEventListener(type, event => {
            let target = event.target;
            console.log('delegation outer');
            while (target.id != 'inner2') {
                if (target === elem) {
                    target = null;
                    break;
                }
                target = target.parentNode;
            }
            if (target) {
                console.log('click inner2');
            }
        }, useCapture);
    }

    /**
    * 点击outer事件
    *
    */
    function clickOuterHandle(event) {
        let target = event.target;
        const currTarget = event.currentTarget;
        console.log('delegation outer');
        while (target && target !== currTarget) {
            if (target.id == 'inner3') {
                //  event.stopPropagation();
                console.log('click inner3');
                break;
            }
            target = target.parentNode;
        }
    }

    /**
    * 点击inner1事件
    *
    */
    function clickInner1Handle(event) {

        let target = event.target;
        const currTarget = event.currentTarget;
        console.log('delegation inner1');
        while (target && target !== currTarget) {
            if (target.id == 'inner2') {
                 event.stopPropagation();
                console.log('click inner2');
                break;
            }
            target = target.parentNode;
        }
    }

    /**
    * 事件绑定
    *
    */
    function eventBind() {
        const outerEl = document.getElementById('outer');
        outerEl.addEventListener('click', clickOuterHandle, ISCAPTURE);

        const inner1El = document.getElementById('inner1');
        inner1El.addEventListener('click', clickInner1Handle, ISCAPTURE);

        // $('#outer').on('click', '#inner2', event => {
        //     // event.stopPropagation();
        //     console.log('click inner2');
        // });

        // $('#inner1').on('click', '#inner3', event => {
        //     event.stopPropagation();            
        //     console.log('click inner3');
        // });
    }

    /**
    * 初始化
    *
    */
    function init() {
        createHtml();
        eventBind();
    }

    return {
        init
    }

})();

export default question;