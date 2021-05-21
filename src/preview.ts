
var editingState = 'view';

function shPreviewEditOpen() {
    console.log("shPreviewEditOpen");
    shCreateModalWindow();

}

function shCreateModalWindow() {
    var mainDiv: any = document.createElement('div');
    mainDiv.id = "mainDiv123";
    //mainDiv.className = 'region-edit-div modal';
    mainDiv.className = 'sh-modal';

    var modalContent = document.createElement('div');
    modalContent.className = 'sh-modal-content';
    modalContent.id = 'modalContent123';
    var modalDiv = document.createElement('div');
    var modalSubDiv = document.createElement('div');
    modalSubDiv.className = 'region-edit-modal-subdiv sh-row';
    var modalTitle = document.createElement('div');
    modalTitle.className = 'region-edit-modal-title sh-col';

    var modalTitleImage = document.createElement('img');
    modalTitleImage.setAttribute("style", "width: 20px;height: 20px;margin-right: 4px;");
    modalTitleImage.src = "/preview/img/content.jpg";

    var modalTitleText = document.createElement('span');
    modalTitleText.innerHTML = 'Title';

    modalTitle.appendChild(modalTitleImage);
    modalTitle.appendChild(modalTitleText);
    var modalWindowButton = document.createElement('div');
    modalWindowButton.id = 'modalWindow123';
    modalWindowButton.className = 'region-edit-modal-window-button sh-col';
    modalTitleImage.setAttribute("style", 'padding-right: 10px;');
    modalWindowButton.innerHTML = "<img src='/preview/img/window-maximize.png'>";
    modalWindowButton.setAttribute("onclick", "shPreviewEditMaximize()");


    var modalCloseButton = document.createElement('div');
    modalCloseButton.className = 'region-edit-modal-close-button sh-col'
    modalCloseButton.innerHTML = '&times;';
    modalCloseButton.setAttribute("onclick", "shPreviewEditClose()");
    modalSubDiv.appendChild(modalTitle);
    modalSubDiv.appendChild(modalWindowButton);
    modalSubDiv.appendChild(modalCloseButton);
    modalDiv.appendChild(modalSubDiv);
    var iframe = document.createElement('iframe');
    iframe.src = "http://localhost:2710/content#!/modal/post/type/301a6645-a3b2-4644-b7c6-ec6554aef8d1/post/ff13a53f-9134-4cca-906c-f7c6ea0470f6";
    //iframe.src = "/child.html";
    iframe.className = 'region-edit-iframe';

    modalContent.appendChild(modalDiv);
    modalContent.appendChild(iframe);
    mainDiv.appendChild(modalContent);
    document.body.appendChild(mainDiv);
    mainDiv.scrollIntoView();
}
function shPreviewEditClose() {
    console.log("shPreviewEditClose");
    var mainDiv = document.getElementById("mainDiv123");
    if (mainDiv)
        mainDiv.remove();

}
function shPreviewSettings() {
    console.log("shPreviewSettings");
}
function collapseMenu() {
    console.log("collapseMenu");
    var footerMenu = document.getElementById('shfootermenu');
    if (footerMenu) {
        var left = footerMenu.style.left;
        console.log(left);
        if (left == '0px') {
            console.log("0px");
            footerMenu.setAttribute("style", 'animation-duration: 3s;animation-name: menuCollapse;left:100%');
        } else {
            console.log("else 0px");
            footerMenu.setAttribute("style", 'animation-duration: 3s;animation-name: menuExpand;left:0px');
        }
    }
}

function shPreviewEditMaximize() {
    var mainDiv = document.getElementById('mainDiv123');
    var modalContent = document.getElementById('modalContent123');
    if (mainDiv)
        mainDiv.setAttribute("style", 'padding-top:0px');
    if (modalContent)
        modalContent.setAttribute("style", 'width: 100%;height: 100%;');
    var modalWindowButton = document.getElementById('modalWindow123');
    if (modalWindowButton) {
        modalWindowButton.innerHTML = "<img src='/preview/img/window-unmaximize.png'>";
        modalWindowButton.setAttribute("onclick", "shPreviewEditUnMaximize()");
    }
}

function shPreviewEditUnMaximize() {
    var mainDiv = document.getElementById('mainDiv123');
    var modalContent = document.getElementById('modalContent123');
    if (mainDiv)
        mainDiv.setAttribute("style", 'padding-top:100px');
    if (modalContent)
        modalContent.setAttribute("style", 'width: 80%;height: 90%;');
    var modalWindowButton = document.getElementById('modalWindow123');
    if (modalWindowButton) {
        modalWindowButton.innerHTML = "<img src='/preview/img/window-maximize.png'>";
        modalWindowButton.setAttribute("onclick", "shPreviewEditMaximize()");
    }
}

