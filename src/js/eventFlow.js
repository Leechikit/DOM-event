/**
* @name: eventFlow
* @description: DOM事件流
* @author: leechikit
* @update: 
*/

const eventFlow = (() => {
    
    // 是否开启捕捉
    const ISCAPTURE = false;
    // 是否清楚内容
    let isClear = false;

    /**
    * 创建html结构
    *
    */
    function createHtml() {
        const content = `<div class="mod-box" data-name="outer">
                            <div class="mod-box" data-name="inner1">
                                <div class="mod-box" data-name="inner2">
                                </div>
                            </div>
                        </div>
                        <div id="info"></div>`;
        document.body.innerHTML = content;
    }

    /**
    * 点击事件
    *
    */
    function clickHandle(event) {
        const infoEl = document.getElementById('info');
        const target = event.currentTarget;
        let level = '';
        switch (event.eventPhase) {
            case 0:
                level = 'none';
                break;
            case 1:
                level = 'capturing';
                break;
            case 2:
                level = 'target';
                break;
            case 3:
                level = 'bubbling';
                break;
            default:
                level = 'error';
                break;
        }
        const result = `${target.getAttribute('data-name')} eventPhase：${level}\n`;
        if(isClear){
            infoEl.innerHTML = '';
            isClear = false;
        }
        infoEl.innerHTML += result;
    }

    /**
    * 事件绑定
    *
    */
    function eventBind() {
        const boxEls = document.getElementsByClassName('mod-box');
        for (let i = 0, len = boxEls.length; i < len; i++) {
            let boxEl = boxEls[i];
            
            if (ISCAPTURE) {
                boxEl.addEventListener('click', clickHandle, true);
            }else{
                boxEl.addEventListener('click', clickHandle, false);
            }
            boxEl.addEventListener('mousemove', event => {
                isClear = true;
            });
        }

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

export default eventFlow;