const Settings = () => {
  const app = document.getElementById('app')
  const setting = document.getElementById('setting')
  setting.addEventListener('click', () => {
   app.innerHTML = `
    <div class="setting">
      <div class="controls">
      
      
      </div>
    </div>`;
  })
}
export default Settings;