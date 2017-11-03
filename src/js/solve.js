/**
* @name: solve
* @description: 解决
* @author: leechikit
* @update: 
*/

const solve = (() => {

    /**
    * 创建html结构
    *
    */
    function createHtml() {
        const content = `<div class="solve">
<div class="event"></div>
<div class="method" id="method1">function clickOuterHandle(event) {
    const currTarget = event.currentTarget;
    let target = event.target;
    while (target && target !== currTarget) {
        if (target.id == 'inner3') {
<p class="s-highline">            event.stopPropagation();</p>            alert('click inner3');
            break;
        }
        target = target.parentNode;
    }
}
</div>
<div class="method" id="method2">function clickInner1Handle(event) {
    const currTarget = event.currentTarget;
    let target = event.target;
    while (target && target !== currTarget) {
        if (target.id == 'inner2') {
<p class="s-highline">            event.stopPropagation();</p>            alert('click inner2');
            break;
        }
        target = target.parentNode;
    }
}
</div>
                        </div>`;
        document.body.innerHTML = content;
    }

    /**
    * 初始化
    *
    */
    function init() {
        createHtml();
    }

    return {
        init
    }

})();

export default solve;