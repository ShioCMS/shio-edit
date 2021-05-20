
var editingState = 'view';

function shPreviewEditOpen() {
    console.log("shPreviewEditOpen");

    var mainDiv = document.createElement('div');
    mainDiv.id = "mainDiv123";
    //mainDiv.className = 'region-edit-div modal';
    mainDiv.className = 'sh-modal';

    var modalContent = document.createElement('div');
    modalContent.className = 'sh-modal-content';
    modalContent.id = 'modalContent123';
    modalDiv = document.createElement('div');
    modalSubDiv = document.createElement('div');
    modalSubDiv.className = 'region-edit-modal-subdiv sh-row';
    modalTitle = document.createElement('div');
    modalTitle.className = 'region-edit-modal-title sh-col';

    modalTitleImage = document.createElement('img');
    modalTitleImage.style = "width: 20px;height: 20px;margin-right: 4px;";
    modalTitleImage.src = "/preview/img/content.jpg";

    modalTitleText = document.createElement('span');
    modalTitleText.innerHTML = 'Title';

    modalTitle.appendChild(modalTitleImage);
    modalTitle.appendChild(modalTitleText);
    modalWindowButton = document.createElement('div');
    modalWindowButton.id = 'modalWindow123';
    modalWindowButton.className = 'region-edit-modal-window-button sh-col';
    modalWindowButton.style = 'padding-right: 10px;';
    modalWindowButton.innerHTML = "<img src='/preview/img/window-maximize.png'>";
    modalWindowButton.setAttribute("onclick", "shPreviewEditMaximize()");


    modalCloseButton = document.createElement('div');
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
    document.getElementById("mainDiv123").remove();

}
function shPreviewSettings() {
    console.log("shPreviewSettings");
}
function collapseMenu() {
    console.log("collapseMenu");
    var footerMenu = document.getElementById('shfootermenu');
    var left = footerMenu.style.left;
    console.log(left);
    if (left == '0px') {
        console.log("0px");
        footerMenu.style = 'animation-duration: 3s;animation-name: menuCollapse;left:100%';
    } else {
        console.log("else 0px");
        footerMenu.style = 'animation-duration: 3s;animation-name: menuExpand;left:0px';
    }
}

function shPreviewEditMaximize() {
    var mainDiv = document.getElementById('mainDiv123');
    var modalContent = document.getElementById('modalContent123');
    mainDiv.style = 'padding-top:0px';
    modalContent.style = 'width: 100%;height: 100%;';
    var modalWindowButton = document.getElementById('modalWindow123');
    modalWindowButton.innerHTML = "<img src='/preview/img/window-unmaximize.png'>";
    modalWindowButton.setAttribute("onclick", "shPreviewEditUnMaximize()");
}

function shPreviewEditUnMaximize() {
    var mainDiv = document.getElementById('mainDiv123');
    var modalContent = document.getElementById('modalContent123');
    mainDiv.style = 'padding-top:100px';
    modalContent.style = 'width: 80%;height: 90%;';
    var modalWindowButton = document.getElementById('modalWindow123');
    modalWindowButton.innerHTML = "<img src='/preview/img/window-maximize.png'>";
    modalWindowButton.setAttribute("onclick", "shPreviewEditMaximize()");
}

function shPreviewPageMenu() {
    var shMenuSections = document.getElementById('shMenuSections');
    shMenuSections.innerHTML = `
    <div class="sh-block sh-button" onclick="shPreviewMainMenu()">&lsaquo; Page</div>
    <div class="sh-block sh-menuItem sh-sub-menu-item-main" onclick="shPreviewComponentList()" style="position:relative">Component
    <div class="sh-sub-menu-item">
    <ul style="list-style-type: none;padding:10px;text-align:left">
    <li style="margin-bottom: 10px;"><img id="text_component" draggable="true" ondragstart="drag(event)" src="/preview/img/text_component.png"/> Text</li>
    <li style="margin-bottom: 10px;"><img id="image_component" draggable="true" ondragstart="drag(event)" src="/preview/img/image_component.png"/> Image</li>
    <li style="margin-bottom: 10px;"><img id="list_component" draggable="true" ondragstart="drag(event)" src="/preview/img/list_component.png"/> List</li>
    </ul>
    </div></div>
    `;
    var regions = document.getElementsByClassName('regionMenu');
    Array.prototype.forEach.call(regions, function (region) {
        region.innerHTML = `<div style="float: right;display: inline-block;" class="row">
            <div class=" block region-menu">
                <div class="row region-menu-inner">
                    <div class="region-menu-item">

                        <img src="/preview/img/pencil.png" onClick="shPreviewEditOpen();" class="region-menu-item-icon">
                    </div>
                    <div class="region-menu-item">
                        <img src="/preview/img/settings.png" onClick="shPreviewSettings();"
                            class="region-menu-item-icon">
                    </div>
                </div>
            </div>
        </div>`;
    });


}
function shPreviewDesignMenu() {
    var shMenuSections = document.getElementById('shMenuSections');
    shMenuSections.innerHTML = '<div class="sh-block sh-button" onclick="shPreviewMainMenu()">&lsaquo; Design</div>';
}

function shPreviewMainMenu() {
    var shMenuSections = document.getElementById('shMenuSections');
    shMenuSections.innerHTML = `
    <div class="sh-block sh-button" onclick="shPreviewPageMenu()">Page</div>
    <div class="sh-block sh-button" onclick="shPreviewDesignMenu()">Design</div>
    `;

    var regions = document.getElementsByClassName('regionMenu');
    Array.prototype.forEach.call(regions, function (region) {
        region.innerHTML = '';
    });
}

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var item = document.createElement('div');
    item.innerHTML = data;
    
    ev.target.appendChild(item);
  }