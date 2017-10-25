/**
* @name: eventDelegation
* @description: 事件委托
* @author: leechikit
* @update: 
*/

const eventDelegation = (() => {

    // 是否开启捕捉
    const ISCAPTURE = false;
    // 是否清楚内容
    let isClear = false;

    /**
    * 创建html结构
    *
    */
    function createHtml() {
        const content = `<div class="mod-box" id="outer" data-name="outer">
                            <div class="mod-box" data-name="inner1">
                                <div class="mod-box" id="inner2" data-name="inner2">
                                </div>
                            </div>
                        </div>`;
        document.body.innerHTML = content;
    }

    /**
    * 点击outer事件
    *
    */
    function clickOuterHandle(event) {
        const target = event.target;
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
        console.log(`outer target：${target.getAttribute('data-name')} ${level}`);
    }

    /**
    * 点击inner2事件
    *
    */
    function clickInner2Handle(event){
        event.stopPropagation();
        const target = event.target;
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
        console.log(`inner target：${target.getAttribute('data-name')} ${level}`);
    }

    /**
    * 事件绑定
    *
    */
    function eventBind() {
        const outerEl = document.getElementById('outer');
        outerEl.addEventListener('click', clickOuterHandle, ISCAPTURE);

        const inner2El = document.getElementById('inner2');
        inner2El.addEventListener('click', clickInner2Handle, ISCAPTURE);
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

export default eventDelegation;