function shPreviewPageMenu() {
    var shMenuSections = document.getElementById('shMenuSections');
    if (shMenuSections) {
        shMenuSections.innerHTML = `
    <div class="sh-block sh-button" onclick="shPreviewMainMenu()">&lsaquo; Page</div>
    <div class="sh-block sh-menuItem sh-sub-menu-item-main" onclick="shPreviewComponentList()" style="position:relative">Components
    <div class="sh-sub-menu-item">
    <ul style="list-style-type: none;padding:10px;text-align:left">
    <li id="text_component" style="margin-bottom: 10px;" draggable="true" ondragstart="drag(event)"><img src="/preview/img/text_component.png"/> Text</li>
    <li id="image_component" style="margin-bottom: 10px;" draggable="true" ondragstart="drag(event)"><img src="/preview/img/image_component.png"/> Image</li>
    <li id="list_component" style="margin-bottom: 10px;" draggable="true" ondragstart="drag(event)"><img src="/preview/img/list_component.png"/> List</li>
    </ul>
    </div></div>
    `;
        addRegionMenu();
        addComponentMenu();
    }
}

function addRegionMenu() {
    var regions = document.getElementsByClassName('regionMenu');
    Array.prototype.forEach.call(regions, function (region) {
        region.innerHTML = `<div style="float: right;display: inline-block;">
        <div style="display: flex;">
            <div
            style="display: flex;padding-top: 8px;background-color: ghostwhite;border-style: solid;border-width: 1px;border-color: gray;padding-left: 4px;height: 30px;border-radius: 5px;">
                <div class="preview-button preview-small-button preview-icon-settings"></div>
            </div>
        </div>
    </div>`;
    });
}
function addComponentMenu() {
    var components = document.getElementsByClassName('sh-component-menu');
    Array.prototype.forEach.call(components, function (component) {
        var parentId = component.parentNode.id;
        var html = `<div style="float: right;display: inline-block;">
        <div style="display: flex;">
        <div style="display: flex;padding-top: 7px;background-color: ghostwhite;border-style: solid;border-width: 1px;border-color: gray;padding-left: 6px;">
            <div class="preview-button preview-small-button preview-icon-pencil" onClick="shPreviewEditOpen('{{parentId}}');"></div>
            <div class="preview-button preview-small-button preview-icon-delete" onClick="shPreviewDeleteComponent('{{parentId}}');"></div>
        </div>
        <div id="text_component" style="display: flex;padding: 0px 4px;" class="preview-drag-drop-button-div" draggable="true" ondragstart="drag(event)">
            <div class="preview-drag-drop-button"></div>
        </div>
    </div>
        </div>`
        html = html.replace("{{parentId}}/g", parentId.trim());
        component.innerHTML = html;
    });
}

function shPreviewDeleteComponent() {

}

function guidGenerator() {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

function shPreviewDesignMenu() {
    var shMenuSections = document.getElementById('shMenuSections');
    if (shMenuSections)
    shMenuSections.innerHTML = '<div class="sh-block sh-button" onclick="shPreviewMainMenu()">&lsaquo; Design</div>';
}

function shPreviewMainMenu() {
    var shMenuSections = document.getElementById('shMenuSections');
    if (shMenuSections)
    shMenuSections.innerHTML = `
    <div class="sh-block sh-button" onclick="shPreviewPageMenu()">Page</div>
    <div class="sh-block sh-button" onclick="shPreviewDesignMenu()">Design</div>
    `;

    var regions = document.getElementsByClassName('regionMenu');
    Array.prototype.forEach.call(regions, function (region) {
        region.innerHTML = '';
    });
}

function allowDrop(ev: { preventDefault: () => void; }) {
    ev.preventDefault();
}

function drag(ev: { dataTransfer: { setData: (arg0: string, arg1: any) => void; }; target: { id: any; }; }) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev: { preventDefault: () => void; dataTransfer: { getData: (arg0: string) => any; }; target: { appendChild: (arg0: HTMLDivElement) => void; }; }) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    if (data === 'text_component') {
        var text = document.createElement('div');
        text.id = guidGenerator();
        text.className = "sh-component";
        text.innerHTML = `
        <div class="sh-component-menu"></div>
        <input type="text" value="hello world"></input>
        `;
        ev.target.appendChild(text);
        addComponentMenu();
    }
    else if (data === 'image_component') {
        var text = document.createElement('div');
        text.innerHTML = `
        <div class="sh-component">
        <div class="sh-component-menu"></div>
        <img src="/preview/img/image_sample.png" style="width:10%;height:10%">
        </div>
        `;
        ev.target.appendChild(text);
        addComponentMenu();
    }
    else {
        var text = document.createElement('div');
        text.id = guidGenerator();
        text.innerHTML = `<div class="sh-component">
        <div class="sh-component-menu"></div>
        <input type="text" value="component_list"></input>
        </div>
        `;
        ev.target.appendChild(text);
        addComponentMenu();
    }
}