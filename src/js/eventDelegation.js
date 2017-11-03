/**
* @name: eventDelegation
* @description: 事件委托
* @author: leechikit
* @update: 
*/

const eventDelegation = (() => {

    // 是否开启捕捉
    const ISCAPTURE = false;

    /**
    * 创建html结构
    *
    */
    function createHtml() {
        const content = `<div class="mod-box" id="outer" data-name="outer">
                            <div class="mod-box" data-name="inner1">
                                <div class="mod-box" id="inner2" data-name="inner2">
                                    <div class="mod-box" id="inner3" data-name="inner3">
                                    </div>
                                </div>
                            </div>
                        </div>`;
        document.body.innerHTML = content;
    }

    /**
    * 获取子节点
    *
    */
    function getChildNode(parentNode){
        let child = parentNode.firstChild;
        let result = null;
        while (child) {
            if(child.nodeType == 1){
                result = child;
                break;
            }else{
                child = child.nextSibling;
            }
        }
        return result;
    }

    /**
    * 点击outer事件
    *
    */
    function clickOuterHandle(event) {
        let target = event.target;
        let currTarget = event.currentTarget;
        console.log('delegation outer');
        console.log(event.eventPhase);
        while (target && currTarget !== target.parentNode) {
            if (target.id == 'inner3') {
                alert('click inner3');
                break;
            }
            target = target.parentNode;
        }
        // while (currTarget && target != currTarget.parentNode) {
        //     if (currTarget.id == 'inner2') {
        //         alert('click inner2');
        //         break;
        //     }
        //     currTarget = getChildNode(currTarget);
        // }
    }

    /**
    * 点击inner2事件
    *
    */
    function clickInner2Handle(event) {
        // event.stopPropagation();
        console.log('click inner2');
    }

    /**
    * 事件绑定
    *
    */
    function eventBind() {
        const outerEl = document.getElementById('outer');
        outerEl.addEventListener('click', clickOuterHandle, !ISCAPTURE);
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