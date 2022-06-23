//#region  Elements
const personalLink = document.getElementById('personalLink');
const personalChat = document.getElementById('personalChat');
const groupLink = document.getElementById('groupLink');
const groupChat = document.getElementById('groupChat');

const startChat = document.getElementById('startChat');
const chatPersonalDetail = document.getElementById('chat__personal__detail');
const chatGroupDetail = document.getElementById('chat__group__detail');
const findMember = document.getElementById('findMember');
const findMemberIcon = document.getElementById('findMemberIcon');
//#endregion

//#region Utils
function hideElement(elements) {
  elements.forEach((element) => {
    element.classList.add('d-none');
  });
}

function showElement(elements) {
  elements.forEach((element) => {
    element.classList.remove('d-none');
  });
}

function removeActive(classActiveName) {
  const element = document.querySelector(`.${ classActiveName }`);
  if (element) {
    element.classList.remove(classActiveName);
  }
}

function activeElement(element, activeClassName) {
  element.classList.add(activeClassName);
}

function handleItemChatClick(element, hideItems, showItems, activeClassName) {
  return () => {
    hideElement(hideItems);
    showElement(showItems);
    removeActive(activeClassName);
    activeElement(element, activeClassName);
  };
}

function setActiveUser(element, userNameClassName, usernameElementId, avatarElementClassName, avatarElementId) {
  const userNameEle = element.querySelector(userNameClassName);
  const avatarEle = element.querySelector(avatarElementClassName);
  if (userNameEle && avatarEle) {
    const name = userNameEle.innerText;
    const src = avatarEle.getAttribute('src');
    const usernameDetailEle = document.getElementById(usernameElementId);
    const avatarDetailEle = document.getElementById(avatarElementId);
    if (usernameDetailEle && avatarDetailEle) {
      usernameDetailEle.innerText = name;
      avatarDetailEle.setAttribute('src', src);
    }
  }
}
//#endregion

//#region Chat Section Item Click
personalLink.addEventListener('click', function () {
  handleItemChatClick(this, [groupChat], [personalChat], 'chat__section--active')();
});

groupLink.addEventListener('click', function () {
  handleItemChatClick(this, [personalChat], [groupChat], 'chat__section--active')();
});
//#endregion


//#region Handle Click chat item
const chatPersonItems = document.querySelectorAll('#personalChat .list-group-item');
chatPersonItems.forEach((item) => {
  item.addEventListener('click', function () {
    handleItemChatClick(this, [chatGroupDetail, startChat, findMember], [chatPersonalDetail], 'list-group-item--active')();
    setActiveUser(this, '.chat__item__user__name', 'chat__personal__detail__username', '.chat__item__avatar img', 'chat__personal__detail__avatar');
  });
});

const chatGroupItems = document.querySelectorAll('#groupChat .list-group-item');
chatGroupItems.forEach((item) => {
  item.addEventListener('click', function () {
    handleItemChatClick(this, [chatPersonalDetail, startChat, findMember], [chatGroupDetail], 'list-group-item--active')();
    setActiveUser(this, '.chat__item__user__name', 'chat__group__detail__username', '.chat__item__avatar img', 'chat__group__detail__avatar');
  });
});
//#endregion


//#region Handle Find Member To Chat
findMemberIcon.addEventListener('click', function () {
  hideElement([startChat, chatGroupDetail, chatPersonalDetail]);
  showElement([findMember]);
  removeActive('list-group-item--active');
});

