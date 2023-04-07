const information = document.getElementById('info');
information.innerText = `本应用正在使用 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), 和 Electron (v${versions.electron()})`;

const btn = document.getElementById('btn');
btn.addEventListener('click', async () => {
    const response = await window.versions.ping();
    console.log(response) // 打印 'pong'
})

// 虽然共享一个window对象 但是无法获取到preload上定义在window上的变量
console.log(window.userName, 'userName');
// 通过 contextBridge 传递的变量可以获取到
console.log(window.userInfo.userName); // guoguo

const titleInput = document.getElementById('title');
const setBtn = document.getElementById('setTitle');

setBtn.addEventListener('click', () => {
    const title = titleInput.value;
    window.electronAPI.setTitle(title);
})

const openBtn = document.getElementById('openBtn');
const filePathElement = document.getElementById('filePath');

openBtn.addEventListener('click', async () => {
    filePathElement.innerText = await window.electronAPI.openFile();
})
